/* selecionar um elemento HTML para posterior manipulação  */
const lista = document.querySelector('ul');

/* criar um novo elemento HTML */
const elementoLI = document.createElement('li');
//console.log(elementoLI); retorna <li></li> 

/* criar um novo elemento HTML */
const elementoP = document.createElement('p');

/* adicionar um texto ao elemento */
elementoLI.textContent = 'Novo item da lista criado'
//console.log(elementoLI); retorna <li>Novo item da lista criado</li>

/* adicionar uma classe ao elemento LI */
elementoLI.className = 'dom-li';

/* incluir o novo elemento na UL existente */
lista.appendChild(elementoLI);

/* selecionar e exiber apenas o primeiro elemento da lista UL */
const primeiroFilhoUL = lista.querySelector('li');
/* console.log(primeiroFilhoUL); */

/* selecionar e exiber TODOS os elementos da lista UL */
let filhosUL = lista.querySelectorAll('li');
for (const iterator of filhosUL) {
    /* console.log(iterator); */
}

/* adicionar um atributo ao elemento */
lista.setAttribute('class', 'mousepointer');

/* mevover um atributo do elemento UL */
lista.removeAttribute('class');

/* adicionar uma classe ao elemento UL */
lista.className = 'mousepointer';

/* console.log(lista.children[0].tagName); */

/* alterar o estilo (css) via JS */
lista.style.color = 'yellow';

/* apagar TODOS os elementos da lista UL */
const botaoLimpar = document.querySelector('button');
botaoLimpar.addEventListener('click', function () {
    
    if (lista.childElementCount > 0) {
        filhosUL = lista.querySelectorAll('li');
        if (lista.children[0].tagName === 'LI') {
            for (const iterator of filhosUL) {
                lista.removeChild(iterator);
               /*  console.log(iterator); */
            }
            botaoLimpar.textContent = 'Incluir Itens ☝';
            botaoLimpar.id = 'btn-clear1';
        } 
    } else {
        /* adicionar um texto ao elemento */
        lista.innerHTML = `<li class="dom-li">Os <b>elementos</b> HTML como <b>objetos</b></li>
        <li class="dom-li">Os <b>propriedades</b> dos elementos HTML</li>
        <li class="dom-li">Os <b>métodos</b> para acessar os elementos HTML</li>
        <li class="dom-li">Os <b>eventos</b> dos elementos HTML</li>
        <li class="dom-li">Novo item da lista criado</li>`
        //console.log(elementoLI); retorna <li>Novo item da lista criado</li>

        botaoLimpar.textContent = 'Excluir Itens ☝';
        botaoLimpar.id = 'btn-clear2';
    }
});

/* função para mudar backgroundColor pelo javascript com prompt*/
/* function rgb(r,g,b) {
    return 'rgb(' + [(r||0),(g||0),(b||0)].join(',') + ')';
}
  var a = parseInt(prompt("Enter R"), 10),
      b = parseInt(prompt("Enter G"), 10),
      c = parseInt(prompt("Enter B"), 10);
  document.body.style.backgroundColor = rgb(a,b,c); */

  /* alterar cor do background pelo style */
/* botaoLimpar.style.background = 'rgb('+255+','+233+','+107+')'; */



/* --------------- LISTA DE TAREFAS ---------------- */

/* capturando os elementos para posterior manipulação */
const caixaTexto = document.querySelector('#caixaDeTexto');
const botaoAdicionar = document.querySelector('#botaoAdicionar');
const listaTarefas = document.querySelector('#listaTarefas');
const listaSuspensa = document.querySelector('#listaSuspensa');

let count = 0;

/* criar a escuta do evento no botão */
botaoAdicionar.addEventListener('click', function () {
    if (caixaTexto.value != '') {
        const textoDaTarefa = caixaTexto.value;
        /* console.log(textoDaTarefa); */
        caixaTexto.value = '';
        caixaTexto.focus();
        count++;
        adicionaTarefa(textoDaTarefa, count);
    } else {
        console.log("Insira uma nova tarefa!");
    }
});

/* função para adicionar a tarefa a lista */
function adicionaTarefa(tarefa, contador) {
    /* criar os elementos que serão adicionados */
    const elementoLI = document.createElement('li');
    const elementoP = document.createElement('p');
    const botaoRemover = document.createElement('span');

    /* adiciona uma classe a LI */
    elementoLI.className = 'naoRealizada';

    /* cria ID, classes, insere o texto no parágrafo */
    elementoP.setAttribute('id', `tarefa${contador}`);
    elementoP.className = 'tarefas';
    elementoP.textContent = `${tarefa} `;

    /* adiciona uma classe ao botão */
    botaoRemover.className = 'mousepointer remover';
    botaoRemover.textContent = '✘';
    botaoRemover.style.fontWeight = '700';

    /* Adiciona o botão remover ao parágrafo */
    elementoP.appendChild(botaoRemover);

    /* Adiciona o parágrafo a LI */
    elementoLI.appendChild(elementoP);

    /* Por fim adiciona a LI a UL */
    listaTarefas.appendChild(elementoLI);

    exibeOcultaLista();

    /* cria a escuta do botão para remover as LIs deletadas */
    botaoRemover.addEventListener(`click`, function () {
        listaTarefas.removeChild(this.parentNode.parentNode);
        exibeOcultaLista();
    });

    /* cria a escuta para marcar e desmarcar as tarefas concluídas */
    elementoP.addEventListener('click', function () {
        /* console.log(this.parentNode); */
        if (this.parentNode.className === 'naoRealizada') {
            this.parentNode.className = 'realizada';
        } else {
            this.parentNode.className = 'naoRealizada';
        }
    });
}

/* verifica se existe algum elemento com a classe .tarefas */
function exibeOcultaLista() {
    const tarefas = document.querySelector('.tarefas');
    if (tarefas === null) {
        /* caso não exista, oculta a lista suspensa e zera o contador */
        listaSuspensa.setAttribute('hidden', 'hidden');
        count = 0;
    } else {
        /* caso exista deixa a lista suspensa de opções visível */
        listaSuspensa.removeAttribute('hidden');
    }
}

/* cria a escuta para manipular a lista suspensa de opções */
listaSuspensa.addEventListener('change', function () {
    /* marcar todos os itens da lista */
    if (listaSuspensa.selectedIndex === 1) {
        const vetorTarefas = listaTarefas.querySelectorAll('.naoRealizada');
        for (const iterator of vetorTarefas) {
            /* console.log(iterator.firstChild); */
            /* simula um click em cada elemento do array */
            iterator.firstChild.dispatchEvent(new Event('click'));
        }
    }
    /* desmarcar todos os itens da lista */
    if (listaSuspensa.selectedIndex === 2) {
        const vetorTarefas = listaTarefas.querySelectorAll('.realizada');
        /* console.log(vetorTarefas); */
        /* simula um click em cada elemento do array */
        for (const iterator of vetorTarefas) {
            /* console.log(iterator.firstChild); */
            /* dispara o click no filho da listaTarefas.realizadas */
            iterator.firstChild.dispatchEvent(new Event('click'));
        }
    }

    if (listaSuspensa.selectedIndex === 3) {
        const vetorTarefas = listaTarefas.querySelectorAll('.remover');
        /* console.log(vetorTarefas); */
        for (const iterator of vetorTarefas) {
            /* dispara o click na listaTarefas.remover */
            iterator.dispatchEvent(new Event('click'));
        }
    }
});