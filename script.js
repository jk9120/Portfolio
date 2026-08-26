/* =======================================================
   NAVBAR & BOTTOM NAVBAR SCROLLSPY (ACTIVE LINK HIGHLIGHT)
======================================================= */
const sections = document.querySelectorAll("section[id]");
const topNavLinks = document.querySelectorAll(".navbar a");
const bottomNavLinks = document.querySelectorAll(".bottom-nav-item");

function updateActiveNav() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 160;
        const sectionId = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            topNavLinks.forEach((link) => {
                if (link.getAttribute("href") === `#${sectionId}`) {
                    link.classList.add("active");
                } else {
                    link.classList.remove("active");
                }
            });

            bottomNavLinks.forEach((link) => {
                if (link.getAttribute("href") === `#${sectionId}`) {
                    link.classList.add("active");
                } else {
                    link.classList.remove("active");
                }
            });
        }
    });
}

window.addEventListener("scroll", updateActiveNav, { passive: true });
window.addEventListener("DOMContentLoaded", updateActiveNav);


/* =======================================================
   LOGO <MARK JGN> CONTINUOUS MULTI-COLOR TYPING ANIMATION
======================================================= */
(function initLogoTyping() {
    const logoElement = document.getElementById("logo-typing");
    const logoBrackets = document.querySelectorAll(".logo-bracket");
    const logoCursor = document.querySelector(".logo-cursor");

    if (!logoElement) return;

    const logoPalettes = [
        {
            markText: "Mark",
            jgnText: "JGN",
            markColor: "#ffffff",
            jgnGradient: "linear-gradient(270deg, #00e0ff 10%, #1a5dff 60%, #6a00f4 100%)", // Neon Cyan-Blue
            bracketColor: "#00e0ff",
            shadow: "rgba(0, 224, 255, 0.7)"
        },
        {
            markText: "Mark",
            jgnText: "JGN",
            markColor: "#ffffff",
            jgnGradient: "linear-gradient(270deg, #DF8908 10%, #ff1d15 100%)", // Flame Orange-Red
            bracketColor: "#ff4500",
            shadow: "rgba(255, 69, 0, 0.7)"
        },
        {
            markText: "Mark",
            jgnText: "JGN",
            markColor: "#ffffff",
            jgnGradient: "linear-gradient(270deg, #10b981 10%, #00f2fe 100%)", // Emerald Cyan
            bracketColor: "#10b981",
            shadow: "rgba(16, 185, 129, 0.7)"
        },
        {
            markText: "Mark",
            jgnText: "JGN",
            markColor: "#ffffff",
            jgnGradient: "linear-gradient(270deg, #d946ef 10%, #f43f5e 100%)", // Vivid Purple-Rose
            bracketColor: "#d946ef",
            shadow: "rgba(217, 70, 239, 0.7)"
        },
        {
            markText: "Mark",
            jgnText: "JGN",
            markColor: "#ffffff",
            jgnGradient: "linear-gradient(270deg, #f59e0b 10%, #fbbf24 100%)", // Golden Amber
            bracketColor: "#f59e0b",
            shadow: "rgba(245, 158, 11, 0.7)"
        },
        {
            markText: "Mark",
            jgnText: "JGN",
            markColor: "#ffffff",
            jgnGradient: "linear-gradient(270deg, #38bdf8 10%, #818cf8 100%)", // Sky Blue Indigo
            bracketColor: "#38bdf8",
            shadow: "rgba(56, 189, 248, 0.7)"
        }
    ];

    let currentIdx = 0;
    let charCount = 0;
    let isDeleting = false;
    const pauseDuration = 2200;

    function renderLogo(palette, count) {
        const mark = palette.markText;
        const jgn = palette.jgnText;
        const markLen = mark.length;

        let html = "";
        if (count <= markLen) {
            html = `<span class="logo-mark" style="color: ${palette.markColor}; font-style: italic;">${mark.slice(0, count)}</span>`;
        } else {
            const jgnCount = count - markLen - 1;
            html = `<span class="logo-mark" style="color: ${palette.markColor}; font-style: italic;">${mark}</span> ` +
                   `<span class="logo-jgn" style="background: ${palette.jgnGradient}; -webkit-background-clip: text; color: transparent; text-shadow: 0 0 16px ${palette.shadow}; font-style: italic;">${jgn.slice(0, Math.max(0, jgnCount))}</span>`;
        }

        if (logoBrackets.length > 0) {
            logoBrackets.forEach(b => {
                b.style.color = palette.bracketColor;
                b.style.textShadow = `0 0 12px ${palette.bracketColor}99`;
            });
        }
        if (logoCursor) {
            logoCursor.style.color = palette.bracketColor;
            logoCursor.style.textShadow = `0 0 12px ${palette.bracketColor}99`;
        }

        logoElement.innerHTML = html;
    }

    function logoTypeLoop() {
        const currentPalette = logoPalettes[currentIdx];
        const fullLen = currentPalette.markText.length + 1 + currentPalette.jgnText.length;

        if (!isDeleting) {
            charCount++;
            renderLogo(currentPalette, charCount);

            if (charCount >= fullLen) {
                isDeleting = true;
                setTimeout(logoTypeLoop, pauseDuration);
                return;
            }
            setTimeout(logoTypeLoop, 95);
        } else {
            charCount--;
            renderLogo(currentPalette, charCount);

            if (charCount <= 0) {
                isDeleting = false;
                currentIdx = (currentIdx + 1) % logoPalettes.length;
                setTimeout(logoTypeLoop, 400);
                return;
            }
            setTimeout(logoTypeLoop, 50);
        }
    }

    logoTypeLoop();
})();


