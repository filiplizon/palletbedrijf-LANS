// Displaying menu

const menu = document.querySelector('.menuWrap');
const burgerMenu = document.querySelector('.burger');
const burger = document.querySelector('.fa-bars');
const quit = document.querySelector('.fa-times');
const scrollDown = document.querySelector('.scrollDown');


function clickBar() {
    burger.classList.toggle('show');
    quit.classList.toggle('show');
    menu.classList.toggle('show');
}

burgerMenu.addEventListener('click', clickBar);


// Changing sections


function closeBar() {
    $('.menuWrap').removeClass('show');
    $('.fa-times').removeClass('show');
    $('.fa-bars').addClass('show');
}


$('.aboutUsBtn, .scrollDown').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.s2').offset().top
    }, 1000)
    closeBar();
})

$('.menu h2, .homeBtn').on('click', function () {
    $('body, html').animate({
        scrollTop: 0
    }, 1000)
    closeBar();
})

$('.servicesBtn').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.s3').offset().top
    }, 1000)
    closeBar();
})

$('.galleryBtn').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.s4').offset().top + 5
    }, 1000)
    closeBar();
})

$('.contactBtn').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.s5').offset().top - 7
    }, 1000)
    closeBar();
})


// Effects on scroll


$(document).on('scroll', function () {
    const windowHeight = $(window).height();
    const scrollValue = $(this).scrollTop();

    const $service1 = $('.service1');
    const service1FromTop = $service1.offset().top - 50;


    if (scrollValue > service1FromTop - windowHeight) {
        $service1.addClass('active');
    }

    const $service2 = $('.service2');
    const service2FromTop = $service2.offset().top - 50;

    if (scrollValue > service2FromTop - windowHeight) {
        $service2.addClass('active');
    }

    const $service3 = $('.service3');
    const service3FromTop = $service3.offset().top + 50;


    if (scrollValue > service3FromTop - windowHeight) {
        $service3.addClass('active');
    }

    const $service4 = $('.service4');
    const service4FromTop = $service4.offset().top - 50;


    if (scrollValue > service4FromTop - windowHeight) {
        $service4.addClass('active');
    }


    const $feature = $('.feature');
    const featureFromTop = $feature.offset().top;
    const featureHeight = $feature.height();

    if (scrollValue > featureFromTop + featureHeight / 3 - windowHeight) {
        $feature.addClass('active');
    }
    // cleaner
    if (scrollValue < 100) {
        $('.feature, .service').removeClass('active');
    }
})


// EmailJS added


const btn = document.getElementById('button');

document.getElementById('contact-form')
    .addEventListener('submit', function (event) {
        event.preventDefault();
        const serviceID = 'service_jw6b729';
        const templateID = 'template_6hu2l75';
        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                alert('Sent!');
            }, (err) => {
                alert(JSON.stringify(err));
            });
    });