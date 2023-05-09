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


    const peso = document.getElementById("inputPeso");
    const altura = document.getElementById("inputAltura");
    const rdSexo = document.getElementsByName("rdSexo");
    const rdFem = document.getElementById("rdFeminino").checked;
    const rdMas = document.getElementById("rdMasculino").checked;
    if (peso.value === (""))
        showError("input-peso-msg", peso);
    if (altura.value === "")
        showError("input-altura-msg", altura);
    if (!(rdFem || rdMas))
        showError("input-sexo-msg", null);
    const correction = (rdFem) ? 0.85 : 0.9;
    const imc = peso.value / Math.pow((altura.value / 100), 2).toFixed(2) * correction;
    const msg = [
        'com obesidade grau I',
        'acima do peso',
        'no peso ideal',
        'abaixo do peso',
        'muito abaixo do peso'
    ]
    const planos = [
        1, 2, 3, 4, 5
    ];
    const valores = [99999, 30, 25, 18.5, 17];
    let imc_msg;
    valores.forEach((item, index) => {
        if (imc < item) {
            imc_msg = msg[index];
            imc_plano = planos[index];
        }
    });
    window.scrollBy(0,1);
    const resultForm = document.getElementById("form-result");
    resultForm.scrollIntoView({ behavior: "smooth" });

    const resultTitle = document.getElementById("result-imc");
    resultTitle.textContent = `Seu IMC é de: ${imc}`;
    const resultMessage = document.getElementById("result-message");
    resultMessage.textContent = `Você está ${imc_msg}.\n O plano ideal é o ${imc_plano}`;
    const resultPlan = document.getElementById("result-plans");
    resultPlan.textContent = `Assine agora o plano ${imc_plano}`;


})

const showError = (element, input) => {
    const msg = document.getElementById(element);

    msg.style.left = "42em";
    setInterval(() => { msg.style.left = "5em" }, 3000);
    input.style.border = "solid var(--vermelho) 0.18rem";

    input.addEventListener("focus", () => input.style.border = "none");
};


const btnReturn = document.getElementById("btn-return");

btnReturn.addEventListener("click", () => {
    window.scrollBy(0,1);
    const calcForm = document.getElementById("form-calc");
    calcForm.scrollIntoView({ behavior: "smooth" });
});
















