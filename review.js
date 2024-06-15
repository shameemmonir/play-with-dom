let serialCount = 1;

document.getElementById('submit-btn').addEventListener('click', function(){
    console.log('run hoicci vai')

    // const inputElement = document.querySelector('textarea');
    // const inputValue = inputElement.value;


    const inputValue = document.querySelector('textarea').value;
    console.log(inputValue)

    const container = document.getElementById('review');

    const p = document.createElement('p');
    p.innerText = serialCount + '. ' + inputValue;

    container.appendChild(p);
    serialCount++;

    // for text clear 
    document.querySelector('textarea').value = ''
})