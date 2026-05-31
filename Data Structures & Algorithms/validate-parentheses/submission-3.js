class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const openCharSet = new Set('[({');
        const openCharMap = {
            ']': '[',
            '}': '{',
            ')': '('
        };
        const stack = [];

        if (s.length <= 1) return false;
        if (!openCharSet.has(s[0])) return false;

        for (const char of s) {
            if (openCharSet.has(char)) {
                stack.push(char);
            } else {
                const last = stack.pop();
                const opposite = openCharMap[char];
                if (last !== opposite) {
                    return false;
                }     
            }
        }

        return stack.length === 0;
    }
}


// ([{}])