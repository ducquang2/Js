function tachchu(x, y) {
    var tach = x.split(' ')
    for (var i = 0; i < x.length; i++) {
        let tong = 0;
        if (tong <= y) {
            tong += tach[i].length;
        } else break;
        for (var j = 0; j < i; j++) {
            let text = '';
            text += ' ' + tach[j];
        }
}
}
tachchu('aaaaaa aaa aaa', 6 );
