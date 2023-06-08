const increaseButtonEl = document.querySelector('.counter__button--increase');
const decreaseButtonEl = document.querySelector('.counter__button--decrease');
const counterValueEl = document.querySelector('.counter__value');

// increasing the value uses an arrow function
const increaseCounterValue = () => {
    //get current value of counter
    const currentValue = counterValueEl.textContent;
    console.log(typeof currentValue);

    //convert value to number datatype
    const currentValueAsNumber = +currentValue;
    console.log(typeof currentValueAsNumber);

    //increment by 1
    const newValue = currentValueAsNumber + 1;

    //set counter element with new value
    counterValueEl.textContent = newValue;
}
increaseButtonEl.addEventListener('click', increaseCounterValue);

// decreasing the value uses an anonymous function
decreaseButtonEl.addEventListener('click', function() {
    const currentValue = counterValueEl.textContent;

    const currentValueAsNumber = +currentValue;

    const newValue = currentValueAsNumber - 1;

    counterValueEl.textContent = newValue;
});

