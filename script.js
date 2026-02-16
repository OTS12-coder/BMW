// ===================================
// Global Variables
// ===================================

let darkMode = true;
let lastScrollY = 0;
let currentSpeed = 0;
let targetSpeed = 0;

// Notification Popup
function showNotification(message) {
    const popup = document.getElementById('notification-popup');
    const messageEl = document.getElementById('notification-message');
    
    messageEl.textContent = message;
    popup.classList.add('show');
    
    setTimeout(() => {
        popup.classList.remove('show');
    }, 3000);
}

// Car Details Database
const CAR_DATA = {
    m4: {
        title: 'BMW M4 Competition',
        subtitle: 'The Ultimate Sports Coupe',
        image: CAR_IMAGES.showcase.car1,
        acceleration: '3.9 seconds',
        power: '503 hp',
        engine: '3.0L Twin-Turbo I6',
        description: 'The BMW M4 Competition represents the pinnacle of sports coupe engineering. With its 3.0-liter twin-turbocharged inline-6 engine producing 503 horsepower, this machine delivers exhilarating performance that pushes the boundaries of what a coupe can achieve. The M xDrive all-wheel-drive system ensures optimal traction and control in all conditions, while the adaptive M suspension provides the perfect balance between comfort and track-ready handling. Carbon fiber components throughout reduce weight and enhance rigidity, making every drive an unforgettable experience.',
        features: [
            'M xDrive All-Wheel Drive System',
            'Carbon Fiber Roof & Components',
            'Adaptive M Suspension',
            'M Sport Exhaust System',
            'Competition Package with 19"/20" Wheels',
            'M Carbon Bucket Seats',
            'M Drive Professional',
            'Track-Tuned Performance'
        ]
    },
    i7: {
        title: 'BMW i7 xDrive60',
        subtitle: 'Electric Luxury Redefined',
        image: CAR_IMAGES.showcase.car2,
        acceleration: '4.7 seconds',
        power: '536 hp',
        engine: 'Dual Electric Motors',
        description: 'The BMW i7 xDrive60 ushers in a new era of sustainable luxury. This fully electric flagship sedan combines breathtaking performance with zero-emission driving, offering up to 625 kilometers of range. The dual-motor setup delivers 536 horsepower while maintaining whisper-quiet operation. Inside, the revolutionary 31.3-inch BMW Theatre Screen transforms the rear cabin into a mobile entertainment suite, while Executive Drive Pro ensures passengers experience the ultimate in comfort. Advanced battery technology and ultra-fast charging capabilities make long-distance travel effortless.',
        features: [
            '625 km Electric Range',
            '31.3" BMW Theatre Screen',
            'Executive Drive Pro Suspension',
            'Panoramic Sky Lounge Roof',
            'Bowers & Wilkins Diamond Surround Sound',
            'Ultra-Fast DC Charging (195 kW)',
            'Executive Lounge Rear Seats',
            'Intelligent Personal Assistant'
        ]
    },
    x6: {
        title: 'BMW X6 M50i',
        subtitle: 'Command the Road',
        image: CAR_IMAGES.showcase.car3,
        acceleration: '4.1 seconds',
        power: '523 hp',
        engine: '4.4L V8 TwinPower Turbo',
        description: 'The BMW X6 M50i combines the commanding presence of a Sports Activity Vehicle with the heart of a performance car. Its 4.4-liter V8 TwinPower Turbo engine produces 523 horsepower, propelling this luxury SUV to 100 km/h in just 4.1 seconds. The iconic coupe-like silhouette turns heads wherever it goes, while the spacious interior offers premium comfort for all passengers. Adaptive M suspension and integral active steering provide exceptional handling dynamics that defy the vehicle\'s size, making it equally at home on winding mountain roads or urban streets.',
        features: [
            '4.4L V8 TwinPower Turbo Engine',
            'Adaptive M Suspension Professional',
            'Integral Active Steering',
            'M Sport Exhaust with Flap Control',
            'Panoramic Glass Roof',
            'Vernasca Leather Interior',
            'Harman Kardon Surround Sound',
            'Driving Assistant Professional'
        ]
    },
    m8: {
        title: 'BMW M8 Competition',
        subtitle: 'The Pinnacle of Performance',
        image: CAR_IMAGES.showcase.car4,
        acceleration: '3.2 seconds',
        power: '625 hp',
        engine: '4.4L V8 M TwinPower Turbo',
        description: 'The BMW M8 Competition stands as the ultimate expression of BMW M\'s motorsport expertise. Its hand-built 4.4-liter V8 M TwinPower Turbo engine unleashes an astounding 625 horsepower, launching this grand tourer to 100 km/h in a mere 3.2 seconds. The M xDrive all-wheel-drive system with rear-bias mode allows drivers to exploit the full potential of this magnificent powertrain. Carbon fiber components, active M differential, and M compound brakes ensure track-ready capability, while the luxuriously appointed cabin provides the refinement expected from a flagship BMW.',
        features: [
            'Hand-Built M TwinPower Turbo V8',
            'M xDrive with Rear-Bias Mode',
            'Active M Differential',
            'M Carbon Ceramic Brakes',
            'Carbon Fiber Exterior Package',
            'Merino Leather Interior',
            'M Sport Seats with Extended Leather',
            'Competition Package with 20" Wheels'
        ]
    }
};

