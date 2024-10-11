
function caesarCipher(string,key){
    if((typeof string)!=="string"){
        throw new Error("Input type must be string");
    };
    const stringArr=string.split("");
    let shiftedString=stringArr.map((letter)=>{
        //if not a word, return as it is.
        if(/\W/.test(letter)) return letter;
        
        let shiftedStrCode = letter.toUpperCase().charCodeAt(0)+key;
        if(shiftedStrCode>90){
            shiftedStrCode=shiftedStrCode-26;
        }
        //test if it's uppercase or small case
        if(letter===letter.toUpperCase()){
        return String.fromCharCode(shiftedStrCode);
        }
        return String.fromCharCode(shiftedStrCode+32);

    });
    return shiftedString.join("");
}
export {caesarCipher}