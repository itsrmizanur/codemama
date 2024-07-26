function solve(input) {
    input = input.split(" ");
    
    let a = Number(input[0]);
    let b = Number(input[1]);

    //console.log(a, b);

    let gcd = 1;

    let small = a;
    if(small > b) {
        small = b;
    }

    for(let i = 1; i <= small; i++) {
        if(a % i === 0 && b % i === 0) {
            gcd = i;
        } 
    }
    console.log(gcd);
}

let x = `9 12`;
solve(x);

/*

What will be the GCD?


Problem Statement
Write a program where you have to find the GCD(Greatest Common Divisor) of two numbers.

Input
The input consists of two integer numbers.

Output
The output will be an integer number.

Constraints
0 ≤ |S| ≤ 109

Example:
Enter two numbers.

Input:
9 12

Output:
3

Notes:
None
*/
