function passwordGuess(input) {
    // Password Guess

    let password = input[0];
    let passCheck = 's3cr3t!P@ssw0rd';

    if (password == passCheck) {
        console.log('Welcome');
    } else {
        console.log('Wrong password!');
    }
}
