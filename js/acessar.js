const pass = '123456';
const user = 'demervas123';


document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    const formPassword = document.querySelector('#password').value;
    const formUser = document.querySelector('#user').value;

    if(pass === formPassword && formUser === user){
        window.location.href = '/dados.html';
    } else {
        alert('Dados inválidos, insira novamente')
        document.querySelector('#password').focus();
    }
    
});