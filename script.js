let myLibrary = [];

const newTitle = document.querySelector("#title")
const newAuthor = document.querySelector("#author")
const newPages = document.querySelector("#pages")
const bookForm = document.querySelector("#addBookForm")

function Book(title, author, pages) {
  this.title = title
  this.author = author
  this.pages = pages
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}

function addBookRow (n, title, author, pages) {
  // (B1) GET TABLE
  var table = document.getElementById("demoA");

  // (B2) INSERT ROW
  var row = table.insertRow();

  // (B3) INSERT CELLS
  var headerCell = document.createElement("TH");
  row.appendChild(headerCell);
  headerCell.innerHTML = n;
  var cell = row.insertCell();
  cell.innerHTML = title;
  cell = row.insertCell();
  cell.innerHTML = author;
  cell = row.insertCell();
  cell.innerHTML = pages;
}

function createTable () {
  let n = 0
  myLibrary.forEach((book) => {
    n += 1
    addBookRow(n, book.title, book.author, book.pages)
  })
}





// Collects user book info, creating a new object
bookForm.addEventListener("submit", bookInfo)
function bookInfo(e) {
  e.preventDefault(); //To prevent submission of the form
  userBook = new Book(`${newTitle.value}`, `${newAuthor.value}`, `${newPages.value}`)
  myLibrary.push(userBook) // Saves user's new book in my myLibrary
  clear()
  createTable()
}

// It clears all inputs and hides form
function clear() {
  newTitle.value = ''
  newAuthor.value = ''
  newPages.value = ''
}





const book1 = new Book('Hunger games', 'Collins', '55')
const book2 = new Book('Perks of beings a wallflower', 'Stephen Chbosky', '88')

addBookToLibrary(book1)
addBookToLibrary(book2)
createTable()