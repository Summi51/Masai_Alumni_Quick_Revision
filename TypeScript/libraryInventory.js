"use strict";
var Genre;
(function (Genre) {
    Genre["Fiction"] = "Fiction";
    Genre["NonFiction"] = "Non-Fiction";
    Genre["Mystery"] = "Mystery";
    Genre["Thriller"] = "Thriller";
    Genre["Fantasy"] = "Fantasy";
})(Genre || (Genre = {}));
const library = {
    books: [
        {
            id: 1,
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            genre: Genre.Fiction,
            quantity: 5,
            format: "Paperback",
        },
        {
            id: 2,
            title: "1984",
            author: "George Orwell",
            genre: Genre.Fiction,
            quantity: 3,
            format: "Hardcover",
        },
        {
            id: 3,
            title: "The Da Vinci Code",
            author: "Dan Brown",
            genre: Genre.Mystery,
            quantity: 4,
            format: "Ebook",
        },
    ],
};
function displayInventory(library) {
    console.log("Library Inventory:");
    library.books.forEach((book) => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}, Genre: ${book.genre}, Quantity: ${book.quantity}, Format: ${book.format}`);
    });
}
function searchBooks(library, searchTerm, field) {
    return library.books.filter((book) => book[field].toLowerCase().includes(searchTerm.toLowerCase()));
}
function updateBookQuantity(library, bookId, newQuantity) {
    const book = library.books.find((book) => book.id === bookId);
    if (book) {
        book.quantity = newQuantity;
        console.log(`Updated quantity for "${book.title}" to ${book.quantity}.`);
    }
    else {
        console.log(`Book with ID ${bookId} not found.`);
    }
}
displayInventory(library);
const searchResults = searchBooks(library, "1984", "title");
console.log("\nSearch Results by Title:");
console.log(searchResults);
updateBookQuantity(library, 2, 10);
console.log("\nUpdated Inventory:");
displayInventory(library);
