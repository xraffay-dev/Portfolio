import TerminalWindow from './TerminalWindow';
import './ContactSection.css';

const socialLinks = [
  {
    name: 'GitHub',
    handle: '@alexchen',
    url: 'https://github.com',
    icon: '⌘',
    color: 'var(--text-primary)',
  },
  {
    name: 'LinkedIn',
    handle: '/in/alexchen',
    url: 'https://linkedin.com',
    icon: '◈',
    color: 'var(--cyan-400)',
  },
  {
    name: 'Twitter',
    handle: '@alexcodes',
    url: 'https://twitter.com',
    icon: '✦',
    color: 'var(--cyan-300)',
  },
  {
    name: 'Email',
    handle: 'alex@devmail.io',
    url: 'mailto:alex@devmail.io',
    icon: '✉',
    color: 'var(--amber-400)',
  },
  {
    name: 'Resume',
    handle: 'download PDF',
    url: '#',
    icon: '⬡',
    color: 'var(--green-400)',
  },
];

const ContactSection = () => {
  return (
    <section className="section contact-section" id="contact">
      <div className="section-container">
        <div className="section-header">
          <span className="section-command">
            <span className="cmd-prompt">$</span> cat ~/.contact
          </span>
        </div>

        <TerminalWindow title="contact/reach-me.sh" id="contact-main">
          <div className="contact-content">
            <div className="contact-message">
              <div className="contact-ascii">
{`  ┌──────────────────────────────────────────────┐
  │                                              │
  │   Let's build something amazing together.    │
  │                                              │
  └──────────────────────────────────────────────┘`}
              </div>
              <p className="contact-text">
                <span className="text-green">{'>'}</span> I'm always interested in hearing about new projects, 
                opportunities, and collaborations. Whether you have a question, want to work together, 
                or just want to say hi — my inbox is always open.
              </p>
              <p className="contact-text">
                <span className="text-green">{'>'}</span> Currently{' '}
                <span className="text-green">open to work</span> and available for 
                full-time positions, freelance projects, and consulting.
              </p>
            </div>

            <div className="contact-links">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="contact-link-card"
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`contact-${link.name.toLowerCase()}`}
                >
                  <span className="link-icon" style={{ color: link.color }}>{link.icon}</span>
                  <div className="link-info">
                    <span className="link-name">{link.name}</span>
                    <span className="link-handle">{link.handle}</span>
                  </div>
                  <span className="link-arrow">→</span>
                </a>
              ))}
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
};

export default ContactSection;
