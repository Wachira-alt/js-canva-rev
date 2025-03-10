// Arrow functions

//normal
const playMusic1 = function  (music) {
    return "playing some " + music;
};
playMusic('jazz');

//arrow

const playMusic = (music) => `playing some ${music}`;
playMusic('jazz');

function calculateArea1(length, width) {
    if (length <= 0 || width <= 0) {
        return "Invalid dimensions";
    }
    return length * width;
}

//arrow operator
const calculateArea = (length, width) => 
(length <=0 || width <= 0) ? "invalid dimensions" : length * width;

console.log (calculateArea(10,5));


//example 3

function getUserInfo(name, age) {
    return "User " + name + " is " + age + " years old.";
}


//arrow function
const getUserInfo =(name, age) =>
 `user  ${name} is ${age}  years old`;
console.log (getUserInfo("Kimani", 14));

//example 4
function findMax(a, b, c) {
    return Math.max(a, b, c);
}
//arrow function
const findMax  = (a,b,c) => 
    `math.max (a,b,c)`;