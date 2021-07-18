let salvarDados = function() {
    let nome = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    
    localStorage.setItem('nome', nome);
    localStorage.setItem('email', email);
}

document.onchange = salvarDados; 
document.getElementById('email').value = localStorage.email;
document.getElementById('nome').value = localStorage.nome;