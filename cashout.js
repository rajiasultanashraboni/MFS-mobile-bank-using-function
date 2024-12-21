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
        div.classList.add('bg-white', 'shadow-md', 'rounded-lg', 'p-4', 'm-4');
        div.innerHTML=`
            <h2 class="font-bold text-lg mb-2">Cash Out History</h2>
            <p class="text-gray-400">Cashout amount ${cashOutInputValue} tk and new balance is ${finalBalance}</p>

            
        `

        document.getElementById('transaction-container').appendChild(div)

    }
    else{
        alert('invalid username or password')
    }
})