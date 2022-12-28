//fixed nav

window.addEventListener('scroll',function(){
    let scroll = window.scrollY;
    const nav = document.getElementById('nav')
    if(scroll>140){
        nav.classList.add('posifixed')
    }else{
        nav.classList.remove('posifixed')
    }
})

//icoTop
const icoTop = document.getElementById('icoTop');
window.addEventListener('scroll', function(){
    let scroll = window.scrollY;
    if(scroll>140){
        icoTop.style.opacity='1';
    }else{
        icoTop.style.opacity='0';
    }
});

icoTop.addEventListener('click',function(){
    window.scrollTo(0,0)
})

//nav categori
const navMenu = document.getElementsByClassName('nav-catecont')[0];
const navCate = document.getElementsByClassName('nav-catewrap')[0];

navCate.addEventListener('mouseover',function(){
    navMenu.style.display='block';
});
navCate.addEventListener('mouseout',function(){
    navMenu.style.display='none';
});

//nav slide jquery
let movingUl = $('.movingUl')
let movingLi = $('.movingLi')
let nbtnPrev = $('.nbtnPrev')
let nbtnNext = $('.nbtnNext')

rolling();
function rolling(){
    setIntervalId=setInterval(function(){
        movingUl.stop().animate({left:-590},100,function(){
            $(this).find('li:first').insertAfter($(this).find('li:last'));
            movingUl.css({left:0})
        })
    },2000)
};
nbtnNext.click(function(){
    movingUl.stop().animate({left:-590},function(){
        $(this).find('li:first').insertAfter($(this).find('li:last'));
        movingUl.css({left:0})
    })
});
nbtnNext.hover(function(){
    clearInterval(setIntervalId);
},function(){
    rolling();
});
nbtnPrev.click(function(){
    $('.movingUl>li:last').insertBefore($('.movingUl>li:first'));
    movingUl.css({left:-590}).stop().animate({left:0});
});
nbtnPrev.hover(function(){
    clearInterval(setIntervalId);
},function(){
    rolling();
});

//메인 슬라이드
var swiper = new Swiper(".mySwiper", {
    autoplay: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

  });
// $('.swiper-pagination').html('<span class="swiper-pagination-current"></span> <span class="swiper-pagination-total"></span>');
//hot key word
var swiper1 = new Swiper(".mySwiper1", {
    loop: true,
    spaceBetween: 20,
    breakpoints: {
        1200: {
            slidesPerView: 5,
        },
        1000: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 3,
        },
        576: {
            slidesPerView: 2,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//main-sec3 contwrap
let contwrap = $('.main-sec3-contwrap');
let tab = $('.main-sec3-tab>ul>li>a');
let closeBtn = $('.main-sec3-close');
let wrap = $('.main-sec3-wrap');

tab.click(function(e){
    wrap.slideDown();
    let attr = $(this).attr('href');
    e.preventDefault();
    tab.removeClass('on');
    $(this).addClass('on');
    contwrap.removeClass('block');
    $(attr).addClass('block');
});
closeBtn.click(function(){
    wrap.slideUp();
    tab.removeClass('on');
})

// //main-sec3-tab infinite duration
// let tabUl = $('.main-sec3-tab>ul');
// let i=0;
// // infinite(i);
// function infinite(i){
//     setInterval(function(){
//         tabUl.stop().animate({left:-5*i+'px'},400);
//         i++;
//         // if(i>58)
//     });
// };

//main-sec4
var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 4,
    slidesPerGroup: 4,
    // slidesPerGroupSkip: 4,
    breakpoints: {
        1200: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
        1000: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//main-sec-6 tab1
let tabmenu = $('.main-sec6-cont-left2>ul>li>a');
let tabmenuli = $('.main-sec6-cont-left2>ul>li');
let tabcont = $('.main-sec6-cont-right2');
let setIntervalTab
let k = 0;

rollingTab()
function rollingTab(){
    setIntervalTab = setInterval(function(){
        tabmenu.removeClass('textOn')
        tabmenuli.eq(k).find('a').addClass('textOn')
        let attr = tabmenuli.eq(k).find('a').attr('href');
        tabcont.removeClass('contOn')
        $(attr).addClass('contOn')
        k++;
        if(k==tabmenu.length){
            k=0;
        }
    },2000)
};

tabmenu.hover(function(){
    clearInterval(setIntervalTab)
    let attr = $(this).attr('href');
    tabcont.removeClass('contOn')
    $(attr).addClass('contOn')
    tabmenu.removeClass('textOn')
    $(this).addClass('textOn')
},function(){
    let current = tabmenuli.has('a.textOn').index();
    k=current;
    rollingTab();
});

let tabCart = $('.tab-cart')
let tabView = $('.tab-view')
let tabCartCont = $('.mc6-tab')

$('.mc6-view').hide();
tabCart.click(function(){
    $('.mc6-tab').hide();
    $('.mc6-cart').show();
    tabView.removeClass('rankOn')
    $(this).addClass('rankOn')
})
tabView.click(function(){
    $('.mc6-tab').hide();
    $('.mc6-view').show();
    tabCart.removeClass('rankOn')
    $(this).addClass('rankOn')
})

let tabmenu1 = $('.main-sec6-cont-left1>ul>li>a');
let tabmenuli1 = $('.main-sec6-cont-left1>ul>li');
let tabcont1 = $('.main-sec6-cont-right1');
let setIntervalTab1
let k1 = 0;

rollingTab1()
function rollingTab1(){
    setIntervalTab1 = setInterval(function(){
        tabmenu1.removeClass('textOn')
        tabmenuli1.eq(k1).find('a').addClass('textOn')
        let attr = tabmenuli1.eq(k1).find('a').attr('href');
        tabcont1.removeClass('contOn')
        $(attr).addClass('contOn')
        k1++;
        if(k1==tabmenu1.length){
            k1=0;
        }
    },2000)
};

tabmenu1.hover(function(){
    clearInterval(setIntervalTab1)
    let attr = $(this).attr('href');
    tabcont1.removeClass('contOn')
    $(attr).addClass('contOn')
    tabmenu1.removeClass('textOn')
    $(this).addClass('textOn')
},function(){
    let current = tabmenuli1.has('a.textOn').index();
    k1=current;
    rollingTab1();
});