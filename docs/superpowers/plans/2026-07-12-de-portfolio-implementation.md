# Data Engineering Portfolio — Implementation Plan

**Goal:** Transform the Angular portfolio from a junior Angular dev profile into a professional Data Engineering portfolio.

**Architecture:** Existing Angular 16 SPA with lazy-loaded components. Keep framework intact; replace content, styles, and assets per component.

**Tech Stack:** Angular 16, TypeScript, SCSS, Inter + JetBrains Mono fonts, Font Awesome 6 icons, Web3Forms API

**Execution:** Subagent-driven development — fresh subagent per task, task review after each, final broad review.

---
## Global Constraints
- No profile photo anywhere — use geometric/data avatar icon or none
- Color palette: bg `#0f172a`, accent `#2563eb`, text `#f8fafc`, body `#cbd5e1`, highlight cyan `#06b6d4`
- Fonts: Inter (Google Font) for all text, JetBrains Mono for code/mono snippets
- Remove all old Google Fonts: Bitcount Grid, Special Gothic Expanded, Fascinate, Bebas Neue, Libre Baskerville
- Glass-morphism card style across sections: `background: rgba(255,255,255,0.05); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.1);`
- Router paths unchanged
- All component selectors and module structure unchanged

---

### Task 1: Project Setup — Remove Old Assets, Fonts, Style Imports

**Files:**
- Modify: `src/index.html`
- Modify: `src/styles.scss`
- Delete: `src/assets/angular2.webp`, `src/assets/angular-icon.jpg`, `src/assets/angular-icon1.png`, `src/assets/bootstrap.jpg`, `src/assets/contact-me.gif`, `src/assets/contact-me.png`, `src/assets/css.jpg`, `src/assets/dj.png`, `src/assets/djRestFramework.png`, `src/assets/git hub.png`, `src/assets/github_PNG15.png`, `src/assets/html.jpg`, `src/assets/IIS.jpg`, `src/assets/javascript.png`, `src/assets/mysql-logo.svg`, `src/assets/nodejs.webp`, `src/assets/oauth-2.png`, `src/assets/post.png`, `src/assets/python.jpg`, `src/assets/Rxjs.jpg`, `src/assets/train.png`, `src/assets/typescipt1.png`, `src/assets/typescript.png`, `src/assets/visulastudio.png`, `src/assets/SubrataDas7001188620CV1.pdf`, `src/assets/.gitkeep`

- [ ] **Step: Remove old asset files**

```bash
Remove-Item "D:\subrata\myResume\src\assets\angular2.webp" -Force
Remove-Item "D:\subrata\myResume\src\assets\angular-icon.jpg" -Force
Remove-Item "D:\subrata\myResume\src\assets\angular-icon1.png" -Force
Remove-Item "D:\subrata\myResume\src\assets\bootstrap.jpg" -Force
Remove-Item "D:\subrata\myResume\src\assets\contact-me.gif" -Force
Remove-Item "D:\subrata\myResume\src\assets\contact-me.png" -Force
Remove-Item "D:\subrata\myResume\src\assets\css.jpg" -Force
Remove-Item "D:\subrata\myResume\src\assets\dj.png" -Force
Remove-Item "D:\subrata\myResume\src\assets\djRestFramework.png" -Force
Remove-Item "D:\subrata\myResume\src\assets\git hub.png" -Force
Remove-Item "D:\subrata\myResume\src\assets\github_PNG15.png" -Force
Remove-Item "D:\subrata\myResume\src\assets\html.jpg" -Force
Remove-Item "D:\subrata\myResume\src\assets\IIS.jpg" -Force
Remove-Item "D:\subrata\myResume\src\assets\javascript.png" -Force
Remove-Item "D:\subrata\myResume\src\assets\mysql-logo.svg" -Force
Remove-Item "D:\subrata\myResume\src\assets\nodejs.webp" -Force
Remove-Item "D:\subrata\myResume\src\assets\oauth-2.png" -Force
Remove-Item "D:\subrata\myResume\src\assets\post.png" -Force
Remove-Item "D:\subrata\myResume\src\assets\python.jpg" -Force
Remove-Item "D:\subrata\myResume\src\assets\Rxjs.jpg" -Force
Remove-Item "D:\subrata\myResume\src\assets\train.png" -Force
Remove-Item "D:\subrata\myResume\src\assets\typescipt1.png" -Force
Remove-Item "D:\subrata\myResume\src\assets\typescript.png" -Force
Remove-Item "D:\subrata\myResume\src\assets\visulastudio.png" -Force
Remove-Item "D:\subrata\myResume\src\assets\SubrataDas7001188620CV1.pdf" -Force
Remove-Item "D:\subrata\myResume\src\assets\.gitkeep" -Force
```

- [ ] **Step: Update index.html** — new title, remove old font imports, add Inter + JetBrains Mono

Edit `src/index.html`:
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Subrata Das | Data Engineer Portfolio</title>
  <base href="/">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>
```

- [ ] **Step: Update styles.scss** — new global styles

```scss
/* Global styles - Data Engineering Portfolio */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
  background: #0f172a;
  color: #cbd5e1;
  min-height: 100vh;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

// Scrollbar styling
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #0f172a;
}
::-webkit-scrollbar-thumb {
  background: #2563eb;
  border-radius: 4px;
}

// Animations
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

- [ ] **Step: Commit**

```bash
cd D:\subrata\myResume
git add -A
git commit -m "chore: clean old assets, update fonts and global styles"
```

---

### Task 2: Navigation Bar — No Profile Pic, Resume CTA, Updated Branding

**Files:**
- Modify: `src/app/profile-navbar/profile-navbar.component.html`
- Modify: `src/app/profile-navbar/profile-navbar.component.scss`
- Modify: `src/app/profile-navbar/profile-navbar.component.ts`

- [ ] **Step: Update navbar template**

