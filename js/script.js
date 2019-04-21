/* global $ */
var click = {
 blackjack: false,
 deal: false,
 stand: false,
 hit: false,
 ace: false,
 bust: false,
 won: false,
 cardNum: 2,
};
var counterD1 = 0;
var aceA = {
 flip: false,
 drew: false,
};
var aceB = {
 flip: false,
 drew: false,
};
var aceC = {
 flipD: false,
 drewD: false,
 flipC: false,
 drewC: false,
 flipH: false,
 drewH: false,
 flipS: false,
 drewS: false,
};
var aces = {

};
var aceCounter = {
 numFlipped: 0,
};
var compScoreObject = {
 compScore: 0,
};
var black = {
 jack:"",
};
var comp = {
 score:0,
};
var chips = 100;
var hand = ""
var startClicked = false;
var i = "";
var run = false;
// 1, Start Button, establishes deck and runs functions///////////////////////////////////////////////////////////////////////////////////////////////////
$("#start").click(function() {
 i = 1;
 reset();
 $.ajax({
  url: "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=8",
  method: "GET",
  success: function(response) {
   var deckID = `${response.deck_id}`;
   console.log("deckID " + deckID);
   getHand(deckID);
   hit(deckID);
   compDeal(deckID);
   $("#stand").click(function() {
    if (click.stand === false && click.bust === false) {
     click.stand = true;
     compDraw(deckID);
     blackjack();
    }
   });
  }
 });
});
// 2, Deals the starting computer hand/////////////////////////////////////////////////////////////////////////////////////////////////
function compDeal(deckID) {
 var compHand = "";
 $.ajax({
   url: "https://deckofcardsapi.com/api/deck/" + deckID + "/draw/?count=1",
   method: "GET",
   success: function(response) {
    compHand = `<img class="compHandImg, face" id="compCardA" src=${response.cards[0].image}\>`;
    var compCardA = `${response.cards[0].code}`;
    var compCardBack = `<img class="compHandImgBack, face" id="compCardBack" src="https://i.imgur.com/ttV7m0M.png"\>`;
    $(".compHandImg").remove();
    $("#compHand").append(compHand);
    $("#compHand").append(compCardBack);
    var compScoreA = 0;
    if (compCardA === "2D" || compCardA === "2C" || compCardA === "2H" || compCardA === "2S") {
     compScoreA = compScoreA + 2;
     comp.score = compScoreA;
    }
    else if (compCardA === "3D" || compCardA === "3C" || compCardA === "3H" || compCardA === "3S") {
     compScoreA = compScoreA + 3;
     comp.score = compScoreA;
    }
    else if (compCardA === "4D" || compCardA === "4C" || compCardA === "4H" || compCardA === "4S") {
     compScoreA = compScoreA + 4;
     comp.score = compScoreA;
    }
    else if (compCardA === "5D" || compCardA === "5C" || compCardA === "5H" || compCardA === "5S") {
     compScoreA = compScoreA + 5;
     comp.score = compScoreA;
    }
    else if (compCardA === "6D" || compCardA === "6C" || compCardA === "6H" || compCardA === "6S") {
     compScoreA = compScoreA + 6;
     comp.score = compScoreA;
    }
    else if (compCardA === "7D" || compCardA === "7C" || compCardA === "7H" || compCardA === "7S") {
     compScoreA = compScoreA + 7;
     comp.score = compScoreA;
    }
    else if (compCardA === "8D" || compCardA === "8C" || compCardA === "8H" || compCardA === "8S") {
     compScoreA = compScoreA + 8;
     comp.score = compScoreA;
    }
    else if (compCardA === "9D" || compCardA === "9C" || compCardA === "9H" || compCardA === "9S") {
     compScoreA = compScoreA + 9;
     comp.score = compScoreA;
    }
    else if (compCardA === "0D" || compCardA === "0C" || compCardA === "0H" || compCardA === "0S") {
     compScoreA = compScoreA + 10;
     comp.score = compScoreA;
    }
    else if (compCardA === "JD" || compCardA === "JC" || compCardA === "JH" || compCardA === "JS") {
     compScoreA = compScoreA + 10;
     comp.score = compScoreA;
    }
    else if (compCardA === "QD" || compCardA === "QC" || compCardA === "QH" || compCardA === "QS") {
     compScoreA = compScoreA + 10;
     comp.score = compScoreA;
    }
    else if (compCardA === "KD" || compCardA === "KC" || compCardA === "KH" || compCardA === "KS") {
     compScoreA = compScoreA + 10;
     comp.score = compScoreA;
    }
    else if (compCardA === "AD" || compCardA === "AC" || compCardA === "AH" || compCardA === "AS") {
     compScoreA = compScoreA + 11;
     comp.score = compScoreA;
    }
    compScoreObject.compScore = compScoreA;
   },
 },
 );
}
// 3, Deals starting player hand/////////////////////////////////////////////////////////////////////////////////////////////////
function getHand(deckID) {
 var handZero = "";
 var handOne = "";
 $.ajax({
   url: "https://deckofcardsapi.com/api/deck/" + deckID + "/draw/?count=2",
   method: "GET",
   success: function(response) {
    handZero = `<img class="handImg, face" id="cardA" src=${response.cards[0].image}\>`;
    handOne = `<img class="handImg, face" id="cardB" src=${response.cards[1].image}\>`;
    var cardA = `${response.cards[0].code}`;
    var cardB = `${response.cards[1].code}`;
    $(".handImg").remove();
    $("#playerHand").append(handZero);
    $("#playerHand").append(handOne);
    var userScore = 0;
    if (cardA === "2D" || cardA === "2C" || cardA === "2H" || cardA === "2S") {
     userScore = userScore + 2;
    }
    else if (cardA === "3D" || cardA === "3C" || cardA === "3H" || cardA === "3S") {
     userScore = userScore + 3;
    }
    else if (cardA === "4D" || cardA === "4C" || cardA === "4H" || cardA === "4S") {
     userScore = userScore + 4;
    }
    else if (cardA === "5D" || cardA === "5C" || cardA === "5H" || cardA === "5S") {
     userScore = userScore + 5;
    }
    else if (cardA === "6D" || cardA === "6C" || cardA === "6H" || cardA === "6S") {
     userScore = userScore + 6;
    }
    else if (cardA === "7D" || cardA === "7C" || cardA === "7H" || cardA === "7S") {
     userScore = userScore + 7;
    }
    else if (cardA === "8D" || cardA === "8C" || cardA === "8H" || cardA === "8S") {
     userScore = userScore + 8;
    }
    else if (cardA === "9D" || cardA === "9C" || cardA === "9H" || cardA === "9S") {
     userScore = userScore + 9;
    }
    else if (cardA === "0D" || cardA === "0C" || cardA === "0H" || cardA === "0S") {
     userScore = userScore + 10;
    }
    else if (cardA === "JD" || cardA === "JC" || cardA === "JH" || cardA === "JS") {
     userScore = userScore + 10;
     black.jack = black.jack + "face";
    }
    else if (cardA === "QD" || cardA === "QC" || cardA === "QH" || cardA === "QS") {
     userScore = userScore + 10;
     black.jack = black.jack + "face";
    }
    else if (cardA === "KD" || cardA === "KC" || cardA === "KH" || cardA === "KS") {
     userScore = userScore + 10;
     black.jack = black.jack + "face";
    }
    else if (cardA === "AD" || cardA === "AC" || cardA === "AH" || cardA === "AS") {
     userScore = userScore + 11;
     aceA.drew = true;
     aceCounter.numFlipped = aceCounter.numFlipped + 1;
     black.jack = black.jack + "ace";
    }
    $("#cardA").click(function() {
     var userScore = Number($("#userPoints").text());
     if (aceA.drew === true && aceA.flip === false && click.stand === false) {
      aceA.flip = true;
      userScore = userScore - 10;
      $("#userPoints").text(userScore);
      aceCounter.numFlipped = aceCounter.numFlipped - 1;
     }
     else if (aceA.drew === true && aceA.flip === true && click.stand === false) {
      aceA.flip = false;
      userScore = userScore + 10;
      $("#userPoints").text(userScore);
      aceCounter.numFlipped = aceCounter.numFlipped + 1;
     }
    });
    if (cardB === "2D" || cardB === "2C" || cardB === "2H" || cardB === "2S") {
     userScore = userScore + 2;
    }
    else if (cardB === "3D" || cardB === "3C" || cardB === "3H" || cardB === "3S") {
     userScore = userScore + 3;
    }
    else if (cardB === "4D" || cardB === "4C" || cardB === "4H" || cardB === "4S") {
     userScore = userScore + 4;
    }
    else if (cardB === "5D" || cardB === "5C" || cardB === "5H" || cardB === "5S") {
     userScore = userScore + 5;
    }
    else if (cardB === "6D" || cardB === "6C" || cardB === "6H" || cardB === "6S") {
     userScore = userScore + 6;
    }
    else if (cardB === "7D" || cardB === "7C" || cardB === "7H" || cardB === "7S") {
     userScore = userScore + 7;
    }
    else if (cardB === "8D" || cardB === "8C" || cardB === "8H" || cardB === "8S") {
     userScore = userScore + 8;
    }
    else if (cardB === "9D" || cardB === "9C" || cardB === "9H" || cardB === "9S") {
     userScore = userScore + 9;
    }
    else if (cardB === "0D" || cardB === "0C" || cardB === "0H" || cardB === "0S") {
     userScore = userScore + 10;
    }
    else if (cardB === "JD" || cardB === "JC" || cardB === "JH" || cardB === "JS") {
     userScore = userScore + 10;
     black.jack = black.jack + "face";
    }
    else if (cardB === "QD" || cardB === "QC" || cardB === "QH" || cardB === "QS") {
     userScore = userScore + 10;
     black.jack = black.jack + "face";
    }
    else if (cardB === "KD" || cardB === "KC" || cardB === "KH" || cardB === "KS") {
     userScore = userScore + 10;
     black.jack = black.jack + "face";
    }
    else if (cardB === "AD" || cardB === "AC" || cardB === "AH" || cardB === "AS") {
     userScore = userScore + 11;
     aceB.drew = true;
     aceCounter.numFlipped = aceCounter.numFlipped + 1;
     black.jack = black.jack + "ace";
    }
    $("#cardB").click(function() {
     var userScore = Number($("#userPoints").text());
     if (aceB.drew === true && aceB.flip === false && click.stand === false) {
      aceB.flip = true;
      userScore = userScore - 10;
      $("#userPoints").text(userScore);
      aceCounter.numFlipped = aceCounter.numFlipped - 1;
     }
     else if (aceB.drew === true && aceB.flip === true && click.stand === false) {
      aceB.flip = false;
      userScore = userScore + 10;
      $("#userPoints").text(userScore);
      aceCounter.numFlipped = aceCounter.numFlipped + 1;
     }
    });
    $("#userPoints").text(userScore);
   },
  },
 );
}
// 4, Resets all variables/////////////////////////////////////////////////////////////////////////////////////////////////
function reset() {
 var compWon = false;
 var userWon = false;
 comp.score = 0;
 click.blackjack = false;
 black.jack = "";
 click.cardNum = 2,
 click.won = false;
 click.stand = false;
 click.deal = true;
 click.hit = false;
 click.ace = false;
 click.bust = false;
 aceA.flip = false;
 aceA.drew = false;
 aceB.flip = false;
 aceB.drew = false;
 aceC.flipD = false,
 aceC.drewD = false,
 aceC.flipC = false,
 aceC.drewC = false,
 aceC.flipH = false,
 aceC.drewH = false,
 aceC.flipS = false,
 aceC.drewS = false,
 aceCounter.numFlipped = 0,
 compScoreObject.compScore = 0,
 run = false;
  i = 0;
 $(".face").remove();
 $(".cardC").remove();
  $(".ace").remove();
 $("#winner").text("");
 $("#compPoints").text("");
 $("#comma").text("");
 var userScoreHit = 0;
 var userScore = 0;
 var handZero = "";
 var handOne = "";
 var handTwo = "";
 var cardAScore = 0;
 var cardBScore = 0;
 var cardCScore = 0;
}
// 5, Gives player additional cards/////////////////////////////////////////////////////////////////////////////////////////////////
function hit(deckID) {
 $("#hit").click(function() {
  if (click.stand === false && click.deal === true && click.hit === false && click.bust === false) {
   click.hit = true;
   click.cardNum = click.cardNum + 1;
   var userScoreHit = 0;
   var handTwo = "";
   var userPointsVal;
   $.ajax({
    url: "https://deckofcardsapi.com/api/deck/" + deckID + "/draw/?count=1",
    method: "GET",
    success: function(response) {
     var cardC = `${response.cards[0].code}`;
     if (cardC != "AD" && cardC != "AC" && cardC != "AH" && cardC != "AS") {
      handTwo = `<img class="handImg, face, cardC" src=${response.cards[0].image}\>`;
      $("#playerHand").append(handTwo);
     }
     cardC = `${response.cards[0].code}`;
     if (cardC === "2D" || cardC === "2C" || cardC === "2H" || cardC === "2S") {
      userScoreHit = userScoreHit + 2;
     }
     else if (cardC === "3D" || cardC === "3C" || cardC === "3H" || cardC === "3S") {
      userScoreHit = userScoreHit + 3;
     }
     else if (cardC === "4D" || cardC === "4C" || cardC === "4H" || cardC === "4S") {
      userScoreHit = userScoreHit + 4;
     }
     else if (cardC === "5D" || cardC === "5C" || cardC === "5H" || cardC === "5S") {
      userScoreHit = userScoreHit + 5;
     }
     else if (cardC === "6D" || cardC === "6C" || cardC === "6H" || cardC === "6S") {
      userScoreHit = userScoreHit + 6;
     }
     else if (cardC === "7D" || cardC === "7C" || cardC === "7H" || cardC === "7S") {
      userScoreHit = userScoreHit + 7;
     }
     else if (cardC === "8D" || cardC === "8C" || cardC === "8H" || cardC === "8S") {
      userScoreHit = userScoreHit + 8;
     }
     else if (cardC === "9D" || cardC === "9C" || cardC === "9H" || cardC === "9S") {
      userScoreHit = userScoreHit + 9;
     }
     else if (cardC === "0D" || cardC === "0C" || cardC === "0H" || cardC === "0S") {
      userScoreHit = userScoreHit + 10;
     }
     else if (cardC === "JD" || cardC === "JC" || cardC === "JH" || cardC === "JS") {
      userScoreHit = userScoreHit + 10;
     }
     else if (cardC === "QD" || cardC === "QC" || cardC === "QH" || cardC === "QS") {
      userScoreHit = userScoreHit + 10;
     }
     else if (cardC === "KD" || cardC === "KC" || cardC === "KH" || cardC === "KS") {
      userScoreHit = userScoreHit + 10;
     }
     else if (cardC === "AD" || cardC === "AC" || cardC === "AH" || cardC === "AS") {
      i = i + 1;
      aceCounter.numFlipped = aceCounter.numFlipped + 1;
      handTwo = `<img class="ace" id="ace-${i}" src=${response.cards[0].image}\>`;
      var cardImg = $("#playerHand").append(handTwo);
       aces[`ace-${i}`] = true;
      bust();
      $(`#ace-${i}`).click(function() {
       var aceID = $(this).attr('id');
       var userScore = Number($("#userPoints").text());
       if (aces[aceID] === false) {
        click.ace = true;
        userScore = userScore + 10;
        click.ace = false;
        aceCounter.numFlipped = aceCounter.numFlipped + 1;
       }
       if (aces[aceID] === true) {
        click.ace = true;
        userScore = userScore - 10;
        click.ace = false;
        aceCounter.numFlipped = aceCounter.numFlipped - 1;
       }
       aces[aceID] = !(aces[aceID]);
       $("#userPoints").text(userScore);
      });
      userScoreHit = userScoreHit + 11;
      aceC.drew = true;
      bust();
     }
     userPointsVal = Number($("#userPoints").text());
     $("#userPoints").text(userPointsVal + userScoreHit);
     bust();
     click.hit = false;
     $(".cardC").click(function() {
      var userScore = Number($("#userPoints").text());
      if (aceC.drew === true && aceC.flip === false && click.stand === false) {
       aceC.flip = true;
       userScore = userScore - 10;
       $("#userPoints").text(userScore);
      }
      else if (aceC.drew === true && aceC.flip === true && click.stand === false) {
       aceC.flip = false;
       userScore = userScore + 10;
       $("#userPoints").text(userScore);
      }
     });
    },
   }, );
  }
 });
}
// 6, Computer rules for playing/////////////////////////////////////////////////////////////////////////////////////////////////
function compDraw(deckID) {
 $(".compHandImg").remove();
  $("#compCardBack").remove();
 var compScore = compScoreObject.compScore;
 var compCardID = "";
 var compCardImg = "";
 var i = -1;
 var aceCounter = 0;
 var aceFlipped = false;
 $.ajax({
  url: "https://deckofcardsapi.com/api/deck/" + deckID + "/draw/?count=8",
  method: "GET",
  success: function(response) {
   while (compScore < 17 && i < 8) {
    i = i + 1;
    compCardImg = `<img class="compHandImg, face" src=${response.cards[i].image}\>`;
    compCardID = `${response.cards[i].code}`;
    $("#compHand").append(compCardImg);
    if (compCardID === "2D" || compCardID === "2C" || compCardID === "2H" || compCardID === "2S") {
     compScore = compScore + 2;
     comp.score = compScore;
    }
    else if (compCardID === "3D" || compCardID === "3C" || compCardID === "3H" || compCardID === "3S") {
     compScore = compScore + 3;
     comp.score = compScore;
    }
    else if (compCardID === "4D" || compCardID === "4C" || compCardID === "4H" || compCardID === "4S") {
     compScore = compScore + 4;
     comp.score = compScore;
    }
    else if (compCardID === "5D" || compCardID === "5C" || compCardID === "5H" || compCardID === "5S") {
     compScore = compScore + 5;
     comp.score = compScore;
    }
    else if (compCardID === "6D" || compCardID === "6C" || compCardID === "6H" || compCardID === "6S") {
     compScore = compScore + 6;
     comp.score = compScore;
    }
    else if (compCardID === "7D" || compCardID === "7C" || compCardID === "7H" || compCardID === "7S") {
     compScore = compScore + 7;
     comp.score = compScore;
    }
    else if (compCardID === "8D" || compCardID === "8C" || compCardID === "8H" || compCardID === "8S") {
     compScore = compScore + 8;
     comp.score = compScore;
    }
    else if (compCardID === "9D" || compCardID === "9C" || compCardID === "9H" || compCardID === "9S") {
     compScore = compScore + 9;
     comp.score = compScore;
    }
    else if (compCardID === "0D" || compCardID === "0C" || compCardID === "0H" || compCardID === "0S") {
     compScore = compScore + 10;
     comp.score = compScore;
    }
    else if (compCardID === "JD" || compCardID === "JC" || compCardID === "JH" || compCardID === "JS") {
     compScore = compScore + 10;
     comp.score = compScore;
    }
    else if (compCardID === "QD" || compCardID === "QC" || compCardID === "QH" || compCardID === "QS") {
     compScore = compScore + 10;
     comp.score = compScore;
    }
    else if (compCardID === "KD" || compCardID === "KC" || compCardID === "KH" || compCardID === "KS") {
     compScore = compScore + 10;
     comp.score = compScore;
    }
    else if (compCardID === "AD" || compCardID === "AC" || compCardID === "AH" || compCardID === "AS") {
     compScore = compScore + 11;
     comp.score = compScore;
     aceCounter = aceCounter + 1;
     aceFlipped = false;
    }
    if (compScore - 10 < 22 && compScore > 21 && aceCounter > 0 && aceFlipped === false) {
     compScore = compScore - 10;
     aceCounter = aceCounter - 1;
     aceFlipped = true;
    }
    else if (compScore + 10 < 22 && aceCounter > 0 && aceFlipped === true) {
     compScore = compScore + 10;
     aceCounter = aceCounter - 1;
     aceFlipped = false;
    }
    victor(compScore)
   }
  },
 }, );

}
$("#compHand").append();
// 7, function decides who won/////////////////////////////////////////////////////////////////////////////////////////////////
function victor(compScore) {
 chips = Number($("#money").text());
 var userPointsVal = Number($("#userPoints").text());
 if (userPointsVal > compScore && userPointsVal < 22) {
  $("#winner").text(", you won!");
  $("#compPoints").text("VS " + compScore);
  var userWon = true;
  won(userWon);
 }
 else if (userPointsVal < 22 && compScore > 21 && run === false && click.blackjack === false) {
  run = true;
  $("#winner").text(", you won!");
  $("#compPoints").text("VS " + compScore);
  console.log("user2");
  var userWon = true;
  won(userWon);
 }
 // else if(compScore > userPointsVal && compScore < 22 && run === false){
 //  run = true;
 //  $("#winner").text(", the dealer won!");
 //  $("#compPoints").text(" VS " + compScore);
 //  chips = Number($("#money").text());
 //  chips = chips - 5;
 //  console.log(chips);
 //  $("#money").text(chips);
 //  console.log("yeetyaw2");
 // }
 else if(run === false){
  var blackjack = black.jack;
  if(blackjack != "faceace" && blackjack != "aceface"){
  $("#winner").text(", the dealer won!");
  $("#compPoints").text(" VS " + compScore);
  var compWon = true;
  lost(compWon);
  }
 }
}
// 8, function detects if player busted/////////////////////////////////////////////////////////////////////////////////////////////////
function bust(deckID){
 var num=aceCounter.numFlipped*10;
 if(Number($("#userPoints").text())-num > 21 && Number($("#userPoints").text())>21){
  click.bust = true;
  $("#comma").text(",");
  $("#compPoints").text("the dealer won!");
  chips = Number($("#money").text());
  chips = chips - 5;
  $("#money").text(chips);
 }
}
function lost(compWon){
 if(click.won === false && compWon === true){
  compWon = false;
  chips = Number($("#money").text());
  chips = chips - 5;
  console.log(chips);
  $("#money").text(chips);
  click.won = true;
 }
 click.won = true;
}
function won(userWon){
 if(click.won === false && userWon === true){
 userWon = false;
 chips = Number($("#money").text());
 chips = chips + 5;
 $("#money").text(chips);
 click.won = true;
}
 click.won = true;
}

function blackjack(){
 var score = Number($("#userPoints").text());
 var blackjack = black.jack;
 if(click.cardNum === 2 && click.won === false && score === 21){
  if(blackjack === "faceace" || blackjack === "aceface"){
   console.log("blackjack");
   chips = Number($("#money").text());
   chips = chips + 10;
   $("#money").text(chips);
   click.won = true;
   click.blackjack = true;
   blackjack = "";
   $("#compPoints").text(", ");
   $("#winner").text("you won!");
  }
 }
}