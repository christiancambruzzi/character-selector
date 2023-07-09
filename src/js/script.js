const characters = document.querySelectorAll(".character");

characters.forEach((character) => {
  character.addEventListener("mouseenter", () => {
    const selectedCharacter = document.querySelector(".selected");
    selectedCharacter.classList.remove("selected");
    character.classList.add("selected");

    const characterBigImage = document.querySelector(".big-character");

    const characterId = character.attributes.id.value

    characterBigImage.src = `./src/imagens/card-${characterId}.png`;
  });
});
