
const library = [
    {
        author: "Bill Gates",
        title: "The Road Ahead",
        readingStatus: true
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        readingStatus: true
    },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        readingStatus: false
    }
];

function displayBooks(books) {
    books.forEach(function(v) {
        if(v.readingStatus === true) {
            console.log(`${v.title} by ${v.author}. Reading status ${v.readingStatus}`);
        }
    });
}


