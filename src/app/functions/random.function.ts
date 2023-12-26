/**
 * Generate a random integer between 0 and max
 * @param max - maximum value that can be generated (exlusive)
 * @returns integer value
 */
export function getRandomInt(max: number) {
  max = Math.floor(max);
  return Math.floor(Math.random() * max); // The maximum is exclusive and the minimum is inclusive
}
