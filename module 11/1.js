function solve(input) {
    //console.log(input);

    input = input.split(/\s+/);  // " ", "\n"
    //console.log(input);

    let arr = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] >= "0" && input[i] <= "9") {
            arr.push(Number(input[i]));
        }
    }
    //console.log(arr)

    let t = arr[0];
    //console.log(t)
    let sum = 0;

    for (let i = 1; i <= t; i++) {
        //console.log(arr[i]);
        sum = sum + arr[i];
    }
    let m = Math.floor(sum / t);
    //console.log(sum);

    let ans = 0;
    for (let i = 1; i <= t; i++) {
        if (arr[i] < m) {
            ans += arr[i];
            //console.log(arr[i]);
        }
    }
    console.log(ans);
}

let k = `7
3 6 1 9 2 7 4`;
solve(k);






/*

Sum of Array Elements

Problem Statement
Write a program where user will give an array of elements. You will have to print the sum of elements where each element will be less than median element.

Input
The input consists of size of the array and the elements of the array. Every input will be unsigned integer number.

Output
The output will be sum of elements that are lesser than median element.

Constraints
0 ≤ |S| ≤ 109

Example:
Enter size of the array and the elements.

Input:
6
30 10 5 40 60 15

Output:
30

Notes:
None

*/