'use strict';

/*alert('lets play a game!');
// asks name
var userName= prompt('First what is your name?');
console.log('prompt for username.User answered:' + userName);

alert('Nice to meet you ' + userName);

//continues convo
alert('Ok ' + userName + ' lets play yes or no questions');

//first question
var human= prompt('Are you human ?');

if(human.toLowerCase() === 'yes'){ 
  alert('Sweet!');
} else if(human.toLowerCase() === 'no'){
  alert('Thats Ok! ' + userName);
} alert(' You are awesome either way ' + userName + '!');

var lastDance= prompt('Did you watch the Last dance with MJ ' + userName + ' ? ');
if(lastDance.toLowerCase() === 'yes'){
  alert('Me Too! ' + userName);

} else if(lastDance.toLowerCase() === 'no'){
  alert('You should give it a shot ' + userName);
} var giveItAShot= prompt('Have you ever shot a basketball ' + userName + ' ?');

if(giveItAShot.toLowerCase() === 'yes'){
  alert('Good you will see why Jordan is the Goat!');
} else if(giveItAShot.toLowerCase() === 'no'){
  alert('Hey I get it. Basketball is not for everyone');
}
var wrestled = prompt('Have you wrestled a bear ' + userName + ' ?');
if(wrestled.toLowerCase() === 'yes'){
  alert('You are brave ' + userName + '!');

} else if(wrestled.toLowerCase() === 'no'){
  alert('Good Choice ' + userName + ' !');
}


var burger= prompt('Do you like burgers ' + userName + ' ?');

if(burger.toLowerCase() === 'yes'){
  alert(userName + ' I am proud of you!');

} else if(burger.toLowerCase() === 'no'){
  alert('You are probably more of a taco person  ' + ', ' + ' huh ' + userName + ' ?');
}

var fun= prompt('Did you have fun ' + userName + ' ?');

if(fun.toLowerCase() === 'yes'){
  alert('That makes one of us ' + userName + '.');

} else if(fun.toLowerCase() === 'no'){
  alert('It was not meant to be fun ' + userName + ' ...' + ' trust me ' + '.');
}*/



//alert('I have a few more questions for ya ' + userName + '!');


/*var answer = 4;
for(var i = 0; i < 4; i++ ){
  var favoriteNum = prompt('Can you guess my favorite number? You have 4 tries!');
  if(i === 3){
    alert('out of guesses');
  } else if(favoriteNum == answer){
    alert('You Got It! ' + answer + ' is my favorite number!');
    break;
  } else if( favoriteNum > answer){
    alert('Too high!');
  } else if ( favoriteNum < answer){
    alert('Too Low');
  //} else alert('You ran out of tries');
  }
}
if( i === 4 ){
  alert('my favorite number was 4.');
} */


var answers= ['drake', 'eminem', 'snoop'];
var answerLength = answers.length;


for(var i= 0; i < 6; i++){
  if(i === 6){
    alert('out of guesses');
  }var rapper= prompt('Who are my favorite rappers?');
  if(rapper.toLowerCase()=== answers[0]){
    prompt('correct');
    break;
  } else if (rapper.toLowerCase()=== answers[1]){
    prompt('good job');
    break;
  } else if(rapper.toLowerCase()=== answers [2]){
    prompt('great!');
    break;
  } else if(rapper.toLowerCase() !== answers){
    alert('try again');
  }
}

/*for (var i = 0; i < answerLength; i++){
  alert('thanks');
}*/