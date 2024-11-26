const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelectorAll('section').forEach(section => {
      section.classList.add('hidden');
    });
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.classList.remove('hidden');
    history.pushState(null, null, `#${targetId}`);
    const navUl = document.getElementById('nav-links');
    const menuIcon = document.getElementById('menu-icon');
    if (window.innerWidth <= 768 && navUl.style.display === 'flex') {
      navUl.style.display = 'none';
      menuIcon.classList.remove('open');
    }
  });
});

window.addEventListener('load', () => {
  const currentHash = window.location.hash.substring(1);
  const targetSection = document.getElementById(currentHash);
  if (targetSection) {
    document.querySelectorAll('section').forEach(section => {
      section.classList.add('hidden');
    });
    targetSection.classList.remove('hidden');
  } else {
    document.getElementById('home').classList.remove('hidden');
  }
});
