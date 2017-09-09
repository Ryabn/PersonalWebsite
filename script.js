/*jslint browser: true*/
/*global $, jQuery*/
/*jslint white: true */


$(function(){
    "use strict";
    
    var controller = new ScrollMagic.Controller();
    
    var profilePhotoTween = TweenMax.to("#profilePhoto", 100, {x: -200});
    var profileDescriptionTween = TweenMax.to("#profileDescription", 100, {opacity: 1});
    var skillSetDescriptionTween = TweenMax.to("#skillSetDescription", 100, {opacity: 1});
    
    new ScrollMagic.Scene({
        duration: 400,
        offset: 0
    })
    .setPin("#profilePhoto")
    .setTween(profilePhotoTween)
    .addTo(controller);
    
    new ScrollMagic.Scene({
		duration: 225,
        offset: 175
	})
	.setPin("#profileDescription")
    .setTween(profileDescriptionTween)
	.addTo(controller);
    
    new ScrollMagic.Scene({
		duration: 225,
        offset: 700
	})
	.setPin("#skillSetDescription")
    .setTween(skillSetDescriptionTween)
	.addTo(controller);
});