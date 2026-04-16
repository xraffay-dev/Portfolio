import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="footer-inner">
        <div className="footer-divider">
          <span className="divider-text">{'─'.repeat(40)}</span>
        </div>
        
        <div className="footer-content">
          <div className="footer-left">
            <span className="footer-prompt">
              <span className="text-green">alex</span>
              <span className="text-dim">@</span>
              <span className="text-cyan">portfolio</span>
              <span className="text-dim">:</span>
              <span className="text-purple">~</span>
              <span className="text-dim">$</span>
            </span>
            <span className="footer-copyright">
              © {currentYear} Alex Chen. Built with React + ☕
            </span>
          </div>

          <div className="footer-right">
            <span className="footer-meta">
              <span className="text-dim">// </span>
              Designed & coded with{' '}
              <span className="footer-heart">♥</span>
              {' '}in a dark terminal
            </span>
          </div>
        </div>

        <div className="footer-ascii">
          <span className="text-dim">
{`  ╔═══════════════════════════════════════════════════════════╗
  ║  "Any sufficiently advanced technology is                ║
  ║   indistinguishable from magic." — Arthur C. Clarke      ║
  ╚═══════════════════════════════════════════════════════════╝`}
          </span>
        </div>

        <div className="footer-exit">
          <span className="text-dim">Process exited with code </span>
          <span className="text-green">0</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
