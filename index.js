const fs = require('fs');

let nome = process.argv [2];
let sobreNome = process.argv [3];
let email = process.argv [4];

let string = [nome, sobreNome, email];


fs.readFile('arquivo.txt', {encoding: 'utf8'}, function(erro, dados){
    if(erro){
        console.log('Erro ao ler o arquivo.');
    }
    // string = string.replace(',', '\n');
        // for(let linha of linhas){
        //     let nome = colunas[2];
            //}
        
        
    fs.writeFile('arquivo.txt', `${dados + string}\n`, {encoding: 'utf8', flag: 'a'}, function(){
        console.log('Cabô');
    }); 
    
});


