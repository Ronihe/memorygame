//start the game and Store the lowest-scoring game in local storage
//  randomly assign the pics to different blocks, using math.random

// set the click = 0, every click click++, and set the card as "clicked", user can not click it again, change the class of the card when the card the flipped
//set n = 0, flip the card on click, n++, when n===2, if the same, stay flipped, if not stay flipped for one second and flip;

// loop until all flipped



// let start = {

//   pics : [],

// // pass in the pics, and make the game page;

//   shuffleCards : function(){
//     this.pics

//   }

// };

// let play = {

//   flip: function(){

//   },

//   match: function(){


//   },



// }

var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});