import { useState, useEffect } from 'react';
import './App.css';

const SITE_TITLE = 'Abdul Rafay';

const PROJECTS = [
  {
    name: 'secure-ci-cd-pipeline',
    desc: 'Production-grade DevSecOps pipeline with 6 GitHub Actions workflows, auto-staging, semantic tag-gated deployments, Trivy CVE scanning, CodeQL SAST, and Slack failure alerts.',
    tech: ['GitHub Actions', 'Docker', 'Trivy', 'CodeQL', 'GHCR'],
    url: 'https://github.com/xraffay-dev/secure-ci-cd-pipeline',
  },
  {
    name: 'cloud-native app',
    desc: 'Cloud-native multi-AZ AWS infrastructure provisioned entirely via Terraform — VPC isolation, ALB, Auto Scaling EC2, DocumentDB, CloudFront CDN. 75–80% latency reduction.',
    tech: ['Terraform', 'AWS', 'Docker', 'GitHub Actions', 'CI/CD'],
    url: 'https://github.com/xraffay-dev/MERN-AWS',
  },
  {
    name: 'Grocy',
    desc: 'Grocery price comparison platform scraping 5 stores with Selenium, preprocessing 20K+ products. MinHash LSH + FAISS pipeline reducing 200M comparisons to 64K (99.97% reduction).',
    tech: ['MERN', 'Python', 'FAISS', 'MinHash LSH'],
    url: 'https://github.com/xraffay-dev/Grocy',
    live: 'https://grocy.com',
  },
  {
    name: 'NU-Cord',
    desc: 'Real-time collaboration platform for messaging and live communication using WebSockets (Socket.IO) with OAuth 2.0 and JWT-based authentication.',
    tech: ['Node.js', 'Socket.IO', 'OAuth', 'MongoDB'],
    url: 'https://github.com/xraffay-dev/NU-Cord',
  },
];

const EXPERIENCE = [
  {
    role: 'Software Engineer',
    company: 'Aglow International',
    period: 'Feb 2025 — Mar 2026',
    location: 'Lahore, Pakistan',
    bullets: [
      'Designed & managed AWS deployment infrastructure for AglowTrack, a shipment tracking platform serving logistics clients globally — EC2 provisioning, environment config & application deployments.',
      'Engineered and maintained core RESTful APIs using Node.js, Express, and MongoDB serving logistics clients worldwide.',
      'Architected JWT-based authentication & session management for secure, production-grade API access.',
      'Integrated 6+ third-party logistics APIs with automated email notification pipelines, eliminating manual workflow overhead.',
    ],
  },
];

const SKILLS = [
  { category: 'cloud', items: ['AWS EC2', 'S3', 'CloudFront', 'ALB', 'ASG', 'VPC', 'RDS', 'ECR'] },
  { category: 'containers', items: ['Docker', 'Kubernetes', 'Pods', 'Deployments', 'ConfigMaps'] },
  { category: 'iac & devops', items: ['Terraform', 'GitHub Actions', 'CI/CD', 'Linux', 'Bash'] },
  { category: 'devsecops', items: ['Trivy', 'CodeQL', 'SAST', 'CVE Scanning', 'Secrets Mgmt'] },
  { category: 'backend', items: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'OAuth'] },
  { category: 'databases', items: ['MongoDB', 'MySQL', 'MSSQL Server'] },
  { category: 'languages', items: ['JavaScript', 'Python', 'C/C++', 'Bash', 'SQL'] },
];

const CERTIFICATES = [
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    date: '2026',
    badge: '/aws-badge.png',
    // logo: 'logo.png',
    url: 'https://www.credly.com/badges/675465fc-7ac1-4fd4-85af-295c6c920bcc',
  },
];

const ROLES = [
  'Software Engineer',
  'AWS Solutions Architect - Associate',
  'DevOps Engineer',
  'Cloud Engineer',
  'Backend Developer',
];

