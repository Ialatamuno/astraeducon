// Load Header and Footer dynamically
document.addEventListener('DOMContentLoaded', function () {
    // Load header
    fetch('includes/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            initMobileMenu();
            setActivePage();
        });

    // Load footer
    fetch('includes/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });
});

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuClose = document.getElementById('mobile-menu-close');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
        });
    }

    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    }

    if (mobileMenu) {
        mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu) {
                mobileMenu.classList.add('hidden');
            }
        });
    }
}

// Set active page in navigation
function setActivePage() {
    const currentPage = document.body.dataset.page;
    if (!currentPage) return;

    // Desktop nav
    const navLinks = document.querySelectorAll('nav a[href]');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href.includes(currentPage)) {
            link.classList.add('text-crimson');
            link.classList.remove('text-navy', 'hover:text-crimson');
        }
    });
}

// Smooth scroll for anchor links
document.addEventListener('click', function (e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href') && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Service Modal Data
const servicesData = {
    'consultoria-estrat': {
        title: 'Consultoría Estratégica',
        tag: 'Consultoría',
        image: 'images/servicio1.jpg',
        description: 'Acompañamiento profesional en planificación, diagnóstico y optimización de procesos organizacionales. Ayudamos a definir el rumbo de su institución con una visión de futuro clara y alcanzable.',
        features: [
            'Planificación Estratégica Organizacional',
            'Diagnóstico y Análisis Institucional',
            'Gestión del Cambio Estratégico',
            'Optimización de Procesos de Negocio'
        ]
    },
    'capacitacion-espec': {
        title: 'Capacitación Especializada',
        tag: 'Capacitación',
        image: 'images/servicio2.jpg',
        description: 'Programas de formación diseñados para potenciar el desarrollo profesional de su equipo. Enfoque práctico y orientado a resultados tangibles.',
        features: [
            'Liderazgo y Gestión de Equipos de Alto Rendimiento',
            'Gestión de Proyectos (Agile & PMP)',
            'Innovación y Creatividad Aplicada',
            'Comunicación Efectiva y Negociación'
        ]
    },
    'formacion-emp': {
        title: 'Formación Empresarial',
        tag: 'Formación',
        image: 'images/servicio3.jpg',
        description: 'Soluciones de formación in-company personalizadas. Diseñamos programas que se adaptan a la cultura y necesidades específicas de su organización.',
        features: [
            'Programas In-Company a la Medida',
            'Talleres Prácticos de Alta Intensidad',
            'Certificaciones Profesionales Reconocidas',
            'Planes de Formación Continua'
        ]
    },
    'desarrollo-org': {
        title: 'Desarrollo Organizacional',
        tag: 'Desarrollo',
        image: 'images/servicio4.jpg',
        description: 'Fortalecimiento de la cultura y estructura organizacional. Trabajamos en el ADN institucional para asegurar un crecimiento sostenible y armónico.',
        features: [
            'Fortalecimiento de la Cultura Organizacional',
            'Diseño y Rediseño de Estructuras',
            'Clima y Compromiso Laboral',
            'Gestión del Talento y Sucesión'
        ]
    },
    'metodologias-inn': {
        title: 'Metodologías Innovadoras',
        tag: 'Innovación',
        image: 'images/servicio5.jpg',
        description: 'Implementación de enfoques modernos y tecnologías de vanguardia para la formación y consultoría. Utilizamos las mejores herramientas del mercado global.',
        features: [
            'Design Thinking y Co-creación',
            'Metodologías de Aprendizaje Activo',
            'Gamificación en Entornos Corporativos',
            'Uso Ético de IA en la Organización'
        ]
    },
    'transf-digital': {
        title: 'Transformación Digital',
        tag: 'Digital',
        image: 'images/servicio6.jpg',
        description: 'Asesoría integral en la digitalización de procesos institucionales. Preparamos a su empresa para los desafíos tecnológicos de la nueva era.',
        features: [
            'Estrategia de Transformación Digital',
            'Adopción de Tecnologías en la Nube',
            'Digitalización de Procesos Administrativos',
            'Ciberseguridad y Protección de Datos'
        ]
    }
};

// Modal Functions
function openServiceModal(serviceKey) {
    const data = servicesData[serviceKey];
    if (!data) return;

    const modal = document.getElementById('service-modal');
    const title = document.getElementById('modal-title');
    const tag = document.getElementById('modal-tag');
    const desc = document.getElementById('modal-description');
    const img = document.getElementById('modal-image');
    const featuresList = document.getElementById('modal-features');

    // Populate data
    title.innerText = data.title;
    tag.innerText = data.tag;
    desc.innerText = data.description;
    img.src = data.image;
    img.alt = data.title;

    // Clear and populate features
    featuresList.innerHTML = '';
    data.features.forEach(feature => {
        const li = document.createElement('div');
        li.className = 'flex items-start text-gray-700';
        li.innerHTML = `<i class="fas fa-check-circle text-crimson mt-1 mr-3"></i><span>${feature}</span>`;
        featuresList.appendChild(li);
    });

    // Show modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent scroll
}

function closeServiceModal() {
    const modal = document.getElementById('service-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = ''; // Restore scroll
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeServiceModal();
    }
});
