const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closePopupBtn');
const openBtn = document.getElementById('letter');

openBtn.addEventListener('click', () => {
    popup.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
});

let counter = 0;
const cake = document.querySelector('.cake');
const particlesContainer = cake.querySelector('.particles');

const colors = ['#ff4d4d', '#4da6ff', '#4dff4d', '#ffff4d', '#ff4dff', '#ffa64d', '#4dffff'];

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    const angle = Math.random() * 2 * Math.PI;
    const radius = 60 + Math.random() * 40;
    const x = Math.cos(angle) * radius + 'px';
    const y = Math.sin(angle) * radius + 'px';

    particle.style.setProperty('--x', x);
    particle.style.setProperty('--y', y);

    particlesContainer.appendChild(particle);
    setTimeout(() => particle.remove(), 600);
}

function createFloatingNumber(count) {
    const number = document.createElement('div');
    number.textContent = `+${count}`;
    number.classList.add('floating-number');

    const color = colors[Math.floor(Math.random() * colors.length)];
    number.style.color = color;

    number.style.left = Math.random() * 90 + '%';
    number.style.top = Math.random() * 80 + '%';

    document.body.appendChild(number);

    setTimeout(() => number.remove(), 1200);
}

cake.addEventListener('mousedown', () => {
    if (counter >= 100) {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
        return;
    }

    counter++;
    cake.classList.add('clicked');

    for (let i = 0; i < 10; i++) {
        createParticle();
    }

    createFloatingNumber(counter);

    if (counter % 10 === 0) {
        createConfetti();
    }
});

cake.addEventListener('mouseup', () => {
    cake.classList.remove('clicked');
});

function createConfetti() {
    const colors = ['#ff0a54', '#ff477e', '#ff85a1', '#fbb1b1', '#f9bec7', '#fae0e4'];
    const confettiCount = 100;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';

        document.body.appendChild(confetti);

        confetti.style.animationDuration = (2 + Math.random() * 2) + 's';
        confetti.style.animationDelay = (Math.random() * 0.5) + 's';

        confetti.addEventListener('animationend', () => {
            confetti.remove();
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('click', () => {
        const musica = document.getElementById('miMusica');
        musica.volume = 0.1;
        musica.play();
    }, { once: true });

    createConfetti();

    const messageIcon = document.getElementById('messageIcon');
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('closePopupBtn');

    messageIcon.addEventListener('click', () => {
        popup.classList.add('visible');
    });

    closeBtn.addEventListener('click', () => {
        popup.classList.remove('visible');
    });
});
