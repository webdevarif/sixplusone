var elemStyle = new Array();
var elemIndex = new Array();
var elemID = new Array();
var elemPosIni = new Array();
var elemPosEnd = new Array();
var elemHeg = new Array();
var k;

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 0;
var navbarHeight = 64;
var menuStat = 0;
var generalWidth, resolutionDir, sizeDir;

var imgOptiUrl = localStorage.getItem('imgOptiUrl');

var imageAddr, downloadSize, LowLimit;


// Target Items
var wd_preloader = $("#preloader");
var wd_fullMenu = $("#fullMenu");
var wd_headerSticky = $("#header-sticky");
var wd_scrollspy = $('[scrollspy]');
var wd_section = $('section');
var wd_goPage = $('[go-page]');
var wd_scrollTopButton = $(".scroll-top-btn");
// Hide Header on on scroll down


(function ($) {
	"use strict";
      
	$(window).on('load', function () {
        preloader();
		aosAnimation();
	});

    $(document).ready(function() {
        // MENU TOGGLER BUTTON
        $( "[menuToggler]" ).click(function() { openMenu(); });

        // GO PAGE ON CLICK
        if (wd_goPage.length) {
            wd_goPage.each(function () {
                var pageGo = $(this),
                pageLink = pageGo.attr('go-page');
                pageGo.on("click", function () {
                    if(pageLink){
                        goTo(pageLink)
                    } else{
                        goTo('')
                    }
                });
            })
        }
    });

	/*=============================================
		=    		 Preloader			      =
	=============================================*/
    function preloader() {
        // Code to run when the document is ready.
        wd_preloader.css({ left: "100%" });
    }

	/*=============================================
		=    		 Swiper Slider			      =
	=============================================*/
	var wd_slider = $('[avs-slider]');
    if (wd_slider.length) {
		wd_slider.each(function () {
			var SwiperCarousel = $(this),
            // Slides SpaceBetween
			slidesSpaceBetween = SwiperCarousel.data('spaceBetween'),
			slidesSpaceBetweenXl = SwiperCarousel.data('xl-spaceBetween'),
			slidesSpaceBetweenLg = SwiperCarousel.data('lg-spaceBetween'),
			slidesSpaceBetweenMd = SwiperCarousel.data('md-spaceBetween'),
			slidesSpaceBetweenSm = SwiperCarousel.data('sm-spaceBetween'),

            // Slides Autoplay
			slidesAutoplay = SwiperCarousel.data('autoplay'),
			slidesAutoplayXl = SwiperCarousel.data('xl-autoplay'),
			slidesAutoplayLg = SwiperCarousel.data('lg-autoplay'),
			slidesAutoplayMd = SwiperCarousel.data('md-autoplay'),
			slidesAutoplaySm = SwiperCarousel.data('sm-autoplay'),

            // Slides Loop
			slidesLoop = SwiperCarousel.data('loop'),
			slidesLoopXl = SwiperCarousel.data('xl-loop'),
			slidesLoopLg = SwiperCarousel.data('lg-loop'),
			slidesLoopMd = SwiperCarousel.data('md-loop'),
			slidesLoopSm = SwiperCarousel.data('sm-loop'),

            // Slides per View
			slidesPerView = SwiperCarousel.data('items'),
			slidesPerViewXl = SwiperCarousel.data('xl-items'),
			slidesPerViewLg = SwiperCarousel.data('lg-items'),
			slidesPerViewMd = SwiperCarousel.data('md-items'),
			slidesPerViewSm = SwiperCarousel.data('sm-items'),

			slidesSpeed = SwiperCarousel.data('speed'),
			slidesLazy = SwiperCarousel.data('lazy'),
			slidesNextEl = SwiperCarousel.data('next'),
			slidesPrevEl = SwiperCarousel.data('prev');
			
			var swiper = new Swiper(SwiperCarousel[0], {
				slidesPerView: (slidesPerView ? slidesPerView : 1),
				loop: (slidesLoop ? slidesLoop : true),
				speed: (slidesSpeed ? slidesSpeed : 600),
				lazy: (slidesLazy ? slidesLazy : true),
                spaceBetween: (slidesSpaceBetween ? slidesSpaceBetween : 30),
				navigation: {
					nextEl: slidesNextEl,
					prevEl: slidesPrevEl,
				},
				fadeEffect: {
					crossFade: true,
				},
				autoplay: (slidesAutoplay ? slidesAutoplay : false),
                breakpoints: {
                    // when window width is >= 480px
                    480: {
                        slidesPerView: (slidesPerViewSm ? slidesPerViewSm : 1),
                        loop: (slidesLoopSm ? slidesLoopSm : true),
                        autoplay: (slidesAutoplaySm ? slidesAutoplaySm : false),
                        spaceBetween: (slidesSpaceBetweenSm ? slidesSpaceBetweenSm : 30),
                    },
                    // when window width is >= 640px
                    640: {
                        slidesPerView: (slidesPerViewMd ? slidesPerViewMd : 1),
                        loop: (slidesLoopMd ? slidesLoopMd : true),
                        autoplay: (slidesAutoplayMd ? slidesAutoplayMd : false),
                        spaceBetween: (slidesSpaceBetweenMd ? slidesSpaceBetweenMd : 30),
                    },
                    // when window width is >= 991px
                    991: {
                        slidesPerView: (slidesPerViewLg ? slidesPerViewLg : 1),
                        loop: (slidesLoopLg ? slidesLoopLg : true),
                        autoplay: (slidesAutoplayLg ? slidesAutoplayLg : false),
                        spaceBetween: (slidesSpaceBetweenLg ? slidesSpaceBetweenLg : 30),
                    },
                    // when window width is >= 1199px
                    1199: {
                        slidesPerView: (slidesPerViewXl ? slidesPerViewXl : 1),
                        loop: (slidesLoopXl ? slidesLoopXl : true),
                        autoplay: (slidesAutoplayXl ? slidesAutoplayXl : false),
                        spaceBetween: (slidesSpaceBetweenXl ? slidesSpaceBetweenXl : 30),
                    },
                },
			});		
		});		
	}

	/*=============================================
		=    		 Aos Active  	         =
	=============================================*/
	function aosAnimation() {
		AOS.init({
			duration: 1000,
			mirror: true,
			once: true,
			disable: 'mobile',
		});
	}

	/*=============================================
		=    		 Scroll Top Button	         =
	=============================================*/
    wd_scrollTopButton.on('click', function () {
        $("html, body").animate({
            scrollTop: "0"
        }, 1200);
    });

    
	/*=============================================
	=    		 ViewPassword On Click      	  =
	=============================================*/
	$("[data-wd-scroll]").avsScrollTop();

})(jQuery);

