//TMB (homens) = 88,362 + (13,397 × peso em kg) + (4,799 × altura em cm) – (5,677 × idade em anos).
//TMB (mulheres) = 447,593 + (9,247 × peso em kg) + (3,098 × altura em cm) – (4,330 × idade em anos).

/*Leve: considera atividades como cozinhar; limpar a casa; cuidar de crianças; trabalhar sentado; e 
caminhar até 1 hora por dia - considerar 1,55 para o cálculo;

Moderada: inclui atividades como fazer 1 hora diária de corrida, ciclismo, natação ou dança; 
trabalhar como operário de construção, garçom, vendedor de porta em porta, carteiro 
ou entregador de mercadorias leves - considerar 1,84 para o cálculo;

Intensa: considera atividades como natação, corrida, andar de bicicleta ou dançar 2 horas por dia; 
trabalhador rural que trabalha com instrumentos manuais e caminham longas distâncias, 
várias horas por dia; ou entregador de mercadorias pesadas - considerar 2,2 para o cálculo.*/

verificarCampos()
function calcularTmb() {

    var peso = document.getElementById('pesoTMB').value
    var altura = document.getElementById('alturaTMB').value
    var idade = document.getElementById('idade').value
    peso = parseInt(peso)
    altura = parseInt(altura)
    idade = parseInt(idade)
    var resultado
    var gasto

    const opcao = document.querySelector('input[name="sexo"]:checked')
    const valor = opcao.value

    const opcaoAtv = document.getElementById('frequencia').value

    if (valor === 'homem') {
    resultado = 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * idade)
    
    resultado = resultado.toFixed(2)
    } else {
    resultado = 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * idade)
    
    resultado = resultado.toFixed(2)
    
    }
    

    if (opcaoAtv === 'leve') {
        gasto = resultado * 1.55
        gasto = gasto.toFixed(2)
        
    } if (opcaoAtv === 'moderada') {
        gasto = resultado * 1.84
        gasto = gasto.toFixed(2)
        
    } if (opcaoAtv === 'intensa'){
        gasto = resultado * 2.2
        gasto = gasto.toFixed(2)
        
    }

    localStorage.setItem('resultado', resultado);
    localStorage.setItem('gasto', gasto);
    window.location.href = 'tmbResultado.html'

}



function verificarCampos() {
    const peso = document.getElementById('pesoTMB').value.trim()
    const altura = document.getElementById('alturaTMB').value.trim()
    const idade = document.getElementById('idade').value.trim()
    const opcao = document.querySelector('input[name="sexo"]:checked')
    const valor = opcao ? opcao.value : ''

    const btnCalcTMB = document.getElementById('btnCalcTMB')

    if (peso === '' || altura === '' || idade === '' || valor === '') {
        btnCalcTMB.disabled = true
    } else {
        btnCalcTMB.disabled = false
    }
}

document.getElementById('pesoTMB').addEventListener('input', verificarCampos)
document.getElementById('alturaTMB').addEventListener('input', verificarCampos)
document.getElementById('idade').addEventListener('input', verificarCampos)
document.querySelectorAll('input[name="sexo"]').forEach(el => {
    el.addEventListener('change', verificarCampos)
});


document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const btnCalcTMB = document.getElementById('btnCalcTMB')
        if (btnCalcTMB.disabled === true) {
            event.preventDefault()
        } else {
            calcularTmb()
            event.preventDefault()
        }
    }
});
