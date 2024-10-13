function analyzeArray(array){
    const sortedArr=array.sort((a,b)=>a-b);
    return {"min":sortedArr[0],
    'max':sortedArr[sortedArr.length-1],
    'avarage':sortedArr.reduce(
        (accumulator,currentValue)=>accumulator+currentValue
    )/sortedArr.length,
    'length':sortedArr.length
}
}

export {analyzeArray}