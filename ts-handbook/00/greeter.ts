// 类型注解
function greeter(person: string) {
    return "Hello, " + person;
}

var user = "Jane User2";

//error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.
// var user = [0, 1, 2];   

// error TS2346: Supplied parameters do not match any signature of call target.
// document.body.innerHTML = greeter();

document.body.innerHTML = greeter(user);
