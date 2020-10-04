function diagonalDifference(arr) {
    var lr = 0, rl = 0;
    for (var i = 0; i < arr.length; i++) {
        lr += arr[i][i];
        rl += arr[i][arr.length - i - 1];
    }  
    return Math.abs(lr-rl);
}
