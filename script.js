var _$_;
var jQuery2;

jQuery("#demo_div").text("Demo Text using jQuery!");

 setTimeout(function(){
   $("#demo_div").text("Demo Text using $ alias!");
 },2000);

 setTimeout(function(){
 _$_ = jQuery.noConflict();
   _$_("#demo_div").text("Demo Text using 'custom_alias _$_'");
 },4000);


setTimeout(function(){
  (function($) {
    $(document).ready(function() {
        $('#demo_div').text('Demo text from a IIFE ');
    });
  })(jQuery);
},6000);




setTimeout(function(){
  $('#demo_div').text('Demo text from a IIFE ');
},8000);

setTimeout(function(){
jQuery(function() { // DOM is ready
   // You're now free to use $ alias
   $('#demo_div').text('making sure if DOM is Ready');
});
},10000);

setTimeout(function(){
jQuery2 = jQuery.noConflict(true);
   jQuery2('#demo_div').text('jQuery is now only accible using "jQuery2"');
},12000);


setTimeout(function(){
  jQuery('#demo_div').text('jQuery is accessible using "jQuery"');
},14000);


setTimeout(function(){
  $('#demo_div').text('jQuery is accessible using $');
},16000);