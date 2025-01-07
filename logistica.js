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

// 