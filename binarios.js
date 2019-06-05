function binario(numero){

    let conversion =[]
    let producto = 0
    

    while(numero>0){
        
        producto = numero%2

        if(producto === 0){
            conversion.push("0")
        }
        else {
            conversion.push("1")
        }

        numero = parseInt(numero/2)    
        console.log(conversion)
    }

    conversion = conversion.reverse()
    
     
    console.log(conversion)

    conversion = conversion.join()
    console.log(conversion)
    
}

binario(25)
