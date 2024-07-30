const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleReadStatus = function() {
    this.read = !this.read;
};

function addBookToLibrary(book) {
    myLibrary.push(book);
    displayBooks();
}

function displayBooks() {
    const libraryDiv = document.getElementById('library');
    libraryDiv.innerHTML = ''; 

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.dataset.index = index;

        const title = document.createElement('h3');
        title.textContent = book.title;

        const author = document.createElement('p');
        author.textContent = `Author: ${book.author}`;

        const pages = document.createElement('p');
        pages.textContent = `Pages: ${book.pages}`;

        const read = document.createElement('p');
        read.textContent = `Read: ${book.read ? 'Yes' : 'No'}`;

        const toggleReadBtn = document.createElement('button');
        toggleReadBtn.textContent = 'Toggle Read';
        toggleReadBtn.addEventListener('click', () => {
            book.toggleReadStatus();
            displayBooks();
        });

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', () => {
            myLibrary.splice(index, 1);
            displayBooks();
        });

        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);
        bookCard.appendChild(read);
        bookCard.appendChild(toggleReadBtn);
        bookCard.appendChild(removeBtn);
        libraryDiv.appendChild(bookCard);
    });
}
document.getElementById('newBook').addEventListener('click', () => {
    const formContainer = document.getElementById('formContainer');
    formContainer.style.display = formContainer.style.display === 'none' ? 'block' : 'none';
});
document.getElementById('Form').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
    addBookToLibrary(new Book(title, author, pages, read));
    document.getElementById('Form').reset();
    document.getElementById('formContainer').style.display = 'none';
});
addBookToLibrary(new Book('The Hobbit', 'J.R.R. Tolkien', 310, true));
addBookToLibrary(new Book('Harry Potter and the Philosopher\'s Stone', 'J.K. Rowling', 223, false));
addBookToLibrary(new Book('1984', 'George Orwell', 328, true));
addBookToLibrary(new Book('To Kill a Mockingbird', 'Harper Lee', 281, false));