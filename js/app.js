/* ==========================================================================
   TRANSLYTE RENTALS SIERRA LEONE - FLEET DATA & APP ENGINE
   ========================================================================== */

const FLEET_DATA = [
  {
    id: "land-cruiser-v8",
    name: "Toyota Land Cruiser V8",
    category: "suvs",
    categoryLabel: "Executive 4x4",
    pricePerDay: 4140,
    seats: 7,
    luggage: 5,
    transmission: "Automatic",
    fuel: "Diesel 4.5L V8",
    drive: "4WD Heavy Duty",
    image: "https://images.unsplash.com/photo-1594502184342-2e12f877aa73?auto=format&fit=crop&w=800&q=80",
    description: "The gold standard for executive transport, NGO project leads, and VIP road trips across Sierra Leone. Superior comfort with heavy-duty 4x4 capability.",
    features: ["Chauffeur Included / Self-Drive", "Leather Interior", "Dual Aircon", "GPS & Tinted Windows"]
  },
  {
    id: "toyota-prado",
    name: "Toyota Land Cruiser Prado",
    category: "suvs",
    categoryLabel: "Executive SUV",
    pricePerDay: 3450,
    seats: 7,
    luggage: 4,
    transmission: "Automatic",
    fuel: "Diesel 3.0L",
    drive: "Full-Time 4WD",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
    description: "Versatile executive 7-seater SUV perfect for Freetown city runs as well as long-distance travel to Bo, Kenema, Makeni, and rural field projects.",
    features: ["All-Terrain Capability", "High Ground Clearance", "Premium Audio", "Full Insurance Covered"]
  },
  {
    id: "toyota-fortuner",
    name: "Toyota Fortuner TRD Sportivo",
    category: "suvs",
    categoryLabel: "Executive SUV",
    pricePerDay: 3335,
    seats: 7,
    luggage: 4,
    transmission: "Automatic",
    fuel: "Diesel 2.8L",
    drive: "4WD Active",
    image: "images/cars/fortuner.png",
    description: "Sporty, reliable, and highly premium 7-seater SUV. Extremely popular for high-profile NGO provincial tours and executive Freetown commuting.",
    features: ["Sporty TRD Bodykit", "Leather Interior", "Excellent Fuel Economy", "Rear View Camera & Sensors"]
  },
  {
    id: "jeep-grand-cherokee",
    name: "Jeep Grand Cherokee L Luxury",
    category: "suvs",
    categoryLabel: "Premium Luxury SUV",
    pricePerDay: 4255,
    seats: 7,
    luggage: 5,
    transmission: "Automatic",
    fuel: "Petrol 3.6L V6",
    drive: "Quadra-Trac 4WD",
    image: "images/cars/jeep-grand-cherokee.jpg",
    description: "State-of-the-art luxury SUV combining premium leather comfort with legendary Jeep off-road dominance. Perfect for diplomatic delegates and VIPs.",
    features: ["Premium Leather Cabin", "Panoramic Sunroof", "Premium Sound System", "Advanced Air Suspension"]
  },
  {
    id: "jeep-night",
    name: "Jeep Grand Cherokee (Night Edition)",
    category: "suvs",
    categoryLabel: "Executive 4x4 SUV",
    pricePerDay: 4025,
    seats: 5,
    luggage: 4,
    transmission: "Automatic",
    fuel: "Petrol 3.6L V6",
    drive: "4WD",
    image: "images/cars/jeep-night.jpg",
    description: "Real-world road readiness meets premium capability. An executive-grade 4x4 tailored for robust terrains and nocturnal urban elegance in Sierra Leone.",
    features: ["Dark Aesthetics Pack", "High Ground Clearance", "Comprehensive Insurance", "Active Noise Cancellation"]
  },
  {
    id: "toyota-hilux",
    name: "Toyota Hilux Double Cab 4x4",
    category: "pickups",
    categoryLabel: "Pickup Truck / Project",
    pricePerDay: 2990,
    seats: 5,
    luggage: 6,
    transmission: "Manual / Auto",
    fuel: "Turbo Diesel",
    drive: "4WD High/Low Range",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
    description: "Indestructible project workhorse trusted by mining companies, engineering firms, NGOs, and field survey teams in rough terrain.",
    features: ["Heavy Cargo Bed", "Reinforced Suspension", "Bull-Bar & Snorkel", "All-Terrain Tyres"]
  },
  {
    id: "nissan-patrol",
    name: "Nissan Patrol Y62 Executive",
    category: "suvs",
    categoryLabel: "Luxury SUV",
    pricePerDay: 3910,
    seats: 7,
    luggage: 4,
    transmission: "Automatic",
    fuel: "Petrol 5.6L V8",
    drive: "4WD",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80",
    description: "Ultimate luxury combined with off-road mastery. Highly favored for embassy dignitaries, corporate executives, and VIP guest transfers.",
    features: ["Executive Seating", "Climate Control", "360 Camera", "Bullet-Resistant Glass Option"]
  },
  {
    id: "toyota-corolla",
    name: "Toyota Corolla Executive Sedan",
    category: "sedans",
    categoryLabel: "City Sedan",
    pricePerDay: 1610,
    seats: 5,
    luggage: 2,
    transmission: "Automatic",
    fuel: "Petrol 1.8L",
    drive: "2WD",
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800&q=80",
    description: "Fuel-efficient, comfortable, and agile city car ideal for business meetings, hotel shuttles, and light daily commuting within Freetown.",
    features: ["Fuel Efficient", "Cool Aircon", "Bluetooth Audio", "Compact Parking"]
  },
  {
    id: "toyota-hiace",
    name: "Toyota HiAce Executive Van",
    category: "vans",
    categoryLabel: "Minibus / Shuttle",
    pricePerDay: 3220,
    seats: 14,
    luggage: 8,
    transmission: "Manual / Auto",
    fuel: "Diesel",
    drive: "2WD / 4WD",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80",
    description: "Spacious 14-seater passenger van designed for airport transfers from Lungi, corporate staff movement, tourist groups, and delegation travel.",
    features: ["Dual Air Conditioned", "Reclining Seats", "Luggage Space", "Professional Chauffeur"]
  },
  {
    id: "coaster-bus",
    name: "Toyota Coaster Luxury Bus",
    category: "vans",
    categoryLabel: "30-Seater Bus",
    pricePerDay: 5750,
    seats: 30,
    luggage: 15,
    transmission: "Manual",
    fuel: "Diesel 4.2L",
    drive: "Heavy Duty",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    description: "Full-sized corporate shuttle bus ideal for staff transport, NGO conventions, school excursions, church retreats, and large wedding parties.",
    features: ["30 Comfortable Seats", "High-Power AC", "PA Sound System", "Experienced Driver"]
  },
  {
    id: "wedding-mercedes",
    name: "Mercedes-Benz E-Class Luxury",
    category: "luxury",
    categoryLabel: "Wedding & VIP Car",
    pricePerDay: 4600,
    seats: 5,
    luggage: 3,
    transmission: "Automatic",
    fuel: "Petrol",
    drive: "RWD",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80",
    description: "Make your wedding day or VIP event unforgettable with our pristine decorated Mercedes-Benz E-Class luxury chauffeur service.",
    features: ["Wedding Ribbon Decoration", "Uniformed Chauffeur", "VIP Red Carpet Service", "Chilled Champagne Holder"]
  },
  {
    id: "heavy-equipment",
    name: "CAT Excavator & Heavy Fleet",
    category: "construction",
    categoryLabel: "Equipment & Logistics",
    pricePerDay: 8050,
    seats: 1,
    luggage: 0,
    transmission: "Heavy Duty",
    fuel: "Diesel",
    drive: "Tracked / 6x6",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80",
    description: "Heavy machinery and earth-moving equipment rentals for road construction, mining operations, building sites, and civil engineering projects.",
    features: ["Certified Operator Included", "On-site Maintenance", "Flexible Lease", "Safety Inspection Certified"]
  }
];

