function yardGreening(input) {
    let greening = Number(input[0]);
    let priceMeter = 7.61;
    let discount = 0.18;

    let totalWithOutDiscount = greening * priceMeter;
    let discountOnly = totalWithOutDiscount * discount
    let total = totalWithOutDiscount - discountOnly;


    console.log(`The final price is: ${total} lv.`);
    console.log(`The discount is: ${discountOnly} lv.`)

}
