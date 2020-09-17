function slicing_word(x, y) {
    if (y > x.length) {
      return "your given index is larger than the length of the string mate!";
    }
    let result = "";
    let subString = "";
    let index = 0;
    while (index < y) {
      result += x[index];
      index += 1;
    }
  
    for (let i = result.length; i < x.length; i++) {
      if (x[i] === " ") {
        break;
      }
      subString += x[i];
    }
    return result + subString + "...";
  }
  
  let output = slicing_word("Hello boring day", 55);
  console.log(output);