function getMaxLessThanK(n, k) {
    let max = 0;
    for (var i = 1; i < n; i++) {
        for (var j = i + 1; j < n + 1; j ++) {
            if (Number(i & j) < k) {
                if (Number(i & j) > max) {
                    max = i & j;
                }
            }
        }
    }
    return max;
}