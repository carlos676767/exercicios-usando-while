//Exercício 4: Adivinhar um Número

//Escolha um número aleatório entre 1 e 100 e armazene-o em uma variável numeroAleatorio (você pode usar uma função de geração de números aleatórios).
//Peça ao usuário para adivinhar o número.
//Configure um loop while para continuar enquanto a suposição do usuário não for igual ao numeroAleatorio.
//Dentro do loop, peça ao usuário para fazer uma suposição.
//Compare a suposição do usuário com o numeroAleatorio e forneça dicas (maior ou menor).
//Continue pedindo ao usuário para adivinhar até que ele acerte.
//Após o loop, informe ao usuário que ele acertou.

let numero = 60
while(numero == 60){
    let numeros = parseInt(prompt("digite um numero"))
    if(numeros == numero){
        alert("voce acertou")
        break

    } else if(numeros < numero){
        alert("numero maior")
    } else{
        alert("numero menor")

    }
}