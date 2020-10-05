function plusMinus(arr) {
    let pos = 0;
    let neg = 0;
    let zero = 0;
    arr.forEach(e => {
        if (e > 0)
            pos++;
        else if (e < 0)
            neg++;
        else if (e == 0)
            zero++;
    });
    console.log(pos / arr.length);
    console.log(neg / arr.length);
    console.log(zero / arr.length);
}