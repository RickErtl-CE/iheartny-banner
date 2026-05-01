(function () {
  "use strict";

  var ROTATE_MS = 1800;
  var slides = Array.prototype.slice.call(document.querySelectorAll(".slide"));
  var dots = Array.prototype.slice.call(document.querySelectorAll(".dot"));
  var adLink = document.getElementById("ad-link");
  var index = 0;

  function getParameterByName(name) {
    var safeName = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + safeName + "=([^&#]*)");
    var results = regex.exec(window.location.search);

    if (!results) {
      return "";
    }

    return decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  function setSlide(nextIndex) {
    slides.forEach(function (slide, i) {
      slide.classList.toggle("is-active", i === nextIndex);
    });

    dots.forEach(function (dot, i) {
      dot.classList.toggle("is-active", i === nextIndex);
    });

    index = nextIndex;
  }

  function advance() {
    var next = (index + 1) % slides.length;
    setSlide(next);
  }

  function resolveClickTag() {
    var clickTag = getParameterByName("clickTAG");

    if (!clickTag) {
      return "https://www.example.com";
    }

    return clickTag;
  }

  adLink.addEventListener("click", function (event) {
    event.preventDefault();
    var destination = resolveClickTag();
    window.open(destination, "_blank", "noopener");
  });

  window.setInterval(advance, ROTATE_MS);
})();
