// For icon element
const iconElements = document.querySelector('.logo');
const frameIcon = document.querySelector('#Bubble_Water_Animation iframe');
iconElements.addEventListener('mouseenter', function () {
    frameIcon.src = "../BubbleWaterAnimation/index.html";
    frameIcon.style.pointerEvents = "none"; // Đặt giá trị pointer-events thành none
});
iconElements.addEventListener('click', function () {
    frameIcon.src = "";
});

// For nav li a element
const navElements = document.querySelectorAll('nav li a');
const frameExtension = document.querySelector('#Extension iframe')
navElements.forEach((element) => {
    if (element.innerText == "TIME") {
        element.addEventListener('mouseenter', function () {
            frameExtension.src = "../ClockExtension/clock.html";
            frameExtension.style.pointerEvents = "none"; // Đặt lại giá trị pointer-events thành auto
        });
    } else if (element.innerText == "TASKS") {
        element.addEventListener('mouseenter', function () {
            frameExtension.src = "../TodoExtension/index.html";
            frameExtension.style.pointerEvents = "auto"; // Đặt lại giá trị pointer-events thành auto
        });
    } else if (element.innerText == "CALCULATOR") {
        element.addEventListener('mouseenter', function () {
            frameExtension.src = "../CalculatorExtension/index.html";
            frameExtension.style.pointerEvents = "auto"; // Đặt lại giá trị pointer-events thành auto
        });
    } else if (element.innerText == "WEATHER") {
        element.addEventListener('mouseenter', function () {
            frameExtension.src = "../WeatherExtension/index.html";
            frameExtension.style.pointerEvents = "auto"; // Đặt lại giá trị pointer-events thành auto
        });
    } else if (element.innerText == "ACCOUNT") {
        element.addEventListener('mouseenter', function () {
            frameExtension.src = "../WeatherExtension/index.html";
            frameExtension.style.pointerEvents = "auto"; // Đặt lại giá trị pointer-events thành auto
        });
    }

    element.addEventListener('click', function () {
        frameExtension.src = "";
        frameExtension.style.pointerEvents = "none"; // Đặt giá trị pointer-events thành none
    });
});