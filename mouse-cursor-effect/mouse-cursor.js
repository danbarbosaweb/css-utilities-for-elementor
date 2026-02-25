<script>
document.addEventListener("DOMContentLoaded", function () {
  const dot = document.getElementById("mouse-dot");

  if (!dot) return;

  document.addEventListener("mousemove", function (e) {
    dot.style.left = e.clientX + "px";
    dot.style.top = e.clientY + "px";
  });
});
</script>
