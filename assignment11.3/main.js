const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
];


function getNames(data) {
    return data.map(function(v) {
        return v.name;
    });
}

function getBornBefore1990(data) {
    let result = [];
    let currentYear;
    data.forEach(function(v) { 
        currentYear = v.birthday.slice(-4);
        if(parseInt(currentYear) < 1990) result.push(v);
    });
    return result;
}

function getTypesOfFood(data) {
    let result = [];

    data.forEach(function(v) {
        result.concat(v.favoriteFoods.meats);
        result.concat(v.favoriteFoods.fish);
    });

    return result.filter((item, pos) => result.indexOf(item) === pos);
}


