function convertToRoman(num) {
    var nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romans = ["M","CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I"
      ];
    
      var romanized = '';

      for (var i = 0; i < nums.length; i++) {
          while (nums[i] <= num) {
              romanized += romans[i];
              num -= nums[i];
          }
      }
      return romanized;
}
   
   convertToRoman(36);
   