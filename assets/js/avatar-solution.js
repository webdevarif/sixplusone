(function ($) {

	/*=============================================
		=     Menu sticky & Scroll to top      =
	=============================================*/
	$.fn.avsScrollTop = function (options) {
        var scrollTop_config = $.extend({
            scrollClass: "open",
            // scrollCount: 245,
            // scrollTarget: ".scroll-to-target",
            // scrollTargetAttr: "data-target",
        }, options);
		var avs_el = $(this);
		// avs_el.each(function () {
		// 	// Click
        //     avs_el.on('click', function (e) {
		// 		e.preventDefault();				
		// 		var target = $(this).attr('avs-target');
		// 		// animate
		// 		$('html, body').animate({
		// 			scrollTop: $(target).offset()
		// 		}, {
		// 			duration: $(this).attr('avs-duration'),
		// 			queue: false
		// 		});
        //     });
        // });
		
		$(window).on('scroll', function () {
			var scroll = $(window).scrollTop();
				avs_el.each(function () {
					var scrollBar = $(this).data("wd-scroll");
					

					// console.log("scrollBar >>", scrollBar);
					// console.log("Scroll >>", scroll);
					// scrollClass = $(this).attr("wd-scroll");
					// if($(this).attr("avs-scroll")){
					// 	if ( scroll < $(this).attr("avs-scroll") ) {
					// 		if(scrollClass){
					// 			$(this).removeClass(scrollClass ? scrollClass : scrollTop_config.scrollClass);
					// 		}
					// 	} else {
					// 		$(this).addClass(scrollClass ? scrollClass : scrollTop_config.scrollClass);
					// 	}
					// }
			});
		});
    }


	/*=============================================
		=    	OUR CUSTOM PLUGIN NAME 	         =
	=============================================*/
	$.fn.AvatarSolution = function () {}

}(jQuery));

