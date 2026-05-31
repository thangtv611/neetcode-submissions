import re

class Solution:
    def isPalindrome(self, s: str) -> bool:
        str = s.replace(" ", "").casefold()
        str = re.sub(r'[^a-zA-Z0-9]', '', str)

        l, r = 0, len(str) - 1
        while l < r:
            if str[l] != str[r]:
                return False
            l += 1
            r -= 1
        
        return True

        
