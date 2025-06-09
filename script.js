
function toggleMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('active');
}

const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.animate').forEach(el => {
  observer.observe(el);
});