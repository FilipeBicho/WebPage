 /* ------- Close Menu ----*/
/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";

}

/* ------ Open Menu ----- */
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Function to use openNav() or closeNav() */
function openClose(where,openVal,closeVal) {
    var menu = document.getElementById(where.attributes.rel.value);
    where.value = (where.value == openVal) ? closeVal : openVal;
    menu.style.width = (menu.style.width == "250px") ? closeNav() : openNav();
}

/* Function to show to Resume box*/
function openBox(content,box){
	var temp1 = document.getElementById(content);
   	temp1.style.display = "block";
   	var temp2 = document.getElementById(box);
   	temp2.style.display = "block";
  }

/* Function to hide to Resume box*/
function closeBox(content,box){
	var temp1 = document.getElementById(content);
   	temp1.style.display = "none";
   	var temp2 = document.getElementById(box);
   	temp2.style.display = "none";
}

/* Function to show SubMenu of Rules */
function showSubMenu() {
	document.getElementById("menuRules").style.display = "list-item";
}


function cardRank(n){

	var card_rank = [];
	var card_img = [];
	
	card_img[0] = 'images/Rules_images/Poker_Hands/Royal.png';
	card_img[1] = 'images/Rules_images/Poker_Hands/Straight Flush.png';
	card_img[2] = 'images/Rules_images/Poker_Hands/kind4.png';
	card_img[3] = 'images/Rules_images/Poker_Hands/Full House.png';
	card_img[4] = 'images/Rules_images/Poker_Hands/Flush.png';
	card_img[5] = 'images/Rules_images/Poker_Hands/Straight.png';
	card_img[6] = 'images/Rules_images/Poker_Hands/kind3.png';
	card_img[7] = 'images/Rules_images/Poker_Hands/2 Pair.png';
	card_img[8] = 'images/Rules_images/Poker_Hands/Pair.png';
	card_img[9] = 'images/Rules_images/Poker_Hands/High Card.png';
	
	card_rank[0] = "The absolute nuts, also called a Royal Routine, A Royal Flush can not be beaten.Ace to the 10 in suit. The art is to get your opponents to commit there chips to this unbeatable hand.You have less then 0.0015% chance of hitting this winning hand.";
	card_rank[1] = "You would have to be unlucky to be beaten if you held a straight flush, Any 5 cards in suit in sequence. There are 40 different straight flush possibilities. There is about 0.0015% chance of hitting this.";
	card_rank[2] = "Also called Quads. Your eyes light up your pulse races when you flop Quads, Check I Hear you call. Any 4 of the same rank card. if 2 players have 4 of a kind the hand will be decided by the Kicker. There is 0.0024% chance of hitting this hand.";
	card_rank[3] = "Also Called a Full Boat. Nothing worse then when your full house gets beaten by a bigger full house. This is made up of 3 cards of the same rank and 2 cards of the same rank. 3744 different full house combinations are available. There is about 0.14% chance of hitting 1 of these combinations";
	card_rank[4] = "Any 5 cards of the same suit, non consecutive. The winning hand is decided by the highest individual card held eg As beats Js. 5148 different combinations of a flush are available. There is a 0.20% chance of hitting a flush.";
	card_rank[5] = " Also known as The Wheel, Any 5 consecutive ranked cards in multiple suits where the ace can be high or low. An ace high straight is also called Broadway. 10240 different straight combinations are possible. There is 0.39% chance if hitting a straight.";
	card_rank[6] = "Or better known as Trips or a Set. Any 3 of the same ranked cards, can be from a pocket pair or draw too 2 on the board. Watch out your trips aren't trumped by a full boat. 54,912 different possibilities of Three of a Kind are available. There is 2.1% chance of hitting trips.";
	card_rank[7] = "If i'm going to loose a tournament I hold 2 pair. You either have a pocket pair and the board pairs or your 2 hole cards pair on the board. Learn to fold two pair. There are 123,552 possible two pair combinations available. 4.75% chance if hitting 2 pair.";
	card_rank[8] = "Any two cards of the same rank. Here pocket aces are shown. There are over 1,000,000 combnationsof a pair. 42.5% chance of hitting 1 of your hole cards or pairing the board.";
	card_rank[9] = "High Card; When only the Bluff will win. Over 2,500,000 combinations of winning with a High Card. There is a 50% if hitting this over played poker hand.	";
 	
 	document.getElementById("txt0").innerHTML=card_rank[n];
	muda.src=card_img[n];
}

// Insert number of questions
var numQuestions = 8;

// Insert number of choices in each question
var numChoices = 3;

// Insert number of questions displayed in answer area
var answers = new Array(8);

// Insert answers to questions
answers[0] = "2 7";
answers[1] = "Q K";
answers[2] = "2 2";
answers[3] = "2 Q";
answers[4] = "Q J";
answers[5] = "3+2";
answers[6] = "flush";
answers[7] = "10";

/* change page in quiz (Rules) */
function show(shown, hidden) {
  document.getElementById(shown).style.display='block';
  document.getElementById(hidden).style.display='none';
  return false;
}

// Funciotn to get the score from the quiz
function getScore(form) 
{
  var score = 0;
  var currElement;
  var currSelection;
  // for all questions
  for (i=0; i<numQuestions ; i++) 
  {
    currElement = i*numChoices;
    // for all choices in each question 
    for (j=0; j<numChoices ; j++) 
    {
      currSelection = form.elements[currElement + j];
      // currSelection has the checked element
      if (currSelection.checked) 
      {
		//if checked element is the right answer      
        if (currSelection.value == answers[i]) 
        {
          score++;
          break;
        }
      }
    }
  }
  //get the percentage of right answers
  score = Math.round(score/numQuestions *100);
  // form get the percentage value
  form.percentage.value = score + "%";
  var correctAnswers = "";
  //get all the correct answers
  for (i=1; i<=numQuestions ; i++) {
    correctAnswers += i + ". " + answers[i-1] + "\r\n";
  }
  form.solutions.value = correctAnswers;
}

/* initialize google maps */
function initialize()
{
  var mapProp = {
    center: new google.maps.LatLng(46.107939,7.923080),
    zoom:11,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}


/* load google maps script */
function loadScript()
{
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key=&sensor=false&callback=initialize";
  document.body.appendChild(script);
}

window.onload = loadScript;