// ===================================
// Apply Images from Configuration
// ===================================

function applyImages() {
    // M4 Images
    document.querySelector('.m4-front').style.backgroundImage = 
        `linear-gradient(to bottom, ${darkMode ? 'rgba(11,11,11,0.3), rgba(11,11,11,0.7)' : 'rgba(255,255,255,0.3), rgba(255,255,255,0.7)'}), url('${CAR_IMAGES.m4.front}')`;
    
    document.querySelector('.m4-side').style.backgroundImage = `url('${CAR_IMAGES.m4.side}')`;
    
    document.querySelector('.carbon-fiber').style.backgroundImage = `url('${CAR_IMAGES.m4.carbon}')`;
    document.querySelector('.wheels').style.backgroundImage = `url('${CAR_IMAGES.m4.wheels}')`;
    document.querySelector('.brakes').style.backgroundImage = `url('${CAR_IMAGES.m4.brakes}')`;
    
    // i7 Images
    document.querySelector('.i7-front').style.backgroundImage = `url('${CAR_IMAGES.i7.front}')`;
    document.querySelector('.interior-image').style.backgroundImage = `url('${CAR_IMAGES.i7.interior}')`;
    document.querySelector('.i7-tech-bg').style.backgroundImage = `url('${CAR_IMAGES.i7.tech}')`;
    
    // X6 Images
    document.querySelector('.x6-mountain').style.backgroundImage = `url('${CAR_IMAGES.x6.mountain}')`;
    document.querySelector('.x6-wide').style.backgroundImage = `url('${CAR_IMAGES.x6.wide}')`;
    document.querySelector('.x6-centered').style.backgroundImage = `url('${CAR_IMAGES.x6.centered}')`;
    
    // Showcase Images
    document.getElementById('showcase-img-1').style.backgroundImage = `url('${CAR_IMAGES.showcase.car1}')`;
    document.getElementById('showcase-img-2').style.backgroundImage = `url('${CAR_IMAGES.showcase.car2}')`;
    document.getElementById('showcase-img-3').style.backgroundImage = `url('${CAR_IMAGES.showcase.car3}')`;
    document.getElementById('showcase-img-4').style.backgroundImage = `url('${CAR_IMAGES.showcase.car4}')`;
}

// ===================================
// Loading Screen
// ===================================

window.addEventListener('load', () => {
    applyImages();
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.classList.add('hidden');
    }, 2500);
});

// ===================================
// Theme Toggle
// ===================================

const themeToggle = document.getElementById('theme-toggle');
const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');

