function tachchu(x, y) {
    var tach = x.split(' ');
    var result = '';
    var num = 0;
    var sub = '';
    if (x.length > y) {
        while (num < y) {
            result += x[num] ;
            num ++;
        }
    for (let i = result.length; i < x.length; i++) {
        if (x[i] === " ") {
            break;
        }
            sub += x[i];
    }
        return result + sub + '...';
    }
    else return result = x;
}