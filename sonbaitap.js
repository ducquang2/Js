function tachchu(x, y) {
    var tach = x.split(' ');
    var result = '';
    var num = 0;

    for (var i = 0; i < x.length; i++) {
        if (num <= y) {
            num += tach[i].length;
            result += ' ' + tach[i];
        }
        else break;
     return result + '...';

    }
}