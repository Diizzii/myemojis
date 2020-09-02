const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emojiContainer");

myEmojis.forEach((element) => {
    const newSpan = document.createElement("span");
    newSpan.textContent = element;
    emojiContainer.appendChild(newSpan);
    }
);