function showLove() {
  document.getElementById("text").style.display = "block";
}

let btn = document.querySelector(".no");

document.addEventListener("mousemove", function(e) {
  let rect = btn.getBoundingClientRect();

  let distanceX = Math.abs(e.clientX - (rect.left + rect.width / 2));
  let distanceY = Math.abs(e.clientY - (rect.top + rect.height / 2));

  // لو الماوس قرب من الزر
  if (distanceX < 80 && distanceY < 50) {
    moveNo();
  }
});

function moveNo() {
  let x = Math.random() * (window.innerWidth - 100);
  let y = Math.random() * (window.innerHeight - 100);

  btn.style.position = "absolute";
  btn.style.left = x + "px";
  btn.style.top = y + "px";
}