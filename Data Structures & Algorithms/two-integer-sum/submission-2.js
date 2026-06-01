class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        /* hash-map: 
            idea: like we have a book to track the position for eac item that we gone throught
            for each current item, let check if x = target - current, if we have seen this x before, that is the answer
        */

        const seen = new Map();
        for (let i = 0; i < nums.length; i++) {
            const candidate = target - nums[i];
            if (seen.has(candidate)) {
                return [seen.get(candidate), i];
            }
            seen.set(nums[i], i);
        }
        return [0, 0];
    }
}
