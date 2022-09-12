function worldSwimmingRecord(input) {
    // World Swimming Record

    let worldRecord = Number(input[0]);
    let distance = Number(input[1]);
    let timeInSec = Number(input[2]);

    let time = distance * timeInSec;
    let delay = Math.floor(distance / 15) * 12.5;
    let totalTime = time + delay; // total time in seconds

    if (totalTime < worldRecord) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)

    } else {
        let diff = Math.abs(totalTime - worldRecord);
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`)
    }

}
