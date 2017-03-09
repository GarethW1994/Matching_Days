//create handlebars template
var source = document.getElementById('days').innerHTML;
var template = Handlebars.compile(source);

//data
var week = {
    days: [{
        dayOne: "Sunday",
        dayTwo: "Monday",
        dayThree: "Tuesday",
        dayFour: "Wednesday",
        dayFive: "Thursday",
        daySix: "Friday",
        daySeven: "Saturday"
    }]
};

//display days
var ul = document.querySelector('.listOfDays');
ul.innerHTML = template(week);

///////////////////////////////////////////////////


//get the two textboxes
var firstDate = document.getElementById('firstDate');
var secondDate = document.getElementById('secondDate');

//get the individual li elements
var li = document.getElementsByTagName('li');

firstDate.addEventListener('change', function () {
    //console.log('input changed');
    determineDay();
}, false);

secondDate.addEventListener('change', function () {
    determineDay();
}, false);

function determineDay() {
    //Dates;
    var arr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dateOne = new Date(firstDate.value);
    var dateTwo = new Date(secondDate.value);
    var dayOne = dateOne.getDay();
    var dayTwo = dateTwo.getDay();

    for (var i = 0; i < arr.length; i++) {
		li[i].removeAttribute('class', 'selectedBlue');
		li[i].removeAttribute('class', 'selectedRed');
		li[i].removeAttribute('class', 'matched');
        
		if (arr[dayOne] === arr[dayTwo] && arr[dayOne] && arr[dayTwo] === arr[i]) {
			li[i].setAttribute('class', 'matched');
		} else if (arr[dayOne] === arr[i]) {
        li[i].setAttribute('class', 'selectedBlue');
        } 
		else if (arr[dayTwo] === arr[i]) {
        li[i].setAttribute('class', 'selectedRed');    
        }
		
    }
}


function changeColor() {


}