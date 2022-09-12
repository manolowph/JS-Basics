function foodDelivery(input) {
    // Food Delivery

    let chickenMenu = 10.35;
    let fishMenu = 12.40;
    let vegetarianMenu = 8.15;
    let driver = 2.50;

    let quantityChickenMenu = Number(input[0]);
    let quantityFishMenu = Number(input[1]);
    let quantityVegetarianMenu = Number(input[2]);

    let totalWithoutDeliver = chickenMenu * quantityChickenMenu + fishMenu
        * quantityFishMenu + vegetarianMenu * quantityVegetarianMenu;

    let dessert = totalWithoutDeliver * 0.2;

    let total = totalWithoutDeliver + driver + dessert;

    console.log(total);

}
