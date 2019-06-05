function letrahexadecimal(valor){

    switch(valor){
        case 10:
            return 'A'
        case 11:
            return 'B'
        case 12:
            return 'C'
        case 13:
            return 'D'
        case 14:
            return 'E'
        case 15:
            return 'F'
        default:
            return valor
    }
}
module.exports = letrahexadecimal 