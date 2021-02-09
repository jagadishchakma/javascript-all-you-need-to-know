const array = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11,],
    [12, 13, 14, 15, 16]
]

for(let i = 0; i < array.length; i++){
    for(let r = 0; r < array[i].length; r++){
        console.log('Element ' + i + ": " + array[i][r] );
    }
}