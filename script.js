/* global $ */
$("#start").click(function(){
    console.log("works");
});
$.ajax({
    url: "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1",
    method: "GET",
    success: function(response) {
        var deckID = `${response.deck_id}`;
        console.log(deckID);
        //$("#playerHand").append(`<img src="${response.data[0].images.original.url}">`);
        },
});
