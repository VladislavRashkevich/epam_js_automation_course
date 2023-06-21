/* 
     practice one:
*/

let toAddition = function(a, b) {
    return a + b;
}


let n = 3;
let b = true;
let s = "String";
const separate = "---------------------------"

// Task 1: Perform addition of various types (string + boolean, string + number, number + boolean)

console.log(toAddition(s, b));  //Stringtrue
console.log(toAddition(s, n));  //String3
console.log(toAddition(n, b));  //4
console.log(separate)


// Task 2: Perform multiplication of various types (string * boolean, string * number, number * boolean)

let toMulti = function(a, b) {
    return a * b;
}

console.log(toMulti(s, b));  // NaN
console.log(toMulti(s, n));  // NaN
console.log(toMulti(n, b));  // 3
console.log(separate);


// Task 3: Divide different types (string / boolean, string / number, number / Boolean)


let toDivide = function(a ,b) {
    return a / b;
}

console.log(toDivide(s, b));  //  NaN
console.log(toDivide(s, n));  //  NaN
console.log(toDivide(n, b));  //  3
console.log(separate);


// Task 4: Perform explicit conversion (number, string, boolean)

let toStrCon = function(a) {
    let s = String(a)
    return `"${a}" was type ${typeof a} - become ${s} and got type ${typeof s}`
}

let toNumCon = function(a) {
    let s = Number(a)
    return `"${a}" was type ${typeof a} - become ${s} and got type ${typeof s}`
}

let toBoolCon = function(a) {
    let s = Number(a)
    return `"${a}" was type ${typeof a} - become ${s} and got type ${typeof s}`
}

console.log("Perform explicit conversion (number, string, boolean)\n")

console.log(toStrCon(n));
console.log(toStrCon(b));
console.log(toNumCon(s));
console.log(toNumCon(b));
console.log(toBoolCon(s));
console.log(toBoolCon(n));

