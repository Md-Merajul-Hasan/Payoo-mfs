document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    const currentAmount = document.getElementById('current-amount').textContent;
    const outAmount = document.getElementById('amount-to-out').value;
    const totalBalance = Number(currentAmount) - Number(outAmount);
    const pin = document.getElementById('pin2').value;
    if(pin === '1234'){
        if(totalBalance >= 0){
            document.getElementById('current-amount').innerText = totalBalance;
        }else{
            alert('not enough balance');
        }
    }else{
        alert('wrong pin');
    }
})