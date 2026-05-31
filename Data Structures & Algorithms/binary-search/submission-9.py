class Solution:
    def search(self, nums: List[int], target: int) -> int:
        l, r = 0, len(nums) - 1
        # print(l, r)
        while l <= r:
            mid = math.floor((l + r) / 2)
            print(l, r, mid)

            if nums[mid] > target:
                r = mid - 1
            elif nums[mid] < target:
                l = mid + 1
            elif nums[mid] == target:
                return mid
            else:
                return -1

        return -1