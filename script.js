/*jslint browser: true*/
/*global $, jQuery*/
/*jslint white: true */



$(window).scroll(function(){
    "use strict";
    
    $("#profilePhoto").fadeTo(0, 1-(window.pageYOffset/300));
    
    $("#skillSetDescription").fadeTo(0, 1-(window.pageYOffset/500));
});
