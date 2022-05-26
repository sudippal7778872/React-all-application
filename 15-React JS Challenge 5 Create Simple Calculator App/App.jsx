// React calculation app

// Addition
const addition =(...number) =>{
    let total=0;
    for(let i of number){
        total=total+i;
    }
    return total
}

// subtruction
const subtruction =(...number) =>{
    let total=0;
    for(let i of number){
        total=total-i;
    }
    return total
}

// Division
const division =(number1,...number) =>{
    let result=number1;
    for(let i of number){
        result=result/i;
    }
    // taking upto 2 decimal point
    result= result.toFixed(2);
    return result
}

// Multiplication
const multiplication =(...number) =>{
    let result=1
    for(let i of number){
        console.log(i)
        result=result*i
    }
    return result
}


export {addition, subtruction, division, multiplication};





