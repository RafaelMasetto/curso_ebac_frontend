const form = document.getElementById('form-comparar');
const numB = document.getElementById('numB');
const numA = document.getElementById('numA');


form.addEventListener('submit', function(e){
    e.preventDefault();

    const containerMensagemErro = document.querySelector('.error-message');
    const containerMensagemSucesso = document.querySelector('.success-message');
    const valorA = parseFloat(numA.value);
    const valorB = parseFloat(numB.value);
    const mensagemSucesso = `O número ${valorB} é maior que ${valorA}. Parabéns! Validado com sucesso.`;
    const mensagemErro = `Falha na validação. O número ${valorB} não é maior que ${valorA}.`;

    if (valorB > valorA) {
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        containerMensagemErro.style.display = 'none';
        numA.value = '';
        numB.value = '';
    } else{
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
        containerMensagemSucesso.style.display = 'none';
        numA.value = '';
        numB.value = '';
    }
})