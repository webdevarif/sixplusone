var elemStyle = new Array();
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


(function ($) {
	"use strict";
      
	$(window).on('load', function () {
		aosAnimation();
	});

	preloader();
    mobileHeaderActive();

    $(document).ready(function() {
        $( "[menuToggler]" ).click(function() { 
            openMenu();
        });
    
       
    });
       
    
	/*=============================================
		=    		 Preloader			      =
	=============================================*/
    function preloader() {
        // Code to run when the document is ready.
		$(window).on('load', function () {
			$('#preloader').addClass('loaded');
			$("#loading").fadeOut(500);

			if ($('#preloader').hasClass('loaded')) {
				$('#preloader').delay(900).queue(function () {
					$(this).remove();
				});
			}
		});
    }
	
   
	/*=============================================
		=    		 Header Sticky			      =
	=============================================*/
    if ($('#header-sticky').length) {
		window.onscroll = function () {
			const left = document.getElementById("header-sticky");

			if (left.scrollTop > 50 || self.pageYOffset > 50) {
				left.classList.add("sticky")
			} else {
				left.classList.remove("sticky");
			}
		}
    }
    
	/*=============================================
		=    		 Open Menu			      =
	=============================================*/
    function openMenu(){
        var tl1 = new TimelineMax();
    
        if(menuStat == 0){ 
    
            $("body").css({"overflow": "hidden"});
            //$('#mainMenu').css({'position': 'fixed'});
    
            //$(".allCont").css({'position': 'absolute', 'right': '100%'});
    
            stopBodyScrolling(true);
    
            tl1.to("#fullMenu", 0.5, { left: 0, ease: Expo.easeout}, .15);
            $("#menu").css({"background-image":"url(../img/exitBttn.png)"});
    
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
            //$('#mainMenu').css({'position': 'absolute'});
    
            stopBodyScrolling(false);
    
            var tl1 = new TimelineMax();
            tl1.to("div.menuList ul li:nth-child(1) a", .35, { top:"40px", ease: Expo.easeout},.05)
               .to("div.menuList ul li:nth-child(2) a", .35, { top:"40px", ease: Expo.easeout},.15)
               .to("div.menuList ul li:nth-child(3) a", .35, { top:"40px", ease: Expo.easeout},.25)
               .to("div.menuList ul li:nth-child(4) a", .35, { top:"40px", ease: Expo.easeout},.35)
               .to("div.menuList ul li:nth-child(5) a", .35, { top:"40px", ease: Expo.easeout},.45)
               .to("div.menuList ul li:nth-child(6) a", .35, { top:"40px", ease: Expo.easeout},.5)
               .to("#fullMenu", 0.45, { left: "100%", ease: Expo.easeout}, .75);
    
            setInterval(function() { $("#menu").css({"background-image":"url(../img/menuBttn_bw.png)"});  }, 850);
    
            //$("#menu").css({"background-image":"url(../img/menuBttn_bw.png)"});
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
    

	/*=============================================
		=    		 Swiper Slider			      =
	=============================================*/
	var avs_slider = $('[avs-slider]');
    if (avs_slider.length) {
		avs_slider.each(function () {
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
		=    		 Mobile Menu  	         =
	=============================================*/
    /* Get Sibling */
    const getSiblings = function (elem) {
        const siblings = []
        let sibling = elem.parentNode.firstChild
        while (sibling) {
            if (sibling.nodeType === 1 && sibling !== elem) {
                siblings.push(sibling)
            }
            sibling = sibling.nextSibling
        }
        return siblings
    }

    /* Slide Up */
    const slideUp = (target, time) => {
        const duration = time ? time : 500;
        target.style.transitionProperty = 'height, margin, padding'
        target.style.transitionDuration = duration + 'ms'
        target.style.boxSizing = 'border-box'
        target.style.height = target.offsetHeight + 'px'
        target.offsetHeight
        target.style.overflow = 'hidden'
        target.style.height = 0
        window.setTimeout(() => {
            target.style.display = 'none'
            target.style.removeProperty('height')
            target.style.removeProperty('overflow')
            target.style.removeProperty('transition-duration')
            target.style.removeProperty('transition-property')
        }, duration)
    }

    /* Slide Down */
    const slideDown = (target, time) => {
        const duration = time ? time : 500;
        target.style.removeProperty('display')
        let display = window.getComputedStyle(target).display
        if (display === 'none') display = 'block'
        target.style.display = display
        const height = target.offsetHeight
        target.style.overflow = 'hidden'
        target.style.height = 0
        target.offsetHeight
        target.style.boxSizing = 'border-box'
        target.style.transitionProperty = 'height, margin, padding'
        target.style.transitionDuration = duration + 'ms'
        target.style.height = height + 'px'
        window.setTimeout(() => {
            target.style.removeProperty('height')
            target.style.removeProperty('overflow')
            target.style.removeProperty('transition-duration')
            target.style.removeProperty('transition-property')
        }, duration)
    }

    /* Slide Toggle */
    const slideToggle = (target, time) => {
        const duration = time ? time : 500;
        if (window.getComputedStyle(target).display === 'none') {
            return slideDown(target, duration)
        } else {
            return slideUp(target, duration)
        }
    }

	/*=============================================
		=  Offcanvas/Collapseable Menu	         =
	=============================================*/
    if ($('.offcanvas-menu').length) {
        const offCanvasMenu = function (selector) {
            const $offCanvasNav = document.querySelector(selector),
            $subMenu = $offCanvasNav.querySelectorAll('.sub-menu');
            $subMenu.forEach(function (subMenu) {
                const menuExpand = document.createElement('span')
                menuExpand.classList.add('menu-expand')
                // menuExpand.innerHTML = '+'
                subMenu.parentElement.insertBefore(menuExpand, subMenu)
                if (subMenu.classList.contains('mega-menu')) {
                    subMenu.classList.remove('mega-menu')
                    subMenu.querySelectorAll('ul').forEach(function (ul) {
                        ul.classList.add('sub-menu')
                        const menuExpand = document.createElement('span')
                        menuExpand.classList.add('menu-expand')
                        menuExpand.innerHTML = '+'
                        ul.parentElement.insertBefore(menuExpand, ul)
                    })
                }
            })

            $offCanvasNav.querySelectorAll('.menu-expand').forEach(function (item) {
                item.addEventListener('click', function (e) {
                    e.preventDefault()
                    const parent = this.parentElement
                    if (parent.classList.contains('active')) {
                        parent.classList.remove('active');
                        parent.querySelectorAll('.sub-menu').forEach(function (subMenu) {
                            subMenu.parentElement.classList.remove('active');
                            slideUp(subMenu)
                        })
                    } else {
                        parent.classList.add('active');
                        slideDown(this.nextElementSibling)
                        getSiblings(parent).forEach(function (item) {
                            item.classList.remove('active')
                            item.querySelectorAll('.sub-menu').forEach(function (subMenu) {
                                subMenu.parentElement.classList.remove('active');
                                slideUp(subMenu)
                            })
                        })
                    }
                })
            })
        }
        offCanvasMenu('.offcanvas-menu');
    }

	// console.log($subMenu);

    /*====== Sidebar menu Active ======*/
    function mobileHeaderActive() {
        var navbarTrigger = $(".burger-icon"),
            endTrigger = $(".mobile-menu-close"),
            container = $(".mobile-header-active"),
            wrapper4 = $("body");

        wrapper4.prepend('<div class="body-overlay"></div>');

        navbarTrigger.on("click", function (e) {
            e.preventDefault();
            container.addClass("sidebar-visible");
            wrapper4.addClass("mobile-menu-active");
        });

        endTrigger.on("click", function () {
            container.removeClass("sidebar-visible");
            wrapper4.removeClass("mobile-menu-active");
        });

        $(".body-overlay").on("click", function () {
            container.removeClass("sidebar-visible");
            wrapper4.removeClass("mobile-menu-active");
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


    // COlor Check
    
    var color_check = document.querySelectorAll(".color-check label");
    color_check.forEach(element => {
        element.style.backgroundColor = element.getAttribute("data-bg");
        element.style.color = element.getAttribute("data-color");
    });

    if ($('.product-filters').length) {
        var submenus = document.querySelectorAll(".product-filters .hassubmenu > a");

        for (var i = 0; i < submenus.length; i++) {
            submenus[i].addEventListener("click", function (e) {
                e.preventDefault();
                e.stopPropagation();
                var last = this.parentElement.classList;
                if (last.contains('open')){
                    last.remove("open");
                } else{
                    last.add("open");
                }
            });
        }
    }

})(jQuery);

// Passing a named function instead of an anonymous function.
















