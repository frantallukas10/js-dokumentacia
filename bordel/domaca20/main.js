// faktory function
// vytvor funkciu book ktora bude mat vstupne parametre title, author, isbn bude to function fuctory

function book(title, author, isbn) {
  return {
    titleL: title,
    author: author,
    isbn: isbn
  };
}

// zavolat funkciu book a vloz hodnoty ('super', 'Janko hrasko', 150156016516501)

const obsahBook = book('super', 'Janko Hrasko', 150156016516501);

console.log('book1:', obsahBook);

// vytvor funkciu UI ktora bude mat funkcie addBookToList, showAlert, deleteBook, clearFields kazda z tychto funkcii bude konzolovat svoj nazov

function UI1() {
  this.addBookToList = function() {
    console.log('addBookToList');
  };
  this.showAlert = function() {
    console.log('showAlert');
  };
  this.deleteBook = function() {
    console.log('deleteBook');
  };
  this.clearFields = function() {
    console.log('clearFields');
  };
}
// skus tu prvu funkciu Book nacitat v funkcii UI a vykonzoluj jej parametre

const ui = new UI1();

console.log(ui);

ui.addBookToList();
ui.showAlert();
ui.deleteBook();
ui.clearFields();

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
  constructor(book, alert, removedBook, clearBook) {
    this.book = book;
    this.alert = alert;
    this.removedBook = removedBook;
    this.clearBook = clearBook;
  }

  addBookToList() {
    console.log(this.book);
  }
  showAlert() {
    console.log(this.alert);
  }
  deleteBook() {
    console.log(this.removedBook);
  }
  clearFields() {
    console.log(this.clearBook);
  }
}

// skuss tu prvu classu Book nacitat v classe UI a vykonzoluj jej parametre

class Book3 extends UI2 {
  constructor(book, alert, removedBook, clearBook, title, author, isbn) {
    super(book, alert, removedBook, clearBook);

    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
const kniha = new Book3(
  'addBookToList',
  'showAlert',
  'deleteBook',
  'clearFields',
  'Ruzova zahrada',
  'Jozko Mrkvicka',
  333333333333
);
console.log(kniha);

kniha.addBookToList();
kniha.showAlert();
kniha.deleteBook();
kniha.clearFields();
