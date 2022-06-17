/* selecionar um elemento HTML para posterior manipulação  */
const lista = document.querySelector('ul');

/* criar um novo elemento HTML */
const elementoLI = document.createElement('li');
//console.log(elementoLI); retorna <li></li> 

/* adicionar um texto ao elemento */
elementoLI.textContent = 'Novo item da lista criado'
//console.log(elementoLI); retorna <li>Novo item da lista criado</li>

/* incluir o novo elemento na UL existente */
lista.appendChild(elementoLI);

/* selecionar e exiber apenas o primeiro elemento da lista UL */
const primeiroFilhoUL = lista.querySelector('li');
/* console.log(primeiroFilhoUL); */

/* selecionar e exiber TODOS os elementos da lista UL */
const filhosUL = lista.querySelectorAll('li');
for (const iterator of filhosUL) {
    /* console.log(iterator); */
}

/* adicionar um atributo ao elemento */
lista.setAttribute('class', 'mousepointer');

/* mevover um atributo do elemento UL */
lista.removeAttribute('class');

/* adicionar uma classe ao elemento UL */
lista.className = 'mousepointer';

/* alterar o estilo (css) via JS */
lista.style.color = 'yellow';

/* apagar TODOS os elementos da lista UL */
const botaoLimpar = document.querySelector('button');
botaoLimpar.addEventListener('click', function(){
    for (const iterator of filhosUL) {
        lista.removeChild(iterator);
    }
});

/* --------------- LISTA DE TAREFAS ---------------- */

/* capturando os elementos para posterior manipulação */
const caixaTexto = document.querySelector('#caixaDeTexto');
const botaoAdicionar = document.querySelector('#botaoAdicionar');
const listaTarefas = document.querySelector('#listaTarefas');

let count = 0;

/* criar a escuta do evento no botão */
botaoAdicionar.addEventListener('click',function(){
    if (caixaTexto.value != '') {
        const textoDaTarefa = caixaTexto.value;
        /* console.log(textoDaTarefa); */
        caixaTexto.value = '';
        caixaTexto.focus();
        count++;
        adicionaTarefa(textoDaTarefa, count);
    }
});

/* função para adicionar a tarefa a lista */
function adicionaTarefa(tarefa, contador){
    /* criar os elementos que serão adicionados */
    const elementoLI = document.createElement('li');
    const elementoP = document.createElement('p');
    const botaoRemover = document.createElement('span');

    /* cria um ID, insere o texto e adiciona o Parágrafo na LI */
    elementoP.setAttribute('id',`tarefa${contador}`);
    elementoP.className = 'tarefas';
    elementoP.textContent = `${tarefa} `;
    botaoRemover.textContent = '☒';

    /* adiciona uma classe ao botão */
    botaoRemover.className = 'remover';
    botaoRemover.className = 'remover mousepointer';

    elementoP.appendChild(botaoRemover);
    elementoLI.appendChild(elementoP);

    listaTarefas.appendChild(elementoLI);
}

/* criar o botão para remover os itens */
function adicionaBotaoRemover(){
    const botaoRemover = document.createElement('span');
    botaoRemover.textContent = '☒';

    return botaoRemover;
}