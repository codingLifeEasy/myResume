# Data Engineering Portfolio — Redesign Spec

## Overview

Transform the existing Angular-based portfolio (`codingLifeEasy/myResume`) from a junior Angular developer profile into a professional Data Engineering portfolio showcasing 4.5 years of Data Engineering experience at TCS, working on KPMG client projects in the Netherlands.

## Theme & Visual Identity

- **No profile photo** — use a professional avatar/code icon or geometric illustration instead
- **Color Palette:**
  - Primary background: Deep navy/slate (`#0f172a`)
  - Hero/section accents: Azure blue gradient (`#2563eb` → `#1d4ed8`)
  - Card backgrounds: Dark glass-morphism (`rgba(255,255,255,0.05)`) with subtle borders
  - Text: White (`#f8fafc`) for headings, slate-300 (`#cbd5e1`) for body
  - Accent highlights: Bright cyan (`#06b6d4`) for data/tech keywords
- **Fonts:**
  - Headings: `'Inter', sans-serif` (clean, modern, professional)
  - Body: `'Inter', sans-serif` (light weight 300-400)
  - Mono/code: `'JetBrains Mono', monospace` for technical highlights
  - Remove all existing Google Fonts (Bitcount Grid, Special Gothic Expanded, Fascinate, Bebas Neue, Libre Baskerville)
- **Design Inspiration**: Clean data-dashboard aesthetic (dark mode, subtle grid lines, pipeline-flow accents)
- **Overall feel**: Professional, technical, data-driven — like a modern data platform dashboard

## Sections

### 1. Navigation Bar
- Brand: "Subrata Das | Data Engineer" with a small code/data icon
- Links: Home, About, Experience, Skills, Projects, Certifications, Contact
- Resume download button (CTA) — prominent, accent-colored
- Mobile hamburger menu (keep existing)
- **No profile image in navbar** — use initials avatar or data icon

### 2. Home (Hero)
- Typed/animated heading: "Hi, I'm **Subrata Das** — **Data Engineer**"
- Tagline: `"Building scalable data pipelines. Turning raw data into decisions."`
- Key stats row: `4.5+ years` | `3 production DE projects` | `Azure | Databricks | PySpark`
- Social links: LinkedIn, GitHub, Email, Resume download (icon buttons)
- Visual: Abstract data-flow / pipeline illustration or geometric avatar
- No profile photo

### 3. About Me
- Professional summary: 4.5 year Data Engineer at TCS, assigned to KPMG Netherlands
- Key achievements: Zero critical production failures, 45% pipeline cost reduction via optimization, mentored 2 junior engineers, SPOC for new joiner enablement
- Tech focus areas: Azure Data Engineering, Big Data processing, ETL pipeline optimization
- Clean card layout with floating animation

### 4. Experience (Timeline)
Three roles at TCS, presented as timeline:

1. **Projects** (present — rewrite): Data Engineer at TCS-KPMG NL
   - Databricks + PySpark lakehouse for BPS Ops Reporting (KPMG NL)
   - 45% pipeline throughput improvement
   - Zero critical production failures in 3 production environments
   - Collaborated with 12+ international team members
   
2. **Projects** (middle): Data Engineer at TCS-KPMG NL
   - ETL Modernisation — migrated SSIS packages to Azure Data Factory
   - Designed and implemented data pipelines using ADF, Databricks, Python
   - Created interactive Power BI dashboards for business stakeholders
   
3. **ILP Training**: Associate System Engineer training

### 5. Skills (Grid with Category Filters)
Replace all skills with data engineering stack:

| Category | Skills |
|----------|--------|
| **Cloud & Big Data** | Azure Databricks, Azure Synapse Analytics, Azure Data Lake Gen2, Azure Data Factory, Delta Lake, Apache Spark |
| **ETL & Orchestration** | Azure Data Factory, Databricks Workflows, SSIS |
| **Languages** | PySpark, Python, SQL, TypeScript, Angular |
| **Databases** | SQL Server, Delta Lake, Azure SQL DB |
| **DevOps & Tools** | Azure DevOps, CI/CD, Git, Power BI |

Category filter buttons: All → Cloud & Big Data / ETL & Orchestration / Languages / Databases / DevOps

### 6. Projects (3 DE Projects with Metrics)

**Project 1: Azure Databricks Lakehouse — BPS Ops Reporting**
- Built a scalable Databricks-PySpark lakehouse for KPMG's Business Process Solutions team
- Achieved 45% improvement in pipeline throughput
- Zero critical failures across 3 production environments
- Daily automated SLA reporting for 400+ users
- **Tech:** PySpark, Databricks, Delta Lake, ADLS Gen2, ADF, Power BI

**Project 2: ETL Modernisation — SSIS to ADF Migration**
- Migrated legacy SSIS ETL packages to Azure Data Factory
- Re-engineered transformation logic using Databricks notebooks
- Reduced pipeline execution time by 35%
- Implemented monitoring and alerting with Azure Monitor
- **Tech:** ADF, Databricks, Python, SQL Server, Power BI

**Project 3: Cloud Infra & CI-CD for Data Platform**
- Managed infrastructure and CI-CD pipelines for data platform
- Administered Databricks workspaces, Unity Catalog, RBAC
- Mentored 2 junior data engineers
- Created technical documentation and onboarding guides for new joiners
- **Tech:** Azure DevOps, Databricks, ADF, Unity Catalog, Python

### 7. Certifications
- Microsoft Certified: Azure Administrator (AZ-104)
- HackerRank: Python (Advanced) Certificate
- HackerRank: REST API (Intermediate) Certificate

Grid layout with certification badge images.

### 8. Contact
- Keep existing Web3Forms integration
- Clean modern form with dark theme
- Update heading/messaging to data engineering context

### 9. Footer
- Keep simple footer
- Update year to 2026
- LinkedIn + GitHub links

## Technical Changes

### Assets
- **Remove** old assets: angular2.webp, angular-icon.jpg, angular-icon1.png, bootstrap.jpg, css.jpg, dj.png, djRestFramework.png, git hub.png, github_PNG15.png, html.jpg, IIS.jpg, javascript.png, mysql-logo.svg, nodejs.webp, oauth-2.png, post.png, python.jpg, Rxjs.jpg, train.png, typescipt1.png, typescript.png, visulastudio.png
- **Add** DE-relevant icons: Databricks logo, Azure Synapse, Azure Data Factory, Power BI, Delta Lake, Python, SQL, Spark, Azure DevOps (use SVG/CDN icons where possible)
- **Profile photo**: Replace with a data/tech avatar illustration or remove entirely
- Remove old SubrataDas7001188620CV1.pdf

### Styles
- Complete SCSS rewrite per section to match new dark navy + azure theme
- Remove all old font imports
- Add Inter + JetBrains Mono from Google Fonts
- Consistent glass-morphism card style across sections
- Responsive on all breakpoints

### Code
- Update home component: typed text animation, remove old spin/blink code
- Update about-me: new text, remove image
- Update experience: rename jobs, add KPIs, new timeline data
- Update skills: new skill set with DE categories
- Update projects: 3 new DE projects with metrics
- Update certifications: add HackerRank certs
- Update navbar: no profile pic, resume as CTA button
- Update index.html: new title, new font imports
- Update footer: year
- Update contact: messaging
