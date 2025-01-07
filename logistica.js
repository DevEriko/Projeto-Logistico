function calcularCustoEnvio(peso, distancia, tipoTransporte) {
    let custoPorKm;
    switch (tipoTransporte.toLowerCase()) {
        case "terrestre":
            custoPorKm = 0.05;
            break;
        case "aéreo":
            custoPorKm = 0.1;
            break;
        case "marítimo":
            custoPorKm = 0.03;
            break;
        default:
            return null;
    }

    return (peso * custoPorKm) * distancia;
}

function exibirMensagem(idElemento, mensagem, tipo) {
    const elemento = document.getElementById(idElemento);
    elemento.style.display = 'block';
    elemento.className = tipo === 'erro' ? 'error' : 'result';
    elemento.innerHTML = mensagem;
}

function iniciarPrograma(event) {
    event.preventDefault();

    const peso = parseFloat(document.getElementById('peso').value);
    const distancia = parseFloat(document.getElementById('distancia').value);
    const tipoTransporte = document.getElementById('tipoTransporte').value;

    if (isNaN(peso) || isNaN(distancia) || peso <= 0 || distancia <= 0) {
        exibirMensagem('erro', 'Por favor, insira valores válidos para peso e distância.', 'erro');
        return false;
    }

    const custo = calcularCustoEnvio(peso, distancia, tipoTransporte);

    if (custo !== null) {
        exibirMensagem('resultado', `O custo total para transportar a carga é: R$${custo.toFixed(2)}`, 'sucesso');
        document.getElementById('erro').style.display = 'none';
    } else {
        exibirMensagem('erro', 'Tipo de transporte inválido.', 'erro');
        document.getElementById('resultado').style.display = 'none';
    }

    return false;
}
