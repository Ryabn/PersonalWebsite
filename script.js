/*jslint browser: true*/
/*global $, jQuery*/
/*jslint white: true */

$(function(){
    "use strict";
    
    
    var controller = new ScrollMagic.Controller();
    
    new ScrollMagic.Scene({
        triggerElement: "#firstTrigger",
		duration: 400,
        offset: 650
	})
    .setPin("#profilePhoto")
    .setClassToggle("#profileDescription", "opacityToggle" )
    .addIndicators({name: "400"}) 
	.addTo(controller);
    
    
    new ScrollMagic.Scene({
        triggerElement: "#secondTrigger",
		duration: 250,
        offset: 400
	})
	.setPin("#profileDescription")

    .addIndicators({name: "250"}) 
	.addTo(controller);
    /*
    var profileDescription = ScrollMagic.Scene({
        triggerElement: '#profilePhoto',
		duration: 300
	})
	.setPin("#profilePhoto");
	controller.addScene(profileDescription);
    
    var skillSetDescription = ScrollMagic.Scene({
        triggerElement: '#profilePhoto',
		duration: 300
	})
	.setPin("#skillSetDescription");
	controller.addScene(skillSetDescription);
    */
    /*
    if(window.pageYOffset < 250){
        
        $("#profilePhoto").stop(1000).css({'top': screen.height/2 + window.pageYOffset}).animate({
            left: (window.pageYOffset + screen.width/2)
        }, 10);
        
        $("#skillSetDescription").css({'opacity': (window.pageYOffset/300 - 0.4 )});
        
    }else{
        
        $("#profilePhoto").fadeTo(0, 2.5-(window.pageYOffset/300));
        
        $("#skillSetDescription").fadeTo(0, 2.5-(window.pageYOffset/300));
    }
    
    --------------------------------------
    
    if(window.pageYOffset < 500){
        $("#skillSetDescription").fadeTo(0, 1.5-(window.pageYOffset/500));
    }else{
        $("#skillSetDescription").fadeTo(0, 500-(window.pageYOffset/500));
    }
    */
    
});
