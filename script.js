/*jslint browser: true*/
/*global $, jQuery*/
/*jslint white: true */



$(window).scroll(function(){
    "use strict";
    
    
    if(window.pageYOffset < 500){
        $("#profilePhoto").fadeTo(0, 2-(window.pageYOffset/300));
    }
    
    /*
    if(window.pageYOffset < 500){
        $("#skillSetDescription").fadeTo(0, 1.5-(window.pageYOffset/500));
    }else{
        $("#skillSetDescription").fadeTo(0, 500-(window.pageYOffset/500));
    }
    */
    
});
