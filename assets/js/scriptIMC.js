let botaoDesabilitado = document.getElementById('btnCalc').disabled;

document.addEventListener('keydown', (event) => {
    
    if(event.key === 'Enter' && botaoDesabilitado === false) {
        event.preventDefault()
        calcular()
    }
})

document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });

document.addEventListener('touchmove', function(event) {
    event.preventDefault();
}, { passive: false });


//Funções
function calcular() {
    const PESO_CAMPO = document.getElementById('peso');
    const ALTURA_CAMPO = document.getElementById('altura');
    let pesoValor = Number(PESO_CAMPO.value);
    let alturaValor = Number(ALTURA_CAMPO.value);
    let classificacao;

    //Calculo
    let alturaMetros = alturaValor / 100;
    let imc = pesoValor / (alturaMetros * alturaMetros);
    let resultado = imc.toFixed(2);

    //Caso algum desses valores esteja vazio, nao prossegue e deixa o campo vermelho
    if(!pesoValor || !alturaValor) {

        if(!pesoValor) {
            PESO_CAMPO.style.border = "1px solid red"
        } else {
            PESO_CAMPO.style.border = ""
        }

        if(!alturaValor) {
            ALTURA_CAMPO.style.border = "1px solid red"
        } else {
            ALTURA_CAMPO.style.border = ""
        }

        return
    } else {
        ALTURA_CAMPO.style.border = ""
        PESO_CAMPO.style.border = ""
    }

    //Define a classificação de acordo com o resultado do IMC
    if (resultado < 18.5) {
        classificacao = 'Abaixo do peso'
    } else if (resultado >= 18.5 && resultado <= 24.9) {
        classificacao = 'Peso ideal'
    } else if (resultado >= 25 && resultado <= 29.9) {
        classificacao = 'Acima do peso'
    } else if (resultado >= 30 &&  resultado <= 34.9) {
        classificacao = 'Obesidade grau I'
    } else if (resultado >= 35 && resultado <= 39.9) {
        classificacao = 'Obesidade grau II'
    } else if (resultado > 40) {
        classificacao = 'Obesidade grau III'
    }

    //Atribui os campos de classificação e resultado
    document.querySelector('.classificacao').textContent = classificacao
    document.getElementById('resultado').textContent = resultado

    //Deixa os campos visiveis
    document.getElementById('campoResultado').style.display = 'flex'
    
}





