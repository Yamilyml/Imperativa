//ARRAY

//ARREGLOS
//para almacenar datos en una variable

let nombre = "pepito"
let edad = 12
let numeros = [12, 112, 212]
let mascotas = ["isis", "boliche", "smok"]

console.log(mascotas[0])
console.log(numeros[1])

//en la consola pongo el numero de la posicion (0,1,2)
//si pongo el cero en console, sale isis en la terminal


// console.table("error")

//LENGTH

//cuenta caracteres en los strings y elementos en un arreglo

console.log(nombre.length) //6
console.log(mascotas.length) //3



//indexof
//indica la posicion de un elemento

nombre.indexOf("i")
console.log(nombre.indexOf("i"))//la i en pepito
console.log(nombre.lastIndexOf("i"))//devuelve la ultima coincidencia. si fuera pepitoi: seria la posicion 6

//-1 si no encuentra algo

console.log(nombre.indexOf("z"))//resulta un -1 porque no existe la z en la palabra pepito


console.log(mascotas.indexOf("isis"))//funciona en arreglos tambien


//INCLUDES

//dice si el elemento esta incluido

console.log(mascotas.includes("tom"))//indica false porque no esta tom en mascotas
console.log(mascotas.includes("isis"))//indica true



//SPLIT

let frase = "hola como estas"

let fraseComoArreglo = frase.split("")

console.log(fraseComoArreglo)


//PUSH
//agrega elementos


// numeros.push("hola")

// console.log(numeros[3])//12,112,212,hola
// numeros[3] = hola
// console.log(numeros)

console.log("................")
console.log("................")
console.log("................")


let notas = [9, 7, 8]

const calcularPromedio = (arreglo) => {
    
    let sumatoria = 0

    for( let i = 0; i < arreglo.length; i++){
        sumatoria += arreglo[i]

    }
    let resultado = sumatoria / (arreglo.length)

    return resultado
}


let promedio = calcularPromedio (notas)
console.log(promedio)




