function findMaxSum(nums = [], k = 1) {
    // k : longitud del subarreglo
    let maxSum = -Infinity,
        tempSum,
        start, // Indice para determinar la posicion inicial del subconjunto
        end 

    if(nums.length < k)
        return null

    for(start=0, end=0, tempSum = 0; end<nums.length;end++){
        tempSum += nums[end] // suma el elemento que entra a la ventana
        console.log("\nIndice inicial : " + start)
        console.log("Indice final : " + end)
        console.log("Suma al momento : " + tempSum)
        if(end+1 >= k){
            // si el valor de end es mayor o igual a la longitud de la ventana
            // cambia el indice start, ya que end seguirá incrementando y se debe
            // respetar el tamaño de la ventana
            maxSum = Math.max(maxSum,tempSum)
            tempSum -= nums[start] // sustraccion del elemento que sale
            start++
            console.log("Suma despues del if : " + tempSum)
        }
    }
    return maxSum
}
function findMaxStr(str = "") {
    let longest = 0,
        seen = {}, // objeto cuyos nombres de props son los caracteres encontrados
        char,
        start, // Indice para determinar la posicion inicial del subconjunto
        index

    for(start=0, index=0; index<str.length;index++){
        char = str[index]
        console.log("\nIndice start : " + start)
        // aabcb
        if(seen[char]){ 
            // Si la prop del obj existe, entonces
            // start se sobreescribe con el valor maximo entre su valor actual o
            // la última posición + 1 donde se encontró anteriormente el caracter
            start = Math.max(start,seen[char])
            console.log("start despues del if : " + start)
        }
        // La longitud de caracteres irrepetidos se actualiza con el maximo entre su
        // valor actual o el resultado de la diferencia de los caracteres recorridos
        // menos el valor de start
        longest = Math.max(longest,index - start + 1)
        // Al obj, se le asigna una propiedad cuyo nombre es el contenido de char
        // y el valor de esa propiedad es el indice actual + 1 (pensando en iteraciones
        // posteriores), si ya existe la prop, sobreescribe su valor
        seen[char] = index + 1

        console.log("seen [" + char + "] : " + seen[char])
        console.log("Suma al momento : " + longest)
    }
    console.log("\nel objeto final fue : ")
    for (let attr in seen){
        console.log("clave : " + attr + " , valor : " + seen[attr])
    }
    return longest
}

let arrayNums = [1,12,-5,-6,50,3]
console.log("\nLa máxima suma de elementos del subarreglo es " + findMaxSum(arrayNums,3) + "\n")

console.log("\nLa máxima cantidad de caracteres no repetidos contiguamente es " + findMaxStr("aabcb") + "\n")