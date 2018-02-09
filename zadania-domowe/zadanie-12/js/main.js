$('a[href*="http"]').click(function(e) {
    e.preventDefault();
    var url = $(this).attr('href');
    
    $('body').fadeOut(5000,function(){
   window.location.href= url; 
});
});

$(window).scroll(function() {
    
  var scrollTop = $(this).scrollTop();
    
/*Menu change color */    
    if($(this).scrollTop()>70){
        $('.navbar').addClass('scroll');
    }else {
        $('.navbar').removeClass('scroll');
    }


/*Progress bar */

var percent = (scrollTop*100)/($('body').height()- $(this).height());
$('.progressbar').css({width:(percent + '%')})

    });