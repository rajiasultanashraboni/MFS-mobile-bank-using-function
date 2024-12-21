document.getElementById('show-add-money')
.addEventListener('click',function(){
    // console.log('add money button clicked')
    toogleButtonById('add-money-form')
    toogleButtonColor('show-add-money')
})
document.getElementById('show-cash-out')
.addEventListener('click',function(){
    // console.log('add money button clicked')
    toogleButtonById('cashout-money-form')
    toogleButtonColor('show-cash-out')
})
document.getElementById('show-transaction')
.addEventListener('click',function(){
    // console.log('add money button clicked')
    toogleButtonById('transaction-section')
    toogleButtonColor('show-transaction')
})