# 🫀 Bioreco — Human Organ Perception & Sensor Fusion Suite

[![GitHub Pages Deployment](https://img.shields.io/badge/GitHub%20Pages-Live-00f3ff?style=for-the-badge&logo=github)](https://fatimaelkhadiripro-bit.github.io/bioreco/)
[![License: MIT](https://img.shields.io/badge/License-MIT-10b981.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Vite + React](https://img.shields.io/badge/Vite-React_18-61dafb?style=for-the-badge&logo=react)](https://react.dev)

**Bioreco** is an open-source project designed to create models and applications that make **human organ perception easier, intuitive, and accessible**. It provides state-of-the-art **sensor fusion services** that seamlessly integrate **2D Echography (ultrasound) imaging with 3D organ models**.

---

## ✨ Key Features & Services

- **🫀 Organ Perception Models**: Deep learning models for automated organ structural mapping, boundary recognition, and volumetric estimation (Heart, Brain, Kidneys, Lungs).
- **📡 Echography & 3D Sensor Fusion**: Real-time spatial registration cross-referencing 2D ultrasound probe sweeps with multi-planar 3D anatomical meshes.
- **🌐 Open API & Web Services**: Modular browser tools allowing researchers and medical developers to embed organ perception capabilities directly into web applications.
- **🚀 Single-Branch GitHub Pages Deployment**: Fully automated deployment from `main` using GitHub Actions (`.github/workflows/deploy.yml`).

---

## 🚀 Quickstart & Single-Branch Push (`main` only)

```bash
# 1. Clone repository
git clone https://github.com/fatimaelkhadiripro-bit/bioreco.git
cd bioreco

# 2. Install dependencies & run local dev
npm install
npm run dev

# 3. Deploy to GitHub Pages (Push to main only)
git add .
git commit -m "feat: update bioreco site"
git push origin main
```

Every push to `main` automatically triggers GitHub Actions to build and deploy your site to GitHub Pages!

---

## 📄 License

Distributed under the MIT License.
