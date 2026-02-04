const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const heartsContainer = document.querySelector(".hearts");

let yesScale = 1;
let noClicks = 0; // Track clicks on No
let noScale = 1;  // Scale for shrinking No button

noBtn.addEventListener("click", () => {
  yesScale += 0.15;
  yesBtn.style.transform = `scale(${yesScale})`;

  // Move the No button randomly
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 150 - 75;
  noBtn.style.transform = `translate(${x}px, ${y}px) scale(${noScale})`;

  // Increment click counter
  noClicks++;

  // After 4 clicks, start shrinking the No button
  if (noClicks >= 4) {
    noScale -= 0.2; // Shrink by 20% each click
    if (noScale <= 0) {
      noBtn.remove(); // Remove button if too small
    } else {
      noBtn.style.transform = `translate(${x}px, ${y}px) scale(${noScale})`;
    }
  }
});

setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}, 400);

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div class="card">
      <h1>Yayyy!! 💖💖💖</h1>
      <img src="Happy.gif" class="gif">
      <p>You are officially my Valentine 😘</p>
    </div>
  `;
});
