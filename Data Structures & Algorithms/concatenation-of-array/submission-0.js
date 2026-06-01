class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const N = nums.length;
        const ans = new Array(N * 2).fill(0);

        for (let i = 0; i < N; i++) {
            ans[i] = nums[i];
            ans[i + N] = nums[i];
        }

        return ans;
    }
}
