$(document).foundation();

// JavaScript Document
(function() {
"use strict";

var imageBanner, listItems;

function init() {
	imageBanner = document.querySelector("#pictures");
	listItems = document.querySelectorAll("#navList li");
	/*console.log(listItems)*/
	setUpListItems();
}

function setUpListItems() {
	var offSet = 600;
	
	for (var i=0; i<listItems.length; i++) {
		listItems[i].addEventListener("click", fireMove, false);
	}

	
	function fireMove(e) {
		moveBanner(e.target.parentNode.id);
	}
	
	function moveBanner(howMuch) {
		console.log("this should add up correctly, hopefully: " + (offSet * howMuch));
		TweenMax.to(imageBanner, 0.7, {right:(offSet*howMuch)});
	}
	
}



window.addEventListener("load", init, false);

//TEASER
	var video;
	var seekBar;
	var volumeBar;
	var fullScreen;
	
	
	function govid(){
		console.log ("govid fired");
		video = document.querySelector(".teaserVideo");
		console.log(video.currentSrc);
		var toggleButton = document.querySelector(".playVideo");
		toggleButton.addEventListener("click", togglePlay, false);
		seekBar = document.querySelector(".seek-bar");
		seekBar.addEventListener("change", seek, false);
		volumeBar = document.querySelector(".volume-bar");
		volumeBar.addEventListener("change", volume, false);
		fullScreen = document.querySelector(".full-screen");
		fullScreen.addEventListener("click", fs, false);
	}
	
	function togglePlay(evt){
		console.log(evt.currentTarget);
		if (video.paused) {
			video.play();
			evt.currentTarget.firstChild.nodeValue ="Pause";
		} 
		else {
			video.pause();
			evt.currentTarget.firstChild.nodeValue ="Play";
		}
	}
	
	function seek(){
		
		var time = video.duration*(seekBar.value/100);
		video.currentTime = time;
		
	}
	
	function volume(){
		video.volume = volumeBar.value;
	}
	
	function fs (){
	if (video.requestFullScreen){
		video.requestFullscreen();
	} 
	else if (video.mozRequestFullScreen) {
		video.mozRequestFullScreen();
	}
	else if(video.msRequestFullScreen){
		video.msRequestFullScreen();
	}
	else if(video.webkitRequestFullScreen){
		video.webkitRequestFullScreen();
	}
	}
	
	
	
	window.addEventListener('load',govid,false);
	
	




	})();