let a = '#';
let b = ' ';
let tamanho = 20;
let linha = 0;
let col = 0;
let resp = document.getElementById('tab');

while (linha <= 8){
    if (col <= 8){
        console.log(a)
        col++
    }
    resp.innerHTML += `\n`;
    linha++
}


/*
for (let linha = 0; linha < 8; linha++){
    for (let cont = 0; cont <tamanho; cont++){
        if( cont == 8){
            resp.innerHTML += `\n`
        }else if(cont%2 !=0){
            resp.innerHTML += `${b}`;
        }else {
            resp.innerHTML += `${a}`
        }
    
    }
}*/
