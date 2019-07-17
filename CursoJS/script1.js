let number = 18
let nombre = `yo soy mayor de edad (> ${number} años)`

let div = `
    <div class="container">
        ${nombre}
    </div
`
/* Inserta el codigo en el documento HTML */
document.body.innerHTML += div;

let answer = prompt("Escribe la capital de México:").toUpperCase().trim()

message = answer === "MEXICO" || answer === "MÉXICO"
                    ? "Respuesta correcta"
                    : "Incorrecto, es México"
alert(message)


let age = parseInt(prompt("Escribe tu edad:"))
if(age){
    if(age >= 18)
        alert("Eres mayor de edad")
    else alert("Eres menor de edad")
} else age = parseInt(prompt("Tu edad debe ser un numero:"))


const sumaTodos = (...numeros) => {
    let resultado = 0;
    for(let i=0; i<numeros.length; i++)
        resultado += numeros[i];
    return resultado;
}

console.log(sumaTodos(2,5,4,86,14,-6,7,-42))

/* Función almacenada en una cte, no debe tener parentesis!
    porque al colocarlos, se está invocando a dicha función
*/
const c = console.log

/* closures -> Fx que retorna otra Fx */
/*  En su forma de declaración:
    function sumar(x){
        return function(y){
            return x + y
        }
    }
*/
/* en su forma expresada en flecha */
const sumar = x => y => x + y
/* invocandola.... */
c(sumar(10)(20))

const n1 = sumar(3)(7) // se envian dos argumentos, hace la funcion final, retorna valor
const n2 = sumar(6)    // se envia un argumento, regresa una funcion, se almacena el parametro enviado

c( sumar(n1)( n2(-8) ) ) // se envia el 2do parametro, se hace la operacion, y finalmente se realiza otra suma

/* Una funcion autoinvocada es así */
/*
    const variable = ((saludo, persona) => `${saludo} ${persona}` )("Holis", "amigos xD")
*/

/* Funcion anonima */
setTimeout(() => {
    alert("Booh!")
    // esto es el contenido de una funcion anonima
}, 2000);