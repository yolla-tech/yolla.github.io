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
  });
});
document.getElementById('home').classList.remove('hidden');
