document.addEventListener("DOMContentLoaded", () => {
  const polaroids = document.querySelectorAll(".polaroid");

  polaroids.forEach((polaroid) => {
    polaroid.addEventListener("click", () => {
      polaroids.forEach((p) => p.classList.remove("active"));

      polaroid.classList.add("active");
    });
  });
});
