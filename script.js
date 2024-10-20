// Função para calcular a média de notas
function calcularMedia(notas) {
    if (!Array.isArray(notas) || notas.length === 0) return 0;
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
  }
  
  // Exemplo de uso
  const notas = [8, 9, 7, 10];
  console.log(calcularMedia(notas)); // Output: 8.