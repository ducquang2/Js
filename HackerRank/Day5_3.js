function modifyArray(nums) {
    var n = nums.length;
    var result = [];
    const even = () => {
        for (var i = 0; i < n; i++) {
            result.push(nums[i] * 2)
        } return result;
    }
    const odd = () => {
        for (var i = 0; i < n; i++) {
            result.push(nums[i] * 3)
        } return result;
    }
    if (n % 2 == 0) {
        even;
    } else odd
}