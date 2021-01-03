import { LitElement, html, customElement, property, TemplateResult /*, PropertyValues*/ } from 'lit-element';
import { HomeAssistant, handleAction, LovelaceCardEditor, domainIcon, computeDomain } from 'custom-card-helpers';

import './editor';

import { List2BarsCardConfig } from './types';
import { actionHandler } from './action-handler-directive';
import { CARD_VERSION } from './const';
import { localize } from './localize/localize';
import { mergeDeep } from './helpers';
import { styles } from './styles';

/* eslint no-console: 0 */
console.info(
  `%c  LIST2BARS-CARD \n%c  ${localize('common.version')} ${CARD_VERSION}    `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray',
);

@customElement('list2bars-card')
export class List2BarsCard extends LitElement {
  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    return document.createElement('list2bars-card-editor') as LovelaceCardEditor;
  }

  public static getStubConfig(): object {
    return {};
  }

  @property() public hass?: HomeAssistant;
  @property() private _config!: List2BarsCardConfig;
  @property() private _tooltip!: any;

  public setConfig(config: List2BarsCardConfig): void {
    if (!config) {
      throw new Error(localize('common.invalid_configuration'));
    }

    this._config = mergeDeep(
      {
        background: true,
        color: 'var(--list2bars-card-color, var(--primary-color))',
        color_background: true,
        direction: 'right',
        max: 100,
        min: 0,
        positions: {
          icon: 'on',
          name: 'on',
          value: 'on',
        },
      },
      config,
    );

    this._tooltip = {};
  }

  private getUnitOfMeasurement(): string {
    // Check for configured unit of measurement otherwise use attribute value.
    const config = this._config;
    const state = this.hass!.states[config.entity];

    let unitOfMeasurement;
    if (isNaN(Number(state.state))) {
      unitOfMeasurement = '';
    } else {
      if (config.unit_of_measurement) {
        unitOfMeasurement = config.unit_of_measurement;
      } else {
        unitOfMeasurement = state.attributes.unit_of_measurement;
      }
    }

    return unitOfMeasurement;
  }

  protected render(): TemplateResult | void {
    if (!this._config || !this.hass) {
      return html``;
    }

    let icon;
    const config = this._config;
    const state = this.hass!.states[config.entity];

    if (!state) {
      return html`
        <ha-card>
          <div
            style="display: block;
      color: black;
      background-color: #fce588;
      padding: 8px;"
          >
            ${localize('common.entity_not_available')}: ${config.entity}
          </div>
        </ha-card>
      `;
    }

    if (!(config.positions.icon == 'off')) {
      if (config.icon) {
        icon = config.icon;
      } else if (state.attributes.icon) {
        icon = state.attributes.icon;
      } else {
        icon = domainIcon(computeDomain(config.entity));
      }
    }

    const tooltipdisp =
      config.direction == 'up'
        ? html`
            <div class="states flex">
              <div class="state">
                ${config.positions.value == 'on'
                  ? html`
                      <span class="state__value ellipsis"
                        >${this._tooltip.state ? this._tooltip.state : state.state}</span
                      >
                      <span class="state__uom ellipsis">${this.getUnitOfMeasurement()}</span>
                    `
                  : null}
                <div class="state__name">
                  <span>${config.positions.name != 'on' ? null : this._tooltip.name ? this._tooltip.name : null}</span>
                </div>
              </div>
            </div>
          `
        : '';

    return html`
      <ha-card style="${config.background === false ? 'background: #0000; box-shadow: none;' : ''}">
        <div
          class="header flex"
          loc="undefined"
          style="font-size: 14px;"
          @action=${this._handleAction}
          .config=${config}
          .actionHandler=${actionHandler({})}
        >
          <div class="name flex">
            <span class="ellipsis">${config.title ? config.title : null}</span>
          </div>
          <div class="icon">
            <ha-icon icon="${icon}"></ha-icon>
          </div>
        </div>

        ${tooltipdisp}

        <div
          id="states"
          class="card-content"
          style="${config.background === false ? 'padding: 0px;' : ''} ${config.direction == 'up'
            ? 'flex-direction: row'
            : 'flex-grow: 0;'}"
        >
          ${this._createBarArray()}
        </div>
      </ha-card>
      ${styles}
    `;
  }

  private _createBarArray(): TemplateResult[] {
    const config = this._config;
    const state = this.hass!.states[config.entity];

    // Create array containing number of bars per row.
    const columnsArray: any[] = [];

    // Check for configured name otherwise use friendly name.
    const name = config.name ? config.name : state.attributes.friendly_name;
    // If attribute is defined use attribute value as bar value.
    if (config.attribute) {
      if (typeof state.attributes[config.attribute] == 'number') {
        columnsArray.push({ name: name, state: state.attributes[config.attribute] });
      } else {
        for (const item in state.attributes[config.attribute]) {
          // Parse list
          const cstate = state.attributes[config.attribute][item];
          columnsArray.push({ name: item, state: cstate });
          if (!isNaN(Number(cstate))) {
            config.max = Math.max(cstate, config.max);
          }
        }
      }
    } else {
      columnsArray.push({ name: name, state: state.state });
    }

    // For each row add contained bars based on columnsArray.
    // Compute indexes start and end
    let indexEnd = config.index_to ? Number(config.index_to) : columnsArray.length;
    if (indexEnd < 0) {
      // Stop before specified number
      indexEnd += columnsArray.length;
    } else if (indexEnd > columnsArray.length) {
      // Don't show more than available data
      indexEnd = columnsArray.length;
    } else if (indexEnd == 0) {
      // Show at least firt data
      indexEnd = 1;
    }
    let indexStart = config.index_from ? Number(config.index_from) - 1 : 0;
    if (indexStart < 0) {
      // Count down from the end
      indexStart += columnsArray.length + 1;
    } else if (indexStart >= indexEnd) {
      // Show at least the last data
      indexStart = indexEnd - 1;
    }
    if (indexStart >= indexEnd) {
      return [
        html`
          <div class="warning" style="margin-bottom: 8px;">
            Nothing to display, check From and To indexes
          </div>
        `,
      ];
    }

    const currentRowArray: TemplateResult[] = [];
    for (let index = indexStart; index < indexEnd; index++) {
      /* if (!columnsArray[index].state) {
        currentRowArray.push(html`
          <div class="warning" style="margin-bottom: 8px;">
            ${localize('common.entity_not_available')}: ${config.entity}
          </div>
        `);
        continue;
      } */

      let entityState = columnsArray[index].state;

      // Continue if severity hide is defined.
      if (config.severity) {
        if (this._computeSeverityVisibility(entityState)) {
          continue;
        }
      }

      // If limit_value is defined limit the displayed value to min and max.
      if (config.limit_value) {
        entityState = Math.min(entityState, config.max);
        entityState = Math.max(entityState, config.min);
      }

      // If decimal is defined check if NaN and apply number fix.
      if (!isNaN(Number(entityState))) {
        if (config.decimal == 0) entityState = Number(entityState).toFixed(0);
        else if (config.decimal) entityState = Number(entityState).toFixed(config.decimal);
      }

      // Defined height and check for configured height.
      let barHeight = 40;
      if (config.height) barHeight = Number(config.height);

      // Set style variables based on direction.
      let backgroundMargin = '0px 0px 0px 13px';
      let barDirection = 'right';
      let flexDirection = 'row';

      if (config.direction == 'up') {
        backgroundMargin = '0px';
        barDirection = 'top';
        flexDirection = 'column-reverse';
      }

      // Set name html based on position.
      const name = columnsArray[index].name;
      const nameInside =
        config.direction == 'right'
          ? config.positions.name == 'on'
            ? html`
                <list2bars-card-name>${name}</list2bars-card-name>
              `
            : null
          : null;

      // Set value html based on position.
      const valueInside =
        config.direction == 'right'
          ? config.positions.value == 'on'
            ? html`
                <list2bars-card-value class="value-direction-right"
                  >${config.complementary ? config.max - entityState : entityState}
                  ${this.getUnitOfMeasurement()}</list2bars-card-value
                >
              `
            : null
          : null;

      // Set bar color.
      const barColor = this._computeBarColor(entityState);

      // Set bar percent based on value
      const barPercent = this._computePercent(entityState);

      // Add current bar to row array.
      let color_background;
      if (config.color_background) {
        color_background = html`
          <list2bars-card-backgroundbar style="--bar-color: ${barColor}"></list2bars-card-backgroundbar>
        `;
      }

      currentRowArray.push(html`
        <list2bars-card-card
          style="flex-direction: ${flexDirection}; align-items: stretch"
          @mouseover=${() => this.setTooltip(name, entityState)}
          @mouseout=${() => (this._tooltip = {})}
        >
          <list2bars-card-background
            style="margin: ${backgroundMargin}; height: ${barHeight}${typeof barHeight == 'number' ? 'px' : ''};"
          >
            ${color_background}
            <list2bars-card-currentbar
              style="--bar-color: ${barColor}; --bar-percent: ${barPercent}%; --bar-direction: ${barDirection}"
            ></list2bars-card-currentbar>

            <list2bars-card-contentbar
              class="${config.direction == 'up' ? 'contentbar-direction-up' : 'contentbar-direction-right'}"
            >
              ${nameInside} ${valueInside}
            </list2bars-card-contentbar>
          </list2bars-card-background>
        </list2bars-card-card>
      `);
    }

    return currentRowArray;
  }

  private _computeBarColor(value: string): string {
    const config = this._config;
    let barColor;
    if (config.severity) {
      barColor = this._computeSeverityColor(value);
    } else if (value == 'unavailable') {
      barColor = `var(--list2bars-card-disabled-color, ${config.color})`;
    } else {
      barColor = config.color;
    }
    return barColor;
  }

  private _computeSeverityColor(value: string): unknown {
    const config = this._config;
    const numberValue = Number(value);
    const sections = config.severity;
    let color: undefined | string;

    if (isNaN(numberValue)) {
      sections.forEach(section => {
        if (value == section.text) {
          color = section.color;
        }
      });
    } else {
      sections.forEach(section => {
        if (numberValue >= section.from && numberValue <= section.to) {
          color = section.color;
        }
      });
    }

    if (color == undefined) color = config.color;
    return color;
  }

  private _computeSeverityVisibility(value: string): boolean {
    const config = this._config;
    const numberValue = Number(value);
    const sections = config.severity;
    let hide = false;

    if (isNaN(numberValue)) {
      sections.forEach(section => {
        if (value == section.text) {
          hide = section.hide;
        }
      });
    } else {
      sections.forEach(section => {
        if (numberValue >= section.from && numberValue <= section.to) {
          hide = section.hide;
        }
      });
    }
    return hide;
  }

  private _computePercent(value: string): number {
    const config = this._config;
    const numberValue = Number(value);

    if (value == 'unavailable') return 0;
    if (isNaN(numberValue)) return 100;

    return (100 * (numberValue - config.min)) / (config.max - config.min);
  }

  private _handleAction(ev): void {
    if (this.hass && ev.target.config && ev.detail.action) {
      handleAction(this, this.hass, ev.target.config, ev.detail.action);
    }
  }

  setTooltip(name, state): void {
    this._tooltip = { name: name, state: state };
  }

  getCardSize(): number {
    if (this._config.height) {
      const heightString = this._config.height.toString();
      const cardSize = Math.trunc(Number(heightString.replace('px', '')) / 50);
      return cardSize + 1;
    } else {
      return 2;
    }
  }
}