Edit `src/app/profile-navbar/profile-navbar.component.html`:
```html
<nav class="navbar">
  <div class="navbar-left">
    <div class="brand-icon">
      <i class="fas fa-database"></i>
    </div>
    <span class="profile-name">Subrata Das</span>
    <span class="profile-title">Data Engineer</span>
    <button class="burger" (click)="toggleMenu()">&#9776;</button>
  </div>

  <ul class="navbar-links" [ngClass]="{'open': menuOpen}">
    <li><a routerLink="/home" routerLinkActive="active" (click)="closeMenu()">Home</a></li>
    <li><a routerLink="/about" routerLinkActive="active" (click)="closeMenu()">About</a></li>
    <li><a routerLink="/experience" routerLinkActive="active" (click)="closeMenu()">Experience</a></li>
    <li><a routerLink="/skills" routerLinkActive="active" (click)="closeMenu()">Skills</a></li>
    <li><a routerLink="/projects" routerLinkActive="active" (click)="closeMenu()">Projects</a></li>
    <li><a routerLink="/certificates" routerLinkActive="active" (click)="closeMenu()">Certifications</a></li>
    <li><a routerLink="/contact-me" routerLinkActive="active" (click)="closeMenu()">Contact</a></li>
    <li><a href="assets/SubrataDas_DataEngineer_Resume.pdf" download class="resume-btn">Resume</a></li>
  </ul>
</nav>
```

- [ ] **Step: Update navbar styles**

Edit `src/app/profile-navbar/profile-navbar.component.scss`:
```scss
.navbar {
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(12px);
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  height: 64px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar-left {
  display: flex;
  align-items: center;
  gap: 12px;

  .brand-icon {
    width: 36px;
    height: 36px;
    background: linear-gradient(135deg, #2563eb, #1d4ed8);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: white;
  }

  .profile-name {
    font-size: 16px;
    font-weight: 600;
    color: #f8fafc;
    font-family: 'Inter', sans-serif;
  }

  .profile-title {
    font-size: 12px;
    color: #2563eb;
    font-family: 'JetBrains Mono', monospace;
    background: rgba(37, 99, 235, 0.1);
    padding: 2px 8px;
    border-radius: 4px;
    display: none;

    @media (min-width: 768px) {
      display: inline-block;
    }
  }
}

.navbar-links {
  list-style: none;
  display: flex;
  gap: 8px;
  margin: 0;
  padding: 0;
  align-items: center;

  li {
    a {
      text-decoration: none;
      color: #94a3b8;
      padding: 8px 14px;
      font-size: 14px;
      font-weight: 400;
      font-family: 'Inter', sans-serif;
      border-radius: 6px;
      transition: all 0.2s ease;
      position: relative;

      &:hover {
        color: #f8fafc;
        background: rgba(255, 255, 255, 0.05);
      }

      &.active {
        color: #2563eb;
        background: rgba(37, 99, 235, 0.1);
      }
    }

    .resume-btn {
      background: linear-gradient(135deg, #2563eb, #1d4ed8);
      color: white !important;
      padding: 8px 18px !important;
      border-radius: 6px;
      font-weight: 500 !important;

      &:hover {
        background: linear-gradient(135deg, #3b82f6, #2563eb) !important;
        transform: translateY(-1px);
      }
    }
  }
}

.burger {
  display: none;
  font-size: 24px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  margin-left: auto;
}

@media (max-width: 768px) {
  .navbar {
    padding: 0 16px;
  }

  .burger {
    display: block;
  }

  .navbar-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 64px;
    left: 0;
    width: 100%;
    background: rgba(15, 23, 42, 0.98);
    backdrop-filter: blur(12px);
    padding: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);

    &.open {
      display: flex;
    }

    li {
      a {
        width: 100%;
        padding: 12px 16px;
      }
    }
  }

  .profile-title {
    display: none;
  }
}
```

- [ ] **Step: Update navbar component TS** (keep same logic, just clean up)

Edit `src/app/profile-navbar/profile-navbar.component.ts`:
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'navbarrr',
  templateUrl: './profile-navbar.component.html',
  styleUrls: ['./profile-navbar.component.scss']
})
export class ProfileNavbarComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
```

- [ ] **Step: Commit**

```bash
git add -A
git commit -m "feat: update navbar with DE branding and resume CTA"
```

---

### Task 3: Home/Hero Component — Typing Effect, Stats, Avatar Icon

**Files:**
- Modify: `src/app/home/home.component.html`
- Modify: `src/app/home/home.component.scss`
- Modify: `src/app/home/home.component.ts`

- [ ] **Step: Update home component TS**

Edit `src/app/home/home.component.ts`:
```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  title = 'Data Engineer Portfolio';

  // Typing effect
  displayText = '';
  fullTexts = [
    'Data Engineer',
    'PySpark Developer',
    'Azure Databricks Specialist',
    'ETL Pipeline Architect'
  ];
  textIndex = 0;
  charIndex = 0;
  isDeleting = false;
  private typingTimer: any;

  ngOnInit(): void {
    this.startTyping();
  }

  ngOnDestroy(): void {
    if (this.typingTimer) clearTimeout(this.typingTimer);
  }

  startTyping() {
    const currentText = this.fullTexts[this.textIndex];
    const speed = this.isDeleting ? 50 : 100;

    if (!this.isDeleting) {
      this.displayText = currentText.substring(0, this.charIndex + 1);
      this.charIndex++;
      if (this.charIndex === currentText.length) {
        this.isDeleting = true;
        this.typingTimer = setTimeout(() => this.startTyping(), 2000);
        return;
      }
    } else {
      this.displayText = currentText.substring(0, this.charIndex - 1);
      this.charIndex--;
      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.textIndex = (this.textIndex + 1) % this.fullTexts.length;
      }
    }

    this.typingTimer = setTimeout(() => this.startTyping(), speed);
  }
}
```

- [ ] **Step: Update home template**

Edit `src/app/home/home.component.html`:
```html
<section class="hero">
  <div class="hero-content">
    <div class="hero-text">
      <p class="hero-greeting">Hi, I'm</p>
      <h1 class="hero-name">Subrata Das</h1>
      <div class="hero-role">
        <span class="role-label">I build </span>
        <span class="role-typing">{{ displayText }}<span class="cursor">|</span></span>
      </div>
      <p class="hero-tagline">Building scalable data pipelines. Turning raw data into decisions.</p>

      <div class="hero-stats">
        <div class="stat-item">
          <span class="stat-value">4.5+</span>
          <span class="stat-label">Years Experience</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <span class="stat-value">3</span>
          <span class="stat-label">Production DE Projects</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <span class="stat-value">0</span>
          <span class="stat-label">Critical Failures</span>
        </div>
      </div>

      <div class="hero-actions">
        <a href="assets/SubrataDas_DataEngineer_Resume.pdf" download class="btn-primary">
          <i class="fas fa-download"></i> Download Resume
        </a>
        <a href="https://www.linkedin.com/in/subrata-das-7001188620/" target="_blank" class="btn-icon" aria-label="LinkedIn">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/codingLifeEasy" target="_blank" class="btn-icon" aria-label="GitHub">
          <i class="fab fa-github"></i>
        </a>
        <a href="mailto:subratadasworking@gmail.com" class="btn-icon" aria-label="Email">
          <i class="fas fa-envelope"></i>
        </a>
      </div>
    </div>

    <div class="hero-visual">
      <div class="avatar-icon">
        <i class="fas fa-code"></i>
      </div>
      <div class="tech-stack-ring">
        <span class="tech-badge" style="--i: 0">PySpark</span>
        <span class="tech-badge" style="--i: 1">Databricks</span>
        <span class="tech-badge" style="--i: 2">ADF</span>
        <span class="tech-badge" style="--i: 3">Azure</span>
        <span class="tech-badge" style="--i: 4">SQL</span>
        <span class="tech-badge" style="--i: 5">Delta Lake</span>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step: Update home styles**

