function shopping(input) {
    let gpuPrice = 250

    let budget = Number(input[0])
    let gpuQuantity = Number(input[1])
    let cpuQuantity = Number(input[2])
    let ramQuantity = Number(input[3])

    let gpu = gpuPrice * gpuQuantity
    let cpuPrice = gpu * 0.35
    let ramPrice = gpu * 0.1

    let total = gpu + cpuPrice * cpuQuantity + ramPrice * ramQuantity

    if (gpuQuantity > cpuQuantity) {
        total *= 0.85;
    }
    let result = Math.abs(budget - total).toFixed(2)

    if (total <= budget) {

        console.log(`You have ${result} leva left!`)

    } else {
        console.log(`Not enough money! You need ${result} leva more!`)
    }

}
