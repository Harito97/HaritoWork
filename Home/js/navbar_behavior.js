const navElements = document.querySelectorAll('nav li a');
const frameURL = document.querySelector('.Tasks iframe')
navElements.forEach((element) => {
    if (element.innerText == "TIME") {
        element.addEventListener('mouseenter', function () {
            frameURL.src = "../ClockExtension/clock.html";
        });
    } else if (element.innerText == "TASKS") {
        element.addEventListener('mouseenter', function () {
            frameURL.src = "../ToDoExtension/index.html";
        });
    } else if (element.innerText == "CALCULATOR") {
        element.addEventListener('mouseenter', function () {
            frameURL.src = "../CalculatorExtension/index.html";
        });
    } else if (element.innerText == "WEATHER") {
        element.addEventListener('mouseenter', function () {
            frameURL.src = "../WeatherExtension/index.html";
        });
    }

    element.addEventListener('mouseleave', function () {
        frameURL.src = "";
    });
});