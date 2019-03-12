import { get } from '@ember/object';

export default function filterArgs(filters, args) {
  return args.filter(_applyFilters.bind(this, filters));
}

const _applyFilters = (filters, arg) => {
  const props = Object.keys(filters);

  const result = props.reduce((prev, prop) => {
    if (!prev) return prev;

    const conditions = filters[prop];

    if (!(conditions instanceof Array)) {
      return !get(arg, prop);
    }

    return conditions.reduce((prev, c) => {
      return !prev ? prev : (get(arg, prop) !== c)
    }, true);
  }, true);
  
  return result;
}
