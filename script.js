const bookContainer = document.querySelector('.bookContainer');
class BookShelf {
  constructor() {
    this.book = JSON.parse(localStorage.getItem('books')) || [];
  }

  addBook = () => {
    const formData = document.querySelectorAll('input');
    const title = formData[0].value;
    const author = formData[1].value;
    if (title.trim() === '' || author.trim() === '') return;
    const id = Date.now().toString();
    this.book.push({ title, author, id });
    console.log(this.book)
    localStorage.setItem('books', JSON.stringify(this.book));
    window.location.reload();
  };


}
const g = new BookShelf()
g.book.forEach((b) => {
  bookContainer.innerHTML += `
      <div class="innerContainer">
        <p>"${b.title}" by ${b.author}</p>
        <button class="removeBtn" id="${b.id}">Remove</button>
      </div>
    `;
});


document.querySelector('.addBtn').addEventListener('click', g.addBook);
console.log(g.book)

