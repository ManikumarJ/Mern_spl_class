//  Remove duplicates

const revDuplicateArr = (arr) =>{
    let arrNew = []
     for(let i = 0 ; i <= arr.length -1 ; i ++){
        if(!arrNew.includes(arr[i])){
            arrNew.push(arr[i])
        }
     }
     return arrNew
     
}
console.log(revDuplicateArr([10, 10 , 20 , 30 , 30]));
