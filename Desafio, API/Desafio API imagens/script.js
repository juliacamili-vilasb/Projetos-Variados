// script.js
document.addEventListener("DOMContentLoaded", function() {
    const dogImage = document.getElementById('dogImage');
    const newDogButton = document.getElementById('newDogButton');

    function fetchDogImage() {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
                dogImage.src = data.message;
            })
            .catch(error => {
                console.error('Erro ao buscar imagem:', error);
            });
    }

    newDogButton.addEventListener('click', fetchDogImage);

    // Carrega uma imagem aleatória ao carregar a página
    fetchDogImage();
});