themeToggle.addEventListener('click', () => {
    darkMode = !darkMode;
    document.body.classList.toggle('light-mode');
    
    if (darkMode) {
        moonIcon.classList.remove('hidden');
        sunIcon.classList.add('hidden');
    } else {
        moonIcon.classList.add('hidden');
        sunIcon.classList.remove('hidden');
    }
    
    // Reapply images with new theme
    applyImages();
});

// ===================================
// Car Details Popup Functionality
// ===================================

const detailsPopup = document.getElementById('car-details-popup');
const closeDetails = document.getElementById('close-details');
const detailsImage = document.getElementById('details-image');
const detailsTitle = document.getElementById('details-title');
const detailsSubtitle = document.getElementById('details-subtitle');
const detailsDescription = document.getElementById('details-description');
const specAcceleration = document.getElementById('spec-acceleration');
const specPower = document.getElementById('spec-power');
const specEngine = document.getElementById('spec-engine');
const detailsFeaturesList = document.getElementById('details-features-list');

// Show car details
function showCarDetails(carKey) {
    const car = CAR_DATA[carKey];
    if (!car) return;
    
    // Populate popup
    detailsImage.style.backgroundImage = `url('${car.image}')`;
    detailsTitle.textContent = car.title;
    detailsSubtitle.textContent = car.subtitle;
    detailsDescription.textContent = car.description;
    specAcceleration.textContent = car.acceleration;
    specPower.textContent = car.power;
    specEngine.textContent = car.engine;
    
    // Populate features
    detailsFeaturesList.innerHTML = car.features.map(feature => 
        `<li>${feature}</li>`
    ).join('');
    
    // Show popup
    detailsPopup.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Close popup
function closeCarDetails() {
    detailsPopup.classList.remove('show');
    document.body.style.overflow = 'auto';
}

closeDetails.addEventListener('click', closeCarDetails);

detailsPopup.addEventListener('click', (e) => {
    if (e.target === detailsPopup) {
        closeCarDetails();
    }
});

// ESC key to close
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && detailsPopup.classList.contains('show')) {
        closeCarDetails();
    }
});

// Add click handlers to view details buttons
document.querySelectorAll('.view-details-btn').forEach((btn, index) => {
    const carKeys = ['m4', 'i7', 'x6', 'm8'];
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        showCarDetails(carKeys[index]);
    });
});

// Add click handlers to showcase items
document.querySelectorAll('.clickable-car').forEach(item => {
    const carKey = item.getAttribute('data-car');
    item.addEventListener('click', () => {
        showCarDetails(carKey);
    });
});

// Contact dealer button
document.querySelector('.contact-dealer-btn').addEventListener('click', () => {
    showNotification('Thank you for your interest! A BMW dealer will contact you shortly.');
});

// ===================================
// Smooth Scroll Progress
// ===================================

function updateScrollProgress() {
    const scrollProgress = document.getElementById('scroll-progress');
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;
    scrollProgress.style.height = scrolled + '%';
}

// ===================================
// BMW History Animation
// ===================================

function animateHistory() {
    const historyContent = document.querySelector('.history-content');
    if (!historyContent) return;
    
    const rect = historyContent.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    if (rect.top < windowHeight * 0.7) {
        historyContent.classList.add('visible');
    }
}

// ===================================
// Cinematic Scene Animations
// ===================================

