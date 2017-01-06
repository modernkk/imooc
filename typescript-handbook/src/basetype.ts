// boolean true/false
let isDone: boolean = true;

// number
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

// string
let fullname: string = "bob";
fullname = "fishguer";

let firstname: string = `xu`;
let age: number = 30;
let sentence: string = `Hello, my name is ${fullname}

    I'll be ${age + 1} years old next month.
`;

// []
let list: number[] = [1, 2, 3];
let arrayList: Array<number> = [1, 2, 3];

// Tuple
let x: [string, number];
x = ['hello', 10];

console.log(x[0].substr(1))

x[3] = 'world';

// enum
enum Color { Red, Green, Blue };
let c: Color = Color.Red;

enum Color2 { Red = 1, Green, Blue };
let c2: Color2 = Color2.Green;
let colorName: string = Color2[2];

enum Color3 { Red = 1, Green = 2, Blue = 4 };
let c3: Color3 = Color3.Blue;

// any
let notSure: any = 4;
notSure = "maybe a string inside";
notSure = false;

// let prettySure: Object = 4;
// prettySure.toFixed()

let anyList: any[] = [1, "2", true];
anyList[1] = 100;

// void
function warnUser(): void {
    alert("this is my warning message")
}

let unusable: void = undefined;

// null & undefined
// Not much else we can assign to these variables
let u: undefined = undefined;
let n: null = null;

// never
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message)
}

function fail() {
    return error("something failed")
}

function infiniteLoop(): never {
    while (true) {

    }
}

// 类型断言
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
let strLength1: number = someValue.length;

let someValue2: any = "this is a string";
let strLength2: number = (someValue2 as string).length;
