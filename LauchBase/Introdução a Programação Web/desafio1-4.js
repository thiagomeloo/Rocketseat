// Crie um programa para realizar operações bancárias na conta de um usuário.

// Comece criando um objeto com o nome do usuário, suas transações e saldo.

// As transações (transactions) devem iniciar como um array vazio [] e o saldo (balance) em 0 (zero).

const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
  }


function createTransaction (transaction){
    user.transactions.push(transaction)
    if(transaction.type == 'credit'){
        user.balance += transaction.value
    }else{
        user.balance -= transaction.value
    }
        
}

function getHigherTransactionByType(type){
    let result = { 
        type: type,
         value: 0
    }
    for(t of user.transactions){
        if(t.type == type && t.value >= result.value){
            result.value = t.value
        }
    }
    return result
}

function getAverageTransactionValue(){
    let total = 0
    for(t of user.transactions){
        total+= t.value
    }
    return total / user.transactions.length
}

function getTransactionsCount(){
    let count = {
        credit : 0,
        debit : 0
    }
    for(t of user.transactions){
        if(t.type == 'credit'){
            count.credit += 1
        }else{
            count.debit += 1
        }
    }
    return count;
}


createTransaction({ type: "credit", value: 50 })
createTransaction({ type: "credit", value: 120 })
createTransaction({ type: "debit", value: 80 })
createTransaction({ type: "debit", value: 30 })

console.log(user.balance) // 60

console.log(getHigherTransactionByType("credit"))// { type: 'credit', value: 120 }
 
console.log(getHigherTransactionByType("debit")) // { type: 'debit', value: 80 }

console.log(getAverageTransactionValue()) // 70

console.log(getTransactionsCount()) // { credit: 2, debit: 2 }