const reverseString=(string)=>{
    if((typeof string)==="string"){
    const stringArr=string.split('');
    const resultArr = []
    while(stringArr.length){
        resultArr.push(stringArr.pop());
    }
    return resultArr.join('');
}else{
    return null;
}
}

export {reverseString}