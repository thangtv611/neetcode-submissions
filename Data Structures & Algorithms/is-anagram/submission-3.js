class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sCounter = this.buildCounter(s);
        const tCounter = this.buildCounter(t);

        for (let i = 0; i < 26; i++) {
            if (sCounter[i] !== tCounter[i]) {
                return false;
            }
        }

        return true;
    }

    buildCounter(s) {
        const sCounter = new Array(26).fill(0);
        for (const ch of s) {
            sCounter[ch.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        }

        return sCounter;
    }
}
