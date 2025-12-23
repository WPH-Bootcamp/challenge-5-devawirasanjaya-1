// src/challenge1.ts

type Book = {
  title: string;
  author: string;
  year: number;
};

const books: Book[] = [];

function addBook(
  title: string,
  author: string,
  year: number
): void {
  books.push({ title, author, year });
  console.log(`Book added: "${title}" by ${author} (${year})`);
}

function listBooks(): void {
  if (books.length === 0) {
    console.log('No books available.');
    return;
  }

  console.log('All Books:');
  books.forEach((book) => {
    console.log(`- ${book.title} by ${book.author} (${book.year})`);
  });
}

function searchBook(title?: string): void {
  if (!title) {
    console.log('Please provide a title to search.');
    return;
  }

  const results = books.filter((book) =>
    book.title.includes(title)
  );

  if (results.length === 0) {
    console.log(
      `No books found with title containing "${title}".`
    );
    return;
  }

  console.log(`Search Results for "${title}":`);
  results.forEach((book) => {
    console.log(`- ${book.title} by ${book.author} (${book.year})`);
  });
}

export { addBook, listBooks, searchBook };

