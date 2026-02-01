import { getStockData } from "./fakeStock.js";

setInterval(function() {
    const stockData = getStockData()
    renderStockTrader(stockData)
}, 1500)

let oldPrice = null;
function renderStockTrader(stockData) {
    const stockName = document.getElementById('name'); 
    const stockSym = document.getElementById('sym'); 
    const stockPrice = document.getElementById('price'); 
    const stockPriceImg = document.getElementById('price-img');
    const stockTime = document.getElementById('time'); 

    const {name,sym,price,time} = stockData;
    stockPriceImg.innerHTML = price > oldPrice ? 
    `<i class="fa-solid fa-caret-up"></i>` : 
    `<i class="fa-solid fa-caret-down"></i>` 
    
    stockName.innerText = name; 
    stockSym.innerText = sym; 
    stockPrice.innerText = price; 
    stockTime.innerText = time; 

    oldPrice = price;
}