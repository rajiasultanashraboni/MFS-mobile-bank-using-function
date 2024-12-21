document.getElementById('addmoney-button')
.addEventListener('click',function(event){
    event.preventDefault();
    // console.log('button clicked')
    const inputAddMoneyValue = getInputValueById('input-add-money');
    const inputPinNumber = getInputValueById('input-pin-number');
    if(inputPinNumber===99947){
        // console.log('add money successful');
        const accountBalance = getTextValueById('available-balance');
        const newBalance = accountBalance+inputAddMoneyValue;
        document.getElementById("available-balance").innerText =newBalance;
    }
    else{
        alert('please try again later')
    }
})