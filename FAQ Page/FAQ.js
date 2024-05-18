// FAQ.js

document.addEventListener('DOMContentLoaded', function () {
  const accordions = document.querySelectorAll('.accordion');
  let activeAccordion = null;

  accordions.forEach(accordion => {
    accordion.addEventListener('click', function () {
      const panel = this.nextElementSibling;

      if (activeAccordion && activeAccordion !== this) {
        activeAccordion.classList.remove('active');
        activeAccordion.nextElementSibling.classList.remove('show');
        activeAccordion.nextElementSibling.style.maxHeight = null;
      }

      this.classList.toggle('active');
      panel.classList.toggle('show');

      if (panel.classList.contains('show')) {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      } else {
        panel.style.maxHeight = null;
      }

      activeAccordion = this.classList.contains('active') ? this : null;
    });
  });

  // Close the accordion when clicking outside
  document.addEventListener('click', function (e) {
    if (!e.target.classList.contains('accordion') && activeAccordion) {
      activeAccordion.classList.remove('active');
      activeAccordion.nextElementSibling.classList.remove('show');
      activeAccordion.nextElementSibling.style.maxHeight = null;
      activeAccordion = null;
    }
  });
});
