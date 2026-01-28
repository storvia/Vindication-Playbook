// Wait for DOM
document.addEventListener("DOMContentLoaded", () => {

  // Fade-in effect for sections
  const pages = document.querySelectorAll(".page");
  pages.forEach(page => {
    page.style.opacity = 0;
    page.style.transform = "translateY(30px)";
  });

  const fadeInPage = (page) => {
    page.style.transition = "opacity 1s ease-out, transform 1s ease-out";
    page.style.opacity = 1;
    page.style.transform = "translateY(0)";
  };

  // Fade in first page immediately
  fadeInPage(pages[0]);

  // Optional: scroll fade-in for the second page
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          fadeInPage(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  pages.forEach(page => observer.observe(page));

  // Highlight numbers on hover
  const goldElements = document.querySelectorAll(".gold");
  goldElements.forEach(el => {
    el.addEventListener("mouseenter", () => {
      el.style.color = "#FFD66B"; // slightly brighter gold
      el.style.transition = "color 0.3s ease";
    });
    el.addEventListener("mouseleave", () => {
      el.style.color = "#C6A75E";
    });
  });

  // Copy prompt text on click (optional feature)
  const promptText = document.querySelector(".prompt-text");
  if(promptText){
    promptText.style.cursor = "pointer";
    promptText.title = "Click to copy";
    promptText.addEventListener("click", () => {
      navigator.clipboard.writeText(promptText.textContent).then(() => {
        alert("Prompt text copied!");
      });
    });
  }

});
