function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read ? "Read" : "Not read yet" 

    this.info = function(){
        console.log(`${this.title}, ${this.author}, ${this.pages}, ${this.read}`);
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkein","295", true)

theHobbit.info()

console.log(Object.getPrototypeOf(theHobbit) === Book.prototype) // this is to understand - WHAT ARE PROTOTYPES?
console.log(Object.getPrototypeOf(Object.prototype));