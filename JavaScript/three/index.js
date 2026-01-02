let person = ['china','India','usa','indonesia']

let info = document.getElementById('info');

for(let i = 0;i<person.length;i++){
    info.textContent += person[i]+' ';
}
