const btnImc = document.getElementById("btnIMC");

btnImc.addEventListener("click", () => {


    const peso = document.getElementById("inputPeso");
    const altura = document.getElementById("inputAltura");
    const rdSexo = document.getElementsByName("rdSexo");
    const rdFem = document.getElementById("rdFeminino").checked;
    const rdMas = document.getElementById("rdMasculino").checked;
    if (peso.value === (""))
        showError("input-peso-msg", peso, "O peso não pode estar vazio");
    if (peso.value <= 0) 
        showError("input-peso-msg", peso, "O peso não pode ser negativo");
    if (altura.value === "") 
        showError("input-altura-msg", altura, "A altura não pode estar vazia");
    if (altura.value <= 0) 
        showError("input-altura-msg", peso, "A altura não pode ser negativo");
    if (!(rdFem || rdMas)) 
        showError("input-sexo-msg", null,"Selecione algum sexo");
    if(peso.value === ("") || peso.value <= 0 || altura.value === "" || altura.value <= 0 || !(rdFem || rdMas))
        return; 
    const correction = (rdFem) ? 0.85 : 0.9;
    const imc = (peso.value / Math.pow((altura.value / 100), 2) * correction).toFixed(2);
    const msg = [
        'com obesidade grau I',
        'acima do peso',
        'no peso ideal',
        'abaixo do peso',
        'muito abaixo do peso'
    ]
    const planos = [
        "plano maravilha", "plano Arlequina", "plano Batgil", "plano Arlequina", "plano maravilha"
    ];
    const valores = [99999, 30, 25, 18.5, 17];
    let imc_msg;
    valores.forEach((item, index) => {
        if (imc < item) {
            imc_msg = msg[index];
            imc_plano = planos[index];
        }
    });
    window.scrollBy(0, 1);
    const resultForm = document.getElementById("form-result");
    resultForm.scrollIntoView({ behavior: "smooth" });

    const resultTitle = document.getElementById("result-imc");
    resultTitle.textContent = `Seu IMC é de: ${imc}`;
    const resultMessage = document.getElementById("result-message");
    resultMessage.textContent = `Você está ${imc_msg}.\n O plano ideal é o ${imc_plano}`;
    const resultPlan = document.getElementById("result-plans");
    resultPlan.textContent = `Assine agora o plano ${imc_plano}`;


})

const showError = (element, input, msg) => {
    const elementMsg = document.getElementById(element);
    elementMsg.textContent = msg;
    elementMsg.style.left = "42em";
    setInterval(() => { elementMsg.style.left = "5em" }, 3000);
    input.style.border = "solid var(--vermelho) 0.18rem";
    input.addEventListener("focus", () => input.style.border = "none");
};


const btnReturn = document.getElementById("btn-return");

btnReturn.addEventListener("click", () => {
    window.scrollBy(0, 1);
    const calcForm = document.getElementById("form-calc");
    calcForm.scrollIntoView({ behavior: "smooth" });
});














