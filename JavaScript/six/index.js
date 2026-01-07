const alertThem = (speedLim,speed) => {
    if(speedLim<speed)
     alert(`(you're going at ${speed} kmph)`)
}
alertThem(150,140)