const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (
            fullName === "" ||
            email === "" ||
            phone === "" ||
            subject === "" ||
            message === ""
        ) {
            alert("Please fill in all fields before sending the message.");
            return;
        }

        alert("Thank you! Your message has been sent successfully.");

        contactForm.reset();
    });
}


/* =======================================================
   HERO TITLE MULTI-COLOR TYPING ANIMATION INSIDE < >
======================================================= */
const heroElement = document.getElementById("hero-typing");
const heroBrackets = document.querySelectorAll(".tag-bracket");
const heroCursor = document.querySelector(".hero-cursor");

if (heroElement) {
    const heroData = [
        {
            prefix: "I'm",
            name: "Jagan Kumar",
            prefixColor: "#ffffff",
            nameGradient: "linear-gradient(270deg, #DF8908 10%, #ff1d15 100%)", // Flame Orange-Red
            bracketColor: "#ea580c",
            textShadow: "rgba(234, 88, 12, 0.5)"
        },
        {
            prefix: "I'm",
            name: "Jagan Kumar",
            prefixColor: "#ffffff",
            nameGradient: "linear-gradient(270deg, #00f2fe 10%, #4facfe 100%)", // Neon Cyan
            bracketColor: "#00f2fe",
            textShadow: "rgba(0, 242, 254, 0.5)"
        },
        {
            prefix: "I'm",
            name: "Jagan Kumar",
            prefixColor: "#ffffff",
            nameGradient: "linear-gradient(270deg, #10b981 10%, #34d399 100%)", // Emerald Green
            bracketColor: "#10b981",
            textShadow: "rgba(16, 185, 129, 0.5)"
        },
        {
            prefix: "I'm",
            name: "Jagan Kumar",
            prefixColor: "#ffffff",
            nameGradient: "linear-gradient(270deg, #c026d3 10%, #ec4899 100%)", // Vivid Purple-Pink
            bracketColor: "#c026d3",
            textShadow: "rgba(192, 38, 211, 0.5)"
        },
        {
            prefix: "I'm",
            name: "Jagan Kumar",
            prefixColor: "#ffffff",
            nameGradient: "linear-gradient(270deg, #f59e0b 10%, #fbbf24 100%)", // Golden Sun
            bracketColor: "#f59e0b",
            textShadow: "rgba(245, 158, 11, 0.5)"
        },
        {
            prefix: "I'm",
            name: "Jagan Kumar",
            prefixColor: "#ffffff",
            nameGradient: "linear-gradient(270deg, #f43f5e 10%, #fb7185 100%)", // Sunset Rose
            bracketColor: "#f43f5e",
            textShadow: "rgba(244, 63, 94, 0.5)"
        }
    ];

    let heroIndex = 0;
    let heroChar = 0;
    let heroDeleting = false;
    const heroPause = 2400;

    function renderHero(item, count) {
        const pStr = item.prefix;
        const nStr = item.name;
        const pLen = pStr.length;

        let html = "";
        if (count <= pLen) {
            html = `<span class="prefix-text" style="color: ${item.prefixColor};">${pStr.slice(0, count)}</span>`;
        } else {
            const nameCount = count - pLen - 1;
            html = `<span class="prefix-text" style="color: ${item.prefixColor};">${pStr}</span> ` +
                   `<span class="name-text" style="background: ${item.nameGradient}; -webkit-background-clip: text; color: transparent; text-shadow: 0 0 20px ${item.textShadow};">${nStr.slice(0, Math.max(0, nameCount))}</span>`;
        }

        if (heroBrackets.length > 0) {
            heroBrackets.forEach(b => {
                b.style.color = item.bracketColor;
                b.style.textShadow = `0 0 15px ${item.bracketColor}88`;
            });
        }
        if (heroCursor) {
            heroCursor.style.color = item.bracketColor;
            heroCursor.style.textShadow = `0 0 15px ${item.bracketColor}88`;
        }

        heroElement.innerHTML = html;
    }

    function heroTypeLoop() {
        const current = heroData[heroIndex];
        const fullLen = current.prefix.length + 1 + current.name.length;

        if (!heroDeleting) {
            heroChar++;
            renderHero(current, heroChar);

            if (heroChar >= fullLen) {
                heroDeleting = true;
                setTimeout(heroTypeLoop, heroPause);
                return;
            }
            setTimeout(heroTypeLoop, 85);
        } else {
            heroChar--;
            renderHero(current, heroChar);

            if (heroChar <= 0) {
                heroDeleting = false;
                heroIndex = (heroIndex + 1) % heroData.length;
                setTimeout(heroTypeLoop, 400);
                return;
            }
            setTimeout(heroTypeLoop, 45);
        }
    }

    heroTypeLoop();
}


