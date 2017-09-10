// Transforms query-params template helper to what transitonTo expects
export default function transformQueryParams(transitionArgs) {
  return (!transitionArgs || typeof transitionArgs.map !== 'function') ? transitionArgs :
    transitionArgs.map((arg) => {
    if (arg && arg.isQueryParams) {
      return { queryParams: arg.values };
    } else {
      return arg;
    }
  });
}
