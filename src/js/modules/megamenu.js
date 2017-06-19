//==========================================================================
//Copyright: &copy;NewYorkLife 2016. All rights reserved.
//==========================================================================

define("megamenu", ['logger', 'jquery'],
  /**
   * @exports modules/megamenu
   * @requires logger
   * @requires jquery
   */
  function (logger, $) {
    'use strict';
    var el = null;
    /** @alias module:megamenu */
    var exports = {
      /**
       * Call initializeDom when we need to bind or re-bind with DOM.
       * @method
       */
      initializeDom: function () {

        var resizeId;
        function doneResizing(){
          
          var w = $(document).width();
          if (window.matchMedia('(max-width: 991px)').matches){
            
           if($('.menu-open').children('div').hasClass('nylui-hamburger')){
              $('.nylui-megamenu').css({
                'width' : '0%',
                'padding':''
              });
            }
            else{
              $('body').append("<div class='nylui-modal-backdrop'></div>");
              $('.nylui-megamenu').css({
                'width':'100%'
              });
            }

          }
          else{
            $('.nylui-modal-backdrop').remove();
            $('.nylui-megamenu').css({
              "width":"",
              'padding':'',
              'display':'block'
            });
          }
          
      }

        var resizeWindow = function (e) {
          clearTimeout(resizeId);
          resizeId = setTimeout(doneResizing, 0);
        }

        var clickOnmenu = function (e) {
          e.preventDefault();
          $(this).parent("li").siblings().find("i").removeClass("fa-angle-up").addClass("fa-angle-down");
         // $(this).parent("li").siblings().children("div").removeClass("enable-max-height").addClass("disable-max-height");         

          $(this).children("i").toggleClass("fa-angle-up fa-angle-down");
          
          if (window.matchMedia('(min-width: 992px)').matches){
            $(this).parent("li").siblings().children("div").css('display','none');
            $(this).siblings("div").slideToggle();
          }

        }


        var clickOnMobileMenu = function (e) {
          e.preventDefault();
          $(this).find("div").toggleClass("nylui-hamburger nylui-close"); 
          
          
          if($('.menu-open').children('div').hasClass('nylui-hamburger')){
           // document.getElementById("nylui-menu").style.width = "0%";
          //  document.getElementById("nylui-menu").style.padding = "";
          $('.nylui-modal-backdrop').remove();
            $(".nylui-megamenu").animate({
              'width': '0'
            },500, function(){
              $(this).hide();
            });

          }
          else{
           // document.getElementById("nylui-menu").style.width = "auto";
          //  document.getElementById("nylui-menu").style.padding = "25px 15px";
          $('.nylui-modal-backdrop').remove();          
            $(".nylui-megamenu").show().animate({
              'width': '100%'
            },500, function(){
              $('body').append("<div class='nylui-modal-backdrop'></div>");
            });
            
          }
        }

        $(".nylui-megamenu >li >a").on("click", clickOnmenu);

        $(".nylui-mobile-megamenu .menu-open").on("click", clickOnMobileMenu);

        $(window).on("resize",resizeWindow);
      }
    };
    return exports;
  });