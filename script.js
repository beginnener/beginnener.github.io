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
            description: "A comprehensive e-commerce platform built with modern web technologies. Features include user authentication, shopping cart functionality, payment gateway integration, product search and filtering, order management, and responsive design. The backend is powered by Laravel with a MySQL database, while the frontend uses vanilla JavaScript for interactive elements.",
            tech: ["HTML", "CSS", "JavaScript", "Laravel", "MySQL", "Bootstrap"],
            liveLink: "#",
            githubLink: "#"
        },
        2: {
            title: "Task Management App",
            description: "A productivity-focused task management application with an intuitive drag-and-drop interface. Users can create, organize, and track tasks across different categories. Features include progress tracking, deadline notifications, team collaboration, and data synchronization across devices using Firebase backend services.",
            tech: ["Vue.js", "Tailwind CSS", "Firebase", "Vuex", "Chart.js"],
            liveLink: "#",
            githubLink: "#"
        },
        3: {
            title: "Portfolio Website",
            description: "A personal portfolio website showcasing web development projects and skills. Built with modern design principles, featuring smooth animations, responsive layout, and optimized performance. Includes sections for about, skills, projects, and contact information with form validation and email integration.",
            tech: ["HTML", "CSS", "JavaScript", "GSAP", "EmailJS", "AOS"],
            liveLink: "#",
            githubLink: "#"
        },
        4: {
            title: "Weather Dashboard",
            description: "A comprehensive weather application providing real-time weather information and forecasts. Features include current weather conditions, 7-day forecast, location-based weather, weather maps, and weather alerts. Built with React and integrated with multiple weather APIs for accurate data.",
            tech: ["React", "CSS Modules", "Weather API", "Axios", "React Router"],
            liveLink: "#",
            githubLink: "#"
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

