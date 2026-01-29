// Play with Object

// let obj = {
//     name: "Aamir",
//     age: 23
// }

// console.log(obj.name)

// const user = {
//     name: 'Aamir',
//     address: {
//         city: 'Delhi',
//         location: {
//             lane: 7,
//             block: 'E'
//         }
//     }
// }

// console.log(user.address.location.lane)

// console.log(typeof Infinity)


// const user = {
//     name: 'Aamir',
//     address: {
//         city: 'Delhi',
//         location: {
//             lane: 7,
//             block: 'E'
//         }
//     }
// }

// let newUser = {...user}

// console.log(Object.keys(user))

// for(let i in newUser.address.location){
//     console.log(i,':',newUser.address.location[i])
// }
// for(let i in newUser.address.location){
//     console.log(i,':',newUser.address.location[i])
// }

// const user = {
//     name: 'Aamir',
//     address: {
//         city: 'Delhi',
//         location: {
//             lane: 7,
//             block: 'E'
//         }
//     }
// }
// let newUser = {...user}
// console.log(user)
// console.log(newUser)
// user.address.city = "Bihar"
// console.log(user)
// console.log(newUser)



// const user2 = {
//     name: 'Aamir',
//     address: {
//         city: 'Delhi',
//         location: {
//             lane: 7,
//             block: 'E'
//         }
//     }
// }

// let newUser2 = JSON.parse(JSON.stringify(user2))
// console.log(user2)
// console.log(newUser2)

// user2.address.city = "Bihar"

// console.log(user2)
// console.log(newUser2)


// let obj = {
//     'name': "Aamir",
//     age: 23
// }

// let {'name': myName} = obj;

// console.log(obj[myName])