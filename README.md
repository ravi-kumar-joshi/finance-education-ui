# Finance Education Platform

A modern, interactive financial education platform built with React, Vite, and Tailwind CSS.

## Features

- **Interactive Learning**: Engage with financial concepts through interactive tools and calculators
- **Personalized Paths**: Choose from beginner, intermediate, or advanced learning tracks
- **Financial Tools**: Access budget calculators, investment simulators, and loan calculators
- **Responsive Design**: Beautiful, mobile-friendly interface built with Tailwind CSS
- **Modern Stack**: Built with React 18, Vite, and React Router

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ravi-kumar-joshi/finance-education-ui.git
cd finance-education-ui
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
finance-education-ui/
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Tools.jsx
│   │   ├── LearningPaths.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Pricing.jsx
│   │   └── Footer.jsx
│   ├── pages/           # Page components
│   │   └── Home.jsx
│   ├── assets/          # Static assets
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles with Tailwind
├── public/              # Public static files
├── index.html           # HTML template
├── package.json         # Project dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── postcss.config.js    # PostCSS configuration
```

## Technologies Used

- **React 18** - Modern UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **PostCSS** - CSS processing
- **Autoprefixer** - Automatic vendor prefixing

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please open an issue on GitHub.
