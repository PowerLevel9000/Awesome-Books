const menuItems = document.querySelectorAll('li');
const sections = document.querySelectorAll('section');
const reset = () => {
  sections.forEach((section) => {
    section.style.display = 'none';
  });
};
reset();
sections[0].style.display = 'block';

menuItems[0].addEventListener('click', () => {
  reset();
  sections[0].style.display = 'block';
});

menuItems[1].addEventListener('click', () => {
  reset();
  sections[1].style.display = 'block';
});

menuItems[2].addEventListener('click', () => {
  reset();
  sections[2].style.display = 'block';
});

const menuBtn = document.getElementById('burger-container');
const navOverlay = document.getElementById('nav');
const navList = document.getElementsByClassName('menu')[0];
const burgerBar = document.getElementsByClassName('hamRotate')[0];
const overlay = () => {
  navOverlay.classList.toggle('invisible');
  burgerBar.classList.toggle('active');
  navOverlay.style.animation = 'awesome-out 1s';
};

menuBtn.addEventListener('click', overlay);
navList.addEventListener('click', overlay);

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

    localStorage.setItem('books', JSON.stringify(this.book));
    window.location.reload();
  };

  removeBook = (id) => {
    const filteredBooks = this.book.filter((b) => b.id !== id);
    localStorage.setItem('books', JSON.stringify(filteredBooks));
    window.location.reload();
  };
}
const bookContainer = document.querySelector('.bookContainer');
const g = new BookShelf();
g.book.forEach((b) => {
  bookContainer.innerHTML += `
      <div class="innerContainer">
        <p>"${b.title}" by ${b.author}</p>
        <button class="removeBtn" id="${b.id}">Remove</button>
      </div>
    `;
});

bookContainer.addEventListener('click', (e) => {
  const clickedBtn = e.target.closest('.removeBtn');
  if (!clickedBtn) return;
  const idToRemove = clickedBtn.id;
  g.removeBook(idToRemove);
});

document.querySelector('.addBtn').addEventListener('click', g.addBook);