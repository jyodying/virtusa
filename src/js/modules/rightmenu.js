//==========================================================================
//Copyright: &copy;NewYorkLife 2016. All rights reserved.
//==========================================================================

define("rightmenu", ['logger', 'jquery'],
  /**
   * @exports modules/rightmenu
   * @requires logger
   * @requires jquery
   */
  function (logger, $) {
    'use strict';
    var el = null;
    /** @alias module:rightmenu */
    var exports = {
      /**
       * Call initializeDom when we need to bind or re-bind with DOM.
       * @method
       */
      initializeDom: function () { 
        var slideRightmenu = function (e) {
         $('.nylui-right-menu-wrapper').addClass('opened');
        }
		var closeRightmenu = function (e) {
         $('.nylui-right-menu-wrapper').removeClass('opened');
        }
		
        $(".btn-right-menu").on("click", slideRightmenu);   
	    	$(".btn-close-menu").on("click", closeRightmenu); 
			
      }
    };
    return exports;
  });