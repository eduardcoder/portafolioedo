// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth scrolling
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        if (link.hash) {
            e.preventDefault();
            document.querySelector(link.hash).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Project filtering
function filterProjects(category) {
    const projects = document.querySelectorAll('#projects article');
    projects.forEach(project => {
        project.style.display = 
            (category === 'all' || project.dataset.category === category) 
            ? 'block' : 'none';
    });
}

// Lightbox for images
function openLightbox(imageSrc) {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.innerHTML = `
        <img src="${imageSrc}" alt="Project preview">
        <span class="close">&times;</span>
    `;
    document.body.appendChild(lightbox);
    
    lightbox.querySelector('.close').addEventListener('click', () => {
        lightbox.remove();
    });
}

document.querySelectorAll('#projects img').forEach(img => {
    img.addEventListener('click', () => openLightbox(img.src));
});

// Form validation
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields!');
        return;
    }

    if (!email.includes('@')) {
        alert('Please enter a valid email address!');
        return;
    }

    alert('Message sent successfully!');
    e.target.reset();
});
