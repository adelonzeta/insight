$(document).ready(function(){$(".about-slider .slides").slick({speed:300,slidesToShow:5,slidesToScroll:5,infinite:!0,lazyload:"ondemand",nextArrow:'<button type="button" class="slide-next"><i class="glyphicon glyphicon-chevron-right"></i></button>',prevArrow:'<button type="button" class="slide-prev"><i class="glyphicon glyphicon-chevron-left"></i></button>',responsive:[{breakpoint:1200,settings:{slidesToShow:4,slidesToScroll:4,infinite:!0,lazyload:"ondemand"}},{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,lazyload:"ondemand"}},{breakpoint:720,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,lazyload:"ondemand"}}]}),$(".content-slider .slides").slick({speed:300,slidesToShow:3,slidesToScroll:3,infinite:!0,lazyload:"ondemand",nextArrow:'<button type="button" class="slide-next"><i class="glyphicon glyphicon-chevron-right"></i></button>',prevArrow:'<button type="button" class="slide-prev"><i class="glyphicon glyphicon-chevron-left"></i></button>',responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,lazyload:"ondemand"}},{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:2,infinite:!0,lazyload:"ondemand"}},{breakpoint:720,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,lazyload:"ondemand"}}]})});