// Passing a named function instead of an anonymous function.











$(window).resize(function(e){
    getHeight();
});

function openMenu(){
    var tl1 = new TimelineMax();
    if(menuStat == 0){ 
        $("body").css({"overflow": "hidden"});
        stopBodyScrolling(true);
        tl1.to(wd_fullMenu, 0.5, { left: 0, ease: Expo.easeout}, .15);
        tl1.to("div.menuList ul li:nth-child(1) a", .45, { top:0, ease: Expo.easeout},.5)
           .to("div.menuList ul li:nth-child(2) a", .45, { top:0, ease: Expo.easeout},.55)
           .to("div.menuList ul li:nth-child(3) a", .45, { top:0, ease: Expo.easeout},.65)
           .to("div.menuList ul li:nth-child(4) a", .45, { top:0, ease: Expo.easeout},.7)
           .to("div.menuList ul li:nth-child(5) a", .45, { top:0, ease: Expo.easeout},.75)
           .to("div.menuList ul li:nth-child(6) a", .45, { top:0, ease: Expo.easeout},.8)
        menuStat++;
    }
    else if(menuStat > 0){
        $("body").css({"overflow": "auto"});
        stopBodyScrolling(false);
        var tl1 = new TimelineMax();
        tl1.to("div.menuList ul li:nth-child(1) a", .35, { top:"40px", ease: Expo.easeout},.05)
           .to("div.menuList ul li:nth-child(2) a", .35, { top:"40px", ease: Expo.easeout},.15)
           .to("div.menuList ul li:nth-child(3) a", .35, { top:"40px", ease: Expo.easeout},.25)
           .to("div.menuList ul li:nth-child(4) a", .35, { top:"40px", ease: Expo.easeout},.35)
           .to("div.menuList ul li:nth-child(5) a", .35, { top:"40px", ease: Expo.easeout},.45)
           .to("div.menuList ul li:nth-child(6) a", .35, { top:"40px", ease: Expo.easeout},.5)
           .to("#fullMenu", 0.45, { left: "100%", ease: Expo.easeout}, .75);
        menuStat = 0;
    }
}



