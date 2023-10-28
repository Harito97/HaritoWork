// Lắng nghe sự kiện hover trên các li trong nav
const navElements = document.querySelectorAll('nav li'); // Chỉnh sửa để chọn các li trong nav của bạn
navElements.forEach((element) => {
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