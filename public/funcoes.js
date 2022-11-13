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

    if (resultImc < 16) {
        document.write(`O seu IMC é ${resultImc.toFixed(2)}. Você está caracterizado como Magreza Grave`);
        console.log(resultImc.toFixed(2));
    }
    if (resultImc >= 16 && resultImc <17) {
        document.write(`O seu IMC é ${resultImc.toFixed(2)}. Você está caracterizado como Magreza Moderada`);
        console.log(resultImc.toFixed(2));
    }
    if (resultImc >=17 && resultImc < 18.5) {
        document.write(`O seu IMC é ${resultImc.toFixed(2)}. Você está caracterizado como Magreza Leve`);
        console.log(resultImc.toFixed(2));
    }
    if (resultImc >=18.5 && resultImc < 25) {
        document.write(`O seu IMC é ${resultImc.toFixed(2)}. Você está caracterizado como Saudável`);
        console.log(resultImc.toFixed(2));
    }
    if (resultImc >= 25 && resultImc < 30) {
        document.write(`O seu IMC é ${resultImc.toFixed(2)}. Você está caracterizado como Sobrepeso`);
        console.log(resultImc.toFixed(2));
    }
    if (resultImc >= 30 && resultImc < 35) {
        document.write(`O seu IMC é ${resultImc.toFixed(2)}. Você está caracterizado como Obesidade Grau I`);
        console.log(resultImc.toFixed(2));
    }
    if (resultImc >=35 && resultImc < 40) {
        document.write(`O seu IMC é ${resultImc.toFixed(2)}. Você está caracterizado como Obesidade Grau II (Severa)`);
        console.log(resultImc.toFixed(2));
    }
    if (resultImc > 40) {
        document.write(`O seu IMC é ${resultImc.toFixed(2)}. Você está caracterizado como Obesidade Grau III (Mórbida)`);
        console.log(resultImc.toFixed(2));
    }
}

function calculaTmb() {
    var masc = document.getElementById("input_homem").value;
    var fem = document.getElementById("input_mulher").value;
    var peso = document.getElementById("input_calc_peso").value;
    var altura = document.getElementById("input_calc_altura").value;
    var idade = document.getElementById("input_calc_idade").value;
    var atividade = document.getElementById("input_sedentario").value;
    if (masc == "homem") {
        var result = atividade * (66 + ((13.7 * peso) + (5 * altura) - (6.8 * idade)));
        document.write(`Sua Taxa Metabólica Basal é ${result} Kcal.`)
    } else if (fem == "mulher") {
        var result = atividade * (655 + ((9.6 * peso) + (1.8 * altura) - (4.7 * idade)));
        document.write(`Sua Taxa Metabólica Basal é ${result * atividade} Kcal.`)
    }

}

function calculaIp(){
    var peso = document.getElementById("input_calc_peso").value;
    var result = peso * 1.5;
    document.write(`A ingestão de proteínas é ${result} gramas.`)
}

function calculaIc(){
    var peso = document.getElementById("input_calc_peso").value;
    var result = peso * 6;
    document.write(`A ingestão de carboidratos é ${result} gramas.`)
}

