import { LitElement, html, customElement, property, TemplateResult, CSSResult, css, PropertyValues } from 'lit-element';
import { HomeAssistant, fireEvent, LovelaceCardEditor, ActionConfig } from 'custom-card-helpers';

import { List2BarsCardConfig } from './types';
import { arrayMove } from './helpers';

@customElement('list2bars-card-editor')
export class List2BarsCardEditor extends LitElement implements LovelaceCardEditor {
  @property() public hass?: HomeAssistant;
  @property() private _config;
  @property() private _toggle?: boolean;
  private _options: any;

  public setConfig(config: List2BarsCardConfig): void {
    this._config = { ...config };

    if (!config.entity) {
      this._config.entity = '';
    }

    fireEvent(this, 'config-changed', { config: this._config });

    const barOptions = {
      icon: 'format-list-numbered',
      name: 'Bar',
      secondary: 'Bar settings.',
      show: false,
    };

    const valueOptions = {
      icon: 'numeric',
      name: 'Value',
      secondary: 'Value settings.',
      show: false,
    };

    const cardOptions = {
      icon: 'card-bulleted',
      name: 'Card',
      secondary: 'Card settings.',
      show: false,
    };

    const positionsOptions = {
      icon: 'tooltip-check-outline',
      name: 'Display',
      secondary: 'Display or not informations.',
      show: false,
    };

    const severityOptions = {
      icon: 'exclamation-thick',
      name: 'Severity',
      secondary: 'Define bar colors based on value.',
      show: false,
    };

    const entityOptions = {
      icon: 'animation',
      name: 'Entity',
      secondary: 'Define entity settings.',
      show: false,
    };

    if (!this._options) {
      this._options = {
        entity: {
          icon: 'tune',
          name: 'Entity',
          secondary: 'Manage card entity.',
          show: true,
          options: {
            entity: entityOptions,
          },
        },
        appearance: {
          icon: 'palette',
          name: 'Appearance',
          secondary: 'Customize the global name, icon, etc.',
          show: false,
          options: {
            positions: positionsOptions,
            bar: barOptions,
            value: valueOptions,
            card: cardOptions,
            severity: severityOptions,
          },
        },
      };
    }
  }

  protected render(): TemplateResult | void {
    return html`
      ${this._createEntityElement()} ${this._createAppearanceElement()}
    `;
  }

  private _createActionsElement(): TemplateResult {
    const options = this._options.entity.options.actions;
    return html`
      <div class="sub-category" style="opacity: 0.5;">
        <div>
          <div class="row">
            <ha-icon .icon=${`mdi:${options.icon}`}></ha-icon>
            <div class="title">${options.name}</div>
          </div>
          <div class="secondary">${options.secondary}</div>
        </div>
      </div>
    `;
    return html``;
  }

  private _createEntityElement(): TemplateResult {
    if (!this.hass || !this._config) {
      return html`
        <div class="card-config"></div>
      `;
    }
    const options = this._options.entity;

    return html`
      <div class="card-config">
        <div class="option" @click=${this._toggleThing} .options=${options} .optionsTarget=${this._options}>
          <div class="row">
            <ha-icon .icon=${`mdi:${options.icon}`}></ha-icon>
            <div class="title">${options.name}</div>
            <ha-icon .icon=${options.show ? `mdi:chevron-up` : `mdi:chevron-down`} style="margin-left: auto;"></ha-icon>
          </div>
          <div class="secondary">${options.secondary}</div>
        </div>
        ${options.show
          ? html`
              <div class="card-background" style="max-height: 400px; overflow: auto;">
                <div class="sub-category" style="display: flex; flex-direction: row; align-items: center;">
                  <div style="display: flex; align-items: center; flex-direction: column;">
                    <div
                      style="font-size: 10px; margin-bottom: -8px; opacity: 0.5;"
                      @click=${this._toggleThing}
                      .options=${options.options.entity}
                      .optionsTarget=${options.entity}
                      .index=${0}
                    ></div>
                  </div>
                  <div class="value" style="flex-grow: 1;">
                    <ha-entity-picker
                      label="Entity"
                      allow-custom-entity
                      .hass=${this.hass}
                      @value-changed=${this._valueChanged}
                      .value=${this._config.entity}
                      editable
                      .configAttribute=${'entity'}
                      .configObject=${this._config}
                    >
                    </ha-entity-picker>
                    <paper-input
                      label="Attribute"
                      @value-changed=${this._valueChanged}
                      .value="${this._config.attribute ? this._config.attribute : ''}"
                      editable
                      .configAttribute=${'attribute'}
                      .configObject=${this._config}
                    ></paper-input>
                    <paper-input
                      class="value-number"
                      type="number"
                      label="From index"
                      .value="${this._config.index_from ? this._config.index_from : ''}"
                      editable
                      .configAttribute=${'index_from'}
                      .configObject=${this._config}
                      @value-changed=${this._valueChanged}
                    ></paper-input>
                    <paper-input
                      class="value-number"
                      type="number"
                      label="To index"
                      .value="${this._config.index_to ? this._config.index_to : ''}"
                      editable
                      .configAttribute=${'index_to'}
                      .configObject=${this._config}
                      @value-changed=${this._valueChanged}
                    ></paper-input>
                  </div>
                </div>
              </div>
            `
          : ''}
      </div>
    `;
  }

