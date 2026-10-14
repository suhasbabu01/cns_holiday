// ========================================
// Services Data
// ========================================
const servicesData = [
    {
        id: 1,
        title: "ESCOM Power Supply Permissions",
        shortDesc: "Complete end-to-end handling of new electrical connections, temporary power, load approvals, and all ESCOM regulatory liaison work for your property.",
        icon: "fa-bolt",
        size: "large",
        categories: ["residential", "commercial", "industrial"],
        fullDesc: "Navigating ESCOM approvals can be complex and time-consuming. We specialize in handling the entire process, from application to connection, ensuring smooth and timely power supply for your property.",
        included: [
            "New electrical connection applications",
            "Temporary power supply approvals",
            "Additional load enhancement / reduction",
            "Name change and tariff modifications",
            "Complete ESCOM liaison & follow-up"
        ],
        process: [
            "Initial consultation and site survey",
            "Document collection and verification",
            "ESCOM application submission",
            "Follow-up and coordination",
            "Approval and connection"
        ],
        documents: ["Property documents", "ID and address proof", "Site plan / layout", "Previous electricity bills (if any)"],
        timeline: "15-30 days"
    },
    {
        id: 2,
        title: "HT & LT Installations",
        shortDesc: "Licensed to execute High Tension and Low Tension installations including line works, cable laying, and distribution boards.",
        icon: "fa-tools",
        size: "small",
        categories: ["commercial", "industrial"],
        fullDesc: "Professional High Tension (HT) and Low Tension (LT) installations for commercial and industrial facilities. Our Class-I licensed team handles everything from design to commissioning.",
        included: [
            "HT line installation up to 11kV",
            "LT distribution boards and panels",
            "Cable laying (underground & overhead)",
            "Transformer erection & integration",
            "Safety testing and commissioning"
        ],
        process: [
            "Load analysis and design",
            "Material procurement",
            "Site preparation",
            "Installation and cable work",
            "Testing, commissioning & handover"
        ],
        documents: ["Load sanction letter", "Approved drawings", "Site plan"],
        timeline: "30-60 days"
    },
    {
        id: 3,
        title: "Transformer Services",
        shortDesc: "Supply, erection and installation of oil/dry-type transformers with complete CEIG and ESCOM approvals.",
        icon: "fa-industry",
        size: "small",
        categories: ["commercial", "industrial"],
        fullDesc: "Complete transformer installation services including supply, erection, testing, and all regulatory approvals. We handle both oil-type and dry-type transformers.",
        included: [
            "Oil-type & dry-type transformers",
            "Transformer erection & mounting",
            "Earthing and safety systems",
            "Testing and commissioning",
            "CEIG inspection coordination",
            "ESCOM approval liaison"
        ],
        process: [
            "Capacity calculation & sizing",
            "Transformer supply arrangement",
            "Foundation & site preparation",
            "Erection and connections",
            "Testing and regulatory approvals"
        ],
        documents: ["Load approval letter", "Site clearance", "Approved drawings"],
        timeline: "20-45 days"
    },
    {
        id: 4,
        title: "Electrical Shifting",
        shortDesc: "Shifting of transformers, poles, panels, meters, and overhead-to-underground conversions.",
        icon: "fa-exchange-alt",
        size: "small",
        categories: ["residential", "commercial", "industrial"],
        fullDesc: "Expert shifting services for electrical infrastructure including transformers, poles, panels, and meters. We also specialize in overhead-to-underground conversions.",
        included: [
            "Transformer relocation",
            "Pole shifting and re-erection",
            "Panel and meter shifting",
            "Cable re-routing",
            "Overhead to underground conversion",
            "Complete BESCOM coordination"
        ],
        process: [
            "Site assessment and survey",
            "BESCOM approval for shifting",
            "Planning and scheduling",
            "Safe dismantling and shifting",
            "Reinstallation and testing"
        ],
        documents: ["Shifting request letter", "Site plan", "ESCOM approval"],
        timeline: "15-30 days"
    },
    {
        id: 5,
        title: "Office Work & Documentation",
        shortDesc: "We manage all backend procedures for load applications, name changes, tariff changes, and CEIG safety certificates.",
        icon: "fa-file-alt",
        size: "wide",
        categories: ["residential", "commercial", "industrial"],
        fullDesc: "Complete documentation and regulatory support for all your electrical office work. We handle the paperwork so you don't have to deal with government departments.",
        included: [
            "Additional load applications",
            "Name change requests",
            "Tariff category changes",
            "CEIG safety certificate renewal",
            "Electrical inspector liaison",
            "Compliance & renewal management"
        ],
        process: [
            "Requirement analysis",
            "Document preparation",
            "Submission to authorities",
            "Follow-up and coordination",
            "Approval delivery"
        ],
        documents: ["ID and address proof", "Property ownership documents", "Previous electricity bills"],
        timeline: "10-20 days"
    }
];

