
function octal(numero){

    
    let conversion =[]
    let producto = 0
    

    while(numero>0){
        
        producto = numero%8

        if(producto === 0){
            conversion.push("0")
        }
        else {
            conversion.push(producto)
        }

        numero = parseInt(numero/8  )  
        console.log(conversion)
    }

    conversion = conversion.reverse()
    
     
    console.log(conversion)

    conversion = conversion.join()
    console.log(conversion)
    
}

octal(775)