const SOCIALS = [
  { name: 'github', url: 'https://github.com/xraffay-dev', handle: 'xraffay-dev' },
  { name: 'linkedin', url: 'https://linkedin.com/in/xraffay-dev', handle: 'in/xraffay-dev' },
  { name: 'website', url: 'https://xraffay.dev', handle: 'xraffay.dev' },
  { name: 'email', url: 'mailto:xraffay.dev@gmail.com', handle: 'xraffay.dev@gmail.com' },
];



function Prompt({ children }) {
  return (
    <div className="prompt-line">
      <span className="prompt">
        <span className="p-user">xraffay</span>
        <span className="p-sep">@</span>
        <span className="p-host">portfolio</span>
        <span className="p-sep"> ~ % </span>
      </span>
      <span className="p-cmd">{children}</span>
    </div>
  );
}

function Output({ children }) {
  return <div className="output">{children}</div>;
}

function RotatingText({ texts, typeSpeed = 60, deleteSpeed = 35, pauseMs = 1800 }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];

    if (!isDeleting && displayed === current) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseMs);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayed === '') {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const speed = isDeleting ? deleteSpeed : typeSpeed;
    const timeout = setTimeout(() => {
      setDisplayed(
        isDeleting
          ? current.substring(0, displayed.length - 1)
          : current.substring(0, displayed.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, index, texts, typeSpeed, deleteSpeed, pauseMs]);

  return (
    <span className="typed">
      {displayed}
      <span className="cursor blink">▎</span>
    </span>
  );
}



const TAB_IDS = ['about', 'skills', 'projects', 'experience', 'certificates', 'contact'];

function App() {
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    const body = document.querySelector('.terminal-body');
    if (!body) return;

    const onScroll = () => {
      let current = '';
      for (const id of TAB_IDS) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const bodyRect = body.getBoundingClientRect();
          if (rect.top - bodyRect.top <= 80) current = id;
        }
      }
      setActiveTab(current);
    };

    body.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => body.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="terminal-window">
      {/* Title Bar */}
      <div className="titlebar">
        <div className="traffic-lights">
          <span className="light light-red" />
          <span className="light light-yellow" />
          <span className="light light-green" />
        </div>
        <div className="titlebar-title">xraffay@portfolio</div>
        <div className="titlebar-spacer" />
      </div>

      {/* Navigation */}
      <div className="tabbar">
        {TAB_IDS.map(id => (
          <button
            key={id}
            className={`tab ${activeTab === id ? 'tab-active' : ''}`}
            onClick={() => scrollTo(id)}
          >
            {id}
            {activeTab === id && <span className="tab-indicator" />}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="terminal-body">


        <section className="block hero-block">
          <Prompt>whoami</Prompt>
          <Output>
            <h1 className="hero-name">Abdul Rafay</h1>
            <p className="hero-role">
              <RotatingText texts={ROLES} typeSpeed={60} deleteSpeed={35} pauseMs={2000} />
            </p>
            <div className="hero-meta">
              <span className="badge badge-green">
                <span className="badge-dot" />
                open to work
              </span>
              <span className="meta-text">Lahore, Pakistan</span>
              <span className="meta-text">FAST-NUCES '26</span>
              <span className="badge badge-aws">
                {/* <img src="/logo.png" alt="AWS" className="aws-inline-logo" /> */}
                AWS Certified SAA
              </span>
            </div>
          </Output>
        </section>

        <div className="divider" />


        <section className="block" id="about">
          <Prompt>cat about.md</Prompt>
          <Output>
            <p className="body-text">
              AWS Certified Solutions Architect with hands-on experience building production
              backend systems and cloud infrastructure for a global logistics platform. I
              specialize in designing scalable, secure architectures using Terraform, AWS,
              Docker, and GitHub Actions.
            </p>
            <p className="body-text">
              Currently completing my Bachelor's in Computer Science at FAST-NUCES (graduating
              June 2026). I'm passionate about DevOps automation, infrastructure-as-code, and
              shipping reliable software that works at scale. When I'm not writing Terraform,
              you'll find me building open-source tools or exploring new cloud services.
            </p>
          </Output>
        </section>

        <div className="divider" />


        <section className="block" id="skills">
          <Prompt>ls skills/</Prompt>
          <Output>
            <div className="skills-grid">
              {SKILLS.map(g => (
                <div key={g.category} className="skill-group">
                  <span className="skill-dir">
                    <span className="dir-icon">📂</span> {g.category}/
                  </span>
                  <div className="skill-items">
                    {g.items.map(s => (
                      <span key={s} className="skill-tag">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Output>
        </section>

        <div className="divider" />


        <section className="block" id="projects">
          <Prompt>ls -la projects/</Prompt>
          <Output>
            <div className="projects-grid">
              {PROJECTS.map(p => (
                <a key={p.name} href={p.url} className="project-card" target="_blank" rel="noopener noreferrer">
                  <div className="project-top">
                    <span className="project-name">{p.name}</span>
                    {p.live && <span className="project-live">● live</span>}
                  </div>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-tech">
                    {p.tech.map(t => (
                      <span key={t} className="pill">{t}</span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </Output>
        </section>

        <div className="divider" />


        <section className="block" id="experience">
          <Prompt>cat career.log</Prompt>
          <Output>
            <div className="exp-list">
              {EXPERIENCE.map((exp, i) => (
                <div key={i} className="exp-item">
                  <div className="exp-header">
                    <div>
                      <h3 className="exp-role">{exp.role}</h3>
                      <span className="exp-company">{exp.company}</span>
                      {exp.location && <span className="exp-location">{exp.location}</span>}
                    </div>
                    <span className="exp-period">{exp.period}</span>
                  </div>
                  <ul className="exp-bullets">
                    {exp.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Output>
        </section>

        <div className="divider" />


        <section className="block" id="certificates">
          <Prompt>cat certificates.json</Prompt>
          <Output>
            <div className="cert-list">
              {CERTIFICATES.map((cert, i) => (
                <a key={i} href={cert.url} className="cert-card" target="_blank" rel="noopener noreferrer">
                  <div className="cert-badge-img">
                    <img src={cert.badge} alt={cert.name} className="cert-badge-icon" />
                  </div>
                  <div className="cert-info">
                    <span className="cert-name">{cert.name}</span>
                    {/* <div className="cert-issuer-row">
                      <img src={cert.logo} alt={cert.issuer} className="cert-issuer-logo" />
                      <span className="cert-issuer">{cert.issuer}</span>
                    </div> */}
                    <div className="cert-issuer-row">
                      <span className="cert-issuer">{cert.issuer}</span>
                    </div>
                    <div className="cert-meta">
                      <span className="cert-date">Issued {cert.date}</span>
                    </div>
                  </div>
                  <span className="cert-arrow">→</span>
                </a>
              ))}
            </div>
          </Output>
        </section>

        <div className="divider" />


        <section className="block" id="contact">
          <Prompt>cat contact.json</Prompt>
          <Output>
            <p className="body-text" style={{ marginBottom: 20 }}>
              Looking for a software engineer or cloud/DevOps specialist? Let's connect — 
              I'm always open to interesting projects and opportunities.
            </p>
            <div className="social-list">
              {SOCIALS.map(s => (
                <a key={s.name} href={s.url} className="social-row" target="_blank" rel="noopener noreferrer">
                  <span className="social-name">{s.name}</span>
                  <span className="social-handle">{s.handle}</span>
                  <span className="social-arrow">→</span>
                </a>
              ))}
            </div>
          </Output>
        </section>

        <div className="divider" />

        <section className="block footer-block">
          <Prompt>exit</Prompt>
          <Output>
            <p className="footer-text">
              © {new Date().getFullYear()} Abdul Rafay
            </p>
            <p className="footer-exit">
              <span className="text-dim">Process exited with code </span>
              <span className="text-green">0</span>
            </p>
          </Output>
        </section>

      </div>
    </div>
  );
}

export default App;
