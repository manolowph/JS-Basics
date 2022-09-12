function numbers100To200(input) {
    // Number 100...200

    let number = Number(input[0]);

    if (number < 100) {
        console.log("Less than 100");
    } else if (number > 200) {
        console.log("Greater than 200");
    } else {
        console.log("Between 100 and 200");
    }
}

numbers100To200(["75"])
numbers100To200(["154"])
numbers100To200(["223"])
