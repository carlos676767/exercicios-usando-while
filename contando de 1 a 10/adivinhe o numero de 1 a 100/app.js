//Adivinhe o número:

//Escolha um número secreto (por exemplo, 42) e armazene-o em uma variável.
//Use um loop while para pedir ao usuário para adivinhar o número repetidamente.
//Dentro do loop, peça ao usuário para inserir um número.
//Verifique se a suposição do usuário está correta.
//Se estiver correto, imprima uma mensagem de parabéns e saia do loop.
//Se estiver errado, continue pedindo ao usuário para tentar novamente.v c


//resolucao

let n1 = 42 //crie uma variavel para armazenar 

while(true){ //crie um loop infinito
    let pergunta = parseInt(prompt("coloque um numero")) //insira um numero 
    if(pergunta === n1){ //verifique
        alert("parabens voce acertou!") //mensagem de parabens
        break //pare o loop
    } else{
        alert("erro, insira um novo numero") 
    }
}

