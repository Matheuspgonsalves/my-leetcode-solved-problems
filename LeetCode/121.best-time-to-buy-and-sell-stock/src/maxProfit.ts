export function maxProfit(prices: number[]): number {
  if (prices.length === 0) return 0;

  let min = prices[0]!;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    const profitToday = prices[i]! - min;

    if (profitToday > maxProfit) {
      maxProfit = profitToday;
    }

    if (prices[i]! < min) {
      min = prices[i]!;
    }
  }

  return maxProfit;
}