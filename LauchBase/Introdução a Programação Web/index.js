//criar um programa que calcula a média
//das notas entre os alunos e envia
//mensagem do cálculo da média.
//se a media for maior que 5, parabenizar a turma


const aluno01 = 'A1'
const notaA1 = 9.8

const aluno02 = 'A2'
const notaA2 = 10

const aluno03 = 'A3'
const notaA3 = 3

const media = (notaA1 + notaA2 + notaA3) / 3;

if(media > 5){
    console.log(`A média foi de ${media}. Parabéns`)
}else{
    console.log('A média e menor que 5')
}

console.log(media);



