function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

interface LabelledValue {
    label: string;
}

function printLabel2(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

// 可选属性
interface SquareConfig {
    color?: string;
    width?: number;
    // [propName: string]: any;
}
function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({ color: "black" });
createSquare({ color: "red", opacity: 0.5 } as SquareConfig);
let squareOptions = { length: 10 };
createSquare(squareOptions);

// 只读属性
interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12;
ro.push(5);
ro.length = 100;
a = ro;
a = ro as number[];

// 函数类型
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}
mySearch = function (src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;
}

// 可索引的类型
interface StringArray {
    [index: number]: number;
}
let myArray: StringArray;
myArray = [1, 2];
let myStr: number = myArray[0];

class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}
interface NotOkay {
    [x: number]: Dog;
    [x: string]: Animal;
}

interface numberDictionary {
    [index: string]: number;
    length: number;
    name: string;
}

interface ReadonlyStringArray {
    readonly[index: number]: string;
}
let myStringArray: ReadonlyStringArray = ["Alice", "Bob"];
myStringArray[1] = "Mallory"

// 类类型
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}
class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) { }
    setTime(d: Date) {
        this.currentTime = d;
    }
}

interface ClockConstructor {
    new (hour: number, minute: number);
}
class Clock1 implements ClockConstructor {
    currentTime: Date;
    constructor(h: number, m: number) {

    }
}

interface ClockConstructor1 {
    new (hour: number, minute: number): ClockInterface1
}
interface ClockInterface1 {
    tick(): any;
}
function createClock(ctor: ClockConstructor1, hour: number, minute: number): ClockInterface1 {
    return new ctor(hour, minute);
}
class DigitalClock implements ClockInterface1 {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface1 {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock")
    }
}
let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);