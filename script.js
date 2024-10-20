// Função para converter uma temperatura em Celsius para Fahrenheit e vice-versa
function converterTemperatura(temperatura, unidade) {
    if (unidade === 'C') {
      // Celsius para Fahrenheit
      return (temperatura * 9/5) + 32;
    } else if (unidade === 'F') {
      // Fahrenheit para Celsius
      return (temperatura - 32) * 5/9;
    } else {
      throw new Error("Unidade inválida. Use 'C' para Celsius ou 'F' para Fahrenheit.");
    }
  }
  
  // Exemplo de uso
  console.log(converterTemperatura(30, 'C')); // Output: 86
  console.log(converterTemperatura(86, 'F')); // Output: 30
  