// App Initialization
document.addEventListener("DOMContentLoaded", () => {
  renderFleetCatalog("all");
  setupFleetFilters();
  setupFaqAccordion();
  setupMobileNav();
  setupBookingModal();
  setupQuickSearch();
  setupAuthSystem(); // Initialize authentication system
  setupHeroBackgroundSlider(); // Initialize Hero Car Background Slider
});

// Hero Background Car Slider Engine
function setupHeroBackgroundSlider() {
  const sliderContainer = document.getElementById("hero-slider-bg");
  if (!sliderContainer) return;

  const slides = sliderContainer.querySelectorAll(".hero-slide");
  const dotsContainer = document.getElementById("hero-slider-dots");
  const vehicleNameLabel = document.getElementById("hero-vehicle-name");
  const prevBtn = document.getElementById("hero-prev-btn");
  const nextBtn = document.getElementById("hero-next-btn");

  if (!slides || slides.length === 0) return;

  let currentIndex = 0;
  let slideInterval = null;
  const slideDuration = 5000; // 5 seconds interval

  // Render navigation dots dynamically
  if (dotsContainer) {
    dotsContainer.innerHTML = Array.from(slides).map((_, idx) => `
      <button class="slider-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}" aria-label="Go to slide ${idx + 1}"></button>
    `).join('');

    const dots = dotsContainer.querySelectorAll(".slider-dot");
    dots.forEach(dot => {
      dot.addEventListener("click", () => {
        const index = parseInt(dot.getAttribute("data-index"), 10);
        goToSlide(index);
        resetAutoSlide();
      });
    });
  }

  function updateSlideState() {
    slides.forEach((slide, idx) => {
      if (idx === currentIndex) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });

    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll(".slider-dot");
      dots.forEach((dot, idx) => {
        if (idx === currentIndex) {
          dot.classList.add("active");
        } else {
          dot.classList.remove("active");
        }
      });
    }

    if (vehicleNameLabel) {
      const vehicleName = slides[currentIndex].getAttribute("data-vehicle") || "Translate Corps Rentals Fleet";
      vehicleNameLabel.innerText = `SPOTLIGHT: ${vehicleName.toUpperCase()}`;
    }
  }

  function goToSlide(index) {
    if (index < 0) {
      currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }
    updateSlideState();
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  function startAutoSlide() {
    stopAutoSlide();
    slideInterval = setInterval(nextSlide, slideDuration);
  }

  function stopAutoSlide() {
    if (slideInterval) {
      clearInterval(slideInterval);
      slideInterval = null;
    }
  }

  function resetAutoSlide() {
    startAutoSlide();
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      resetAutoSlide();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
      resetAutoSlide();
    });
  }

  // Touch Swipe Support for Mobile
  const heroSection = document.querySelector(".hero");
  if (heroSection) {
    let touchStartX = 0;
    let touchEndX = 0;

    heroSection.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    heroSection.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) {
        nextSlide();
        resetAutoSlide();
      } else if (touchEndX - touchStartX > 50) {
        prevSlide();
        resetAutoSlide();
      }
    }, { passive: true });

    // Pause on hover
    heroSection.addEventListener("mouseenter", stopAutoSlide);
    heroSection.addEventListener("mouseleave", startAutoSlide);
  }

  // Initialize first slide and start slideshow timer
  updateSlideState();
  startAutoSlide();
}

