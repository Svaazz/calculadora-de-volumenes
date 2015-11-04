function prisma() {
    try {
        //Asignando variables a cada input de la pagina
        var h = document.getElementById("altura");
        var b = document.getElementById("base");
        var p = document.getElementById("poli");
        var r = document.getElementById("radio");

        //Variable que maneja la "consola"
        var con = document.getElementById("consola");
        //Variable del resultado (Volumen)
        var v;

        //Excepto si el numero de lados es 4, es decir, tenemos un paralelogramo como polígono de base se siguen estas instrucciones
        if (p.value != 4 && p.value != 3) {
            //Se chequea que el usuario haya rellenado los campos necesarios
            if (h.value, b.value, p.value, r.value == null || h.value, b.value, p.value, r.value == 0) {
                alert("Rellena todos los campos");
                return;
            }
            //Calculo el apotema de la base (de forma muy rudimentaria...)
            var aaa = (b.value / 2) * (b.value / 2)
            var aa = r.value * r.value;
            var a = Math.sqrt(aa) - Math.sqrt(aaa);

            //Calculo el area de la base
            var bb = (b.value * a) / 2;
            var ar = bb * p.value;
            //Finalmente calculo el volumen
            v = ar * h.value;
            //Lo muestro por la consola
            con.innerHTML = v;
        //Calcular un prisma de base triangular (equilatera)
        } else if (p.value == 3) {
            var ap = (b.value / 2) * (b.value / 2);
            var apo = (b.value * b.value) - ap;
            var apotema = Math.sqrt(apo);
            v = ((b.value * apotema) / 2) * h.value;
            con.innerHTML = v;
        } else {
            //Calculo el area del paralelepipedo
            v = (b.value * b.value) * h.value;
            con.innerHTML = v;
        }
    } catch (error) {
        alert(error)
    }
}

function lados() {
    try{
        var lados = document.getElementById("poli");
        var radio = document.getElementById("radio");
        var txt = document.getElementById("radiot")

        if (lados.value > 4) {
            radio.setAttribute("type", "number");
            txt.innerHTML = "Radio "
        } else {
            radio.setAttribute("type", "hidden");
            txt.innerHTML = ""
        }
    } catch (error) {
        alert(error);
    }
}
