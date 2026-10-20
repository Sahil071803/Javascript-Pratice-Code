// table using for loop
// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter a number: ", function (answer) {
//     let n = Number(answer);

//     for (let i = 1; i <= 10; i++) {
//         console.log(n + " x " + i + " = " + (n * i));
//     }

//     rl.close();
// });


// table using while loop

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", function (answer) {
    let n = Number(answer);

    let i = 1;

    while (i <= 10) {
        console.log(n + " x " + i + " = " + (n * i));
        i++;
    }

    rl.close();
});