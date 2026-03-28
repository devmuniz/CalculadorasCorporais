//CALCULO DA TAXA METABÓLICA E CALORIA GASTA DIARIAMENTE

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

document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });

document.addEventListener('touchmove', function(event) {
    event.preventDefault();
}, { passive: false });

let todosCamposPreenchidos;

//Quando clicar Enter, se todos campos tiverem preenchidos, executa, se não, não faz nada
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        todosCamposPreenchidos = verificarCampos();
        if (!todosCamposPreenchidos) {
            event.preventDefault()
        } else {
            calcularTmb()
            event.preventDefault()
        }
    }
});




//Função para verificar o preenchimento dos campos
function verificarCampos() {
    const PESO_CAMPO = document.getElementById('pesoTMB')
    const ALTURA_CAMPO = document.getElementById('alturaTMB')
    const IDADE_CAMPO = document.getElementById('idade')
    const CAMPO_SEXO = document.querySelectorAll('input[name="sexo"]');
    let sexoSelecionado = document.querySelector('input[name="sexo"]:checked');
    let campos = [PESO_CAMPO, ALTURA_CAMPO, IDADE_CAMPO];

    //Pra cada campo vazio, deixa a borda vermelha
    campos.forEach(campo => {
        if(!campo.value) {
            campo.style.border = "1px solid red"
            return false;
        } else {
            campo.style.border = ""
        }
    });
    
    //Valida o campo de sexo separado
    //Caso nao tenha campo selecionado, adiciona erro no CSS, para ficar vermelho
    if (!sexoSelecionado) {
        CAMPO_SEXO.forEach(radio => radio.classList.add('erro'));
        return false
    } else {
        CAMPO_SEXO.forEach(radio => radio.classList.remove('erro'));
    }

    return true

}

//Função para calcular a taxa metabólica
function calcularTmb() {
    let sexoSelecionado = document.querySelector('input[name="sexo"]:checked');
    let opcaoAtv = document.getElementById('frequencia').value
    let peso = parseInt(document.getElementById('pesoTMB').value);
    let altura = parseInt(document.getElementById('alturaTMB').value);
    let idade = parseInt(document.getElementById('idade').value);
    let resultado;
    let gasto;
    
    //Se tiver algum campo vazio, retorna
    todosCamposPreenchidos = verificarCampos()
    if(!todosCamposPreenchidos) return; 

    //Faz o calculo de acordo com o sexo selecionado
    if (sexoSelecionado.value === 'homem') {
        resultado = 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * idade)
        resultado = resultado.toFixed(2)
    } else {
        resultado = 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * idade)
        resultado = resultado.toFixed(2)
    }
    
    //Define o gasto calórico de acordo com a frequencia de atividade fisica realizada
    if (opcaoAtv === 'leve') {
        gasto = resultado * 1.55
        gasto = gasto.toFixed(2)
        
    } else if (opcaoAtv === 'moderada') {
        gasto = resultado * 1.84
        gasto = gasto.toFixed(2)
        
    } else if (opcaoAtv === 'intensa'){
        gasto = resultado * 2.2
        gasto = gasto.toFixed(2)
    }

    //Atribui os campos da página do resultado
    localStorage.setItem('resultado', resultado);
    localStorage.setItem('gasto', gasto);
    //Redireciona para a página do resultado
    window.location.href = 'tmbResultado.html'
}

