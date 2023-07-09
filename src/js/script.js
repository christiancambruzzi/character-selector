const characters = document.querySelectorAll(".character");

characters.forEach((character) => {
  character.addEventListener("mouseenter", () => {
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
  const characterBigImage = document.querySelector(".big-character");
  const characterId = character.attributes.id.value;
  characterBigImage.src = `./src/imagens/card-${characterId}.png`;
}

function modifySelectedCharacterName(character) {
  const characterName = document.getElementById("character-name");
  characterName.innerText = character.getAttribute("data-name");
}

function modifySelectedCharacterDescription(character) {
  const characterDescription = document.getElementById("character-description");
  characterDescription.innerText = character.getAttribute("data-description");
}
