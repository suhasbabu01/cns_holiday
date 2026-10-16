// ========================================
// Fleet & Services Data – CNS Holiday
// ========================================
const servicesData = [
    {
        id: 1,
        title: "Innova Crysta – Premium Comfort",
        shortDesc: "Our flagship 6+1 / 7+1 seater for family trips, corporate travel & outstation tours. Captain seats, powerful AC, ample luggage space.",
        icon: "fa-car",
        size: "large",
        categories: ["local", "outstation", "airport"],
        fullDesc: "Travel comfortably, reach happily. Innova Crysta is perfect for Ooty, Coonoor, Mysore & Coimbatore trips – smooth on ghats, premium comfort for long drives with experienced hill-station drivers.",
        included: [
            "6+1 / 7+1 seater Innova Crysta",
            "Local packages: 4hr/40km, 8hr/80km",
            "Outstation: per-km + driver bata",
            "Airport pickup / drop – on-time guarantee",
            "Sanitized car, uniformed driver"
        ],
        process: [
            "Call / WhatsApp 98444 64174",
            "Share date, pickup point & destination",
            "Get fixed quote – no hidden charges",
            "Driver details on SMS before trip",
            "Pay after trip – UPI / cash"
        ],
        documents: ["Families & groups up to 6", "Corporate airport transfers", "Mysore / Ooty weekend tours"],
        timeline: "₹3,500+ local • ₹22/km+ outstation (call for exact quote)"
    },
    {
        id: 2,
        title: "Tempo Traveller",
        shortDesc: "12 / 14 / 17-seater pushback Tempo Travellers for group tours, weddings & pilgrimages.",
        icon: "fa-shuttle-van",
        size: "small",
        categories: ["outstation", "local"],
        fullDesc: "Ideal for 9–17 passengers. High roof, pushback seats, music system & ample luggage carrier for multi-day South India tours.",
        included: [
            "12 / 14 / 17 seater options",
            "Pushback seats + charging points",
            "Ooty, Coorg, Tirupati packages",
            "Wedding / corporate shuttles"
        ],
        process: [
            "Share group size & itinerary",
            "Get vehicle + package quote",
            "Confirm with small advance",
            "Tour-ready vehicle at doorstep"
        ],
        documents: ["Groups 9–17 pax", "Weddings & events", "Multi-day tours"],
        timeline: "₹5,500+ local • ₹26/km+ outstation"
    },
    {
        id: 3,
        title: "Mini Bus & Bus Rental",
        shortDesc: "22 to 50-seater buses for school trips, company outings & large groups.",
        icon: "fa-bus",
        size: "small",
        categories: ["outstation", "local"],
        fullDesc: "Safe, speed-governed buses with experienced drivers for large groups. Perfect for Chennai, Tirupati, Mysore day trips.",
        included: [
            "22 / 32 / 50 seater buses",
            "School / college trips",
            "Corporate outings",
            "Wedding guest movement"
        ],
        process: [
            "Share headcount & route",
            "Site / route planning call",
            "Fixed package quotation",
            "On-trip 24/7 support"
        ],
        documents: ["Groups 20–50 pax", "Schools & corporates", "Weddings"],
        timeline: "Custom package – call 98444 64174"
    },
    {
        id: 4,
        title: "Local Packages – Bangalore",
        shortDesc: "Half-day & full-day Bangalore city tours, shopping, hospital & function drops.",
        icon: "fa-city",
        size: "small",
        categories: ["local"],
        fullDesc: "8hr/80km full-day and 4hr/40km half-day local packages in Innova or Tempo. Ideal for city sightseeing, marriages & guest handling.",
        included: [
            "4hr/40km & 8hr/80km slabs",
            "ISKCON, Lalbagh, Nandi Hills runs",
            "Function / hospital drops",
            "Extra km / hour clearly billed"
        ],
        process: [
            "Pick vehicle & time slot",
            "Fixed local package quote",
            "Driver arrives 10 min early",
            "Transparent extra billing"
        ],
        documents: ["City sightseeing", "Functions & guests", "Hospital visits"],
        timeline: "Innova ₹3,500+ • Tempo ₹5,500+"
    },
    {
        id: 5,
        title: "Outstation – South India Tourism",
        shortDesc: "Ooty, Coonoor, Mysore, Coimbatore, Chennai & custom hill-station / temple / beach tours.",
        icon: "fa-route",
        size: "wide",
        categories: ["outstation"],
        fullDesc: "New places, new experiences. 1-day Mysore, 2-day Ooty–Coonoor, Tirupati darshan, Coimbatore–Isha, Chennai drops & Kerala routes with tour planning help.",
        included: [
            "Ooty – Coonoor 2D/3D tours",
            "Mysore 1-day packages",
            "Tirupati / Coimbatore pilgrimage",
            "Chennai airport drops",
            "Custom South India circuits"
        ],
        process: [
            "Tell us dates & places",
            "Get route + hotel guidance",
            "Vehicle + driver package",
            "On-tour support on WhatsApp"
        ],
        documents: ["Family vacations", "Pilgrimage groups", "Honeymoon & friends trips"],
        timeline: "2-day Ooty from ₹18,000+ (vehicle only)"
    },
    {
        id: 6,
        title: "Airport Pickup & Drop",
        shortDesc: "On-time Kempegowda Airport transfers at fixed price – day or night, with flight tracking.",
        icon: "fa-plane",
        size: "small",
        categories: ["airport", "local"],
        fullDesc: "Early-morning or late-night flights – we track your flight and wait with placard. Fixed airport pricing from Gottigere & across Bangalore.",
        included: [
            "Fixed airport pricing",
            "Flight tracking + waiting",
            "Night-drive experienced drivers",
            "Innova / Tempo / Sedan options"
        ],
        process: [
            "Share flight no. & time",
            "Fixed pickup quote",
            "Driver + cab details on SMS",
            "Pay after drop"
        ],
        documents: ["Solo & family flyers", "Corporate pickups", "Night arrivals"],
        timeline: "Fixed quote on call – 24/7 service"
    }
];

