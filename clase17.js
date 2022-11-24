/**
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */


/**
 * Luego, escribe un algoritmo para sumar todos
 * los numeros en la matriz.
 */



let mat1 = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25],

]

const alg = (mat1) =>{

    let sumatoria = 0

    for (let i = 0; i < mat1.length; i++) {
    
        for (let j = 0; j < mat1[i].length; j++) {
            sumatoria += mat1[i][j]
        }

}
return sumatoria
}

console.log(alg(mat1));


//Crear una función que genere una matriz de 10x10. Cada fila debe tener solo 10
//números. La matriz debe verse así://




const mat2 =() =>{

    let mPushead = []
    for (let i = 0; i <= 100; i++) {
        if(i<=10){
            for(let j = 1; j < 100; j++) {
                mPushead.push(j)
                
        }


}
    return mPushead
}
}

console.log(mat2());



// const matrix = () => {
//     let mat = []
//     let contador = 0
//     for(let i = 1; i <= 10; i++){
//         let mat2 =[];
//         for(let j=1; j <=10; j++){
//             contador += 1
//             mat2.push(contador)

//         }
//         mat.push(mat2)

//     }
//     return mat
// }

// let matri = matrix()
// console.log(matri)





