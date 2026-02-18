// Variables to keep track of what question, the user's score, and which answer is correct for the current question
let questionNumber = 0;
let score = 0;
let trueAnswers = 0;
let falseAnswers = 0;
let correctAnswer = null;

//Access to required laminates
const startBtn = document.getElementById("start-btn");
let html = document.querySelector('.version-one');

// Add Event Listener To Buttons
startBtn.addEventListener("click", () => {
    html.innerHTML = `
    <div class="screen active">
        <div class="game">
            <h1>Quiz Game</h1>
            <div class="qustion-box" id="qustion-box">
    
            </div>
            <div class="answerd">
                <button id="true">True</button>
                <button id="false">False</button>
            </div>
            <div class="score">
            <p>
                Score: <span id="score">0</span> of <span id="total">20</span>
            </p>
            </div>
        </div>
    </div>
    `;
    //Access to required laminates
    const trueBtn = document.getElementById("true");
    const falseBtn = document.getElementById("false");
    let question = document.getElementById("qustion-box");
    let point = document.getElementById("score");
    //Add Event Listener
    trueBtn.addEventListener("click",trueFunction);
    falseBtn.addEventListener("click",falseFunction);

    function trueFunction () {
        // Check if true is the correct answer
        if (correctAnswer === true) {
            score++;
        };
        //Update Element On Web Page
        point.textContent = score;
        //Recall the Question Function !
        nextQuestion();
    };
    function falseFunction () {
        // Check if false is the correct answer
        if (correctAnswer === false) {
            score++;
        };
        //Update Element On Web Page
        point.textContent = score;
        //Recall the Question Function !
        nextQuestion();
    };
    //Next Qustion Function
    function nextQuestion (){
        questionNumber = questionNumber + 1;
        switch(questionNumber){
        case 1:
            question.textContent = 'Roz in Frasier was originally going to be played by Lisa Kudrow';
            correctAnswer = true;
            break;
        case 2:
            question.textContent = 'Neighbours was filmed in Sydney, Australia';
          correctAnswer = false;
          break;
        case 3:
              question.textContent = 'The Amazon River has native dolphins';
          correctAnswer = true;
          break;
        case 4:
          question.textContent = 'Some animals, like elephants and wolves, live in groups that include their family members.';
          correctAnswer = true;
          break;
        case 5:
            question.textContent ='Dogs can understand up to 250 hand gestures';
            correctAnswer = true;
          break;
        case 6:
          question.textContent ='A hair of a polar bear\'s fur is white';
          correctAnswer = false;
          break;
        case 7:
          question.textContent ='Only animals can get rabies.';
          correctAnswer = false;
          break;
        case 8:
          question.textContent ='The USA grows the most maize';
          correctAnswer = true;
          break;
        case 9:
          question.textContent ='Limes float, lemons sink ';
          correctAnswer = false;
          break;
        case 10:
          question.textContent ='Strawberries are not actually berries';
          correctAnswer = true;
          break;
        case 11:
              question.textContent ='The first tea bags were made from linen';
          correctAnswer = false;
          break;
        case 12:
          question.textContent ='Mushrooms need sunlight to grow ';
          correctAnswer = false;
          break;
        case 13:
          question.textContent ='M&M stands for Mars and Murrie ';
          correctAnswer = true;
          break;
        case 14:
          question.textContent ='The unicorn is the national animal of Scotland';
          correctAnswer = true;
          break;
        case 15:
          question.textContent ='Vietnamese is an official language in Canada';
          correctAnswer = false;
          break;
        case 16:
          question.textContent ='New York has the nickname the Big Pear';
          correctAnswer = false;
          break;
        case 17:
            question.textContent ='Macchu Pichu is an earthquake-proof city';
            correctAnswer = true;
          break
        case 18:
          question.textContent ='The World Wide Web was invented by Tim Berners-Lee in 1989. ';
          correctAnswer = true;
          break;
        case 19:
          question.textContent ='You can sneeze during sleep';
          correctAnswer = false;
          break;
        case 20:
            question.textContent ='The first football in the world was manufactured from a pig\'s bladder ';
            correctAnswer = true;
            break;
        default:
            question.textContent = 'You finished the quiz!'
          correctAnswer = null;
        };
    };
    //Recall the Question Function !
    nextQuestion();
});
