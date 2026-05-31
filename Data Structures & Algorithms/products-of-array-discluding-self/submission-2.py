class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        ans = [0]*n
        for i in range(n):
            final = 1
            for j in range(n):
                if i != j:
                    final *= nums[j]
            ans[i] = final
        return ans