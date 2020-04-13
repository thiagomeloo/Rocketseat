// Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. 
//Os dados a serem armazenados são:
    // Nome: Rocketseat
    // Cor: Roxo
    // Foco: Programação
    // Endereço:
        // Rua: Rua Guilherme Gembala
        // Número: 260


const empresa = {
    nome: 'RocketSeat',
    cor: 'Roxo',
    foco: 'Programação',
    endereco: {
        rua: 'Rua Guilherme Gembala',
         numero: 260    
    }
}

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`)




// Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

// Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.

// As tecnologias também devem ser objetos contendo nome e especialidade, use as tecnologias abaixo:

const programador = {
    nome: "Carlos",
    idade: 32,
    tecnologias: [
      { nome: "C++", especialidade: "Desktop" },
      { nome: "JavaScript", especialidade: "Web/Mobile" }
    ]
  }

  console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)