function petShop(input) {
    let dogBag = Number(input[0]);
    let catBag = Number(input[1]);

    let priceDogBag = 2.50;
    let priceCatBag = 4;

    let total = dogBag * priceDogBag + catBag * priceCatBag;

    console.log(`${total} lv.`)
}