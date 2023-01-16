const bookContainer = document.querySelector('.bookContainer');
let books = JSON.parse(localStorage.getItem('books')) || [];
books.forEach(book => {
    bookContainer.innerHTML += `
        <p>"${book.title}"</p>
        <p>by ${book.author}</p>
        <button class="removeBtn" id="${book.id}">Remove</button>
        <hr>
`;    
});
const addBook = () => {
    let formData = document.querySelectorAll('input');
    const title = formData[0].value;
    const author = formData[1].value;
    const id = Date.now().toString();
    books.push({title, author, id});
    localStorage.setItem('books', JSON.stringify(books));
}

document.querySelector('.addBtn').addEventListener('click', addBook);

const removeBook = (id) => {
    let filteredBooks = books.filter((book) => book.id !== id);
    localStorage.setItem('books', JSON.stringify(filteredBooks));
    location.reload();
}
// document.querySelector('removeBtn').addEventListener('click', removeBook);
bookContainer.addEventListener("click", (e) => {
    const clickedBtn = e.target.closest(".removeBtn");
    if (!clickedBtn) return;
  
    const idToRemove = clickedBtn.id;
  
    removeBook(idToRemove);
  });