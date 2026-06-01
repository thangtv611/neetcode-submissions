class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        /* hash-map 
            idea: đi qua các phần tử, add nó vào map (value, địa chỉ lúc gặp), với con số hiện tại
            kiểm tra nếu target - <số đang check> = x <- mà x có trong map rồi thì chính nó
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
