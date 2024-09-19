document.getElementById('add-btn').addEventListener('click', function(event){
    event.preventDefault();
    const currentAmount = document.getElementById('current-amount').textContent;
    const addedAmount = document.getElementById('added-amount').value;
    const totalBalance = Number(currentAmount) + Number(addedAmount);
    const pin = document.getElementById('pin').value;
    if(pin === '1234'){
        document.getElementById('current-amount').innerText = totalBalance;
    }else{
        alert('wrong pin');
    }
})