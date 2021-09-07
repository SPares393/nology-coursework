const playerList = document.querySelector(".player-list");
const player = document.querySelectorAll(".player");
const mainCard = document.querySelectorAll(".main__card");
const listCloseButton = document.querySelector(".list-close-button");

// prettier-ignore
const playerArr = [["Alun-Wyn Jones", [4, 5], "🏴󠁧󠁢󠁷󠁬󠁳󠁿"],["Josh Adams", [11, 14, 15], "🏴󠁧󠁢󠁷󠁬󠁳󠁿"],["Bundi Aki", [12, 13], "🇮🇪"],["Adam Beard", [4, 5], "🏴󠁧󠁢󠁷󠁬󠁳󠁿"],["Tadhg Beirne", [4, 5, 6], "🇮🇪"],["Dan Biggar", [10], "🏴󠁧󠁢󠁷󠁬󠁳󠁿"],["Jack Conan", [8], "🇮🇪"],["Luke Cowan-Dickie", [2], "🏴󠁧󠁢󠁥󠁮󠁧󠁿"],["Tom Curry", [6, 7, 8], "🏴󠁧󠁢󠁥󠁮󠁧󠁿"],["Elliot Daly", [11, 12, 13, 14, 15], "🏴󠁧󠁢󠁥󠁮󠁧󠁿"],["Gareth Davies", [9], "🏴󠁧󠁢󠁷󠁬󠁳󠁿"],["Zander Fagerson", [3], "🏴󠁧󠁢󠁳󠁣󠁴󠁿"],["Taulupe Faletau", [8], "🏴󠁧󠁢󠁷󠁬󠁳󠁿"],["Owen Farrell", [10, 12], "🏴󠁧󠁢󠁥󠁮󠁧󠁿"],["Tadhg Furlong", [3], "🇮🇪"],["Jamie George", [2], "🏴󠁧󠁢󠁥󠁮󠁧󠁿"],["Chris Harris", [12, 13], "🏴󠁧󠁢󠁳󠁣󠁴󠁿"],["Iain Henderson", [4, 5], "🇮🇪"],["Robbie Henshaw", [12, 13], "🇮🇪"],["Jonny Hill", [4, 5], "🏴󠁧󠁢󠁥󠁮󠁧󠁿"],["Stuart Hogg", [15], "🏴󠁧󠁢󠁳󠁣󠁴󠁿"],["Maro Itoje", [4, 5, 6], "🏴󠁧󠁢󠁥󠁮󠁧󠁿"],["Wyn Jones", [1], "🏴󠁧󠁢󠁷󠁬󠁳󠁿"],["Ronan Kelleher", [2], "🇮🇪"],["Courtney Lawes", [4, 5, 6], "🏴󠁧󠁢󠁥󠁮󠁧󠁿"],["Duhan van-der-Merwe", [11, 14], "🏴󠁧󠁢󠁳󠁣󠁴󠁿"],["Conor Murray", [9], "🇮🇪"],["Josh Navidi", [6, 7], "🏴󠁧󠁢󠁷󠁬󠁳󠁿"],["Ken Owens", [2], "🏴󠁧󠁢󠁷󠁬󠁳󠁿"],["Ali Price", [9], "🏴󠁧󠁢󠁳󠁣󠁴󠁿"],["Louis Rees-Zammit", [11, 14], "🏴󠁧󠁢󠁷󠁬󠁳󠁿"],["Finn Russell", [10], "🏴󠁧󠁢󠁳󠁣󠁴󠁿"],["Sam Simmonds", [8], "🏴󠁧󠁢󠁥󠁮󠁧󠁿"],["Kyle Sinckler", [3], "🏴󠁧󠁢󠁥󠁮󠁧󠁿"],["Marcus Smith", [10], "🏴󠁧󠁢󠁥󠁮󠁧󠁿"],["Rory Sutherland", [1], "🏴󠁧󠁢󠁳󠁣󠁴󠁿"],["Mako Vunipola", [1], "🏴󠁧󠁢󠁥󠁮󠁧󠁿"],["Hamish Watson", [6, 7], "🏴󠁧󠁢󠁳󠁣󠁴󠁿"],["Anthony Watson", [11, 14, 15], "🏴󠁧󠁢󠁥󠁮󠁧󠁿"],["Liam Williams", [11, 14, 15], "🏴󠁧󠁢󠁷󠁬󠁳󠁿"],];

const playerFilterByPosition = (position) => {
  let filteredPlayers = [];
  for (let i = 0; i < playerArr.length; i++) {
    if (playerArr[i][1].includes(position)) {
      filteredPlayers.push(playerArr[i]);
    }
  }
  return filteredPlayers;
};

const fillPlayerList = (playerArr) => {
  const newArr = playerArr.map((item) => {
    return `<button class="player-list-button">${item[0]} ${item[2]}</button>`;
  });
  return newArr;
};

let currentCard;

const toggleHideList = () => {
  playerList.classList.contains("hidden")
    ? playerList.classList.remove("hidden")
    : playerList.classList.add("hidden");
};

for (let i = 0; i < mainCard.length; i++) {
  mainCard[i].addEventListener("click", function () {
    currentCard = this;

    playerList.innerHTML = "";
    let current = document.getElementsByClassName("active");

    if (current.length > 0) {
      current[0].classList.remove("active");
    }
    this.classList += " active";

    toggleHideList();

    const position = parseInt(this.querySelector(".card__number").textContent);
    const availablePlayers = playerFilterByPosition(position);
    const availablePlayersList = fillPlayerList(availablePlayers);

    for (let i = 0; i < availablePlayersList.length; i++) {
      playerList.innerHTML += availablePlayersList[i];
    }
    playerList.innerHTML += `<button class="list-close-button">Close</button>`;

    listCloseButton.addEventListener("click", toggleHideList());
  });
}

playerList.addEventListener("click", (e) => {
  if (e.target.classList.contains("player-list-button")) {
    const playerInfo = e.target.textContent.split(" ");
    const cardFillHTML = `<p class="card__name">${playerInfo[0]}<br>${playerInfo[1]}</p><h3 class="card__flag">${playerInfo[2]}</h3>`;
    currentCard.insertAdjacentHTML("beforeend", cardFillHTML);
    toggleHideList();
  }
});

// NEXT STEPS
// Remove player from the player list if they're already on a card
// Replace player on card instead of add to
// Hide list on click away
