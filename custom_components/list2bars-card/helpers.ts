import { PropertyValues } from 'lit-element';
import { HomeAssistant } from 'custom-card-helpers';
import { List2BarsCardConfig } from './types';

/**
 * Performs a deep merge of objects and returns new object. Does not modify
 * objects (immutable) and merges arrays via concatenation and filtering.
 *
 * @param {...object} objects - Objects to merge
 * @returns {object} New object with merged key/values
 */
export function mergeDeep(...objects: any): any {
  const isObject = (obj: any) => obj && typeof obj === 'object';

  return objects.reduce((prev: any, obj: any) => {
    Object.keys(obj).forEach(key => {
      const pVal = prev[key];
      const oVal = obj[key];

      if (Array.isArray(pVal) && Array.isArray(oVal)) {
        /* eslint no-param-reassign: 0 */
        prev[key] = pVal.concat(...oVal);
      } else if (isObject(pVal) && isObject(oVal)) {
        prev[key] = mergeDeep(pVal, oVal);
      } else {
        prev[key] = oVal;
      }
    });

    return prev;
  }, {});
}

/*export function mapRange(num: number, in_min: number, in_max: number, out_min: number, out_max: number): number {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}*/

export function arrayMove(arr, fromIndex, toIndex): any[] {
  const element = arr[fromIndex];
  const newArray = arr.slice();
  newArray.splice(fromIndex, 1);
  newArray.splice(toIndex, 0, element);
  return newArray;
}
