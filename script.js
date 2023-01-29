'use strict';
// function triangle() { console.log(1 + 1) }

// triangle()

// const age2 = function (year) { return 2023 - year }

// console.log(age2(1998))

// const age3 = birthyear => 2023 - birthyear

// console.log(age3(1998))

// function calcAverage(firstScore, secondScore, thirdscore) { return (firstScore + secondScore + thirdscore) / 3 }

// const koalaAverage = calcAverage(44, 23, 71)
// console.log(koalaAverage)
// const dolphinAverage = calcAverage(65, 54, 49)
// console.log(dolphinAverage)

// function checkWinner(koalaAverage, dolphinAverage) {
//     if (koalaAverage >= 2 * dolphinAverage) {
//         return `Koalas win ${koalaAverage} vs  ${dolphinAverage}`
//     } else if (dolphinAverage >= 2 * koalaAverage) {
//         return `Dolphins win ${koalaAverage} vs  ${dolphinAverage}`
//     } else { return " Its a tie !!! " }
// }


// console.log(checkWinner())

// const bill = 430


// console.log(tipResult)

// const calcTip = function (bill) {
//     const tipResult = bill >= 50 && bill <= 500 ? `${(bill / 100) * 15}` : `${(bill / 100) * 20}`;
//     return tipResult
// };

// // console.log(calcTip(430))

// const bills = [125, 555, 44];
// const tips = [Number(calcTip(bills[0])), Number(calcTip(bills[1])), Number(calcTip(bills[2]))];
// console.log(bills);
// console.log(tips);
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

// 

// for (let excercise = 1; excercise < 4; excercise++) {
//     console.log(`starting excercise ${excercise} times`)

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`lifting weight repetition ${rep} times `)
//     }
// }

// let dice = Math.trunc(Math.random() * 6) + 1
// console.log(dice)
// while (dice !== 6) {
//     console.log(`You rolled a dice ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) { console.log("loop is ending") }

// }

const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const total = []

for (let i = 0; i < bill.length; i++) {

    const tipResult = bill[i] >= 50
        && bill[i] <= 500
        ? `${(bill[i] / 100) * 15}`
        : `${(bill[i] / 100) * 20}`;
    tips.push(Number(tipResult));
    const total1 = Number(tipResult) + Number(bill[i]);
    total.push(total1)
}

console.log(tips)
// console.log(total)