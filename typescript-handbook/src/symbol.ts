let sym1 =  Symbol();
let sym2 = Symbol("key");

let sym3 = Symbol("key");
sym2 === sym3; // false, symbols 是唯一的

let sym = Symbol();
let obj = {
    [sym]: "value"
};
console.log(obj[sym]);

const getClassNameSymbol = Symbol();

class Clazz {
    [getClassNameSymbol]() {
        return "c";
    }
}
let clazz = new Clazz();
let className = clazz[getClassNameSymbol]()

Symbol.hasInstance
Symbol.isConcatSpreadable