  private _createAppearanceElement(): TemplateResult {
    if (!this.hass) {
      return html``;
    }
    const options = this._options.appearance;
    return html`
        <div class="option" @click=${this._toggleThing} .options=${options} .optionsTarget=${this._options}>
          <div class="row">
            <ha-icon .icon=${`mdi:${options.icon}`}></ha-icon>
            <div class="title">${options.name}</div>
            <ha-icon
              .icon=${options.show ? `mdi:chevron-up` : `mdi:chevron-down`}
              style="margin-left: auto;"
            ></ha-icon>
          </div>
          <div class="secondary">${options.secondary}</div>
        </div>
        ${
          options.show
            ? html`
                <div class="card-background">
                  ${this._createCardElement()} ${this._createBarElement()} ${this._createValueElement()}
                  ${this._createDisplayElement()} ${this._createSeverityElement()}
                </div>
              `
            : ''
        }
      </div>`;
  }

  private _createBarElement(): TemplateResult {
    const options = this._options.appearance.options.bar;
    const config = this._config;

    return html`
      <div class="category" id="bar">
        <div
          class="sub-category"
          @click=${this._toggleThing}
          .options=${options}
          .optionsTarget=${this._options.appearance.options}
        >
          <div class="row">
            <ha-icon .icon=${`mdi:${options.icon}`}></ha-icon>
            <div class="title">${options.name}</div>
            <ha-icon .icon=${options.show ? `mdi:chevron-up` : `mdi:chevron-down`} style="margin-left: auto;"></ha-icon>
          </div>
          <div class="secondary">${options.secondary}</div>
        </div>
        ${options.show
          ? html`
              <div class="value">
                <div>
                  <paper-dropdown-menu
                    label="Direction"
                    @selected-item-changed=${this._valueChanged}
                    .configObject=${config}
                    .configAttribute=${'direction'}
                    .ignoreNull=${true}
                  >
                    <paper-listbox
                      slot="dropdown-content"
                      attr-for-selected="item-name"
                      selected="${config.direction ? config.direction : null}"
                    >
                      <paper-item item-name="right">right</paper-item>
                      <paper-item item-name="up">up</paper-item>
                    </paper-listbox>
                  </paper-dropdown-menu>
                  ${config.direction
                    ? html`
                        <ha-icon
                          class="ha-icon-large"
                          icon="mdi:close"
                          @click=${this._valueChanged}
                          .value=${''}
                          .configAttribute=${'direction'}
                          .configObject=${config}
                        ></ha-icon>
                      `
                    : ''}
                </div>
                <paper-input
                  label="Icon"
                  .value="${config.icon ? config.icon : ''}"
                  editable
                  .configAttribute=${'icon'}
                  .configObject=${config}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <paper-input
                  label="Height"
                  .value="${config.height ? config.height : ''}"
                  editable
                  .configAttribute=${'height'}
                  .configObject=${config}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <paper-input
                  label="Color"
                  .value="${config.color ? config.color : ''}"
                  editable
                  .configAttribute=${'color'}
                  .configObject=${config}
                  @value-changed=${this._valueChanged}
                ></paper-input>
              </div>
            `
          : ''}
      </div>
    `;
  }

