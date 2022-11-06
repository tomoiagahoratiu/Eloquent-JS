export function minimun(number1, number2) {
    console.clear();
    console.log(number1 < number2 ? number1 : number2);
}

export function isEven(number) {
    console.clear();
        if (number === 0 ) return true;
        else if (number === 1) return false;
        else if (number < 0) return isEven(-number);
        else return isEven(number-2);
}

export function countString(phrase) {
    console.clear();
    countChar(phrase, "a");
}

export function countChar(phrase, char) {
    let count=0;
    for(let i=0; i<phrase.length; i++){
        if(phrase[i] === char) count++;
    }
    console.log(count)
}