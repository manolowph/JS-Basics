function depositCalculator(input) {
    // Deposit Calculator

    let depostiAmount = Number(input[0]);
    let termDeposit = Number(input[1]);
    let annualInterestRate = Number(input[2]);

    let yearInterestRate = depostiAmount * (annualInterestRate / 100)
    let monthInterestRate = yearInterestRate / 12;
    let total = monthInterestRate * termDeposit + depostiAmount;

    console.log(total);
}
