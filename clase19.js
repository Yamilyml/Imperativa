//A partir de él siguiente array de edades nos solicitan realizar lo siguiente

const edades = [33, 27, 34, 30, 34, 25];


// Desarrollar una función que ordene internamente de forma ascendente las edades, la misma deberá retornar él array ordenado , es decir deberíamos obtener resultado como él siguiente.
// [25, 27, 30, 33, 34, 34]

// const ordenar = arr=> {

//     let aux = undefined;

//     for (let i = 0; i < arr.length; i++) {

//         for(let j = 0; j < arr.length -1; j++) {

//             if(arr[j] > arr[j + 1]) {

//                 aux = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = aux;


//             }
//     }

// }
// return arr;
// }

// let ordenado = ordenar(edades)
// console.log(ordenado);




// Desarrollar una función que ordene internamente de forma descendente las edades, la misma deberá retornar él array ordenado , es decir deberíamos obtener resultado como él siguiente.
// [34, 34, 33, 30, 27, 25]

const ordenar = arr=> {

    let aux = undefined;

    for (let i = 0; i < arr.length; i++) {

        for(let j = 0; j < arr.length -1; j++) {

            if(arr[j] < arr[j + 1]) {

                aux = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = aux;


            }
    }

}
return arr;
}

let ordenado2 = ordenar(edades)
console.log(ordenado2);


// Dado un array de strings:
// ¿Cómo pudieras ordenar el array anterior, alfabéticamente?

const letras = ["C", "A", "D", "E", "H", "Z", "J", "L"]


const ordenarLetras = obj => {

    let aux = undefined;

    for (let i = 0; i < obj.length; i++) {

        for(let j = 0; j < obj.length -1; j++) {
            
            if(obj[j] > obj[j + 1]) {

                aux = obj[j];
                obj[j] = obj[j + 1];
                obj[j + 1] = aux;


            }
        }
    }
return obj;
}


let ordenando = ordenarLetras(letras)
console.log(ordenando);



// Desarrollar una función que ordene internamente de forma ascendente según él saldo de cada cuenta, la misma deberá retornar él array ordenado .

// Desarrollar una función que ordene internamente de forma ascendente según la edad del titular de cada cuenta, la misma deberá retornar él array ordenado.



const arrayCuentas =
    [
        {
            titular: "Arlene Barr",
            estaHabilitada: false,
            saldo: 3253.40,
            edadTitular: 33,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Roslyn Torres",
            estaHabilitada: false,
            saldo: 3229.45,
            edadTitular: 27,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Cleo Lopez",
            estaHabilitada: true,
            saldo: 1360.19,
            edadTitular: 34,
            tipoCuenta: "corriente"
        },
        {
            titular: "Daniel Malone",
            estaHabilitada: false,
            saldo: 3627.12,
            edadTitular: 30,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Ethel Leon",
            estaHabilitada: true,
            saldo: 1616.52,
            edadTitular: 34,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Harding Mitchell",
            estaHabilitada: true,
            saldo: 1408.68,
            edadTitular: 25,
            tipoCuenta: "corriente"
        }
    ]


const datos = saldo => {


    let aux = undefined;

    for (let i = 0; i < saldo.length; i++) {

        for (let j = 0; j < saldo.length; j++) {

            if (saldo[i][j] === undefined) {    
        }


    }

    }

}









