interface Book {
  BookId: number;
  Category: string;
  Title: string;
  Author: string;
  PublishDate: Date;
  Publisher: string;
  TotalPageNumber: number;
}

function logMethod(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    try {
      const result = originalMethod.apply(this, args);
      console.log(`${key} returned: ${JSON.stringify(result)}`);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error in ${key}: ${error.message} `);
        return null;
      }
    }
  };
  return descriptor;
}

function validateBook(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    try {
      const [book] = args;
      if (!book.Title && !book.Author && !book.PublishDate) {
        throw new Error(
          "Invalid input. At least one field must be provided: title, author, publish date"
        );
      }
      return originalMethod.apply(this, args);
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error in ${key}: ${error.message} `);
        return null;
      }
    }
  };
  return descriptor;
}

function getUserInput(prompt: string) {
  const readlineSync = require("readline-sync");
  return readlineSync.question(prompt);
}

function displayError(message: string) {
  console.error(`Error: ${message}`);
}

class BookManager<T extends Book> {
  private books: T[] = [];

  @logMethod
  @validateBook
  addBook(book: T): void {
    if (book) {
      this.books.push(book);
    }
  }

  @logMethod
  updateBook(bookId: number, updatedBook: Partial<T>): void {
    try {
      const index = this.findBookIndexById(bookId);
      if (index !== -1) {
        this.books[index] = { ...this.books[index], ...updatedBook };
      } else {
        console.error(`Book not found with the book id: ${bookId}`);
      }
    } catch (error) {
      /// Error will be handled in decorator
    }
  }

  @logMethod
  deleteBook(bookId: number):void {
    const index = this.findBookIndexById(bookId);
    try {
      if (index !== -1) {
        this.books.splice(index, 1)[0];
      }
    } catch (error) {
      /// Error will be handled in decorator
    }
  }

  @logMethod
  listBooks(): T[] {
    this.books.forEach((book) => {
      console.log(`${book.BookId}: ${book.Title} by ${book.Author}`);
    });
    return this.books;
  }

  private findBookIndexById(id: number) {
    return this.books.findIndex((book) => book.BookId === id);
  }
}

function main(): void {
  const bookManager = new BookManager<Book>();

  while (true) {
    console.log("\n Options: ");
    console.log("1. Add book: ");
    console.log("2. Update: ");
    console.log("3. Delete: ");
    console.log("4. List: ");
    console.log("5. Exit: ");

    const choice = parseInt(getUserInput("Enter your choice: "), 10);

    switch (choice) {
      case 1:
        const newBook: Book = {
          BookId: bookManager.listBooks.length + 1,
          Title: getUserInput("Enter the title: "),
          Author: getUserInput("Enter the author: "),
          Category: getUserInput("Enter the category: "),
          TotalPageNumber: getUserInput("Enter the total page number: "),
          PublishDate: getUserInput("Enter the publish date: "),
          Publisher: getUserInput("Enter the publisher: "),
        };
        bookManager.addBook(newBook);

        break;
      case 2:
        const idToUpdate = parseInt(
          getUserInput("enter the book id to update: "),
          10
        );
        const updatedBook: Partial<Book> = {
          Title: getUserInput(
            "Enter title to update or leave empty for skip.. :"
          ),
          Author: getUserInput(
            "Enter Author to update or leave empty for skip.. :"
          ),
          Category: getUserInput(
            "Enter Category to update or leave empty for skip.. :"
          ),
          PublishDate: getUserInput(
            "Enter PublishDate to update or leave empty for skip.. :"
          ),
          Publisher: getUserInput(
            "Enter Publisher to update or leave empty for skip.. :"
          ),
          TotalPageNumber: getUserInput(
            "Enter TotalPageNumber to update or leave empty for skip.. :"
          ),
        };
        bookManager.updateBook(idToUpdate, updatedBook);
        break;
      case 3:
        const idToDelete = parseInt(
          getUserInput("enter book id to delete: "),
          10
        );
        bookManager.deleteBook(idToDelete);
        break;
      case 4:
        bookManager.listBooks();
        break;
      case 5:
        console.log("Exiting...");
        process.exit(0);
        break;

      default:
        displayError("choose a valid option...");
    }
  }
}
 main();