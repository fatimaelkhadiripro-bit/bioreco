import React, { useState } from 'react';
import { 
  Activity, 
  Layers, 
  Cpu, 
  GitBranch, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  Terminal, 
  Heart, 
  Brain, 
  Sliders, 
  ArrowRight,
  ShieldCheck,
  Globe,
  Boxes
} from 'lucide-react';

export default function App() {
  const [selectedOrgan, setSelectedOrgan] = useState('heart');
  const [sliceDepth, setSliceDepth] = useState(54);
  const [activeTab, setActiveTab] = useState('overview');

  const organData = {
    heart: {
      name: 'Cardiac (Heart)',
      frequency: '2.5 MHz (Phased Array)',
      resolution: '0.4 mm volumetric slice',
      confidence: '98.7%',
      description: 'Dynamic endocardial boundary tracking with 3D ventricular slice registration.'
    },
    brain: {
      name: 'Cerebral (Brain)',
      frequency: '3.5 MHz (Transcranial)',
      resolution: '0.6 mm spatial mesh',
      confidence: '97.2%',
      description: 'Sub-cortical structural alignment with multi-planar echography projection.'
    },
    kidneys: {
      name: 'Renal (Kidney)',
      frequency: '5.0 MHz (Convex Probe)',
      resolution: '0.3 mm parenchymal slice',
      confidence: '99.1%',
      description: 'Cortico-medullary junction segmentation fused with 3D renal anatomy.'
    },
    lungs: {
      name: 'Pulmonary (Lungs)',
      frequency: '3.0 MHz (Linear Array)',
      resolution: '0.5 mm pleural line',
      confidence: '96.8%',
      description: 'Pleural surface tracking and volumetric acoustic line rendering.'
    }
  };

  const currentOrgan = organData[selectedOrgan];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header style={{ borderBottom: '1px solid var(--border-color)', backdropFilter: 'blur(12px)', sticky: 'top', position: 'sticky', top: 0, zIndex: 50, background: 'rgba(8, 12, 20, 0.85)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg, #00f3ff 0%, #0284c7 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#040711', boxShadow: '0 0 16px rgba(0, 243, 255, 0.4)' }}>
              <Activity size={24} />
            </div>
            <div>
              <span style={{ fontSize: '1.4rem', fontWeight: 800, fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', color: '#fff' }}>
                bio<span style={{ color: 'var(--cyan-accent)' }}>reco</span>
              </span>
              <span style={{ fontSize: '0.7rem', display: 'block', color: 'var(--text-dim)', marginTop: '-4px', fontWeight: 500 }}>
                ORGAN PERCEPTION & FUSION
              </span>
            </div>
          </div>

          <nav style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <a href="#vision" style={{ color: 'var(--text-muted)', fontSize: '0.925rem', fontWeight: 500 }}>Vision</a>
            <a href="#services" style={{ color: 'var(--text-muted)', fontSize: '0.925rem', fontWeight: 500 }}>Services</a>
            <a href="#fusion" style={{ color: 'var(--text-muted)', fontSize: '0.925rem', fontWeight: 500 }}>Sensor Fusion</a>
            <a href="#github-deploy" style={{ color: 'var(--text-muted)', fontSize: '0.925rem', fontWeight: 500 }}>GitHub Site</a>
          </nav>

          <div style={{ display: 'flex', gap: '12px' }}>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '8px 16px', fontSize: '0.875rem' }}>
              <Github size={16} /> GitHub Repo
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ flex: 1 }}>
        {/* Hero Section */}
        <section id="vision" style={{ padding: '80px 0 60px', textAlign: 'center', position: 'relative' }}>
          <div className="container">
            <div className="badge animate-pulse-glow" style={{ marginBottom: '24px' }}>
              <ShieldCheck size={14} /> Open-Source Biomedical Perception Platform
            </div>

            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '20px', maxWidth: '900px', margin: '0 auto 20px' }}>
              Making Human Organ Perception <br />
              <span style={{ background: 'linear-gradient(135deg, #00f3ff 0%, #10b981 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Easier, Precise & Connected
              </span>
            </h1>

            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '720px', margin: '0 auto 36px', fontWeight: 400 }}>
              <strong>Bioreco</strong> delivers intelligent perception models and sensor fusion services, seamlessly overlaying 2D Echography (ultrasound) imaging with 3D organ models for intuitive anatomical analysis.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#fusion" className="btn-primary">
                Explore Sensor Fusion <ArrowRight size={18} />
              </a>
              <a href="#github-deploy" className="btn-secondary">
                <GitBranch size={18} /> GitHub Pages Setup
              </a>
            </div>

            {/* Feature Highlights Strip */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginTop: '64px' }}>
              <div className="glass-panel" style={{ padding: '24px', textAlign: 'left' }}>
                <div style={{ color: 'var(--cyan-accent)', marginBottom: '12px' }}><Cpu size={28} /></div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>AI Organ Models</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Deep learning algorithms trained for automated feature perception and spatial boundary recognition.</p>
              </div>

              <div className="glass-panel" style={{ padding: '24px', textAlign: 'left' }}>
                <div style={{ color: 'var(--emerald-accent)', marginBottom: '12px' }}><Layers size={28} /></div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>Echography Fusion</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Real-time registration overlaying 2D B-mode ultrasound slices onto 3D anatomical meshes.</p>
              </div>

              <div className="glass-panel" style={{ padding: '24px', textAlign: 'left' }}>
                <div style={{ color: 'var(--purple-accent)', marginBottom: '12px' }}><Globe size={28} /></div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>Web & API Services</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Lightweight modular tools ready to embed into clinical web dashboards and mobile applications.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services & Core Focus */}
        <section id="services" style={{ padding: '60px 0', borderTop: '1px solid var(--border-color)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <span className="badge" style={{ marginBottom: '12px' }}>CORE SERVICES</span>
              <h2 style={{ fontSize: '2.25rem', fontWeight: 700 }}>Bioreco Perception Architecture</h2>
              <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>Unified services designed to simplify complex organ diagnostics</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
              <div className="glass-panel" style={{ padding: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 243, 255, 0.1)', color: 'var(--cyan-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Boxes size={26} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem' }}>3D Organ Modeling</h3>
                    <span style={{ fontSize: '0.8rem', color: 'var(--cyan-accent)' }}>VOLUMETRIC RECONSTRUCTION</span>
                  </div>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '20px' }}>
                  High-fidelity 3D organ mesh generation and parametric scaling for patient-specific anatomical perception.
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.875rem', color: 'var(--text-main)' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} color="var(--cyan-accent)" /> Cardiac, Renal, Pulmonary & Cerebral organ support</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} color="var(--cyan-accent)" /> Multi-planar slicing plane alignment</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} color="var(--cyan-accent)" /> STL & DICOM format compatibility</li>
                </ul>
              </div>

              <div className="glass-panel" style={{ padding: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--emerald-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Activity size={26} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem' }}>Echography Fusion</h3>
                    <span style={{ fontSize: '0.8rem', color: 'var(--emerald-accent)' }}>SENSOR REGISTRATION</span>
                  </div>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '20px' }}>
                  Fuses real-time 2D ultrasound transducer sweeps directly into spatial alignment with 3D organ geometry.
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.875rem', color: 'var(--text-main)' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} color="var(--emerald-accent)" /> Sub-millimeter acoustic registration</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} color="var(--emerald-accent)" /> Live signal density & depth analysis</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} color="var(--emerald-accent)" /> Synchronized 2D/3D dual view viewport</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Sensor Fusion Preview */}
        <section id="fusion" style={{ padding: '60px 0', background: 'rgba(4, 7, 17, 0.6)', borderTop: '1px solid var(--border-color)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <span className="badge" style={{ marginBottom: '12px' }}>LIVE SIMULATION PREVIEW</span>
              <h2 style={{ fontSize: '2.25rem', fontWeight: 700 }}>Echography + 3D Organ Sensor Fusion</h2>
              <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>Test how Bioreco maps 2D ultrasound depth slices to 3D organ coordinates</p>
            </div>

            <div className="glass-panel" style={{ padding: '32px', maxWidth: '920px', margin: '0 auto' }}>
              {/* Organ Selector Buttons */}
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '32px', flexWrap: 'wrap' }}>
                {Object.keys(organData).map((key) => (
                  <button
                    key={key}
                    onClick={() => setSelectedOrgan(key)}
                    style={{
                      padding: '10px 20px',
                      borderRadius: '8px',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 600,
                      border: selectedOrgan === key ? '1px solid var(--cyan-accent)' : '1px solid rgba(255, 255, 255, 0.1)',
                      background: selectedOrgan === key ? 'rgba(0, 243, 255, 0.15)' : 'rgba(15, 23, 42, 0.6)',
                      color: selectedOrgan === key ? 'var(--cyan-accent)' : 'var(--text-muted)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      textTransform: 'capitalize'
                    }}
                  >
                    {key}
                  </button>
                ))}
              </div>

              {/* Interactive Visualizer Block */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', alignItems: 'center' }}>
                {/* Visual Representation */}
                <div style={{ background: '#040711', border: '1px solid rgba(0, 243, 255, 0.2)', borderRadius: '12px', padding: '24px', position: 'relative', overflow: 'hidden', minHeight: '260px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-code)', color: 'var(--cyan-accent)' }}>
                      [LIVE SENSOR FUSION]
                    </span>
                    <span className="badge" style={{ padding: '2px 8px', fontSize: '0.7rem' }}>
                      DEPTH: {sliceDepth} mm
                    </span>
                  </div>

                  {/* Simulated Slice & Organ Graphic */}
                  <div style={{ margin: '20px 0', textCenter: 'center', position: 'relative', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ position: 'absolute', width: '100px', height: '100px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0, 243, 255, 0.2) 0%, transparent 70%)', filter: 'blur(10px)' }}></div>
                    
                    {/* Simulated Slice Scanline */}
                    <div style={{ position: 'absolute', top: `${(sliceDepth / 150) * 100}%`, left: '10%', right: '10%', height: '2px', background: 'var(--cyan-accent)', boxShadow: '0 0 10px var(--cyan-accent)', transition: 'top 0.1s ease' }}></div>

                    <div style={{ textAlign: 'center', zIndex: 2 }}>
                      <Activity size={48} color="var(--cyan-accent)" style={{ margin: '0 auto', filter: 'drop-shadow(0 0 8px var(--cyan-glow))' }} />
                      <div style={{ fontSize: '0.9rem', fontWeight: 600, marginTop: '8px', color: '#fff' }}>
                        {currentOrgan.name} Slice
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-code)' }}>
                    <span>CONFIDENCE: <strong style={{ color: 'var(--emerald-accent)' }}>{currentOrgan.confidence}</strong></span>
                    <span>RES: {currentOrgan.resolution}</span>
                  </div>
                </div>

                {/* Controls & Metrics */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '6px' }}>{currentOrgan.name} Perception</h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{currentOrgan.description}</p>
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '8px', color: 'var(--text-muted)' }}>
                      <span>Echography Slice Depth</span>
                      <span style={{ color: 'var(--cyan-accent)', fontFamily: 'var(--font-code)' }}>{sliceDepth} mm</span>
                    </div>
                    <input 
                      type="range" 
                      min="10" 
                      max="150" 
                      value={sliceDepth} 
                      onChange={(e) => setSliceDepth(Number(e.target.value))}
                      style={{ width: '100%', accentColor: 'var(--cyan-accent)', cursor: 'pointer' }}
                    />
                  </div>

                  <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '16px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.05)', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Probe Mode:</span>
                      <span style={{ color: '#fff', fontFamily: 'var(--font-code)' }}>{currentOrgan.frequency}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Spatial Registration:</span>
                      <span style={{ color: 'var(--emerald-accent)', fontFamily: 'var(--font-code)' }}>Synchronized (0.2 ms)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GitHub Pages & Repository Guide */}
        <section id="github-deploy" style={{ padding: '60px 0', borderTop: '1px solid var(--border-color)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <span className="badge" style={{ marginBottom: '12px' }}>GITHUB SITE & DEPLOYMENT</span>
              <h2 style={{ fontSize: '2.25rem', fontWeight: 700 }}>Host Bioreco on GitHub Pages</h2>
              <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>Your project website is fully ready for GitHub integration</p>
            </div>

            <div className="glass-panel" style={{ padding: '32px', maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <Terminal color="var(--cyan-accent)" size={24} />
                <h3 style={{ fontSize: '1.2rem' }}>Quickstart GitHub Setup Commands</h3>
              </div>

              <div className="code-block" style={{ marginBottom: '24px' }}>
                <div style={{ color: '#64748b', marginBottom: '8px' }}># Push to main branch (GitHub Actions auto-deploys to GitHub Pages)</div>
                <div>git add .</div>
                <div>git commit -m "feat: update bioreco site"</div>
                <div>git push origin main</div>
              </div>

              <div style={{ background: 'rgba(0, 243, 255, 0.05)', border: '1px solid rgba(0, 243, 255, 0.2)', padding: '16px', borderRadius: '10px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <CheckCircle2 color="var(--cyan-accent)" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                <div style={{ fontSize: '0.875rem' }}>
                  <strong style={{ color: '#fff', display: 'block', marginBottom: '2px' }}>Automated CI/CD Included</strong>
                  The repository includes `.github/workflows/deploy.yml` which automatically builds and publishes your website to GitHub Pages whenever you push changes to `main`.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--border-color)', padding: '40px 0', background: '#040711', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span style={{ color: '#fff', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>Bioreco Project</span> &copy; {new Date().getFullYear()}. Open-source organ perception & sensor fusion platform.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }}>GitHub Repository</a>
            <a href="#vision" style={{ color: 'var(--text-muted)' }}>Back to Top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
