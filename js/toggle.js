document.getElementById('out-form-btn').addEventListener('click', function(){
    document.getElementById('out-form').classList.remove("hidden");
    document.getElementById('add-form').classList.add("hidden");
})
document.getElementById('add-form-btn').addEventListener('click', function(){
    document.getElementById('add-form').classList.remove("hidden");
    document.getElementById('out-form').classList.add("hidden");
})