// Render Fleet Catalog Cards
function renderFleetCatalog(filterCategory) {
  const container = document.getElementById("fleet-grid");
  if (!container) return;

  const filtered = filterCategory === "all" 
    ? FLEET_DATA 
    : FLEET_DATA.filter(car => car.category === filterCategory);

  container.innerHTML = filtered.map(car => `
    <div class="vehicle-card" data-category="${car.category}">
      <div class="vehicle-img-wrap">
        <span class="vehicle-category-badge">${car.categoryLabel}</span>
        <img src="${car.image}" alt="${car.name}" class="vehicle-img" loading="lazy" />
      </div>
      <div class="vehicle-body">
        <h3 class="vehicle-title">${car.name}</h3>
        <p class="vehicle-subtitle">${car.description}</p>
        
        <div class="vehicle-specs">
          <div class="spec-item">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            ${car.seats} Seats
          </div>
          <div class="spec-item">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 1321 13.255A2.36 2.36 0 0019 11h-1.5a1.5 1.5 0 00-1.5 1.5V18a2 2 0 01-2 2H9a2 2 0 01-2-2v-5.5A1.5 1.5 0 005.5 11H4a2.36 2.36 0 00-2 2.255v4.245A2.5 2.5 0 004.5 20h15a2.5 2.5 0 002.5-2.5V13z"></path></svg>
            ${car.transmission}
          </div>
          <div class="spec-item">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            ${car.fuel}
          </div>
          <div class="spec-item">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            ${car.drive}
          </div>
        </div>

        <div class="vehicle-footer">
          <div class="vehicle-price">
            NLe ${car.pricePerDay} <span>/ day</span>
          </div>
          <button class="btn btn-primary btn-sm" onclick="openBookingModal('${car.id}')">
            Book Now
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Setup Fleet Category Filter Buttons
function setupFleetFilters() {
  const tabs = document.querySelectorAll(".fleet-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const category = tab.getAttribute("data-filter");
      renderFleetCatalog(category);
    });
  });
}

// FAQ Accordion Toggle
function setupFaqAccordion() {
  const items = document.querySelectorAll(".faq-item");
  items.forEach(item => {
    const header = item.querySelector(".faq-header");
    header.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      items.forEach(i => i.classList.remove("active"));
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
}

// Mobile Navbar Toggle & Responsive Overlay Engine
function setupMobileNav() {
  const toggleButtons = document.querySelectorAll(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  
  // Ensure backdrop overlay exists
  let overlay = document.querySelector(".nav-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.className = "nav-overlay";
    document.body.appendChild(overlay);
  }

  function closeMobileMenu() {
    if (navLinks) navLinks.classList.remove("active");
    if (overlay) overlay.classList.remove("active");
    toggleButtons.forEach(btn => {
      btn.classList.remove("is-open");
      btn.innerHTML = `<svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>`;
    });
  }

  function toggleMobileMenu(e) {
    if (e) e.stopPropagation();
    if (!navLinks) return;

    const isOpen = navLinks.classList.contains("active");
    if (isOpen) {
      closeMobileMenu();
    } else {
      navLinks.classList.add("active");
      if (overlay) overlay.classList.add("active");
      toggleButtons.forEach(btn => {
        btn.classList.add("is-open");
        btn.innerHTML = `<svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>`;
      });
    }
  }

  toggleButtons.forEach(btn => {
    btn.onclick = toggleMobileMenu;
  });

  overlay.onclick = closeMobileMenu;

  if (navLinks) {
    const links = navLinks.querySelectorAll("a, button");
    links.forEach(link => {
      link.addEventListener("click", () => {
        if (!link.classList.contains("dropdown-trigger")) {
          closeMobileMenu();
        }
      });
    });
  }
}

// Quick Search Handler
function setupQuickSearch() {
  const form = document.getElementById("quick-search-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const carType = document.getElementById("quick-car-type").value;
      const pickupLoc = document.getElementById("quick-pickup-location").value;
      const returnLoc = document.getElementById("quick-return-location").value;
      
      // Auto-open modal with selected options
      const car = FLEET_DATA.find(c => c.category === carType) || FLEET_DATA[0];
      openBookingModal(car.id, { pickupLoc, returnLoc });
    });
  }
}

// Booking Modal Logic & WhatsApp Link Generator
function setupBookingModal() {
  const modal = document.getElementById("booking-modal");
  const closeBtn = document.getElementById("modal-close-btn");
  const form = document.getElementById("modal-booking-form");

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("active");
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("active");
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const vehicleId = document.getElementById("modal-vehicle-id").value;
      const car = FLEET_DATA.find(c => c.id === vehicleId) || FLEET_DATA[0];

      const clientName = document.getElementById("client-name").value;
      const clientPhone = document.getElementById("client-phone").value;
      const serviceType = document.getElementById("modal-service-type").value;
      const pickupLocation = document.getElementById("modal-pickup-loc").value;
      const pickupDate = document.getElementById("modal-pickup-date").value;
      const returnDate = document.getElementById("modal-return-date").value;
      const driverOption = document.getElementById("modal-driver-opt").value;
      const notes = document.getElementById("modal-notes").value;

      // Calculate days
      let days = 1;
      if (pickupDate && returnDate) {
        const start = new Date(pickupDate);
        const end = new Date(returnDate);
        const diffTime = Math.abs(end - start);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays > 0) days = diffDays;
      }

      const totalCost = days * car.pricePerDay;

      // Build structured WhatsApp message
      const message = 
`Hello Translate Corps Rentals! 🚗💨
I would like to book a vehicle via your website:

📌 *Vehicle*: ${car.name} (NLe ${car.pricePerDay}/day)
👤 *Client Name*: ${clientName}
📞 *Phone/WhatsApp*: ${clientPhone}
🛠 *Service*: ${serviceType}
📍 *Pickup Location*: ${pickupLocation}
📅 *Pickup Date*: ${pickupDate}
📅 *Return Date*: ${returnDate} (${days} Days)
👨‍✈️ *Driver Preference*: ${driverOption}
💵 *Estimated Total*: ~NLe ${totalCost} (New Leones)
${notes ? `📝 *Special Requests*: ${notes}` : ''}

Please confirm availability and booking details. Thank you!`;

      const encodedMsg = encodeURIComponent(message);
      // Primary WhatsApp Contact
      const whatsappUrl = `https://wa.me/23279127724?text=${encodedMsg}`;
      
      window.open(whatsappUrl, "_blank");
      modal.classList.remove("active");
    });
  }
}

