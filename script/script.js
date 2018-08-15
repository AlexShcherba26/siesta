$('.owl-carousel').owlCarousel({

    items:1,       
    loop:true,
    autoplay:false,   
    nav:true,
    navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
  
})



ymaps.ready(init);
var myMap;
var myPlacemark;

function init(){     
    myMap = new ymaps.Map("map", {
        center: [53.91695623, 27.45111329],
        zoom: 15,
        controls: ['zoomControl', 'typeSelector']
    });

    myMap.controls.remove('geolocationControl');

    myMap.behaviors.disable([
        'drag',
        'scrollZoom'
    ])
    

    myPlacemark = new ymaps.Placemark([53.91720957, 27.45059830], {
        balloonContentHeader: 'Siesta',
        balloonContentBody: 'Белорусское Производство Кроватей',
        balloonContentFooter: 'Тел.: +375-29-177-44-40',
        hintContent: 'Siesta'
    });

    myMap.geoObjects.add(myPlacemark);
}


$(function(){
 
    $(window).scroll(function() {
        if($(this).scrollTop() > 500) {
            $('.uppage').fadeIn();
        } else {
            $('.uppage').fadeOut();
        }
    });
    $('.uppage').click(function() {
    $('body,html').animate({scrollTop:0},600);
    });

});

$(function(){

    $('#modal_trigger').click(function(){
        $('.alert').show();
    });
     
});

$(function(){

    $('#modalBtnOk').click(function(){
        $('.alert').hide();
    });
     
});