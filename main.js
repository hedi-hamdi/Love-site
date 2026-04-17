function showMessage() {
document.getElementById("message").style.display = "block";

// play music
document.getElementById("music").play();
}

// ❤️ generate hearts
function createHeart() {
const heart = document.createElement("div");
heart.classList.add("heart");
heart.innerHTML = "❤️";

heart.style.left = Math.random() * 100 + "vw";
heart.style.fontSize = Math.random() * 20 + 10 + "px";

document.body.appendChild(heart);

setTimeout(() => {
heart.remove();
}, 5000);
}

// create hearts every 300ms
setInterval(createHeart, 300);
