function getSecondLargest(nums) {
    var first = 0;
    var second = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > first) {
            second = first;
            first = nums[i];
        } else if (nums[i] > second && nums[i] < first) {
            second = nums[i];
        }
    } return second;
}