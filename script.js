let myLibrary = [];
let i = 0;
let valueMissing = true;

function checkForValue() {
  inputs.forEach((input) => {
    if ((input.type == "text" || input.type == "number") && input.value !== "") {
    valueMissing = false
    } else if ((input.type == "text" || input.type == "number") && input.value == ""){
      valueMissing = true
      valueMissingError.textContent = "* Please fill in all text fields"
      valueMissingError.style.display = "block"
    }
  })
}

inputs.forEach((input) => {
  input.addEventListener('input', function(event){
      if((input.type == "text" || input.type == "number") && input.value !== ""){
        valueMissing = false;
        valueMissingError.style.display = 'none'
      }
    })
})

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
      bookAuthor.textContent = `by ${a.author}`;
      book.appendChild(bookAuthor);
  let bookPages = document.createElement('span');
      bookPages.textContent = `${a.pages} pages`;
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
  popupForm.style.display = "flex",
  createEntryBtn.style.display = "none"
});

closePopup.addEventListener('click', () => {
  popupForm.style.display = "none",
  createEntryBtn.style.display = "block"
})

addBookBtn.addEventListener('click', () => {
  checkForValue();
  
  if (valueMissing == false) {
  popupForm.style.display = "none",
  createEntryBtn.style.display = "block";
  addDetails(storeDetails);
  myLibrary[`book${++i}`] = new Book(storeDetails);
  appendBook(myLibrary[`book${i}`]);
  }
  
})