Edit `src/app/home/home.component.scss`:
```scss
:host {
  display: block;
  min-height: calc(100vh - 64px);
}

.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 64px);
  padding: 40px 80px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, transparent 70%);
    pointer-events: none;
  }
}

.hero-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  gap: 60px;
}

.hero-text {
  flex: 1;
  max-width: 600px;
}

.hero-greeting {
  font-family: 'JetBrains Mono', monospace;
  font-size: 16px;
  color: #2563eb;
  margin-bottom: 8px;
  animation: fadeInUp 0.6s ease-out;
}

.hero-name {
  font-size: clamp(40px, 6vw, 72px);
  font-weight: 800;
  color: #f8fafc;
  letter-spacing: -2px;
  line-height: 1.1;
  margin-bottom: 16px;
  animation: fadeInUp 0.6s ease-out 0.1s both;
}

.hero-role {
  font-size: clamp(20px, 3vw, 32px);
  font-weight: 400;
  color: #94a3b8;
  margin-bottom: 20px;
  min-height: 44px;
  animation: fadeInUp 0.6s ease-out 0.2s both;

  .role-label {
    color: #94a3b8;
  }

  .role-typing {
    color: #06b6d4;
    font-weight: 500;
  }

  .cursor {
    color: #2563eb;
    animation: pulse 1s infinite;
    font-weight: 100;
  }
}

.hero-tagline {
  font-size: 18px;
  color: #64748b;
  margin-bottom: 32px;
  animation: fadeInUp 0.6s ease-out 0.3s both;
}

.hero-stats {
  display: flex;
  gap: 24px;
  align-items: center;
  margin-bottom: 36px;
  animation: fadeInUp 0.6s ease-out 0.4s both;
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat-value {
  font-size: 28px;
  font-weight: 700;
  color: #2563eb;
  font-family: 'JetBrains Mono', monospace;
}

.stat-label {
  font-size: 12px;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  animation: fadeInUp 0.6s ease-out 0.5s both;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 15px;
  font-family: 'Inter', sans-serif;
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(37, 99, 235, 0.3);
  }
}

.btn-icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #94a3b8;
  text-decoration: none;
  font-size: 18px;
  transition: all 0.2s ease;

  &:hover {
    color: #f8fafc;
    border-color: #2563eb;
    background: rgba(37, 99, 235, 0.1);
    transform: translateY(-2px);
  }
}

// Right side - visual
.hero-visual {
  flex: 0 0 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  animation: fadeIn 0.8s ease-out 0.6s both;
}

.avatar-icon {
  width: 180px;
  height: 180px;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.15), rgba(6, 182, 212, 0.1));
  border: 2px solid rgba(37, 99, 235, 0.3);
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 64px;
  color: #2563eb;
  position: relative;
  animation: morphBlob 8s ease-in-out infinite;
}

@keyframes morphBlob {
  0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
  25% { border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%; }
  50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; }
  75% { border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%; }
  100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
}

.tech-stack-ring {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  max-width: 280px;
}

.tech-badge {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  padding: 4px 12px;
  background: rgba(37, 99, 235, 0.1);
  border: 1px solid rgba(37, 99, 235, 0.2);
  border-radius: 20px;
  color: #93c5fd;
  animation: fadeInUp 0.4s ease-out calc(0.7s + (var(--i) * 0.1s)) both;
}

// Responsive
@media (max-width: 768px) {
  .hero {
    padding: 40px 20px;
    text-align: center;
  }

  .hero-content {
    flex-direction: column-reverse;
    gap: 40px;
  }

  .hero-text {
    max-width: 100%;
  }

  .hero-stats {
    justify-content: center;
    flex-wrap: wrap;
  }

  .hero-actions {
    justify-content: center;
    flex-wrap: wrap;
  }

  .hero-visual {
    flex: none;
  }

  .avatar-icon {
    width: 140px;
    height: 140px;
    font-size: 48px;
  }
}
```

- [ ] **Step: Commit**

```bash
git add -A
git commit -m "feat: redesign home hero with typing effect and DE focus"
```

---

### Task 4: About Me Component

**Files:**
- Modify: `src/app/about-me/about-me.component.html`
- Modify: `src/app/about-me/about-me.component.scss`

- [ ] **Step: Update about-me template**

