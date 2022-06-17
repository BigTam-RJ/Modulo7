/* Caixa de diálogo com entrada de dados */
/* const nome1 = prompt('Qual o seu nome?'); */

/* Caixa de diálogo com saída de dados */
/* alert(`Olá ${nome1}, seja bem vindo!`); */

/* `${variável}, Template Strings` */

/* alterando um elemento de texto pelo ID */
document.querySelector("#t1").textContent = "Texto alterado via textContent"
document.querySelector("#t2").innerHTML = "Texto alterado via innerHTML"

/* injetando elementos direto via JS direto no body no final da página*/
document.write(`<h2>Esse é um texto e uma lista injetados no final da página.</h2>
                <ul>
                    <li> item 1</li>
                    <li> item 2</li>
                    <li> item 3</li>
                </ul>`);

/* injetando elementos direto via JS selecionando o local*/
const teste3 = document.querySelector("#t3");
teste3.innerHTML = `<h2>Esse é um texto e uma lista injetados no ID3.</h2>
                    <ol>
                        <li> item 1</li>
                        <li> item 2</li>
                        <li> item 3</li>
                    </ol>`;

function bemVindo() {
    /* captura o texto digitado no elemento */
    const nome2 = document.querySelector('#nomeUsuario').value;
    alert(`Olá ${nome2}, seja bem vindo!`);

    /* ocultando um elemento com style via JS  */
    document.getElementById('formularioLogin').style.display = "none";

    /* capturando com o querySelector  */
    document.querySelector('#t1').style.background = "red";

    /* capturando com o getElementById  */
    document.getElementById('t2').style.background = "green";
}

/* capturando uma opção da caixa select e alterando o elemento de acordo com a opção */
function mudaCorFundo() {
    let itens = document.querySelector('#coresFundo');
    const selected = itens.options[itens.selectedIndex].value;

    document.body.style.background = selected;
/*     if (selected === "blue") {
        document.body.style.color = "white";
    } else{
        document.body.style.color = "black";
    } */
    document.body.style.color = (selected === "blue") ? "white" : "black";

    // verifica o tipo da variável, que neste caso é object (elemento)
    console.log(typeof(itens));

    itens = undefined; // limpa o conteúdo da variável e o seu "tipo"
}

function calculaKmMilhas(){
    const km = document.querySelector('#valorKm').value;
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = km * 1609;  // 1ª opção usando innerHTML
    resultado.textContent = km * 1609;// 2ª opção usando textContent
}

/* Tipo de Dado de Referência */
//OBJETO

const pessoa = {
    primeiroNome: 'Aroldo',
    segundoNome: 'Andrade',
    endereco: {
        rua: 'Rua dos Aroldos',
        num: 50,
        bairro: 'Aroldolândia',
    },
    /* abaixo uma função dentro de um objeto (é chamado de método) */
    nomeCompleto: function(){
        /* this faz referência ao objeto atual que estamos */
        return this.primeiroNome + " " + this.segundoNome;
        /* teria o mesmo sentido se fosse escrito assim */
        return pessoa.primeiroNome + " " + pessoa.segundoNome;
    }
}
console.log(pessoa.nomeCompleto());

/* é possível adicionar chaves ou mesmo funções depois do objeto criado */
pessoa.celular = '9898-049948';
pessoa.contato = function(){
    return `Nome: ${this.nomeCompleto()}\nTelefone: ${this.celular}`;
}

console.log(pessoa.contato());

function exibeDadosPessoa(p){
    console.log(`${p.contato()}\nEndereço: ${p.endereco.rua}, ${p.endereco.num} - ${p.endereco.bairro}
        `);
}

exibeDadosPessoa(pessoa);

/* Metodos nativos nas Strings ----------------*/

/* tamanho da String - neste caso 14 caracteres */
console.log(pessoa.nomeCompleto().length);

/* converter a String para maiúsculo */
console.log(pessoa.nomeCompleto().toUpperCase());

/* converter a String para minúsculo */
console.log(pessoa.nomeCompleto().toLowerCase());

/* capturar parte de uma String */
console.log(pessoa.nomeCompleto().substring(7));

/* capturar a posição de um caracter dentro de uma String */
const frase = 'Minha cor favorita é: azul';
const indice = frase.indexOf(':');
console.log(indice); // retorna o índice 20

console.log(frase.substring(indice+2)); // retorna azul

/* substituir a primeira ocorrência de um texto de uma string */
let texto = 'basquete basquete ball';
console.log(texto.replace('bas','ra')); // retorna raquete basquete ball

let frase2 = 'basquete basquete ball';
console.log(frase2.replaceAll('bas','ra')); // retorna raquete raquete ball

