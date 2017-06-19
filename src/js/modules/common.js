//==========================================================================
//Copyright: &copy;NewYorkLife 2016. All rights reserved.
//==========================================================================

define("common", ['logger', 'jquery'],
    /**
     * @exports modules/common
     * @requires logger
     * @requires jquery
     */
    function (logger, $) {
        'use strict';
        var el = null;
        /** @alias module:common */
        var exports = {
            /**
             * Call initializeDom when we need to bind or re-bind with DOM.
             * @method
             */
            initializeDom: function () {

                // $(".nylui-all-modals").load("../modules/modal.html");

                var count = 0;
                var a, a1 = "";
                var sep = ",";

                $('.nylui-currency-format').each(function () {
                    var a = $('.nylui-currency-format')[count].textContent;
                    a1 = Number(a).toLocaleString('en');
                    
                    if (a1.indexOf('.') > -1){
                        var str2 = a1;                       
                    }
                    else{
                        var str2 = a1+'.00';
                    }
                    
                    $('.nylui-currency-format')[count].textContent = str2;
                    count++;

                });

                $('#nylui-transaction-select').change(function () {
                    if (($(this).find(':selected').data('item') === 'item_2') || ($(this).find(':selected').data('item') === 'item_3')) {                     
                        $('.nyljs-tab-content').removeClass("nylui-tab-current");
                        $(".nyljs-tab-content:first").addClass("nylui-tab-current");
                        $('#dividends').hide();                       
                        
                    } 
                    else {                    
                        $('#dividends').show();
                        $('.nyljs-tab-content').removeClass("nylui-tab-current");                       
                        $("#tab-3").addClass("nylui-tab-current");
                        
                    }
                })
                
                 $('#nylui-transaction-select').change(function () {
                    if (($(this).find(':selected').data('item') === 'item_2')) {                     
                        $('.nyljs-tab-content').removeClass("nylui-tab-current");
                        $(".nyljs-tab-content:first").addClass("nylui-tab-current");
                        $('#loan').hide();                       
                        
                    } 
                    else {                    
                        $('#loan').show();
                        $('.nyljs-tab-content').removeClass("nylui-tab-current");                       
                        $("#tab-4").addClass("nylui-tab-current");
                        
                    }
                })
                
                 


            }
        };
        return exports;
    });