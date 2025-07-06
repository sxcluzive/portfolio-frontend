# Shubham Singh - Portfolio Frontend

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features both Normal and Developer modes with interactive API playground.

## 🚀 Features

- **Dual Mode Design**: Elegant Normal mode and terminal-style Developer mode
- **Interactive API Playground**: Live API testing interface with real-time activity monitoring
- **Responsive Design**: Optimized for all device sizes
- **Modern UI**: Glassy effects, smooth animations, and premium styling
- **SEO Optimized**: Meta tags, sitemap, and proper structure

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS, CSS Variables
- **Icons**: Lucide React, React Icons
- **Animations**: Framer Motion
- **Code Highlighting**: Prism.js

## 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd portfolio-frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🏗️ Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**:
   - Push your code to GitHub/GitLab
   - Connect your repository to Vercel
   - Vercel will automatically detect the Vite configuration

2. **Environment Variables** (if needed):
   - Add any environment variables in Vercel dashboard
   - No additional configuration required

3. **Custom Domain**:
   - Add your custom domain in Vercel dashboard
   - Update `sitemap.xml` and `robots.txt` with your domain

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy the `dist` folder to your hosting provider
```

## 📁 Project Structure

```
portfolio-frontend/
├── src/
│   ├── components/          # React components
│   │   ├── HeroSection.tsx
│   │   ├── DeveloperHeroSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── MetricsSection.tsx
│   │   ├── ApiPlayground.tsx
│   │   └── Footer.tsx
│   ├── contexts/           # React contexts
│   ├── hooks/              # Custom hooks
│   ├── data/               # Static data
│   └── main.tsx
├── public/                 # Static assets
├── vercel.json            # Vercel configuration
└── vite.config.ts         # Vite configuration
```

## 🎨 Design Modes

### Normal Mode
- Premium glassy design
- Subtle animations and effects
- Professional color scheme
- Optimized for business presentation

### Developer Mode
- Terminal-inspired interface
- Matrix-style green accents
- Interactive API playground
- Real-time activity monitoring

## 🔧 Configuration

### Vercel Settings
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### SEO Optimization
- Meta tags for social sharing
- Sitemap generation
- Robots.txt configuration
- Open Graph tags

## 📝 License

This project is private and proprietary.

## 👨‍💻 Author

**Shubham Singh**
- Backend Engineer at Sierra Wireless (Semtech)
- Specialized in Python, FastAPI, Django
- Experience with distributed systems and cloud services

---

Built with ❤️ using React and TypeScript
