/* ------------------------
    OPERADORES DE COMPARAÇÃO

    >       Maior
    <       Menor
    >=      Maior igual a 
    <=      Menor igual a 
    ==      Igual a
    ===     Igual e do mesmo tipo
    !=      Diferente de
    !=      Diferente, inclusive do tipo

------------------------ */

/* -------------------------

    OPERADORES LÓGICOS

    &&      "E" As duas condições devem ser verdadeiras
                para que a condição final seja verdadeira.

    ||      "OU" Uma das condições devem ser verdadeira
                para que a condição final seja verdadeira.
    
    !       "NÃO" Nega uma condição.

------------------------- */

/* -------------------------

    OPERADORES ARITMÉTICOS

    *       Multiplicação
    /       Divisão
    %       Resto da divisão
    +       Adição
    -       Subtração
    
------------------------- */

/* DESAFIO 01

    Verificar se a pessoa é maior igual a 18 anos
    se sim, 
        deixar entrar, 
    se não, 
        bloquear a entrada

    se a pessoa tiver 17 anos
        avisar para voltar quando fizer 18 anos
*/



const idade = 17

if(idade >= 18){
    console.log('Deixar entrar!')
}else{
    console.log('Bloquear entrada!')
    if(idade === 17){
        console.log('Volte quando fizer 18 anos')
    }    
}