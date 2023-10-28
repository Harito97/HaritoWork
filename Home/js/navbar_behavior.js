const navElements = document.querySelectorAll('nav li a');
const frameURL = document.querySelector('.Tasks iframe')
navElements.forEach((element) => {

  // =======
//     if (element.innerText == "TIME") {
//         element.addEventListener('mouseenter', function () {
//             frameURL.src = "../ClockExtension/clock.html";
//         });
//     } else if (element.innerText == "TASKS") {
//         element.addEventListener('mouseenter', function () {
//             frameURL.src = "../ToDoExtension/index.html";
//         });
//     } else if (element.innerText == "CALCULATOR") {
//         element.addEventListener('mouseenter', function () {
//             frameURL.src = "../CalculatorExtension/index.html";
//         });
//     } else if (element.innerText == "WEATHER") {
//         element.addEventListener('mouseenter', function () {
//             frameURL.src = "../WeatherExtension/index.html";
//         });
//     }

//     element.addEventListener('mouseleave', function () {
//         frameURL.src = "";
// =======
    element.addEventListener('mouseenter', function () {
        // Tải nội dung từ file HTML khác
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // Lấy nội dung từ phản hồi của AJAX
                const response = xhr.responseText;
                // Hiển thị nội dung vào trung tâm màn hình
                const contentElement = document.getElementById('TodoExtension');
                contentElement.innerHTML = response;
            }
        };
        xhr.open('GET', '/TodoExtension/index.html', true); 
        xhr.send();
    });

    element.addEventListener('click', function () {
        // Xóa nội dung khi chuột click li
        const contentElement = document.getElementById('TodoExtension');
        contentElement.innerHTML = '';

    });
});