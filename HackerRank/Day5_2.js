'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputString => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function sides(literals, ...expressions) {
    const [a, p] = expressions;
    const root = Math.sqrt((p*p) - (16*a));
    const s1 = (p + root)/4;
    const s2 = (p - root)/4;
    return (s1, s2);
}