function fishTank(input) {
    // Fish Tank

    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let procent = Number(input[3]);

    let aquarium = lenght * width * height;
    let capasity = aquarium / 1000;
    let busy = procent / 100;

    let total = capasity * (1 - busy);

    console.log(total);

}
