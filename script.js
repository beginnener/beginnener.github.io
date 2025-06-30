// Project Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const viewProjectBtns = document.querySelectorAll('.view-project');
    const projectModal = document.getElementById('projectModal');
    const modalClose = document.getElementById('modalClose');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalTech = document.getElementById('modalTech');
    const modalLiveLink = document.getElementById('modalLiveLink');
    const modalGithubLink = document.getElementById('modalGithubLink');

    // Project data
    const projectsData = {
        1: {
            title: "E-Commerce Website",
            description: "A comprehensive e-commerce platform built with modern web technologies. Features include user authentication, shopping cart functionality, filtering, order management, and responsive design. The backend is powered by Laravel with a MySQL database, while the frontend uses Bootstrap and vanilla JavaScript for interactive elements.",
            tech: ["HTML", "CSS", "JavaScript", "Laravel", "MySQL", "Bootstrap"],
            liveLink: "https://youtu.be/Ylwmm8No-tg",
            githubLink: "https://github.com/beginnener/campgo"
        },
        2: {
            title: "UI Relayout - STIE Ekuitas",
            description: "A UI relayout project for STIE Ekuitas, focusing on enhancing user experience and visual appeal. The project involved redesigning the website layout, improving navigation, and ensuring responsiveness across devices. It utilizes Wordpress for content management and includes custom CSS for styling. Note: This project is currently private and not available on GitHub.",
            tech: ["Wordpress", "CSS"],
            liveLink: "",
            githubLink: ""
        },
        3: {
            title: "Portfolio Website",
            description: "A personal portfolio website showcasing web development projects and skills. Built with modern design principles, featuring smooth animations, responsive layout, and optimized performance. Includes sections for about, skills, projects, and contact information with form validation and email integration.",
            tech: ["HTML", "CSS", "JavaScript", "GSAP"],
            liveLink: "",
            githubLink: "https://github.com/beginnener/beginnener.github.io"
        },
        4: {
            title: "Main Riang - School Website",
            description: "A school website for Main Riang Preschool, designed to provide information about the institution, it's programs, and events. The site features a clean layout, easy navigation for user. Note: This project is currently private and not available on GitHub.",
            tech: ["Laravel", "Tailwind CSS", "JavaScript", "Alpine JS"],
            liveLink: "",
            githubLink: ""
        }
    };

    // Open modal when view project button is clicked
    viewProjectBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            const project = projectsData[projectId];
            
            // Populate modal content
            modalTitle.textContent = project.title;
            modalDescription.textContent = project.description;
            
            // Clear and populate tech stack
            modalTech.innerHTML = '';
            project.tech.forEach(tech => {
                const span = document.createElement('span');
                span.textContent = tech;
                modalTech.appendChild(span);
            });
            
            // Set links
            modalLiveLink.href = project.liveLink;
            modalGithubLink.href = project.githubLink;

            // Show links only if they are available
            modalLiveLink.style.display = project.liveLink ? 'inline-block' : 'none';
            modalGithubLink.style.display = project.githubLink ? 'inline-block' : 'none';
            
            // Show modal
            projectModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });

    // Close modal when close button is clicked
    modalClose.addEventListener('click', function() {
        projectModal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scrolling
    });

    // Close modal when clicking outside the modal content
    projectModal.addEventListener('click', function(e) {
        if (e.target === projectModal) {
            projectModal.classList.remove('active');
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && projectModal.classList.contains('active')) {
            projectModal.classList.remove('active');
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    });
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update active navigation link
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
});

// Update active navigation link on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(navLink => {
        navLink.classList.remove('active');
        if (navLink.getAttribute('href') === `#${current}`) {
            navLink.classList.add('active');
        }
    });
});

// Hamburger Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar a');

    // Toggle mobile menu
    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('active');
        
        // Change hamburger icon
        if (navbar.classList.contains('active')) {
            menuIcon.classList.remove('bx-menu');
            menuIcon.classList.add('bx-x');
        } else {
            menuIcon.classList.remove('bx-x');
            menuIcon.classList.add('bx-menu');
        }
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
            menuIcon.classList.add('bx-menu');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
            menuIcon.classList.add('bx-menu');
        }
    });

    // Close mobile menu on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 991) {
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
            menuIcon.classList.add('bx-menu');
        }
    });
});

// Create particle effect
const particlesContainer = document.getElementById('particles-container');
const particleCount = 80;

// Create particles
for (let i = 0; i < particleCount; i++) {
    createParticle();
}

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random size (small)
    const size = Math.random() * 3 + 1;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Initial position
    resetParticle(particle);
    
    particlesContainer.appendChild(particle);
    
    // Animate
    animateParticle(particle);
}

function resetParticle(particle) {
    // Random position
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.opacity = '0';
    
    return {
        x: posX,
        y: posY
    };
}

function animateParticle(particle) {
    // Initial position
    const pos = resetParticle(particle);
    
    // Random animation properties
    const duration = Math.random() * 10 + 10;
    const delay = Math.random() * 5;
    
    // Animate with GSAP-like timing
    setTimeout(() => {
        particle.style.transition = `all ${duration}s linear`;
        particle.style.opacity = Math.random() * 0.3 + 0.1;
        
        // Move in a slight direction
        const moveX = pos.x + (Math.random() * 20 - 10);
        const moveY = pos.y - Math.random() * 30; // Move upwards
        
        particle.style.left = `${moveX}%`;
        particle.style.top = `${moveY}%`;
        
        // Reset after animation completes
        setTimeout(() => {
            animateParticle(particle);
        }, duration * 1000);
    }, delay * 1000);
}

// Mouse interaction
document.addEventListener('mousemove', (e) => {
    // Create particles at mouse position
    const mouseX = (e.clientX / window.innerWidth) * 100;
    const mouseY = (e.clientY / window.innerHeight) * 100;
    
    // Create temporary particle
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Small size
    const size = Math.random() * 4 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Position at mouse
    particle.style.left = `${mouseX}%`;
    particle.style.top = `${mouseY}%`;
    particle.style.opacity = '0.6';
    
    particlesContainer.appendChild(particle);
    
    // Animate outward
    setTimeout(() => {
        particle.style.transition = 'all 2s ease-out';
        particle.style.left = `${mouseX + (Math.random() * 10 - 5)}%`;
        particle.style.top = `${mouseY + (Math.random() * 10 - 5)}%`;
        particle.style.opacity = '0';
        
        // Remove after animation
        setTimeout(() => {
            particle.remove();
        }, 2000);
    }, 10);
    
    // Subtle movement of gradient spheres
    const spheres = document.querySelectorAll('.gradient-sphere');
    const moveX = (e.clientX / window.innerWidth - 0.5) * 5;
    const moveY = (e.clientY / window.innerHeight - 0.5) * 5;
    
    spheres.forEach(sphere => {
        const currentTransform = getComputedStyle(sphere).transform;
        sphere.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});