// Global Open Booking Modal Function
window.openBookingModal = function(vehicleId, options = {}) {
  const currentUser = getLoggedInUser();
  
  if (!currentUser) {
    // User is not logged in. Save reservation context in session storage.
    sessionStorage.setItem("tcr_pending_booking", JSON.stringify({ vehicleId, options }));
    
    // Open Login/Register Modal
    openAuthModal();
    return;
  }

  // User is logged in. Proceed with booking modal.
  const modal = document.getElementById("booking-modal");
  if (!modal) return;

  const car = FLEET_DATA.find(c => c.id === vehicleId) || FLEET_DATA[0];
  
  // Populate vehicle info
  document.getElementById("modal-vehicle-id").value = car.id;
  document.getElementById("modal-vehicle-name").innerText = car.name;
  document.getElementById("modal-vehicle-price").innerText = `NLe ${car.pricePerDay} / day`;

  if (options.pickupLoc) {
    const pLoc = document.getElementById("modal-pickup-loc");
    if (pLoc) pLoc.value = options.pickupLoc;
  }

  // Set default dates (today and tomorrow)
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];
  
  document.getElementById("modal-pickup-date").value = today;
  document.getElementById("modal-return-date").value = tomorrow;

  // Auto-populate logged-in user name and phone from local storage
  const clientNameField = document.getElementById("client-name");
  const clientPhoneField = document.getElementById("client-phone");
  if (clientNameField) clientNameField.value = currentUser.name;
  if (clientPhoneField) clientPhoneField.value = currentUser.phone;

  modal.classList.add("active");
};

