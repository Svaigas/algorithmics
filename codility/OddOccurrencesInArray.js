// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const max = Math.max.apply(null, A)
    let retVal
    for(let i = 1; i <= max; i++){
        if(A.includes(i)){
            const count = A.filter(a => a === i).length
            if(count%2 === 1){
                retVal = i
                break
            }
        }
    }
    return retVal
}

//RESULT 100/100