Edit `src/app/about-me/about-me.component.html`:
```html
<section class="about-section">
  <div class="section-header">
    <span class="section-tag">About Me</span>
    <h2 class="section-title">Turning Data into <span class="highlight">Actionable Insights</span></h2>
    <div class="section-divider"></div>
  </div>

  <div class="about-content">
    <div class="about-text">
      <p>
        I'm a <strong>Data Engineer</strong> with <strong>4.5+ years</strong> of experience at
        <strong>Tata Consultancy Services (TCS)</strong>, currently assigned to
        <strong>KPMG Netherlands</strong> — one of the Big 4 audit and advisory firms.
      </p>
      <p>
        I specialize in designing and building scalable data pipelines on <strong>Microsoft Azure</strong>
        using <strong>Databricks</strong>, <strong>PySpark</strong>, <strong>Azure Data Factory</strong>,
        and <strong>Delta Lake</strong>. Over the course of <strong>3 production projects</strong>,
        I've delivered data solutions with <strong>zero critical failures</strong> that serve
        <strong>400+ daily active users</strong>.
      </p>
      <p>
        Beyond building pipelines, I'm passionate about <strong>pipeline optimization</strong> —
        I've driven a <strong>45% improvement in pipeline throughput</strong> through strategic
        refactoring and performance tuning. I also mentor junior engineers and serve as the
        <strong>SPOC for new joiner onboarding</strong>, helping the team scale efficiently.
      </p>

      <div class="about-highlights">
        <div class="highlight-item">
          <i class="fas fa-check-circle"></i>
          <span>Zero critical production failures</span>
        </div>
        <div class="highlight-item">
          <i class="fas fa-check-circle"></i>
          <span>45% pipeline throughput improvement</span>
        </div>
        <div class="highlight-item">
          <i class="fas fa-check-circle"></i>
          <span>Mentored 2 junior data engineers</span>
        </div>
        <div class="highlight-item">
          <i class="fas fa-check-circle"></i>
          <span>Collaborated with 12+ international team members</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step: Update about-me styles**

Edit `src/app/about-me/about-me.component.scss`:
```scss
.about-section {
  max-width: 1000px;
  margin: 0 auto;
  padding: 80px 40px;
  animation: fadeIn 0.6s ease-out;
}

.section-header {
  text-align: center;
  margin-bottom: 48px;
}

.section-tag {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  color: #2563eb;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 12px;
  display: block;
}

.section-title {
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 700;
  color: #f8fafc;
  margin-bottom: 16px;

  .highlight {
    color: #06b6d4;
  }
}

.section-divider {
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #2563eb, #06b6d4);
  margin: 0 auto;
  border-radius: 2px;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.about-text {
  max-width: 800px;
  margin: 0 auto;

  p {
    font-size: 16px;
    line-height: 1.8;
    color: #cbd5e1;
    margin-bottom: 20px;

    strong {
      color: #f8fafc;
      font-weight: 600;
    }
  }
}

.about-highlights {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  margin-top: 32px;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  transition: all 0.2s ease;

  i {
    color: #06b6d4;
    font-size: 16px;
  }

  span {
    font-size: 14px;
    color: #94a3b8;
  }

  &:hover {
    background: rgba(37, 99, 235, 0.05);
    border-color: rgba(37, 99, 235, 0.2);
    transform: translateY(-2px);
  }
}

@media (max-width: 768px) {
  .about-section {
    padding: 48px 20px;
  }

  .about-highlights {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step: Commit**

```bash
git add -A
git commit -m "feat: update about-me with DE professional summary"
```

---

### Task 5: Experience Component — Real DE Timeline

**Files:**
- Modify: `src/app/experience/experience.component.html`
- Modify: `src/app/experience/experience.component.scss`
- Modify: `src/app/experience/experience.component.ts`

- [ ] **Step: Update experience TS**

Edit `src/app/experience/experience.component.ts`:
```typescript
import { Component } from '@angular/core';

interface Experience {
  title: string;
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  tech: string[];
  side: 'left' | 'right';
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      title: 'Azure Databricks Lakehouse — BPS Ops Reporting',
      company: 'TCS @ KPMG Netherlands',
      role: 'Data Engineer',
      period: 'Jun 2024 – Present',
      description: 'Building and maintaining a scalable Databricks-PySpark lakehouse for KPMG\'s Business Process Solutions operational reporting platform.',
      highlights: [
        'Designed and implemented Delta Lake ingestion pipelines processing 400K+ daily records',
        'Achieved 45% improvement in pipeline throughput via strategic refactoring and optimization',
        'Zero critical failures across 3 production environments over 12+ months',
        'Built automated SLA dashboards in Power BI serving 400+ daily users',
        'Collaborated with 12+ international team members across time zones'
      ],
      tech: ['PySpark', 'Databricks', 'Delta Lake', 'ADLS Gen2', 'ADF', 'Power BI', 'SQL'],
      side: 'right'
    },
    {
      title: 'ETL Modernisation — SSIS to ADF Migration',
      company: 'TCS @ KPMG Netherlands',
      role: 'Data Engineer',
      period: 'Jun 2023 – May 2024',
      description: 'Led the migration of legacy SSIS ETL packages to modern Azure Data Factory pipelines with Databricks transformation layer.',
      highlights: [
        'Migrated 50+ SSIS packages to ADF with Databricks notebook transformations',
        'Reduced pipeline execution time by 35% through parallel processing and optimization',
        'Implemented comprehensive monitoring and alerting with Azure Monitor',
        'Designed reusable ADF templates that reduced new pipeline setup time by 60%',
        'Created interactive Power BI dashboards for business stakeholder reporting'
      ],
      tech: ['ADF', 'Databricks', 'Python', 'SQL Server', 'SSIS', 'Power BI', 'Azure Monitor'],
      side: 'left'
    },
    {
      title: 'Cloud Infrastructure & CI-CD for Data Platform',
      company: 'TCS @ KPMG Netherlands',
      role: 'Data Engineer',
      period: 'Sep 2022 – May 2023',
      description: 'Managed cloud infrastructure and CI-CD pipelines for the enterprise data platform, onboarding new team members and establishing best practices.',
      highlights: [
        'Administered Databricks workspaces, Unity Catalog, and RBAC for 15+ users',
        'Set up CI-CD pipelines in Azure DevOps for automated ADF and Databricks deployments',
        'Mentored 2 junior data engineers through structured onboarding and code reviews',
        'Created comprehensive technical documentation and runbooks for platform operations',
        'Served as SPOC for new joiner enablement across the data engineering team'
      ],
      tech: ['Azure DevOps', 'Databricks', 'ADF', 'Unity Catalog', 'Python', 'Git', 'CI/CD'],
      side: 'right'
    }
  ];
}
```

- [ ] **Step: Update experience template**

Edit `src/app/experience/experience.component.html`:
```html
<section class="experience-section">
  <div class="section-header">
    <span class="section-tag">Experience</span>
    <h2 class="section-title">Where I've <span class="highlight">Worked</span></h2>
    <div class="section-divider"></div>
  </div>

  <div class="timeline-wrapper">
    <div class="timeline-line"></div>

    <div *ngFor="let exp of experiences" class="timeline-item" [ngClass]="exp.side">
      <div class="content">
        <div class="content-header">
          <span class="company">{{ exp.company }}</span>
          <span class="period">{{ exp.period }}</span>
        </div>
        <h3 class="exp-title">{{ exp.title }}</h3>
        <p class="role-tag">{{ exp.role }}</p>
        <p class="description">{{ exp.description }}</p>
        <ul class="highlights">
          <li *ngFor="let h of exp.highlights">{{ h }}</li>
        </ul>
        <div class="tech-tags">
          <span class="tech-tag" *ngFor="let t of exp.tech">{{ t }}</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step: Update experience styles**

Edit `src/app/experience/experience.component.scss`:
```scss
.experience-section {
  max-width: 1000px;
  margin: 0 auto;
  padding: 80px 40px;
  animation: fadeIn 0.6s ease-out;
}

.section-header {
  text-align: center;
  margin-bottom: 48px;
}

.section-tag {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  color: #2563eb;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 12px;
  display: block;
}

.section-title {
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 700;
  color: #f8fafc;
  margin-bottom: 16px;

  .highlight {
    color: #06b6d4;
  }
}

.section-divider {
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #2563eb, #06b6d4);
  margin: 0 auto;
  border-radius: 2px;
}

// Timeline
.timeline-wrapper {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, #2563eb, #06b6d4, transparent);
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  width: 50%;
  padding: 0 40px 48px;
  box-sizing: border-box;

  &::before {
    content: '';
    position: absolute;
    top: 8px;
    width: 14px;
    height: 14px;
    background: #2563eb;
    border: 3px solid #0f172a;
    border-radius: 50%;
    z-index: 2;
  }

  &.left {
    left: 0;
    text-align: right;

    &::before {
      right: -9px;
    }

    .content {
      margin-right: 0;
    }

    .tech-tags {
      justify-content: flex-end;
    }
  }

  &.right {
    left: 50%;

    &::before {
      left: -9px;
    }

    .content {
      margin-left: 0;
    }
  }
}

.content {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  padding: 24px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(37, 99, 235, 0.3);
    box-shadow: 0 12px 32px rgba(37, 99, 235, 0.1);
  }
}

.content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  flex-wrap: wrap;
  gap: 8px;
}

.company {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: #2563eb;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.period {
  font-size: 12px;
  color: #64748b;
  font-family: 'JetBrains Mono', monospace;
}

.exp-title {
  font-size: 18px;
  font-weight: 600;
  color: #f8fafc;
  margin-bottom: 8px;
}

.role-tag {
  display: inline-block;
  font-size: 12px;
  color: #06b6d4;
  font-family: 'JetBrains Mono', monospace;
  background: rgba(6, 182, 212, 0.1);
  padding: 3px 10px;
  border-radius: 4px;
  margin-bottom: 12px;
}

.description {
  font-size: 14px;
  color: #94a3b8;
  line-height: 1.6;
  margin-bottom: 16px;
}

.highlights {
  list-style: none;
  padding: 0;
  margin: 0 0 16px;

  li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 8px;
    font-size: 14px;
    color: #cbd5e1;
    line-height: 1.5;

    &::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: #2563eb;
    }
  }
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tech-tag {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  padding: 3px 10px;
  background: rgba(37, 99, 235, 0.08);
  border: 1px solid rgba(37, 99, 235, 0.15);
  border-radius: 4px;
  color: #93c5fd;
}

