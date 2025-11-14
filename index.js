document.addEventListener("DOMContentLoaded", () => {
  // SUBMENU FUNCTIONALITY
  const menuItems = document.querySelectorAll(".menu > li");

  menuItems.forEach((item) => {
    const submenu = item.querySelector(".submenu");
    const link = item.querySelector("a");

    if (submenu) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelectorAll(".submenu").forEach((sm) => {
          if (sm !== submenu) sm.classList.remove("show");
        });
        submenu.classList.toggle("show");
      });
    }
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".menu")) {
      document
        .querySelectorAll(".submenu")
        .forEach((sm) => sm.classList.remove("show"));
    }
  });

  // BUTTON NAVIGATION TO TREE PAGE
  const enterBtn = document.querySelector(".img-btn");
  if (enterBtn) {
    enterBtn.addEventListener("click", () => {
      window.location.href = "page1.html";
    });
  }
});
