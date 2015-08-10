// Vincent Nguyen

// Get today's date

function todaysDate()
{
	var date = new Date();
	var hours = date.getHours();
	var standardTime = hours % 12;
	var day = date.getDate();
	var year = date.getFullYear();
	var monthNumber = date.getMonth();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	var amPM;
	if (hours >= 12) {
		amPM = "pm";
	}
	else
	{
		amPM = "am";
	}
	
	if (standardTime == 0) {
		standardTime += 12;
	}
	
	var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	
	var monthToday = monthName[monthNumber];
	
	
	var today = standardTime.toString() +":"+ minutes.toString() +":" + seconds.toString() +" "+ amPM + " "+ monthToday + " " + day.toString() + " " + year.toString();
		document.getElementById("currentTime").innerHTML = "Today's Date: " + today; 
}