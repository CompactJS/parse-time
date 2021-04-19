/**
 * Parses time as float in hours
 * @param timeString Time as string. Format: 'hh:mm[:ss]'
 * @returns Time in hours
 * @example parse('11:30') // => 11.5
 */
export function parse(timeString: string): number {
  return timeString
    .split(':')
    .reduce((hours, hour, i) => hours + parseInt(hour) / Math.pow(60, i), 0);
}
