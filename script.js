// // Reveal sections on scroll
// document.addEventListener("DOMContentLoaded", () => {
//   const sections = document.querySelectorAll(".content-section");

//   const revealOnScroll = () => {
//     sections.forEach(section => {
//       const sectionTop = section.getBoundingClientRect().top;
//       if (sectionTop < window.innerHeight - 100) {
//         section.classList.add("visible");
//       }
//     });
//   };

//   window.addEventListener("scroll", revealOnScroll);
//   revealOnScroll(); // run once for above-fold content
// });

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".content-section");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // Stop observing once it's visible
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));
});