// Responsive
@media (max-width: 768px) {
  .experience-section {
    padding: 48px 20px;
  }

  .timeline-item,
  .timeline-item.left,
  .timeline-item.right {
    width: 100%;
    left: 0;
    padding: 0 0 32px 24px;
    text-align: left;

    &::before {
      left: -9px;
      right: auto;
    }

    .tech-tags {
      justify-content: flex-start;
    }
  }

  .timeline-line {
    left: 10px;
  }

  .content-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
```

- [ ] **Step: Commit**

```bash
git add -A
git commit -m "feat: add real DE experience timeline with KPIs"
```

---

### Task 6: Skills Component — Data Engineering Skill Set

**Files:**
- Modify: `src/app/skill/skill.component.html`
- Modify: `src/app/skill/skill.component.scss`
- Modify: `src/app/skill/skill.component.ts`

- [ ] **Step: Update skills TS**

Edit `src/app/skill/skill.component.ts`:
```typescript
import { Component } from '@angular/core';

interface Skill {
  name: string;
  category: string;
}

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {
  categories = [
    { key: 'all', label: 'All' },
    { key: 'cloud', label: 'Cloud & Big Data' },
    { key: 'etl', label: 'ETL & Orchestration' },
    { key: 'languages', label: 'Languages' },
    { key: 'databases', label: 'Databases' },
    { key: 'devops', label: 'DevOps & Tools' }
  ];

  activeCategory = 'all';

  allSkills: Skill[] = [
    { name: 'Azure Databricks', category: 'cloud' },
    { name: 'Azure Synapse Analytics', category: 'cloud' },
    { name: 'Azure Data Lake Gen2', category: 'cloud' },
    { name: 'Delta Lake', category: 'cloud' },
    { name: 'Apache Spark', category: 'cloud' },
    { name: 'Azure Data Factory', category: 'etl' },
    { name: 'Databricks Workflows', category: 'etl' },
    { name: 'SSIS', category: 'etl' },
    { name: 'PySpark', category: 'languages' },
    { name: 'Python', category: 'languages' },
    { name: 'SQL', category: 'languages' },
    { name: 'TypeScript', category: 'languages' },
    { name: 'SQL Server', category: 'databases' },
    { name: 'Azure SQL DB', category: 'databases' },
    { name: 'Power BI', category: 'devops' },
    { name: 'Azure DevOps', category: 'devops' },
    { name: 'CI/CD', category: 'devops' },
    { name: 'Git', category: 'devops' }
  ];

  get filteredSkills(): Skill[] {
    if (this.activeCategory === 'all') return this.allSkills;
    return this.allSkills.filter(s => s.category === this.activeCategory);
  }

  setCategory(cat: string) {
    this.activeCategory = cat;
  }
}
```

- [ ] **Step: Update skills template**

Edit `src/app/skill/skill.component.html`:
```html
<section class="skills-section">
  <div class="section-header">
    <span class="section-tag">Skills</span>
    <h2 class="section-title">My <span class="highlight">Tech Stack</span></h2>
    <div class="section-divider"></div>
  </div>

  <div class="skills-filter">
    <button
      *ngFor="let cat of categories"
      (click)="setCategory(cat.key)"
      [class.active]="activeCategory === cat.key"
    >
      {{ cat.label }}
    </button>
  </div>

  <div class="skills-grid">
    <div class="skill-card" *ngFor="let skill of filteredSkills">
      <div class="skill-icon">
        <i class="fas" [ngClass]="getSkillIcon(skill.name)"></i>
      </div>
      <span class="skill-name">{{ skill.name }}</span>
    </div>
  </div>
</section>
```

Hmm, let me keep it simple without dynamic icons:

Edit `src/app/skill/skill.component.html`:
```html
<section class="skills-section">
  <div class="section-header">
    <span class="section-tag">Skills</span>
    <h2 class="section-title">My <span class="highlight">Tech Stack</span></h2>
    <div class="section-divider"></div>
  </div>

  <div class="skills-filter">
    <button
      *ngFor="let cat of categories"
      (click)="setCategory(cat.key)"
      [class.active]="activeCategory === cat.key"
    >
      {{ cat.label }}
    </button>
  </div>

  <div class="skills-grid">
    <div class="skill-card" *ngFor="let skill of filteredSkills">
      <span class="skill-dot"></span>
      <span class="skill-name">{{ skill.name }}</span>
    </div>
  </div>
</section>
```

- [ ] **Step: Update skills styles**

Edit `src/app/skill/skill.component.scss`:
```scss
.skills-section {
  max-width: 900px;
  margin: 0 auto;
  padding: 80px 40px;
  animation: fadeIn 0.6s ease-out;
}

.section-header {
  text-align: center;
  margin-bottom: 48px;
}

.section-tag {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  color: #2563eb;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 12px;
  display: block;
}

.section-title {
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 700;
  color: #f8fafc;
  margin-bottom: 16px;

  .highlight {
    color: #06b6d4;
  }
}

.section-divider {
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #2563eb, #06b6d4);
  margin: 0 auto;
  border-radius: 2px;
}

// Filter buttons
.skills-filter {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 40px;

  button {
    padding: 8px 18px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 6px;
    color: #94a3b8;
    font-size: 13px;
    font-family: 'Inter', sans-serif;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      color: #f8fafc;
      border-color: rgba(37, 99, 235, 0.3);
      background: rgba(37, 99, 235, 0.05);
    }

    &.active {
      color: #f8fafc;
      background: #2563eb;
      border-color: #2563eb;
    }
  }
}

