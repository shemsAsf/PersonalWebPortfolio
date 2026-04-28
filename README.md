# My CV Website - Next.js Portfolio

This is my personal **online CV / portfolio website**, built with **Next.js**, **TypeScript**, and **Tailwind CSS**.
It showcases my background, projects, skills, and experiences in a modern, interactive, and bilingual interface (French 🇫🇷 / English 🇬🇧).

Live version: https://www.shems-asfouri.dev

---

## About the project

This project is designed to act as a **dynamic CV** rather than a static document.
It highlights:

* About me
* Education
* Projects
* Skills
* Remote / professional experiences
* Personal interests
* Contact section

---

## Tech Stack

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* react-i18next (internationalization FR/EN)
* Deployed on Vercel

---

## Internationalization

The website supports **two languages**:

* 🇫🇷 French
* 🇬🇧 English

Translations are handled via:

```
src/locales/
├── en/translation.json
└── fr/translation.json
```

Language switching is managed dynamically using **react-i18next**.

---

## Project Structure

```
my-cv-website/
├── public/              # Static assets (images, CV PDFs, fonts)
│   ├── CV PDFs (EN/FR)
│   ├── Img/             # Project & UI images
│   └── fonts/
│
├── src/
│   ├── app/             # Next.js App Router
│   ├── components/      # UI & page components
│   │   ├── Animations/
│   │   └── Ui/
│   ├── hooks/           # Custom React hooks
│   └── locales/         # i18n translations
│
├── vercel.json          # Deployment config
└── next.config.ts
```

---

## Features

* Interactive CV presentation
* Fully bilingual (FR / EN)
* Fully responsive design
* Optimized performance (Next.js SSR/SSG)
* Modern UI with Tailwind CSS
* Modular component architecture
* Deployed with Vercel (CI/CD)

---

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/my-cv-website.git
cd my-cv-website
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## Build & Production

Build the project:

```bash
npm run build
```

Run production server:

```bash
npm start
```

---

## Deployment (Vercel)

This project is deployed using **Vercel**.

Each push to the main branch automatically:

* Builds the project
* Runs optimizations
* Deploys to production

---

## Key Design Goals

* Clean and professional CV presentation
* Strong focus on readability and UX
* Fast performance and lightweight architecture
* Easy scalability for new projects and sections

---

## Contact

Feel free to reach out for collaboration or opportunities.

---

## License

This project is for personal portfolio use.
