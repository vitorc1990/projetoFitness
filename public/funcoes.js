function calculaAgua() {
    var peso = document.getElementById("input_calc_agua").value;
    var result = 0.035 * peso;
    document.write(` Você precisa ingerir ${result.toFixed(2)} litros de água por dia`);
    console.log(result.toFixed(2));
}