function animateIntroScene() {
    const scene = document.getElementById('intro-scene');
    const content = scene.querySelector('.intro-content');
    const line = scene.querySelector('.intro-line');
    const bg = scene.querySelector('.intro-bg');
    const hint = scene.querySelector('.scroll-hint');
    
    const sceneRect = scene.getBoundingClientRect();
    const sceneTop = sceneRect.top;
    const sceneHeight = sceneRect.height;
    const scrollProgress = Math.max(0, Math.min(1, -sceneTop / sceneHeight));
    
    // Cinematic fade out
    const fadeStart = 0.05;
    const fadeEnd = 0.15;
    if (scrollProgress < fadeStart) {
        content.style.opacity = '1';
        hint.style.opacity = '1';
    } else if (scrollProgress >= fadeStart && scrollProgress < fadeEnd) {
        const fadeProgress = (scrollProgress - fadeStart) / (fadeEnd - fadeStart);
        const opacity = 1 - fadeProgress;
        content.style.opacity = opacity;
        hint.style.opacity = opacity;
        content.style.transform = `translateY(${fadeProgress * 30}px)`;
    } else {
        content.style.opacity = '0';
        hint.style.opacity = '0';
    }
    
    // Cinematic line reveal
    const lineStart = 0.05;
    const lineEnd = 0.12;
    if (scrollProgress >= lineStart && scrollProgress < lineEnd) {
        const lineProgress = (scrollProgress - lineStart) / (lineEnd - lineStart);
        line.style.width = (lineProgress * 100) + '%';
    } else if (scrollProgress >= lineEnd) {
        line.style.width = '100%';
    } else {
        line.style.width = '0%';
    }
    
    // Background reveal
    const bgStart = 0.08;
    const bgEnd = 0.15;
    if (scrollProgress >= bgStart && scrollProgress < bgEnd) {
        const bgProgress = (scrollProgress - bgStart) / (bgEnd - bgStart);
        bg.style.opacity = bgProgress * 0.3;
    } else if (scrollProgress >= bgEnd) {
        bg.style.opacity = '0.3';
    } else {
        bg.style.opacity = '0';
    }
}

function animateM4Reveal() {
    const scene = document.getElementById('m4-reveal');
    const container = scene.querySelector('.car-image-container');
    const image = scene.querySelector('.m4-front');
    const glow = scene.querySelector('.headlight-glow');
    const title = scene.querySelector('.car-title');
    
    const sceneRect = scene.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    if (sceneRect.top < windowHeight && sceneRect.bottom > 0) {
        const progress = Math.max(0, Math.min(1, 1 - (sceneRect.top / windowHeight)));
        
        // Cinematic fade in
        if (progress > 0.1) {
            const fadeProgress = Math.min(1, (progress - 0.1) / 0.4);
            container.style.opacity = fadeProgress;
            glow.style.opacity = fadeProgress;
        }
        
        // Cinematic zoom
        const scale = 1.3 - (progress * 0.3);
        image.style.transform = `scale(${scale})`;
        
        // Title slide in
        if (progress > 0.2) {
            const titleProgress = Math.min(1, (progress - 0.2) / 0.3);
            title.style.opacity = titleProgress;
            title.style.transform = `translateX(${-100 + (titleProgress * 100)}px)`;
        }
    }
}

function animateM4Speed() {
    const scene = document.getElementById('m4-speed');
    const container = scene.querySelector('.car-image-container');
    const display = scene.querySelector('.speed-display');
    const speedValue = document.getElementById('speed-value');
    const rpmBar = document.getElementById('rpm-bar');
    
    const sceneRect = scene.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    if (sceneRect.top < windowHeight && sceneRect.bottom > 0) {
        // Start earlier - when scene is just entering viewport
        const progress = Math.max(0, Math.min(1, 1 - (sceneRect.top / windowHeight)));
        
        // Show earlier - at 5% instead of 10%
        if (progress > 0.05) {
            const fadeProgress = Math.min(1, (progress - 0.05) / 0.4);
            container.style.opacity = fadeProgress;
            display.style.opacity = fadeProgress;
            
            // Calculate target speed based on scroll progress - more sensitive
            targetSpeed = Math.round(fadeProgress * 100);
            
            // Faster smooth speed animation
            const speedDiff = targetSpeed - currentSpeed;
            if (Math.abs(speedDiff) > 0.3) {
                currentSpeed += speedDiff * 0.25; // Faster transition (was 0.15)
                speedValue.textContent = Math.round(currentSpeed);
            } else {
                currentSpeed = targetSpeed;
                speedValue.textContent = targetSpeed;
            }
            
            // RPM bar
            rpmBar.style.width = (fadeProgress * 100) + '%';
        } else {
            // Reset when scrolling back up
            if (currentSpeed > 0) {
                currentSpeed = Math.max(0, currentSpeed - 8); // Faster decrease
                speedValue.textContent = Math.round(currentSpeed);
            }
        }
    } else if (sceneRect.top > windowHeight) {
        // Scene is below viewport - reset
        currentSpeed = 0;
        targetSpeed = 0;
        speedValue.textContent = 0;
    } else if (sceneRect.bottom < 0) {
        // Scene is above viewport - keep at 100
        currentSpeed = 100;
        targetSpeed = 100;
        speedValue.textContent = 100;
    }
}