/* ==========================================================================
   AUTHENTICATION SYSTEM OPERATIONS & EVENT HANDLERS
   ========================================================================== */

function getLoggedInUser() {
  const userStr = localStorage.getItem("tcr_logged_in_user");
  if (!userStr) return null;
  try {
    return JSON.parse(userStr);
  } catch (e) {
    return null;
  }
}

window.logoutUser = function(event) {
  if (event) event.preventDefault();
  
  // Close active dropdowns if any wrapper context exists
  if (event && event.target) {
    const wrapper = event.target.closest(".auth-dropdown-wrapper");
    if (wrapper) {
      wrapper.classList.remove("open");
      const d = wrapper.querySelector(".auth-dropdown-menu");
      if (d) d.classList.remove("active");
    }
  }

  localStorage.removeItem("tcr_logged_in_user");
  updateNavbarAuth();
  
  // Close booking modal if open
  const bookingModal = document.getElementById("booking-modal");
  if (bookingModal) {
    bookingModal.classList.remove("active");
  }
};

window.openAuthModal = function() {
  const authModal = document.getElementById("auth-modal");
  if (authModal) {
    // Clear message alerts
    const loginMsg = document.getElementById("login-message");
    const registerMsg = document.getElementById("register-message");
    if (loginMsg) {
      loginMsg.innerText = "";
      loginMsg.className = "auth-message";
    }
    if (registerMsg) {
      registerMsg.innerText = "";
      registerMsg.className = "auth-message";
    }
    
    // Reset forms
    const loginForm = document.getElementById("auth-login-form");
    const registerForm = document.getElementById("auth-register-form");
    if (loginForm) loginForm.reset();
    if (registerForm) registerForm.reset();
    
    // Default to sign-in tab
    switchAuthTab('login');
    
    authModal.classList.add("active");
  }
};