// ========================================
// Projects Data
// ========================================
const projectsData = [
    {
        id: 1,
        title: "Industrial Transformer Installation",
        shortTitle: "Industrial Transformer",
        tag: "HT Installation",
        description: "Complete HT transformer installation for a manufacturing unit in Jigani Industrial Area, including BESCOM approvals and commissioning.",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=80",
        fallback: "img/IndustrialTransformer.jpeg"
    },
    {
        id: 2,
        title: "Commercial Complex Electrical Setup",
        shortTitle: "Commercial Setup",
        tag: "LT Installation",
        description: "Complete LT electrical installation for a 5-story commercial complex in Whitefield, Bengaluru, including distribution boards and BESCOM connection.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
        fallback: "img/commercial-1.jpg"
    },
    {
        id: 3,
        title: "Apartment Complex Power Upgrade",
        shortTitle: "Apartment Upgrade",
        tag: "Load Enhancement",
        description: "Additional load approval and electrical infrastructure upgrade for a 50-unit apartment complex in JP Nagar, Bengaluru, including meter shifting.",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80",
        fallback: "img/residential-1.jpg"
    },
    {
        id: 4,
        title: "Factory HT Line Installation",
        shortTitle: "Factory HT Line",
        tag: "11kV HT Line",
        description: "11kV HT line installation for an automotive parts manufacturing facility with transformer setup and safety systems.",
        image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1400&q=80",
        fallback: "img/industrial-1.jpg"
    }
];

// ========================================
// Preloader
// ========================================
window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }, 2200);
});

document.body.style.overflow = 'hidden';

// ========================================
// Scroll Progress Bar
// ========================================
function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    document.getElementById('scrollProgress').style.width = progress + '%';
}

// ========================================
// Back to Top with Progress Ring
// ========================================
function updateBackToTop() {
    const backToTop = document.getElementById('backToTop');
    const circle = document.querySelector('.progress-ring-circle');
    if (!circle) return;

    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    circle.style.strokeDasharray = circumference;

    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? scrollTop / docHeight : 0;
    circle.style.strokeDashoffset = circumference - (progress * circumference);

    if (scrollTop > 300) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
}

document.getElementById('backToTop').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ========================================
// Header Scroll Effect
// ========================================
function updateHeader() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// ========================================
// Active Nav Link on Scroll
// ========================================
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollPos = window.scrollY + 150;

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Unified scroll handler
window.addEventListener('scroll', function () {
    updateScrollProgress();
    updateBackToTop();
    updateHeader();
    updateActiveNav();
    animateCounters();
    animateStatRings();
});

// ========================================
// Mobile Navigation
// ========================================
document.querySelector('.mobile-toggle').addEventListener('click', function () {
    document.querySelector('.nav-menu').classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelector('.nav-menu').classList.remove('active');
    });
});

// ========================================
// Current Year
// ========================================
document.getElementById('currentYear').textContent = new Date().getFullYear();

