

let arr= [12, 43, 54] 

console.log( arr[1])

// PROPIEDADES O METODOS
// pares de clave: valor 

let perro = {

    nombre: "Jack",
    apellido: "perez",
    edad: 2,
    color: "marron",
    ladrar: function (){
        return "estoy saltando"

    },
    decirNombreCompleto: function(){
        return "hola soy ${this.nombre} ${this.apellido}"

    }
}

// siempre que asigne un objeto es con dos.
// el objeto sirve para indicar propiedades

console.log(perro.nombre)
console.log(perro["nombre"])

console.log(perro.ladrar())
console.log(perro.decirNombreCompleto())



// MANIPULAR OBJETOS
// AGREGAR Y MODIFICAR PROPIEDADES

let numero = 15
    numero = 12

    perro.nombre = "firulais"
    perro.raza = "callejero"

    
    console.log(perro.decirNombreCompleto())
    console.log(perro)


let productos = [
    {
        nombre: "televisor",
        stock: 10,
        precio: 100,
        descontarStock: function(cantidad){

            // this.stock = this.stock - cantidad
            this.stock -= cantidad
        }



    },
    {
        nombre: "celular",
        stock: 5,
        precio: 50,
        descontarStock: function(cantidad){

            this.stock -= cantidad
        }


    }
]
console.log(productos[0])
productos[0].descontarStock(5)
console.log(productos[0])

