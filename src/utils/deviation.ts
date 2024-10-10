// Helper function to calculate standard deviation
export function calculateStandardDeviation(prices: number[]): number {
  const mean = prices.reduce((acc, price) => acc + price, 0) / prices.length;
  const variance =
    prices.reduce((acc, price) => acc + Math.pow(price - mean, 2), 0) /
    prices.length;
  return Math.sqrt(variance);
}
