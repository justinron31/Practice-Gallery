// ──────────────────────────────────────────────────────────────
//eyes animation following mouse movement
function eyeBall() {
  let eye = document.querySelectorAll(".eye");
  eye.forEach(function (eye) {
    let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
    let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;

    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rot = radian * (180 / Math.PI) * -1 + 270;
    eye.style.transform = "rotate(" + rot + "deg)";
  });
}

document.querySelector("body").addEventListener("mousemove", eyeBall);

// ──────────────────────────────────────────────────────────────
//cards animation selection
let box = document.querySelectorAll(".box");
box.forEach((box) => {
  box.onmouseover = function (e) {
    let x = e.pageX - box.offsetLeft;
    let y = e.pageY - box.offsetTop;

    box.style.setProperty("--x", x + "px");
    box.style.setProperty("--y", y + "px");
  };
});

// ──────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  // Redirect to /eyes.html when the first eye (box) is clicked
  const firstBox = document.getElementById("first");
  if (firstBox) {
    firstBox.addEventListener("click", () => {
      window.location.href = "/eyes.html";
    });
  }

  // Redirect to /practice.html when the Back button is clicked
  const backButton = document.getElementById("backButton");
  if (backButton) {
    backButton.addEventListener("click", () => {
      window.location.href = "/practice.html";
    });
  }
});
