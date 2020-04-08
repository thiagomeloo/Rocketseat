function calculaMedia(alunos){
    let soma = 0;
    for(let i = 0; i < alunos.length; i++){
        soma += alunos[i].nota
    }
    return soma / alunos.length
}

function enviaMensagem(media,turma){
    if(media > 5){
        console.log(`A media da turma ${turma} foi de ${media}. Parabéns`)
    }else{
        console.log(`A media da turma ${turma} e menor que 5`)
    }
}





const alunosTurmaA = [
    {
        nome: 'A1',
        nota: 8
    },
    {
        nome: 'A2',
        nota: 8
    },
    {
        nome: 'A3',
        nota: 9
    }
]



const alunosTurmaB = [
    {
        nome: 'A1',
        nota: 8
    },
    {
        nome: 'A2',
        nota: 8
    },
    {
        nome: 'A3',
        nota: 9
    }
]

const m1 = calculaMedia(alunosTurmaA)
const m2 = calculaMedia(alunosTurmaB)

enviaMensagem(m1, 'Turma A')
enviaMensagem(m2, 'Turma B')
