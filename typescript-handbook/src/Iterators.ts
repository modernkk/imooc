// 可迭代
let someArray = [1, "string", false];
for (let entry of someArray) {
    console.log(entry); // 1, string, false
}

let list1 = [4, 5, 6];
for(let i in list1) {
    console.log(i); // 0, 1, 2
}
for(let i of list1) {
    console.log(i); // 4, 5, 6
}

let pets = new Set(["cat", "dog"]);
