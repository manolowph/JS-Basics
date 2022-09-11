function projectCreation(input) {
    let name = input[0];
    let projects = Number(input[1]);
    let time = 3;
    let total = time * projects;

    console.log(`The architect ${name} will need ${total} hours to complete ${projects} project/s.`);
}