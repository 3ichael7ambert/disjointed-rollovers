// Map of emoji IDs to information
const emojiInfo = {
  emoji1: "Apples are nutritious and full of vitamins!",
  emoji2: "Earth is the third planet from the sun.",
  emoji3: "Rockets explore the universe and beyond!",
  emoji4: "Art inspires creativity and self-expression.",
};

// Event listeners for each emoji
document.querySelectorAll(".emoji").forEach((emoji) => {
  emoji.addEventListener("mouseover", function () {
    const infoBox = document.getElementById("infoBox");
    infoBox.innerText = emojiInfo[this.id];
    infoBox.style.display = "block";
  });

  emoji.addEventListener("mouseout", function () {
    const infoBox = document.getElementById("infoBox");
    infoBox.style.display = "none";
  });
});
