import { helper } from '@ember/component/helper';

export function processData([value, ...rest]) {
  return JSON.stringify(value)
}

export default helper(processData);