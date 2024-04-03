$(document).ready(function(){

$('.owl-general .owl-carousel').owlCarousel({

    loop: true,
	dots:true,
	autoplay:true,
    margin: 10,
    nav: true,
	 autoWidth:true,
	 items: 2,
    navText: [
        '<img src="/img/white-arrow-left.svg">',
        '<img src="/img/white-arrow-right.svg">'
    ],
    navContainer: '.owl-general .custom-nav',
    /*responsive:{
        0:{
            items: 1
        },
        600:{
            items: 1
        },
        1000:{
            items: 1,
			    stagePadding: 200
        }
    }*/
});


	
	
	$('.logo_slider  .owl-carousel').owlCarousel({

    loop: true,
	dots:true,
	autoplay:false,
    margin: 10,
    nav: false,
	items: 4,
    navText: [
        '<img src="/img/arrow-back-red.svg">',
        '<img src="/img/arrow-back-red.svg">'
    ],
    navContainer: '.LatestNews    .nav-custom',
  responsive:{
        0:{
            items: 2
        },
        600:{
            items: 2
        },
        1000:{
            items: 4,
			 
        }
    }
});

	$('.logo_slider5  .owl-carousel').owlCarousel({

    loop: true,
	dots:true,
	autoplay:false,
    margin: 10,
    nav: false,
	items: 5,
    navText: [
        '<img src="/img/arrow-back-red.svg">',
        '<img src="/img/arrow-back-red.svg">'
    ],
    navContainer: '.LatestNews    .nav-custom',
  responsive:{
        0:{
            items: 2
        },
        600:{
            items: 3
        },
        1000:{
            items: 5,
			 
        }
    }
});

 $(document).ready(function() {
            $("#news-slider, #news-slider1").owlCarousel({
                items: 3,
                margin: 20,
                navigation: true,
               navText: [
        '<img src="/img/arrow-left.svg">',
        '<img src="/img/arrow-left.svg">'
    ],
                pagination: true,
                autoPlay: true,
                nav: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 3,

                    }
                }
            });
        });
	

});
