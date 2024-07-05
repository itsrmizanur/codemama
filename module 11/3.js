function solve(input) {
    
    let n = Number(input);
    //console.log(n);

    let fact = 1;
    for(let i = n; i > 1; i--) {
        fact = fact * i;
    }
    console.log(fact)
}

let k = `4`;
solve(k);

/*

Find Factorial


Problem Statement
Write a program where you will be given a number. You will have to print the factorial of that number.

Input
The input consists of an integer numbers.

Output
The output will be an integer number.

Constraints
0 ≤ |S| ≤ 109

Example:
Enter a number.

Input:
4

Output:
24

Notes:
None

*/
