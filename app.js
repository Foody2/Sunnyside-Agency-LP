const navOpen = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    if (nav.style.display === "flex") {
      nav.style.display = "none";
    } else {
      nav.style.display = "flex";
    }
    burger.classList.toggle("toogle");
  });
};

navOpen();
