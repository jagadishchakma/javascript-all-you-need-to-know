// array traverse
const array = [1, 2, 4 , 45, 45, 67];
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}
// array sum 
let result1 = 0;
for(let i = 0; i < array.length; i++){
    result1 += array[i];
}
console.log(result1);

let array2 = [];
for(let i = 0; i < array.length; i++){
    if(array[i] % 2 == 0){
        array2.push(array[i])
    }
}
console.log(array2)