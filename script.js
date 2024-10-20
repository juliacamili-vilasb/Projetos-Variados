// Função que faz a contagem de vogais em uma string
function contarVogais(str) {
    const vogais = 'aeiouAEIOU';
    return str.split('').reduce((contador, char) => {
      if (vogais.includes(char)) {
        contador++;
      }
      return contador;
    }, 0);
  }
  
  // Exemplo de uso
  console.log(contarVogais("Hello World")); // Output: 3
  