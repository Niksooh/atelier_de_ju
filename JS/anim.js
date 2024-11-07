document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".ODD, .EVEN");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Ajoute l'animation en fonction de la classe
          if (entry.target.classList.contains("ODD")) {
            entry.target.classList.add("slide-in-left");
          } else if (entry.target.classList.contains("EVEN")) {
            entry.target.classList.add("slide-in-right");
          }
        }
      });
    }, {
      threshold: 0.1
    });

    // Observe each section
    sections.forEach(section => {
      observer.observe(section);
    });
  });