function palindrome(str) {
    return (
      str.replace(/[\W_]/g, '').toLowerCase() ===
      str
        .replace(/[\W_]/g, '')
        .toLowerCase()
        .split()
    ) 
  
  }
  
  
  
  palindrome("eye");
  