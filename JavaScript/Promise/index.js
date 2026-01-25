
let resolvePromise;


let newPromise = new Promise((res,rej) => {
    resolvePromise = res
});


document.getElementById('myBtn').addEventListener('click',()=>{
    resolvePromise('Hello')
})

newPromise
.then(mess=> console.log(mess))
.catch(err=>console.log(err))

