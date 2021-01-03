import { html } from 'lit-element';

export const styles = html`
  <style>
    :host {
      display: flex;
      flex-direction: column;
    }
    ha-card {
      flex-direction: column;
      flex: 1;
      padding: 16px 0;
      position: relative;
      overflow: hidden;
    }
    ha-card > div {
      padding: 0px 16px 8px 16px;
    }
    ha-card > div:last-child {
      padding-bottom: 0;
    }
    ha-card[group] {
      box-shadow: none;
      padding: 0;
    }
    ha-card[group] > div {
      padding-left: 0;
      padding-right: 0;
    }
    ha-card[hover] {
      cursor: pointer;
    }
    .flex {
      display: flex;
      display: -webkit-flex;
      min-width: 0;
    }
    .header {
      justify-content: space-between;
    }
    .name {
      align-items: center;
      min-width: 0;
      letter-spacing: var(--mcg-title-letter-spacing, normal);
    }
    .name > span {
      font-size: 1.4em;
      font-weight: var(--mcg-title-font-weight, 500);
      max-height: 1.6em;
      min-height: 1.6em;
      opacity: 0.85;
    }
    .ellipsis {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .states {
      align-items: flex-start;
      font-weight: 300;
      justify-content: space-between;
      flex-wrap: nowrap;
    }
    .state {
      position: relative;
      display: flex;
      flex-wrap: nowrap;
      max-width: 100%;
      min-width: 0;
    }
    .state__value {
      display: inline-block;
      font-size: 2.4em;
      margin-right: 0.25rem;
      line-height: 1.2em;
    }
    .state__uom {
      flex: 1;
      align-self: flex-end;
      display: inline-block;
      font-size: 1.4em;
      font-weight: 400;
      line-height: 1.6em;
      margin-top: 0.1em;
      opacity: 0.6;
      vertical-align: bottom;
    }
    .state__name {
      font-size: 0.95rem;
      font-weight: 500;
      bottom: -1.1rem;
      left: 0;
      opacity: 0.75;
      position: absolute;
      white-space: nowrap;
      animation: fade 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    .warning {
      display: block;
      color: black;
      background-color: #fce588;
      padding: 8px;
    }
    #states {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      margin-top: 8px;
    }
    #states > * {
      margin-bottom: 4px;
    }
    list2bars-card-card {
      display: flex;
      flex-basis: 100%;
      flex-direction: row;
      margin-right: 2px;
    }
    list2bars-card-card:hover {
      opacity: 0.5;
      cursor: pointer;
    }
    list2bars-card-background {
      cursor: pointer;
      flex-grow: 1;
      position: relative;
    }
    list2bars-card-currentbar,
    list2bars-card-backgroundbar,
    list2bars-card-contentbar {
      position: absolute;
      height: 100%;
      width: 100%;
    }
    list2bars-card-contentbar {
      align-items: center;
      color: var(--primary-text-color);
      display: flex;
      justify-content: flex-start;
      margin-left: 1px;
      margin-right: 1px;
    }
    .contentbar-direction-right {
      flex-direction: row;
    }
    .contentbar-direction-up {
      flex-direction: column;
    }
    list2bars-card-backgroundbar {
      background: var(--bar-color);
      filter: brightness(0.5);
      opacity: 0.25;
    }
    list2bars-card-currentbar {
      background: linear-gradient(
        to var(--bar-direction),
        var(--bar-color) var(--bar-percent),
        #0000 var(--bar-percent),
        #0000 var(--bar-percent)
      );
    }
    list2bars-card-name {
      align-items: center;
      align-self: center;
      justify-content: center;
      margin: 4px;
      overflow: hidden;
      position: relative;
      text-align: left;
      text-overflow: ellipsis;
    }
    list2bars-card-value {
      align-self: center;
      position: relative;
    }
    list2bars-card-value {
      white-space: nowrap;
      margin: 4px;
    }
    .value-direction-right {
      margin-left: auto;
    }
  </style>
`;

export default styles;
