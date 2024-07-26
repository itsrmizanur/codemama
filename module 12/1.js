function solve(input) {
    input = Number(input);
    //console.log(input)

    let isPrime = 1;

    let m = Math.floor(Math.sqrt(input));
    //console.log(m);

    for( let i = 2; i <= m; i++ ) {
        if( input % i === 0 ) {
            isPrime = 0;
            break;
        }
    }
    if(input === 1) {
        isPrime = 0;
    }
    if(input === 2) {
        isPrime = 1;
    }
    if( isPrime ) {
        console.log(input + " is a prime number.");
    }
    else {
        console.log(input + " is not a prime number.");
    }


}

let x = `24`;
solve(x);


/*

Is the number Prime?


Problem Statement
Write a program where you will be given a number. You will have to check whether the number is prime or not.

Input
The input consists of an integer numbers.

Output
The output will print whether the number is prime or not. For example, for 13 it will print "13 is a prime number." for 24 it will print "24 is not a prime number."

Constraints
0 ≤ |S| ≤ 109

Example:
Enter number.

Input:
13

Output:
13 is a prime number.

Notes:
None

*/