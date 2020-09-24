function reverseStrbyusingTry(s) {
    try {
        let arr = str.split('');
        arr.reverse();
        s = arr.join('');
        console.log(s);
    } catch(e) {
        console.log(e.message);
        console.log(s);
    }
}