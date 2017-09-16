/*jslint browser: true*/
/*global $, jQuery*/
/*jslint white: true */

$(function(){
    "use strict";
    
    var controller = new ScrollMagic.Controller();
    
    if(window.matchMedia("(max-width: 600px)").matches){
        var profilePhotoTween = TweenMax.to("#profilePhoto", 100, {y: -150});
        var profileDescriptionTween = TweenMax.to("#profileDescription", 100, {y: 125, opacity: 1});
    }else{
        var profilePhotoTween = TweenMax.to("#profilePhoto", 100, {x: -200});
        var profileDescriptionTween = TweenMax.to("#profileDescription", 100, {x: 50, opacity: 1});
    }
    
    new ScrollMagic.Scene({
        duration: "40%"
    })
    .setPin("#profilePhoto")
    .setTween(profilePhotoTween)
    .addTo(controller);
    
    new ScrollMagic.Scene({
		duration: "40%",
	})
	.setPin("#profileDescription")
    .setTween(profileDescriptionTween)
	.addTo(controller);
    
});