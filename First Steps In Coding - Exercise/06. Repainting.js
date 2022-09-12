function repainting(input) {
    // Repainting

    let priceNylon = 1.50;
    let pricePaint = 14.50;
    let pricePaintTinner = 5;
    let bag = 0.40

    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let paintTinner = Number(input[2]);
    let hours = Number(input[3]);

    paint = paint * 1.10;
    nylon = nylon + 2;

    let stockPrice = nylon * priceNylon +
        paint * pricePaint + paintTinner *
        pricePaintTinner + bag;
    let workerPriceForOneHour = stockPrice * 0.30;

    let total = hours * workerPriceForOneHour + stockPrice;

    console.log(total);

}
