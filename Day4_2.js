function getCount(obj) {
    var count = 0;
    for (var i = 0; i< obj.length ; i++) {
        if (obj[i].x == obj[i].y) {
            count++;
        }
    }
    return count;
}