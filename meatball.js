jQuery(function() {

	var body = $('body');

	var currentFallingItem = [];

	var pops = 0;
	var misses = 0;

	var itemArr = ['hot-air-balloon.png', 'doughnut.png', 'meatball.png', 'hamburger.png'];

	setTimeout(function(){
		$('.startTextContainer').remove();
	}, 3000);

	function newItem() {
		var randomNumber = Math.floor(Math.random() * (itemArr.length));
		var itemImgURL = itemArr[randomNumber];
		var rndLeftPx = Math.floor(Math.random() * $(window).width() - 175) + 150;
		var fallingItem = $('<div class="fallingItem"></div>');
		
		fallingItem.css('background-image', "url('images/"+itemImgURL+"')");
		fallingItem.css('left', rndLeftPx + 'px');
		fallingItem.css('top', '-80px');

		if (fallingItem.css("left") < 0) {
			fallingItem.remove();
		} else {
			body.append(fallingItem);
		}

		if (itemImgURL === 'meatball.png') {
			fallingItem.addClass('meatball');
			fallingItem.removeClass('fallingItem');

			$(fallingItem).on('click', function(){
      			$(fallingItem).css({"background-image":"url('images/explosion.png')", "width":"150px", "height":"150px"});
        		$(fallingItem).addClass('popped');
        		pops += 1;
        		setTimeout(function() {
					$(fallingItem).remove();
				}, 800);

		     	if (pops === 10) {
		      		var gameWonDiv = $('<div class="gameOver"></div>');
		 			body.append(gameWonDiv);
		 			gameWonDiv.append("<div class='textContainer'><p class='gameOverText'>You win!</br>You got " + pops + " hits.</br></p></div>");

		 			setTimeout(function(){
		 				// used to reload the current document
		                location.reload()
		            }, 3000);
		      	}
		    });
		    nextMeatballMove(fallingItem);

		} else {
			normalKeyFrame ()
		}

		currentFallingItem.push(fallingItem);
	}

	function normalKeyFrame() {
		var keyFrame = {
		// on initialization of the page, add this key frame to the head
		// definition initialization function
		 	init: function(){
		 	   // if there isn't a key frame in the head
			   if(!keyFrame.check) {
			     var middlePos = Math.floor(Math.random() * 200) + 50;
			     var finalBottomPos = window.innerHeight - 75;
			     //set the style and append to head
			     var css = $('<style>@keyframes drop{ 0% { transform: translateY(-80px); animation-timing-function: ease-in; } 50% { transform: translateY('+middlePos+'px); animation-timing-function: ease-in; } 100% { transform: translateY('+finalBottomPos+'px); animation-timing-function: ease-in;} }</style>').appendTo('head'); //make sure you don't carriage return the css inline statement, or else it'll be error as ILLEGAL
			     //so u don't keep appending style to head
			     keyFrame.check = true;
			   }
		  	}
		}

		keyFrame.init(); // calls the init function (initialization)
	}

	function nextMeatballMove(item) {
		var bottomPos = $(window).height() - 74;
		var nextLeft = Math.floor(Math.random() * window.innerWidth - 100);

		item.css({
			"transition-timing-function": "linear",
			"-webkit-transition-timing-function": "linear", /* Safari and Chrome */
			"animation-timing-function": "ease-in",
			"transition-duration": "5s",
			"top": bottomPos + "px",
			"left": nextLeft + "px",
		});
	}

	var startTime = new Date().getTime();
	var mainInterval = setInterval(function(){
	    if(new Date().getTime() - startTime > 120000){
	        clearInterval(mainInterval);
	        return;
	    } else if (new Date().getTime() - startTime < 60000) {
	    	var easyInterval = setInterval(function(){
	    		newItem();
	    	}, 4000); 
	    } else if (new Date().getTime() - startTime > 80000) {
	    	var mediumInterval = setInterval(function(){
	    		newItem();
	    	}, 3000);
	    }
	}, 3000); 

	 

	setInterval(function() {
	  currentFallingItem.forEach( function(b){
	  	checkPos(b);
	  });
	}, 10);

	// array of active items
	// loop through to find position on window
	// see if poisition is equal to base window (650)
	// if item is missle, count ground hit as 1/10 misses
	// remove all items if they hit the ground

	 function checkPos(b) {
		var bottomWindowPosition = $(window).height() - 75;
	 	if (b.position().top > bottomWindowPosition) {
	 		if(b.hasClass('meatball')) {
	 			// kill the keyframe
	 			// display explosion (maybe alert message is a large page explosion?)
	 			// end game
	 			misses += 1;
	 			b.remove();
	 			$(document).find( ".fallingItem" ).stop( true, true );
	 			$(document).find( ".meatball" ).stop( true, true );

	 			var gameEndDiv = $('<div class="gameOver"></div>');
	 			body.append(gameEndDiv);
	 			gameEndDiv.append("<div class='textContainer'><p class='gameOverText'>You lose!</br>You got " + pops + " hits.</br></p></div>");

	 			setTimeout(function(){
	 				// read up on location reload
	                location.reload()
	            }, 3000);  
			} else {
				b.remove();
			}
			
		}
	 }

})
