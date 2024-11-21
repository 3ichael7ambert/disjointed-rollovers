// Map of emoji IDs to information
const emojiInfo = {
  emoji1: "🍎 Apples are nutritious and packed with vitamins!",
  emoji2: "🌍 Earth is the third planet from the sun.",
  emoji3: "🚀 Rockets help us explore the universe.",
  emoji4: "🎨 Art inspires creativity and self-expression.",
};

// Event listeners for emojis
document.querySelectorAll(".emoji").forEach((emoji) => {
  emoji.addEventListener("mouseover", function () {
    const infoBox = document.getElementById("infoBox");
    infoBox.innerText = emojiInfo[this.id];
    infoBox.classList.add("visible");
  });

  emoji.addEventListener("mouseout", function () {
    const infoBox = document.getElementById("infoBox");
    infoBox.classList.remove("visible");
  });
});
