const themeToggle = document.getElementById("themeToggle");
const icon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    // animasi ikon
    themeToggle.classList.add("rotate");
    setTimeout(() => themeToggle.classList.remove("rotate"), 400);

    // ganti icon
    if (document.body.classList.contains("light")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});
/*
const carouselImages = [
    "foto1.jpg","foto2.jpg","foto3.jpg","foto4.jpg",
    "foto5.jpg","foto6.jpg","foto7.jpg","foto8.jpg",
    "foto9.jpg","foto10.jpg","foto11.jpg","foto12.jpg"
];

let currentt = 0;
let isPaused = false;

const track = document.querySelector(".carousel-track");

/* RENDER *//*
function renderCarousel() {
    track.innerHTML = "";

    const leftIndex   = (currentt - 1 + carouselImages.length) % carouselImages.length;
    const centerIndex = currentt;
    const rightIndex  = (currentt + 1) % carouselImages.length;

    const positions = [
        { idx: leftIndex, class: "left" },
        { idx: centerIndex, class: "active" },
        { idx: rightIndex, class: "right" }
    ];

    positions.forEach(pos => {
        const img = document.createElement("img");
        img.src = "img/" + carouselImages[pos.idx];
        img.classList.add(pos.class);
        track.appendChild(img);
    });

    /* TRIGGER SLIDE EFFECT */ /*
    track.classList.remove("slide-right");
    void track.offsetWidth; // force reflow
    track.classList.add("slide-right");
}

/* AUTO SLIDE *//*
setInterval(() => {
    if (!isPaused) {
        currentt = (currentt + 1) % carouselImages.length;
        renderCarousel();
    }
}, 2800);

/* PAUSE *//*
track.addEventListener("mouseenter", () => isPaused = true);
track.addEventListener("mouseleave", () => isPaused = false);
track.addEventListener("touchstart", () => isPaused = true);
track.addEventListener("touchend", () => isPaused = false);

/* INIT *//*
renderCarousel();*/

const carouselImages = [
  "foto1.jpg","foto2.jpg","foto3.jpg","foto4.jpg",
  "foto5.jpg","foto6.jpg","foto7.jpg","foto8.jpg",
  "foto9.jpg","foto10.jpg","foto11.jpg","foto12.jpg"
];

const track = document.querySelector(".carousel-track");

let currentt = 0;
let isPaused = false;

/* CREATE ONCE */
carouselImages.forEach(src => {
  const img = document.createElement("img");
  img.src = "img/" + src;
  track.appendChild(img);
});

const imgs = track.querySelectorAll("img");

/* UPDATE POSITION */
function updateCarousel() {
  imgs.forEach((img, i) => {
    const pos = (i - currentt + imgs.length) % imgs.length;

    img.className = "";

    if (pos === 0) img.classList.add("active");
    else if (pos === 1) img.classList.add("right");
    else if (pos === imgs.length - 1) img.classList.add("left");
    else img.classList.add("hidden");
  });
}

/* AUTO ROTATE */
setInterval(() => {
  if (!isPaused) {
    currentt = (currentt + 1) % imgs.length;
    updateCarousel();
  }
}, 3000);

/* PAUSE */
["mouseenter","touchstart"].forEach(e =>
  track.addEventListener(e, () => isPaused = true)
);
["mouseleave","touchend"].forEach(e =>
  track.addEventListener(e, () => isPaused = false)
);

/* SWIPE */
let startXc = 0;

track.addEventListener("mousedown", e => startXc = e.clientX);
track.addEventListener("mouseup", e => {
  const diff = e.clientX - startXc;
  if (Math.abs(diff) > 50) {
    currentt = diff > 0
      ? (currentt - 1 + imgs.length) % imgs.length
      : (currentt + 1) % imgs.length;
    updateCarousel();
  }
});

track.addEventListener("touchstart", e => {
  startXc = e.touches[0].clientX;
});
track.addEventListener("touchend", e => {
  const diff = e.changedTouches[0].clientX - startXc;
  if (Math.abs(diff) > 50) {
    currentt = diff > 0
      ? (currentt - 1 + imgs.length) % imgs.length
      : (currentt + 1) % imgs.length;
    updateCarousel();
  }
});

/* INIT */
updateCarousel();


// ujicoba
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const hamburgerIcon = hamburger.querySelector("i");

hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
    hamburger.classList.toggle("active");

    if (mobileMenu.classList.contains("show")) {
        // menu terbuka → ganti ke X
        hamburgerIcon.classList.remove("fa-bars");
        hamburgerIcon.classList.add("fa-square-xmark");
    } else {
        // menu tertutup → kembali ke bars
        hamburgerIcon.classList.remove("fa-square-xmark");
        hamburgerIcon.classList.add("fa-bars");
    }
});
/* ===============================
   NAV ACTIVE ON SCROLL
================================ */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");
const mobileLinks = document.querySelectorAll("#mobileMenu a");

function setActiveLink() {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    // desktop nav
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });

    // mobile nav
    mobileLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", setActiveLink);



/* histori */

/* skill */
const buttons = document.querySelectorAll('.skill-btn');
const lists = document.querySelectorAll('.skill-list');

let current = 0;
const skillOrder = ['hard', 'soft'];
function showSkill(type) {
    buttons.forEach(btn => btn.classList.remove('active'));
    lists.forEach(list => list.classList.remove('active'));

    document.querySelector(`[data-skill="${type}"]`).classList.add('active');
    const activeList = document.getElementById(type + 'Skill');
    activeList.classList.add('active');

    // reset & zoom in satu per satu
    const items = activeList.querySelectorAll('span');
    items.forEach((item, i) => {
        item.style.animation = 'none';
        item.offsetHeight; // force reflow
        item.style.animation = `zoomIn 0.45s ease forwards`;
        item.style.animationDelay = `${i * 0.12}s`;
    });
}

// klik manual
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        current = skillOrder.indexOf(btn.dataset.skill);
        showSkill(btn.dataset.skill);
    });
});

// auto switch
setInterval(() => {
    current = (current + 1) % skillOrder.length;
    showSkill(skillOrder[current]);
}, 4000);


// ===============
//  Proyek
//================
const projects = document.querySelectorAll('.project-card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.2 });

projects.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(40px)';
    observer.observe(card);
});
const videos = document.querySelectorAll('.auto-video');

const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const video = entry.target;

        if (entry.isIntersecting) {
            video.play();
        } else {
            video.pause();
            video.currentTime = 0; // optional: reset video
        }
    });
}, {
    threshold: 0.5
});

videos.forEach(video => {
    videoObserver.observe(video);
});

/* Organisasi Carousel - Swipe Horizontal Only */

const carousel = document.querySelector('.org-carousel');
const cards = document.querySelectorAll('.organization-card');

let currentIndex = 0;
let startX = 0;
let autoRotate;

/* ROTATE */
function rotateCarousel() {
  cards.forEach((card, i) => {
    const pos = (i - currentIndex + cards.length) % cards.length;

    if (pos === 0) {
      card.style.transform = "translateX(0) translateZ(220px) scale(1)";
      card.style.opacity = "1";
      card.style.zIndex = "5";
    }
    else if (pos === 1) {
      card.style.transform = "translateX(260px) scale(0.7)";
      card.style.opacity = "0.6";
      card.style.zIndex = "3";
    }
    else if (pos === cards.length - 1) {
      card.style.transform = "translateX(-260px) scale(0.7)";
      card.style.opacity = "0.6";
      card.style.zIndex = "3";
    }
    else {
      card.style.transform = "translateZ(-220px) scale(0.4)";
      card.style.opacity = "0.25";
      card.style.zIndex = "1";
    }
  });
}

/* AUTO ROTATE */
function startAutoRotate() {
  autoRotate = setInterval(() => {
    currentIndex = (currentIndex + 1) % cards.length;
    rotateCarousel();
  }, 3200);
}

function stopAutoRotate() {
  clearInterval(autoRotate);
}

/* INIT */
rotateCarousel();
startAutoRotate();

/* SWIPE LEFT & RIGHT ONLY */
carousel.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  stopAutoRotate();
}, { passive: true });

carousel.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  const diff = startX - endX;

  if (Math.abs(diff) < 40) {
    startAutoRotate();
    return;
  }

  if (diff > 0) {
    // swipe kiri
    currentIndex = (currentIndex + 1) % cards.length;
  } else {
    // swipe kanan
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  }

  rotateCarousel();
  startAutoRotate();
});

/* Tentang */



const stats = document.querySelectorAll('.stat h3');

const animateStats = () => {
  stats.forEach(stat => {
    const target = +stat.dataset.count;
    let count = 0;
    const step = target / 60;

    const update = () => {
      count += step;
      if (count < target) {
        stat.innerText = Math.floor(count);
        requestAnimationFrame(update);
      } else {
        stat.innerText = target + (target === 100 ? "%" : "+");
      }
    };
    update();
  });
};

const statObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    animateStats();
    statObserver.disconnect();
  }
}, { threshold: 0.6 });

statObserver.observe(document.querySelector('.tentang-stats'));
