
let book1 = {
    name: 'Zabibah and the King',
    author: 'Saddam Hussein',
    year: 2000
}
let book2 = {
    name: 'The Green Book',
    author: 'Muammar Gaddafi',
    year: 1975
}

let bookUtils = {
    getFirstPublished : function(book1, book2) {
        return (book1.year < book2.year)? book1: book2;
    },
    setNewEdition : latestEdition = function(book, editionYear) {
        book.year = editionYear;
        return editionYear;
    },
    setLanguage : language = function(book, language) {
        book.language = language;
        return language;
    },
    setTranslation : translation = function(book, language, translator){
        let result = {
            translator : translator,
            language : language
        }
        book.translation = result;
        return result;
    },
    setPublisher : publisher = function(book, name, location) {
        let result = { 
            name : name,
            location : location
        }
        book.publisher = result;
        return result;
    },
    isSamePublisher : function(book1, book2) {
        return (book1.publisher.name === book2.publisher.name) && (book1.publisher.location === book2.publisher.location);
    }
}

