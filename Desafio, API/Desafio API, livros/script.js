document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const booksContainer = document.getElementById('books-container');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const query = searchInput.value.trim();
        if (query) {
            fetchBooks(query);
        }
    });

    function fetchBooks(query) {
        const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=5`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const books = data.items;
                booksContainer.innerHTML = books ? books.map(book => {
                    const title = book.volumeInfo.title;
                    const authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Desconhecido';
                    const imageUrl = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/128x200?text=No+Image';
                    const description = book.volumeInfo.description ? book.volumeInfo.description.substring(0, 100) + '...' : 'Sem descrição';

                    return `
                        <div class="book">
                            <img src="${imageUrl}" alt="${title}">
                            <h2>${title}</h2>
                            <p><strong>Autores:</strong> ${authors}</p>
                            <p>${description}</p>
                        </div>
                    `;
                }).join('') : '<p>Nenhum livro encontrado.</p>';
            })
            .catch(error => {
                booksContainer.innerHTML = '<p>Erro ao carregar os dados.</p>';
                console.error('Erro:', error);
            });
    }
});
