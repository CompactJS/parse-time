export const parse = (timeString) => {
  return timeString
    .split(':')
    .reduce((hours, hour, i) => hours + parseInt(hour) / Math.pow(60, i), 0);
};
