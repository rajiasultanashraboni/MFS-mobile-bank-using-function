document.getElementById('cashout-button')
.addEventListener('click',function(event){
    event.preventDefault();
    // console.log("cashout button clicked")
    const cashOutInputValue = getInputValueById('cashout-amount');
    const cashOutPinNumber = getInputValueById('cashout-pin-number');
    // console.log(cashOutInputValue,cashOutPinNumber)
    if(cashOutPinNumber===99947){
        // console.log('cash out successful')
        const availableBalance = getTextValueById ('available-balance');
        const finalBalance = availableBalance-cashOutInputValue;
        document.getElementById("available-balance").innerText = finalBalance;

    }
    else{
        alert('invalid username or password')
    }
})