  private _createSeverityElement(): TemplateResult {
    const options = this._options.appearance.options.severity;
    const config = this._config;

    return html`
      <div class="category" id="bar">
        <div
          class="sub-category"
          @click=${this._toggleThing}
          .options=${options}
          .optionsTarget=${this._options.appearance.options}
        >
          <div class="row">
            <ha-icon .icon=${`mdi:${options.icon}`}></ha-icon>
            <div class="title">${options.name}</div>
            <ha-icon .icon=${options.show ? `mdi:chevron-up` : `mdi:chevron-down`} style="margin-left: auto;"></ha-icon>
          </div>
          <div class="secondary">${options.secondary}</div>
        </div>
        ${options.show
          ? html`
              <div class="card-background" style="overflow: auto; max-height: 420px;">
                ${this._createSeverityValues()}
                <div class="sub-category" style="display: flex; flex-direction: column; align-items: flex-end;">
                  <ha-icon icon="mdi:plus" @click=${this._addSeverity}></ha-icon>
                </div>
              </div>
            `
          : ''}
      </div>
    `;
  }

  private _createSeverityValues(): TemplateResult[] {
    const config = this._config;

    const severityValuesArray: TemplateResult[] = [];
    if (!config.severity) {
      return severityValuesArray;
    }

    for (const severity of config.severity) {
      const severityIndex = config.severity.indexOf(severity);
      severityValuesArray.push(html`
        <div class="sub-category" style="display: flex; flex-direction: row; align-items: center;">
          <div class="value">
            <div style="display:flex;">
              <paper-input
                label="From"
                type="number"
                .value="${severity.from || severity.from === 0 ? severity.from : ''}"
                editable
                .severityAttribute=${'from'}
                .severityIndex=${severityIndex}
                @value-changed=${this._updateSeverity}
              ></paper-input>
              <paper-input
                label="To"
                type="number"
                .value="${severity.to ? severity.to : ''}"
                editable
                .severityAttribute=${'to'}
                .severityIndex=${severityIndex}
                @value-changed=${this._updateSeverity}
              ></paper-input>
            </div>
            <div style="display:flex;">
              <paper-input
                label="Color"
                .value="${severity.color ? severity.color : ''}"
                editable
                .severityAttribute=${'color'}
                .severityIndex=${severityIndex}
                @value-changed=${this._updateSeverity}
              ></paper-input>
            </div>
            Hide bar if conditions are met&nbsp;
            ${severity.hide
              ? html`
                  <ha-switch
                    checked
                    .severityAttribute=${'hide'}
                    .severityIndex=${severityIndex}
                    .value=${!severity.hide}
                    @change=${this._updateSeverity}
                  ></ha-switch>
                `
              : html`
                  <ha-switch
                    unchecked
                    .severityAttribute=${'hide'}
                    .severityIndex=${severityIndex}
                    .value=${!severity.hide}
                    @change=${this._updateSeverity}
                  ></ha-switch>
                `}
          </div>
          <div style="display: flex;">
            ${severityIndex !== 0
              ? html`
                  <ha-icon
                    class="ha-icon-large"
                    icon="mdi:arrow-up"
                    @click=${this._moveSeverity}
                    .configDirection=${'up'}
                    .severityIndex=${severityIndex}
                  ></ha-icon>
                `
              : html`
                  <ha-icon icon="mdi:arrow-up" style="opacity: 25%;" class="ha-icon-large"></ha-icon>
                `}
            ${severityIndex !== config.severity.length - 1
              ? html`
                  <ha-icon
                    class="ha-icon-large"
                    icon="mdi:arrow-down"
                    @click=${this._moveSeverity}
                    .configDirection=${'down'}
                    .severityIndex=${severityIndex}
                  ></ha-icon>
                `
              : html`
                  <ha-icon icon="mdi:arrow-down" style="opacity: 25%;" class="ha-icon-large"></ha-icon>
                `}
            <ha-icon
              class="ha-icon-large"
              icon="mdi:close"
              @click=${this._removeSeverity}
              .severityIndex=${severityIndex}
            ></ha-icon>
          </div>
        </div>
      `);
    }
    return severityValuesArray;
  }

