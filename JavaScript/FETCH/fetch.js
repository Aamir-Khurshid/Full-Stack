fetch('https://jsonplaceholder.typicode.com/todos/')
.then(response => response.json())
.then(data => {
    data.forEach(element => {
        console.log(element.id)
    });
})
.catch(err => console.log(err))