// ========================================
// Destinations Data – CNS Holiday
// ========================================
const projectsData = [
    {
        id: 1,
        title: "Ooty – Queen of Hills",
        shortTitle: "Ooty",
        tag: "Hill Station",
        description: "Nilgiri toy train, Botanical Garden, Doddabetta & tea estates. Innova & Tempo packages from Bangalore with stay guidance.",
        image: "https://images.unsplash.com/photo-1506461883276-6d654efb6c80?auto=format&fit=crop&w=1400&q=80",
        fallback: "img/header-1.jpg"
    },
    {
        id: 2,
        title: "Coonoor – Tea Gardens",
        shortTitle: "Coonoor",
        tag: "Hill Station",
        description: "Sim's Park, Dolphin's Nose, Lamb's Rock & tea factory visits. Cool ghat drive with our experienced hill drivers.",
        image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1400&q=80",
        fallback: "img/header-2.jpg"
    },
    {
        id: 3,
        title: "Coorg – Coffee Land",
        shortTitle: "Coorg",
        tag: "Hill Station",
        description: "Abbey Falls, Raja's Seat, Dubare elephants & coffee estates. Perfect 2-day misty getaway from Bangalore.",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=80",
        fallback: "img/about-1.jpg"
    },
    {
        id: 4,
        title: "Munnar – Tea Valleys",
        shortTitle: "Munnar",
        tag: "Hill Station",
        description: "Eravikulam, Mattupetty dam, echo point & sprawling tea gardens. Multi-day Kerala hill circuit with Tempo Traveller.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=80",
        fallback: "img/about-2.jpg"
    },
    {
        id: 5,
        title: "Kodaikanal – Princess of Hills",
        shortTitle: "Kodaikanal",
        tag: "Hill Station",
        description: "Kodaikanal Lake, Coaker's Walk, Pillar Rocks & pine forests. Cool year-round escape for families & couples.",
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1400&q=80",
        fallback: "img/carousel-1.jpg"
    },
    {
        id: 6,
        title: "Mysore – Palace City",
        shortTitle: "Mysore",
        tag: "Heritage",
        description: "Mysore Palace, Chamundi Hills, St. Philomena Church & Brindavan Gardens. Perfect weekend 1-day Innova trip.",
        image: "https://images.unsplash.com/photo-1600112356915-089abb8fc71a?auto=format&fit=crop&w=1400&q=80",
        fallback: "img/commercial-1.jpg"
    },
    {
        id: 7,
        title: "Hampi – Ancient Wonders",
        shortTitle: "Hampi",
        tag: "Heritage",
        description: "Virupaksha Temple, stone chariot, Tungabhadra coracles & boulder landscapes. UNESCO heritage weekend tour.",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1400&q=80",
        fallback: "img/commercial-2.jpg"
    },
    {
        id: 8,
        title: "Tirupati – Balaji Darshan",
        shortTitle: "Tirupati",
        tag: "Pilgrimage",
        description: "TTD Balaji darshan with special-entry guidance, Padmavathi & Kalahasti add-ons. Overnight Tempo & Bus pilgrimage runs.",
        image: "https://images.unsplash.com/photo-1620766165457-a8025baa82e0?auto=format&fit=crop&w=1400&q=80",
        fallback: "img/commercial-3.jpg"
    },
    {
        id: 9,
        title: "Madurai – Meenakshi Temple",
        shortTitle: "Madurai",
        tag: "Temple",
        description: "Meenakshi Amman Temple, Thirumalai Nayakar Palace & evening aarti. Temple-town circuit with Rameshwaram extension.",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1400&q=80",
        fallback: "img/industrial-1.jpg"
    },
    {
        id: 10,
        title: "Pondicherry – French Coast",
        shortTitle: "Pondicherry",
        tag: "Beach",
        description: "Rock Beach, Aurobindo Ashram, French Quarter cafes & Paradise Beach. Chill coastal weekend with resort stay help.",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1400&q=80",
        fallback: "img/industrial-2.jpg"
    },
    {
        id: 11,
        title: "Gokarna – Serene Beaches",
        shortTitle: "Gokarna",
        tag: "Beach",
        description: "Om Beach, Kudle sunsets, Mahabaleshwar Temple & beach treks. Spiritual + beachy combo trip for groups & couples.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
        fallback: "img/industrial-3.jpg"
    },
    {
        id: 12,
        title: "Alleppey – Backwaters & Resorts",
        shortTitle: "Alleppey",
        tag: "Backwaters",
        description: "Houseboats, kayaking, Ayurvedic resorts & Vembanad sunsets. Premium Kerala backwater packages with stay tie-ups.",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1400&q=80",
        fallback: "img/banner-img.jpg"
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
    "Innova Crysta Tours",
    "Tempo Traveller Trips",
    "Airport Transfers",
    "Ooty • Mysore • Coorg",
    "Safe & Happy Journeys"
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

    if (email !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
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
        emailBody: `\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nVehicle/Trip: ${service}\nTrip Details: ${message}\n`,
        whatsappMessage: `New Trip Booking – CNS Holiday:\nName: ${name}\nPhone: ${phone}\nVehicle/Trip: ${service}\nDetails: ${message}`
    };
}

// Email button
document.getElementById('sendEmailBtn').addEventListener('click', function () {
    const v = validateForm();
    if (v.isValid) {
        const { emailBody } = prepareMessageContent(v.name, v.email, v.phone, v.service, v.message);
        window.location.href = `mailto:chandujaau1287@gmail.com?subject=New Trip Booking Request&body=${encodeURIComponent(emailBody)}`;
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
        const whatsappLink = `https://wa.me/919844464174?text=${encodeURIComponent(whatsappMessage)}`;
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
