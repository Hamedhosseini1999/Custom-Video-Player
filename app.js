const navSlide = () => {
  /// * Navbar
  const burger = document.getElementById("hamburger");
  const list = document.getElementById("list");
  const listItem = document.querySelectorAll(".list .list-item");

  // Event Listeners
  burger.addEventListener("click", (e) => {
    // add slide
    list.classList.toggle("nav-active");
    // item animation
    listItem.forEach((item, index) => {
      if (item.style.animation) {
        item.style.animation = ``;
      } else {
        item.style.animation = `slide .5s ease ${index / 5 + 1}s forwards `;
      }
    });
    burger.classList.toggle("toggle");
    if (burger.style.animation) {
      burger.style.animation = "";
    } else {
      burger.style.animation = "ham .5s ease forwards";
    }
  });
};

// Call
navSlide();
