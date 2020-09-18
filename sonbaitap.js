function tachchu(x, y) {
    var tach = x.split(' ');
    var result = '';
    var num = 0;
    var sub = '';

    for (var i = 0; i < x.length; i++) {
        if (x.length > y) {
        if (num <= y) {
            num += tach[i].length;
            result += ' ' + tach[i];
        }
        else break;
        for (let j = result.length; j< x.length; j++) {
        if (x[j] === ' ') {
            break;
        } sub += x[j];
        }
        return result + ' ' + sub + '...';}
        else return result = x;
    }
}
