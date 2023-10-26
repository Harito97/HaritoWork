const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0, yValue = 0;

window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    parallax_el.forEach((el) => {
        let speedx = el.dataset.speedx, speedy = el.dataset.speedy;
        el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px))`;
    });
});

// Update zValue for z space dimension and rotation and GSAP Animations in the future
// // GSAP Animations
// let timeline = gsap.timeline();

// parallax_el.forEach(el => {
//     timeline.from(el, {
//         top: `${el.offsetHight / 2 + el.dataset}px`,
//         duration: 3,
//     }, 1);
// });
