//edades menores a 18


const EdadMayor18 = (arr) => {

  let nuevoArray = []

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] < 18) {
      nuevoArray.push(arr[i])
    }
  }
  return nuevoArray
}

let resultado = EdadMayor18(edades)
console.log(resultado)



