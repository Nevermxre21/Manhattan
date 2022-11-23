const menu = document.querySelector('.menu__burger')
const nav = document.querySelector('.nav')
const body = document.querySelector('body')



    menu.addEventListener('click', function(){

    menu.classList.toggle('active')
    nav.classList.toggle('active')
    body.classList.toggle('lock')

})

nav.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active')
        nav.classList.remove('active')
        body.classList.remove('lock')

    })
})



// ================scroll=====================
const anchors = document.querySelectorAll('a[href*="#"]')


anchors.forEach(anchor => {
    anchor.addEventListener('click',  event => {
        event.preventDefault()


        const blockId = anchor.getAttribute('href').substring(1)

        document.getElementById(blockId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
})



let offset = 0; //smeshenie lev kraya
const sliderLine = document.querySelector('.slider__line')


document.querySelector('.arrow_right_btn').addEventListener('click', function () {

    offset = offset + 100;
    if(offset > 300){
        offset = 0;
    }
    sliderLine.style.left = -offset + '%';

});

document.querySelector('.arrow_left_btn').addEventListener('click', function () {

    offset = offset - 100;
    if(offset < 0){
        offset = 300;
    }
    sliderLine.style.left = -offset + '%';

});

// ================counter=====================

let count = 1
const counter = document.querySelector('.num__of__list')

document.querySelector('.arrow_right_btn').addEventListener('click', function () {
    if(count == 4){count = 0}
    count++
    counter.innerText = `${count}/4`


});

document.querySelector('.arrow_left_btn').addEventListener('click', function () {
    if(count == 1){count = 5}
    count--
    counter.innerText = `${count}/4`


});




