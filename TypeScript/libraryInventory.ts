enum Genre {
    Fiction = "Fiction",
    NonFiction = "Non-Fiction",
    Mystery = "Mystery",
    Thriller = "Thriller",
    Fantasy = "Fantasy",
  }

  type BookFormat = "Paperback" | "Hardcover" | "Ebook";

  interface Book {
    id: number;
    title: string;
    author: string;
    genre: Genre;
    quantity: number;
  }
  
  interface LibraryBook extends Book {
    format: BookFormat;
  }
  
  interface Library {
    books: LibraryBook[];
  }

  const library: Library = {
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

  function displayInventory(library: Library): void {
    console.log("Library Inventory:");
    library.books.forEach((book) => {
      console.log(
        `ID: ${book.id}, Title: ${book.title}, Author: ${book.author}, Genre: ${book.genre}, Quantity: ${book.quantity}, Format: ${book.format}`
      );
    });
  }

  function searchBooks(
    library: Library,
    searchTerm: string,
    field: "title" | "author" | "genre"
  ): LibraryBook[] {
    return library.books.filter((book) => book[field].toLowerCase().includes(searchTerm.toLowerCase()));
  }

  function updateBookQuantity(library: Library, bookId: number, newQuantity: number): void {
    const book = library.books.find((book) => book.id === bookId);
    if (book) {
      book.quantity = newQuantity;
      console.log(`Updated quantity for "${book.title}" to ${book.quantity}.`);
    } else {
      console.log(`Book with ID ${bookId} not found.`);
    }
  }

  // Display initial inventory
displayInventory(library);

// Search for books by title
const searchResults = searchBooks(library, "1984", "title");
console.log("\nSearch Results by Title:");
console.log(searchResults);

// Update book quantity
updateBookQuantity(library, 2, 10);

// Display updated inventory
console.log("\nUpdated Inventory:");
displayInventory(library);

  