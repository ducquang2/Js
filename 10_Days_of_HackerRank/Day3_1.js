function getSecondLargest(nums) {
    var first = Math.max(nums);
    var second = Math.min(nums);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > second && nums[i] < first) {
            second = nums[i];
        }
    } return second;
}