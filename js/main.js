



































const form = document.querySelector('form');
const btnImc = document.getElementById('btn_imc');
btnImc.addEventListener("click",() => {

})
// Para não enviar o form, mas a verificação do HTML funcionar
form.addEventListener("submit", (event) =>event.preventDefault());

const btnBmr = document.getElementById("btn_bmr");

btnBmr.addEventListener("click",() => {
    const feminino = document.getElementById("inputSexoFeminino").checked;
    const masculino = document.getElementById("inputSexoMasculino").checked;
    if(!(feminino || masculino))
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

function calcularBMR(){
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
    textResultado.value =resultado;
}