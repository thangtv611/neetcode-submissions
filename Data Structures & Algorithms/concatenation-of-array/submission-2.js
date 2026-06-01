class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const ans = [];
        ans.push(...nums);
        ans.push(...nums);
        return ans;
    }
}
