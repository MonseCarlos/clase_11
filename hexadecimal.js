const  hexa = require('./retornaletrahexa.js')
function hexadecimal(numero){

    
    let conversion =[]
    let producto = 0
    

    while(numero>0){
        
        producto = numero%16

        if(producto === 0){
            conversion.push("0")
        }
        else {
            conversion.push(hexa(producto))
        }

        numero = parseInt(numero/16)    
        console.log(conversion)
    }

    conversion = conversion.reverse()
    
     
    console.log(conversion)

    conversion = conversion.join()
    console.log(conversion)
    
}

hexadecimal(1256)
