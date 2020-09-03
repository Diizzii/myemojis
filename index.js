const myEmojis = ["👨‍💻", "⛷", "🍲"];
const emojiInput = document.getElementById("emoji-input");
const addButton = document.getElementById("push-btn");
const unshiftButton = document.getElementById("unshift-btn");
const popButton = document.getElementById("pop-btn");
const shiftButton = document.getElementById("shift-btn");

function renderEmojis() {
    const emojiContainer = document.getElementById("emojiContainer");
    myEmojis.forEach((element) => {
        const newSpan = document.createElement("span");
        newSpan.textContent = element;
        emojiContainer.appendChild(newSpan);
    });
};

function clearContent() {
    emojiInput.value = "";
    emojiContainer.innerHTML = "";
}

renderEmojis();

addButton.addEventListener("click", () => {
    if (emojiInput.value !== "") {
        myEmojis.push(emojiInput.value);
        clearContent();
        renderEmojis();
    }
});

unshiftButton.addEventListener("click", () => {
    if (emojiInput.value !== "") {
        myEmojis.unshift(emojiInput.value);
        clearContent();
        renderEmojis();
    }
})

popButton.addEventListener("click", () => {
    myEmojis.pop();
    clearContent();
    renderEmojis()
})

shiftButton.addEventListener("click", () => {
    myEmojis.shift();
    clearContent();
    renderEmojis();
})