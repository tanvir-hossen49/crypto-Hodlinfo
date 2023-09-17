window.onload = () => {
    main();
    updateTimer();
};

// main is a boot function that initializes the page
const main = () => {
    const toggleThemeInputEle = document.querySelector('.toggle-dark-light');

    toggleThemeInputEle.addEventListener('change', toggleTheme);
};

const toggleTheme = (event) => {
    const body = document.querySelector('body').classList;

    if(event.target.checked){
        body.add('night')
    }else{
        body.remove('night')
    };
}

const updateTimer = () => {
    const timer = document.querySelector('#timer-count');

    // Initialize the timer value
    let seconds = 60;

    const timerInterval = setInterval(function() {
        seconds--;
        timer.textContent = seconds;

        if(seconds === 0) {
            seconds = 60;
        }
    }, 1000);
}