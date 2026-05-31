class Solution:
    # def search(self, nums: List[int], target: int) -> int:
    #     l, r = 0, len(nums) - 1
    #     while l <= r:
    #         mid = math.floor((l + r) / 2)

    #         if nums[mid] > target:
    #             r = mid - 1
    #         elif nums[mid] < target:
    #             l = mid + 1
    #         elif nums[mid] == target:
    #             return mid
    #         else:
    #             return -1

    #     return -1

    def search(self, nums: List[int], target: int) -> int:
        def internal_search(l, r):
            if l > r:
                return -1
            m = (l + r) // 2
            if nums[m] == target:
                return m
            if nums[m] < target:
                return internal_search(m + 1, r)
            return internal_search(l, m - 1)
        
        return internal_search(0, len(nums) - 1)
        