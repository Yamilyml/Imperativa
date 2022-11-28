// let arrayMatriz = []
// let arrayX = ["x0" , "x1" , "x2"]
// let arrayY = ["y0" , "y1" , "y2"]
// arrayMatriz[0] = arrayX
// arrayMatriz[1] = arrayY
// console.table(arrayMatriz);



// for(let i =0; i<arrayMatriz.length; i++) {
//     console.log(arrayMatriz[i]
//         );
// }
// console.log(arrayMatriz.length);


// // IMPRIMIR COLUMNA UNO

// // console.log(arrayMatriz.length)

// // for(let i=0; i<arrayMatriz.length; i++) {
// //     console.log(arrayMatriz[i])
// // }



// //PRIMERA COLUMNA


// for(let i=0; i<arrayMatriz.length; i++){
//     console.log(arrayMatriz[i][0]);
// }


// //PRIMERA FILA

// for(let i=0; i<arrayMatriz.length; i++){
//     console.log(arrayMatriz[0][i]);
// }

// //RECORRER TODA LA MATRIZ

// for(let i = 0; i<arrayMatriz.length; i++){
//     for(let j=0; j<arrayMatriz[i].length; j++){
//         console.log(arrayMatriz[i][j]);
//     }
// }


//EJERCITACION

// let tablaGastos = [["1135", "2500","900", "1600", "2800", "3650","1100"],
// ["1750", "1890", "1900", "1300", "898", "1750", "2800"] ,
// ["1750" , "1150", "1690", "1900", "1770", "4500", "2560"] ,
// ["800", "1250", "1430", "2100", "1980", "1270","950"]];


// console.log(tablaGastos);

// // let arrayMatriz = []
// // let arrayX = ["x0" , "x1" , "x2"]
// // let arrayY = ["y0" , "y1" , "y2"]
// // arrayMatriz[0] = arrayX
// // arrayMatriz[1] = arrayY
// // console.table(arrayMatriz);

// let sumaTablaGastos = [];

// for(let fila=0; fila <tablaGastos.length; fila++){
//     for(let columna=0; columna<tablaGastos[fila].length; columna++){
//         suma += tablaGastos[i];
//         console.log(tablaGastos[fila][columna]);
//     }
// }
// console.log(sumaTablaGastos);



//MATRIZ

// let mat = [
//     [2, 5, 1], //fila 0
//     [1, 7, 3], //fila 1
//     [9, 6, 2] //fila 2
// ]

// let num = [1,2,5,12]
// // console.log(mat[2][1]);//primer corchete fila, segundo columna
// //da 6


// const recorrerFila = (mat, numDeFila)=>{

//     let acc = 0

//     for (let i= 0; i< mat[numDeFila].length; i++){

//     acc += mat [numDeFila][i]

//     }
//     return acc
// }

// let resultadoFila = recorrerFila(matriz)

// console.log(resultadoFila);




//recorrer columna

// let matrix = [
//     [1, 2, 5],
//     [5, 4, 1],
//     [5, 4, 4],
// ]

// const recorrerCol = (mat)=> {

//     let acc = 0 

//     for (let i=0; i < mat.length; i++){
//         acc += mat[1][2]


//     }
// return acc
// }

// console.log(recorrerCol)
// recorrerCol(matrix)


// let gastos = [
// ["1135", "2500","900", "1600", "2800", "3650","1100"],
// ["1750", "1890", "1900", "1300", "898", "1750", "2800"] ,
// ["1750" , "1150", "1690", "1900", "1770", "4500", "2560"] ,
// ["800", "1250", "1430", "2100", "1980", "1270","950"],

// ];

// console.log(gastos);



// const totalSemana1 = (mat, numSemana)=> {

//     let posicionSemana = numSemana -1 
//     let acc = 0
//     for(let i=0; i < mat[posicionSemana].length; i++){
//         acc += mat[posicionSemana][i]
//     }
//     return acc
// }

// let totalSemanaTres = totalSemana1(gastos, 3)
// console.log(totalSemanaTres);



// const totalDiario = (mat, numDia )=> {

//     let posicionDiario = numDia -1 
//     let acc = 0
//     for(let i=0; i < mat[posicionDiario].length; i++) {
//         acc += mat[posicionDiario][i]
// }

// return acc
// }

// let totaSabados = totalDiario(gastos2, 6)
// console.log(totalSabados);


//el valor que mas se gasto
//en que semana se gasto mas 
//que dia se gasto mas 


let gastos = [
    ["1135", "2500","900", "1600", "2800", "3650","1100"],
    ["1750", "1890", "1900", "1300", "898", "1750", "2800"] ,
    ["1750" , "1150", "1690", "1900", "1770", "4500", "2560"] ,
    ["800", "1250", "1430", "2100", "1980", "1270","950"],
    
    ]


    let encontrarDiaMayor = mat =>{

        let mayor = mat[0][0]

        let semana = 0
        let dia = 0 
        
        
        
        for (let i= 0; i < mat.length; i++) {

            for (let j= 0; j < mat[i].length; j++) {
                
                if( mayor < mat[i][j] ) {
                    mayor = mat[i][j]
                    semana = i
                    dia = j 

                }
                mat[i][j ]
        }


    }
    return mayor 
}



let semanaFinal = semana + 1
let diaFinal = dia + 1  

console.log(semana + 1);
console.log(dia + 1);

let diaMayor = encontrarDiaMayor(gastos4)
console.log(diaMayor);

