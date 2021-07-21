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

type TimeUnit = 'hh' | 'mm' | 'ss';
type TimeFormat =
  | `${TimeUnit}`
  | `${TimeUnit}:${TimeUnit}`
  | `${TimeUnit}:${TimeUnit}:${TimeUnit}`;

/**
 * Converts hours as float to a string representation, separated by colon
 * @param hours time as float
 * @returns Time as string Format: 'hh:mm[:ss]'
 * @example stringify(11.5) // => '11:30'
 */
export function stringify(
  hours: number,
  format: TimeFormat = 'hh:mm:ss'
): string {
  const hoursString = pad(Math.floor(hours));
  const minutesString = pad(Math.floor(hours * 60) % 60);
  const secondsString = pad(Math.floor(hours * 3600) % 60);
  return format
    .replace(/hh/g, hoursString)
    .replace(/mm/g, minutesString)
    .replace(/ss/g, secondsString);
}

function pad(number: string | number): string {
  return `${number}`.length === 1 ? `0${number}` : `${number}`;
}
