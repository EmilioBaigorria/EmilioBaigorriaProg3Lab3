//Ejer2
console.log("¡Hola mundo desde typeScript!");
//Ejer 3
{
    var pName = "Emilio";
    var value = 12;
    var real = true;
    var fecha = new Date();
    var ejer3Div = document.getElementById("ejer3Variables");
    if (ejer3Div) {
        ejer3Div.innerHTML = "<p>Texto:".concat(pName, "</p>\n        <p>Numero:").concat(value, "</p>\n        <p>Boolean:").concat(real, "</p>\n        <p>Fecha:").concat(fecha, "</p>");
    }
}
//Ejer4
{
    var value = 696;
    var ejer4NumToStr = document.getElementById("ejer4NumToStr");
    if (ejer4NumToStr) {
        ejer4NumToStr.innerHTML = "Numero convertido a cadena: ".concat(value.toString());
    }
}
//Ejer5
{
    var numArray = [3, 5, 7, 3, 7];
    var finalValue_1 = 0;
    numArray.forEach(function (i) {
        finalValue_1 = finalValue_1 + i;
    });
    var ejer5ArraySum = document.getElementById("ejer5ArraySum");
    if (ejer5ArraySum) {
        ejer5ArraySum.innerHTML = "Suma de array: ".concat(finalValue_1);
    }
}
//Ejer6
{
    var student = {
        name: "Emilio",
        age: 22,
        course: "Programacion"
    };
    var ejer6Object = document.getElementById("ejer6Object");
    if (ejer6Object) {
        ejer6Object.innerHTML = "Nombre:".concat(student.name, "<br>Edad:").concat(student.age, "<br>Curso:").concat(student.course);
    }
}
//Ejer 7
{
    var simpAddress = {
        street: "Avenida Siempreviva",
        city: "Springfield",
        cp: 2264
    };
    var ejer7Type = document.getElementById("ejer7Type");
    if (ejer7Type) {
        ejer7Type.innerHTML = "Calle:".concat(simpAddress.street, "<br>Ciudad:").concat(simpAddress.city, "<br>CodigoPostal:").concat(simpAddress.cp);
    }
}
//Ejer8
{
    var user = {
        name: "Asa",
        email: "ilovechainsaws@gmail.com",
        sayHello: function () {
            var ejer8Int = document.getElementById("ejer8Int");
            if (ejer8Int) {
                ejer8Int.innerHTML = "Hola mi nombre es ".concat(this.name);
            }
        }
    };
    user.sayHello();
}
//Ejer9
{
    var person = /** @class */ (function () {
        function person(name, age) {
            this.name = name;
            this.age = age;
        }
        person.prototype.presentMyself = function () {
            var ejer9Clss = document.getElementById("ejer9Clss");
            if (ejer9Clss) {
                ejer9Clss.innerHTML = "Hola, mi nombre es ".concat(this.name, " y tengo ").concat(this.age, " a\u00F1os");
            }
        };
        return person;
    }());
    var p1 = new person("Emilio", 23);
    p1.presentMyself();
}
//Ejer10
{
    var generic = /** @class */ (function () {
        function generic(value) {
            this.value = value;
        }
        generic.prototype.showValue = function () {
            var ejer10ClssGn = document.getElementById("ejer10ClssGn");
            if (ejer10ClssGn) {
                var box = document.createElement("li");
                box.innerHTML = "Contenido de la caja del tipo ".concat(typeof this.value, ":").concat(this.value);
                ejer10ClssGn.appendChild(box);
            }
        };
        return generic;
    }());
    var g1 = new generic("La balada de bala");
    g1.showValue();
    var g2 = new generic(14);
    g2.showValue();
}
//Ejer 11
{
    function identidad(value) {
        var ejer11Iden = document.getElementById("ejer11Iden");
        if (ejer11Iden) {
            var liElement = document.createElement("li");
            liElement.innerHTML = "Identiad del valor de tipo ".concat(typeof value, ":").concat(value);
            ejer11Iden.appendChild(liElement);
        }
    }
    identidad("Ts>>>Js");
    identidad(823);
}
//Ejer12
{
    var colors = void 0;
    (function (colors) {
        colors["rojo"] = "Rojo";
        colors["azul"] = "Azul";
        colors["morado"] = "Morado";
        colors["celeste"] = "Celeste";
        colors["verde"] = "Verde";
        colors["naranja"] = "Naranja";
    })(colors || (colors = {}));
    var favColor = colors.naranja;
    var ejer12Enum = document.getElementById("ejer12Enum");
    if (ejer12Enum) {
        ejer12Enum.innerHTML = "Mi color favorito es: ".concat(favColor);
    }
}
