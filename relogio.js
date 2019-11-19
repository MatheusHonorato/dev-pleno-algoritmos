function getAngle(hours, minutes) {
    if(hours === 12) {
        hours = 0
    }

    let hoursAngle = hours * 30 + (minutes/60)*30
    let minutesAngle = minutes * 6

    let angle
    if(hoursAngle > minutesAngle) {
        angle = hoursAngle - minutesAngle
    } else {
        angle = minutesAngle - hoursAngle
    }

    return angle
}

console.log(getAngle(1, 30))
console.log(getAngle(12, 30))
console.log(getAngle(12, 15))