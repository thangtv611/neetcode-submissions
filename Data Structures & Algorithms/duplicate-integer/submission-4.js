class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // brute forte

        /* let found = false;
        for (let i = 0; i < nums.length; i ++) {
            for (let j = 0; j < nums.length; j ++) {
                if (i !== j && nums[i] === nums[j]) {
                    found = true;
                    break;
                }
            }
        }

        return found; */

        // set
        /* const seen = new Set();
        for (const item of nums) {
            if (seen.has(item)) {
                return true;
            }
            seen.add(item);
        }

        return false; */

        // map
        const counter = new Map();
        for (const item of nums) {
            counter.set(item, (counter.get(item) || 0) + 1);
        }

        for (const value of counter.values()) {
            if (value > 1) {
                return true;
            }
        }
        return false;
    }
}
