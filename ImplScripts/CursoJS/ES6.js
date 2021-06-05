const condicionalCorto = () => {
    // si devuelve un TRUE, ejecutara la funcion de la derecha
    getBoolean() && console.log('Me ejecute')
}

const getBoolean = (sup = 100, inf = 0) => {
    let numR = Math.random()
    numR = Math.round(numR * (sup - inf) + inf )
    console.log(`El número es ${numR}`)
    return numR % 2 === 0 ? true : false
}

const randomOrder = () => {
    let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    console.log(arreglo.sort(() =>{ return Math.random() -0.5 }))
}

condicionalCorto()

randomOrder()

/* Potencia */
console.log('Potencia 5^3= ', 5 ** 3)

/** Metodos de prototipo String
 * .padStart(nuevaLongitud, 'cadena a concatenar') : Si la longitud es mayor, repite
 * tantas veces sea necesario el texto a concatenear al principio
 * .pad(nuevaLongitud, 'cadena a concatenar') : Si la longitud es mayor, repite
 * tantas veces sea necesario el texto a concatenear al final
 */
console.log('mi mensaje'.padStart(35,'Texto agregado al inicio: '))
console.log('mi mensaje'.padStart(35,'. Texto agregado al final'))


const obj1 = {
    name : 'fulanito',
    age : 24,
    country : 'Mexico',
}

/* Se obtienen los valores de las propiedades del objeto en un arreglo */
arrPropObj = Object.values(obj1)
console.log('Valores del objeto: ', arrPropObj)
/* Se obtienen las propiedades clave - valor del objeto en un arreglo bidimensional */
let arrPropObj = Object.entries(obj1)
console.log('Matriz de propiedades del objeto: ', arrPropObj)
console.log('Total de elementos clave - valor: ', arrPropObj.length)
/* Se obtiene un objeto a partir de un arreglo clave - valor */
arrPropObj = [['name', 'perenganito'], ['age', 34]]
console.log('Objeto construido: ', Object.fromEntries(arrPropObj))

/** Metodos de Aplanado de Arreglos **
 * > .flat(profundidad) : Se aplana un objeto con el nivele de profundidad indicado
 * > .flatMap(callback) : Mismo funcionamiento que flat pero haciendo un tratamiento
 * a los elementos del arreglo
*/ 
console.log('Arreglo aplanado: ', arrPropObj.flat(2))

/** Desestructuración **
 * Uso del operador spread (...)
 * Sirve para :
 * > Convertir variables en elementos de un arreglo
 * > Obtener los elementos individuales de un arreglo
 * > Obtener ciertas propiedades de un objeto, cuando se extraen estas propiedades
 * se obtiene un nuevo objeto y variables específicas para proseguir con su tratamiento
 * > A partir de un subojeto, crear un objeto superior
*/
let {country, ...subObj1} = obj1 // Las variables a extraer deben tener el mismo nombre de la propiedad
console.log('Valor de Propiedad extraida: ', country)
console.log('Nuevo objeto: ', subObj1)

let obj2 = {
    ...subObj1,
    sex : 'Male'
 }
 console.log('Nuevo objeto: ', obj2)

/** Generators **
 * Funciones especiales que retornan un valor de acuerdo al algoritmo definido
 * yield : Retorna el valor indicado. Además, guarda el estado actual del generador
 */
function* helloWorld() {
    if(true) { // Se ejecuta en el primer llamado
        yield 'Hello '
    }
    if(true) { // Se ejecuta en el segundo llamado
        yield 'world'
    }
}

const generador1 = helloWorld()
console.log('Primer llamado al generador: ', generador1.next().value)
console.log('Segundo llamado al generador: ', generador1.next().value)
console.log('Tercer llamado al generador: ', generador1.next().value) // undefined porque ya no hay llamados

function* fibonacci(){
    let fn1 = 1;
    let fn2 = 1;
    while (true){  
      let actual = fn2;
      fn2 = fn1;
      fn1 = fn1 + actual;
      let reset = yield actual;
      if (reset){
          fn1 = 1;
          fn2 = 1;
      }
    }
}
  
const secuencia = fibonacci();
console.log(secuencia.next().value);
console.log(secuencia.next().value);
console.log(secuencia.next().value);
console.log(secuencia.next().value);
console.log(secuencia.next().value);
console.log(secuencia.next().value);
console.log(secuencia.next(true).value); // Reseteo
console.log(secuencia.next().value);
console.log(secuencia.next().value);
console.log(secuencia.next().value); 
console.log(secuencia.next().value);
