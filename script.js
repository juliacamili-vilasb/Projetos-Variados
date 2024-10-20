// Função que verifica se uma string é um palíndromo
function ePalindromo(str) {
    const strLimpa = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const strInvertida = strLimpa.split('').reverse().join('');
    return strLimpa === strInvertida;
  }
  
  // Exemplo de uso
  console.log(ePalindromo("A man a plan a canal Panama")); // Output: true
  