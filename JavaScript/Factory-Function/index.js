function createProduct(name,price){
    let stock = 10;
    return{
        name,
        price,
        buy(val){
            stock -= val;
            console.log('Booked ', val)
            console.log('Remaining Pieces ',stock)
        }
    }
}

let phone = createProduct('oneplus',20000)
console.log(phone.name)
phone.buy(5)


let books = createProduct('Harry Potter',200)
console.log(books.name)
books.buy(5)