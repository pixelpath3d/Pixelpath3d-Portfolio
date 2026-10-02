/* =========================
   PIXELPATH3D — STYLE
   ========================= */

:root {
  --bg: #05070a;
  --bg-soft: #0a0d12;
  --card: #0d1118;
  --text: #f4f7fb;
  --muted: #8b95a5;
  --line: rgba(255,255,255,0.09);
  --blue: #55b8ff;
  --blue-soft: rgba(85,184,255,0.16);
  --max: 1240px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.6;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

img,
video {
  max-width: 100%;
  display: block;
}

/* =========================
   NAVBAR
   ========================= */

.navbar {
  width: min(var(--max), calc(100% - 60px));
  margin: auto;
  height: 90px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
  z-index: 20;
}

.logo,
.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.logo-dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: var(--blue);

  box-shadow:
    0 0 15px rgba(85,184,255,0.8);
}

.navbar nav {
  display: flex;
  gap: 34px;
}

.navbar nav a {
  color: var(--muted);
  font-size: 14px;
  transition: 0.3s ease;
}

.navbar nav a:hover {
  color: white;
}

.nav-button {
  border: 1px solid var(--line);
  padding: 11px 19px;
  border-radius: 100px;
  font-size: 13px;

  transition: 0.3s ease;
}

.nav-button:hover {
  border-color: var(--blue);
  color: var(--blue);
}

/* =========================
   HERO
   ========================= */

.hero {
  width: min(var(--max), calc(100% - 60px));
  min-height: calc(100vh - 90px);
  margin: auto;

  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: center;
  gap: 70px;

  position: relative;
}

.hero-content {
  padding: 80px 0;
}

.eyebrow {
  color: var(--blue);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2.5px;
  margin-bottom: 22px;
}

.hero h1 {
  max-width: 720px;
  font-size: clamp(48px, 6vw, 88px);
  line-height: 0.98;
  letter-spacing: -4px;
  font-weight: 700;
}

.hero h1 span,
.about-content h2 span,
.contact-section h2 span {
  color: var(--blue);
}

.hero-text {
  max-width: 560px;
  color: var(--muted);
  font-size: 17px;
  margin-top: 30px;
}

.hero-buttons {
  display: flex;
  gap: 14px;
  margin-top: 36px;
}

.primary-button,
.secondary-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 14px 23px;
  border-radius: 100px;

  font-size: 13px;
  font-weight: 700;

  transition: 0.3s ease;
}

.primary-button {
  background: white;
  color: #05070a;
}

.primary-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 40px rgba(255,255,255,0.12);
}

.secondary-button {
  border: 1px solid var(--line);
  color: white;
}

.secondary-button:hover {
  border-color: var(--blue);
  color: var(--blue);
}

/* =========================
   HERO VISUAL
   ========================= */

.hero-visual {
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
}

.glow {
  position: absolute;
  width: 420px;
  height: 420px;

  background: rgba(40,130,220,0.16);
  filter: blur(90px);
  border-radius: 50%;
}

.hero-card {
  width: min(460px, 90%);
  aspect-ratio: 0.82;

  background:
    linear-gradient(
      145deg,
      rgba(255,255,255,0.07),
      rgba(255,255,255,0.015)
    );

  border: 1px solid rgba(255,255,255,0.13);
  border-radius: 24px;

  padding: 20px;

  backdrop-filter: blur(20px);

  box-shadow:
    0 30px 100px rgba(0,0,0,0.5);

  transform: rotate(3deg);

  transition: 0.5s ease;
}

.hero-card:hover {
  transform: rotate(0deg) translateY(-8px);
}

.card-top,
.card-bottom {
  display: flex;
  justify-content: space-between;

  color: #788291;
  font-size: 9px;
  letter-spacing: 1.8px;
}

.hero-placeholder {
  height: calc(100% - 45px);
  margin: 15px 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 16px;

  background:
    radial-gradient(
      circle at 50% 40%,
      rgba(85,184,255,0.24),
      transparent 38%
    ),
    linear-gradient(
      145deg,
      #151c26,
      #07090d
    );

  border: 1px solid rgba(255,255,255,0.06);

  font-size: 90px;
  font-weight: 800;
  color: rgba(255,255,255,0.08);
}

/* =========================
   SECTIONS
   ========================= */

.section {
  width: min(var(--max), calc(100% - 60px));
  margin: auto;
  padding: 150px 0;
}

.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 50px;
  margin-bottom: 60px;
}

.section-heading h2,
.about-content h2 {
  max-width: 700px;

  font-size: clamp(38px, 5vw, 66px);
  line-height: 1;
  letter-spacing: -3px;
}

.section-description {
  max-width: 370px;
  color: var(--muted);
  font-size: 14px;
}

/* =========================
   PORTFOLIO
   ========================= */

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.project {
  min-width: 0;
}

.project-large {
  grid-row: span 2;
}

.project-wide {
  grid-column: span 2;
}

.project-image {
  min-height: 390px;

  border: 1px solid var(--line);
  border-radius: 18px;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  position: relative;

  transition: 0.5s ease;
}

.project-large .project-image {
  min-height: 650px;
}

.project-wide .project-image {
  min-height: 430px;
}

.project-image::before {
  content: "";
  position: absolute;
  width: 220px;
  height: 220px;
  border-radius: 50%;

  background: rgba(85,184,255,0.15);
  filter: blur(70px);
}

