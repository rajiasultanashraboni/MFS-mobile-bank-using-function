document.getElementById('cashout-button')
.addEventListener('click',function(event){
    event.preventDefault();
    // console.log("cashout button clicked")
    const cashOutInputValue = getInputValueById('cashout-amount');
    const cashOutPinNumber = getInputValueById('cashout-pin-number');
    // console.log(cashOutInputValue,cashOutPinNumber)
    // validation is here 
    if(isNaN(cashOutInputValue)){
        alert('please try again');
        return;
    }
    
    if(cashOutPinNumber===99947){
        // console.log('cash out successful')
        const availableBalance = getTextValueById ('available-balance');
        if(cashOutInputValue>availableBalance){
            alert('You donot have sufficient balance');
            return;
        }
        const finalBalance = availableBalance-cashOutInputValue;
        document.getElementById("available-balance").innerText = finalBalance;

        // transaction section is added here 
        const div = document.createElement('div');
        div.classList.add('bg-slate-200');
        div.innerHTML=`
            <h2>cash out history</h2>
            <p>cashout amount ${cashOutInputValue} tk and new balance is ${finalBalance}</p>

            
        `

        document.getElementById('transaction-container').appendChild(div)

    }
    else{
        alert('invalid username or password')
    }
})