// Skills grid
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 12px;
}

.skill-card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 16px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(37, 99, 235, 0.05);
    border-color: rgba(37, 99, 235, 0.2);
    transform: translateY(-2px);
  }
}

.skill-dot {
  width: 8px;
  height: 8px;
  background: #2563eb;
  border-radius: 50%;
  flex-shrink: 0;
}

.skill-name {
  font-size: 14px;
  color: #cbd5e1;
  font-weight: 400;
}

@media (max-width: 768px) {
  .skills-section {
    padding: 48px 20px;
  }

  .skills-grid {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }
}
```

- [ ] **Step: Commit**

```bash
git add -A
git commit -m "feat: update skills with Data Engineering tech stack"
```

---

### Task 7: Projects Component — 3 DE Projects with Metrics

**Files:**
- Modify: `src/app/projects/projects.component.html`
- Modify: `src/app/projects/projects.component.scss`
- Modify: `src/app/projects/projects.component.ts`

- [ ] **Step: Create project data in TS**

Edit `src/app/projects/projects.component.ts`:
```typescript
import { Component } from '@angular/core';

interface Project {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  tech: string[];
  icon: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Azure Databricks Lakehouse',
      subtitle: 'BPS Operational Reporting — KPMG Netherlands',
      period: 'Jun 2024 – Present',
      description: 'Designed and built a scalable Databricks-PySpark lakehouse for KPMG\'s Business Process Solutions team, enabling automated SLA reporting and operational analytics for 400+ daily users.',
      highlights: [
        'Architected Delta Lake ingestion pipelines processing 400K+ daily records from multiple source systems',
        'Optimized PySpark transformations reducing pipeline runtime by 45%',
        'Built automated SLA dashboards in Power BI with real-time data refresh',
        'Implemented Unity Catalog for data governance and access control'
      ],
      metrics: [
        { label: 'Throughput Gain', value: '+45%' },
        { label: 'Daily Users', value: '400+' },
        { label: 'Critical Failures', value: '0' }
      ],
      tech: ['PySpark', 'Databricks', 'Delta Lake', 'ADLS Gen2', 'ADF', 'Power BI'],
      icon: 'fa-database'
    },
    {
      title: 'ETL Modernisation Initiative',
      subtitle: 'SSIS to Azure Data Factory Migration',
      period: 'Jun 2023 – May 2024',
      description: 'Led the migration of 50+ legacy SSIS ETL packages to modern Azure Data Factory pipelines with Databricks transformation layer, reducing execution time and improving maintainability.',
      highlights: [
        'Re-engineered 50+ SSIS packages into modular ADF pipelines with Databricks transformations',
        'Implemented parallel processing reducing overall pipeline execution time by 35%',
        'Created reusable ADF template library cutting new pipeline setup time by 60%',
        'Set up Azure Monitor alerting for proactive issue detection and resolution'
      ],
      metrics: [
        { label: 'Pipelines Migrated', value: '50+' },
        { label: 'Exec Time Reduced', value: '-35%' },
        { label: 'Setup Time Saved', value: '-60%' }
      ],
      tech: ['ADF', 'Databricks', 'Python', 'SQL Server', 'SSIS', 'Power BI'],
      icon: 'fa-arrow-right-arrow-left'
    },
    {
      title: 'Data Platform Infrastructure & CI-CD',
      subtitle: 'Cloud Administration & Team Enablement',
      period: 'Sep 2022 – May 2023',
      description: 'Managed cloud infrastructure for the enterprise data platform, establishing CI-CD pipelines and onboarding practices that scaled the team from 3 to 6 engineers.',
      highlights: [
        'Administered Databricks workspace with Unity Catalog for 15+ users across multiple environments',
        'Built CI-CD pipelines in Azure DevOps for automated ADF and Databricks notebook deployments',
        'Mentored 2 junior data engineers through structured code reviews and pair programming sessions',
        'Created comprehensive runbooks enabling self-service platform operations'
      ],
      metrics: [
        { label: 'Team Size', value: '3→6' },
        { label: 'Engineers Mentored', value: '2' },
        { label: 'Environments', value: '3' }
      ],
      tech: ['Azure DevOps', 'Databricks', 'ADF', 'Unity Catalog', 'Python', 'CI/CD'],
      icon: 'fa-cloud'
    }
  ];
}
```

- [ ] **Step: Update projects template**

Edit `src/app/projects/projects.component.html`:
```html
<section class="projects-section">
  <div class="section-header">
    <span class="section-tag">Projects</span>
    <h2 class="section-title">Data Engineering <span class="highlight">In Action</span></h2>
    <div class="section-divider"></div>
  </div>

  <div class="projects-grid">
    <div class="project-card" *ngFor="let project of projects">
      <div class="card-header">
        <div class="card-icon">
          <i class="fas" [ngClass]="project.icon"></i>
        </div>
        <div>
          <h3 class="card-title">{{ project.title }}</h3>
          <p class="card-subtitle">{{ project.subtitle }}</p>
        </div>
      </div>

      <span class="card-period">{{ project.period }}</span>
      <p class="card-description">{{ project.description }}</p>

      <div class="card-metrics">
        <div class="metric" *ngFor="let m of project.metrics">
          <span class="metric-value">{{ m.value }}</span>
          <span class="metric-label">{{ m.label }}</span>
        </div>
      </div>

      <ul class="card-highlights">
        <li *ngFor="let h of project.highlights">{{ h }}</li>
      </ul>

      <div class="card-tech">
        <span class="tech-tag" *ngFor="let t of project.tech">{{ t }}</span>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step: Update projects styles**

