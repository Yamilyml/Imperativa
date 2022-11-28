// let numeros = [6, 5, 1, 2, 4, 3, 8, 7];

// for (let i = 0; i < numeros.length; i++) {
// 	for (let j = 0; j < numeros.length; j++) {
// 		if (numeros[j] > numeros[j + 1]) {
// 			let temp = numeros[j];
// 			numeros[j] = numeros[j + 1];
// 			numeros[j + 1] = temp;
// 		}
// 	}
// }

// console.log(numeros);



//DESC <
//ASC > mayor a la derecha 

//[a,b]   DESCENDENTE (a < b) ASCENdENTE (a > b) 

let numeros = [8, 9, 4, 1, 2,]


const ordenar = (arr)=>{

    let aux = undefined;

    for (let i = 0; i < arr.length; i++) {  //REPITE ORDENAMIENTO

        for (let j = 0; j < arr.length -1; j++) {  //HACE ORDENAMIENTO. tantas veces como arreglos tenga
            
            if (arr[i] > arr[j]) {    

                aux = arr[i];
                arr[i] = arr[j +1];
                arr[j + 1] = aux;

            // }else if(ordenamiento === "DESCENDENTE"){
            //     if( arr[j] > arr[j + 1] ){

            //         aux = arr[j];
            //         arr[j] = arr[j +1];
            //         arr[j + 1] = aux;
                }
            }
        }
    }


ordenar(numeros);

console.log(numeros);


//MAYUSCULAS menor que minuscula, a es menor que z  

// let palabras = ["Hola", "Zebra"]

// console.log(palabras);



