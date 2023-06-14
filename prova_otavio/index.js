//Aluno Victor Silva Cardozo 
//Turma CC1MB


/*1 - Crie uma função que receba um número como parâmetro e determine se ele é primo ou não. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo. Liste todos os números primos entre 1 e 1000.*/



//função que verifica se o número inserido no input é um primo
function numeroPrimo(){


    //Cria uma variável que recebe o valor do input "inputPrimo"
    var numero = parseInt(document.getElementById('inputPrimo').value);

    var divisores=0;
  

    //Cria um loop que verifica se o valor recebido  pela variável cumpre as regras para ser primo ou não
    for(var count=1 ; count<=numero ; count++)
     if(numero % count == 0)
         divisores++;
    
    if(divisores==2){
       alert('O número inserido é um número primo');
}
    else{
       alert('O número inserido não é um número primo');
  }
}




//Função que lista os números primos de 1 a 1000.
/*OBS: nesta etapa pedi ajuda pro chatGPT porque não sabia. Os números primos exibidos no alert estão corretos, porém, está exibindo alguns numeros nada a ver no meio. No entanto creio que o principal está correto*/
function listPrimeNumbers() {
    const primeNumbers = [];
  
    for (let number = 2; number <= 1000; number++) {
      let isPrime = true;
  
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          isPrime = false;
          break;
        }
      }
  
      if (isPrime) {
        primeNumbers.push(number);
      }
    }
  
    return primeNumbers;
  
  
  const primes = listPrimeNumbers();
  alert(primes);
  
}





 /* 2 - Crie uma função que receba uma senha como parâmetro e verifique se ela atende aos seguintes critérios: ter pelo menos 8 caracteres, conter pelo menos uma letra maiúscula, uma letra minúscula e um número. Sua função deve receber uma senha e dizer para o usuário se ela é valida.*/



 function checkPassword() {
    const senha = document.getElementById('inputSenha').value;
  
     //Caso a senha não possua 8 caracteres, retorna false;
    if (senha.length < 8) {
      alert('A senha deve conter ao menos 8 characteres.');
      return false;
    }
  
     //Caso a senha não possua um número, retorna false;
    if (senha.search(/[0-9]/) === -1) {
      alert('A senha deve conter ao menos um número.');
      return false;
    }
  
     //Caso a senha não possua uma letra minúscula, retorna false;
    if (senha.search(/[a-z]/) === -1) {
        alert('A senha deve conter ao menos uma letra minúscula.');
      return false;
    }
  
     //Caso a senha não possua uma letra maiúscula, retorna false;
    if (senha.search(/[A-Z]/) === -1) {
        alert('A senha deve conter ao menos uma letra maiúscula.');
      return false;
    }
    
    //Cumprindo todos os requisitos, exibir "a senha é válida"
    else{
        alert('A senha é válida!')
    }
    
  }







 /* 3 - Crie uma função que receba um número como parâmetro e retorne o fatorial desse número. O fatorial de um número é o produto de todos os números inteiros positivos menores ou iguais a ele. Por exemplo, o fatorial de 5 é 5 * 4 * 3 * 2 * 1 = 120. Sua função deve calcular os fatoriais de 1 a 10.*/


 function calcularFatorial() {
    const input = document.getElementById('inputFatorial');
    const numero = parseInt(input.value);
  
    // Verifica se o número é válido
    if (isNaN(numero) || numero < 0) {
      alert('Por favor, digite um número válido.');
      return;
    }
  
    // Calcula o fatorial
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
  
    alert(`O fatorial de ${numero} é ${fatorial}.`);
  }
  











 /* 4 - Crie uma função que receba um número como parâmetro e determine se ele é um quadrado perfeito. Um quadrado perfeito é um número inteiro cuja raiz quadrada também é um número inteiro. Por exemplo, 25 é um quadrado perfeito porque a sua raiz quadrada é 5, um número inteiro.*/


function verificarQP() {
  const input = document.getElementById('inputQP');
  const numero = parseInt(input.value);

  // Verifica se o número é válido
  if (isNaN(numero) || numero < 0) {
    alert('Por favor, digite um número válido.');
    return;
  }

  // Verifica se o número é um quadrado perfeito
  const raizQuadrada = Math.sqrt(numero);
  if (Number.isInteger(raizQuadrada)) {
    alert(`${numero} é um quadrado perfeito.`);
  } else {
    alert(`${numero} não é um quadrado perfeito.`);
  }
}
