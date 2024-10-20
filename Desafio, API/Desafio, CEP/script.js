async function getAddress() {
    const cep = document.getElementById('cepInput').value;
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();

    if (data.erro) {
        document.getElementById('addressInfo').innerText = 'CEP não encontrado. Verifique o número digitado.';
    } else {
        document.getElementById('addressInfo').innerText = `
            CEP: ${data.cep}
            Logradouro: ${data.logradouro}
            Bairro: ${data.bairro}
            DDD: ${data.ddd}
        `;
    }
}
