class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        const set = new Set(nums);
        for (let i = 0; i <= nums.length; i ++) {
            if (!set.has(i)) {
                return i;
            }
        }
    }
}
