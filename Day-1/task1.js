const calc = (num1 , num2 , ope ) =>{
    switch(ope){
        case "+":
            console.log(`Addition : ${num1} + ${num2} = `, num1 + num2);
            break;
        case "-":
            console.log(`subtraction : ${num1} - ${num2} = `, num1 - num2);
            break;
        case "*":
            console.log(`Multiplication : ${num1} * ${num2} = `, num1 * num2);
            break;
        case "/":
            console.log(`Division : ${num1} / ${num2} = `, num1 / num2);
            
    }
}

calc(5, 2 , "*")


// Odd or Even
const numType = (val) =>{
 if(val%2 === 0){
    console.log( `${val} is Even number`)
}
else
{
    console.log(`${val} is Odd number`)
}
}
numType(10)

