function solve(input) {
    //console.log(input);

    let str = "";

    for(let i = input.length - 1; i >= 0; i--) {
        str += input[i];
    }
    str = Number(str)
    console.log(str)
}

let k = `1300`;
solve(k);

/*

Reverse the Number


Problem Statement
Write a program where user will give a number. You will reverse the number and print it.

Input
The input consists of an integer number.

Output
The output will be the reverse of the integer number.

Constraints
0 ≤ |S| ≤ 109

Example:
Enter number.

Input:
1234

Output:
4321

Notes:
None

*/
