// // Play with Arrays



// let marks = [1,2,3,4,5];
// marks.splice(2,2)
// marks.splice(2,0,4,5)
// console.log(marks)

// console.log(marks[2])
// let newArr = marks.slice(2,3)
// console.log(newArr)

// let newArr1 = marks.filter(val =>{
//     if(val%2===0) return val;
// })

// let newArr2 = marks.map(val =>{
//     if(val%2===0) return val;
// })

// let newArr3 = marks.reduce((val,value) =>{
//   return val + value;
// })


// console.log(newArr1)
// console.log(newArr2)
// console.log(newArr3)

// let newArr4 = marks.find(val =>{
//     return val>3;
// })

// let newArr5 = marks.some(val =>{
//     return val>3;
// })

// let newArr6 = marks.every((val) =>{
//   return val>3;
// })


// console.log(newArr4)
// console.log(newArr5)
// console.log(newArr6)

// let arr = [8,5,1,6,2,7,9,3]
// arr.sort().reverse()

// console.log(arr)

// let name = "Aamir";

// for (let i = 0; i < name.length; i++) {
//   console.log(name[i]);
// }

// let name2 = 'Aamir'
// name2.forEach(element => {
//     console.log(element)
// });

// let arr = [8,5,1,6,2,7,9,3]

// let newA = arr.filter((val)=>{
//     if(val>5) return val
// })

// console.log(newA)

// let arr = [8,5,1,6,2,7,9,3]

// let newA = arr.reduce((valu,val)=>{
//     return valu+val
// })

// console.log(typeof newA)


let arr = [5,1,6,2,7,9,3]

let newA = arr.find((val)=>{
    return val>5
})

let newC = arr.findIndex((val)=>{
    return val>5
})

let newD = arr.findLastIndex((val)=>{
    return val>5
})

let newB = arr.some((val)=>{
    return val>5
})

console.log(newA)
console.log(newB)
console.log(newC)
console.log(newD)