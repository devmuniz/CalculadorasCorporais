verificarInput()
function calcular() {
    
    var peso = document.getElementById('peso').value
    var altura = document.getElementById('altura').value
    var imc
    var resultado
    classificacaoElement = document.querySelector('.classificacao')

    imc = peso / (altura * altura)
    resultado = imc * 10000
    resultado = resultado.toFixed(2)

    document.querySelector('#resultado').textContent = resultado
    var classificacao 

    if (resultado < 18.5) {
        classificacao = 'Abaixo do peso'
    }

    if (resultado >= 18.5 && resultado <= 24.9) {
        classificacao = 'Peso ideal'
    }
    
    if (resultado >= 25 && resultado <= 29.9) {
        classificacao = 'Acima do peso'
    }
    
    if (resultado >= 30 &&  resultado <= 34.9) {
        classificacao = 'Obesidade grau I'
    }

    if (resultado >= 35 && resultado <= 39.9) {
        classificacao = 'Obesidade grau II'
    }

    if (resultado > 40) {
        classificacao = 'Obesidade grau III'
    }

    classificacaoElement.textContent = classificacao

    document.getElementById('campoResultado').style.display = 'flex'
    
}

peso.addEventListener('input', verificarInput)
altura.addEventListener('input', verificarInput)

function verificarInput() {
    if (document.getElementById('peso').value.trim() === ''|| document.getElementById('altura').value.trim() === '' ) {
        document.getElementById('btnCalc').disabled = true
    } else {
        document.getElementById('btnCalc').disabled = false
    }
}

document.addEventListener('keydown', (event) => {
    
    if(event.key === 'Enter' && document.getElementById('btnCalc').disabled === false) {
        event.preventDefault()
        calcular()
    }
})

document.addEventListener('keydown', (event) => {
    if (event.key != 'Enter') {    
        
    } else {
        event.preventDefault()
    }
})

document.addEventListener('touchmove', function(event) {
    if (event.touches.length > 1 || event.changedTouches[0].screenX !== event.changedTouches[0].clientX) {
        event.preventDefault();
    }
}, { passive: false });

