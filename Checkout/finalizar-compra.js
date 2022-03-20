//Pagamento
const btnComprar = document.querySelector('.btn-comprar');
const linkComprar = document.querySelector('#link-comprar');
const valorTotal = document.querySelector('#valor-total')

//Formulário
const numeroCart = document.querySelector('#numero-cart');
const nomeCart = document.querySelector('#nome-cart');
const anoCart = document.querySelector('#ano-cart');
const cvvCart = document.querySelector('#cvv');

const total = localStorage.getItem('valorTotal');

if(total > 0){
    valorTotal.innerText = `Total: R$ ${total},00`;
}

localStorage.removeItem('valorTotal');

btnComprar.addEventListener('click', () =>{
    validarInputs(numeroCart);
    validarInputs(nomeCart);
    validarInputs(anoCart);
    validarInputs(cvvCart);
    if(!numeroCart.classList.contains('error') && !nomeCart.classList.contains('error') && !anoCart.classList.contains('error') && !cvvCart.classList.contains('error')){
        resetInputs();
        linkComprar.href = './compra-finalizada.html'
    }
});

function validarInputs(input){
    if(input.value.length < 1){
        input.classList.add('error')
    } else{
        input.classList.remove('error')
    }
};

function resetInputs(){
    numeroCart.value = "";
    nomeCart.value = "";
    anoCart.value = "";
    cvvCart.value = "";
}