function stopBodyScrolling (bool) {
    if (bool === true) {
        document.body.addEventListener("touchmove", freezeVp, false);
    } else {
        document.body.removeEventListener("touchmove", freezeVp, false);
    }
}

var freezeVp = function(e) {
    e.preventDefault();
};

function getHeight(){
    var listElements = document.getElementsByTagName('section');
    for (var i = 0; i < listElements.length; i++) {
        elemIndex[i] = listElements[i].length;
        elemStyle[i] = listElements[i].getAttribute('data-style');
        elemID[i] = listElements[i].getAttribute('id');
        elemPosIni[i] = (listElements[i].offsetTop - 100);
        elemHeg[i] = $('section').eq(i).outerHeight();
        elemPosEnd[i] = (elemPosIni[i] + elemHeg[i]) - 100;
    }
}


window.addEventListener("scroll", function(event) {
    
    getHeight();

    var top = this.scrollY;
    if(top >= [0] && top < elemPosEnd[0]){
        wd_headerSticky.css({'position': 'absolute'});
        wd_scrollTopButton.fadeOut();
    }
    else{
        wd_headerSticky.css({'position': 'fixed'});
        wd_scrollTopButton.fadeIn();
    }


    for(k=0; k < elemPosIni.length; k++){
        if( (top >= elemPosIni[k] && top < elemPosEnd[k]) && elemStyle[k] == "light"){
            wd_headerSticky.removeClass('header-dark').addClass('header-light');
        }
        if( (top >= elemPosIni[k] && top < elemPosEnd[k]) && elemStyle[k] == "dark"){ 
            wd_headerSticky.removeClass('header-light').addClass('header-dark');
        }
    }
    didScroll = true;
}, false);


setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() { 
    var st = $(this).scrollTop();
   
    if (st > lastScrollTop && st > navbarHeight){ 
        // Scroll Down
        wd_headerSticky.removeClass('nav-down').addClass('nav-up');
        wd_scrollTopButton.removeClass('hide').addClass('show');
        
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            wd_headerSticky.removeClass('nav-up').addClass('nav-down');
            wd_scrollTopButton.removeClass('show').addClass('hide');
        }
    }
    
    lastScrollTop = st;
}

/*=============================================
    =    		 Preloader			      =
=============================================*/
function goTo(direcTo){
    wd_preloader.css({ left: "0" });
    $("body").css({"overflow":"visible"});
    
    if(direcTo >= 0){
        setInterval(function() {
            window.location.href="/" + direcTo +"";
        }, 250);
    }
    else{
        setInterval(function() {
            window.location.href="";
        }, 250);
    }
        
}



var timerStart = Date.now();
window.onload = function() {
    $("body").css({"overflow":"visible"});
    getHeight();
};