// ========================================
// Smooth Scrolling
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Typewriter Effect
// ========================================
const typewriterPhrases = [
    "New ESCOM Connections",
    "HT & LT Installations",
    "Transformer Services",
    "Electrical Documentation",
    "Load Enhancement"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typewriterEl = document.getElementById('typewriter');

function typeWriter() {
    const currentPhrase = typewriterPhrases[phraseIndex];

    if (isDeleting) {
        typewriterEl.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterEl.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentPhrase.length) {
        speed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % typewriterPhrases.length;
        speed = 400;
    }

    setTimeout(typeWriter, speed);
}

// ========================================
// Counter Animation
// ========================================
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        if (counter.dataset.animated) return;
        const rect = counter.getBoundingClientRect();
        if (rect.top >= window.innerHeight || rect.bottom <= 0) return;

        counter.dataset.animated = 'true';
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        function update() {
            current += step;
            if (current >= target) {
                counter.textContent = target;
            } else {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(update);
            }
        }
        requestAnimationFrame(update);
    });
}

// ========================================
// SVG Stat Ring Animation
// ========================================
function animateStatRings() {
    const rings = document.querySelectorAll('.stat-ring-fill');
    rings.forEach(ring => {
        if (ring.dataset.animated) return;
        const rect = ring.getBoundingClientRect();
        if (rect.top >= window.innerHeight || rect.bottom <= 0) return;

        ring.dataset.animated = 'true';
        const percent = parseInt(ring.getAttribute('data-percent')) || 0;
        const radius = ring.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        ring.style.strokeDasharray = circumference;
        const offset = circumference - (percent / 100) * circumference;

        // Animate from full offset to target offset
        ring.style.strokeDashoffset = circumference;
        requestAnimationFrame(() => {
            ring.style.strokeDashoffset = offset;
        });
    });
}

// ========================================
// Scroll Reveal (Staggered)
// ========================================
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const parent = entry.target.parentElement;
                const siblings = parent ? Array.from(parent.querySelectorAll(':scope > .scroll-reveal')) : [];
                const siblingIndex = siblings.indexOf(entry.target);
                const delay = siblingIndex >= 0 ? siblingIndex * 120 : 0;

                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, delay);

                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
}

// ========================================
// 3D Tilt Effect on Service Cards
// ========================================
function initTiltEffect() {
    const cards = document.querySelectorAll('[data-tilt]');

    cards.forEach(card => {
        card.addEventListener('mousemove', function (e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -6;
            const rotateY = ((x - centerX) / centerX) * 6;

            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
        });
    });
}

// ========================================
// Render Services Bento Grid
// ========================================
function renderServices() {
    const container = document.getElementById('servicesBento');
    if (!container) return;

    container.innerHTML = servicesData.map((service, index) => {
        const num = String(index + 1).padStart(2, '0');
        const tagsHTML = service.categories.map(cat =>
            `<span class="bento-tag tag-${cat}">${cat}</span>`
        ).join('');

        const hexSvg = `
            <svg viewBox="0 0 80 90" aria-hidden="true">
                <defs>
                    <linearGradient id="bentoGrad${service.id}" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="${service.size === 'large' ? '#f9d806' : 'var(--primary)'}"/>
                        <stop offset="100%" stop-color="${service.size === 'large' ? '#ff4d30' : '#ffde29'}"/>
                    </linearGradient>
                </defs>
                <polygon points="40,2 76,24 76,66 40,88 4,66 4,24"
                    fill="url(#bentoGrad${service.id})" opacity="${service.size === 'large' ? '0.2' : '0.15'}"/>
                <polygon points="40,10 68,28 68,62 40,80 12,62 12,28"
                    fill="url(#bentoGrad${service.id})" opacity="${service.size === 'large' ? '0.1' : '0.08'}"/>
            </svg>
        `;

        return `
            <div class="bento-card size-${service.size}"
                 data-categories="${service.categories.join(',')}"
                 data-service-id="${service.id}"
                 onclick="openServiceModal(${service.id})">
                <div class="bento-number">${num}</div>
                <div class="bento-icon">${hexSvg}<i class="fas ${service.icon}"></i></div>
                <div class="bento-content">
                    <h3>${service.title}</h3>
                    <p>${service.shortDesc}</p>
                    <div class="bento-tags">${tagsHTML}</div>
                </div>
                <button class="bento-learn-more" onclick="event.stopPropagation(); openServiceModal(${service.id})">
                    Learn More <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        `;
    }).join('');
}

