const books = [
    {title: "Genesis", type:"pentateuco"},
    {title: "Exodo", type:"pentateuco"},
    {title: "Isaias", type:"profetas"},
    {title: "Jeremias", type:"profetas"},
    {title: "Marcos", type:"evangelhos"},
    {title: "Joao", type:"evangelhos"},
    {title: "Romanos", type:"cartas"},
    {title: "Hebreus", type:"cartas"},
    {title: "1 Corintios", type:"cartas"},
    {title: "Lucas", type:"evangelhos"},
    {title: "Levitico", type:"pentateuco"}   
]

function filterBooks(event) {
    event.preventDefault();

    const bookType = document.getElementById('bookType').value;
    const filteredBooks = bookType === "todos" ? books : books.filter(book => book.type === bookType);

    // Exibir os livros filtrados
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';

    filteredBooks.forEach(book => {
        const li = document.createElement('li');
        li.textContent = book.title;
        bookList.appendChild(li);
    });
}

// Adicionando o evento de submit no formulário
document.getElementById('bookForm').addEventListener('submit', filterBooks);

// Inicializar a lista com todos os livros
window.onload = filterBooks;