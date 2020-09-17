function tachchu(x, y) {
    console.log('ff')
    var tach = x.split(' ');
    var result = '';
    console.log(tach[0].length);
    while (tach[0].length >= y) {
        result = tach[0];
        break;
    } return result;
}    
console.log('Hello');
tachchu('aaaaaa aaa aaa', 6 );
