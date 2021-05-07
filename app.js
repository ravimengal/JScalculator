let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('.btn');
let clear = document.querySelector('.clearButton');
let equal = document.querySelector('.equalButton');

//retrieve data from numbers that are clicked 

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerText;

        console.warn('button text is', value) // to check if innerText working or not
        screen.value += value;
    })
});


//for equal button 
equal.addEventListener('click', (e) => {
    if (screen.value === '') {
        screen.value = 'Please Enter a Value';
    } else {
        let answer = eval(screen.value);
        screen.value = answer;
    }
})


// for clearing the number entered
clear.addEventListener('click', (e) => {
    screen.value = '';
})