function identity(arg: number): number {
    return arg;
}
function identity1(arg: any): any {
    return arg;
}
function identity2<T>(arg: T): T {
    return arg;
}
let output = identity2<string>("myString");
let output1 = identity2("myStr");

function loggingIdentity<T>(arg: T): T {
    console.log(arg.length);
    return arg;
}
function loggingIdentity1<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}
function loggingIdentity2<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);
    return arg;
}

let myIdentity: <T>(arg: T) => T;
let myIdentity1: <U>(arg: U) => U;
let myIdentity2: { <T>(arg: T): T };

// 泛型接口
interface GenericIdentityFn {
    <T>(arg: T): T;
}
function identity3<T>(arg: T): T {
    return arg;
}
let myIdentity3: GenericIdentityFn = identity3;

interface GenericIdentityFn1<T> {
    (arg: T): T;
}
function identity4<T>(arg: T): T {
    return arg;
}
let myIdentity4: GenericIdentityFn1<number> = identity4;

// 泛型类
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y };

let stringNumberic = new GenericNumber<string>();
stringNumberic.zeroValue = "";
stringNumberic.add = function (x, y) { return x + y };
alert(stringNumberic.add(stringNumberic.zeroValue, "test"));

// 泛型约束
interface Lengthwise {
    length: number;
}
function loggingIdentity3<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}
loggingIdentity3(3)
loggingIdentity3({ length: 10, value: 3 });

function copyFields<T extends U, U>(target: T, source: U): T {
    for (let id in source) {
        target[id] = source[id];
    }
    return target;
}

function create<T>(c: { new (): T; }): T {
    return new c();
}

class BeeKeeper {
    hasMask: boolean;
}
class ZooKeeper {
    nametag: string;
}
class Animal1 {
    numLeg: number
}
class Bee extends Animal1 {
    keeper: BeeKeeper;
}
class Lion extends Animal1 {
    keeper: ZooKeeper;
}
function findKeeper<A extends Animal1, K>(a: {new ():A; prototype: {keeper: K}}): K {
    return a.prototype.keeper;
}
findKeeper(Lion).nametag
findKeeper(Bee).hasMask