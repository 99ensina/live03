// ESTRUTURAS DE DECISÃO
   // - condicionais, comparações 

// ESTRUTURAS DE REPETIÇÃO
   // - Switch, for, while, do while

// EXPRESSÕES REGULARES (RegExp) 

// BOAS PRÁTICAS


// estruturas de decisão / condicionais
// if, else if, else

// BOAS PRÁTICAS
// declaração de variáveis no topo
// inicialização de variáveis
var nome = "", endereco = "", idade = 0;

function verificarIfElse(){

    let idade = 25;
    
    if(idade >= 25){
        console.log("Você + de " + idade + " anos");
    }
    else if(idade <= 30){
        console.log("Você - de " + idade + " anos");
    } else if(idade === 60){
        console.log("Você tem " + idade + " anos");
    } else if(idade === 40){
        console.log("Você tem " + idade + " anos");
    } else {
        console.log("Você não tem nenhuma das idades");
    }
}

// estruturas de decisão / condicionais
// switch
function verificarSwitch(){
    let day;
    switch(new Date().getDay()) {
        case 0:
            day = 'Domingo';
            break;
        case 1:
            day = 'Segunda-feira'
            break;
        case 2:
            day = 'Terça-feira'
            break;
        case 3:
            day = 'Quarta-feira'
            break;
        case 4:
            day = 'Quinta-feira'
            break;
        case 5:
            day = 'Sexta-feira'
            break;
        case 6:
           day = 'Sábado'
           break;
        default:
            day = 'Não existente';
    }
    document.getElementById("day").innerHTML = "Hoje é " + day;
}

// estruturas de repetição
function repeticaoFor(){

    let alunos = ['Flávio', 'Mário', 'Elias'];
    let quantidadeAlunos = alunos.length;
    
    // for
    for(i = 0; i < quantidadeAlunos; i++){
       console.log('O aluno: ', alunos[i]);
       console.log("o número é: " + i); 
    }
    
    // for in
    for(i in alunos){
        console.log('FOR IN O aluno: ', alunos[i]);
    }

    //while
    while(i < 10){
        console.log('Contador While: ', i);
        i++;
    }

    //do while
    do {
        console.log('Contador Do/While: ', i);
        i++;
    } while (i < 10);
}

// RegExp - Expressões Regulares
function regExp(){
 
    // search
    let msg = "Visite nosso site";
    let site = msg.search("site");

    //replace
    let str = "Entre no Site e acesse nosso SITE";
    let replace =  str.replace(/site/g, '99ensina.com.br');

    // i - case insensitive
    // g - global match
    // m - multline match

    let strM = "Entre no \nsite e acesse nosso \nsite";
    let pattern = /^si/m;
    let result = strM.match(pattern);

    //patterns
    //[abc]
    //[0-9]
    //(x|y)

    // Buscando um caracter
    let str1 = "Entre no site e acesse nosso blog";
    let patt1 = /[e]/g;
    let result1 = str1.match(patt1);

    // Buscando um número
    let str2 = "123456789";
    let patt2 = /[1-5]/g;
    let result2 = str2.match(patt2);

    // Busca mais de um char (or)
    let str3 = "azul, verde, rosa, az, azu, ver, ros, preto";
    let patt3 = /(azul|preto)/g;
    let result3 = str3.match(patt3);

    document.getElementById("regex").innerHTML = result3; 
}


