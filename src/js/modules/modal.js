//==========================================================================
//Copyright: &copy;NewYorkLife 2016. All rights reserved.
//==========================================================================

define("modal", ['logger', 'jquery','bootstrap-modal'],
  /**
   * @exports modules/modal
   * @requires logger
   * @requires jquery
   * @requires external/bootstrap-modal
   */
  function (logger, $) {
    'use strict';
    /**
     * The exports.
     */
    /** @alias module:modal */
    var exports = {
        /**
         * Call initializeDom when we need to bind or re-bind with DOM.
         * @method
         */
        initializeDom: function () {
        /*
         * Modal ==========
         */
        if ($('.nylui-modal').length > 0) {
          var showModal = function () {
            $(this).next(".nylui-modal").show();
          };
          var hideModal = function () {
            $(this).parents(".nylui-modal").hide();
          };
          $(".open-modal").off("click", showModal);
          $(".nylui-close").off("click", hideModal);
          $(".nylui-modal").hide();
          $(".open-modal").on("click", showModal);
          $(".nylui-close").on("click", hideModal);
        }
      }
    };
    return exports;
  });