var inc = document.getElementById('srn');
var hours=0;
var minutes=0;
 var sec=0;
 var o=true;
function starts(){

	if(o==true){
		o=false;
		timer();
	}
	
}

function stops(){


	o=true;
	

}
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

		if(sec==60){
			sec=0;;
			minutes=minutes+1;
		}
		if(minutes==60){
			minutes=0;
			hours=hours+1;
		}
		if(hours==60){
			inc.innerHTML="00:00:00";
		}
		if(sec<10){
			sec="0"+sec;
			

		}

		if(minutes<10){
			minutes="0"+minutes;
		}


		if(hours<10){
			hours="0"+hours;
		}



		inc.innerHTML=hours+":"+minutes+":"+sec;
				setTimeout("timer()",1000)

				
	}

}
