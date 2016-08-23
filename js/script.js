// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" and "getRandomColor" function is called
document.getElementById('loadQuote').addEventListener("click", getRandomColor, false); 
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


var randomNumber; 
var numbers = []; // this array holds the random numbers the program generates.
var counter = 2; // this varibale to count the number of quotes and display it.
var refreshColor; // this variable is used by passing it to clearInterval function to stop generating random colors after all quotes been displayed.


var quotes = [
	{
		quote: 'Do not be embarrassed by your failures, learn from them and start again.',
		source: 'Richard Branson'
	},
	{
		quote: 'Success is simple. Do what’s right, the right way, at the right time.',
		source: 'Arnold H. Glasgow'
	},
	{
		quote: 'Victory is sweetest when you’ve known defeat.',
		source: 'Malcolm S. Forbes'
	},
	{
		quote: 'Action is the foundational key to all success.',
		source: 'Pablo Picasso'
	},
	{
		quote: 'I attribute my success to this: I never gave or took any excuse.',
		source: 'Florence Nightingale'
	},
	{
		quote: 'Don’t let what you cannot do interfere with what you can do.',
		source: 'John R. Wooden'
	},
	{
		quote: 'Things may come to those who wait, but only the things left by those who hustle.',
		source: 'Abraham Lincoln'
	},
	{
		quote:'Life isn’t about finding yourself. Life is about creating yourself.',
		source: 'George Bernard Shaw'
	},
	{
		quote:'If the only tool you have is a hammer, you tend to see every problem as a nail.',
		source: 'Abraham Maslow'
	},
	{
		quote:'The distance between insanity and genius is measured only by success.',
		source: 'Bruce Feirstein'
	}
];


// Function below to generate a random number from 0 to 9

function getRandomNumber(){
	
	while(true){

		randomNumber = Math.floor(Math.random() * quotes.length); // Random number from 0 to 9
		if(numbers.length < quotes.length ){ // this line checks if all quotes been displayed or not
			//console.log(numbers.length);
			if(numbers.indexOf(randomNumber) === -1){ // this line to prevent diplaying a quote twice
			//flag = false;
			numbers.push(randomNumber); // add the random number to the end of numbers array
			return randomNumber; // return the random number to printQuote function
		}
		
		} else{
			break;
		}
	}
}

// Function below to generate random quotes.

function getRandomQuote(prop){
	
	var randomQoute = quotes[randomNumber]; // Random Quote based on the random number

		if (prop === 'quote'){ 
			return randomQoute.quote; // return quote
		} else{
			return randomQoute.source; // return source
		}
}

// Function below to print quotes randomly on the webpage by calling getRandomQoute() function.

function printQuote(){

	randomNumber = getRandomNumber(); //calling getRandomNumber and assign the result to randomNumber variable.
	//console.log(randomNumber);
	if(!(isNaN(randomNumber))){ // this line checks if the random number is number and not undefined or string.

		var Q = getRandomQuote('quote'); // get a quote from getRandomQuote and assign it to Q
		var S = getRandomQuote('source'); // get a source from getRandomQuote and assign it to S

		document.getElementById('quote-box').innerHTML =' <p class="quote">' + counter+ '- ' + Q + '</p>' + '<p class="source">'+ S + '<p>'; // To print on the webpage
		counter += 1;
	} else{
		document.getElementById('quote-box').innerHTML = '<p class="quote">Sorry. There are no more qoutes to display, please refresh the page to see them again</p>';
		document.getElementById('loadQuote').style.display = 'none';
		clearInterval(refreshColor);
	}
	

}

// function below to generate random color for the webpage

function getRandomColor(){
	var randomNumber1 = Math.floor(Math.random() * 256); // Random number from 0 to 255
	var randomNumber2 = Math.floor(Math.random() * 256); // Random number from 0 to 255
	var randomNumber3 = Math.floor(Math.random() * 256); // Random number from 0 to 255
	document.getElementById('body').style.backgroundColor = 'rgb(' + randomNumber1 + ',' + randomNumber2 + ',' + randomNumber3 + ')';

}

// function below to to refresh the quote and the background color every 5 seconds.

function refreshQuote(){
	
	setInterval(function(){printQuote()}, 5000); // it calls printQuote function every 5 sedonds
	refreshColor = setInterval(function(){ getRandomColor()}, 5000); // it calls getRandomColor function every 5 seconds
}

refreshQuote(); // calling refreshQuote function.




