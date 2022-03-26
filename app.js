const navbar = document.querySelector('.header');
const hero = document.querySelector('.hero');
const year = document.querySelector('.year');

year.textContent = new Date().getFullYear();

const observer = new IntersectionObserver(
  entries => {
    const entry = entries[0];

    if (!entry.isIntersecting) {
      document.body.classList.add('sticky');
    }

    if (entry.isIntersecting) {
      document.body.classList.remove('sticky');
    }
  },
  {
    root: null,
    threshold: 0,
  }
);

observer.observe(hero);