function animateM4Details() {
    const scene = document.getElementById('m4-details');
    const grid = scene.querySelector('.details-grid');
    
    const sceneRect = scene.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    if (sceneRect.top < windowHeight && sceneRect.bottom > 0) {
        const progress = Math.max(0, Math.min(1, 1 - (sceneRect.top / windowHeight)));
        
        if (progress > 0.15) {
            grid.style.opacity = Math.min(1, (progress - 0.15) / 0.3);
        }
    }
}

function animateI7Arrival() {
    const scene = document.getElementById('i7-arrival');
    const container = scene.querySelector('.car-image-container');
    const titleContainer = scene.querySelector('.i7-title-container');
    
    const sceneRect = scene.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    if (sceneRect.top < windowHeight && sceneRect.bottom > 0) {
        const progress = Math.max(0, Math.min(1, 1 - (sceneRect.top / windowHeight)));
        
        if (progress > 0.1) {
            const fadeProgress = Math.min(1, (progress - 0.1) / 0.4);
            container.style.opacity = fadeProgress;
            titleContainer.style.opacity = fadeProgress;
            titleContainer.style.transform = `translateY(${20 - (fadeProgress * 20)}px)`;
        }
    }
}

function animateI7Interior() {
    const scene = document.getElementById('i7-interior');
    const grid = scene.querySelector('.interior-grid');
    
    const sceneRect = scene.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    if (sceneRect.top < windowHeight && sceneRect.bottom > 0) {
        const progress = Math.max(0, Math.min(1, 1 - (sceneRect.top / windowHeight)));
        
        if (progress > 0.15) {
            const fadeProgress = Math.min(1, (progress - 0.15) / 0.3);
            grid.style.opacity = fadeProgress;
            grid.style.transform = `translateX(${50 - (fadeProgress * 50)}px)`;
        }
    }
}

function animateI7Tech() {
    const scene = document.getElementById('i7-tech');
    const container = scene.querySelector('.car-image-container');
    const image = scene.querySelector('.i7-tech-bg');
    const title = scene.querySelector('.tech-title');
    
    const sceneRect = scene.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    if (sceneRect.top < windowHeight && sceneRect.bottom > 0) {
        const progress = Math.max(0, Math.min(1, 1 - (sceneRect.top / windowHeight)));
        
        if (progress > 0.15) {
            const fadeProgress = Math.min(1, (progress - 0.15) / 0.3);
            container.style.opacity = fadeProgress;
            title.style.opacity = fadeProgress;
            
            // Cinematic slow zoom
            const scale = 1 + (progress * 0.08);
            image.style.transform = `scale(${scale})`;
        }
    }
}

function animateX6Elevated() {
    const scene = document.getElementById('x6-elevated');
    const container = scene.querySelector('.car-image-container');
    const image = scene.querySelector('.x6-mountain');
    const title = scene.querySelector('.x6-title');
    
    const sceneRect = scene.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    if (sceneRect.top < windowHeight && sceneRect.bottom > 0) {
        const progress = Math.max(0, Math.min(1, 1 - (sceneRect.top / windowHeight)));
        
        if (progress > 0.1) {
            const fadeProgress = Math.min(1, (progress - 0.1) / 0.3);
            container.style.opacity = fadeProgress;
            title.style.opacity = fadeProgress;
            
            // Upward camera movement
            const translateY = 60 - (progress * 120);
            image.style.transform = `translateY(${translateY}px)`;
        }
    }
}

