let i = 1;
let Library = [];
let valueIsMissing = true;

function Book(a){
 
  this.entryPosition = `book${i}`;
  this.title = a.title;
  this.author = a.author;
  this.pages = a.pages;
  this.hasRead = a.read;

}