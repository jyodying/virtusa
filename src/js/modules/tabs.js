//==========================================================================
//Copyright: &copy;NewYorkLife 2016. All rights reserved.
//==========================================================================

define("tabs", ['logger', 'jquery'],
  /**
   * @exports modules/tabs
   * @requires logger
   * @requires jquery
   */
  function (logger, $) {
    'use strict';
    /**
     * The exports.
     */
    /** @alias module:tabs */
    var exports = {
        /**
         * Call initializeDom when we need to bind or re-bind with DOM.
         * @method
         */
        initializeDom: function () {
        /*
         * Tabs =========
         */
        if ($('ul.nyljs-tabs li').length > 0) {
          var clickOnTab = function (e) {
            /**
             * The tab id.
             */  
            var tab_id = $(this).attr('data-tab');
               if(tab_id === 'search-tab'){
                  e.preventDefault();
              }else{
                $('ul.nyljs-tabs li').removeClass('nylui-tab-current');
                $('.nyljs-tab-content').removeClass('nylui-tab-current');
                $(this).addClass('nylui-tab-current');
                $("#" + tab_id).addClass('nylui-tab-current');
              }
          }
          $('ul.nyljs-tabs li').off("click", clickOnTab);
          $('ul.nyljs-tabs li').on("click", clickOnTab);
        };
      }
    };
    return exports;
  });

