function minMax(Arr){
    return{
        max: Math.max(...Arr),
        min: Math.min(...Arr)
    }
}

let result=minMax([5,2,7,1,9])
console.log(result);