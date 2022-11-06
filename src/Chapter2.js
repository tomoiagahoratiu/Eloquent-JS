
export function printTriangle() {
    console.clear();
    for(let triangle ="#"; triangle.length < 8; triangle +="#")
        {
            console.log(triangle)
        }
}

export function fuzzPrint() {
    console.clear();
    for(let i=1; i<101; i++) {
        let print="";
        if(i % 3 === 0) print += "Fizz";
        if(i % 5 === 0) print += "Buzz";
        console.log(print || i);
    }
}

export function chestBoard(size) {
    console.clear();
    let board = "";
    for(let i=0; i<size; i++) {
        for(let j=0; j<size; j++) {
            (i + j) % 2 === 1 ? board += "#" : board += " ";
        }
    board += "\n";
    }
    console.log(board);
}