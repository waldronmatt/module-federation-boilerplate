import { template } from 'lodash-es';

export default (tpl, options = {}) => {
  const compiled = template(tpl, options);
  return compiled();
};
