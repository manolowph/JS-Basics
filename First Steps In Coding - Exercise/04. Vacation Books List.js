function vacationBooksList(input) {
    // Vacantion Books list

    let pages = Number(input[0]);
    let pagesForOneHour = Number(input[1]);
    let days = Number(input[2]);

    let total = pages / pagesForOneHour;
    let needHours = total / days;

    console.log(needHours);

}
