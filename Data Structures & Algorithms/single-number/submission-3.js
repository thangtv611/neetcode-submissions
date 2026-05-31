class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        const seen = new Set();
        for (const item of nums) {
            if (!seen.has(item)) {
                seen.add(item);
            } else {
                seen.delete(item);
            }
        }

        console.log(seen.values);

        return seen.values().next().value;
    }
}
