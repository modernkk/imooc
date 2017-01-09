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
let myIdentity2: { <T>(arg: T): T};