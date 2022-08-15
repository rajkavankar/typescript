"use strict";
let id = 5;
let title = "Hello world";
let isActive = false;
let x = true;
x = "anything";
let ids = [1, 2, 3, 4, 5];
let any = [1, true, "Hello"];
// Tuple
let user = [2, "Raj", true];
// Tuple array
let employee = [
    [1, "Raj"],
    [2, "Ram"],
];
// Union
let pid;
pid = 10;
pid = "10";
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 2] = "Up";
    Direction1[Direction1["Down"] = 3] = "Down";
    Direction1[Direction1["Left"] = 4] = "Left";
    Direction1[Direction1["Rignt"] = 5] = "Rignt";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Rignt"] = "Right";
})(Direction2 || (Direction2 = {}));
// console.log(Direction2.Up)
// console.log(Direction2.Left)
// Objects
const person = {
    id: 1,
    name: "Raj ",
};
const person1 = {
    id: 2,
    name: "preeti",
};
// Type Assertion
let cid = 1;
// let customer = <number>cid
let customer = cid;
// Functions
function add(x, y) {
    return x + y;
}
function print(message) {
    console.log(message);
}
const user1 = {
    id: 2,
    name: "preeti",
};
const addition = (x, y) => x + y;
const sub = (x, y) => x - y;
class Company {
    constructor(id, name, isAdmin) {
        this.id = id;
        this.name = name;
        this.isAdmin = isAdmin;
    }
    promote() {
        return `${this.name} is now promoted`;
    }
}
const raj = new Company(1, "Raj", true);
const preeti = new Company(2, "Preeti", false);
// Inheritance
class Employee extends Company {
    constructor(id, name, isAdmin, salary) {
        super(id, name, isAdmin);
        this.salary = salary;
    }
}
const emp = new Employee(3, "Shiv", true, 50000);
const getArray = (items) => {
    return new Array().concat(items);
};
const numArray = getArray([1, 2, 3]);
const strArray = getArray(["brad", "jack", "jill"]);
