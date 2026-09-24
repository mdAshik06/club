document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navlinks = document.getElementById("navlinks");

  hamburger.addEventListener("click", () => {
    // মেনু ওপেন/ক্লোজ করার জন্য active ক্লাস টগল করবে
    navlinks.classList.toggle("active");

    // Accessibility (aria-expanded) আপডেট
    const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", !isExpanded);
  });
});