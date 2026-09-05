const toggle = document.querySelector('.nav-toggle');
const navLinksEl = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navLinksEl.classList.toggle('open');
});

navLinksEl.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinksEl.classList.remove('open'));
});

function handleSubmit(event) {
  event.preventDefault();
  const status = document.getElementById('formStatus');
  status.textContent = "Thanks! Your message has been noted — connect a backend or form service to actually send it.";
  event.target.reset();
  return false;
}