var usuarios = [
    {"login": "bcf", "senha": "bcf"},
    {"login": "mamae", "senha": "abacaxi"},
    {"login": "papai", "senha": "melancia"},
];



function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    
 for (var u in usuarios){
     var us = usuarios[u];
     if(us.login === login && us.senha === senha){

        alert('sucesso')
        location.href = "https://github.com/ViniciusHTSilva/Desafio5/deployments/activity_log?environment=github-pageshttps://github.com/ViniciusHTSilva/Desafio5/deployments/activity_log?environment=github-pages";
    }
 }
 alert("incorreto")
 limpar;
}

