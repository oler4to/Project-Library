const popup = document.querySelector('.popup');
const inputs = document.querySelectorAll('.popup form input');
const addBookBtn = document.querySelector('.popup form .addBook');

const books = document.querySelector('.books');
const createEntryBtn = document.querySelector('.books .createEntry')

let myLibrary = [];
let storeDetails = {
  title: "",
  author: "",
  pages: 0,
  read: false,
}
let i = 0;

function Book(a){
  this.title = a.title;
  this.author = a.author;
  this.pages = a.pages;
  this.hasRead = a.read;
}

