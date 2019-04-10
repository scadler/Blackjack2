/* global $ */

$("#start").click(function(){
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
 console.log(deckID);
 $.ajax({
    url: "https://deckofcardsapi.com/api/deck/"+ deckID +"/draw/?count=2",
    method: "GET",
    success: function(response){
         $("#playerHand").append(`<img src=${response.cards[0].image}\>`)
         $("#playerHand").append(`<img src=${response.cards[1].image}\>`);
         }, 
},
)}


//   link to api site ---> https://deckofcardsapi.com/