class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = prices[0];
        const length = prices.length;
        let max = 0;

        for (let i = 1; i < length; i++) {
            if (prices[i] < minPrice) {
                minPrice = prices[i];
            }
            max = Math.max(max, prices[i] - minPrice);
        }

        return max;
    }
}
