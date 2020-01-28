// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let trueOrFalse = []
    if(A.length === 0) return
    const minVal = Math.min.apply(null, A);
    for(let i = 0; i<100001; i++){
        trueOrFalse[i] = false
    }

    for(let i = 0; i<A.length; i++){
        trueOrFalse[A[i]] = true
    }

    for(let i = minVal; i<trueOrFalse.length; i++){
        if(trueOrFalse[i] === false) return i
    }
}

// RESULT 50/100