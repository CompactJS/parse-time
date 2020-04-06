declare module '@compactjs/parse-time';

/**
 * Parses time as float in hours
 * @param timeString Time as string. Format: 'hh:mm[:ss]'
 * @returns Time in hours
 */
export function parse(timeString: string): float;
