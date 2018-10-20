"use strict";


$(".mobile-menu").click(function(){
	
	if(!$(".mobile-menu-container").hasClass("open")) {
		$(".mobile-menu-container").addClass("open");
		$(".mobile-menu div:nth-child(1)").addClass("transform-menu-close-1");
		$(".mobile-menu div:nth-child(2)").css("display", "none");
		$(".mobile-menu div:nth-child(3)").addClass("transform-menu-close-3");
		$(".mobile-menu-container").removeClass("close");
		$("body").css("overflow", "hidden");
	} else if($(".mobile-menu-container").hasClass("open")) {
		$(".mobile-menu-container").addClass("close");
		$(".mobile-menu-container").removeClass("open");
		$(".mobile-menu div:nth-child(1)").removeClass("transform-menu-close-1");
		$(".mobile-menu div:nth-child(2)").css("display", "block");
		$(".mobile-menu div:nth-child(3)").removeClass("transform-menu-close-3");
		$("body").css("overflow", "initial");
	}
});



  


var showText = function (target, message, index, interval) {    
  if (index < message.length) { 
   // $(target).append(message[index++]); 
   document.getElementById("text_target").innerHTML += `<span>${message[index++]}</span>`;
    setTimeout(function () { showText(target, message, index, interval); }, interval); 
  } 
}
    
$(function () { 
  
 
  		//console.log(showText("#text_target", messages[0], 0, 100));    
  		showText("#text_target", "Organize", 0, 100);
  
 setTimeout(function(){ $('h1 span').css("display", "none"); }, 2000);
});





setTimeout(function(){
	showText("#text_target", "Declutter", 0, 100);
	setTimeout(function(){ $('h1 span').css("display", "none"); }, 2000);

}, 2200);


setTimeout(function(){
	showText("#text_target", "Simplify", 0, 100);
	

}, 4400);

// for (i = 0; i < cars.length; i++) {
//     text += cars[i] + "<br>";
// } 





// var i = 0;
// var txt = 'Declutter';
// var speed = 50;

// function typeWriter(msg) {
//   if (i < msg.length) {
//     document.getElementById("text_target").innerHTML += `<span>${msg[i]}</span>`;
//     i++;
//     setTimeout(typeWriter, speed);
//   } 
// }typeWriter("Declutter");

//  setTimeout(function(){ $('h1 span').css("display", "none"); }, 3000);