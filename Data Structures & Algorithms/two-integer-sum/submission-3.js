class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        /* brute force - as alway */
        const N = nums.length;
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                if (i !== j && nums[i] + nums[j] === target) {
                    return [i, j];
                }
            }
        }

        return [0, 0];

        /* hash-map: 
            idea: like we have a book to track the position for eac item that we gone throught
            for each current item, let check if x = target - current, if we have seen this x before, that is the answer
        */

        /* const seen = new Map();
        for (let i = 0; i < nums.length; i++) {
            const candidate = target - nums[i];
            if (seen.has(candidate)) {
                return [seen.get(candidate), i];
            }
            seen.set(nums[i], i);
        }
        return [0, 0]; */
    }
}
