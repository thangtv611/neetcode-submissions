class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        prod, zero_cnt = 1, 0
        
        for num in nums:
            if num == 0:
                zero_cnt += 1
            else:
                prod *= num

        if zero_cnt > 1: return [0] * n

        if zero_cnt == 1:
            return [0 if nums[i] != 0 else prod for i in range(n)]

        return [int(prod/nums[i]) for i in range(n)]