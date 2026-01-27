// setInterval(()=>{
//     console.log('Hehe')
// },200)

// setTimeout(()=>{
//     console.log('hehe')
// },2000)

// let count = 5;
// let interval = setInterval(()=>{
//     if(count>=1) { 
//         --count 
//         console.log(count)
//     }
//     else{
//     clearInterval(interval)}
// },200)


const struct = document.querySelector('.struct')

setTimeout(()=>{
    struct.style.display = 'none';
},3000)