/*jslint browser: true*/
/*global $, jQuery*/
/*jslint white: true */

$(function(){
    "use strict";
    
    var controller = new ScrollMagic.Controller();
    
    var profilePhotoTween = TweenMax.to("#profilePhoto", 100, {x: -200});
    var profileDescriptionTween = TweenMax.to("#profileDescription", 100, {x: 50, opacity: 1});
    //var skillSetDescriptionTween = TweenMax.to("#skillSetDescription", 100);
    //var contactMeLinksTween = TweenMax.to("#contactMeLinks", 100, {opacity: 1});
    
    new ScrollMagic.Scene({
        duration: "40%"
    })
    .setPin("#profilePhoto")
    .setTween(profilePhotoTween)
    .addTo(controller);
    
    new ScrollMagic.Scene({
		duration: "40%"
	})
	.setPin("#profileDescription")
    .setTween(profileDescriptionTween)
	.addTo(controller);
    
});