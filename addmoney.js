document.getElementById('addmoney-button')
.addEventListener('click',function(event){
    event.preventDefault();
    // console.log('button clicked')
    const inputAddMoneyValue = getInputValueById('input-add-money');
    const inputPinNumber = getInputValueById('input-pin-number');
    //validation is here 
    if(isNaN(inputAddMoneyValue)){
        alert('please try again');
        return;
    }
    if(inputPinNumber===99947){
        // console.log('add money successful');
        const accountBalance = getTextValueById('available-balance');
        if(inputAddMoneyValue>accountBalance){
            alert('You donot have sufficient balance');
            return;
        }
        const newBalance = accountBalance+inputAddMoneyValue;
        document.getElementById("available-balance").innerText =newBalance;
        // add to transaction history
        const p = document.createElement('p');
        p.innerText = `
        added:${inputAddMoneyValue} tk New Balance: ${newBalance}
        `
        console.log(p)

        document.getElementById('transaction-container').appendChild(p)
    }
    else{
        alert('please try again later')
    }
})