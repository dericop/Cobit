(function(){

	var fadeIn = function(element, d, callback){
		element.velocity({ opacity: 1 }, {
			duration:400,
			delay:d,
			complete:function(){
				if(callback != null)
					callback();	
			}
		})
	}

	var animateSecondRow = function(){
		fadeIn($(".sr-container"), 100,animateThirdRow);
	}

	var animateThirdRow = function(){
		fadeIn($("#firstBlue"),0, animateFourRow);
	}

	var animateFourRow = function(){
		fadeIn($("#secondBlue"),0, animateFiveRow);
	}

	var animateFiveRow = function(){
		fadeIn($("#thirdBlue"),0, animateSixRow);
	}

	var animateSixRow = function(){
		fadeIn($("#fourBlue"), 0,animateRightContainer);
	}

	var animateRightContainer = function(){
		fadeIn($(".sRight-container"), 0, null)
	}

	$("#fTitle").velocity({ opacity: 1 }, {
		duration:500,
		complete:function(){
			fadeIn($(".frow"),100, animateSecondRow);
		}
	});

	$(document).ready(function() {
	 	
	 	$('.open-popup-link').magnificPopup({
		  type:'inline',
		  removalDelay: 300,
  		  mainClass: 'mfp-fade'
		});
	});
	

})();