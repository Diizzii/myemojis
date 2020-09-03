const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emojiContainer");
const emojiInput = document.getElementById("emoji-input")
const addButton = document.getElementById("push-btn")

myEmojis.forEach((element) => {
    const newSpan = document.createElement("span");
    newSpan.textContent = element;
    emojiContainer.appendChild(newSpan);
});

addButton.addEventListener("click", () => {
    if (emojiInput.value !== "") {
        myEmojis.push(emojiInput.value);
        emojiInput.value = "";
        console.log(myEmojis);
    }
});