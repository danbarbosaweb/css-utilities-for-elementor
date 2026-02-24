document.addEventListener("DOMContentLoaded", function () {
  const dot = document.createElement("div");
  dot.id = "mouse-dot";
  document.body.appendChild(dot);

  document.addEventListener("mousemove", function (e) {
    dot.style.left = e.clientX + "px";
    dot.style.top = e.clientY + "px";
  });
});