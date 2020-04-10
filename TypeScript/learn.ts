let amigo:string

amigo = "5453"
console.log(amigo)

enum PowerAtack {
    jab = 3,
    recto,
    upper,
    uppercut,
    gancho
}

interface Ianimal {
    nombre:string
    patas: number
    silvestre: boolean
    ataque: PowerAtack
}

function muestraAnimal(animal:Ianimal):string {
    return `Soy ${animal.nombre}, tengo ${animal.patas} patas, vivo en estado silvestre ${animal.silvestre} y golpeo con poder de ${animal.ataque}`
}

console.log(muestraAnimal(
    {
        nombre: "humano",
        patas: 2,
        silvestre: false,
        ataque: PowerAtack.recto
    })
)

class Vegetal {
    static genero:string = "vegetal"
    protected color:string
    protected nombre:string

    constructor(color?:string, nombre?:string){
        this.color = color ? color : "verde";
        this.nombre = nombre ? nombre : "verdura"
    }

    saludar():string {
        return `Hola soy ${this.nombre} de color ${this.color}`
    }
}

class Hortaliza extends Vegetal {
    private diasCosecha:number
    private exotico:boolean

    constructor(diasCosecha?:number, exotico?:boolean, color?:string, nombre?:string){
        super(color, nombre)
        this.diasCosecha = diasCosecha ? diasCosecha : 0
        this.exotico = exotico !== undefined ? exotico : false
    }

    presentacion():string {
        return super.saludar() + `\nTardo en madurar ${this.diasCosecha} dias y exotico? pues.. ${this.exotico}`
    }
}

let objHortaliza = new Hortaliza()
console.log(objHortaliza.presentacion())

let objHortaliza2 = new Hortaliza(30, false, "rojo","jitomate")
console.log(objHortaliza2.presentacion())