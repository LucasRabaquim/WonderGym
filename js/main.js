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

btnImc.addEventListener("click", () => {
    const peso = document.getElementById("inputPeso").value;
    const altura = document.getElementById("InputAltura").value;
    const rdFem = document.getElementById("rdFeminino").checked;
    const rdMas = document.getElementById("rdMasculino").checked;
    if (rdFem || rdFem === null) {
        showError();
        return;
    }
    if (peso || altura == null) {
        showError();
        return;
    }
    const correction = (rdFem) ? 0.85 : 0.9;
    const imc = peso / Math.pow((altura / 100), 2).toFixed(2) * correction;
    const msg = [
        'com obesidade grau I',
        'acima do peso',
        'no peso ideal',
        'abaixo do peso',
        'muito abaixo do peso',
        'com o peso gravemente baixo'
    ]
    const valores = [99999, 30, 25, 18.5, 17, 16];
    let imc_msg;
    valores.forEach((item, index) => {
        if (imc < item) 
            imc_msg = msg[index];
    });

})





















const btnBmr = document.getElementById("btn_bmr");

btnBmr.addEventListener("click", () => {
    const feminino = document.getElementById("inputSexoFeminino").checked;
    const masculino = document.getElementById("inputSexoMasculino").checked;
    if (!(feminino || masculino))
        return;
    const peso = document.getElementById('inputPeso').value;
    const altura = document.getElementById('inputAltura').value;
    const idade = document.getElementById('inputIdade').value;
    const textResultado = document.getElementById("resultadoBMR");
    const resultado = (feminino) ?
        447.593 + (9.247 * peso) + (3.098 * altura) - (4.33 * idade)
        :
        88.362 + (13.397 * peso) + (4.799 * peso) - (5.677 * idade);
    textResultado.value = resultado;
});

function calcularBMR() {
    alert();
    const feminino = document.querySelector("#inputSexoFeminino").checked;
    const masculino = document.querySelector("#inputSexoFeminino").checked;
    /*    if(!(feminino || masculino))
            return;*/

    const peso = document.querySelector('#inputPeso').value;
    const altura = document.querySelector('#inputAltura').value;
    const idade = document.querySelector('#inputIdade').value;
    const textResultado = document.querySelector("#resultadoBMR");
    const resultado = (feminino) ?
        447.593 + (9.247 * peso) + (3.098 * altura) - (4.33 * idade)
        :
        88.362 + (13.397 * peso) + (4.799 * peso) - (5.677 * idade);
    textResultado.value = resultado;
}