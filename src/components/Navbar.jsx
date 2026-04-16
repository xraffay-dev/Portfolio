import { useState, useEffect } from 'react';
import './Navbar.css';

const navItems = [
  { id: 'about', label: 'about', icon: '~' },
  { id: 'skills', label: 'skills', icon: '⚡' },
  { id: 'projects', label: 'projects', icon: '◆' },
  { id: 'experience', label: 'experience', icon: '▹' },
  { id: 'contact', label: 'contact', icon: '✉' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [time, setTime] = useState('');
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    
    const uptimeInterval = setInterval(() => {
      setUptime(prev => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(uptimeInterval);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        id: item.id,
        el: document.getElementById(item.id),
      }));

      let current = 'about';
      for (const section of sections) {
        if (section.el) {
          const rect = section.el.getBoundingClientRect();
          if (rect.top <= 200) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const formatUptime = (seconds) => {
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  return (
    <nav className="navbar" id="main-nav">
      <div className="navbar-inner">
        <div className="navbar-left">
          <span className="navbar-prompt">
            <span className="prompt-user">alex</span>
            <span className="prompt-at">@</span>
            <span className="prompt-host">portfolio</span>
            <span className="prompt-colon">:</span>
            <span className="prompt-path">~$</span>
          </span>
        </div>

        <div className="navbar-center">
          {navItems.map(item => (
            <button
              key={item.id}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => scrollTo(item.id)}
              id={`nav-${item.id}`}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
              {activeSection === item.id && <span className="nav-indicator" />}
            </button>
          ))}
        </div>

        <div className="navbar-right">
          <span className="navbar-status">
            <span className="status-dot" />
            <span className="status-time">{time}</span>
          </span>
          <span className="navbar-uptime">
            up {formatUptime(uptime)}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
