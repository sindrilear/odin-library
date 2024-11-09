const myLibrary = [];

function Book(title,author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
      info = title.concat(', ', author, ', ', pages, ', ', read)
      return info
  }
}
  
const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295', 'Not read');
const fellowship = new Book('The Fellowship of the Ring', 'J.R.R Tolkien', '423', 'Not read');
myLibrary.push(theHobbit, fellowship)

numberOfBooks = myLibrary.length;

  function createCards(n) {
    const cardContainer = document.querySelector(".mainwrapper")

    for (let i = 0; i < numberOfBooks; i++) {
      let title = myLibrary[i].title;
      let author = myLibrary[i].author;
      let pages = myLibrary[i].pages;
      let read = myLibrary[i].read;

      const cardRow = document.createElement("div");
      cardRow.className = "card";
      cardContainer.appendChild(cardRow);

      const heading = document.createElement("h3");
      heading.textContent = title;
      cardRow.appendChild(heading);

      const authorDisplay = document.createElement("p")
      authorString = `<strong>Author:</strong> ${author}`
      authorDisplay.innerHTML = authorString;
      cardRow.appendChild(authorDisplay);

      const pagesDisplay = document.createElement("p")
      pagesString = `<strong>Pages:</strong> ${pages}`
      pagesDisplay.innerHTML = pagesString;
      cardRow.appendChild(pagesDisplay);

      const readDisplay = document.createElement("p")
      readString = `<strong>Read / Not Read:</strong> ${read}`
      readDisplay.innerHTML = readString;
      cardRow.appendChild(readDisplay);
    }
  }

createCards(numberOfBooks);

function createCard(n) {
  const cardContainer = document.querySelector(".mainwrapper")

  let title = myLibrary[n].title;
  let author = myLibrary[n].author;
  let pages = myLibrary[n].pages;
  let read = myLibrary[n].read;

  const cardRow = document.createElement("div");
  cardRow.className = "card";
  cardContainer.appendChild(cardRow);

  const heading = document.createElement("h3");
  heading.textContent = title;
  cardRow.appendChild(heading);

  const authorDisplay = document.createElement("p")
  authorString = `<strong>Author:</strong> ${author}`
  authorDisplay.innerHTML = authorString;
  cardRow.appendChild(authorDisplay);

  const pagesDisplay = document.createElement("p")
  pagesString = `<strong>Pages:</strong> ${pages}`
  pagesDisplay.innerHTML = pagesString;
  cardRow.appendChild(pagesDisplay);

  const readDisplay = document.createElement("p")
  readString = `<strong>Read / Not Read:</strong> ${read}`
  readDisplay.innerHTML = readString;
  cardRow.appendChild(readDisplay);
}

const form = document.getElementById('form')

form.addEventListener('submit', function(event) {
  event.preventDefault()

  let title = document.getElementById('tname').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let read = document.querySelector('input[name="readStatus"]:checked').value;

  const createBook = new Book(title, author, pages, read);
  myLibrary.push(createBook);
  numberOfBooks++;
  createCard(numberOfBooks - 1);
});