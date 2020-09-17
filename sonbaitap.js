function tachchu(x, y) {
    var tach = x.split(' ');
    var result = '';
    var num = 0;

    for (var i = 0; i < x.length; i++) {
        if (num <= y) {
            num += tach[i].length;
        }
        else break
    for (var j = 0; j < i; j++) {
            result = result + ' ' + tach[j];
        } return result + '...';

}