  private _createCardElement(): TemplateResult {
    if (!this.hass) {
      return html``;
    }
    const config: any = this._config;
    // ALX const index = null;
    const options = this._options.appearance.options.card;
    return html`
      <div class="category" id="card">
        <div
          class="sub-category"
          @click=${this._toggleThing}
          .options=${options}
          .optionsTarget=${this._options.appearance.options}
        >
          <div class="row">
            <ha-icon .icon=${`mdi:${options.icon}`}></ha-icon>
            <div class="title">${options.name}</div>
            <ha-icon .icon=${options.show ? `mdi:chevron-up` : `mdi:chevron-down`} style="margin-left: auto;"></ha-icon>
          </div>
          <div class="secondary">${options.secondary}</div>
        </div>
        ${options.show
          ? html`
              <div class="value-container">
                <paper-input
                  editable
                  label="Header Title"
                  .value="${config.title ? config.title : ''}"
                  .configObject=${config}
                  .configAttribute=${'title'}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <div>
                  Card Background&nbsp;
                  ${html`
                    <ha-switch
                      .checked=${!(config.background === false)}
                      .configAttribute=${'background'}
                      .configObject=${config}
                      .value=${config.background === false}
                      .ignoreNull=${false}
                      @change=${this._valueChanged}
                    ></ha-switch>
                  `}
                </div>
                <div>
                  Color Bar Background&nbsp;
                  ${html`
                    <ha-switch
                      .checked=${!(config.color_background === false)}
                      .configAttribute=${'color_background'}
                      .configObject=${config}
                      .value=${config.color_background === false}
                      .ignoreNull=${false}
                      @change=${this._valueChanged}
                    ></ha-switch>
                  `}
                </div>
              </div>
            `
          : ''}
      </div>
    `;
  }

  private _createDisplayValues(): TemplateResult[] {
    const defaultPositions = {
      icon: 'on',
      name: 'on',
      value: 'on',
    };
    const config = this._config;

    config.positions = { ...config.positions };
    const positionElementsArray: TemplateResult[] = [];
    const objectKeys = Object.keys(defaultPositions);
    for (const position of objectKeys) {
      //if (config.positions[position]) {
      positionElementsArray.push(html`
        <div class="value">
          <paper-dropdown-menu
            label="${position}"
            @value-changed=${this._valueChanged}
            .configAttribute=${position}
            .configObject=${config.positions}
            .ignoreNull=${true}
          >
            <paper-listbox
              slot="dropdown-content"
              attr-for-selected="item-name"
              .selected=${config.positions[position]}
            >
              <paper-item item-name="on">on</paper-item>
              <paper-item item-name="off">off</paper-item>
            </paper-listbox>
          </paper-dropdown-menu>
          <ha-icon
            class="ha-icon-large"
            icon="mdi:close"
            @click=${this._valueChanged}
            .value=${''}
            .configAttribute=${position}
            .configObject=${config.positions}
          ></ha-icon>
        </div>
      `);
      //}
    }
    return positionElementsArray;
  }

  private _createDisplayElement(): TemplateResult {
    if (!this.hass) {
      return html``;
    }

    const options = this._options.appearance.options.positions;

    return html`
      <div class="category">
        <div
          class="sub-category"
          @click=${this._toggleThing}
          .options=${options}
          .optionsTarget=${this._options.appearance.options}
        >
          <div class="row">
            <ha-icon .icon=${`mdi:${options.icon}`}></ha-icon>
            <div class="title">${options.name}</div>
            <ha-icon .icon=${options.show ? `mdi:chevron-up` : `mdi:chevron-down`} style="margin-left: auto;"></ha-icon>
          </div>
          <div class="secondary">${options.secondary}</div>
        </div>
        ${options.show
          ? html`
              ${this._createDisplayValues()}
            `
          : ``}
      </div>
    `;
  }

