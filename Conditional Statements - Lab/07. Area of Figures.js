function areaOfFigures(input) {
    // Area of Figures

    let figure = input[0]
    let a = Number(input[1])
    let b = Number(input[2])
    let result = 0;

    if (figure === "square") {
        result = a * a;
    } else if (figure === "rectangle") {
        result = a * b
    } else if (figure === "circle") {
        result = Math.PI * Math.pow(a, 2)
    } else if (figure === "triangle") {
        result = a * b / 2
    }

    console.log(result.toFixed(3))

}
