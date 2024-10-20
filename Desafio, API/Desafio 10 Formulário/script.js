document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário padrão

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Aqui você chamaria a API, substitua a URL pelo endpoint da sua API
    const apiUrl = 'https://sua-api-url.com/enviar'; 

    // Dados a serem enviados
    const data = {
        name: name,
        email: email,
        message: message
    };

    // Enviando dados para a API
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
                },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na requisição');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('successMessage').style.display = 'block'; // Exibe a mensagem de sucesso
        document.getElementById('contactForm').reset(); // Limpa o formulário
    })
    .catch(error => {
        alert('Ocorreu um erro: ' + error.message);
    });
});
