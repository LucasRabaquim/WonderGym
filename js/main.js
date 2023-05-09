const image01 = document.getElementById("carrosel-img-01");
const image02 = document.getElementById("carrosel-img-02");
const image03 = document.getElementById("carrosel-img-03");
const image04 = document.getElementById("carrosel-img-04");

image01.src = `../Images/carrosel/img1.jpg`;
image02.src = `../Images/carrosel/img2.jpg`;
image03.src = `../Images/carrosel/img3.jpg`;
image04.src = `../Images/carrosel/img4.jpg`;


const qtdImages = 9;
let carroselActual = 1;



/*
setInterval(() => {
    carroselActual = (carroselActual >= qtdImages) ? 1 : carroselActual+1;
    image01.src = image02.src;
    image02.src = `../Images/carrosel/img${carroselActual}.jpg`;
  

}, 20000);*/





const btnImc = document.getElementById("btnIMC");
    const peso = document.getElementById("inputPeso");
    const altura = document.getElementById("inputAltura");

btnImc.addEventListener("click", () => {
    
    const rdFem = document.getElementById("rdFeminino").checked;
    const rdMas = document.getElementById("rdMasculino").checked;
    /*if (peso.value === ("")) 
        showError("input-peso-msg",peso);
    if (altura.value === "") 
        showError("input-altura-msg",altura);
        if (!(rdFem || rdMas))
        showError("input-sexo-msg",null);*/

    const front = document.getElementById("front-side");
    const back = document.getElementById("front-back");
    back.style.transform = "180deg";
    front.style.opacity = "0";
    

    const correction = (rdFem) ? 0.85 : 0.9;
    const imc = peso.value / Math.pow((altura.value / 100), 2).toFixed(2) * correction;
    const msg = [
        'com obesidade grau I',
        'acima do peso',
        'no peso ideal',
        'abaixo do peso',
        'muito abaixo do peso'
    ]
    const valores = [99999, 30, 25, 18.5, 17];
    let imc_msg;
    valores.forEach((item, index) => {
        if (imc < item) 
            imc_msg = msg[index];
    });

})
const showError = (element,input) => {
    const msg = document.getElementById(element);
    msg.style.left="42em";
    setInterval(() => {msg.style.left="5em"},2000);
    input.addEventListener("focus", () =>input.style.border ="none");
};



















