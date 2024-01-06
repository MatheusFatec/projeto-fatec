const mensagensErros = {
  'nome-completo': {
    valueMissing: 'Este campo é obrigatório!',
    tooShort: 'O nome deve conter 3 ou mais caracteres!',
    patternMismatch: 'O nome não pode conter números ou caracteres especiais!'
  },
  'cpf-cnpj-usuario': {
    valueMissing: 'Este campo é obrigatório!',
    tooShort: 'O CPF/CNPJ curto demais!',
    patternMismatch: 'CPF/CNPJ não podem conter letras ou caracteres especiais!'
  },
  'endereco': {
    valueMissing: 'Este campo é obrigatório!',
    tooShort: 'O endereço deve conter 3 ou mais caracteres!'
  },
  'email': {
    valueMissing: 'Este campo é obrigatório!',
    tooShort: 'O e-mail deve conter 8 ou mais caracteres!',
    typeMismatch: 'E-mail inválido!'
  },
  'senha': {
    valueMissing: 'Este campo é obrigatório',
    tooShort: 'A senha deve conter no mínimo 14 caracteres',
    patternMismatch: 'A senha deve possuir números, caracteres especiais e letras maiúsculas e minúsculas!'
  }
};
const erros = [
  'valueMissing',
  'tooShort',
  'typeMismatch',
  'patternMismatch'
];

export { erros, mensagensErros };
