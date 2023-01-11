




function letterOccurances(array) {
    let joined = array.join("");
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let letters = new Array();

    let i, j, mostCommon = 'a';
    let mostCommonCount = 0;
    let characterCount;

    joined = joined.toLowerCase();
    for(i in alphabet) {
        characterCount = 0;
        for(j in joined) {
            if(joined[j] === alphabet[i])   characterCount++; 
        }
        if(characterCount !== 0) letters[alphabet[i]] = characterCount;
        if(characterCount > mostCommonCount) { 
            mostCommon = alphabet[i];
            mostCommonCount = characterCount;
        }
    }

    for(i in letters) {
        if(letters[i] === 0)
            letters.splice(i,1);
    }

    let result = {
        array: letters,
        mostCommon: mostCommon
    }
    return result;
}

const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];



console.log(letterOccurances(array));

