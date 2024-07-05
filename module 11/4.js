function solve(input) {
    //console.log(input);

    let str = "";

    for (let i = input.length - 1; i >= 0; i--) {
        str += input[i];
    }
    str = Number(str);

    if(Number(input) === str) {
        console.log(str + " is a palindrome number");
    }
    else {
        console.log(input + " is not a palindrome number");
    }

}

let k = `121`;
solve(k);

/*

Check for Palindrome

Problem Statement
Write a program to check whether a number is palindrome or not. palindrome Number: A palindromic number is a number (such as 16461) that remains the same when its digits are reversed.

Input
The input consists of an integer number.

Output
The output will print whether the input is palindrome number or not.

Constraints
0 ≤ |S| ≤ 109

Example-1:
Enter number

Input:
121

Output:
121 is a palindrome number


Example-2:
Enter number

Input:
123

Output:
123 is not a palindrome number


Notes:
None

*/
