let myLibrary = [];
let i = 0;
let valueMissing = true;

function Book(a){
 
  this.entryPosition = `book${i}`;
  this.title = a.title;
  this.author = a.author;
  this.pages = a.pages;
  this.hasRead = a.read;

}