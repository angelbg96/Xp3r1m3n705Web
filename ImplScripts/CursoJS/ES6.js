const condicionalCorto = () => {
    // si devuelve un TRUE, ejecutara la funcion de la derecha
    getBoolean() && console.log("Me ejecute")
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