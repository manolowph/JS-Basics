function toyShop(input) {
    // Toy Shop

    let price = Number(input[0])
    let puzzleQuantity = Number(input[1]);
    let talkingDollQuantity = Number(input[2]);
    let teddyBearQuanity = Number(input[3]);
    let minionQuanity = Number(input[4]);
    let worryQuanity = Number(input[5]);

    let money = 2.60 * puzzleQuantity + 3 * talkingDollQuantity
        + 8.20 * minionQuanity + 4.10 * teddyBearQuanity + 2 * worryQuanity;

    let quantityToys = puzzleQuantity + talkingDollQuantity + teddyBearQuanity
        + minionQuanity + worryQuanity;

    if (quantityToys >= 50) {
        money = money * 0.75;
    }

    money = money * 0.90;

    let diff = Math.abs(money - price);


    if (money >= price) {
        console.log(`Yes! ${diff.toFixed(2)} lv left.`)

    } else {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
    }


}