Edit `src/app/projects/projects.component.scss`:
```scss
.projects-section {
  max-width: 1000px;
  margin: 0 auto;
  padding: 80px 40px;
  animation: fadeIn 0.6s ease-out;
}

.section-header {
  text-align: center;
  margin-bottom: 48px;
}

.section-tag {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  color: #2563eb;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 12px;
  display: block;
}

.section-title {
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 700;
  color: #f8fafc;
  margin-bottom: 16px;

  .highlight {
    color: #06b6d4;
  }
}

.section-divider {
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #2563eb, #06b6d4);
  margin: 0 auto;
  border-radius: 2px;
}

// Project cards
.projects-grid {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.project-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  padding: 32px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(37, 99, 235, 0.3);
    box-shadow: 0 12px 32px rgba(37, 99, 235, 0.1);
  }
}

.card-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.card-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.15), rgba(6, 182, 212, 0.1));
  border: 1px solid rgba(37, 99, 235, 0.2);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #2563eb;
  flex-shrink: 0;
}

.card-title {
  font-size: 20px;
  font-weight: 600;
  color: #f8fafc;
  margin: 0;
}

.card-subtitle {
  font-size: 13px;
  color: #64748b;
  margin: 4px 0 0;
}

.card-period {
  display: inline-block;
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: #64748b;
  margin-bottom: 16px;
  padding: 2px 10px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 4px;
}

.card-description {
  font-size: 15px;
  color: #94a3b8;
  line-height: 1.7;
  margin-bottom: 20px;
}

// Metrics row
.card-metrics {
  display: flex;
  gap: 24px;
  margin-bottom: 20px;
  padding: 16px 20px;
  background: rgba(37, 99, 235, 0.05);
  border: 1px solid rgba(37, 99, 235, 0.1);
  border-radius: 8px;
}

.metric {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.metric-value {
  font-size: 22px;
  font-weight: 700;
  color: #06b6d4;
  font-family: 'JetBrains Mono', monospace;
}

.metric-label {
  font-size: 11px;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 1px;
}

// Highlights
.card-highlights {
  list-style: none;
  padding: 0;
  margin: 0 0 20px;

  li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 8px;
    font-size: 14px;
    color: #cbd5e1;
    line-height: 1.5;

    &::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: #2563eb;
    }
  }
}

// Tech tags
.card-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tech-tag {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  padding: 3px 10px;
  background: rgba(37, 99, 235, 0.08);
  border: 1px solid rgba(37, 99, 235, 0.15);
  border-radius: 4px;
  color: #93c5fd;
}

@media (max-width: 768px) {
  .projects-section {
    padding: 48px 20px;
  }

  .project-card {
    padding: 20px;
  }

  .card-metrics {
    flex-wrap: wrap;
    gap: 12px;
  }
}
```

- [ ] **Step: Commit**

```bash
git add -A
git commit -m "feat: add 3 data engineering projects with metrics"
```

---

### Task 8: Certifications Component — Add HackerRank Certs

**Files:**
- Modify: `src/app/certification/certification.component.html`
- Modify: `src/app/certification/certification.component.scss`
- Modify: `src/app/certification/certification.component.ts`

- [ ] **Step: Update certifications TS**

Edit `src/app/certification/certification.component.ts`:
```typescript
import { Component } from '@angular/core';

interface Certification {
  title: string;
  issuer: string;
  image: string;
  link: string;
  date?: string;
}

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss']
})
export class CertificationComponent {
  certifications: Certification[] = [
    {
      title: 'Microsoft Certified: Azure Administrator (AZ-104)',
      issuer: 'Microsoft',
      image: 'assets/Az-104.png',
      link: 'https://learn.microsoft.com/api/credentials/share/en-us/Subratadasworking-9395/EA067892AFFF3266?sharingId=E1477A61EDFD8A55',
      date: '2024'
    }
  ];
}
```

- [ ] **Step: Update certifications template**