function animateX6Power() {
    const scene = document.getElementById('x6-power');
    const container = scene.querySelector('.car-image-container');
    const overlay = scene.querySelector('.dark-overlay');
    const shadow = scene.querySelector('.vehicle-shadow');
    
    const sceneRect = scene.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    if (sceneRect.top < windowHeight && sceneRect.bottom > 0) {
        const progress = Math.max(0, Math.min(1, 1 - (sceneRect.top / windowHeight)));
        
        if (progress > 0.1) {
            const fadeProgress = Math.min(1, (progress - 0.1) / 0.3);
            container.style.opacity = fadeProgress;
            shadow.style.opacity = fadeProgress;
            
            // Gradual darkening
            overlay.style.opacity = 0.3 + (progress * 0.5);
        }
    }
}

function animateX6Final() {
    const scene = document.getElementById('x6-final');
    const content = scene.querySelector('.final-content');
    
    const sceneRect = scene.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    if (sceneRect.top < windowHeight && sceneRect.bottom > 0) {
        const progress = Math.max(0, Math.min(1, 1 - (sceneRect.top / windowHeight)));
        
        if (progress > 0.2) {
            const fadeProgress = Math.min(1, (progress - 0.2) / 0.4);
            content.style.opacity = fadeProgress;
            content.style.transform = `scale(${0.95 + (fadeProgress * 0.05)})`;
        }
    }
}

function animateFinalCTA() {
    const scene = document.getElementById('final-cta');
    const container = scene.querySelector('.cta-container');
    
    const sceneRect = scene.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    if (sceneRect.top < windowHeight && sceneRect.bottom > 0) {
        const progress = Math.max(0, Math.min(1, 1 - (sceneRect.top / windowHeight)));
        
        if (progress > 0.2) {
            const fadeProgress = Math.min(1, (progress - 0.2) / 0.4);
            container.style.opacity = fadeProgress;
            container.style.transform = `scale(${0.9 + (fadeProgress * 0.1)})`;
        }
    }
}

// ===================================
// Numbered Showcase Animation
// ===================================

function animateShowcase() {
    const showcaseItems = document.querySelectorAll('.showcase-item');
    
    showcaseItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight * 0.8) {
            item.classList.add('visible');
        }
    });
}

// ===================================
// Main Scroll Handler
// ===================================

function handleScroll() {
    updateScrollProgress();
    
    // Cinematic animations
    animateIntroScene();
    animateHistory();
    animateM4Reveal();
    animateM4Speed();
    animateM4Details();
    animateI7Arrival();
    animateI7Interior();
    animateI7Tech();
    animateX6Elevated();
    animateX6Power();
    animateX6Final();
    animateFinalCTA();
    animateShowcase();
    
    lastScrollY = window.scrollY;
}

// ===================================
// Throttle Function
// ===================================

function throttle(func, delay) {
    let lastCall = 0;
    return function (...args) {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        return func(...args);
    };
}

// ===================================
// Event Listeners
// ===================================

window.addEventListener('scroll', throttle(handleScroll, 10));
window.addEventListener('resize', throttle(handleScroll, 100));

// Initial call
handleScroll();

// ===================================
// CTA Button
// ===================================

const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('click', () => {
    document.querySelector('.numbered-showcase').scrollIntoView({ behavior: 'smooth' });
});

// ===================================
// Intersection Observer
// ===================================

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const sceneObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, observerOptions);

document.querySelectorAll('.scene').forEach(scene => {
    sceneObserver.observe(scene);
});

// ===================================
// Smooth Scroll Links
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});