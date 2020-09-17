function tachchu(x, y) {
    var tach = x.split(' ');
    var result = '';
    var tong = 0;

    for (var i = 0; i < x.length; i++) {
        if (tong <= y) {
            tong += tach[i].length;
        } else break
}
    for (var j = 0; j < i; j++) {
            result = result + ' ' + tach[j];
        } return result + '...';

}