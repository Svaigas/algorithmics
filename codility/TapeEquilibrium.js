// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let diffArray = []

    for(let i = 1; i < A.length; i++){
        const splitA = A.slice(0,i)
        const splitB = A.slice(i,A.length)
        const sumSplitA = splitA.reduce((a, b) => a + b, 0)
        const sumSplitB = splitB.reduce((a, b) => a + b, 0)

        diffArray[i-1] = Math.abs(sumSplitA - sumSplitB)
    }
    const minVal = Math.min.apply(null, diffArray)
    return minVal
}

//RESULT 53/100