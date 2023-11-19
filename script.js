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

}

function makeEntry(){
  const newBook = new Book (i++, "Example", "JustSome Author", 50, true);
  console.log(Library)
}

makeEntry()