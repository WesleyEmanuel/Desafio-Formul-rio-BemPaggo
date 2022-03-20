// Pagamento
const btnComprar = document.querySelector('.btn-comprar');
const linkComprar = document.querySelector('#link-comprar');
const valorTotal = document.querySelector('#valor-total')

// Formulário
const numeroCart = document.querySelector('#numero-cart');
const nomeCart = document.querySelector('#nome-cart');
const anoCart = document.querySelector('#ano-cart');
const cvvCart = document.querySelector('#cvv');

const total = localStorage.getItem('valorTotal');

if(total > 0){
    valorTotal.innerText = `Total: R$ ${total},00`;
}

localStorage.removeItem('valorTotal');

// Ao clicar no botão comprar
btnComprar.addEventListener('click', () =>{
    validarNumeroCart();
    validarNomeCart();
    validarAnoCart();
    validarCvv();
    if(!numeroCart.classList.contains('error') && !nomeCart.classList.contains('error') && !anoCart.classList.contains('error') && !cvvCart.classList.contains('error')){
        resetInputs();
        linkComprar.href = './compra-finalizada.html'
    }
});

// Funções de validação dos inputs
function validarNumeroCart(){
    if(numeroCart.value.length < 14){
        numeroCart.classList.add('error')
    } else{
        numeroCart.classList.remove('error')
    }
};

function validarNomeCart(){
    if(nomeCart.value == ""){
        nomeCart.classList.add('error')
    } else{
        nomeCart.classList.remove('error')
    }
};

function validarAnoCart(){
    if(anoCart.value < 2022){
        anoCart.classList.add('error')
    } else{
        anoCart.classList.remove('error')
    }
};

function validarCvv(){
    if(cvvCart.value.length < 3){
        cvvCart.classList.add('error')
    } else{
        cvvCart.classList.remove('error')
    }
};


// Resetando os inputs
function resetInputs(){
    numeroCart.value = "";
    nomeCart.value = "";
    anoCart.value = "";
    cvvCart.value = "";
}