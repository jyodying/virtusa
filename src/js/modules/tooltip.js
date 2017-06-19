//==========================================================================
//Copyright: &copy;NewYorkLife 2016. All rights reserved.
//==========================================================================

define("tooltip", ['logger', 'jquery'],
  /**
   * @exports modules/tooltip
   * @requires logger
   * @requires jquery
   */
  function (logger, $) {
    'use strict';
    /**
     * The exports.
     */
    /** @alias module:tooltip */
    var exports = {
        /**
         * Call initializeDom when we need to bind or re-bind with DOM.
         * @method
         */
        initializeDom: function () {
        /*
         * Tooltips ==========
         */
        if ($('.nyljs-tooltip').length > 0) {
          var toolTipHover = function () {
            // Hover over code
            /**
             * The title.
             */
            var title = $(this).attr('title');
            $(this).data('text', title).removeAttr('title');
            $('<p class="nylui-tooltip-content"></p>').text(title).appendTo('body').fadeIn('slow');
          };
          var toolTipHoverStop = function () {
            // Hover out code
            $(this).attr('title', $(this).data('text'));
            $('.nylui-tooltip-content').remove();
          };
          /**
           * @param e
           */
          var toolTipMouseMove = function (e) {
            /**
             * The mousex.
             */
            var mousex = e.pageX + 20; // Get X coordinates
            /**
             * The mousey.
             */
            var mousey = e.pageY + -5; // Get Y coordinates
            $('.nylui-tooltip-content').addClass('nylui-slide-right').css({
              top: mousey,
              left: mousex,
              'margin-left': '0'
            });
          };
          $('.nylui-tooltip').hover(toolTipHover, toolTipHoverStop).mousemove(toolTipMouseMove);
        }
      }
    };
    return exports;
  });