window.closeAuthModal = function() {
  const authModal = document.getElementById("auth-modal");
  if (authModal) {
    authModal.classList.remove("active");
  }
};

window.switchAuthTab = function(tab) {
  const tabLogin = document.getElementById("tab-login");
  const tabRegister = document.getElementById("tab-register");
  const formLogin = document.getElementById("auth-login-form");
  const formRegister = document.getElementById("auth-register-form");

  if (tab === 'login') {
    if (tabLogin) tabLogin.classList.add("active");
    if (tabRegister) tabRegister.classList.remove("active");
    if (formLogin) formLogin.classList.add("active");
    if (formRegister) formRegister.classList.remove("active");
  } else {
    if (tabLogin) tabLogin.classList.remove("active");
    if (tabRegister) tabRegister.classList.add("active");
    if (formLogin) formLogin.classList.remove("active");
    if (formRegister) formRegister.classList.add("active");
  }
};

function handleAuthSuccess(user) {
  // Refresh navigation status
  updateNavbarAuth();
  
  // Close authorization modal
  closeAuthModal();
  
  // Check and execute pending reservation
  const pendingBookingStr = sessionStorage.getItem("tcr_pending_booking");
  if (pendingBookingStr) {
    sessionStorage.removeItem("tcr_pending_booking");
    try {
      const { vehicleId, options } = JSON.parse(pendingBookingStr);
      setTimeout(() => {
        openBookingModal(vehicleId, options);
      }, 350); // smooth modal transition
    } catch (e) {
      console.error("Failed to parse pending booking context:", e);
    }
  }
}

