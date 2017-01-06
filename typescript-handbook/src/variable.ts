var a1 = 10;
function f() {
    var message = "Hello, world!";

    return message;
}

function f1() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    }
}

var g = f1();
g(); // returns 11

function f2() {
    var a = 1;

    a = 2;
    var b = g();
    a = 3;

    return b;

    function g() {
        return a;
    }
}
f2(); // returns 2

function f3(shouldInitialize: boolean) {
    if (shouldInitialize) {
        var x = 10;
    }

    return x;
}
f3(true); // returns 10
f3(false); // returns 'undefined'

function sumMatrix(matrix: number[][]) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }

    return sum;
}

for (var i = 0; i < 10; i++) {
    setTimeout(function () { console.log(i) }, 100 * i);
}

for (var i = 0; i < 10; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(i)
        }, 100 * i);
    })(i)
}

let hello = "Hello";

function f4(input: boolean) {
    let a = 100;

    if (input) {
        // Still okay to reference 'a'
        let b = a + 1;
        return b;
    }
    // Error: 'b' doesn't exist here
    // return b;
}

let x1 = 10;
{
    let x1 = 20;
}

function f5(x3: any) {
    let x2 = 100;
}
function g1() {
    let y = 1;
    // var y = 2;
}

function f6(condition: boolean, x6: any) {
    if (condition) {
        let x6 = 100;
        return x6;
    }
    return x6
}
f6(false, 0); // returns 0
f6(true, 0); // returns 100

function sumMatrix2(matrix: number[][]) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (let i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }
    return sum;
}

const numLivesForCat = 9;
const kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
};
// Error
// kitty = {
//     name: "Danielle",
//     numLives: numLivesForCat
// };

// all okay
kitty.name = "Rory"
kitty.name = "kitty";
kitty.name = "Cat";
kitty.numLives--;

// 解构
let input: [number, number] = [1, 2];
let [first, second] = input;
console.log(first); // 1
console.log(second); // 2

// swap variables
[first, second] = [second, first];

function f7([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
f7(input);

let [f1st, ...rest] = [1, 2, 3, 4];
console.log(f1st); // 1
console.log(rest); // [2, 3, 4]

let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
// let {a, b} = o;
let {a: newName1, b: newName2} = o;

// 默认值
function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let {a, b = 1001} = wholeObject
}

type C = { a: string, b?: number }
function f8({a, b}: C): void {

}

// 展开
let first1 = [1, 2];
let second1 = [3, 4];
let bothPlus = [0, ...first1, ...second1, 5];
