function basketballEquipment(input) {
    // Basketball Equipment

    let training = Number(input[0]);
    let basketballSneakers = training - (training * 0.40);
    let basketballOutfit = basketballSneakers - (basketballSneakers * 0.20);
    let priceBall = basketballOutfit / 4;
    let basketballAccessories = priceBall / 5;

    let total = training + basketballSneakers + basketballOutfit + priceBall + basketballAccessories;

    console.log(total);

}
