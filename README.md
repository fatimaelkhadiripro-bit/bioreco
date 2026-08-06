# 🫀 Bioreco — Human Organ Perception & Sensor Fusion Suite

[![GitHub Pages Deployment](https://img.shields.io/badge/GitHub%20Pages-Deploying-00f3ff?style=for-the-badge&logo=github)](https://github.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-10b981.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Vite + React](https://img.shields.io/badge/Vite-React_18-61dafb?style=for-the-badge&logo=react)](https://react.dev)

**Bioreco** is an open-source project designed to create models and applications that make **human organ perception easier, intuitive, and accessible**. It provides state-of-the-art **sensor fusion services** that seamlessly integrate **2D Echography (ultrasound) imaging with 3D organ models**.

---

## ✨ Key Features & Services

- **🫀 Organ Perception Models**: Deep learning models for automated organ structural mapping, boundary recognition, and volumetric estimation (Heart, Brain, Kidneys, Lungs).
- **📡 Echography & 3D Sensor Fusion**: Real-time spatial registration cross-referencing 2D ultrasound probe sweeps with multi-planar 3D anatomical meshes.
- **🌐 Open API & Web Services**: Modular browser tools allowing researchers and medical developers to embed organ perception capabilities directly into web applications.
- **🚀 Ready for GitHub Pages**: Includes pre-configured automated CI/CD deployment (`.github/workflows/deploy.yml`) for hosting on GitHub Pages out-of-the-box.

---

## 🛠️ Tech Stack

- **Frontend Core**: React 18 + Vite
- **Styling**: Modern Cyber-Medical CSS Design System (Glassmorphic cards, Glowing HSL tokens, Responsive layout)
- **Icons**: Lucide React
- **Deployment**: GitHub Pages (via GitHub Actions & `gh-pages`)

---

## 🚀 Quickstart & Installation

Clone the repository and start the local development server:

```bash
# 1. Clone your repository
git clone https://github.com/YOUR_USERNAME/bioreco.git

# 2. Navigate to project directory
cd bioreco

# 3. Install dependencies
npm install

# 4. Launch local dev server
npm run dev
```

Open `http://localhost:5173` in your browser to view the site.

---

## 📦 Deployment to GitHub Pages

### Option A: Automated GitHub Actions (Recommended)
Every `git push` to the `main` branch automatically triggers `.github/workflows/deploy.yml` to build and deploy your site to GitHub Pages.

### Option B: Manual Command Line Deploy
```bash
npm run deploy
```

---

## 🤝 Contributing

Contributions, feature ideas, and medical sensor fusion improvements are welcome!  
Feel free to open an Issue or submit a Pull Request.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for details.
