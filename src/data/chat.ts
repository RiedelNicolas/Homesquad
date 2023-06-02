export const price = 4700;
export const newMessage1 = 'Dale, yo te ayudo.';
export const newMessage2 = `¿Te parecen bien ${price} pesos?`;
export const responseTime = 2000;
export const messageLimit = 2;

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