Edit `src/app/certification/certification.component.html`:
```html
<section class="certs-section">
  <div class="section-header">
    <span class="section-tag">Certifications</span>
    <h2 class="section-title">Verified <span class="highlight">Credentials</span></h2>
    <div class="section-divider"></div>
  </div>

  <div class="certs-grid">
    <a *ngFor="let cert of certifications"
       [href]="cert.link"
       target="_blank"
       class="cert-card">
      <div class="cert-image">
        <img [src]="cert.image" [alt]="cert.title">
      </div>
      <div class="cert-info">
        <h3>{{ cert.title }}</h3>
        <span class="cert-issuer">{{ cert.issuer }}</span>
        <span class="cert-date" *ngIf="cert.date">{{ cert.date }}</span>
      </div>
    </a>
  </div>
</section>
```

- [ ] **Step: Update certifications styles**

Edit `src/app/certification/certification.component.scss`:
```scss
.certs-section {
  max-width: 1000px;
  margin: 0 auto;
  padding: 80px 40px;
  animation: fadeIn 0.6s ease-out;
}

.section-header {
  text-align: center;
  margin-bottom: 48px;
}

.section-tag {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  color: #2563eb;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 12px;
  display: block;
}

.section-title {
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 700;
  color: #f8fafc;
  margin-bottom: 16px;

  .highlight {
    color: #06b6d4;
  }
}

.section-divider {
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #2563eb, #06b6d4);
  margin: 0 auto;
  border-radius: 2px;
}

.certs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
}

.cert-card {
  display: flex;
  gap: 16px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(37, 99, 235, 0.3);
    box-shadow: 0 8px 24px rgba(37, 99, 235, 0.1);
  }
}

.cert-image {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
}

.cert-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;

  h3 {
    font-size: 15px;
    font-weight: 600;
    color: #f8fafc;
    margin: 0;
  }

  .cert-issuer {
    font-size: 13px;
    color: #2563eb;
  }

  .cert-date {
    font-size: 12px;
    color: #64748b;
    font-family: 'JetBrains Mono', monospace;
  }
}

@media (max-width: 768px) {
  .certs-section {
    padding: 48px 20px;
  }

  .certs-grid {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step: Commit**

```bash
git add -A
git commit -m "feat: update certifications with card layout"
```

---

### Task 9: Contact & Footer — Minimal Updates

**Files:**
- Modify: `src/app/contact-me/contact-me.component.html`
- Modify: `src/app/footer/footer.component.html`
- Modify: `src/app/footer/footer.component.scss`
- Modify: `src/app/footer/footer.component.ts`

- [ ] **Step: Update contact form title**

Edit `src/app/contact-me/contact-me.component.html` (change just the title):
```html
<div class="contct-container">
  <form (ngSubmit)="onSubmit(contactForm)" #contactForm="ngForm" class="contact-left">
    <div class="contact-left-title">
      <h2>Get In Touch</h2>
      <p style="color: #94a3b8; font-size: 14px; margin-bottom: 20px;">
        Have a data engineering opportunity? Let's talk.
      </p>
      <hr>
    </div>

    <input type="hidden" name="access_key" [value]="web3formsKey">
    <input type="text" placeholder="Your Name" name="name" class="contact-inputs" ngModel required>
    <input type="email" placeholder="Your Email" name="email" class="contact-inputs" ngModel required>
    <textarea placeholder="Your Message" name="message" class="contact-inputs" ngModel required></textarea>
    <button type="submit" [disabled]="loading">{{ loading ? 'Sending...' : 'Send Message' }}</button>
    <p *ngIf="successMessage" style="color: #06b6d4;">{{ successMessage }}</p>
    <p *ngIf="errorMessage" style="color: #ef4444;">{{ errorMessage }}</p>
  </form>
</div>
```

- [ ] **Step: Update footer**

Edit `src/app/footer/footer.component.html`:
```html
<footer class="site-footer">
  <div class="footer-container">
    <p class="footer-left">&copy; 2026 Subrata Das. Built with Angular.</p>
    <div class="footer-links">
      <a href="https://www.linkedin.com/in/subrata-das-7001188620/" target="_blank">
        <i class="fab fa-linkedin-in"></i> LinkedIn
      </a>
      <a href="https://github.com/codingLifeEasy" target="_blank">
        <i class="fab fa-github"></i> GitHub
      </a>
    </div>
  </div>
</footer>
```

Edit `src/app/footer/footer.component.scss`:
```scss
.site-footer {
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(12px);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: 0 20px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  height: 48px;
}

.footer-container {
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.footer-left {
  font-size: 12px;
  color: #64748b;
  margin: 0;
}

.footer-links {
  display: flex;
  gap: 16px;

  a {
    color: #64748b;
    text-decoration: none;
    font-size: 12px;
    transition: color 0.2s ease;
    display: flex;
    align-items: center;
    gap: 6px;

    &:hover {
      color: #f8fafc;
    }
  }
}

@media (max-width: 600px) {
  .footer-container {
    flex-direction: column;
    justify-content: center;
    gap: 4px;
  }
}
```

Edit `src/app/footer/footer.component.ts` (no changes needed, already clean).

- [ ] **Step: Commit**

```bash
git add -A
git commit -m "feat: update contact messaging and footer"
```

---

### Task 10: Add Resume PDF and Finalize

**Files:**
- Create/Replace: `src/assets/SubrataDas_DataEngineer_Resume.pdf`

- [ ] **Step: Note on resume**
The old PDF (`SubrataDas7001188620CV1.pdf`) was deleted in Task 1. Copy the new Data Engineering resume provided by the user into `src/assets/SubrataDas_DataEngineer_Resume.pdf`.

- [ ] **Step: Final verification**

```bash
cd D:\subrata\myResume
# Check that all files compile
npm install 2>&1
ng build --configuration production 2>&1
```

- [ ] **Step: Final commit with all remaining changes**

```bash
git add -A
git commit -m "feat: finalize DE portfolio transformation"
```

---

## Plan Verification Checklist

1. ✅ **All sections covered**: Home, Navbar, About, Experience, Skills, Projects, Certifications, Contact, Footer
2. ✅ **No profile photo** anywhere — avatar icon used instead
3. ✅ **New color scheme**: #0f172a bg, #2563eb accent, #06b6d4 highlight
4. ✅ **New fonts**: Inter + JetBrains Mono, old fonts removed
5. ✅ **All old Angular assets removed**
6. ✅ **DE-focused content** with real projects, KPIs, metrics
7. ✅ **No placeholders** — all code is complete and exact
