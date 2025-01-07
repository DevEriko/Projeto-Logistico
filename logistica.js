// Função para calcular o custo de envio.
function calcularCustoEnvio(peso, distancia, tipoTransporte) {
    let custoPorKm;
    switch (tipoTransporte.toLowerCase()) {
        case "terrestre":
            custoPorKm = 0.05; // Custo por km em transporte terrestre
            break;
        case "aéreo":
            custoPorKm = 0.1; // Custo por km em transporte aéreo
            break;
        case "marítimo":
            custoPorKm = 0.03; // Custo por km em transporte marítimo
            break;
        default:
            console.log("Tipo de transporte inválido.");
            return null;
    }

    // Cálculo do custo total
    const custoTotal = (peso * custoPorKm) * distancia;
    return custoTotal;
}

function iniciarPrograma() {
    const peso = parseFloat(document.getElementById('peso').value);
    const distancia = parseFloat(document.getElementById('distancia').value);
    const tipoTransporte = document.getElementById('tipoTransporte').value;

    const custo = calcularCustoEnvio(peso, distancia, tipoTransporte);

    const resultadoDiv = document.getElementById('resultado');
    if (custo !== null) {
        resultadoDiv.style.display = 'block';
        resultadoDiv.innerHTML = `O custo total para transportar a carga é: R$${custo.toFixed(2)}`;
    } else {
        resultadoDiv.style.display = 'none';
        alert("Não foi possível calcular o custo.")
    }
}