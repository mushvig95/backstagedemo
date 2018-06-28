




$('.search_box-button').click(function() {
    $('.main_wrapper').css({
        'filter':'blur(40px)',
        'overflowY':'hidden'
    });
    $('html').css('overflow','hidden');
    $('.search_modal').css('display','block');
  });


  $('.search_input-close').click(function() {
    $('.main_wrapper').css({
        'filter':'blur(0px)',
        'overflowY':'scroll'
    });
    $('html').css('overflow','scroll');
    $('.search_modal').css('display','none');
  
  });