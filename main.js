const form = document.getElementById('form-contato');
const nomesContato = [];
const telefoneContato = [];
let linhas = '';

form.addEventListener('submit', function(b){
    b.preventDefault();

    adicionaLinha();
    insereLinhas();
    atualizaQuantidade();
})

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    if(nomesContato.includes(inputNomeContato.value)){
    alert('Erro = Contato já existente!!!')
    }  else {
    nomesContato.push(inputNomeContato.value);
    telefoneContato.push(inputTelefoneContato.value);
    

    let linha = `<tr>`;
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputTelefoneContato.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

    inputNomeContato.value = '';
    inputTelefoneContato.value = '';

    console.log(nomesContato);
    console.log(telefoneContato);
}  

}

function insereLinhas(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}

function atualizaQuantidade(){
    document.getElementById('quantidade').innerHTML = nomesContato.length;
}

