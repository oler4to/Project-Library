const library = document.getElementById('library');
const popup = document.getElementById('popup');
const inputs = document.querySelectorAll('.form input');

const cancel = document.querySelector('.form #buttons .cancel');
const done = document.querySelector('.form #buttons .done');

const missingValue = document.getElementById('missingValue');
      missingValue.style.display = 'none';
      
const addnew = document.getElementById('new');

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
   
    if(hasRead.checked){
     this.hasRead = true;
    } else {
     this.hadRead = false;
    }
   
     this.#addToLibrary = (() => {
       Library[this.entry] = this
      })();
      
      
 }
 
 get appendEntry(){
   
   let bEntry = document.createElement('div');
       bEntry.classList.add('bEntry');
       
    let titleDisplay = document.createElement('span');
    let authorDisplay = document.createElement('span');
    let pagesDisplay = document.createElement('span');
    let readDisplay = document.createElement('span');
    let remove = document.createElement('button')
    
        titleDisplay.classList.add('title');
        authorDisplay.classList.add('author');
        pagesDisplay.classList.add('pages');
        readDisplay.classList.add('rStatus');
        remove.classList.add('remove')
        
        titleDisplay.textContent = `"${this.title}"`;
        authorDisplay.textContent = `by ${this.author}`;
        pagesDisplay.textContent = `${this.pages} pages`;
        
          if(this.hasRead){
            readDisplay.textContent = "READ";
          } else {
            readDisplay.textContent = "NOT READ";
          }
        
        remove.textContent = "remove"
          
        remove.addEventListener('click', () => {
          delete Library[this.entry];
          library.removeChild(bEntry)
        })
          
        bEntry.appendChild(titleDisplay);
        bEntry.appendChild(authorDisplay);
        bEntry.appendChild(pagesDisplay);
        bEntry.appendChild(readDisplay);
        bEntry.appendChild(remove);
        
        library.appendChild(bEntry)
 }

}

function clearInputs(){
  inputs.forEach((input) => {
     if(input.type == "radio" && input.checked){
       input.checked = !(input.checked)
     } else {
       input.value = ""
     }
   });
  popup.style.display = "none";
  addnew.style.display = "flex"
}


function isValueMissing(){
  inputs.forEach((input) => {
    if(input.required && input.value != ""){
      valueIsMissing = false;
    } else if (input.required && input.value == ""){
      valueIsMissing = true;
    }
  })
}

function makeEntry(){
  let newBook = new Book (i++, inputs[0].value, inputs[1].value, inputs[2].value, inputs[3]);
  clearInputs()
  newBook.appendEntry;
  console.log(Library)
}

cancel.onclick = () => clearInputs();

done.addEventListener('click', () => {
  isValueMissing();
  if(valueIsMissing == true){
    missingValue.style.display = "block";
  } else if (valueIsMissing == false){
    missingValue.style.display = "none";
    makeEntry()
  }
})

addnew.addEventListener('click', () => {
  popup.style.display = "flex";
  addnew.style.display = "none"
})
