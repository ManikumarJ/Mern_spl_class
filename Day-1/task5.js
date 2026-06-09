const arr = ["mk", "vk", "dk","sk"]

for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
}


// find maximum value in array

const arrVal = [22, 12, 78, 100 , 37]

let temp = arrVal[0]

// console.log(temp)
// console.log(arrVal.length - 1);

for (let i = 0 ; i <= arrVal.length - 1; i++){
    if (arrVal[i] >= temp){
        temp = arrVal[i]
        
    }
}
console.log(`Greater Number is : ${temp}`);


// find min value in array

const val = [10, 20 , 30 , 5, 40 , 50]
let min = val[0]

for(let i =0 ; i <= val.length-1 ; i++){
    if(val[i] <= min)
    {
        min = val[i]
    }
}

console.log(`Minimum number is : ${min}`);

// Sum of array (using in-build)

const summArr = [10 , 20 , 30 , 40 ]

let sum = summArr.reduce((acc, val)=> acc + val , 0)

console.log(`Sum of Number : ${sum}`);

// Sum of array

const sumArr = [10 , 20 , 30 , 40]
let sumVal = 0

for(let i = 0; i <= summArr.length-1; i++){
    sumVal += summArr[i]
}
console.log(`Sum of Number : ${sumVal}`);

//  Average of array
let value = [10 , 20 , 30 , 40]
let avg = value.reduce((acc , val )=> acc + val , 0) / value.length
console.log(`Avg value : ${avg}`);


// Reverse array

const revNumber = (arr) => {
    let rev = []
    for(let i = arr.length-1 ; i >= 0 ; i--){
        rev += arr[i]
    }
    return rev
}
console.log(revNumber([10 , 20 , 30]));


