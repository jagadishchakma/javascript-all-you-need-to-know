const roll = [23, 35, 67, 876, 345, 5678, 48];
const inputRoll = 67;
let status = false;
for(let i = 0; i<roll.length; i++){
    if(inputRoll == roll[i]){
        console.log('Your roll number found: index is: '+ i);
        status = true;
        break;
    }
}

if(!status){
    console.log('Your roll number not found');
}