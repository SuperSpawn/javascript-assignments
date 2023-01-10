

function validatePassword1(password) {
    if(password.length > 7)     return 'Strong';
    else                        return 'Weak';
}
function validatePassword2(password) { 
    return (password.length > 7) ? 'Strong' : 'Weak';
}
function validatePassword3(password) {
    return (password.length > 7) && (password.contains(' ') == false);
}

function contains(word, letter) {
    let i;
    for(i = 0; i < word.length; i++) {
        if(letter == word[i]) return true;
    }
    return false;
}
function containsUppercase(word) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let i;
    for (i = 0; i < alphabet.length; i++) {
        if(contains(word, alphabet[i]) == true) return true;
    }
    
    return false;
}

function advancedValidatePassword(password) {
    if(password.length < 7)     return "Weak";
    else if (containsUppercase(password) == true) return "Very Strong";
    else                        return "Strong";
}


console.log(advancedValidatePassword("Hellooooo"));
