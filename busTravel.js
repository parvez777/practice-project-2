// Bus vara nirdharon

// 1 theke 10 kilometer = 10 taka vara
// 11 theke 30 kilometer = 8 taka vara
// 31 theke all kilometer = 5 taka vara

const parvez = 288; // Jessor To Dhaka

function busVara(distance){
    let vara = 10;
    let totalVara = vara * distance;

    if(distance > 10){
        // tahole per kilometer 8 taka vara
        const newDistance = distance - 10;
        totalVara = newDistance * 8 +100;
    }
    if(distance > 30){
        // tahole per kilometer 5 taka vara
        const newDistance = distance - 30;
        totalVara = newDistance * 5 + 260;
    }

    return totalVara;
    
}

console.log(busVara(parvez));






function busRent(){
    let input = document.getElementById('input').value;
    let inputResult = parseInt(input)

    let rent = 10;
    let totalRent = rent * inputResult;

    if(inputResult > 10){
        const distance = inputResult - 10;
        totalRent = distance * 8 + 100;
    }
    if(inputResult > 30){
        const distance = inputResult - 30;
        totalRent = distance * 5 + 260;
    }

    let result = parseInt(totalRent);

    document.getElementById('result').value = result;

}

document.getElementById('reset').addEventListener('click', function(){
    document.getElementById('input').value = '';
    document.getElementById('result').value = '';
})







