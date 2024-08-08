var controcas = 0
var dinero = 0
var pico = 1
var conthierro = 0
function funcminar() {
    controcas += pico
    document.getElementById("cantrocas").innerHTML = controcas
}

function vender() {
    dinero += controcas
    controcas = 0
    document.getElementById("miney").innerHTML = dinero
    document.getElementById("cantrocas").innerHTML = controcas
}
function mejorapico() {
    if (dinero >= 30) {
        dinero -= 30
        pico += 1
        document.getElementById("rocamina").innerHTML = pico
        document.getElementById("miney").innerHTML = dinero
    }
}

function brazomasfuerte() {
    if (dinero >= 80) {
        dinero -= 80
        pico += 3
        document.getElementById("rocamina").innerHTML = pico
        document.getElementById("miney").innerHTML = dinero
    }
}

function dinamita() {
    if (dinero >= 220) {
        dinero -= 220
        pico += 9
        document.getElementById("rocamina").innerHTML = pico
        document.getElementById("miney").innerHTML = dinero
    }
}

function taladro() {
    if (dinero >= 640) {
        dinero -= 640
        pico += 27
        document.getElementById("rocamina").innerHTML = pico
        document.getElementById("miney").innerHTML = dinero
    }
}

function taladrelec() {
    if (dinero >= 2000) {
        dinero -= 2000
        pico += 100
        document.getElementById("rocamina").innerHTML = pico
        document.getElementById("miney").innerHTML = dinero
    }
}

function automexcava() {
    if (dinero >= 5800) {
        dinero -= 5800
        pico += 299
        document.getElementById("rocamina").innerHTML = pico
        document.getElementById("miney").innerHTML = dinero
    }
}

function hierroconvert() {
    if (controcas >= 1000) {
        controcas /2
        conthierro += controcas
        controcas = 0
        document.getElementById("hierruno").innerHTML = conthierro
        document.getElementById("cantrocas").innerHTML = controcas
    }

}

window.addEventListener("keydown", function entermalo(enter) {
    if ( enter.keyCode == "13" ) {
        enter.preventDefault()
    }
})