function vowelsAndConsonants(s) {
    let regex = 'aeuio';
    var consonants = '';

    for (var i = 0; i < s.length; i++) {
        if (regex.includes(s[i])) {
             console.log(s[i]);
        } else {
           consonants += s[i] + '\n';
        }
    }
    console.log(consonants.trim());
}