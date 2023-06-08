const counterEl = document.querySelector('.counter');
const increaseButtonEl = document.querySelector('.counter__button--increase');
const decreaseButtonEl = document.querySelector('.counter__button--decrease');
const resetButtonEl = document.querySelector('.counter__reset-button');
const counterValueEl = document.querySelector('.counter__value');
const counterTitleEl = document.querySelector('.counter__title');

// increasing the value uses an arrow function
const incrementCounter = () => {
    //get current value of counter
    const currentValue = counterValueEl.textContent;

    //convert value to number datatype
    const currentValueAsNumber = +currentValue;

    //increment by 1
    let newValue = currentValueAsNumber + 1;

    // if we go past 10 disable counter
    if (newValue > 10) {
        newValue = 10;
        counterEl.classList.add('counter--limit');
        counterTitleEl.innerHTML = 'Limit! Buy <b>Pro</b> For > 10';
        
        increaseButtonEl.disabled = true;
        decreaseButtonEl.disabled = true;
    }
    //set counter element with new value
    counterValueEl.textContent = newValue;
    increaseButtonEl.blur();
}

increaseButtonEl.addEventListener('click', incrementCounter);
// you can press any button to increase the value as well
document.addEventListener('keydown', incrementCounter);

// decreasing the value uses an anonymous function
decreaseButtonEl.addEventListener('click', () => {
    const currentValue = counterValueEl.textContent;

    const currentValueAsNumber = +currentValue;

    let newValue = currentValueAsNumber - 1;

    // we can't go negative
    if (newValue < 0) {
        newValue = 0;
    }
    counterValueEl.textContent = newValue;
    decreaseButtonEl.blur();
});

// reseting the value uses a traditional function
function resetCounterValue() {
    counterValueEl.textContent = 0;

    // reset the disabled buttons and styles
    counterEl.classList.remove('counter--limit');
    counterTitleEl.innerHTML = 'Fancy Counter';

    increaseButtonEl.disabled = false;
    decreaseButtonEl.disabled = false;
    resetButtonEl.blur();
}
resetButtonEl.addEventListener('click', resetCounterValue);