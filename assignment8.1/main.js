

let book = {
    pageCount: 1000,
    name: 'Business Secrets of the Pharos',
    author: 'Mark Corrigan',
    publishingYear: 2012
}

function describeBook(book) {
    return `The book ${book.name} was written by ${book.author} and was written in the year ${book.publishingYear}`;
}

console.log(describeBook(book));
