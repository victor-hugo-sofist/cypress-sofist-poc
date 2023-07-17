export function randomZipCode():string{

    let randomNumber:number
    const a = 100000000 

    do {
        randomNumber = parseInt((Math.random() * a).toPrecision(8), 10)
    } while (
            randomNumber === 1 || 
            randomNumber === 0  || 
            randomNumber.toString().length < 8
            )
    return randomNumber.toString()
}   
