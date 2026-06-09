class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;

        while (left < right) {
            const curr = numbers[left] + numbers[right];
            if (curr === target) {
                return [left + 1, right + 1];
            } else if (curr > target) {
                right --;
            } else {
                left ++;
            }
        }

        return [];
    }
}
