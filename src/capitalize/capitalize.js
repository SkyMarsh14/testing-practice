// const capitalize = (string) =>{
//     const firstLetter=string.charAt(0).toUpperCase();
//     const remainingLetters=string.slice(1);
//     return firstLetter+remainingLetters;
// }

const capitalize=(string)=>{
    const regex=/[A-Za-z]/;
    const targetCha=string.search(regex);
    const splitString=string.split('');
    splitString[targetCha]=splitString[targetCha].toUpperCase();
    
    return splitString.join('');
}

export {capitalize}