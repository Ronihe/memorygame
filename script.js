
let flipped = 0; // if the flipped is 24, the user won!
let totalClick = 0; // the total clicks, can be saved in the local storage
let cards = document.querySelectorAll(".card");
let flipCount = 0; // max is 2
let subFlipped = [];// two cards to match

// pics in the game board
let pics = ["pics/1.gif", "pics/2.gif", "pics/3.gif", "pics/4.gif", "pics/5.jpg", "pics/6.gif", "pics/1.gif", "pics/2.gif", "pics/3.gif", "pics/4.gif", "pics/5.jpg", "pics/6.gif", "pics/1.gif", "pics/2.gif", "pics/3.gif", "pics/4.gif", "pics/5.jpg", "pics/6.gif", "pics/1.gif", "pics/2.gif", "pics/3.gif", "pics/4.gif", "pics/5.jpg", "pics/6.gif"];

//shuffle the cards
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// locate the shuffled cards to different blocks
function locatePic(){
  let shuffledCards = shuffle(pics);
  cards.forEach((card, idx) => {
    card.getElementsByTagName("img")[0].src = shuffledCards[idx];
    });
}

// click the start key to make the game start
function start(){
  flipped = 0;
  totalClick = 0;
  flipCount = 0;
  subFlipped = [];
  locatePic();
  viewTotal();
  location.href="#page2";
  cards.forEach(card => {
    if(card.classList.contains("is-flipped")){
      toggleCard(card);
    }
    card.addEventListener( "click", function(){
      //card.classList.remove("is-flipped");
      // // toggleCard(card);
      // card.
      flip(card);
    });  
  }); 
}

//flip the card
function toggleCard(card){
  card.classList.toggle("is-flipped");
}

//Win alert!
function win(){
  if (flipped === 24){
      alert("You Win!")
  }
}

//flip the card.
function flip(card){  
  if(flipCount === 0){
    if(card.classList.contains("is-flipped")){
      return;
    }else{
    toggleCard(card);
    flipCount++;
    totalClick++;
    subFlipped.push(card);
    viewTotal()}
  }else if(flipCount === 1){
    if(card.classList.contains("is-flipped")){
      return;
    }else{
      toggleCard(card);
      subFlipped.push(card);
      totalClick++;
      flipCount++;
      viewTotal();
      check();
    }
  }else if (flipCount === 2){
    return;
  }
}

//flip the cards back if they are matching
  function flipCards() {
    subFlipped.forEach(function(el){
      toggleCard(el); 
    });
    flipCount = 0;
    subFlipped = [];
  }

  // check the two cards 
  function check(){
    if(subFlipped[0].getElementsByTagName("img")[0].src === subFlipped[1].getElementsByTagName("img")[0].src){
      flipped += 2;
      win();// check if the user wins
      flipCount = 0;
      subFlipped = [];
    }else{
      console.log(subFlipped);
      window.setTimeout(function () { flipCards() }, 1000)
  }
}

//view the Total clicks
  function viewTotal(){
    document.getElementById("totalClicks").innerText=totalClick;
  }

//local storage;


