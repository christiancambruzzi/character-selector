const characters = document.querySelectorAll(".character");

characters.forEach((character) => {
  character.addEventListener("click", () => {
    if (window.innerWidth < 450) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    CharacterSelectionRemove();
    character.classList.add("selected");
    modifySelectedCharacterImage(character);
    modifySelectedCharacterName(character);
    modifySelectedCharacterDescription(character);
  });
});

function CharacterSelectionRemove() {
  const selectedCharacter = document.querySelector(".selected");
  selectedCharacter.classList.remove("selected");
}

function modifySelectedCharacterImage(character) {
  const characterBigImage = document.querySelector(".big-character-img");
  const characterId = character.attributes.id.value;
  characterBigImage.src = `./src/img/${characterId}.png`;
}

function modifySelectedCharacterName(character) {
  const characterName = document.getElementById("character-name");
  characterName.innerText = character.getAttribute("data-name");
}

function modifySelectedCharacterDescription(character) {
  const characterDescription = document.getElementById("character-description");
  characterDescription.innerText = character.getAttribute("data-description");
}

const character = document.querySelector(".characters");
const characterImg = document.querySelector(".big-character-img");


if ((character.style.opacity = "0")) {
  characterImg.addEventListener("mouseout", () => {
    character.style.opacity = "1";
    
  });
} if ((character.style.opacity = "1")) {
  characterImg.addEventListener("mouseenter", () => {
    character.style.opacity = "0";
  });
} 

