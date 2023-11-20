const library = document.getElementById('library');
const popup = document.getElementById('popup');
const inputs = document.querySelectorAll('.form input');

const cancel = document.querySelector('.form #buttons .cancel');
const done = document.querySelector('.form #buttons .done');

let i = 1;
let Library = [];
let valueIsMissing = true;

class Book{
  
 #addToLibrary
 
 constructor(entry, title, author, pages, hasRead){
   this.entry = `b${entry}`;
   this.title = title;
   this.author = author;
   this.pages = pages;
   this.hadRead = hasRead;
   
     this.#addToLibrary = (() => {
       Library[this.entry] = this
      })();
      
      
 }
 
 get removeEntry(){
   delete Library[this.entry]
 }
 
 get appendEntry(){
   let bEntry = document.createElement('div');
       bEntry.classList.add('bEntry');
       
    let titleDisplay = document.createElement('span');
    let authorDisplay = document.createElement('span');
    let pagesDisplay = document.createElement('span');
    let readDisplay = document.createElement('span');
    
        titleDisplay.classList.add('title');
        authorDisplay.classList.add('author');
        pagesDisplay.classList.add('pages');
        readDisplay.classList.add('rStatus');
        
        titleDisplay.textContent = `"${this.title}"`;
        authorDisplay.textContent = `by ${this.author}`;
        pagesDisplay.textContent = `${this.pages} pages`;
        
          if(this.hasRead == true){
            readDisplay.textContent = "READ";
          } else {
            readDisplay.textContent = "NOT READ";
          }
          
        bEntry.appendChild(titleDisplay);
        bEntry.appendChild(authorDisplay);
        bEntry.appendChild(pagesDisplay);
        bEntry.appendChild(readDisplay);
        
        library.appendChild(bEntry)
 }

}

function makeEntry(){
  const newBook = new Book (i++, "Example", "JustSome Author", 50, true);
  newBook.appendEntry
  console.log(Library)
}

done.addEventListener('click', () => {
  makeEntry()
})
