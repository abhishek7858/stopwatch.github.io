var inc = document.getElementById('srn');
var hours=0;
var minutes=0;
 var sec=0;
 var o=true;

 /* if start button is clicked this function will be called
 and the timer will be started*/
function starts(){

	if(o==true){
		o=false;
		timer();
	}
	
}
/* on the click of stop button this function will be called and the 
timer will stop*/
function stops(){


	o=true;
	

}
/* on the click of reset button this function will be called and the 
timer will 00:00:00*/
function reset(){
	hours=0;
	minutes=0;
	sec=0;
	inc.innerHTML="00:00:00";
	o=true;
}


function timer(){
	
	if(o==false){

		sec = parseInt(sec);
    minutes = parseInt(minutes);
    hours = parseInt(hours);
		sec=sec+1;
/*this if block will check that sec is 60 or not if 60 then
 the sec should become 0 and minutes should increase by 1*/
		if(sec==60){
			sec=0;;
			minutes=minutes+1;
		}

		/*this if block will check that minutes is 60 or not if 60 then
 the minutes should become 0 and hours should increase by 1*/

		if(minutes==60){
			minutes=0;
			hours=hours+1;
		}
		if(hours==60){
			inc.innerHTML="00:00:00";
		}





		/*this block puts 0 infront sec, minutes and hours till 0-9*/
		if(sec<10){
			sec="0"+sec;
			

		}

		if(minutes<10){
			minutes="0"+minutes;
		}


		if(hours<10){
			hours="0"+hours;
		}


		/*ouput*/
		inc.innerHTML=hours+":"+minutes+":"+sec;
				setTimeout("timer()",16)

				
	}

}