  private _createValueElement(): TemplateResult {
    if (!this.hass) {
      return html``;
    }

    const options = this._options.appearance.options.value;
    const config = this._config;

    return html`
      <div class="category" id="value">
        <div
          class="sub-category"
          @click=${this._toggleThing}
          .options=${options}
          .optionsTarget=${this._options.appearance.options}
        >
          <div class="row">
            <ha-icon .icon=${`mdi:${options.icon}`}></ha-icon>
            <div class="title">${options.name}</div>
            <ha-icon .icon=${options.show ? `mdi:chevron-up` : `mdi:chevron-down`} style="margin-left: auto;"></ha-icon>
          </div>
          <div class="secondary">${options.secondary}</div>
        </div>
        ${options.show
          ? html`
              <div class="value">
                Limit Values to min/max&nbsp;
                ${config.limit_value
                  ? html`
                      <ha-switch
                        checked
                        .configAttribute=${'limit_value'}
                        .configObject=${config}
                        .value=${!config.limit_value}
                        @change=${this._valueChanged}
                      ></ha-switch>
                    `
                  : html`
                      <ha-switch
                        unchecked
                        .configObject=${config}
                        .configAttribute=${'limit_value'}
                        .value=${!config.limit_value}
                        @change=${this._valueChanged}
                      ></ha-switch>
                    `}
              </div>
              <div class="value">
                Display Complementary (max - state)&nbsp;
                ${config.complementary
                  ? html`
                      <ha-switch
                        checked
                        .configAttribute=${'complementary'}
                        .configObject=${config}
                        .value=${!config.complementary}
                        @change=${this._valueChanged}
                      ></ha-switch>
                    `
                  : html`
                      <ha-switch
                        unchecked
                        .configObject=${config}
                        .configAttribute=${'complementary'}
                        .value=${!config.complementary}
                        @change=${this._valueChanged}
                      ></ha-switch>
                    `}
                <paper-input
                  class="value-number"
                  label="Decimal"
                  type="number"
                  .value="${config.decimal ? config.decimal : ''}"
                  editable
                  .configAttribute=${'decimal'}
                  .configObject=${config}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <paper-input
                  class="value-number"
                  type="number"
                  label="Min"
                  .value="${config.min ? config.min : ''}"
                  editable
                  .configAttribute=${'min'}
                  .configObject=${config}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <paper-input
                  class="value-number"
                  type="number"
                  label="Max"
                  .value="${config.max ? config.max : ''}"
                  editable
                  .configAttribute=${'max'}
                  .configObject=${config}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <paper-input
                  label="Unit of Measurement"
                  .value="${config.unit_of_measurement ? config.unit_of_measurement : ''}"
                  editable
                  .configAttribute=${'unit_of_measurement'}
                  .configObject=${config}
                  @value-changed=${this._valueChanged}
                ></paper-input>
              </div>
            `
          : ''}
      </div>
    `;
  }

  private _toggleThing(ev): void {
    const options = ev.target.options;
    const show = !options.show;
    if (ev.target.optionsTarget) {
      if (Array.isArray(ev.target.optionsTarget)) {
        for (const options of ev.target.optionsTarget) {
          options.show = false;
        }
      } else {
        for (const [key] of Object.entries(ev.target.optionsTarget)) {
          ev.target.optionsTarget[key].show = false;
        }
      }
    }
    options.show = show;
    this._toggle = !this._toggle;
  }

  private _addSeverity(ev): void {
    if (!this._config || !this.hass) {
      return;
    }
    const target = ev.target;

    let severityArray = this._config.severity;

    if (!severityArray) {
      severityArray = [];
    }

    const newObject = { from: '', to: '', color: '' };
    const newArray = severityArray.slice();
    newArray.push(newObject);

    this._config.severity = newArray;
    fireEvent(this, 'config-changed', { config: this._config });
  }

