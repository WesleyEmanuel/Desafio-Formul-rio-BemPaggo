//  Alterar Quantidade
const btnAdicionar = document.querySelector('.adicionar');
const btnDiminuir = document.querySelector('.diminuir');
const quantidade = document.querySelector('#quantidade');

// Adesivos Techs
const react = document.querySelector('#react');
const vue = document.querySelector('#vue');
const angular = document.querySelector('#angular');

const obs = document.querySelector('#obs')

// Enviar 
const btnEnviar = document.querySelector('.enviar');
const span = document.querySelector('.span')
const btnLink = document.querySelector('#button-link')

// Alterando Quantidade
btnAdicionar.addEventListener('click', () =>{
    let valor = Number(quantidade.value);
    valor += 1;
    quantidade.value = valor.toString();
    span.style.display = 'none';
});

btnDiminuir.addEventListener('click', () =>{
    let valor = Number(quantidade.value);
    valor -= 1;
    if(valor >= 0){
       quantidade.value = valor.toString();
    }
});


// Enviando
var total = 0;
var itens = [];
btnEnviar.addEventListener('click', () =>{
    if((!react.checked && !vue.checked && !angular.checked) || quantidade.value == 0){
        span.style.display = 'block';
    } else{
        valorTotal(react);
        valorTotal(vue);
        valorTotal(angular);
        localStorage.setItem('valorTotal', total);
        resetInputs();
    }
})

function resetInputs(){
    react.checked = false;
    vue.checked = false;
    angular.checked = false;
    quantidade.value = 1;
    obs.value = ""; 
    span.style.display = 'none'
    btnLink.href = './Checkout/checkout.html'
}

function marcado(){
    span.style.display = 'none';
}

// Somando valor total e guardando na variável que será armazenada no Local Storage
function valorTotal(tech){
    if(tech.checked){
        let valor = tech.value * Number(quantidade.value);
        return total += valor;
    }
} 