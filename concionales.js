//IF ELSE

const definiendoFlujoDeControl = ( rolDelUsuario )=>{
    
    if( rolDelusuario === "vendedor"){
        //bloque de codigo
        //return "es un vendedor"
    }else if(rolDelusuario === "comprador") {
        //bloque de codigo
        return "es un comprador"
    }else{
        //bloque de codigo
        return "es un admin"
    }

    }

    let rol = definiendoFlujoDeControl("vendedor")
    console.log(rol)

    //IF TERNARIO

    let clima = "soleado"

    let mamaSalgoConParaguas = clima === "lluvioso" ? "si, llevalo" : "no, no hace falta"
   
    const probandoSwith = ( marcaDelAuto)=>{
        switch(marcaDelAuto) {
            
        case "volvo":
            console.log("el precio del auto es 200")
            break
        case "alfa romero":
            console.log("el precio del auto es 1200")
            break
        case "vw":
            console.log("el precio del auto es 2200")
            break
        case "renault":
            console.log("el precio del auto es 3200")
        }
    }

    probandoSwith("vw")