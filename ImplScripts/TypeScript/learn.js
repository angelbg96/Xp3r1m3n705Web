var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var amigo;
amigo = "5453";
console.log(amigo);
var PowerAtack;
(function (PowerAtack) {
    PowerAtack[PowerAtack["jab"] = 3] = "jab";
    PowerAtack[PowerAtack["recto"] = 4] = "recto";
    PowerAtack[PowerAtack["upper"] = 5] = "upper";
    PowerAtack[PowerAtack["uppercut"] = 6] = "uppercut";
    PowerAtack[PowerAtack["gancho"] = 7] = "gancho";
})(PowerAtack || (PowerAtack = {}));
function muestraAnimal(animal) {
    return "Soy " + animal.nombre + ", tengo " + animal.patas + " patas, vivo en estado silvestre " + animal.silvestre + " y golpeo con poder de " + animal.ataque;
}
console.log(muestraAnimal({
    nombre: "humano",
    patas: 2,
    silvestre: false,
    ataque: PowerAtack.recto
}));
var Vegetal = /** @class */ (function () {
    function Vegetal(color, nombre) {
        this.color = color ? color : "verde";
        this.nombre = nombre ? nombre : "verdura";
    }
    Vegetal.prototype.saludar = function () {
        return "Hola soy " + this.nombre + " de color " + this.color;
    };
    Vegetal.genero = "vegetal";
    return Vegetal;
}());
var Hortaliza = /** @class */ (function (_super) {
    __extends(Hortaliza, _super);
    function Hortaliza(diasCosecha, exotico, color, nombre) {
        var _this = _super.call(this, color, nombre) || this;
        _this.diasCosecha = diasCosecha ? diasCosecha : 0;
        _this.exotico = exotico !== undefined ? exotico : false;
        return _this;
    }
    Hortaliza.prototype.presentacion = function () {
        return _super.prototype.saludar.call(this) + ("\nTardo en madurar " + this.diasCosecha + " dias y exotico? pues.. " + this.exotico);
    };
    return Hortaliza;
}(Vegetal));
var objHortaliza = new Hortaliza();
console.log(objHortaliza.presentacion());
var objHortaliza2 = new Hortaliza(30, false, "rojo", "jitomate");
console.log(objHortaliza2.presentacion());
