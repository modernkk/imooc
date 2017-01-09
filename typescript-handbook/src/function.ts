function add(x: number, y: number) {
    return x + y;
}

let myAdd = function (x: number, y: number) {
    return x + y;
}

let z = 100;
function addToZ(x: number, y: number) {
    return x + y + z;
}

// 函数类型
function add1(x: number, y: number): number {
    return x + y;
}
let myAdd1 = function (x: number, y: number): boolean {
    return x > y;
}
let myAdd2: (x: number, y: number) => number = function (x: number, y: number): number {
    return 0;
}

// 可选参数
function buildName(firstName: string, lastName: string) {
    return firstName + lastName;
}
let result1 = buildName("Bob");
let result2 = buildName("Bob", "Adams", "Sr.")
let result3 = buildName("Bob", "Adams")

function buildName1(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + " " + lastName;
    } else {
        return firstName;
    }
}
let res1 = buildName1("Bob")
let res2 = buildName1("Bob", "Adams", "Sr.")
let res3 = buildName1("Bob", "Adams")

// 默认参数
function buildName2(firstName: string, lastName: string = "Smith") {
    return firstName + lastName;
}

// 剩余参数 -- 个数不限的可选参数
function buildName3(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}
let employeeName = buildName3("Joseph", "Samuel", "Lucas", "Mackinzie");
let buildNameFun: (fname: string, ...rest: string[]) => string = buildName3;

let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        // return function() {
        //     let pickedCard = Math.floor(Math.random() * 52);
        //     let pickedSuit = Math.floor(pickedCard / 13);

        //     return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        // }
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };

        }
    }
}
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

interface ICard {
    suit: string;
    card: number;
}
interface IDeck {
    suits: string[];
    cards: number[];
    createCardPicker(this: IDeck): () => ICard;
}
let deck1: IDeck = {
    suits: ["1", "2"],
    cards: Array(52),
    createCardPicker: function (this: IDeck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        }
    }
}