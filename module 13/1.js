function solve(input) {
    input = input.split(" ");

    let k = Number(input[0]);
    let n = Number(input[1]);
    let m = Number(input[2]);

    // console.log(k, n, m);

    if(k * n > m) {
        console.log("true");
    }
    else {
        console.log("false");
    }


}

let k = "0.2 50 9";
solve(k);

/*

Gamble with Profit

Problem Statement
Write a program that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.

Input
The input consists of one float 𝐹 and two integer 𝑁, 𝑀 numbers

Output
The output will print either "true" or "false"

Constraints
0 ≤ |F| ≤ 1
0 ≤ |N| ≤ 104
0 ≤ |M| ≤ 104

Example:
Enter numbers

Input:
0.2 50 9

Output:
true

Notes:
A profitable gamble is a game that yields a positive net profit, where net profit is calculated in the following manner: net_outcome = probability_of_winning * prize - cost_of_playing.

*/