.placeholder-one {
  background: linear-gradient(145deg,#121b27,#06080c);
}

.placeholder-two {
  background: linear-gradient(145deg,#18151d,#07080c);
}

.placeholder-three {
  background: linear-gradient(145deg,#111b1a,#070909);
}

.placeholder-four {
  background: linear-gradient(145deg,#171a22,#06070a);
}

.project-image span {
  position: relative;
  z-index: 2;

  color: rgba(255,255,255,0.15);
  font-size: 42px;
  font-weight: 800;
  letter-spacing: -2px;
}

.project:hover .project-image {
  transform: translateY(-6px);
  border-color: rgba(85,184,255,0.35);
}

.project-info {
  display: flex;
  justify-content: space-between;

  padding: 18px 4px 0;
}

.project-info h3 {
  font-size: 16px;
}

.project-info p {
  color: var(--muted);
  font-size: 12px;
  margin-top: 3px;
}

.project-number {
  color: #657080;
  font-size: 12px;
}

/* =========================
   ABOUT
   ========================= */

.about-section {
  width: min(var(--max), calc(100% - 60px));
  margin: auto;
  padding: 160px 0;

  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 100px;
  align-items: center;
}

.about-image {
  aspect-ratio: 0.82;
  max-width: 440px;
}

.about-placeholder {
  width: 100%;
  height: 100%;

  border-radius: 20px;
  border: 1px solid var(--line);

  display: flex;
  align-items: center;
  justify-content: center;

  background:
    radial-gradient(
      circle at center,
      rgba(85,184,255,0.14),
      transparent 50%
    ),
    #0b0f15;

  color: rgba(255,255,255,0.18);
  font-size: 18px;
  font-weight: 700;
}

.about-content p:not(.eyebrow) {
  max-width: 620px;
  color: var(--muted);
  margin-top: 25px;
  font-size: 16px;
}

.about-stats {
  display: flex;
  gap: 60px;
  margin-top: 50px;
}

.about-stats div {
  display: flex;
  flex-direction: column;
}

.about-stats strong {
  font-size: 27px;
}

.about-stats span {
  color: var(--muted);
  font-size: 12px;
}

/* =========================
   SERVICES
   ========================= */

.services-section {
  border-top: 1px solid var(--line);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.service {
  min-height: 310px;

  border: 1px solid var(--line);
  border-radius: 18px;

  padding: 30px;

  background: linear-gradient(
    145deg,
    rgba(255,255,255,0.035),
    rgba(255,255,255,0.008)
  );

  transition: 0.4s ease;
}

.service:hover {
  transform: translateY(-7px);
  border-color: rgba(85,184,255,0.35);
}

.service > span {
  color: var(--blue);
  font-size: 12px;
}

.service h3 {
  font-size: 22px;
  margin-top: 80px;
}

.service p {
  color: var(--muted);
  font-size: 14px;
  margin-top: 15px;
}

/* =========================
   CONTACT
   ========================= */

.contact-section {
  width: min(var(--max), calc(100% - 60px));
  margin: auto;

  padding: 180px 0;

  text-align: center;

  border-top: 1px solid var(--line);
}

.contact-section h2 {
  max-width: 800px;
  margin: auto;

  font-size: clamp(50px, 7vw, 100px);
  line-height: 0.95;
  letter-spacing: -5px;
}

.contact-section > p:not(.eyebrow) {
  color: var(--muted);
  margin: 30px auto;
}

.contact-section .primary-button {
  margin-top: 10px;
}

/* =========================
   FOOTER
   ========================= */

footer {
  width: min(var(--max), calc(100% - 60px));
  margin: auto;

  padding: 30px 0 40px;

  border-top: 1px solid var(--line);

  display: flex;
  justify-content: space-between;
  align-items: center;
}

footer p {
  color: #687180;
  font-size: 11px;
}

/* =========================
   RESPONSIVE
   ========================= */

@media (max-width: 900px) {

  .navbar {
    width: min(var(--max), calc(100% - 35px));
  }

  .navbar nav {
    display: none;
  }

  .hero {
    width: min(var(--max), calc(100% - 35px));
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .hero-content {
    padding-top: 70px;
  }

  .hero-visual {
    min-height: 500px;
  }

  .section,
  .about-section,
  .contact-section {
    width: min(var(--max), calc(100% - 35px));
  }

  .section-heading {
    flex-direction: column;
    align-items: start;
  }

  .portfolio-grid {
    grid-template-columns: 1fr;
  }

  .project-large,
  .project-wide {
    grid-row: auto;
    grid-column: auto;
  }

  .project-large .project-image,
  .project-wide .project-image {
    min-height: 420px;
  }

  .about-section {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .about-image {
    max-width: 100%;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  footer {
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
  }
}


@media (max-width: 550px) {

  .hero h1 {
    font-size: 48px;
    letter-spacing: -2.5px;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: stretch;
  }

  .primary-button,
  .secondary-button {
    width: 100%;
  }

  .hero-card {
    width: 92%;
  }

  .section {
    padding: 100px 0;
  }

  .section-heading h2,
  .about-content h2 {
    font-size: 42px;
    letter-spacing: -2px;
  }

  .about-stats {
    gap: 30px;
  }

  .contact-section {
    padding: 120px 0;
  }

  .contact-section h2 {
    font-size: 52px;
    letter-spacing: -3px;
  }
}
