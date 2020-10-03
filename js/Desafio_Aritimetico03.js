function calc(){
    let vr1 = document.getElementById("tvalor1")
    let vr2 = document.getElementById("tvalor2")
    let vr3 = document.getElementById("tvalor3")
    let vr4 = document.getElementById("tvalor4")
    let vr5 = document.getElementById("tvalor5")
    
    let numeros = [];
    numeros.push(vr1.value,vr2.value,vr3.value,vr4.value,vr5.value);
    
    let qntpos=0;
    let qntpar=0;
    let qntimpar = 0;
    let qntnegativo = 0;
    for(const item of numeros){
      if (item > 0 ){
        qntpos++;
      }if (item %2==0){
        qntpar++;
      }if( item % 2 !=0){
        qntimpar++;
      }if (item <0){
        qntnegativo++;
      }
    }
    
    console.log(`${qntpar} valor(es) par(es)`);
    console.log(`${qntimpar}valor(es) impar(es)`);
    console.log(`${qntpos} valor(es) positivo(s)`);
    console.log(`${qntnegativo} valor(es) negativo(s)`);
}