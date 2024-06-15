let sum = 0;
function clickMe(){
    const firstElement = document.getElementById('count');
    sum += 1;
    firstElement.innerText = sum;
}

const minusBtn = document.getElementById('minus-btn');
minusBtn.addEventListener('click', function(){
    const firstElement = document.getElementById('count');
    sum -= 1;
    firstElement.innerText = sum;
})
