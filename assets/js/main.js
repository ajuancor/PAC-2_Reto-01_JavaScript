let num1 = "";
let num2 = "";

// Array que guarda números primos
let numPrimos = [];

var mensaje = "";

/* Listeners */
const btn_calcular = document.getElementById('btn_calcular_resultado');
const btn_refresh = document.getElementById('btn_refresh');
const content_result = document.getElementById('contenido_resultado');

btn_calcular.addEventListener('click', start);
btn_refresh.addEventListener('click', function() { location.reload() });

// Comprueba si el número es mayor o igual que 1 o si es menor o igual que 50
function comprobar(n) {
    if (n >= 1 && n <= 50) {
        return true;
    }
    return false;
}

/* SUMAR */
function sumar() {
    return parseInt(num1) + parseInt(num2);
}

/* PRIMOS */
function comprobarNumPrimos(num) {
    if ( numPrimos.length == 0 ) {
        // Obtiene los números primos hasta 50
        for (let x = 2; x < 50; x++) {
            // Si es primo lo añade al array de numPrimos
            if ( esPrimo(x) ) {
                numPrimos.push(x);
            }
        }
    }

    // Comprueba si el número es primo 
    if ( numPrimos.includes( parseInt(num) ) ) {
        return true;
    } else {
        return false;
    }
}

function esPrimo(n) {
    // Recorre el número para comprobar si es primo o no
    for (var i = 2; i < n; i++) {

        if (n % i === 0) {
          return false;
        }
    
      }
    
      // Si n no es 1, devuelve n
      return n !== 1;
}

/* PARES */
function comprobarNumPares(n) {
    if ( n % 2 === 0) {
        return true;
    }
    
    return false;
}

/* MUESTRA UN RANGO DE NÚMEROS */
function comprobarNumeros() {
    var men = "";
    // Si num1 es menor que num2
    if ( num1 < num2 ) {
        // Recoge los números pares del rango de manera ascendente
        for ( let x = num1; x <= num2; x++ ) {
            if (x % 2 === 0) {
                //console.log(x);
                men += x + " ";
            }
        }
    }

    // Si num1 es mayor que num2
    else if ( num1 > num2 ) {
        // Recoge los números impares del rango de manera descendente
        for ( let x = num1; x >= num2; x-- ) {
            if (x % 2 !== 0) {
                //console.log(x);
                men += x + " ";
            }
        }
    }

    // Si son iguales
    else {
        if ( numPrimos.includes( parseInt(num1) ) ) {
            men += "El número "+ num1 + " es primo";
            men += "\n";
        }
        
        if (num1 % 2 === 0) {
            men += "El número "+ num1 + " es par";
            men += "\n";
        }

        men += `Rango: ${num1}\n`;
    }

    return men;
}

/*** INICIO  ***/
function start() {
    num1 = prompt("Escriba un número del 1 al 50:");
    num2 = prompt("Escriba un segundo número del 1 al 50:");

    // Comprueba si los 2 números cumplen las condiciones (tener un número entero entre 1 y 50)
    if ( comprobar(num1) && comprobar(num2) ) {
        /* num1 y num2 se parsean para que sean variables enteras */
        num1 = parseInt(num1);
        num2 = parseInt(num2);

        mensaje += `num1: ${num1} | num2: ${num2}\n`;

        /* Suma */
        mensaje += "La suma de los 2 números es: " + sumar() + "\n";
        mensaje += "\n";
    
        if ( num1 != num2 ) {
            nums = [num1, num2];
            
            nums.forEach(element => {
                /* Primos */
                const result = comprobarNumPrimos(element);
                mensaje += `El número ${element}`;
                if ( !result ) {
                    mensaje += " no";
                }
                mensaje += " es primo\n";
            });
            
            mensaje += "\n";

            /* Pares */
            mensaje += `El número ${num1}`; 
            if ( !comprobarNumPares(num1) ) { 
                mensaje += " no";
            }
            mensaje += ` es un número par y el número ${num2}`; 
            if ( !comprobarNumPares(num2) ) { 
                mensaje += " no";
            }
            mensaje += " es un número par \n";


        } else {
            /* Primos */
            const result = comprobarNumPrimos(num1);
            mensaje += `El número ${num1}`;
            if ( !result ) {
                mensaje += " no";
            }
            mensaje += " es primo \n";

            /* Pares */
            mensaje += `El número ${num1}`; 
            if ( !comprobarNumPares(num1) ) { 
                mensaje += " no";
            }
            mensaje += " es un número par\n";
        }
        mensaje += "\n";

        mensaje += comprobarNumeros();
    }

    else {
        mensaje = "Los números introducidos no cumplen las condiciones";
    }

    // Muestra el mensaje
    alert(mensaje);

    // Se reemplazan los saltos de línea con la etiqueta <br>
    mensaje_html = mensaje;
    mensaje_html = mensaje_html.split("\n").join("<br />");

    content_result.innerHTML = "<h2>RESULTADO:</h2>" + mensaje_html;

    // El botón para calcular se deshabilita
    btn_calcular.disabled = true;
}
