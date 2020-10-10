let resp = document.getElementById('resposta');
let resp2 = document.getElementById('tres');
let resp3 = document.getElementById('cinco');

for (num = 0; num<=100; num++){
    resp.innerHTML += `${num}--`
    if(num % 3 != 0 ){
        resp2.innerHTML += `--${num}--`
    }else {
        resp2.innerHTML += ` Fizz `
    }
    if (num %5 !=0){
        resp3.innerHTML += `--${num}--`;
    }else{
        resp3.innerHTML += ` Buzz `
    }
    /*if(num %3 != 0 && num %5 !=0 ){
        resp2.innerHTML += `--${num}--`
    }else {
        resp2.innerHTML += ` FizzBuzz `
    }*/
}
