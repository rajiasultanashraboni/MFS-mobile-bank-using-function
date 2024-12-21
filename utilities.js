function getInputValueById (id){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
    
}

function getTextValueById (id){
    const textValue = document.getElementById(id).innerText;
    const textValueNumber = parseFloat(textValue);
    return textValueNumber;
}
// button toggle
function toogleButtonById(id){
    document.getElementById('add-money-form').classList.add('hidden')
    document.getElementById('cashout-money-form').classList.add('hidden')
    document.getElementById('transaction-section').classList.add('hidden')
    //show form
    document.getElementById(id).classList.remove('hidden')
}
//btn color
function toogleButtonColor(id){
    document.getElementById('show-add-money').classList.remove('bg-green-400')
    document.getElementById('show-cash-out').classList.remove('bg-green-400')
    document.getElementById('show-transaction').classList.remove('bg-green-400')
    //show background
    document.getElementById(id).classList.add('bg-green-400')
}