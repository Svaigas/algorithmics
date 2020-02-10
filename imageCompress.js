function imageCompress(arr) {
    let returned = []
    for (let i = 0; i < arr.length; i++) {
        let comparedColor = arr[i][0]
        let counter = 0
        returned.push([])
        for (let j = 0; j < arr[i].length; j++) {
            if (comparedColor === arr[i][j]) {
                counter++
            } else {
                returned[i].push({
                    occur: counter,
                    color: comparedColor
                })
                comparedColor = arr[i][j]
                counter = 1
            }
            //covering last sentence of repeated or not colours
            if (j + 1 >= arr[i].length) {
                returned[i].push({
                    occur: counter,
                    color: comparedColor
                })
            }
        }
    }
    console.log(returned)
    return returned
}

/* //EXAMPLE 1
imageCompress(
    [
        ["blue", "blue", "black", "black"],
        ["white", "white", "black", "black"],
        ["grey", "grey", "grey", "grey"]
    ])*/

/* // EXAMPLE 2
imageCompress(
    [
        ["blue"],
        ["blue"],
        ["blue"],
        ["blue"],
        ["white"]
    ])*/

/*// EXAMPLE 3
imageCompress(
    [
        ["blue","white","blue"],
        ["blue"],
        ["blue"],
        ["blue"],
        ["white"]
    ])*/
