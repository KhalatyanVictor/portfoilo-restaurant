document.addEventListener("DOMContentLoaded", () => {
  const categoryLinks = document.querySelectorAll(".categories a");
  const menuItems = document.querySelectorAll(".menuItems .item");

  categoryLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      categoryLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");

      const type = link.getAttribute("data-type");

      menuItems.forEach((item) => {
        if (type === "all" || item.getAttribute("data-type") === type) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  categoryLinks[0].click();
});
