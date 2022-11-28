


let matrix = [
    [5,4,3],
    [1,2,3],
    [5,3,1],
]

// console.log(matrix[0][0]);
// console.log(matrix[1][1]);
// console.log(matrix[2][2]);

//el numero de la fina debe ser eel de la columna. Es cuadrada la matriz

// const recorrerPrincipal = mat =>{

//     for (let i=0; i<mat.length; i++){

//         console.log(mat [i][i ]);
//     }


// }

// recorrerPrincipal(matrix)


let matrix2 = [
    [5,4,3],
    [1,2,3],
    [5,3,1],
]

console.log("-----");


// console.log(matrix2[0][2]); // fila cero y columna 2
// console.log(matrix2[1][1]);
// console.log(matrix2[2][0]);

const recorrerSec = mat =>{

 for (let i = 0;  i < mat.length; i++){

    acc += mat[i][ mat.length -1 - i]
 }


}


recorrerSec (matrix2)