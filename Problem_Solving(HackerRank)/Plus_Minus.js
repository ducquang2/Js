function plusMinus(arr) {
    var pos = 0, neg = 0, zero = 0;
    for (var i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case arr[i] > 0:
                pos++;
                break;
            case arr[i] < 0:
                neg++;
                break;
            default: 
                zero++;
        }
        return ( pos/arr.length , neg/arr.length , zero/arr.length );
    }
}