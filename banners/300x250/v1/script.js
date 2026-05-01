(function () {
  "use strict";

  var DEFAULT_URL = "https://www.iloveny.com/fifa-world-cup/";
  var slides = Array.prototype.slice.call(document.querySelectorAll(".slide-v1"));
  var dots = Array.prototype.slice.call(document.querySelectorAll(".dot-v1"));
  var adLink = document.getElementById("ad-link-v1");
  var prevBtn = document.getElementById("prev-v1");
  var nextBtn = document.getElementById("next-v1");
  var index = 0;

  function getParameterByName(name) {
    var safeName = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + safeName + "=([^&#]*)");
    var results = regex.exec(window.location.search);
    if (!results) return "";
    return decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  function toSafeUrl(value) {
    if (!value) return "";
    try {
      var parsed = new URL(value, window.location.href);
      if (parsed.protocol === "http:" || parsed.protocol === "https:") return parsed.href;
    } catch (e) { return ""; }
    return "";
  }

  function resolveClickTag() {
    var clickTag = toSafeUrl(getParameterByName("clickTAG"));
    return clickTag || DEFAULT_URL;
  }

  function setSlide(next, direction) {
    if (next === index) return;
    var current = slides[index];
    var incoming = slides[next];

    // Park incoming offscreen on the correct side, no transition
    incoming.classList.add("no-transition");
    incoming.classList.remove("is-active", "exit-left", "exit-right");
    if (direction > 0) {
      // next: incoming enters from right
      incoming.style.transform = "translateX(100%)";
    } else {
      // prev: incoming enters from left
      incoming.style.transform = "translateX(-100%)";
    }

    // Force reflow so the park position registers
    void incoming.offsetWidth;

    // Remove no-transition, enable animation
    incoming.classList.remove("no-transition");
    incoming.style.transform = "";
    incoming.classList.add("is-active");
    incoming.setAttribute("aria-hidden", "false");

    // Exit current slide
    current.classList.remove("is-active");
    current.classList.add(direction > 0 ? "exit-left" : "exit-right");
    current.setAttribute("aria-hidden", "true");

    dots.forEach(function (d, i) {
      d.classList.toggle("is-active", i === next);
    });
    index = next;
  }

  function advance(step) {
    var next = (index + step + slides.length) % slides.length;
    setSlide(next, step);
  }

  if (!adLink || slides.length === 0) return;

  adLink.setAttribute("href", resolveClickTag());

  adLink.addEventListener("click", function (e) {
    e.preventDefault();
    window.open(adLink.getAttribute("href") || DEFAULT_URL, "_blank", "noopener,noreferrer");
  });

  // Arrow navigation
  if (prevBtn) {
    prevBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      advance(-1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      advance(1);
    });
  }

  // Keyboard nav
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") advance(-1);
    if (e.key === "ArrowRight") advance(1);
  });
})();
