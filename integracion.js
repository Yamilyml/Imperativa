
const sumarOdividir = (a, b)=>{
    if(a %2 === 0 && b % 2 === 0 && a > 0 && b > 0 ){
        return a / b 
    }else {
        return a + b 
    }
}

let resultado = sumarOdividir(4 ,4)
console.log(resultado)


///

let alicia = [10, 80, 75] 
let bob = [90, 20, 25]

const encontrarGanador = ( participante1, participante2)=>{

    for(let i = 0; i < participante1.lenght; i++){

        if(participante1[i] > participante2[i]){
            p1 += 1
        }else if(participante1[i] < participante2[i]){
            p2 += 1

        }

        }

        if(p1 > p2){
            return "ganador participante uno"
        }else if(p1 < p2){
            return " ganador paticipante dos" 
        }
        return "los participantes empataron"
    
    }


let resultadoCompetencia = encontrarGanador(p1, p2)
console.log(resultadoCompetencia)


