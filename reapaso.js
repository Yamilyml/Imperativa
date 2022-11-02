//CREAR FUNCION FLECHA

const determinarSiesMayor = (numA, numB)=> numA >=numB 

let esMayor = determinarSiesMayor (1, 5)
console.log(esMayor)


let edad = 12

console.log(edad)


//edd++
//el signo antes del = y se hace la operacion con la edad de la variable inicial
// edad++
// edad = edad + 1
// edad += 1

edad -= 10

console.log(edad)



//crear una funcion que sume 2 numeros
//crear una funcion que divida el num a por el num b
//crear una funcion que devuelva el promedio de 3 notas utilizando las 2 anteriores

const sumarNumeros = (a,b)=> a + b 
sumarNumeros(20, 30) //50

const dividirNumeros = (a,b)=> a / b 

const promedioTres = (nota1, nota2, nota3)=>{

    //let suma = sumarNumeros(sumarNumeros(nota1, nota2) nota3). -esta tambien sirve asi-
    
    let suma1 = sumarNumeros(nota1, nota2) //7
    let suma2 = sumarNumeros(suma1, nota3) //14
    return suma2 / 3
    //let sumaFinal = sumarNumeros(suma1, nota3)
      

}

const resultado = promedioDeTres(3, 5, 7)
console.log(resultado)