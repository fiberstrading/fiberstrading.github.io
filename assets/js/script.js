$(document).ready(function(){

	 $("#myContent").carousel();
	 $("#content-slider").lightSlider({
	    item:4,
        auto:true,
        loop:true,
        slideMove:2,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        pager: false,
        responsive : [
            {
                breakpoint:991,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6,
                  }
            },

            {
                breakpoint:767,
                settings: {
                    item:2,
                    slideMove:1
                  }
            },

            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
	  });
});