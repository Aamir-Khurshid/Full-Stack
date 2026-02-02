//              IIFE
// let Bank = (function (){
//     let bankBalance = 2000;
//     function checkBalance(){
//         console.log(bankBalance)
//     }
//     function setBalance(val){
//         bankBalance = val;
//     }
//     function withdrawBalance(val){
//         bankBalance -= val;
//     }
// })()







//             IIFE with Object return(Module Pattern)
// let Bank = (function (){
//     let bankBalance = 2000;
//     function checkBalance(){
//         console.log(bankBalance)
//     }
//     function setBalance(val){
//         bankBalance = val;
//     }
//     function withdrawBalance(val){
//         bankBalance -= val;
//     }

//     return{
//         checkBalance,setBalance,withdrawBalance
//     }
// })()

// Bank.checkBalance()






//           IIFE with Revealing Module Pattern
let Bank = (function () {
    let bankBalance = 2000;
    function checkBalance() {
        console.log(bankBalance)
    }
    function setBalance(val) {
        bankBalance = val;
    }
    function withdrawBalance(val) {
        bankBalance -= val;
    }
    return {
       check: checkBalance,set: setBalance, withdraw: withdrawBalance
    }
})()

