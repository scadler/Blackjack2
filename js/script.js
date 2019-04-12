/* global $ */
var hand = ""
var startClicked = false;
$("#start").click(function(){
var userScore = 0;
var handZero = "";
var handOne = "";
var cardAScore = 0;
var cardBScore = 0;
var cardCScore = 0;
    $.ajax({
    url: "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=8",
    method: "GET",
     success: function(response) {
         var deckID = `${response.deck_id}`;
         console.log(deckID);
         getHand(deckID);
         hit(deckID);
         $("userPoints").text("help");
         $("#stand").click(function(){
          compDraw(deckID);
         });
     } 
 });
});

function getHand(deckID){
  var handZero = "";
  var handOne = "";
 console.log(deckID);
 $.ajax({
    url: "https://deckofcardsapi.com/api/deck/"+ deckID +"/draw/?count=2",
    method: "GET",
    success: function(response){
     handZero = `<img class="handImg" src=${response.cards[0].image}\>`;
     handOne = `<img class="handImg" src=${response.cards[1].image}\>`;
     var cardA = `${response.cards[0].code}`;
     var cardB = `${response.cards[1].code}`;
     console.log(cardA);
         $(".handImg").remove();
         $("#playerHand").append(handZero);
         $("#playerHand").append(handOne);
         var userScore = 0;
         console.log(cardA);
         console.log(cardB);
 if(cardA === "2D" ||cardA === "2C" ||cardA === "2H" ||cardA === "2S"){
  userScore = userScore +2;
 } 
 else if(cardA === "3D" ||cardA === "3C" ||cardA === "3H" ||cardA === "3S"){
  userScore = userScore +3;
 }
 else if(cardA === "4D" ||cardA === "4C" ||cardA === "4H" ||cardA === "4S"){
  userScore = userScore +4;
 }
 else if(cardA === "5D" ||cardA === "5C" ||cardA === "5H" ||cardA === "5S"){
  userScore = userScore +5;
 } 
 else if(cardA === "6D" ||cardA === "6C" ||cardA === "6H" ||cardA === "6S"){
  userScore = userScore +6;
 } 
 else if(cardA === "7D" ||cardA === "7C" ||cardA === "7H" ||cardA === "7S"){
  userScore = userScore +7;
 } 
 else if(cardA === "8D" ||cardA === "8C" ||cardA === "8H" ||cardA === "8S"){
  userScore = userScore +8;
 } 
 else if(cardA === "9D" ||cardA === "9C" ||cardA === "9H" ||cardA === "9S"){
  userScore = userScore +9;
 }
 else if(cardA === "0D" ||cardA === "0C" ||cardA === "0H" ||cardA === "0S"){
  userScore = userScore +10;
 } 
 else if(cardA === "JD" ||cardA === "JC" ||cardA === "JH" ||cardA === "JS"){
  userScore = userScore +10;
 }
 else if(cardA === "QD" ||cardA === "QC" ||cardA === "QH" ||cardA === "QS"){
  userScore = userScore +10;
 } 
 else if(cardA === "KD" ||cardA === "KC" ||cardA === "KH" ||cardA === "KS"){
  userScore = userScore +10;
 } 
 else if(cardA === "AD" ||cardA === "AC" ||cardA === "AH" ||cardA === "AS"){
  userScore = userScore +11;
 }
 
 
 
 if(cardB === "2D" || cardB === "2C" || cardB === "2H" || cardB === "2S"){
  userScore = userScore +2;
 } 
 else if(cardB === "3D" || cardB === "3C" || cardB === "3H" || cardB === "3S"){
  userScore = userScore +3;
 }
 else if(cardB === "4D" || cardB === "4C" || cardB === "4H" || cardB === "4S"){
  userScore = userScore +4;
 }
 else if(cardB === "5D" ||cardB === "5C" ||cardB === "5H" ||cardB === "5S"){
  userScore = userScore +5;
 } 
 else if(cardB === "6D" ||cardB === "6C" ||cardB === "6H" ||cardB === "6S"){
  userScore = userScore +6;
 } 
 else if(cardB === "7D" ||cardB === "7C" ||cardB === "7H" ||cardB === "7S"){
  userScore = userScore +7;
 } 
 else if(cardB === "8D" ||cardB === "8C" ||cardB === "8H" ||cardB === "8S"){
  userScore = userScore +8;
 } 
 else if(cardB === "9D" ||cardB === "9C" ||cardB === "9H" ||cardB === "9S"){
  userScore = userScore +9;
 }
 else if(cardB === "0D" ||cardB === "0C" ||cardB === "0H" ||cardB === "0S"){
  userScore = userScore +10;
 }
 else if(cardB === "JD" ||cardB === "JC" ||cardB === "JH" ||cardB === "JS"){
  userScore = userScore +10;
 }
 else if(cardB === "QD" ||cardB === "QC" ||cardB === "QH" ||cardB === "QS"){
  userScore = userScore +10;
 } 
 else if(cardB === "KD" ||cardB === "KC" ||cardB === "KH" ||cardB === "KS"){
  userScore = userScore +10;
 } 
 else if(cardB === "AD" ||cardB === "AC" ||cardB === "AH" ||cardB === "AS"){
  userScore = userScore +11;
 }
 console.log("func");
 console.log(userScore);
$("#userPoints").text(userScore);
          }, 
},

)}

