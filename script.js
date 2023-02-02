
   $('[data-scroll]').on('click', function(event) {
        event.preventDefault(); 

        let elementID = $(this).data('scroll'); 

        let elementOffset = $(elementID).offset().top; // ====получение отступа от верха====

        $('html, body').animate({
            scrollTop: elementOffset - 20
        }, 700) 

    }); 