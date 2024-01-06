import { erros, mensagensErros } from '../erros/tipo-erros.js';


function validador(campo) {
  const campoErro = campo.parentNode.querySelector('.mensagem-erro');

  erros.forEach(erro => {
    if(campo.validity[erro]) {
      campo.ariaInvalid = true;
      campoErro.innerText = mensagensErros[campo.name][erro];
    }else if(campo.checkValidity()) {
      campo.ariaInvalid = false;
      campoErro.innerText = '';
    }
  });
}

export { validador };
