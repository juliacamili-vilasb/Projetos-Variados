function calcularStatus() {
    const aluno = document.getElementById('aluno').value;
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);

    if (aluno < 1 || aluno > 12 || isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    const media = (nota1 + nota2 + nota3) / 3;
    const status = media >= 7 ? 'Aprovado' : 'RECUPERAÇÃO';

    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = `<p>Aluno ${aluno}: ${status}</p>`;
}
