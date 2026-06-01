class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        /* 1. using map to count the occurance of character in s, then decrease in t, if the count is all zero, that is true */
        if (s.length !== t.length) return false;
        
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

        return counter.size === 0;
    }
}
