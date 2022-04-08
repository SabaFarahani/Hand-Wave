const hand = document.querySelector(".hand");
const handWave = document.querySelector(".hand-wave");

hand.addEventListener("click", () => {
    if (handWave.classList.contains("emoji")) {
        handWave.classList.add("active")
        hand.classList.remove("active")
    }
});

handWave.addEventListener("click", () => {
    if (hand.classList.contains("emoji")) {
        hand.classList.add("active")
        handWave.classList.remove("active")
    }
});