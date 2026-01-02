
let info = document.getElementById('info')
function ticketPrice() {
    if (age < 6) {
        return ('free')
    }
    else if(age>=6 && age<=17){
        return('Child Dicount')
    }
    else if(age>=18 && age<=26){
        return('Child Dicount')
    }
    else if(age>=27 && age<=66){
        return('Child Dicount')
    }
    else{
        return('Senior Citizen Discount')
    }

}
let age = 18;

let answer = ticketPrice();
info.textContent = answer;
