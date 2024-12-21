document.getElementById('login-btn')
.addEventListener('click',function(event){
    event.preventDefault();
    
    // console.log('button clicked')
    const phoneNumber = getInputValueById("phone-number");
    const pinNumber = getInputValueById("pin-number");
    // console.log(phoneNumber,pinNumber)
    if (phoneNumber===5 && pinNumber === 1234) {
        console.log("you are logged in");
        window.location.href = "home.html";
      } else {
        alert("invalid username or password");
      }
})