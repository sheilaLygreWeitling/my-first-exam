const moreText = document.querySelectorAll(".extraText");

for (let i = 0; i < moreText.length; i++) {
    moreText[i].style.display = "none";
}

const showMoreButtons = document.querySelectorAll(".buttonReadMore");

for (let i = 0; i < showMoreButtons.length; i++) {
    showMoreButtons[i].addEventListener("click", fullLength);
}

function fullLength() {
    let text = this.previousElementSibling;

    if (text.style.display === "none") {
        text.style.display = "block";
        this.textContent = "Læs mindre..."
    } else {
        text.style.display = "none";
        this.textContent = "Læs mere..."
    }

} 
