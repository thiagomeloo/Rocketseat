function calculaMedia(alunos){
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3;

}

function enviaMensagem(media,turma){
    if(media > 5){
        console.log(`A media da turma ${turma} foi de ${media}. Parabéns`)
    }else{
        console.log(`A media da turma ${turma} e menor que 5`)
    }
}


function marcarComoReprovado(aluno){
    aluno.reprovado = false
    if(aluno.nota < 5){
        aluno.reprovado = true
    }
}

function enviaMensagemReprovado(aluno){
    if(aluno.reprovado){
        console.log(`O aluno ${aluno.nome} está reprovado`)
    }
}

function alunoReprovado(alunos){
    for(let aluno of alunos){
        marcarComoReprovado(aluno)
        enviaMensagemReprovado(aluno)
    }
}


const alunosTurmaA = [
    {
        nome: 'A1',
        nota: 2
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

alunoReprovado(alunosTurmaA)

console.table(alunosTurmaA)

//enviaMensagem(m1, 'Turma A')
//enviaMensagem(m2, 'Turma B')
