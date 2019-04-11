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
         userScoreFunc();
         $("userPoints").text("help");
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
         if(cardA === "1D" ||cardA === "1C" || cardA === "1H" ||cardA === "1S"){
  userScore = userScore +1;
 }
 if(cardA === "2D" ||cardA === "2C" ||cardA === "2H" ||cardA === "2S"){
  userScore = userScore +2;
 } 
 if(cardA === "3D" ||cardA === "3C" ||cardA === "3H" ||cardA === "3S"){
  userScore = userScore +3;
 }
 if(cardA === "4D" ||cardA === "4C" ||cardA === "4H" ||cardA === "4S"){
  userScore = userScore +4;
 }
 if(cardA === "5D" ||cardA === "5C" ||cardA === "5H" ||cardA === "5S"){
  userScore = userScore +5;
 } 
 if(cardA === "6D" ||cardA === "6C" ||cardA === "6H" ||cardA === "6S"){
  userScore = userScore +6;
 } 
 if(cardA === "7D" ||cardA === "7C" ||cardA === "7H" ||cardA === "7S"){
  userScore = userScore +7;
 } 
 if(cardA === "8D" ||cardA === "8C" ||cardA === "8H" ||cardA === "8S"){
  userScore = userScore +8;
 } 
 if(cardA === "9D" ||cardA === "9C" ||cardA === "9H" ||cardA === "9S"){
  userScore = userScore +9;
 } 
 if(cardA === "JD" ||cardA === "JC" ||cardA === "JH" ||cardA === "JS"){
  userScore = userScore +10;
 }
 if(cardA === "QD" ||cardA === "QC" ||cardA === "QH" ||cardA === "QS"){
  userScore = userScore +10;
 } 
 if(cardA === "KD" ||cardA === "KC" ||cardA === "KH" ||cardA === "KS"){
  userScore = userScore +10;
 } 
 if(cardA === "AD" ||cardA === "AC" ||cardA === "AH" ||cardA === "AS"){
  userScore = userScore +11;
 }
 
 
 
 if(cardB === "1D" ||cardB === "1C" ||cardB === "1H" ||cardB === "1S"){
  userScore = userScore +1;
 }
 if(cardB === "2D" ||cardB === "2C" ||cardB === "2H" ||cardB === "2S"){
  userScore = userScore +2;
 } 
 if(cardB === "3D" ||cardB === "3C" ||cardB === "3H" ||cardB === "3S"){
  userScore = userScore +3;
 }
 if(cardB === "4D" ||cardB === "4C" ||cardB === "4H" ||cardB === "4S"){
  userScore = userScore +4;
 }
 if(cardB === "5D" ||cardB === "5C" ||cardB === "5H" ||cardB === "5S"){
  userScore = userScore +5;
 } 
 if(cardB === "6D" ||cardB === "6C" ||cardB === "6H" ||cardB === "6S"){
  userScore = userScore +6;
 } 
 if(cardB === "7D" ||cardB === "7C" ||cardB === "7H" ||cardB === "7S"){
  userScore = userScore +7;
 } 
 if(cardB === "8D" ||cardB === "8C" ||cardB === "8H" ||cardB === "8S"){
  userScore = userScore +8;
 } 
 if(cardB === "9D" ||cardB === "9C" ||cardB === "9H" ||cardB === "9S"){
  userScore = userScore +9;
 } 
 if(cardB === "JD" ||cardB === "JC" ||cardB === "JH" ||cardB === "JS"){
  userScore = userScore +10;
 }
 if(cardB === "QD" ||cardB === "QC" ||cardB === "QH" ||cardB === "QS"){
  userScore = userScore +10;
 } 
 if(cardB === "KD" ||cardB === "KC" ||cardB === "KH" ||cardB === "KS"){
  userScore = userScore +10;
 } 
 if(cardB === "AD" ||cardB === "AC" ||cardB === "AH" ||cardB === "AS"){
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

function userScoreFunc(){
 var userScore = 0;
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
 console.log("func");
 console.log(userScore);
$("#userPoints").text(userScore);
}








//   link to api site ---> https://deckofcardsapi.com/