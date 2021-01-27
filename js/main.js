jQuery('document').ready(function($){
    
    // Shop By School and single school section
    var shopBySchool = jQuery("#shopBySchool-carousel, #singleSchool-carousel");
    shopBySchool.owlCarousel({
        margin: 30,
        loop: true,
        autoplay: 200,
        dots: false,
        items: 6,
        nav: true,
        navText: ["<span><i class='fa fa-angle-left mr-1'></i></span>", "<span><i class='fa fa-angle-right ml-1'></i></span>"],
        slideSpeed: 500,
        responsive: {
            0: {
                items: 2,
            },
            575: {
                items: 3
            },
            768: {
                items: 4
            },
            1024: {
                items: 6
            },
            1199: { 
                items: 7
            } 
        },
    });

    // Category and brand carousel

    var shopBySchool = jQuery("#category-carousel, #brand-carousel");
    shopBySchool.owlCarousel({
        margin: 30,
        loop: false,
        autoplay: false,
        dots: false,
        nav: false,
        navText: ["<span><i class='fa fa-angle-left mr-1'></i></span>", "<span><i class='fa fa-angle-right ml-1'></i></span>"],
        slideSpeed: 500,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            575: {
                items: 3,
                nav: true
            },
            768: {
                items: 4,
                nav: true
            },
            1024: {
                items: 6,
                nav: true
            },
            1199: { 
                items: 7
            } 
        },
    });

    // Shop By Class
    var shopByClass = jQuery("#shopByClass-carousel");
    shopByClass.owlCarousel({
        margin: 10,
        loop: false,
        autoplay: 200,
        dots: false,
        items: 6,
        nav: true,
        navText: ["<span><i class='fa fa-angle-left mr-1'></i></span>", "<span><i class='fa fa-angle-right ml-1'></i></span>"],
        slideSpeed: 500,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            400: {
                items: 3,
                nav: true
            },
            575: {
                items: 6,
                nav: true
            },
            768: {
                items: 8,
                nav: true
            },
            1024: {
                items: 10,
                nav: true
            },
            1199: { 
                items: 13
            } 
        },
    });

    // Stop closing dropdown menu on click inside
    $(document).on('click', '.dropdown-menu', function (e) {
        e.stopPropagation();
    });

    // searchbar dropdown
    $('.search-input input').on('input', function(){
        var searched_item = $(this).val().length;
        if(searched_item >= 3) {
            $('.search-options').show();
        } else {
            $('.search-options').hide();
        }
    });


    

    // toggle wishlist btn

    $('.wishlist-btn').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('in_wishlist');
    });

    // Toggle Filter
    $('*[data-filter="toggle-filter"]').on('click', function(){
        $('.listing-filter').slideToggle('slow');
    });

    // Delivery Pincode Numeric Only
    $('input[type="number"]').keypress(function(e){

        if (e.keyCode == 46 || e.keyCode == 8) {
            //do nothing
        } else if (e.keyCode < 48 || e.keyCode > 57 ) {
            e.preventDefault();
        }

    });


    // Change Pincode
    $('.change-pincode').on('click', function(e){
        e.preventDefault();
        $(this).text(function(i, text){
            return text === "(Change)" ? "OK" : "(Change)";
        });

        var $delivery_input = $('#delivery-pincode');

        if ($delivery_input.attr('disabled')) {
            $delivery_input.prop('disabled', false);
        } else { 
            $delivery_input.prop('disabled', true);
        }

        $('#delivery-pincode').toggleClass('active');
    });

    // MOre Product Details
    $('.more-product-details').on('click', function(){
        $('.product-details-specs').css('height', '100%');
        $(this).hide();
    });

    // SIngle Page Tooltip
    $('[data-toggle="tooltip"]').tooltip(); 

    // Checkout switch input screens

    $('*[data-switch="co-field"]').on('click', function(e){
        e.preventDefault();
        let parent_class = $(this).parents('.co-field');
        parent_class.removeClass('d-block');
        parent_class.addClass('d-none');
        parent_class.next('.co-field-next').addClass('d-block');
    })

})