/* Tipo de Dado de Referência */
// ARRAY - ARRANJO - VETOR
let cidades = ["Rio","Curitiba","Londrina","Salvador"];
console.log(cidades[cidades.length-2]); // retorna Londrina

let jogadores = [
    {
        nome: "Beto",
        posicao: "Atacante"
    },
    {
        nome: "Gil",
        posicao: "Zagueiro"
    },
    {
        nome: "Milton",
        posicao: "Volante"
    }
];
console.log(jogadores[1].posicao); // retorna Zagueiro

/* split - CONVERTER DE STRING PARA ARRAY */
const email = "fulanodetal@yahoo.com.br"
let emailArray = email.split("@");
console.log(emailArray); // retorna indice 0: "fulanodetal" e índice 1: yahoo.com.br

const palavrasChave = 'cinema , futebol , televisão , viagem , boliche';
let hobbies = palavrasChave.split(" , ");
console.log(hobbies[1]); // retorna futebol
console.log(hobbies[[hobbies.length-1]]); // retorna boliche (última posição do Array)

/* toString - CONVERTER DE ARRAY PARA STRING USANDO O "," COMO SEPARADOR */
let tiposHobbies = hobbies.toString();
console.log(tiposHobbies); // retorna a lista toda em 1 única string, separado por ","

/* join - CONVERTER DE ARRAY PARA STRING USANDO QUALQUER CARACTER COMO SEPARADOR */
tiposHobbies = hobbies.join('|');
console.log(tiposHobbies); // retorna a lista toda em 1 única string separado por "|"

/* push - ACIONAR UM ELEMENTO NO FINAL DE UM ARRAY */
let estados = ["RJ","BA"];
estados.push('SP','MG');
console.log(estados); // retorna RJ BA SP MG

/* unshift - ACIONAR UM ELEMENTO NO COMEÇO DE UM ARRAY */
estados.unshift('ES','GO');
console.log(estados); // retorna ES GO RJ BA SP MG

/* pop - REMOVER O ÚLTIMO ELEMENTO DE UM ARRAY (ALÉM DE REMOVER, RETORNA O ELEMENTO REMOVIDO) */
let estadoRemovido = estados.pop();
console.log(estadoRemovido); // retorna MG
console.log(estados); // retorna ES GO RJ BA SP

/* shift - REMOVER O PRIMEIRO ELEMENTO DE UM ARRAY (ALÉM DE REMOVER, RETORNA O ELEMENTO REMOVIDO) */
estadoRemovido = estados.shift();
console.log(estadoRemovido); // retorna ES
console.log(estados); // retorna GO RJ BA SP

/* splice - REMOVER 1 OU MAIS ELEMENTOS DE UM ARRAY - UTILIZANDO UM ÍNDICE */
const index = estados.indexOf("RJ"); // localiza o elemento à remover
/* com o ,1 - remove 1 item, no caso apenas o elemento selecionado */
estadoRemovido = estados.splice(index,1); // retorna GO BA SP
console.log(estados); // retorna ES
/* sem o ,1 -remove o elemento selecionado e todos os outros que estão depois dele */
estadoRemovido = estados.splice(index); // retorna GO BA SP
console.log(estados); // retorna ES

/* concat - CONCATENAÇÃO DE ARRAYS */
const cidadesInterior = ["Cabo Frio", "Arraial", "Búzios"];
const cidadesMetropolitanas = ['Rio de Janeiro',"Caxias"];

const cidadesJuntas = cidadesMetropolitanas.concat(cidadesInterior);
console.log(cidadesJuntas); // retorna todas as cidades dos 2 arrays

console.log(cidadesJuntas.indexOf("Cabo Frio")) // retorna o índice 2
console.log(cidadesJuntas.indexOf("Iguaba")) // retorna o -1 indicando que não existe esse elemento no array

/* Inserir um elemento e populando a lista utilizando JS */
const operacoes = ['Soma','Subtração','Multiplicação','Divisão'];

function preparaLista(){
    let textoLista = "";
    for (let i = 0; i < operacoes.length; i++) {
        textoLista += `<li>${operacoes[i]}</li>`;
        //textoLista += "<li>"+ operacoes[i] + "</li>";
    }
    return textoLista;
}
document.querySelector('#listaOperacoes').innerHTML = preparaLista();

/* Utilizando o "FOR OF" para percorrer todos os elementos de um Array */
const listacores = ['amarelo', 'vermelho', 'laranja', 'verde','azul'];
for (const iterator of listacores) {
    console.log(iterator);
}

for (const iterator of jogadores) {
    console.log(iterator.nome); // retorna Beto Gil Milton
}
