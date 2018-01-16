this.x = 10;

function f () {
    return this.x + 2;
}


const object = {f, x: 3};


console.log("____ non-arrow function _____");
console.log("object.f() = ", object.f()); // prints out: 5
console.log("f() = ", f()); // prints out: 12


const arrow = () => {
    return this.x + 2;
};


const arrowObject = {
    x: 100,
    arrow
};

console.log("____ arrow function _____");
console.log("arrowObject.arrow(); = ", arrowObject.arrow()) // prints out: 12