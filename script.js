const library = document.getElementById('library');
const popup = document.getElementById('popup');
const inputs = document.querySelectorAll('.form input[required]');
const radio = document.querySelector('.form .read input')

const pgNotNumber = document.getElementById('pgNotNumber');

const cancel = document.querySelector('.form #buttons .cancel');
const done = document.querySelector('.form #buttons .done');

const missingValue = document.getElementById('missingValue');
      missingValue.style.display = 'none';
      
const addnew = document.getElementById('new');

let i = 1;
let Library = [];

class Book{
  
 #addToLibrary
 
 constructor(entry, title, author, pages, hasRead){
   this.entry = `b${entry}`;
   this.title = title;
   this.author = author;
   this.pages = pages
   
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

          if(this.hasRead == true){
            readDisplay.textContent = "READ";
            readDisplay.style = "color: #DFFFD0"
          } else if (this.hadRead == false){
            readDisplay.textContent = "NOT READ";
            readDisplay.style = "color: #FFC1C1"
          }
        
      readDisplay.addEventListener('click', () => {
        if(this.hasRead == true){
          this.hasRead = false;
          readDisplay.textContent = "NOT READ";
          readDisplay.style = "color: #FFC1C1";
        } else if (this.hasRead == false){
          this.hasRead = true;
          readDisplay.textContent = "READ";
          readDisplay.style = "color: #DFFFD0";
        }
      })
        
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



function clear(){
  inputs.forEach((input) => {
       input.value = ""
   });
   
   if(radio.checked){
   radio.checked = !(radio.checked)
   }
   
  popup.style.display = "none";
  addnew.style.display = "flex"
}

let inputArray = Array.from(inputs)
let arrayOfBooleans = []

function areInputsEmpty(){
  arrayOfBooleans  = []
  inputArray.every(input =>{
  return arrayOfBooleans.push(input.value == "")
 })
}

function isValueMissing(value){
    return value == false
 }


function makeEntry(){
  let newBook = new Book (i++, inputs[0].value, inputs[1].value, inputs[2].value, radio);
  clear()
  newBook.checkAmtOfPages
  newBook.appendEntry;
}

cancel.onclick = () => clear();

done.addEventListener('click', () => {
  inputArray = Array.from(inputs)
  areInputsEmpty()
  
  let inputValueMissing = inputArray.every(input => {
      if(input.value == ""){
        return true
      } else {
        return false
      }
  })
  
  if(inputValueMissing == false){
    missingValue.style.display = "none"
    
      if(arrayOfBooleans.every(isValueMissing) == true){
        missingValue.style.display = "none";
        makeEntry()
      } else {
        missingValue.style.display = "block";
      } 
      
  } else if (inputValueMissing == true) {
    missingValue.style.display = "block";
  }
  
})

addnew.addEventListener('click', () => {
  popup.style.display = "flex";
  addnew.style.display = "none"
})
