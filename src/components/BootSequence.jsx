import { useState, useEffect } from 'react';
import './BootSequence.css';

const bootLines = [
  { text: 'BIOS v3.7.2 — POST Check', delay: 0, type: 'system' },
  { text: 'Memory Test: 32768 MB OK', delay: 200, type: 'success' },
  { text: 'Detecting hardware...', delay: 400, type: 'system' },
  { text: '├── CPU: Neural Core i9-14900X @ 5.8GHz', delay: 600, type: 'info' },
  { text: '├── GPU: RTX 5090 (Creative Engine)', delay: 750, type: 'info' },
  { text: '└── Network: Quantum-Link Adapter [CONNECTED]', delay: 900, type: 'success' },
  { text: '', delay: 1050, type: 'blank' },
  { text: 'Loading kernel modules...', delay: 1100, type: 'system' },
  { text: '[  OK  ] Mounted /dev/creativity', delay: 1300, type: 'success' },
  { text: '[  OK  ] Started Problem Solving Engine', delay: 1450, type: 'success' },
  { text: '[  OK  ] Loaded Full-Stack Framework v4.2.0', delay: 1600, type: 'success' },
  { text: '[  OK  ] Initialized Coffee Dependency Injection', delay: 1750, type: 'success' },
  { text: '', delay: 1850, type: 'blank' },
  { text: 'Authenticating user...', delay: 1900, type: 'system' },
  { text: 'Access Level: ROOT', delay: 2100, type: 'warning' },
  { text: 'Welcome back, Alex.', delay: 2300, type: 'highlight' },
  { text: '', delay: 2400, type: 'blank' },
  { text: 'Initializing portfolio interface...', delay: 2500, type: 'system' },
  { text: '████████████████████████████████ 100%', delay: 2700, type: 'progress' },
  { text: '', delay: 2900, type: 'blank' },
  { text: 'System ready. Launching terminal...', delay: 3000, type: 'highlight' },
];

const BootSequence = ({ onComplete }) => {
  const [visibleLines, setVisibleLines] = useState([]);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timeouts = bootLines.map((line, index) =>
      setTimeout(() => {
        setVisibleLines(prev => [...prev, line]);
      }, line.delay)
    );

    const exitTimeout = setTimeout(() => {
      setIsExiting(true);
    }, 3500);

    const completeTimeout = setTimeout(() => {
      onComplete();
    }, 4200);

    return () => {
      timeouts.forEach(clearTimeout);
      clearTimeout(exitTimeout);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  return (
    <div className={`boot-screen ${isExiting ? 'boot-exit' : ''}`}>
      <div className="boot-content">
        <div className="boot-header">
          <span className="boot-logo">
{`
 ██████╗ ██████╗  ██████╗ ████████╗
 ██╔══██╗██╔══██╗██╔═══██╗╚══██╔══╝
 ██████╔╝██████╔╝██║   ██║   ██║   
 ██╔══██╗██╔══██╗██║   ██║   ██║   
 ██████╔╝██████╔╝╚██████╔╝   ██║   
 ╚═════╝ ╚═════╝  ╚═════╝    ╚═╝   
`}
          </span>
        </div>
        <div className="boot-lines">
          {visibleLines.map((line, index) => (
            <div 
              key={index} 
              className={`boot-line boot-line-${line.type}`}
              style={{ animationDelay: `${index * 30}ms` }}
            >
              {line.type === 'success' && <span className="boot-status ok">[  OK  ]</span>}
              {line.type === 'warning' && <span className="boot-status warn">[GRANT ]</span>}
              {line.text}
            </div>
          ))}
        </div>
      </div>
      <div className="boot-scanline" />
    </div>
  );
};

export default BootSequence;
