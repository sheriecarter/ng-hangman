console.log('app.js loaded!');

// initialize the application
var app = angular.module("hangmanApp", []);
app.controller("hangmanCtrl", hangmanCtrl);

function hangmanCtrl(){
  var vm= this;
 this.game=new HangmanGame('elephant');

 vm.guessLetter = function() {
   // guess the letter
vm.game.guess(vm.userInput)

   // clear the input
   vm.userInput="";
 }
}
