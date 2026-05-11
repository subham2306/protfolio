// TYPING ANIMATION

const texts = [
    "Penetration Tester",
    "Ethical Hacker",
    "Cybersecurity Researcher",
    "VAPT Specialist"
];

let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {

    if (count === texts.length) {
        count = 0;
    }

    currentText = texts[count];

    letter = currentText.slice(0, ++index);

    document.getElementById('typing').textContent = letter;

    if (letter.length === currentText.length) {

        count++;
        index = 0;

    }

    setTimeout(type, 120);

})();

// MATRIX EFFECT

const canvas = document.getElementById('matrix');

const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01";

const fontSize = 14;

const columns = canvas.width / fontSize;

const drops = [];

for (let x = 0; x < columns; x++) {

    drops[x] = 1;

}

let matrixColor = '#00ffcc';

function draw() {

    if (document.body.classList.contains('light')) {

        ctx.fillStyle = 'rgba(255,255,255,0.06)';

    } else {

        ctx.fillStyle = 'rgba(0,0,0,0.05)';

    }

    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = matrixColor;

    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {

        const text = letters[Math.floor(Math.random() * letters.length)];

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {

            drops[i] = 0;

        }

        drops[i]++;

    }

}

setInterval(draw, 33);

// THEME TOGGLE

const toggle = document.getElementById('theme-toggle');

toggle.addEventListener('click', () => {

    document.body.classList.toggle('light');

    const icon = toggle.querySelector('i');

    if (document.body.classList.contains('light')) {

        matrixColor = '#111827';

        icon.classList.remove('fa-moon');

        icon.classList.add('fa-sun');

    } else {

        matrixColor = '#00ffcc';

        icon.classList.remove('fa-sun');

        icon.classList.add('fa-moon');

    }

});

// SCROLL REVEAL

function reveal() {

    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {

            element.classList.add('active');

        }

    });

}

window.addEventListener('scroll', reveal);

// CURSOR

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {

    cursor.style.left = e.pageX + 'px';

    cursor.style.top = e.pageY + 'px';

});

// ACTIVE NAVIGATION

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

    navLinks.forEach(a => {

        a.classList.remove("active");

        if (a.getAttribute("href") === "#" + current) {

            a.classList.add("active");

        }

    });

});