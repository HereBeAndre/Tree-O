export const generateRandomXDigitsNumber = (numberOfDigits: number) =>
  parseInt(Math.random().toFixed(numberOfDigits).replace('0.', ''), 10);
