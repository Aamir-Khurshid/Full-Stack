let noOfCircle = 0;
let circle = []

window.addEventListener('click', (dets) => {
    ++noOfCircle
    if (noOfCircle == 1) {
        let random = Math.floor(Math.random() * 60) + 30 ;
        document.body.innerHTML += makeCircle(random, dets.clientX, dets.clientY)
        circle[0] = {
            x:dets.clientX,
            y:dets.clientY,
            r: random/2
        }
    }
    else if (noOfCircle == 2) {
        let random = Math.floor(Math.random() * 60) + 30; // 30–90px
        circle[1] = {
            x:dets.clientX,
            y:dets.clientY,
            r: random/2
        }
        interSect(circle);
        
        document.body.innerHTML += makeCircle(random, dets.clientX, dets.clientY)
    }
    else {
        document.body.innerHTML = ''
        noOfCircle = 0;
    }

})

console.log(circle)

function interSect(circle){
    const dx = circle[0].x - circle[1].x;
    const dy = circle[0].y - circle[1].y;
    const distSq = dx * dx + dy * dy;
    const radiusSum = circle[0].r + circle[1].r;

    if(distSq < radiusSum * radiusSum){
        console.log('Intersect')
    }
    else{
        console.log('Dont intersect')
    }
}


function makeCircle(size, left, top) {
    return ` 
    <div class="circle" style=" width:${size}px; height:${size}px;position: absolute
    ;top: ${top-(size/2)}px;left:${left-(size/2)}px ">

    </div>
    `
}
