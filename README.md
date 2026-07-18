# Sithum Bimsara - Personal Portfolio

**Live Demo:** [https://sithumbimsara.vercel.app](https://sithumbimsara.vercel.app)

![Portfolio Preview](./public/portfolio-preview.png)

A modern, responsive personal portfolio website built to showcase my background in Data Science and Analytics. This portfolio highlights my projects, technical skills, experience, and certificates, demonstrating my passion for unlocking insights and building intelligent models through mathematical rigor.

## Features

- **Responsive Design**: Fully responsive layout that looks great on devices of all sizes (desktop, tablet, and mobile).
- **Modern UI**: Clean, dark-themed, glassmorphism UI with vibrant gradient accents.
- **Sections Included**:
  - **Hero**: Introduction and professional summary.
  - **About**: Personal background, education, and passions.
  - **Skills**: Display of technical and analytical skills.
  - **Projects**: Showcase of data science and software projects with links to code and live demos.
  - **Certificates**: Highlights of professional certifications.
  - **Contact**: Contact information and links to social profiles (GitHub, LinkedIn, Kaggle).
- **Custom Branding**: Fully customized SVG icons and PWA manifest for desktop/mobile shortcuts.

## Technologies Used

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS (CSS Variables, Flexbox/Grid, Animations)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Linting**: ESLint

## Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sithumvishwajith/personal-portfolio.git
   ```
2. Navigate into the project directory:
   ```bash
   cd personal-portfolio
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running Locally

To start the development server, run:
```bash
npm run dev
```
The application will be available at `http://localhost:5173/`.

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the development server with Hot Module Replacement (HMR).
- `npm run build`: Builds the app for production to the `dist` folder.
- `npm run lint`: Runs ESLint to check for code quality and formatting issues.
- `npm run preview`: Bootstraps a local server to preview the production build.

## Project Structure

```
src/
├── assets/          # Static assets (images, etc.)
├── components/      # React components (Navbar, Hero, About, etc.)
├── App.css          # Global application styles
├── App.jsx          # Root application component
├── index.css        # Entry CSS file
└── main.jsx         # Application entry point
```

## License

&copy; Sithum Bimsara. All rights reserved.
