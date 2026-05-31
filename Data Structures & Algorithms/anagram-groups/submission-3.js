class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

         return Object.values(
            strs.reduce((acc, curr) => {
                const key = curr.split("").sort().join("");
                if (!acc[key]) {
                    acc[key] = [curr];
                } else {
                    acc[key].push(curr);
                }
                return acc;
            }, {})
        );

    }
}
