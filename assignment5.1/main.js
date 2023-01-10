
function countryToLiveIn(language, isIsland, population, country) {
    let notAnIsland = !isIsland;
    let isEnglish = language === 'English';
    let smallPopulation = population < 50000000;

    if(notAnIsland && isEnglish && smallPopulation) {
        console.log(`You should live in ${country}`);
        return true;
    }
    else {
        console.log(`${country} does not meet your criteria`);
        return false;
    }
}

countryToLiveIn('Hebrew', false, 9000000, 'Israel');

