const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

yesBtn.onclick = () => {
  response.textContent = "YAY!! ❤️ I knew it 😍";
};

noBtn.onmouseover = () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 70 + "%";
  noBtn.style.top = Math.random() * 70 + "%";
};
