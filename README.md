# list2bars-card

A customizable card for Home Assistant Lovelace UI.
My first TypeScript development, and my first Home Assistant experience, so please, be forgiving. :)

It's really inspired (/ copied) from the excellent Bar Card and Mini Graph card ([Credits](#credits)).

I was looking for a card to display some values returned by sensors in the form of lists (Suez water, Enedis linky, ...). Unfortunatly, it's not the way Home Assistant operates with normal sensors (I couldn't choose what value to display and when it occured).
With list2bars-card, you can rendered values like these (default state / this_month_consumption / last_year_overall / ...) :

```yaml
attribution: Data provided by toutsurmoneau.fr
this_month_consumption:
  01/12/2020: 84
  02/12/2020: 67
  03/12/2020: 61
  ...
  28/12/2020: 152
  29/12/2020: 135
  30/12/2020: 98
  31/12/2020: 122
previous_month_consumption:
  01/11/2020: 226
  02/11/2020: 127
  03/11/2020: 92
  ...
  29/11/2020: 230
  30/11/2020: 117
highest_monthly_consumption: 6719
last_year_overall: 24304
this_year_overall: 61220
history:
  Août 2019: 4803
  Septembre 2019: 4882
  Octobre 2019: 4969
  ...
  Novembre 2020: 4069
  Décembre 2020: 3837
unit_of_measurement: L
friendly_name: Suez Water Client
icon: 'mdi:water-pump'
```

## [Examples](#examples-1)

![Right](https://github.com/alexandreaudrain/list2bars-card/blob/main/images/right.jpg?raw=true)

![Up](https://github.com/alexandreaudrain/list2bars-card/blob/main/images/up.jpg?raw=true)

## Options

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| type | string | **Required** | `custom:list2bars-card`
| entity | string | **Required** | Entity with states as a list, or a simple state
| attribute | string | none | Tells with values should be displayed. See [Attribute Options](#attribute-options).
| background | boolean | true | Displays a background behind the card.
| color | string | var(--custom-bar-card-color, var(--primary-color)) | Default color of each bars, unless it's overwritten by severity. See [Severity Options](#severity-options).
| color_background | boolean | true | Displays a background behind each bar.
| complementary | boolean | false | Displays complementary value (max - state_value) instead state value.
| decimal | number | none  | The amount of decimals to be displayed for the value.
| direction | string | right | Direction of the bar. `right`, `up`.
| height | string | 40px | Defines the height of each bars.
| icon | string | icon | Defines the icon to be displayed.
| index_from | number | 1 | Index where to start display. See [Index Options](#index-options).
| index_to | number | length of your list | Index where to end display. See [Index Options](#index-options).
| limit_value | boolean | false | Limits value displayed to `min` and `max` value.
| max | number | max value found in list | Defines maximum value of the bars.
| min | number | 0 | Defines minimum value of the bars.
| positions | object | none | Defines if some card elements will be rendered or not. See [Display Options](#display-options).
| severity | object | none | A list of severity values. See [Severity Options](#severity-options).
| title | string | none | Adds title header to the card.
| unit_of_measurement | string | attribute | Defines the unit of measurement to be displayed.

## Attribute Options

| Value | Description
| ----------- | -----------
| `none` | will display default entity state
| attribute name (single data) | will display attribute's value
| attribute name (list) | will display list instead of state value

## Index Options

| Name | Value | Description | Example with months from January to December
| ---- | ------- | ----------- | -----------
| index_from | `none` | Will start the display form the first element | January, February, ...
| index_from | number >= 0 | Will start the display form the given index | For index_from = 3 : March, April, ...
| index_from | number < 0 | Will start the display backward form the end of the list. Usefull if you want to display a full year from a list containing more than 12 months. | For index_from = -4 : September, October, ...
| index_to | `none` | Will display the list up to the end | ..., November, Decembre
| index_to | number >= 0 | Will stop the display at the given index | For index_to = 4 : ..., March, April
| index_to | number < 0 | Will stop N values before the end of the list. | For index_to = -4 : ..., July, August

## Severity Options

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| from | number | **Required** | Defines from which value the color should be displayed.
| to | number | **Required** | Defines to which value the color should be displayed.
| color | string | `none` | Defines the color to be displayed.
| hide | boolean | false | Hides the bar if conditions are met.

## Display Options

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| icon | string | on | `on`, `off`
| name | string | on | `on`, `off`
| value | string | on | `on`, `off`

## Installation

Prefered method of installation is [Home Assistant Community Store](https://github.com/hacs/integration).

It's **required** to load this card as `module`.

```yaml
- url: /hacsfiles/list2bars-card/list2bars-card.js
  type: module
```

## Examples

### Direction

![Right](https://github.com/alexandreaudrain/list2bars-card/blob/main/images/direction-right.jpg?raw=true)

```yaml
entity: sensor.suez_water_client
direction: right
title: Suez
attribute: history
color_background: true
```

![Up](https://github.com/alexandreaudrain/list2bars-card/blob/main/images/direction-up.jpg?raw=true)

```yaml
entity: sensor.suez_water_client
direction: up
title: Suez
attribute: history
color_background: true
```

### Colors

![Colors](https://github.com/alexandreaudrain/list2bars-card/blob/main/images/right.jpg?raw=true)

```yaml
entity: sensor.suez_water_client
direction: right
title: Suez
attribute: history
color_background: true
```

### Severity

![Severity](https://github.com/alexandreaudrain/list2bars-card/blob/main/images/right.jpg?raw=true)

```yaml
entity: sensor.example
title: Severity
type: 'custom:list2bars-card'
severity:
  - color: Red
    from: 0
    to: 25
  - color: Orange
    from: 26
    to: 50
  - color: Green
    from: 51
    to: 100
```

## Credits

Inspired by [Bar Card](https://github.com/custom-cards/bar-card) and [Mini Graph Card](https://github.com/kalkih/mini-graph-card).
