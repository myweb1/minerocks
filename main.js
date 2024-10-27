var controcas = 0
var dinero = 0
var pico = 1
var conthierro = 0
var coalgi = 0
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
    if (dinero >= 100) {
        dinero -= 100
        pico += 1
        document.getElementById("rocamina").innerHTML = pico
        document.getElementById("miney").innerHTML = dinero
    }
}

function brazomasfuerte() {
    if (dinero >= 250) {
        dinero -= 250
        pico += 3
        document.getElementById("rocamina").innerHTML = pico
        document.getElementById("miney").innerHTML = dinero
    }
}

function dinamita() {
    if (dinero >= 700) {
        dinero -= 700
        pico += 9
        document.getElementById("rocamina").innerHTML = pico
        document.getElementById("miney").innerHTML = dinero
    }
}

function taladro() {
    if (dinero >= 2000) {
        dinero -= 2000
        pico += 27
        document.getElementById("rocamina").innerHTML = pico
        document.getElementById("miney").innerHTML = dinero
    }
}

function taladrelec() {
    if (dinero >= 5000) {
        dinero -= 5000
        pico += 100
        document.getElementById("rocamina").innerHTML = pico
        document.getElementById("miney").innerHTML = dinero
    }
}
function excavefici() {
    if (dinero >= 55000) {
        dinero -= 55000
        pico += 1200
        document.getElementById("rocamina").innerHTML = pico
        document.getElementById("miney").innerHTML = dinero
    }
}

function automexcava() {
    if (dinero >= 14000) {
        dinero -= 14000
        pico += 299
        document.getElementById("rocamina").innerHTML = pico
        document.getElementById("miney").innerHTML = dinero
    }
}

function hierroconvert() {
    if (controcas >= 1000) {
        if (coalgi >= 500){
            conthierro += controcas/2
            conthierro += coalgi/3
            controcas = 0
            coalgi = 0
            document.getElementById("hierruno").innerHTML = conthierro
            document.getElementById("cantrocas").innerHTML = controcas
            document.getElementById("Coalcant").innerHTML = coalgi
        }
            
    }

}

function mejorahierro1() {
    if (conthierro >= 8500) {
        conthierro -= 8500
        pico += 890
        document.getElementById("rocamina").innerHTML = pico
        document.getElementById("hierruno").innerHTML = conthierro
    }
}
function mejorahierro2() {
    if (conthierro >= 42500) {
        conthierro -= 42500
        pico += 4450
        document.getElementById("rocamina").innerHTML = pico
        document.getElementById("hierruno").innerHTML = conthierro
    }
}
function mejorahierro3() {
    if (conthierro >= 212000) {
        conthierro -= 212000
        pico += 22250
        document.getElementById("rocamina").innerHTML = pico
        document.getElementById("hierruno").innerHTML = conthierro
    }
}
function mejorahierro4() {
    if (conthierro >=  1062500) {
        conthierro -=  1062500
        pico += 111250
        document.getElementById("rocamina").innerHTML = pico
        document.getElementById("hierruno").innerHTML = conthierro
    }
}
function mejorahierro5() {
    if (conthierro >=  5312500) {
        conthierro -=  5312500
        pico += 556250
        document.getElementById("rocamina").innerHTML = pico
        document.getElementById("hierruno").innerHTML = conthierro
    }
}
function venderhierro() {
    dinero += conthierro*3
    conthierro = 0
    document.getElementById("hierruno").innerHTML = conthierro
    document.getElementById("miney").innerHTML = dinero
}
function Coalg() {
    coalgi += pico/2
    document.getElementById("Coalcant").innerHTML = coalgi
}
function mejorahierro6() {
    if (conthierro >=  26562500) {
        conthierro -=  26562500
        pico += 2781250
        document.getElementById("rocamina").innerHTML = pico
        document.getElementById("hierruno").innerHTML = conthierro
    }
}

window.addEventListener("keydown", function entermalo(enter) {
    if ( enter.keyCode == "13" ) {
        enter.preventDefault()
    }
})
