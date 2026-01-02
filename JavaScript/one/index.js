let person = {
    name:'Comeback',
    age:23,
    county:'Delhi'
}

let personInfo = document.getElementById('info');

function logData(){
    let intro = person.name + ' is ' + person.age + ' years old and lives in ' + 'county';
    return(intro)
}

let info = logData();

personInfo.textContent = info;