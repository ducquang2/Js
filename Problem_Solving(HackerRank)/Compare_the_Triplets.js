function compareTriplets(a, b) {
    let points = [0, 0];
    for (var i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            points[0]++;
        }
        //because else in this line mean b[i] <= a[i], then we need != 
        else if (a[i] != b[i]) {
            points[1]++;
        }
    }
    return points;
}