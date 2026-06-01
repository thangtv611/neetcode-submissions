class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        // brute forte

        let found = false;
        for (let i = 0; i < nums.length; i ++) {
            for (let j = 0; j < nums.length; j ++) {
                if (i !== j && nums[i] === nums[j]) {
                    found = true;
                    break;
                }
            }
        }

        return found;

        // set

        // map


    }
}
