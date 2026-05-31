class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const mapOfS = this.buildMap(s);
        const mapOfT = this.buildMap(t);

        let ans = true;
        
        for (let key of mapOfS.keys()) {
            if (!mapOfT.has(key) || mapOfT.get(key) !== mapOfS.get(key)) {
                ans = false;
                break;
            }
        }

        return ans;
    }

    buildMap(str) {
        const map = new Map();
        for (const item of str) {
            if (!map.has(item)) {
                map.set(item, 1);
            } else {
                map.set(item, map.get(item) + 1);
            }
        }

        return map;
    }
}
