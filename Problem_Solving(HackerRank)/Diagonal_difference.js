function diagonalDifference(arr) {
    var lr = rl = 0;
    for (var i = 0; i<n; i++) {
        lr += arr[i][i];
        rl += arr[i][n-i-1];
    }  
    return Math.abs(lr-rl);
}
