//macke the score for Game
/*const Score = {
  wins : 0,
  loses : 0,
  ties : 0
}
*/

//03_03 change string(JSON) to objeckt !
//first must use the localStorage.getItem to acses the JSON valius !
//save in Score objeckt !
//03 solve the empty score 'null' error shortest method !
let Score = JSON.parse(localStorage.getItem('localScore')) || {wins : 0, loses : 0, ties : 0}

//01 solve the empty score 'null' error !
/*
if (Score === null) {
  Score = {
    wins : 0,
    loses : 0,
    ties : 0
    };
    }
    */ 
//02 solve the empty score 'null' error short method !
/*
if (!Score) {
  Score = {
    wins : 0,
    loses : 0,
    ties : 0
  };
}
*/

//system chose !
function SysChose () {
  //creat a random number betwen in 0 to 1
  const Num = Math.random();
  let Chose = '';
  //use the randomnumber to mack the result 
  if (0 < Num && Num <= 1/3) {
    Chose = '🪨';
  } else if (1/3 < Num && Num <= 2/3) {
    Chose = '📄'
  } else if (2/3 < Num && Num <= 1) {
    Chose = '✂️'
  }
  //return the result 
  return Chose ;
}

//Game result !
function GameResult (PlayerMove) {
  //use the result of SysChose for undrestand whoese the winer of Game
  //and then update the Score object !
  let Result = '';
  const Chose = SysChose();
  if (PlayerMove === '🪨') {
    if (Chose === '🪨') {
      Result = 'Tie.';
      Score.ties += 1;
    } else if (Chose === '📄') {
      Result = 'You Lose !';
      Score.loses += 1;
    } else if (Chose === '✂️') {
      Result = 'You Wine !';
      Score.wins += 1;
    }
  } else if (PlayerMove === '📄') {
    if (Chose === '🪨') {
      Result = 'You Wine !';
      Score.wins += 1;
    } else if (Chose === '📄') {
      Result = 'Tie.';
      Score.ties += 1;
    } else if (Chose === '✂️') {
      Result = 'You Lose !';
      Score.loses += 1;
    }
  } else if (PlayerMove === '✂️') {
    if (Chose === '🪨') {
      Result = 'You Lose !';
      Score.loses += 1;
    } else if (Chose === '📄') {
      Result = 'You Wine !';
      Score.wins += 1;
    } else if (Chose === '✂️') {
      Result = 'Tie.';
      Score.ties += 1;
    }
    //03 save deta in local storage !
    //03_01 change the objeckt to string(JSON) !

    //03_02 save iv local storage !
    localStorage.setItem('localScore',JSON.stringify(Score));
  }

  //04 add result and player picks and scor to web page !
  //04-01 add scor to web page !
  UpdateScorWeb();
  
  //04-02 add picks to web page !
  document.querySelector('.picks').innerHTML = `You  ${PlayerMove}  System  ${Chose} `
  
  //04-03 add result to web page !
  document.querySelector('.result').innerHTML = `${Result}`
  
}

//04-01-01 chenge to a function !
function UpdateScorWeb () {
  document.querySelector('.scor-p1').innerHTML = ` Win:  ${Score.wins}`; 
  document.querySelector('.scor-p2').innerHTML = `Loses:  ${Score.loses}`;
  document.querySelector('.scor-p3').innerHTML = ` Ties:  ${Score.ties}`; 
};