  private _moveSeverity(ev): void {
    if (!this._config || !this.hass) {
      return;
    }
    const target = ev.target;

    const severityArray = this._config.severity;

    let newArray = severityArray.slice();
    if (target.configDirection == 'up') {
      newArray = arrayMove(newArray, target.severityIndex, target.severityIndex - 1);
    } else if (target.configDirection == 'down') {
      newArray = arrayMove(newArray, target.severityIndex, target.severityIndex + 1);
    }

    this._config.severity = newArray;
    fireEvent(this, 'config-changed', { config: this._config });
  }

  private _removeSeverity(ev): void {
    if (!this._config || !this.hass) {
      return;
    }
    const target = ev.target;

    const severityArray = this._config.severity;

    const clonedArray = severityArray.slice();
    const newArray: any = [];
    let arrayIndex = 0;
    for (const config of clonedArray) {
      if (target.severityIndex !== arrayIndex) {
        newArray.push(clonedArray[arrayIndex]);
      }
      arrayIndex++;
    }
    if (newArray.length === 0) {
      delete this._config.severity;
    } else {
      this._config.severity = newArray;
    }

    fireEvent(this, 'config-changed', { config: this._config });
  }

  private _updateSeverity(ev): void {
    const target = ev.target;

    const severityArray = this._config.severity;

    const newSeverityArray: any = [];
    for (const index in severityArray) {
      if (target.severityIndex == index) {
        const clonedObject = { ...severityArray[index] };
        const newObject = { [target.severityAttribute]: target.value };
        const mergedObject = Object.assign(clonedObject, newObject);
        if (target.value == '') {
          delete mergedObject[target.severityAttribute];
        }
        newSeverityArray.push(mergedObject);
      } else {
        newSeverityArray.push(severityArray[index]);
      }
    }

    this._config.severity = newSeverityArray;

    fireEvent(this, 'config-changed', { config: this._config });
  }

  private _valueChanged(ev): void {
    if (!this._config || !this.hass) {
      return;
    }
    const target = ev.target;
    if (target.configObject[target.configAttribute] == target.value) {
      return;
    }

    if (target.configAdd && target.value !== '') {
      target.configObject = Object.assign(target.configObject, {
        [target.configAdd]: { [target.configAttribute]: target.value },
      });
    }
    if (target.configAttribute && target.configObject && !target.configAdd) {
      if (target.value === false) {
        if (target.ignoreNull == true) delete target.configObject[target.configAttribute];
        else target.configObject[target.configAttribute] = target.value;
      } else if (target.value == '') {
        if (target.ignoreNull == true) return;
        delete target.configObject[target.configAttribute];
      } else {
        console.log(target.configObject);
        target.configObject[target.configAttribute] = target.value;
      }
    }
    fireEvent(this, 'config-changed', { config: this._config });
  }

  static get styles(): CSSResult {
    return css`
      .option {
        padding: 4px 0px;
        cursor: pointer;
      }
      .options {
        background: var(--primary-background-color);
        border-radius: var(--ha-card-border-radius);
        cursor: pointer;
        padding: 8px;
      }
      .sub-category {
        cursor: pointer;
      }
      .row {
        display: flex;
        margin-bottom: -14px;
        pointer-events: none;
        margin-top: 14px;
      }
      .title {
        padding-left: 16px;
        margin-top: -6px;
        pointer-events: none;
      }
      .secondary {
        padding-left: 40px;
        color: var(--secondary-text-color);
        pointer-events: none;
      }
      .value {
        padding: 0px 8px;
      }
      .value-container {
        padding: 0px 8px;
        transition: all 0.5s ease-in-out;
      }
      .value-container:target {
        height: 50px;
      }
      .value-number {
        width: 100px;
      }
      ha-fab {
        margin: 8px;
      }
      ha-switch {
        padding: 16px 0;
      }
      .card-background {
        background: var(--paper-card-background-color);
        border-radius: var(--ha-card-border-radius);
        padding: 8px;
      }
      .category {
        background: #0000;
      }
      .ha-icon-large {
        cursor: pointer;
        margin: 0px 4px;
      }
    `;
  }
}
// @ts-ignore
window.customCards = window.customCards || [];
// @ts-ignore
window.customCards.push({
  type: 'list2bars-card',
  name: 'List2Bars Card',
  preview: false, // Optional - defaults to false
  description: 'A customizable list to bars card.', // Optional
});
