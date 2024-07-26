function solve(input) {
    input = input.split(" ");

    let a = Number(input[0]);
    let b = Number(input[1]);

    //console.log(a, b);

    let ans = 1; 

    for(let i = 0; i < b; i++) {
        ans = ans * a;
    }

    console.log(ans);
}

let x = `3 4`;
solve(x);

/*

Calculate power of this number

Problem Statement
Write a program where you will be given a number and it's exponent. You will have to calculate the power of the number.

Input
The input consists of two integer numbers.

Output
The output will be an integer number.

Constraints
0 ≤ |S| ≤ 109

Example:
Enter numbers.

Input:
3 4

Output:
81

Notes:
None
*/
