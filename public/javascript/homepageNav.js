const homeLink = document.querySelectorAll(".nav-link");
//if homeLink[1] to homeLink[3] is in hover, remove active class from homeLink[0]
for (let i = 1; i < homeLink.length; i++) {
  ["mouseenter", "focus"].forEach(function (event) {
    homeLink[i].addEventListener(event, function () {
      homeLink[0].classList.remove("active");
    });
  });
  ["mouseleave", "blur"].forEach(function (event) {
    homeLink[i].addEventListener(event, function () {
      homeLink[0].classList.add("active");
    });
  });
}