/* =======================================================
   FOOTER COPYRIGHT MULTI-COLOR TYPING ANIMATION (H3 SIZE)
======================================================= */
const typingElement = document.getElementById("copyright-typing");

if (typingElement) {
    const typingData = [
        {
            year: "© 2026",
            name: "Jagan Kumar",
            divider: "|",
            role: "Full Stack Developer",
            yearColor: "#fbbf24", // Warm Gold
            nameGradient: "linear-gradient(270deg, #DF8908 10%, #ff1d15 100%)", // Theme Flame
            dividerColor: "#38bdf8", // Sky Blue
            roleColor: "#00f2fe" // Electric Cyan
        },
        {
            year: "© 2026",
            name: "Jagan Kumar",
            divider: "|",
            role: "MERN Stack Developer",
            yearColor: "#34d399", // Mint Green
            nameGradient: "linear-gradient(270deg, #10b981 10%, #06b6d4 100%)", // Emerald Cyan
            dividerColor: "#f43f5e", // Rose Pink
            roleColor: "#10b981" // Vibrant Emerald
        },
        {
            year: "© 2026",
            name: "Jagan Kumar",
            divider: "|",
            role: "React.js & Node.js Developer",
            yearColor: "#c084fc", // Lavender Purple
            nameGradient: "linear-gradient(270deg, #a855f7 10%, #ec4899 100%)", // Purple Rose
            dividerColor: "#facc15", // Bright Yellow
            roleColor: "#c084fc" // Neon Purple
        },
        {
            year: "© 2026",
            name: "Jagan Kumar",
            divider: "|",
            role: "Frontend & Backend Developer",
            yearColor: "#38bdf8", // Ice Blue
            nameGradient: "linear-gradient(270deg, #3b82f6 10%, #14b8a6 100%)", // Ocean Gradient
            dividerColor: "#10b981", // Emerald
            roleColor: "#f59e0b" // Sun Amber
        },
        {
            year: "© 2026",
            name: "Jagan Kumar",
            divider: "|",
            role: "Software Developer",
            yearColor: "#fb7185", // Coral
            nameGradient: "linear-gradient(270deg, #f43f5e 10%, #fb923c 100%)", // Sunset Glow
            dividerColor: "#a855f7", // Violet
            roleColor: "#f43f5e" // Hot Pink
        }
    ];

    let itemIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const pauseTime = 2200;

    function renderTypedText(item, count) {
        const yearStr = item.year;
        const nameStr = item.name;
        const divStr = item.divider;
        const roleStr = item.role;

        const len1 = yearStr.length;
        const len2 = len1 + 1 + nameStr.length;
        const len3 = len2 + 1 + divStr.length;
        const totalLen = len3 + 1 + roleStr.length;

        let html = "";

        if (count <= len1) {
            html = `<span class="copy-year" style="color: ${item.yearColor};">${yearStr.slice(0, count)}</span>`;
        } else if (count <= len2) {
            const nameCount = count - len1 - 1;
            html = `<span class="copy-year" style="color: ${item.yearColor};">${yearStr}</span> ` +
                   `<span class="copy-name" style="background: ${item.nameGradient}; -webkit-background-clip: text; color: transparent;">${nameStr.slice(0, Math.max(0, nameCount))}</span>`;
        } else if (count <= len3) {
            const divCount = count - len2 - 1;
            html = `<span class="copy-year" style="color: ${item.yearColor};">${yearStr}</span> ` +
                   `<span class="copy-name" style="background: ${item.nameGradient}; -webkit-background-clip: text; color: transparent;">${nameStr}</span> ` +
                   `<span class="copy-divider" style="color: ${item.dividerColor};">${divStr.slice(0, Math.max(0, divCount))}</span>`;
        } else {
            const roleCount = count - len3 - 1;
            html = `<span class="copy-year" style="color: ${item.yearColor};">${yearStr}</span> ` +
                   `<span class="copy-name" style="background: ${item.nameGradient}; -webkit-background-clip: text; color: transparent;">${nameStr}</span> ` +
                   `<span class="copy-divider" style="color: ${item.dividerColor};">${divStr}</span> ` +
                   `<span class="copy-role" style="color: ${item.roleColor}; text-shadow: 0 0 14px ${item.roleColor}88;">${roleStr.slice(0, Math.max(0, roleCount))}</span>`;
        }

        typingElement.innerHTML = html;
        return totalLen;
    }

    function typeLoop() {
        const currentItem = typingData[itemIndex];
        const yearStr = currentItem.year;
        const nameStr = currentItem.name;
        const divStr = currentItem.divider;
        const roleStr = currentItem.role;

        const baseLen = yearStr.length + 1 + nameStr.length + 1 + divStr.length + 1;
        const fullLen = baseLen + roleStr.length;

        if (!isDeleting) {
            charIndex++;
            renderTypedText(currentItem, charIndex);

            if (charIndex >= fullLen) {
                isDeleting = true;
                setTimeout(typeLoop, pauseTime);
                return;
            }
            setTimeout(typeLoop, 70);
        } else {
            charIndex--;
            renderTypedText(currentItem, charIndex);

            // Delete back to role start to smoothly transition next title, or loop fully
            if (charIndex <= baseLen) {
                isDeleting = false;
                itemIndex = (itemIndex + 1) % typingData.length;
                charIndex = baseLen;
                setTimeout(typeLoop, 350);
                return;
            }
            setTimeout(typeLoop, 35);
        }
    }

    // Start animation
    typeLoop();
}


