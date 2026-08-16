# Deepthi Mahendran — Personal Web Portfolio 🚀

A modern, high-performance personal portfolio built with Next.js, React, and TypeScript. Designed to effectively showcase projects, academic achievements, and technical skills with dynamic animations and an accessible UX.

## 🌟 Features

- **Next.js App Router**: Lightning fast, production-ready routing and data fetching.
- **Framer Motion Animations**: Smooth page transitions, micro-interactions, and responsive carousels.
- **Interactive Canvas Hero**: Custom particle networking simulation using native HTML5 Canvas (`getBoundingClientRect()` cached for maximum performance).
- **Glassmorphism Aesthetic**: Beautiful frosted glass UI and dynamic light/dark theme switching configured with pure CSS.
- **Perfect 100 Lighthouse Score**: Optimized heavily for performance—zero layout shifts, minimal JS execution time, strict WCAG accessibility, and purged legacy polyfills.
- **Responsive Navigation**: Desktop layout with animated active states and a mobile-optimized animated side menu.

## 💻 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Vanilla CSS (`globals.css`)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Database / ORM**: [Prisma](https://www.prisma.io/)

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/deepthi-mahendran/web-portfolio.git
   cd "web-portfolio"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Database Setup (Prisma):**
   ```bash
   npx prisma generate
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠️ Performance Optimizations

This project has been deliberately optimized for top-tier Lighthouse scores:
- **Cumulative Layout Shift (CLS)**: Pre-allocated bounding boxes for typing animations and eliminated non-composited CSS operations.
- **Eliminated Forced Reflows**: Cached layout calculations heavily accessed by standard DOM interactions (e.g. `mousemove`).
- **Targeted Polyfilling**: Uses an explicit `browserslist` threshold (`>0.3%, not dead, not op_mini all`) to drop legacy Javascript parsing times.

## 🌐 Deployment

The easiest way to deploy this application is to use [Vercel](https://vercel.com/):

```bash
npm run build
npm start
```

## 📄 License

This project is licensed under the [ISC](LICENSE) License.
