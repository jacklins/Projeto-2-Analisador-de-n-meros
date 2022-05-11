let num = document.querySelector('input#inputnum')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let valores = []

function isnum(n){
if(Number(n) >=1 && Number(n) <=100 ){
    return true
        } else {
    return false
        }
}

function inlista(n, l){
if (l.indexOf(Number(n)) != -1 ){
    return true
        } else {
            return false
                }
}

function adicionar() {
    if( isnum(num.value) && !inlista(num.value, valores)) { 
         valores.push(Number(num.value)) //push adiciona itens ao vetor //
         let item = document.createElement('option')
         item.text = `Valor ${num.value} adicionado.`
         lista.appendChild(item)
         res.innerHTML = ''
    } else {
        window.alert("Valor inválido ou já encontrado na lista")
    }
    num.value = '' //comando para apagar o número após digitação//
    num.focus() // comando para a digitação continuar //
}

function finalizar() {
    if ( valores.length ==0){
        window.alert("Adicione valores antes de finalizar")
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores [0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
        }
        for(let pos in valores){
            if(valores[pos]>maior)
            maior = valores [pos]
            if (valores[pos]<menor)
            menor = valores[pos]
        }
        media = soma / total
        res.innerHTML =''
        res.innerHTML += `<p> Ao todo temos ${total} números cadastrados. </p>`
        res.innerHTML += `<p> O maior valor é ${total}  </p>`
        res.innerHTML += `<p> O menor valor é ${menor}  </p>`
        res.innerHTML += `<p> Soma dos valores ${soma}  </p>`
        res.innerHTML += `<p> Media dos valores ${media}  </p>`
    }
}