/* =======================================================
   INTERACTIVE COSMIC STARFIELD & NEBULA PARTICLES CANVAS
   (Exact effect as animated-portfolio-five-ochre.vercel.app)
======================================================= */
(function initCosmicBackground() {
    const canvas = document.getElementById("bg-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let particles = [];
    const maxDistance = 130;

    const mouse = {
        x: null,
        y: null,
        radius: 170
    };

    window.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    window.addEventListener("mouseleave", () => {
        mouse.x = null;
        mouse.y = null;
    });

    window.addEventListener("resize", () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        createParticles();
    });

    const colors = [
        "rgba(0, 224, 255, ",    // Cyan
        "rgba(26, 93, 255, ",    // Royal Blue
        "rgba(106, 0, 244, ",    // Purple
        "rgba(255, 255, 255, ",  // Pure White
        "rgba(79, 195, 247, "    // Light Cyan
    ];

    class StarParticle {
        constructor() {
            this.reset();
            this.x = Math.random() * width;
            this.y = Math.random() * height;
        }

        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 2.2 + 0.6;
            this.vx = (Math.random() - 0.5) * 0.55;
            this.vy = (Math.random() - 0.5) * 0.55;
            this.baseAlpha = Math.random() * 0.6 + 0.35;
            this.alpha = this.baseAlpha;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.twinkleSpeed = Math.random() * 0.02 + 0.008;
            this.twinkleDir = Math.random() > 0.5 ? 1 : -1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Loop edges
            if (this.x < 0) this.x = width;
            if (this.x > width) this.x = 0;
            if (this.y < 0) this.y = height;
            if (this.y > height) this.y = 0;

            // Twinkle effect
            this.alpha += this.twinkleSpeed * this.twinkleDir;
            if (this.alpha > 0.95 || this.alpha < 0.2) {
                this.twinkleDir = -this.twinkleDir;
            }

            // Mouse repulsion / reaction
            if (mouse.x !== null && mouse.y !== null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < mouse.radius) {
                    const force = (mouse.radius - dist) / mouse.radius;
                    const angle = Math.atan2(dy, dx);
                    this.x -= Math.cos(angle) * force * 1.6;
                    this.y -= Math.sin(angle) * force * 1.6;
                }
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color + this.alpha + ")";
            ctx.shadowBlur = this.size * 5;
            ctx.shadowColor = this.color + "0.9)";
            ctx.fill();
        }
    }

    function createParticles() {
        particles = [];
        const count = Math.min(130, Math.floor((width * height) / 9500));
        for (let i = 0; i < count; i++) {
            particles.push(new StarParticle());
        }
    }

    function connectParticles() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < maxDistance) {
                    const alpha = (1 - dist / maxDistance) * 0.22;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(0, 224, 255, ${alpha})`;
                    ctx.lineWidth = 0.6;
                    ctx.stroke();
                }
            }

            // Connect to mouse cursor
            if (mouse.x !== null && mouse.y !== null) {
                const dx = mouse.x - particles[i].x;
                const dy = mouse.y - particles[i].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < mouse.radius) {
                    const alpha = (1 - dist / mouse.radius) * 0.35;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = `rgba(26, 93, 255, ${alpha})`;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }

        connectParticles();
        requestAnimationFrame(animate);
    }

    createParticles();
    animate();
})();



