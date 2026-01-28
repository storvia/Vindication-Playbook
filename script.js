document.addEventListener("DOMContentLoaded", () => {

  // --- FADE-IN PAGES ---
  const pages = document.querySelectorAll(".page");

  const fadeInPage = (page, delay = 0) => {
    setTimeout(() => {
      page.style.opacity = 1;
      page.style.transform = "translateY(0)";
    }, delay);
  };

  // Fade in first page immediately
  fadeInPage(pages[0], 200);

  // IntersectionObserver for scroll fade-in
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        fadeInPage(entry.target);
      }
    });
  }, { threshold: 0.5 });

  pages.forEach(page => observer.observe(page));

  // --- GOLD NUMBER MICRO-SHINE ---
  const goldElements = document.querySelectorAll(".gold");
  goldElements.forEach(el => {
    el.addEventListener("mouseenter", () => {
      el.style.background = "linear-gradient(90deg, #FFD66B, #FFE8A1)";
      el.style.webkitBackgroundClip = "text";
      el.style.webkitTextFillColor = "transparent";
      el.style.transition = "background 0.5s ease";
    });
    el.addEventListener("mouseleave", () => {
      el.style.background = "linear-gradient(90deg, #C6A75E, #D6B77E)";
    });
  });

  // --- COPY PROMPT BUTTON ---
  const copyBtn = document.getElementById("copyPromptBtn");
  const promptText = document.getElementById("promptText");

  if(copyBtn && promptText){
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(promptText.textContent).then(() => {
        copyBtn.textContent = "Copied!";
        copyBtn.style.transform = "scale(1.05)";
        setTimeout(() => {
          copyBtn.textContent = "Copy Prompt";
          copyBtn.style.transform = "scale(1)";
        }, 1500);
      }).catch(() => {
        alert("Copy failed. Try manually.");
      });
    });
  }

  // --- STAGGERED EXECUTION CARDS ANIMATION ---
  const cards = document.querySelectorAll(".execution-cards .card");
  cards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(20px)";
    setTimeout(() => {
      card.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }, 600 + index * 200);
  });

});
