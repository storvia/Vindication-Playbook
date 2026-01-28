// Wait for DOM
document.addEventListener("DOMContentLoaded", () => {

  // Fade-in effect for pages
  const pages = document.querySelectorAll(".page");

  const fadeInPage = (page) => {
    page.style.transition = "opacity 1s ease-out, transform 1s ease-out";
    page.style.opacity = 1;
    page.style.transform = "translateY(0)";
  };

  // Fade in first page immediately
  fadeInPage(pages[0]);

  // Scroll fade-in for the rest
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

  // Gold highlight on hover
  const goldElements = document.querySelectorAll(".gold");
  goldElements.forEach(el => {
    el.addEventListener("mouseenter", () => {
      el.style.color = "#FFD66B";
      el.style.transition = "color 0.3s ease";
    });
    el.addEventListener("mouseleave", () => {
      el.style.color = "#C6A75E";
    });
  });

  // Copy Prompt functionality
  const copyBtn = document.getElementById("copyPromptBtn");
  const promptText = document.getElementById("promptText");

  if(copyBtn && promptText){
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(promptText.textContent).then(() => {
        copyBtn.textContent = "Copied!";
        setTimeout(() => copyBtn.textContent = "Copy Prompt", 1500);
      }).catch(() => {
        alert("Copy failed. Try manually.");
      });
    });
  }

});
