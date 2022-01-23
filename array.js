const idNo = [12, 45, 54, 12, 35, 64, 45, 54, 78, 97, 23, 12, 45, 35, 88];

let result = [];

for( i = 0; i < idNo.length; i++){
    let element = idNo[i];

    if(result.indexOf(element) == -1) {
        result.push(element);
    }
}

console.log(result);



// Fucntion System

const rollNo = [12, 45, 54, 12, 35, 64, 45, 54, 78, 97, 23, 12, 45, 35, 88];

function dupArray(array){

    let result2 = [];
    
    for(i = 0; i < array.length; i++){
        let element2 = array[i];

        if(result2.indexOf(element2) == -1){
            result2.push(element2)
        }
    }
    return result2;
}

console.log(dupArray(rollNo));