// ========================================
// Service Filter
// ========================================
function initServiceFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const category = this.dataset.filter;
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            document.querySelectorAll('.bento-card').forEach(card => {
                const cats = card.dataset.categories.split(',');
                if (category === 'all' || cats.includes(category)) {
                    card.classList.remove('filtered-out');
                } else {
                    card.classList.add('filtered-out');
                }
            });
        });
    });
}

// ========================================
// Service Detail Modal
// ========================================
function openServiceModal(id) {
    const service = servicesData.find(s => s.id === id);
    if (!service) return;

    document.getElementById('modalIcon').className = `fas ${service.icon}`;
    document.getElementById('modalTitle').textContent = service.title;
    document.getElementById('modalDesc').textContent = service.fullDesc;
    document.getElementById('modalCategories').innerHTML =
        service.categories.map(c => `<span class="bento-tag tag-${c}">${c}</span>`).join('');
    document.getElementById('modalIncluded').innerHTML =
        service.included.map(i => `<li>${i}</li>`).join('');
    document.getElementById('modalProcess').innerHTML =
        service.process.map(p => `<li>${p}</li>`).join('');
    document.getElementById('modalDocuments').innerHTML =
        service.documents.map(d => `<li>${d}</li>`).join('');
    document.getElementById('modalTimeline').textContent = service.timeline;

    document.getElementById('serviceModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeServiceModal() {
    document.getElementById('serviceModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal on click outside + close button
document.getElementById('serviceModalClose').addEventListener('click', closeServiceModal);
document.getElementById('serviceModal').addEventListener('click', function (e) {
    if (e.target === this) closeServiceModal();
});

// Close quote button also closes modal (and scrolls to contact)
document.getElementById('modalQuoteBtn').addEventListener('click', closeServiceModal);

// ========================================
// Load Projects - Expanding Accordion Panels
// ========================================
function loadProjects() {
    const projectsContainer = document.getElementById('projects-container');

    const projectsHTML = projectsData.map((project, index) => `
        <div class="project-panel ${index === 0 ? 'active' : ''}" data-project="${index}">
            <img src="${project.image}" alt="${project.title}" onerror="this.onerror=null;this.src='${project.fallback || project.image}'">
            <div class="panel-gradient"></div>
            <div class="panel-number">${String(index + 1).padStart(2, '0')}</div>
            <div class="panel-title-vertical"><span>${project.shortTitle || project.title}</span></div>
            <div class="panel-content">
                <span class="panel-tag">${project.tag || 'Project'}</span>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <button class="panel-view-btn" onclick="event.stopPropagation(); openLightbox(${index})">
                    View Details <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    `).join('');

    projectsContainer.innerHTML = projectsHTML;

    // Click to activate (desktop fallback + mobile)
    const panels = projectsContainer.querySelectorAll('.project-panel');
    panels.forEach(panel => {
        panel.addEventListener('click', function (e) {
            if (e.target.closest('.panel-view-btn')) return;
            panels.forEach(p => p.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// ========================================
// Project Lightbox
// ========================================
function openLightbox(index) {
    const project = projectsData[index];
    const lightbox = document.getElementById('projectLightbox');
    const img = document.getElementById('lightboxImg');
    img.onerror = function () { this.onerror = null; this.src = project.fallback || project.image; };
    img.src = project.image;
    img.alt = project.title;
    document.getElementById('lightboxTitle').textContent = project.title;
    document.getElementById('lightboxDesc').textContent = project.description;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('projectLightbox').classList.remove('active');
    document.body.style.overflow = 'auto';
}

document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('projectLightbox').addEventListener('click', function (e) {
    if (e.target === this) closeLightbox();
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeLightbox();
        closeServiceModal();
        const locationPopup = document.getElementById('location-popup');
        if (locationPopup && locationPopup.classList.contains('active')) {
            locationPopup.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
});

// ========================================
// Location Popup
// ========================================
function initLocationPopup() {
    const openBtn = document.getElementById('open-location');
    const closeBtn = document.getElementById('close-location');
    const popup = document.getElementById('location-popup');

    openBtn.addEventListener('click', () => {
        popup.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', () => {
        popup.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// ========================================
// Form Validation & Submission
// ========================================
function validateForm() {
    document.querySelectorAll('.error').forEach(error => error.style.display = 'none');
    document.getElementById('successMessage').style.display = 'none';
    document.getElementById('whatsappNotification').style.display = 'none';

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value.trim();

    let isValid = true;

    if (name === '') {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    if (service === '' || service === null) {
        document.getElementById('serviceError').style.display = 'block';
        isValid = false;
    }

    return { isValid, name, email, phone, service, message };
}

function prepareMessageContent(name, email, phone, service, message) {
    return {
        emailBody: `\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}\n`,
        whatsappMessage: `New Contact Form Submission:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`
    };
}

// Email button
document.getElementById('sendEmailBtn').addEventListener('click', function () {
    const v = validateForm();
    if (v.isValid) {
        const { emailBody } = prepareMessageContent(v.name, v.email, v.phone, v.service, v.message);
        window.location.href = `mailto:snehaelectrical96@gmail.com?subject=New Contact Form Submission&body=${encodeURIComponent(emailBody)}`;
        const msg = document.getElementById('successMessage');
        msg.style.display = 'block';
        msg.textContent = "Email client opened with your message!";
        setTimeout(() => msg.style.display = 'none', 5000);
    }
});

// WhatsApp button
document.getElementById('sendWhatsappBtn').addEventListener('click', function () {
    const v = validateForm();
    if (v.isValid) {
        const { whatsappMessage } = prepareMessageContent(v.name, v.email, v.phone, v.service, v.message);
        const whatsappLink = `https://wa.me/919902827569?text=${encodeURIComponent(whatsappMessage)}`;
        document.getElementById('whatsappLink').href = whatsappLink;

        const newWindow = window.open(whatsappLink, '_blank');
        if (!newWindow || newWindow.closed || typeof newWindow.closed == 'undefined') {
            document.getElementById('whatsappNotification').style.display = 'block';
        } else {
            const msg = document.getElementById('successMessage');
            msg.style.display = 'block';
            msg.textContent = "WhatsApp opened with your message!";
        }

        setTimeout(() => {
            document.getElementById('successMessage').style.display = 'none';
            document.getElementById('whatsappNotification').style.display = 'none';
        }, 5000);
    }
});

// ========================================
// Flip Cards - Tap to flip (mobile)
// ========================================
function initFlipCards() {
    document.querySelectorAll('.flip-card').forEach(card => {
        card.addEventListener('click', function (e) {
            if (e.target.closest('a, button')) return;
            this.classList.toggle('flipped');
        });
    });
}

// ========================================
// Initialize Everything
// ========================================
document.addEventListener('DOMContentLoaded', function () {
    renderServices();
    initServiceFilter();
    loadProjects();
    initFlipCards();
    initLocationPopup();
    initScrollReveal();
    initTiltEffect();
    typeWriter();
    animateCounters();
    animateStatRings();
    updateBackToTop();
});
