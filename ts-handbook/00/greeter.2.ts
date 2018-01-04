// 类
class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person2 {
    firstName: string;
    lastName: string;
}

function greeter2(person: Person2) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user2 = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter2(user2);
