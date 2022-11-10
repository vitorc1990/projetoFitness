function calculaAgua() {
    var peso = document.getElementById("input_calc_agua").value;
    var result = 0.035 * peso;
    document.write(` Você precisa ingerir ${result.toFixed(2)} litros de água por dia`);
    console.log(result.toFixed(2));
}

function calculaGet() {
    var masc = document.getElementById("input_homem").value;
    var fem = document.getElementById("input_mulher").value;
    var peso = document.getElementById("input_calc_peso").value;
    var altura = document.getElementById("input_calc_altura").value;
    var idade = document.getElementById("input_calc_idade").value;
    var atividade = document.getElementById("input_sedentario").value;
    if (masc == "homem") {
        var result = 66 + (13.7 * peso) + (5 * altura) - (6.8 * idade);
        document.write(`Seu Gasto Energético Total é ${result * atividade} Kcal.`)
    } else if (fem == "mulher") {
        var result = 655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade);
        document.write(`Seu Gasto Energético Total é ${result * atividade} Kcal.`)
    }
}

function calculaImc() {
    var peso = document.getElementById("input_calc_imc_peso").value;
    var altura = document.getElementById("input_calc_imc_altura").value;
    var resultImc = peso / (altura * altura);
    document.write(`O seu IMC é ${resultImc.toFixed(2)}`);
    console.log(resultImc.toFixed(2));
}
