// Using method found here: https://stackoverflow.com/a/59792709
/**
 * Generate an array from 1 to X where X is the size of the array
 * @param size - Desired size of the array
 * @returns An array containing numbers 1 to X (size)
 */
export function GenerateValues(size: number): number[] {
  return Array(size)
    .fill(null)
    .map((_, i) => i + 1);
}
