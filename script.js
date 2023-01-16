let database = [
  
];

let data2=JSON.parse(localStorage.getItem('database'))

const books = document.getElementById('bookCollection');


for(let i=0;i<data2.length;i+=1){
  books.innerHTML += `
      <article class="book-card">
          <p class="book-title">${data2[i].title}</p>
          <p class="book-author">${data2[i].author}</p>
          <button class="book-btn">Remove</button>
          <hr>
      </article>
`
}


const addBooks = () => {
  const form = document.querySelectorAll('input');
  const title = form[0].value;
  const author = form[1].value
  database.push({ title, author })
  localStorage.setItem('database',JSON.stringify(database))
  console.log(data2)

  location.reload()
 }

 const addBtn =document.getElementById('addBtn')
 addBtn.addEventListener('click',addBooks)