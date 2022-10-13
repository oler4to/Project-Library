const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.popupForm .closePopup')
const inputs = document.querySelectorAll('.popup .popupForm input');
const addBookBtn = document.querySelector('.popup .popupForm .addBook');

const books = document.querySelector('.books');
const createEntryBtn = document.querySelector(' .createEntry')

let myLibrary = [];
let storeDetails = {
  title: "",
  author: "",
  pages: 0,
  read: false,
}
let i = 0;

function addDetails(a) {
  
    inputs.forEach((input) => {
    for (const prop in a) {
      if(input.name == prop){
        
        if (input.name == 'read' && input.checked) {
          a.read = true;
          input.checked = false;
        } else if(input.name == 'read' && !input.checked){
          a.read = false;
        } else{
          storeDetails[prop] = input.value;
        }
        
      }
    }
    
    input.value = "";
  });
}

function Book(a){
  this.entryPosition = `book${i}`;
  this.title = a.title;
  this.author = a.author;
  this.pages = a.pages;
  this.hasRead = a.read;
}

Book.prototype.deleteEntry = function(){
  delete myLibrary[this.entryPosition]
}

function appendBook(a){
  let book = document.createElement('div');
  book.classList.add(`book`);
  
  let bookTitle = document.createElement('span');
      bookTitle.classList.add('title');
      bookTitle.textContent = `"${a.title}"`;
      book.appendChild(bookTitle);
  let bookAuthor = document.createElement('span');
      bookAuthor.textContent = a.author;
      book.appendChild(bookAuthor);
  let bookPages = document.createElement('span');
      bookPages.textContent = a.pages;
      book.appendChild(bookPages);
  let readStatus = document.createElement('span');
      readStatus.classList.add('readStatus')
      readStatus.textContent = "Read"
      
  let checkForRead = document.createElement('span');
      checkForRead.classList.add('readStatusBtn')
      
      if(a.hasRead == false){
          checkForRead.style.backgroundColor = "red"
      } else if (a.hasRead == true){
          checkForRead.style.backgroundColor = "green"
      }
      book.appendChild(readStatus);
      
      checkForRead.addEventListener('click', () => { 
        if(a.hasRead == false){
          a.hasRead = true;
          checkForRead.style.backgroundColor = "green"
      } else if (a.hasRead == true){
          a.hasRead = false;
          checkForRead.style.backgroundColor = "red"
      }
        
      })
      readStatus.appendChild(checkForRead)
      
      books.appendChild(book);
      
  let removeButton = document.createElement('button');
      removeButton.textContent = "×";
      book.appendChild(removeButton)
      removeButton.addEventListener('click', () => {
        a.deleteEntry(),
        books.removeChild(book)
      })
  
}


createEntryBtn.addEventListener('click', () => {
  popup.style.display = "flex",
  createEntryBtn.style.display = "none"
});

closePopup.addEventListener('click', () => {
  popup.style.display = "none",
  createEntryBtn.style.display = "block"
})

addBookBtn.addEventListener('click', () => {
  popup.style.display = "none",
  createEntryBtn.style.display = "block",
  addDetails(storeDetails),
  myLibrary[`book${++i}`] = new Book(storeDetails),
  appendBook(myLibrary[`book${i}`]),
  console.log(myLibrary);
})