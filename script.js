//start the game and Store the lowest-scoring game in local storage
//  randomly assign the pics to different blocks, using math.random

// set the click = 0, every click click++, and set the card as "clicked", user can not click it again, change the class of the card when the card the flipped
//set n = 0, flip the card on click, n++, when n===2, if the same, stay flipped, if not stay flipped for one second and flip;

// loop until all flipped



// let start = {

//   pics : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],

//   shuffleCards : function(){
//     let imgs = document.getElementsByClassName("");

//     imgs.forEach(function(val, idx){
//       val

//     })


//     this.pics

//   }

// // };

// let play = {


//   flipped: [],

//   flipped

//   flip: function(){



//   },

//   match: function(){


//   },

//   ClickOnce: function(){


//   },

//   check: function(){

//   }
// }




let flipped = 0;
let totalClick = 0;
let cards = document.querySelectorAll(".card");

// max is 2
let flipCount = 0;
let subFlipped = [];



function start (){
  cards.forEach(card => {
    card.addEventListener( "click", function(){
      // toggleCard(card);
      flip(card);
    });  
  }); 
}

function toggleCard(card){
  card.classList.toggle("is-flipped");
}

function win(){
  if (flipped === 24){
      alert("You Win!")
  }
}

function flip(card){
  
  if(flipCount === 0){
    if(card.classList.contains("is-flipped")){
      card.removeEventListener("click", toggleCard);
    }else{
    toggleCard(card);
    flipCount++;
    totalClick++;
    subFlipped.push(card);
    viewTotal();}
  }else if(flipCount === 1){
    if(card.classList.contains("is-flipped")){
      card.removeEventListener("click", toggleCard);
    }else{
      toggleCard(card);
      subFlipped.push(card);
      totalClick++;
      viewTotal();
      check();
      flipCount = 0;
      subFlipped = [];
    }
  }

  console.log(flipCount, subFlipped);
  
  
  }
  
  function check(){
    console.log(subFlipped[0].getElementsByTagName("img")[0].src === subFlipped[1].getElementsByTagName("img")[0].src);
    if(subFlipped[0].getElementsByTagName("img")[0].src === subFlipped[1].getElementsByTagName("img")[0].src){
    flipped += 2;
    console.log(flipped);
    win();
   }else{

  window.setTimeout(subFlipped.forEach(function(el){
    toggleCard(el);
  }),1000);
  }
}


  function viewTotal(){
    document.getElementById("totalClicks").innerText=totalClick;
  }
