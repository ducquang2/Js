function rot13(str) {
    str.toUpperCase(); 
    var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
    var nop = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var arr = str.split("");

        for(var i = 0; i < arr.length; i++) {
            for (var j = 0; j < abc.length; j ++) {
                if (arr[i] === abc[j]) {
                    arr[i] = nop[j];
                } else if (arr[i] === nop[j]) {
                    arr[i] = abc[j];
                }
            }
        }
    return arr.join('');
  }
  
  rot13("SERR PBQR PNZC");
  