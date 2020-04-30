'use strict';
var score= 0;
alert('lets play a game!');
// asks name
var userName= prompt('First what is your name?');
console.log('prompt for username.User answered:' + userName);

alert('Nice to meet you ' + userName);

//continues convo
alert('Ok ' + userName + ' lets play yes or no questions');


var lastDance= prompt('Did you watch the Last dance with MJ ' + userName + ' ? ');
if(lastDance.toLowerCase() === 'yes'){
  score++;
  alert('Me Too! ' + userName);

} else if(lastDance.toLowerCase() === 'no'){
  alert('You should give it a shot ' + userName);
} var giveItAShot= prompt('Have you ever shot a basketball ' + userName + ' ?');

if(giveItAShot.toLowerCase() === 'yes'){
  score++;
  alert('Good you will see why Jordan is the Goat!');

} else if(giveItAShot.toLowerCase() === 'no'){
  alert('Hey I get it. Basketball is not for everyone');
}
var wrestled = prompt('Have you wrestled a bear ' + userName + ' ?');
if(wrestled.toLowerCase() === 'yes'){
  alert('You are brave ' + userName + '!');
  score++;

} else if(wrestled.toLowerCase() === 'no'){
  alert('Good Choice ' + userName + ' !');
}



var answer = 4;
for(var i = 0; i < 4; i++ ){
  var favoriteNum = prompt('Can you guess my favorite number? You have 4 tries!');
  if(i === 3){
    alert('out of guesses');
  } else if(favoriteNum == answer){
    score++;
    alert('You Got It! ' + answer + ' is my favorite number!');
    break;
  } else if( favoriteNum > answer){
    alert('Too high!');
  } else if ( favoriteNum < answer){
    alert('Too Low');
  }
  if( i === 4 ){
    alert('my favorite number was 4.');
  }
}

var answers= [ 'drake', 'eminem', 'snoop'];
var answersP= [ ' Drake ', ' Eminem ' , ' Snoop'];
var points= 0;



for(var i= 0; i < 6; i++){

  if(points === 1){
    alert('1 correct! 2 more to go!');

  }
  if(points === 2){
    alert('Great job! 2 correct and 1 left!');

  }
  if(points === 3){
    alert('Good job! 3 out of 3! A rappers delight!!!');
    break;
  }
  var rapper= prompt('Who are my favorite rappers? Choose from this list. Drake, Eminem, Lil Yaty, Jcole, Snoop, Chocolate Droppa. ');
  if(i=== 5){
    alert('out of guesses');
  }
  if(rapper.toLowerCase()=== answers[0]){
    prompt('correct');
    points ++;
    score++;

  } else if (rapper.toLowerCase()=== answers[1]){
    prompt('good job');
    points ++;
    score++;

  } else if(rapper.toLowerCase()=== answers [2]){
    prompt('great!');
    points ++;
    score++;

  } else if(rapper.toLowerCase() !== answers){
    alert('try again');
  } if(i === 5){
    alert('My favorite rappers are ' + answersP + '.');
  }
}

alert('Wow thanks for playing! You got ' + score + ' out of 7!');