function injectAuthModal() {
  if (document.getElementById("auth-modal")) return;

  const modalHtml = `
    <div id="auth-modal" class="modal-overlay">
      <div class="modal-card auth-card">
        <button id="auth-modal-close-btn" class="modal-close">&times;</button>
        <div style="margin-bottom: 1.5rem; text-align: center;">
          <span class="badge">Customer Portal</span>
          <h3 style="font-size: 1.8rem; margin-top: 0.3rem; font-family: 'Outfit', sans-serif;">Welcome to TCR</h3>
          <p style="color: var(--text-muted); font-size: 0.9rem;">Sign in or register to make a reservation</p>
        </div>
        
        <div class="auth-tabs">
          <button class="auth-tab active" id="tab-login" onclick="switchAuthTab('login')">Sign In</button>
          <button class="auth-tab" id="tab-register" onclick="switchAuthTab('register')">Create Account</button>
        </div>

        <!-- Sign In Form -->
        <form id="auth-login-form" class="auth-form active">
          <div class="auth-message" id="login-message"></div>
          <div class="form-group">
            <label class="form-label">Email Address</label>
            <input type="email" id="login-email" class="form-input" placeholder="name@example.com" required />
          </div>
          <div class="form-group">
            <label class="form-label">Password</label>
            <input type="password" id="login-password" class="form-input" placeholder="••••••••" required />
          </div>
          <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 1rem;">
            Sign In & Continue
          </button>
        </form>

        <!-- Register Form -->
        <form id="auth-register-form" class="auth-form">
          <div class="auth-message" id="register-message"></div>
          <div class="form-group">
            <label class="form-label">Full Name</label>
            <input type="text" id="register-name" class="form-input" placeholder="e.g. Osman Bangura" required />
          </div>
          <div class="form-group">
            <label class="form-label">Email Address</label>
            <input type="email" id="register-email" class="form-input" placeholder="name@example.com" required />
          </div>
          <div class="form-group">
            <label class="form-label">Phone / WhatsApp Number</label>
            <input type="tel" id="register-phone" class="form-input" placeholder="e.g. +232 79 123 456" required />
          </div>
          <div class="form-group">
            <label class="form-label">Password</label>
            <input type="password" id="register-password" class="form-input" placeholder="Minimum 6 characters" required minlength="6" />
          </div>
          <div class="form-group">
            <label class="form-label">Confirm Password</label>
            <input type="password" id="register-confirm-password" class="form-input" placeholder="Repeat password" required minlength="6" />
          </div>
          <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 1rem;">
            Create Account & Continue
          </button>
        </form>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", modalHtml);
}

function updateNavbarAuth() {
  const navCtas = document.querySelectorAll(".nav-cta");
  const navLinksList = document.querySelectorAll(".nav-links");
  const currentUser = getLoggedInUser();

  navCtas.forEach(navCta => {
    const menuToggle = navCta.querySelector(".menu-toggle");
    const menuToggleHtml = menuToggle ? menuToggle.outerHTML : '';
    
    if (currentUser) {
      navCta.innerHTML = `
        <div class="auth-dropdown-wrapper">
          <div class="user-profile-nav dropdown-trigger" onclick="toggleAuthDropdown(event)">
            <div class="user-avatar">${currentUser.name.charAt(0).toUpperCase()}</div>
            <span class="user-name">${currentUser.name.split(' ')[0]}</span>
            <svg class="chevron" width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"></path></svg>
          </div>
          <div class="auth-dropdown-menu" id="auth-dropdown">
            <div class="dropdown-header">
              <strong>${currentUser.name} <span class="badge" style="font-size: 0.65rem; padding: 0.15rem 0.5rem; margin: 0; text-transform: uppercase;">Verified</span></strong>
              <span>${currentUser.email}</span>
            </div>
            <div class="dropdown-divider"></div>
            <a href="fleet.html">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"></path></svg>
              Browse Fleet Catalog
            </a>
            <a href="corporate.html">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              Corporate & NGO Leasing
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" onclick="logoutUser(event)" style="color: #F87171;">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color: #F87171;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
              Sign Out
            </a>
          </div>
        </div>
        ${menuToggleHtml}
      `;
    } else {
      navCta.innerHTML = `
        <div class="auth-dropdown-wrapper" style="margin-right: 0.25rem;">
          <button class="btn btn-secondary btn-sm dropdown-trigger" onclick="toggleAuthDropdown(event)" style="padding: 0.55rem 0.95rem;">
            <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            Account
            <svg class="chevron" width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="margin-left: 2px; opacity: 0.7;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          <div class="auth-dropdown-menu" id="auth-dropdown">
            <div class="dropdown-header">
              <strong>Customer Portal</strong>
              <span>Sign in or register an account</span>
            </div>
            <div class="dropdown-divider"></div>
            <a href="#" onclick="openAuthModalTab(event, 'login')">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path></svg>
              Sign In
            </a>
            <a href="#" onclick="openAuthModalTab(event, 'register')">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
              Create Account
            </a>
            <div class="dropdown-divider"></div>
            <a href="fleet.html">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"></path></svg>
              View Vehicle Fleet
            </a>
          </div>
        </div>
        <a href="fleet.html" class="btn btn-primary btn-sm">Book Vehicle</a>
        ${menuToggleHtml}
      `;
    }
  });

  // Re-bind mobile navigation event listeners for new menu-toggle elements
  setupMobileNav();

  // Update mobile nav-links
  navLinksList.forEach(navLinks => {
    const existingAuth = navLinks.querySelector(".mobile-auth-container");
    if (existingAuth) existingAuth.remove();

    const mobileAuthDiv = document.createElement("div");
    mobileAuthDiv.className = "mobile-auth-container";

    if (currentUser) {
      mobileAuthDiv.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: center; gap: 0.8rem; padding: 0.5rem 0;">
          <div class="user-avatar">${currentUser.name.charAt(0).toUpperCase()}</div>
          <span style="font-weight: 600; color: #FFF;">Hi, ${currentUser.name}</span>
        </div>
        <button class="btn btn-secondary btn-sm" onclick="logoutUser()" style="width: 100%;">Logout</button>
      `;
    } else {
      mobileAuthDiv.innerHTML = `
        <button class="btn btn-secondary btn-sm" onclick="openAuthModalTab(null, 'login')" style="width: 100%; margin-bottom: 0.5rem;">Sign In</button>
        <button class="btn btn-primary btn-sm" onclick="openAuthModalTab(null, 'register')" style="width: 100%;">Create Account</button>
      `;
    }
    navLinks.appendChild(mobileAuthDiv);
  });
}

