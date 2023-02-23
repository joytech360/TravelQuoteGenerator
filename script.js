//Stores array of travel quotes
const travelQuotes = [
  '"The world is a book and those who do not travel read only one page."\n- Saint Augustine',
  '"The use of traveling is to regulate imagination with reality, and instead of thinking of how things may be, see them as they are."\n- Samuel Johnson',
  '"Do not follow where the path may lead. Go instead where there is no path and leave a trail."\n- Ralph Waldo Emerson',
  '"The best education I have ever received was through travel."\n- Lisa Ling',
  '"Travel brings power and love back into your life."\n- Rumi',
  '"Travel is not reward for working, it\'s education for living."\n- Unknown',
  '"Once a year, go someplace you\'ve never been before."\n- Dalai Lama',
  '"The world is a beautiful book, but of little use to him who cannot read it."\n- Carlo Goldoni',
  '"I haven\'t been everywhere, but it\'s on my list."\n- Susan Sontag',
  '"Travel is the only thing you can spend money on that will make you richer."\n- Unknown',
  '"Travel is an investment in yourself."\n- Unknown',
  '"One\'s destination is never a place, but a new way of seeing things."\n- Henry Miller',
  '"Travel and change of place impart new vigor to the mind."\n- Seneca',
  '"Travel is the best way to be lost and found all at the same time."\n- Brenna Smith',
  '"To awaken quite alone in a strange town is one of the pleasantest sensations in the world."\n- Freya Stark',
  '"A journey of a thousand miles must begin with a single step."\n- Lao Tzu',
  '"The world is big and I want to have a good look at it before it gets dark."\n- John Muir',
  '"Travel is the only thing you buy that makes you richer."\n- Unknown',
  '"A good traveler has no fixed plans and is not intent on arriving."\n- Lao Tzu',
  '"Adventure is worthwhile."\n- Amelia Earhart',
  '"Travel makes one modest. You see what a tiny place you occupy in the world."\n- Gustave Flaubert',
  '"Wherever you go becomes a part of you somehow."\n- Anita Desai',
  '"Traveling – it leaves you speechless, then turns you into a storyteller."\n- Ibn Battuta',
  '"To travel is to live."\n- Hans Christian Andersen',
  '"I travel not to escape life, but for life not to escape me."\n- Anonymous',
  '"Travel far enough, you meet yourself."\n- David Mitchell',
  '"Investment in travel is an investment in yourself."\n- Matthew Karsten',
  '"People don\'t take trips, trips take people."\n- John Steinbeck',
  '"The journey not the arrival matters."\n- T. S. Eliot',
  '"Travel is fatal to prejudice, bigotry, and narrow-mindedness."\n- Mark Twain',
  '"Traveling is a brutality. It forces you to trust strangers and to lose sight of all that familiar comfort of home and friends. You are constantly off balance. Nothing is yours except the essential things - air, sleep, dreams, the sea, the sky - all things tending towards the eternal or what we imagine of it."\n- Cesare Pavese',
  '"I travel not to find myself, but to remember who I have been all along."\n - Ray Bradury',
  '"Traveling is like flirting with life. It\'s like saying, \'I would stay and love you, but I have to go; this is my station.\'"\n- Lisa St. Aubin de Terán',
  '"All journeys have secret destinations of which the traveler is unaware."\n- Martin Buber',
  '"Life is short and the world is wide."\n- Simon Raven',
  '"Travel is the only thing that makes you richer."\n- Unknown',
  '"The world is a book and those who do not travel read only one page."\n- Saint Augustine',
  '"We travel, some of us forever, to seek other states, other lives, other souls."\n- Anaïs Nin',
  '"Traveling tends to magnify all human emotions."\n- Peter Hoeg',
  '"To travel is to discover that everyone is wrong about other countries."\n- Aldous Huxley',
  '"Travel is fatal to prejudice, bigotry, and narrow-mindedness."\n- Mark Twain',
        
]

//Stores name and num input field values
var nameInput = document.getElementById('name');
var numInput = document.getElementById('lucky-num');

//Returns true if the name and num input fields are valid
function validateInputs(){
    if(nameInput.value == ""){
        alert('Please enter your name');
        return false;      
    }
    if(numInput.value < 0 || numInput.value > 100 || numInput.value == ""){
        alert('Please enter your lucky number');
        return false;
    }
    return true;
}

//Generates a random quote based on a number parameter
function generateRandomQuote(num){
  return travelQuotes[num];

}

//Stores form and display div dom elements
var formWrapperElement = document.getElementById('form-wrapper');
var displayQuoteElement = document.getElementById('display-quote')

//Hides the quote generator display and reveals the randomly generated quote
function displayQuote(){

    if(validateInputs()){
          formWrapperElement.style.display = "none";

          var randomNumber = Math.floor(Math.random() * travelQuotes.length);
          randomQuote = generateRandomQuote(randomNumber).replace(/\n/g, '<br>');;

          document.getElementById('quote').innerHTML = randomQuote;
          displayQuoteElement.style.display = "block";
        }
      
      }

//Redisplays the quote generator display      
function goBack(){
  formWrapperElement.style.display = "flex";
  displayQuoteElement.style.display = "none";

}    
      
    





