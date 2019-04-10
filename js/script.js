/* global $ */
var hand = ""
$("#start").click(function(){
var userScore = 0;
var handZero = "";
var handOne = "";
    $.ajax({
    url: "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=8",
    method: "GET",
     success: function(response) {
         var deckID = `${response.deck_id}`;
         console.log(deckID);
         getHand(deckID);
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
         $(".handImg").remove();
         $("#playerHand").append(handZero);
         $("#playerHand").append(handOne);
          }, 
},
)}

$("#instruction").click(function(){
 $("#instruction").alert("The rules are as follow");
});

function userScoreFunc(){
 var userScore = 0;
 var cardA = `${response.cards[0].code}`
 var cardB = `${response.cards[1].code}`
 if(cardA === "1D" || "1C" || "1H" || "1S"){
  userScore = userScore +1;
 }
 if(cardA === "2D" || "2C" || "2H" || "2S"){
  userScore = userScore +2;
 } 
 if(cardA === "3D" || "3C" || "3H" || "3S"){
  userScore = userScore +3;
 }
 if(cardA === "4D" || "4C" || "4H" || "4S"){
  userScore = userScore +4;
 }
 if(cardA === "5D" || "5C" || "5H" || "5S"){
  userScore = userScore +5;
 } 
 if(cardA === "6D" || "6C" || "6H" || "6S"){
  userScore = userScore +6;
 } 
 if(cardA === "7D" || "7C" || "7H" || "7S"){
  userScore = userScore +7;
 } 
 if(cardA === "8D" || "8C" || "8H" || "8S"){
  userScore = userScore +8;
 } 
 if(cardA === "9D" || "9C" || "9H" || "9S"){
  userScore = userScore +9;
 } 
 if(cardA === "JD" || "JC" || "JH" || "JS"){
  userScore = userScore +10;
 }
 if(cardA === "QD" || "QC" || "QH" || "QS"){
  userScore = userScore +10;
 } 
 if(cardA === "KD" || "KC" || "KH" || "KS"){
  userScore = userScore +10;
 } 
 if(cardA === "AD" || "AC" || "AH" || "AS"){
  userScore = userScore +11;
 }
 
 
 
 if(cardB === "1D" || "1C" || "1H" || "1S"){
  userScore = userScore +1;
 }
 if(cardB === "2D" || "2C" || "2H" || "2S"){
  userScore = userScore +2;
 } 
 if(cardB === "3D" || "3C" || "3H" || "3S"){
  userScore = userScore +3;
 }
 if(cardB === "4D" || "4C" || "4H" || "4S"){
  userScore = userScore +4;
 }
 if(cardB === "5D" || "5C" || "5H" || "5S"){
  userScore = userScore +5;
 } 
 if(cardB === "6D" || "6C" || "6H" || "6S"){
  userScore = userScore +6;
 } 
 if(cardB === "7D" || "7C" || "7H" || "7S"){
  userScore = userScore +7;
 } 
 if(cardB === "8D" || "8C" || "8H" || "8S"){
  userScore = userScore +8;
 } 
 if(cardB === "9D" || "9C" || "9H" || "9S"){
  userScore = userScore +9;
 } 
 if(cardB === "JD" || "JC" || "JH" || "JS"){
  userScore = userScore +10;
 }
 if(cardB === "QD" || "QC" || "QH" || "QS"){
  userScore = userScore +10;
 } 
 if(cardB === "KD" || "KC" || "KH" || "KS"){
  userScore = userScore +10;
 } 
 if(cardB === "AD" || "AC" || "AH" || "AS"){
  userScore = userScore +11;
 }
 console.log(userScore);
 $("#userHTML").append("works");
}








//   link to api site ---> https://deckofcardsapi.com/