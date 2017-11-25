$(function() {

    // ------------------------------
    // OWL-CAROUSEL
    function initCarousel () {
        var owl = $('.owl-carousel');
        if(owl.length) {
            owl.each(function(index, element) {
                //wait for images
                $(element).imagesLoaded( function() {

                    //remove loading
                    $(element).find('.loading').remove();

                    var items = $(element).data('items');
                    $(element).owlCarousel({
                        loop: 				$(element).data('loop'),
                        center : 			$(element).data('center'),
                        mouseDrag : 		$(element).data('mouse-drag'),
                        dots : 				$(element).data('dots'),
                        nav : 				$(element).data('nav'),
                        autoplay : 			$(element).data('autoplay'),
                        autoplaySpeed : 	$(element).data('autoplay-speed'),
                        autoplayTimeout : 	$(element).data('autoplay-timeout'),
                        autoWidth : 		$(element).data('auto-width'),
                        autoplayHoverPause :$(element).hasClass('fs-slider') ? false : true,
                        navText :           [$(element).data('nav-text-prev'),$(element).data('nav-text-next')],
                        animateOut: $(element).hasClass('fs-slider') ? 'fadeOut' : '',
                        //autoHeight: true,
                        responsive:{
                            0:		{ items: 1 },
                            768:	{ items: items <= 2 ? items : 2 },
                            1200:	{ items: items <= 3 ? items : 3 },
                            1600:	{ items: items }
                        }
                    });


                });
            });
        }
    }
    // ------------------------------


    $.ajax({
        url: '/photos',
        type: 'GET'
    }).then(function(res) {
        console.log(res.content);
        res.content.forEach(function(photo) {
            var photoContainer = $('<div />');
            var photoElement = $('<img src="' + photo + '" alt="' + 'slide' + '">');
            $('.owl-carousel').append(photoContainer.append(photoContainer.append(photoElement)));
        });

        initCarousel();
    })
});