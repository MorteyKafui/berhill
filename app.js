const navbar = document.querySelector('.header');
const hero = document.querySelector('.hero');

const observer = new IntersectionObserver(
  entries => {
    const entry = entries[0];
    console.log(entry);

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
