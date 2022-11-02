//DECLARADAS//
//tiene la palabra function, parentesis y nombre. no estan en variable//

function sumar (){
    //bloque de codigo//
}

//hoisting: se quedan en la linea (las anonimas suben)



//EXPRESADAS sin nombre //

//se guarda en una variable. la funcion es anonima//


let restar = function (){
    //bloque de codigo//
}

//ARROW FUNCTION. flecha//


let multiplicar = ()=>{
    //bloque de codigo
}

//crear una funcion que sume //
//los parametros son a y b, funciona por posiciones. si le digo que retorne la posicion dos en el parentesis, me muetra la b en la consola
//si tengo todo en una sola linea, puedo quitar llave y return. y poner a + b al lado de la flecha: let sumar = (a, b)=> a + b
//si no tengo parametro no puedo sumar 

let sumar = (a,  b)=>{
    let num1 = a
    let num2 = b

    return a + b 
}

//ejecutar
//no se hace console en una funcion

let resultado = sumar(2, 5)
let resultado2 = sumar(12, 15)


console.log(resultado)
console.log(resultado2)

//crear una funcion que sume tres numeros y retorne el promedio

let promediar = (a, b, c)=>{

    let suma = (a, b, c)
    let resultado = suma / 3
    return resultado 
}

//scope / alcance


//anterior

let anterior = (numero) => {
    return numero - 1
}

let resultadoAnterior = anterior (10)
console.log(resultadoAnterior)


//triple

const triple = numero => numero * 3

let resultadoTriple = triple(5)
console.log(resultadoTriple)

const anteriorDelTriple = numero =>{
    let a = triple(numero)
    let b = anterior (a)
     return b

}

let resultadoAnteriorTriple = anteriorDelTriple (5)
console.log(resultadoAnteriorDelTriple)

