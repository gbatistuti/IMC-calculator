const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')
const sexo = document.querySelector('#sexo')
const limpar = document.querySelector('#limpar')

let rowIndex = null
let cellIndex = sexo.value === 'M' ? 1 : 2

limpar.addEventListener('click', limparCampos)

altura.addEventListener('keyup', calcularIMC)
peso.addEventListener('keyup', calcularIMC)
sexo.addEventListener('change', calcularIMC)

function calcularIMC() {
    if (!peso.value || !altura.value || !sexo.value) {
        document.querySelector('#erro').innerHTML = `Preencha todos os campos para continuar`

    } else {
        const imc = (peso.value / (altura.value * altura.value)).toFixed(1)


        if (sexo.value === 'M') {
            switch (true) {
                case (imc < 20):
                    rowIndex = 1
                    break;
                case (imc < 24.9):
                    rowIndex = 2
                    break;
                case (imc < 29.9):
                    rowIndex = 3
                    break;
                case (imc < 39.9):
                    rowIndex = 4
                    break;
                case (imc >= 40):
                    rowIndex = 5
                    break;
                default:
                    break;
            }
        } else if (sexo.value === 'F') {
            switch (true) {
                case (imc < 19):
                    rowIndex = 1
                    break;
                case (imc < 23.9):
                    rowIndex = 2
                    break;
                case (imc < 28.9):
                    rowIndex = 3
                    break;
                case (imc < 38.9):
                    rowIndex = 4
                    break;
                case (imc >= 39):
                    rowIndex = 5
                    break;
                default:
                    break;
            }
        }

        document.querySelector('#erro').innerHTML = ''
        document.querySelector('#resultado').innerHTML = `Seu resultado: IMC ${imc}`
        document.querySelector('#categoria').innerHTML = document.querySelector('.imc-table').rows[rowIndex].cells[0].innerHTML
    }
}

function limparCampos() {
    peso.value = ''
    altura.value = ''
    sexo.value = ''

    document.querySelector('#erro').innerHTML = ''
    document.querySelector('#categoria').innerHTML = ''
    document.querySelector('#resultado').innerHTML = 'Seu resultado: IMC 0.0'
}