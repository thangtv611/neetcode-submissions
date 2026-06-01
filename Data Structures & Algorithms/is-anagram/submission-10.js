class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // 1. using map to count the occurance of character in s, then decrease in t,
        // if the count is all zero, that is true
        // Time is O(n) - just one for loop iteration.
        // Space is O(1) cause just using map

        /* if (s.length !== t.length) return false;
        const counter = new Map();
        for (const ch of s) {
            counter.set(ch, (counter.get(ch) || 0) + 1);
        }

        for (const ch of t) {
            if (counter.has(ch)) {
                if (counter.get(ch) > 1) {
                    counter.set(ch, counter.get(ch) - 1);
                } else {
                    counter.delete(ch);
                }
            }
        }
        return counter.size === 0; */

        // the second way
        // idea is: sorting

        /* if (s.length !== t.length) return false;

        const sortedS = s.split('').sort().join('');
        const sortedT = t.split('').sort().join('');
        
        for (let i = 0; i < s.length; i ++)  {
            if (sortedS[i] !== sortedT[i]) return false;
        }

        return true; */

        // the third idea is:
        // idea: create an array that track the frequency of each character in s and store to position of that character code charCodeAt
        // then loop over character of the string t, decrease the frequency of that char by 1
        // finally, if all the element in that array is zero, that true because they are the same character
        const arr = new Array("z".charCodeAt(0)).fill(0);

        for (const ch of s) {
            arr[ch.charCodeAt(0)] += 1;
        }

        for (const ch of t) {
            arr[ch.charCodeAt(0)] -= 1;
        }

        return arr.every(item => item === 0);
    }
}
