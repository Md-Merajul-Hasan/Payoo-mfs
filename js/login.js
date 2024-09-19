document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value;
    const pin = document.getElementById('pin').value;
    if(phoneNumber === '017' && pin === '1234'){
        window.location.href = "/home.html";
    }else{
        alert('wrong phone of pin');
    }
})