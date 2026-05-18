// ===============================
// TYPING EFFECT
// ===============================

const texts = [
    "Penetration Tester",
    "Ethical Hacker",
    "Red Team Enthusiast",
    "Cybersecurity Researcher",
    "VAPT Specialist"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === texts.length) {
        count = 0;
    }

    currentText = texts[count];

    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if (letter.length === currentText.length) {

        count++;
        index = 0;

        setTimeout(type, 1500);

    } else {

        setTimeout(type, 120);

    }

})();

// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

function reveal() {

    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", reveal);

// ===============================
// THEME TOGGLE
// ===============================

const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const icon = toggle.querySelector("i");

    if (document.body.classList.contains("light")) {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    } else {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }

});

// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (pageYOffset >= sectionTop - 200) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===============================
// NETWORK PARTICLE BACKGROUND
// ===============================

const canvas = document.getElementById("network");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

const particleCount = 120;

// CREATE PARTICLES

for (let i = 0; i < particleCount; i++) {

    particles.push({

        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,

        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,

        radius: Math.random() * 2 + 1

    });

}

// ANIMATION FUNCTION

function animateParticles() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle, index) => {

        particle.x += particle.vx;
        particle.y += particle.vy;

        // BOUNDARY COLLISION

        if (particle.x <= 0 || particle.x >= canvas.width) {
            particle.vx *= -1;
        }

        if (particle.y <= 0 || particle.y >= canvas.height) {
            particle.vy *= -1;
        }

        // PARTICLE

        ctx.beginPath();

        ctx.arc(
            particle.x,
            particle.y,
            particle.radius,
            0,
            Math.PI * 2
        );

        if (document.body.classList.contains("light")) {

            ctx.fillStyle = "#999";

        } else {

            ctx.fillStyle = "#444";

        }

        ctx.fill();

        // LINES

        for (let j = index + 1; j < particles.length; j++) {

            const dx = particle.x - particles[j].x;
            const dy = particle.y - particles[j].y;

            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 130) {

                ctx.beginPath();

                ctx.moveTo(particle.x, particle.y);

                ctx.lineTo(particles[j].x, particles[j].y);

                if (document.body.classList.contains("light")) {

                    ctx.strokeStyle = "rgba(0,0,0,0.06)";

                } else {

                    ctx.strokeStyle = "rgba(255,255,255,0.06)";

                }

                ctx.lineWidth = 1;

                ctx.stroke();

            }

        }

    });

    requestAnimationFrame(animateParticles);

}

animateParticles();

// ===============================
// RESIZE FIX
// ===============================

window.addEventListener("resize", () => {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});

// ===============================
// SMOOTH FLOATING EFFECT
// ===============================

const heroContent = document.querySelector(".hero-content");

document.addEventListener("mousemove", (e) => {

    let x = (window.innerWidth / 2 - e.pageX) / 40;
    let y = (window.innerHeight / 2 - e.pageY) / 40;

    heroContent.style.transform =
        `translate(${x}px, ${y}px)`;

});

// ===============================
// SCROLL PROGRESS EFFECT
// ===============================

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const docHeight =
        document.body.scrollHeight - window.innerHeight;

    const scrollPercent = scrollTop / docHeight;

    document.documentElement.style.setProperty(
        "--scroll",
        scrollPercent
    );

});

// ===============================
// CARD HOVER TILT EFFECT
// ===============================

const cards = document.querySelectorAll(
    ".skill-card, .project-card, .cert-card, .article-card"
);

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / 20);
        const rotateY = ((centerX - x) / 20);

        card.style.transform =
            `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "rotateX(0deg) rotateY(0deg) translateY(0px)";

    });

});

// ===============================
// BUTTON RIPPLE EFFECT
// ===============================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(
            button.clientWidth,
            button.clientHeight
        );

        const radius = diameter / 2;

        circle.style.width =
            circle.style.height =
            `${diameter}px`;

        circle.style.left =
            `${e.clientX - button.offsetLeft - radius}px`;

        circle.style.top =
            `${e.clientY - button.offsetTop - radius}px`;

        circle.classList.add("ripple");

        const ripple = button.getElementsByClassName("ripple")[0];

        if (ripple) {
            ripple.remove();
        }

        button.appendChild(circle);

    });

});