const images = [{
    city: "Rostov-on-Don LCD admiral",
    area: "81 m2",
    time: "3.5 months",
    img: "./images/slider/rostov.png"
}, {
    city: "SochiThieves",
    area: "105 m2",
    time: "4 months",
    img: "./images/slider/sochi.png"
},{
    city: "Rostov-on-Don Patriotic",
    area: "93 m2",
    time: "3 months",
    img: "./images/slider/patriotic.png"
},];
// Объявление переменных
const city = document.querySelector(".city_js");
const area = document.querySelector(".area_js");
const time = document.querySelector(".time_js");
const img = document.querySelector(".slide_js");
const vector = document.querySelector(".vector");
const dots = document.querySelectorAll(".dot");
const links = document.querySelectorAll(".projects_navigation_item");
const left = document.querySelector(".left");
const right = document.querySelector(".right");


// Объявление слайда
const setImage = (index) => {
    city.innerHTML = images[index].city;
    area.innerHTML = images[index].area;
    time.innerHTML = images[index].time;
    img.style.backgroundImage = `url('${images[index].img}')`;
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active_dot');
        links[i].classList.remove('active_link');
    }
    dots[index].classList.add('active_dot');
    links[index].classList.add('active_link');
};
const currentSlide = (index) => {
    setImage(index);
    currentIndex = index;
};

let currentIndex = 0;

dots.forEach((dot, index) => dot.addEventListener('click', () => { currentSlide(index) }));
links.forEach((link, index) => link.addEventListener('click', () => { currentSlide(index) }));

// Переключение по стрелкам
left.addEventListener("click", () => {
    if (currentIndex === 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex -= 1;
    }
    setImage(currentIndex);
});
right.addEventListener("click", () => {
    if (currentIndex >= images.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex += 1;
    }
    setImage(currentIndex);
});





