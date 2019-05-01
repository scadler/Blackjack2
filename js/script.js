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
 jack: "",
};
var comp = {
 score: 0,
};
var chips = 100;
var hand = ""
var startClicked = false;
var i = "";
var run = false;

function getScore(card) {
 if (card === "2D" || card === "2C" || card === "2H" || card === "2S") {
  return 2;
 }
 else if (card === "3D" || card === "3C" || card === "3H" || card === "3S") {
  return 3;
 }
 else if (card === "4D" || card === "4C" || card === "4H" || card === "4S") {
  return 4;
 }
 else if (card === "5D" || card === "5C" || card === "5H" || card === "5S") {
  return 5;
 }
 else if (card === "6D" || card === "6C" || card === "6H" || card === "6S") {
  return 6;
 }
 else if (card === "7D" || card === "7C" || card === "7H" || card === "7S") {
  return 7;
 }
 else if (card === "8D" || card === "8C" || card === "8H" || card === "8S") {
  return 8;
 }
 else if (card === "9D" || card === "9C" || card === "9H" || card === "9S") {
  return 9;
 }
 else if (card === "0D" || card === "0C" || card === "0H" || card === "0S") {
  return 10;
 }
 else if (card === "JD" || card === "JC" || card === "JH" || card === "JS") {
  return 10;
 }
 else if (card === "QD" || card === "QC" || card === "QH" || card === "QS") {
  return 10;
 }
 else if (card === "KD" || card === "KC" || card === "KH" || card === "KS") {
  return 10;
 }
 else if (card === "AD" || card === "AC" || card === "AH" || card === "AS") {
  return 11;
 }
}
// 1, Deal Button, establishes deck and runs functions///////////////////////////////////////////////////////////////////////////////////////////////////
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
   comp.score = getScore(compCardA);
   compScoreObject.compScore = comp.score;
  },
 }, );
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
   if (cardA === "JD" || cardA === "JC" || cardA === "JH" || cardA === "JS") {
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
   else {
    userScore = userScore + getScore(cardA);
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
   if (cardB === "JD" || cardB === "JC" || cardB === "JH" || cardB === "JS") {
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
   else {
    userScore = userScore + getScore(cardB);
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
 }, );
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
    if (compCardID === "AD" || compCardID === "AC" || compCardID === "AH" || compCardID === "AS") {
     compScore = compScore + 11;
     comp.score = compScore;
     aceCounter = aceCounter + 1;
     aceFlipped = false;
    }
    else {
     compScore = compScore + getScore(compCardID);
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
    victor(compScore);
   }
  },
 }, );

}
$("#compHand").append();
// 7, function decides who won/////////////////////////////////////////////////////////////////////////////////////////////////
function victor(compScore) {
 chips = Number($("#money").text());
 var userPointsVal = Number($("#userPoints").text());
 var score = Number($("#userPoints").text());
 var blackjack = black.jack;
 if (click.cardNum === 2 && click.won === false) {
  if (blackjack === "faceace" || blackjack === "aceface") {
   console.log("blackjack");
   chips = Number($("#money").text());
   chips = chips + 10;
   $("#money").text(chips);
   click.won = true;
   click.blackjack = true;
   blackjack = "";
   $("#compPoints").text("");
   $("#winner").text(", you won!");
  }
 }
 if (userPointsVal > compScore && userPointsVal < 22) {
  $("#winner").text(", you won!");
  $("#comma").text(" VS ")
  $("#compPoints").text(compScore);
  var userWon = true;
  won(userWon, compScore);
 }
 else if (userPointsVal < 22 && compScore > 21 && run === false && click.blackjack === false) {
  run = true;
  $("#winner").text(", you won!");
  $("#comma").text(" VS ")
  $("#compPoints").text(compScore);
  var userWon = true;
  won(userWon, compScore);
 }
 else if (userPointsVal === compScore && run === false) {
  $("#winner").text(", the dealer won!");
  $("#comma").text(" VS ");
  $("#compPoints").text(compScore);
  var compWon = true;
  lost(compWon);
 }
 else if (run === false) {
  var blackjack = black.jack;
  if (black.jack != "faceace" && blackjack != "aceface" && click.blackjack === false) {
   $("#winner").text(", the dealer won!");
   $("#comma").text(" VS ");
   $("#compPoints").text(compScore);
   var compWon = true;
   lost(compWon);
  }
 }
}
// 8, function detects if player busted/////////////////////////////////////////////////////////////////////////////////////////////////
function bust(deckID) {
 var num = aceCounter.numFlipped * 10;
 if (Number($("#userPoints").text()) - num > 21 && Number($("#userPoints").text()) > 21) {
  click.bust = true;
  $("#comma").text(",");
  $("#compPoints").text("the dealer won!");
  chips = Number($("#money").text());
  chips = chips - 5;
  $("#money").text(chips + " chips");
 }
}

function lost(compWon) {
 if (click.won === false && compWon === true) {
  compWon = false;
  chips = Number($("#money").text());
  chips = chips - 5;
  console.log(chips + " chips");
  $("#money").text(chips);
  click.won = true;
 }
 click.won = true;
}

function won(userWon, compScore) {
 var userPointsVal = Number($("#userPoints").text());
 var compScore = Number($("#compPoints").text());
 console.log(compScore);
 if (click.won === false && userWon === true) {
  if (userPointsVal > compScore && userPointsVal < 22) {
   userWon = false;
   chips = Number($("#money").text());
   chips = chips + 5;
   $("#money").text(chips);
   click.won = true;
   console.log(compScore + " compscore");
  }
  click.won = true;
 }
 else if (click.won === true && userPointsVal < 22 && compScore > 21) {
  userWon = false;
  chips = Number($("#money").text());
  chips = chips + 5;
  $("#money").text(chips);
  click.won = true;
  console.log(compScore + " compscore");
 }
 click.won = true;
}

function blackjack() {
 var score = Number($("#userPoints").text());
 var blackjack = black.jack;
 if (click.cardNum === 2 && click.won === false) {
  if (blackjack === "faceace" || blackjack === "aceface") {
   console.log("blackjack");
   chips = Number($("#money").text());
   chips = chips + 10;
   $("#money").text(chips);
   click.won = true;
   click.blackjack = true;
   blackjack = "";
   $("#compPoints").text("");
   $("#winner").text(", you won!");
  }
 }
}