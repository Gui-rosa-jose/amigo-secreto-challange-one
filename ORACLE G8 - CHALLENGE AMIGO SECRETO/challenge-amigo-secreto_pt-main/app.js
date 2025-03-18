let amigos = []

//Função que pega o valor do input e adiciona ao array amigos
function adicionarAmigo(){
    let nomeAmigo = document.querySelector('input').value
    if(nomeAmigo === ''){
        alert('Digite um nome!')
    }else{
        amigos.push(nomeAmigo)
        limparTextoInput()
        atualizarLista()
    }
}


function atualizarLista(){
    let lista = document.querySelector('ul')
    lista.innerHTML = ''
    for(let i = 0; i < amigos.length; i++){
        let item = document.createElement('li')
        item.innerHTML = amigos[i]
        lista.appendChild(item)
    }
}

function limparTextoInput(){
    document.querySelector('input').value = ''
}

function sortearAmigo(){
    if(amigos.length < 2){
        alert('Adicione mais amigos para sortear!')
    }else{
        let amigoSorteado = amigos.parseInt((Math.random() * amigos.length))
        alert(`O amigo sorteado foi: ${amigoSorteado}`)
    }
}



        
