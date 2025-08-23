# Shifin Portfolio — React 19

A modern, creative portfolio built with **React 19**, designed and developed by **Shifin** — a UI/UX designer & vibe coder who loves crafting landing pages, solving problems with strategy, and creating innovative solutions.

> **Tagline:** *Designing experiences, coding vibes — solving problems with creativity and strategy.*

---

## 🎨 Brand & Style

- **Primary Color:** Black  
- **Accent:** Gradient Red  
- **Design Approach:** Minimal, bold, and immersive  
- **Focus:** Landing pages, creative problem-solving, and strategic design

---

## 🌐 Socials

- [Instagram](https://instagram.com/)  
- [GitHub](https://github.com/)  
- [LinkedIn](https://linkedin.com/)  
- [Behance](https://behance.net/)

---

## 🚀 Features

- **React 19** — Latest React version with new concurrent features and support for modern libraries
- **Vite** — Lightning-fast build tool and development server
- **Redux Toolkit** — State management with simplified Redux setup
- **TailwindCSS** — Utility-first CSS framework with extensive customization
- **React Router v6** — Declarative routing for React applications
- **Data Visualization** — Integrated D3.js and Recharts for powerful data visualization
- **Form Management** — React Hook Form for efficient form handling
- **Animation** — Framer Motion for smooth UI animations
- **Testing** — Jest and React Testing Library setup

---

## 📋 Prerequisites

- Node.js (v18.x or higher recommended for React 19)
- npm or yarn

---

## 🛠️ Installation

1. Install dependencies:
   ```bash
   npm install
   # or
   yarn install


- Start the development server:
npm start
# or
yarn start



📁 Project Structure
react_app/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components
│   ├── styles/         # Global styles and Tailwind configuration
│   ├── App.jsx         # Main application component
│   ├── Routes.jsx      # Application routes
│   └── index.jsx       # Application entry point
├── .env                # Environment variables
├── index.html          # HTML template
├── package.json        # Project dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
└── vite.config.js      # Vite configuration



🧩 Adding Routes
To add new routes to the application, update the Routes.jsx file:
import { useRoutes } from "react-router-dom";
import HomePage from "pages/HomePage";
import AboutPage from "pages/AboutPage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/about", element: <AboutPage /> },
    // Add more routes as needed
  ]);

  return element;
};



🎨 Styling
This project uses Tailwind CSS for styling. The configuration includes:
- Forms plugin for form styling
- Typography plugin for text styling
- Aspect ratio plugin for responsive elements
- Container queries for component-specific responsive design
- Fluid typography for responsive text
- Animation utilities

📱 Responsive Design
The app is built with responsive design using Tailwind CSS breakpoints.

📦 Deployment
Build the application for production:
npm run build



🙏 Acknowledgments
- Designed & developed by Shifin — UI/UX Designer & Vibe Coder
- Built with ❤️ using React 19, Vite, and Tailwind CSS
- Inspired by creativity, strategy, and problem-solving
