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

// Funcão principal
function iniciarPrograma() {
    console.log("Seja Bem-vindo ao sistema de cálculo logístico!");

    // Solicitar informações aos usuários
    const peso = parseFloat(prompt("Digite o peso da carga (em kg): "));
    const distancia = parseFloat(prompt("Digite a distância do transporte (em km): "));
    const tipoTransporte = prompt("Digite o tipo de transporte (terrestre, aéreo ou marítimo): ");

    // Calcular e exibir o custo de envio 
    const custo = calcularCustoEnvio(peso, distancia, tipoTransporte);

    if (custo !== null) {
        console.log(`O custo total para transportar a carga é: R$${custo.toFixed(2)}`);
    } else {
        console.log("Não foi possível calcular o custo. Verifique os dados inseridos.");
    }
}

// Iniciar o Programa.
iniciarPrograma();