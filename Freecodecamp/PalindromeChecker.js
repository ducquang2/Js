function palindrome(str) {
    return (
      str.replace(/[\W_]/g, '').toLowerCase() ===
      str
    ) 
  
  }
  
  
  
  palindrome("eye");
  