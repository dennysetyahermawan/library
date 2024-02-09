let books = [];

function addBook() {
  const title = document.getElementById("bookTitle").value;
  const author = document.getElementById("bookAuthor").value;

  if (title && author) {
    const book = { title, author };
    books.push(book);
    displayBooks();
    clearInputFields();
  } else {
    alert("Judul dan penulis buku harus diisi!");
  }
}

function displayBooks(filteredBooks = books) {
  const bookList = document.querySelector("#bookList tbody");
  bookList.innerHTML = "";

  filteredBooks.forEach((book, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
                    <td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>
                        <button onclick="editBook(${index})">Edit</button>
                        <button onclick="deleteBook(${index})">Hapus</button>
                    </td>
                `;
    bookList.appendChild(row);
  });
}

function editBook(index) {
  const newTitle = prompt("Masukkan judul buku baru:");
  const newAuthor = prompt("Masukkan penulis buku baru:");

  if (newTitle && newAuthor) {
    books[index].title = newTitle;
    books[index].author = newAuthor;
    displayBooks();
  } else {
    alert("Judul dan penulis buku harus diisi!");
  }
}

function deleteBook(index) {
  const confirmation = confirm("Apakah Anda yakin ingin menghapus buku ini?");
  if (confirmation) {
    books.splice(index, 1);
    displayBooks();
  }
}

function clearInputFields() {
  document.getElementById("bookTitle").value = "";
  document.getElementById("bookAuthor").value = "";
}

function searchBooks() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm) ||
      book.author.toLowerCase().includes(searchTerm)
  );
  displayBooks(filteredBooks);
}

// Tampilkan buku-buku awal (jika ada)
displayBooks();
