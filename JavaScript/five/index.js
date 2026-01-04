// Ternary Operator
const exerciseTimeMins = 20;
let message = exerciseTimeMins > 30 ? 'Good Work' : 'Continue the workout';
console.log(message);



// Object Destructuring
const mySelf = {
    name: 'Aamir',
    age: '22',
    hobby: 'Cricket'
}
const { age, name, hobby } = mySelf;
console.log(`My name is ${name} , i am ${age} yrs old and i love to play ${hobby}`)



// SetTimeOut
function displayTrafficLight(light) {
    console.log(light);
}
setTimeout(displayTrafficLight, 3000, '🟢');
displayTrafficLight('🔴')



