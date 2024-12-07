var controcas = 0
var dinero = 0
var pico = 1
var conthierro = 0
var coalgi = 0
var aleanitecont = 0
var trutpic = 1
var milisecondss = 10000
var alrturtpic = false
var alrsaved = false

alrsaved = localStorage.getItem("saved")

    controcas =Number(localStorage.getItem("cantrocasvar"))||0
    dinero = Number(localStorage.getItem("dinero"))||0;
    conthierro = Number(localStorage.getItem("conthierro"))||0;
    coalgi = Number(localStorage.getItem("combustible"))||0;
    aleanitecont = Number(localStorage.getItem("aleanite"))||0;
    document.getElementById("cantrocas").innerHTML = controcas
    document.getElementById("miney").innerHTML = dinero
    document.getElementById("hierruno").innerHTML = conthierro
    document.getElementById("Coalcant").innerHTML = coalgi
    document.getElementById("Aloyconter").innerHTML = aleanitecont
    alrturtpic = localStorage.getItem("trutpictrufals");
    if (localStorage.getItem("pico") > 1) {
        document.getElementById("rocamina").innerHTML = localStorage.getItem("pico",pico);
    }
    if (localStorage.getItem("trutpictrufals") == true) {
        trutpic = localStorage.getItem("trutpic",trutpic);
        milisecondss = localStorage.getItem("milisecondss",milisecondss);
        wow = window.setInterval(Chambahierr, milisecondss);
        document.getElementById("hierrchamba").innerHTML = ""
        document.getElementById("turt").innerHTML = "tu turt es"+trutpic+"/"+milisecondss

    }



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
function Createalloy() {
    if(coalgi >= 20000){
        if(conthierro >= 50000000){
            aleanitecont += conthierro/2
            aleanitecont += coalgi/2
            coalgi=0
            conthierro=0
            document.getElementById("hierruno").innerHTML = conthierro
            document.getElementById("Coalcant").innerHTML = coalgi
            document.getElementById("Aloyconter").innerHTML = aleanitecont
            alrturtpic = true
        }
    }
        
}
function AlloySell() {
    dinero = aleanitecont * 5
    aleanitecont = 0
    document.getElementById("miney").innerHTML = dinero
    document.getElementById("Aloyconter").innerHTML = aleanitecont

}
function MAMejoracontrtiemp() {
    if(aleanitecont>= 47000000) {
    pico += 5006250
    aleanitecont -= 47000000
    document.getElementById("Aloyconter").innerHTML = aleanitecont
    document.getElementById("rocamina").innerHTML = pico
    }
    
}
function MAbrbiomej() {
    if(aleanitecont >= 420000000) {
        pico += 45056250
        aleanitecont -= 420000000
        document.getElementById("Aloyconter").innerHTML = aleanitecont
        document.getElementById("rocamina").innerHTML = pico
    }
}
function CreateInterval() {
    if(aleanitecont>=3780000000){
        aleanitecont -= 3780000000
        document.getElementById("Aloyconter").innerHTML = aleanitecont
        wow = window.setInterval(Chambahierr, milisecondss);
        document.getElementById("hierrchamba").innerHTML = ""
        document.getElementById("turt").innerHTML = "tu turt es"+trutpic+"/"+milisecondss
    }
}

function Chambahierr() {
    conthierro += trutpic
    document.getElementById("hierruno").innerHTML = conthierro
}

function msminos() {
    window.clearInterval(wow)
    milisecondss -= 500
    wow = window.setInterval(Chambahierr, milisecondss);
    document.getElementById("turt").innerHTML = "tu turt es"+trutpic+"/"+milisecondss
}

function Turtpicmasun() {
    if(aleanitecont>=306180000000) {
        trutpic += 5
        aleanitecont -= 306180000000
        document.getElementById("Aloyconter").innerHTML = aleanitecont
        document.getElementById("turt").innerHTML = "tu turt es"+trutpic+"/"+milisecondss
    }
}

function Turtpicmasdos() {
    if(aleanitecont>=2755620000000) {
        trutpic += 45
        aleanitecont -= 2755620000000
        document.getElementById("Aloyconter").innerHTML = aleanitecont
        document.getElementById("turt").innerHTML = "tu turt es"+trutpic+"/"+milisecondss
    }
}

function save() {
    alrsaved = true
    localStorage.setItem("cantrocasvar",controcas);
    localStorage.setItem("dinero",dinero);
    localStorage.setItem("conthierro",conthierro);
    localStorage.setItem("combustible",coalgi);
    localStorage.setItem("aleanite",aleanitecont);
    localStorage.setItem("trutpic",trutpic);
    localStorage.setItem("milisecondss",milisecondss);
    localStorage.setItem("pico",pico);
    localStorage.setItem("trutpictrufals",alrturtpic);
    localStorage.setItem("saved",alrsaved);
    document.getElementById("savres").innerHTML = "¡Guardado!"
    window.setTimeout(Timeout,5000)
}

function Timeout() {
    document.getElementById("savres").innerHTML = ""
}

function reset() {
    localStorage.clear()
}

window.addEventListener("keydown", function entermalo(enter) {
    if ( enter.keyCode == "13" ) {
        enter.preventDefault()
    }
})

