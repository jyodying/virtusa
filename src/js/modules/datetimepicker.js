//==========================================================================
//Copyright: &copy;NewYorkLife 2016. All rights reserved.
//==========================================================================

define("datetimepicker", ['logger', 'jquery'],
  /**
   * @exports modules/datetimepicker
   * @requires logger
   * @requires jquery  
   */
  function (logger, $) {
    'use strict';
    var el = null;
    /** @alias module:datetimepicker */
    var exports = {
      /**
       * Call initializeDom when we need to bind or re-bind with DOM.
       * @method
       */
      initializeDom: function () { 
        require(['moment','boostrapDatePicker'], function(moment) {
            // alert(moment().format('dddd, MMMM Do YYYY, h:mm:ss a'));
                $(document).ready(function() {     
                  var today = new Date();
                  var date  = today.setDate(today.getDate()-731);
                  $('div[data-role="datepicker"] input').datetimepicker({
                      debug:false,
                      format:'DD/MM  YYYY',
                      maxDate: moment(), 
                      minDate:date,                
                      icons: {
                          up: "fa fa-chevron-up",
                          down: "fa fa-chevron-down",
                          next: 'fa fa-chevron-right',
                          previous: 'fa fa-chevron-left'
                      }
                  });
                 $('.nylui-callendar-icon').click(function(){
                  $(this).siblings('input').trigger('focus');
                 });

           });
        });
      }
    };
    return exports;
  });