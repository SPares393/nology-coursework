"use strict";

var playerList = document.querySelector(".player-list");
var player = document.querySelectorAll(".player");
var mainCard = document.querySelectorAll(".main__card");
var listCloseButton = document.querySelector(".list-close-button"); // prettier-ignore

var playerArr = [["Alun-Wyn Jones", [4, 5], "🏴󠁧󠁢󠁷󠁬󠁳󠁿"], ["Josh Adams", [11, 14, 15], "🏴󠁧󠁢󠁷󠁬󠁳󠁿"], ["Bundi Aki", [12, 13], "🇮🇪"], ["Adam Beard", [4, 5], "🏴󠁧󠁢󠁷󠁬󠁳󠁿"], ["Tadhg Beirne", [4, 5, 6], "🇮🇪"], ["Dan Biggar", [10], "🏴󠁧󠁢󠁷󠁬󠁳󠁿"], ["Jack Conan", [8], "🇮🇪"], ["Luke Cowan-Dickie", [2], "🏴󠁧󠁢󠁥󠁮󠁧󠁿"], ["Tom Curry", [6, 7, 8], "🏴󠁧󠁢󠁥󠁮󠁧󠁿"], ["Elliot Daly", [11, 12, 13, 14, 15], "🏴󠁧󠁢󠁥󠁮󠁧󠁿"], ["Gareth Davies", [9], "🏴󠁧󠁢󠁷󠁬󠁳󠁿"], ["Zander Fagerson", [3], "🏴󠁧󠁢󠁳󠁣󠁴󠁿"], ["Taulupe Faletau", [8], "🏴󠁧󠁢󠁷󠁬󠁳󠁿"], ["Owen Farrell", [10, 12], "🏴󠁧󠁢󠁥󠁮󠁧󠁿"], ["Tadhg Furlong", [3], "🇮🇪"], ["Jamie George", [2], "🏴󠁧󠁢󠁥󠁮󠁧󠁿"], ["Chris Harris", [12, 13], "🏴󠁧󠁢󠁳󠁣󠁴󠁿"], ["Iain Henderson", [4, 5], "🇮🇪"], ["Robbie Henshaw", [12, 13], "🇮🇪"], ["Jonny Hill", [4, 5], "🏴󠁧󠁢󠁥󠁮󠁧󠁿"], ["Stuart Hogg", [15], "🏴󠁧󠁢󠁳󠁣󠁴󠁿"], ["Maro Itoje", [4, 5, 6], "🏴󠁧󠁢󠁥󠁮󠁧󠁿"], ["Wyn Jones", [1], "🏴󠁧󠁢󠁷󠁬󠁳󠁿"], ["Ronan Kelleher", [2], "🇮🇪"], ["Courtney Lawes", [4, 5, 6], "🏴󠁧󠁢󠁥󠁮󠁧󠁿"], ["Duhan van-der-Merwe", [11, 14], "🏴󠁧󠁢󠁳󠁣󠁴󠁿"], ["Conor Murray", [9], "🇮🇪"], ["Josh Navidi", [6, 7], "🏴󠁧󠁢󠁷󠁬󠁳󠁿"], ["Ken Owens", [2], "🏴󠁧󠁢󠁷󠁬󠁳󠁿"], ["Ali Price", [9], "🏴󠁧󠁢󠁳󠁣󠁴󠁿"], ["Louis Rees-Zammit", [11, 14], "🏴󠁧󠁢󠁷󠁬󠁳󠁿"], ["Finn Russell", [10], "🏴󠁧󠁢󠁳󠁣󠁴󠁿"], ["Sam Simmonds", [8], "🏴󠁧󠁢󠁥󠁮󠁧󠁿"], ["Kyle Sinckler", [3], "🏴󠁧󠁢󠁥󠁮󠁧󠁿"], ["Marcus Smith", [10], "🏴󠁧󠁢󠁥󠁮󠁧󠁿"], ["Rory Sutherland", [1], "🏴󠁧󠁢󠁳󠁣󠁴󠁿"], ["Mako Vunipola", [1], "🏴󠁧󠁢󠁥󠁮󠁧󠁿"], ["Hamish Watson", [6, 7], "🏴󠁧󠁢󠁳󠁣󠁴󠁿"], ["Anthony Watson", [11, 14, 15], "🏴󠁧󠁢󠁥󠁮󠁧󠁿"], ["Liam Williams", [11, 14, 15], "🏴󠁧󠁢󠁷󠁬󠁳󠁿"]];

var playerFilterByPosition = function playerFilterByPosition(position) {
  var filteredPlayers = [];

  for (var i = 0; i < playerArr.length; i++) {
    if (playerArr[i][1].includes(position)) {
      filteredPlayers.push(playerArr[i]);
    }
  }

  return filteredPlayers;
};

var fillPlayerList = function fillPlayerList(playerArr) {
  var newArr = playerArr.map(function (item) {
    return "<button class=\"player-list-button\">".concat(item[0], " ").concat(item[2], "</button>");
  });
  return newArr;
};

var currentCard;

var toggleHideList = function toggleHideList() {
  playerList.classList.contains("hidden") ? playerList.classList.remove("hidden") : playerList.classList.add("hidden");
};

for (var i = 0; i < mainCard.length; i++) {
  mainCard[i].addEventListener("click", function () {
    currentCard = this;
    playerList.innerHTML = "";
    var current = document.getElementsByClassName("active");

    if (current.length > 0) {
      current[0].classList.remove("active");
    }

    this.classList += " active";
    toggleHideList();
    var position = parseInt(this.querySelector(".card__number").textContent);
    var availablePlayers = playerFilterByPosition(position);
    var availablePlayersList = fillPlayerList(availablePlayers);

    for (var _i = 0; _i < availablePlayersList.length; _i++) {
      playerList.innerHTML += availablePlayersList[_i];
    }

    playerList.innerHTML += "<button class=\"list-close-button\">Close</button>";
    listCloseButton.addEventListener("click", toggleHideList());
  });
}

playerList.addEventListener("click", function (e) {
  if (e.target.classList.contains("player-list-button")) {
    var playerInfo = e.target.textContent.split(" ");
    var cardFillHTML = "<p class=\"card__name\">".concat(playerInfo[0], "<br>").concat(playerInfo[1], "</p><h3 class=\"card__flag\">").concat(playerInfo[2], "</h3>");
    currentCard.insertAdjacentHTML("beforeend", cardFillHTML);
    toggleHideList();
  }
}); // NEXT STEPS
// Remove player from the player list if they're already on a card
// Replace player on card instead of add to
// Hide list on click away