$("#instruction").click(function(){
 $("#instruction").alert("The rules are as follow");
});

function hit(deckID){
$("#hit").click(function(){
console.log("hit");
var userScoreHit = 0;
var handTwo = "";
var userPointsVal;
$.ajax({
    url: "https://deckofcardsapi.com/api/deck/"+ deckID +"/draw/?count=1",
    method: "GET",
    success: function(response){
     handTwo = `<img class="handImg" src=${response.cards[0].image}\>`;
     $("#playerHand").append(handTwo);
     var cardC = `${response.cards[0].code}`;
if(cardC === "2D" || cardC === "2C" || cardC === "2H" || cardC === "2S"){
  userScoreHit = userScoreHit +2;
 } 
 else if(cardC === "3D" || cardC === "3C" || cardC === "3H" || cardC === "3S"){
  userScoreHit = userScoreHit +3;
 }
 else if(cardC === "4D" || cardC === "4C" || cardC === "4H" || cardC === "4S"){
  userScoreHit = userScoreHit +4;
 }
 else if(cardC === "5D" ||cardC === "5C" ||cardC === "5H" ||cardC === "5S"){
  userScoreHit = userScoreHit +5;
 } 
 else if(cardC === "6D" ||cardC === "6C" ||cardC === "6H" ||cardC === "6S"){
  userScoreHit = userScoreHit +6;
 } 
 else if(cardC === "7D" ||cardC === "7C" ||cardC === "7H" ||cardC === "7S"){
  userScoreHit = userScoreHit +7;
 } 
 else if(cardC === "8D" ||cardC === "8C" ||cardC === "8H" ||cardC === "8S"){
  userScoreHit = userScoreHit +8;
 } 
 else if(cardC === "9D" ||cardC === "9C" ||cardC === "9H" ||cardC === "9S"){
  userScoreHit = userScoreHit +9;
 }
 else if(cardC === "0D" ||cardC === "0C" ||cardC === "0H" ||cardC === "0S"){
  userScoreHit = userScoreHit +10;
 }
 else if(cardC === "JD" ||cardC === "JC" ||cardC === "JH" ||cardC === "JS"){
  userScoreHit = userScoreHit +10;
 }
 else if(cardC === "QD" ||cardC === "QC" ||cardC === "QH" ||cardC === "QS"){
  userScoreHit = userScoreHit +10;
 } 
 else if(cardC === "KD" ||cardC === "KC" ||cardC === "KH" ||cardC === "KS"){
  userScoreHit = userScoreHit +10;
 } 
 else if(cardC === "AD" ||cardC === "AC" ||cardC === "AH" ||cardC === "AS"){
  userScoreHit = userScoreHit +11;
 }
 userPointsVal = Number($("#userPoints").text());
 $("#userPoints").text(userPointsVal + userScoreHit);
    },
},
)}
);
}
$("#userPoints").text(userScore);

function compDraw(deckID){
$.ajax({
    url: "https://deckofcardsapi.com/api/deck/"+ deckID +"/draw/?count=1",
    method: "GET",
    success: function(response){
     var handComp = `<img class="handImg" src=${response.cards[0].image}\>`;
     $("#playerHand").append(handComp);
     var cardComp = `${response.cards[0].code}`;
     
 if(cardComp === "2D" || cardComp === "2C" || cardComp === "2H" || cardComp === "2S"){
  compScore = compScore +2;
 } 
 else if(cardComp === "3D" || cardComp === "3C" || cardComp === "3H" || cardComp === "3S"){
  compScore = compScore +3;
 }
 else if(cardComp === "4D" || cardComp === "4C" || cardComp === "4H" || cardComp === "4S"){
  compScore = compScore +4;
 }
 else if(cardComp === "5D" ||cardComp === "5C" ||cardComp === "5H" ||cardComp === "5S"){
  compScore = compScore +5;
 } 
 else if(cardComp === "6D" ||cardComp === "6C" ||cardComp === "6H" ||cardComp === "6S"){
  compScore = compScore +6;
 } 
 else if(cardComp === "7D" ||cardComp === "7C" ||cardComp === "7H" ||cardComp === "7S"){
  compScore = compScore +7;
 } 
 else if(cardComp === "8D" ||cardComp === "8C" ||cardComp === "8H" ||cardComp === "8S"){
  compScore = compScore +8;
 } 
 else if(cardComp === "9D" ||cardComp === "9C" ||cardComp === "9H" ||cardComp === "9S"){
  compScore = compScore +9;
 }
 else if(cardComp === "0D" ||cardComp === "0C" ||cardComp === "0H" ||cardComp === "0S"){
  compScore = compScore +10;
 }
 else if(cardComp === "JD" ||cardComp === "JC" ||cardComp === "JH" ||cardComp === "JS"){
  compScore = compScore +10;
 }
 else if(cardComp === "QD" ||cardComp === "QC" ||cardComp === "QH" ||cardComp === "QS"){
  compScore = compScore +10;
 } 
 else if(cardComp === "KD" ||cardComp === "KC" ||cardComp === "KH" ||cardComp === "KS"){
  compScore = compScore +10;
 } 
 else if(cardComp === "AD" ||cardComp === "AC" ||cardComp === "AH" ||cardComp === "AS"){
  compScore = compScore +11;
 }
    },
},
)}
//   link to api site ---> https://deckofcardsapi.com/