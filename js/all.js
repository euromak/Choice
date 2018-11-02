function allScript(){

  $(document).off('click', '.site-header_burger');
  $(document).off('click', '.mobile_nav_item a');
  $(document).off('click', '.privacy_message_btn');
  $(document).off('click', '.header_lang_top');


    // lang
    var headerLangTop = $('.header_lang_top'),
        headerLang = $('.header_lang'),
        headerLangList = $('.header_lang_list');


    $(document).on('click', '.header_lang_top', function () {

        headerLangList.slideToggle(300);

        if( $(this).closest('.header_lang').hasClass('header_lang_open') ){
            setTimeout(function () {

                 headerLang.removeClass('header_lang_open');

            }, 300);
        }else{
             headerLang.addClass('header_lang_open');
        }

    });

    // privacy
     if( $('.privacy_message_btn').length !=0 ){
        $('.privacy_message_btn').on('click', function (e) {
            e.preventDefault();

            $('.privacy_message').fadeOut(300);
            Cookies.set( 'privacy', 'hide' );

            return false;
        });

        if( Cookies.get('privacy') == 'hide' ){

            $('.privacy_message').hide();

        }
    }


  // token page
  if( $('.token').length !=0 ){

    var tokenTab = $('.token_content_item');

    $(document).on('click', '.token_tab', function(){

      var tabNum = $(this).data('toktab');

      console.log( tabNum )

      $('.token_tab_active').removeClass('token_tab_active');
      $(this).addClass('token_tab_active');

      $('.token_content_item').hide();
      $('.token_content_item[data-tokcont=' + tabNum + ']').show();

    });

  }


  // faq page
  if( $('.faq').length !=0 ){

    var questionOpen = $('.faq_item_head_right');

    questionOpen.on('click', function(e){

      var answer = $(this).closest('.faq_item').find('.faq_item_body'),
          left = $(this).closest('.faq_item_head').find('.faq_item_head_left'),
          right = $(this).closest('.faq_item_head').find('.faq_item_head_right')
          openLabel = $(this).closest('.faq_item_head').find('.faq_item_head_right_open'),
          closeLabel = $(this).closest('.faq_item_head').find('.faq_item_head_right_close');

      answer.slideToggle(300);
      left.toggleClass('faq_item_head_left_visible');
      right.toggleClass('faq_item_head_right_visible');

      if( right.hasClass('faq_item_head_right_visible') ){
        openLabel.hide();
        closeLabel.show();
      }else{
        openLabel.show();
        closeLabel.hide();
      }

    });

  }


  // header
  var burger = $('.site-header_burger'),
      mobileNavLink = $('.mobile_nav_item a'),
      mobileNav = $('.mobile_nav'),
      mobileNavList = $('.mobile_nav ul');

  $(document).on('click', '.site-header_burger', function(){

      $(this).toggleClass('site-header_burger_open');

      if( $(this).hasClass('site-header_burger_open') ){
          mobileNav.fadeIn();
          mobileNavList.slideDown();
      }else{
          mobileNav.fadeOut();
          mobileNavList.slideUp();
      }


  });

  $(document).on('click', '.mobile_nav_item a',  function(){
    mobileNav.fadeOut();
    mobileNavList.slideUp();

    $('.site-header_burger').removeClass('site-header_burger_open');

  });


  // news
  if( $('.main_video').length !=0 ){

    if( $(window).width() <= 768 ){
      $('.main_video video').remove();
    }

  }

}

allScript()