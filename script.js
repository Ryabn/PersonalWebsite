/*jslint browser: true*/
/*global $, jQuery*/
/*jslint white: true */


$(function(){
    "use strict";
    
    var controller = new ScrollMagic.Controller();
    
    var profilePhotoTween = TweenMax.to("#profilePhoto", 100, {x: -200});
    var profileDescriptionTween = TweenMax.to("#profileDescription", 100, {opacity: 1});
    
    new ScrollMagic.Scene({
        duration: 400,
        offset: 100
    })
    .setPin("#profilePhoto")
    .setTween(profilePhotoTween)
    .addIndicators({name: "400"})
    .addTo(controller);
    
    new ScrollMagic.Scene({
		duration: 250,
        offset: 400
	})
	.setPin("#profileDescription")
    .setTween(profileDescriptionTween)
    .addIndicators({name: "250"}) 
	.addTo(controller);
});