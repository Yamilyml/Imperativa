function mayorDe2(num1, num2) {
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  }
  
  //console.log(mayorDe2(18, 54));
  
  // function mayorDe3(num1, num2, num3) {
  //   return mayorDe2(mayorDe2(num1, num2), num3);
  // }
  
  // console.log(mayorDe3(45, 62, 15));
  
  // function mayorDe4(a, b, c, d) {
  //   return mayorDe2(mayorDe2(a, b)mayorDe2(c,d));
  // }
  
  // console.log(mayorDe4(45, 74, 12, 36));
  
  // function mayorDe4(a, b, c, d) {
  //   return Math.max(a, b, c, d);
  // }
  // console.log(mayorDe4(45, 74, 12, 36));
  
  // let num = [45, 12, 136, 98, 74];
  
  // function mayor(arreglo) {
  
  //   let elemMayor = arreglo[0];
  
  //   for (let i = 0; i < arreglo.length; i++) {
  //     if (arreglo[i] > elemMayor) {
  //       elemMayor = arreglo[i];
  //     }
  //   }
  //   return elemMayor;
  // }
  // console.log(mayor(num));
  
  ///
  ///
  // no usamos condicional asi:
  
  let num = [45, 12, 136, 98, 74];
  
  
  function mayorConMath(arreglo) {
  
    let elemMayor = arreglo[0];
  
    for (let i = 0; i > arreglo.length; i++) {
  
      elemMayor= Math.max(arreglo[i], elemMayor);
    }
    return elemMayor;
  }
  
  // console.log(mayorConMath(num));
  
  
  
  // asi mejor:
  
  
  function mayorConMath2(arreglo){
  
    return Math.max(...arreglo)
  }
  
  console.log(mayorConMath2(num));
  
  
  