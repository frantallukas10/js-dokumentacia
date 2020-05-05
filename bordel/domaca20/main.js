// faktory function
// vytvor funkciu Book ktora bude mat vstupne parametre title, author, isbn bude to function fuctory

function Book1(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// vytvor instanciu Book funkcie a vloz hodnoty ('super', 'Janko hrasko', 150156016516501)

const book1 = new Book1('super', 'Janko Hrasko', 150156016516501);

console.log('book1:', book1);

// vytvor funkciu UI ktora bude mat funkcie addBookToList, showAlert, deleteBook, clearFields kazda z tychto funkcii bude konzolovat svoj nazov

function UI1(addBookToList, showAlert, deleteBook, clearFields) {
  this.addBookToList = function() {
    console.log(`${addBookToList}`);
  };
  this.showAlert = function() {
    console.log(`${showAlert}`);
  };
  this.deleteBook = function() {
    console.log(`${deleteBook}`);
  };
  this.clearFields = function() {
    console.log(`${clearFields}`);
  };
  console.log(Object.getPrototypeOf(book1));
}

const addBookToList = new UI1('addBookToList');
addBookToList.addBookToList();

const showAlert = new UI1('showAlert');
showAlert.showAlert();

const deleteBook = new UI1('deleteBook');
deleteBook.deleteBook();

const clearFields = new UI1('clearFields');
clearFields.clearFields();

// skus tu prvu funkciu Book nacitat v funkcii UI a vykonzoluj jej parametre

// class objekt
// vytvor class objekt so vstupnymi hodnotami ako v predoslej funkcii Book

class Book2 {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
// vytvor instanciu Book funkcie a vloz hodnoty ('super', 'Janko hrasko', 150156016516501)

const book2 = new Book2('super', 'Janko Hrasko', 150156016516501);

console.log('book2:', book2);

// vytvor class objekt so vsetkymi funkciami ako hore v UI faktory funkcii

class UI2 {
  constructor(addBookToList, showAlert, deleteBook, clearFields) {
    this.addBookToList() = addBookToList;
    this.showAlert() = showAlert;
    this.deleteBook() = deleteBook;
    this.clearFields() = clearFields;
  }
}

// skuss tu prvu classu Book nacitat v classe UI a vykonzoluj jej parametre

// class UI2 extends Book2 {
//   constructor(
//     addBookToList,
//     showAlert,
//     deleteBook,
//     clearFields,
//     title,
//     author,
//     isbn
//   ) {
//     super(title, author, isbn);
//     this.title = title;
//     this.author = author;
//     this.isbn = isbn;
//   }
// }
