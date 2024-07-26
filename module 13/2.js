function solve(input) {
    input = input.split(" ");

    let m = Number(input[0]);
    let f = Number(input[1]);

    
    console.log(m * f * 60);
    
}

let k = "10 25";
solve(k);

/*

Frame Per Second

Problem Statement
Write a program that returns the number of frames shown in a given number of minutes for a certain FPS. FPS stands for "frames per second" and it's the number of frames a computer screen shows every second.

Input
The input consists of two integer number: minute and fps.

Output
The output will print an integers.

Constraints
0 ≤ |S| ≤ 104

Example:
Enter numbers

Input:
10 25

Output:
15000

Notes:
None

*/