function setupAuthSystem() {
  // 1. Inject the Auth Modal HTML
  injectAuthModal();
  
  // 2. Synchronize navigation bar auth state
  updateNavbarAuth();

  // 3. Connect close events
  const authModal = document.getElementById("auth-modal");
  const closeBtn = document.getElementById("auth-modal-close-btn");
  if (closeBtn && authModal) {
    closeBtn.addEventListener("click", closeAuthModal);
    authModal.addEventListener("click", (e) => {
      if (e.target === authModal) closeAuthModal();
    });
  }

  // 4. Sign In Form Submission
  const loginForm = document.getElementById("auth-login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("login-email").value.trim().toLowerCase();
      const password = document.getElementById("login-password").value;
      const msgDiv = document.getElementById("login-message");

      if (!msgDiv) return;

      // Local Database retrieval
      const users = JSON.parse(localStorage.getItem("tcr_users") || "[]");
      const user = users.find(u => u.email === email);

      if (!user || user.password !== password) {
        msgDiv.innerText = "Invalid email or password.";
        msgDiv.className = "auth-message error";
        return;
      }

      msgDiv.innerText = "Login successful! Redirecting...";
      msgDiv.className = "auth-message success";

      // Save active session
      localStorage.setItem("tcr_logged_in_user", JSON.stringify({
        name: user.name,
        email: user.email,
        phone: user.phone
      }));

      setTimeout(() => {
        handleAuthSuccess(user);
      }, 600);
    });
  }

  // 5. Register Form Submission
  const registerForm = document.getElementById("auth-register-form");
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("register-name").value.trim();
      const email = document.getElementById("register-email").value.trim().toLowerCase();
      const phone = document.getElementById("register-phone").value.trim();
      const password = document.getElementById("register-password").value;
      const confirmPassword = document.getElementById("register-confirm-password").value;
      const msgDiv = document.getElementById("register-message");

      if (!msgDiv) return;

      if (password !== confirmPassword) {
        msgDiv.innerText = "Passwords do not match.";
        msgDiv.className = "auth-message error";
        return;
      }

      const users = JSON.parse(localStorage.getItem("tcr_users") || "[]");
      const emailExists = users.some(u => u.email === email);

      if (emailExists) {
        msgDiv.innerText = "An account with this email already exists.";
        msgDiv.className = "auth-message error";
        return;
      }

      // Register new user
      const newUser = { name, email, phone, password };
      users.push(newUser);
      localStorage.setItem("tcr_users", JSON.stringify(users));

      msgDiv.innerText = "Account created successfully! Redirecting...";
      msgDiv.className = "auth-message success";

      // Save active session
      localStorage.setItem("tcr_logged_in_user", JSON.stringify({
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone
      }));

      setTimeout(() => {
        handleAuthSuccess(newUser);
      }, 600);
    });
  }
}

/* ==========================================================================
   DROPDOWN MENU ACTIONS
   ========================================================================== */

window.toggleAuthDropdown = function(event) {
  event.stopPropagation();
  const wrapper = event.currentTarget.closest(".auth-dropdown-wrapper");
  const dropdown = wrapper.querySelector(".auth-dropdown-menu");
  
  // Close any other open dropdowns first
  document.querySelectorAll(".auth-dropdown-wrapper").forEach(w => {
    if (w !== wrapper) {
      w.classList.remove("open");
      const d = w.querySelector(".auth-dropdown-menu");
      if (d) d.classList.remove("active");
    }
  });

  wrapper.classList.toggle("open");
  if (dropdown) {
    dropdown.classList.toggle("active");
  }
};

window.openAuthModalTab = function(event, tab) {
  if (event) event.preventDefault();
  
  // Close dropdown if trigger context exists
  if (event && event.target) {
    const wrapper = event.target.closest(".auth-dropdown-wrapper");
    if (wrapper) {
      wrapper.classList.remove("open");
      const d = wrapper.querySelector(".auth-dropdown-menu");
      if (d) d.classList.remove("active");
    }
  }
  
  openAuthModal();
  switchAuthTab(tab);
};

// Global click listener to dismiss active dropdowns when clicking outside
window.addEventListener("click", (e) => {
  const openWrapper = document.querySelector(".auth-dropdown-wrapper.open");
  if (openWrapper && !openWrapper.contains(e.target)) {
    const dropdown = openWrapper.querySelector(".auth-dropdown-menu");
    if (dropdown) dropdown.classList.remove("active");
    openWrapper.classList.remove("open");
  }
});
