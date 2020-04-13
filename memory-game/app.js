document.addEventListener('DOMContentLoaded',()=>{

	const cardArray = [
		{
			name: 'apple',
			img: 'images/apple.jpeg'
		},
		{
			name: 'apple',
			img: 'images/apple.jpeg'
		},
		{
			name:'custard',
			img: 'images/custard.jpeg'
		},
		{
			name:'custard',
			img: 'images/custard.jpeg'
		},
		{
			name:'kiwi',
			img: 'images/kiwi.jpeg'
		},
		{
			name:'kiwi',
			img: 'images/kiwi.jpeg'
		},
		{
			name: 'orange',
			img: 'images/orange.jpeg'
		},
		{
			name: 'orange',
			img: 'images/orange.jpeg'
		},
		{
			name: 'pear',
			img: 'images/pear.jpeg'
		},
		{
			name: 'pear',
			img: 'images/pear.jpeg'
		},
		{
			name: 'pomegranate',
			img: 'images/pomegranate.jpeg'
		},
		{
			name: 'pomegranate',
			img: 'images/pomegranate.jpeg'
		}
		];


/*

If compareFunction is supplied, the array elements are sorted according to the return value of the compare function. If a and b are two elements being compared, then:

If compareFunction(a, b) is less than 0, sort a to an index lower than b, i.e. a comes first.
If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements. Note: the ECMAscript standard does not guarantee this behaviour, and thus not all browsers (e.g. Mozilla versions dating back to at least 2003) respect this.
If compareFunction(a, b) is greater than 0, sort b to a lower index than a.
compareFunction(a, b) must always return the same value when given a specific pair of elements a and b as its two arguments. If inconsistent results are returned then the sort order is undefined.

So you’re just returning a random positive or negative number when you compare every two elements in turn, and JS will sort randomly. Each comparison is either positive or negative (very occasionally it will be 0 as well), so it will not be just ascending or descending most of the time, it will be random. You’re ignoring what the actual values in the array are, you’re just randomly returning < 0, 0 or > 0 for every pair that gets compared

*/

cardArray.sort(()=> 0.5 - Math.random());

console.log(cardArray);


const grid = document.querySelector('.grid');
var resultDisplay = document.querySelector('#result');
var cardsChosen =[];
var cardsChosenId = [];
var cardsWon = [];

//create a game board

function createBoard(){
	for(let i=0;i<cardArray.length;i++){
		var card = document.createElement('img');
		card.setAttribute('src','images/pattern.jpeg');
		card.setAttribute('data-id',i);
		card.addEventListener('click',flipcard);
		grid.appendChild(card);
	}
}

createBoard();

// check for matches

function checkForMatch(){

	var cards = document.querySelectorAll('img');
	const optionOneId = cardsChosenId[0];
	const optionTwoId = cardsChosenId[1];

	if(cardsChosen[0]===cardsChosen[1]){
		alert('you found a match');
		cards[optionOneId].setAttribute('src','images/white.jpeg');
		cards[optionTwoId].setAttribute('src','images/white.jpeg');
		//push array ['name','name'] to cardsWon
		cardsWon.push(cardsChosen);
		
	}

	else {
		cards[optionOneId].setAttribute('src','images/pattern.jpeg');
		cards[optionTwoId].setAttribute('src','images/pattern.jpeg');
		alert('Please try again');
	}
	cardsChosen =[];
	cardsChosenId =[];

	resultDisplay.textContent = cardsWon.length;
	if(cardsWon.length=== cardArray.length/2){
		resultDisplay.textContent = 'Congratulations! You found them all!';
	}
 
}

//flip the card

function flipcard(){

	var cardId = this.getAttribute('data-id');
	cardsChosen.push(cardArray[cardId].name);
	cardsChosenId.push(cardId);
	this.setAttribute('src',cardArray[cardId].img);
	if(cardsChosen.length===2){
		setTimeout(checkForMatch,500);
	}
}


		
	
});

