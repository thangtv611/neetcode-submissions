class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const N = numbers.length;

        let right = N;

        for (let left = 0; left < right; left++) {
            let nextLeft = left + 1;

            while (nextLeft <= right) {
                const curr = numbers[left] + numbers[nextLeft];
                if (curr === target) {
                    return [left + 1, nextLeft + 1];
                }

                if (curr > target) {
                    right = nextLeft;
                    break;
                }

                nextLeft++;
            }
        }

        return [];
    }
}
