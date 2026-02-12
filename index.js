let count = 0;

function openBox() {
    const box = document.querySelector(".box-container");
    box.classList.add("open");

    setTimeout(() => {
        document.getElementById("chocoArea").classList.add("show");
    }, 800);
}

function flip(element) {
    if (!element.classList.contains("flipped")) {
        element.classList.add("flipped");
        count++;
    }

    if (count === 5) {
        document.getElementById("finalText").style.opacity = "1";
    }
}
