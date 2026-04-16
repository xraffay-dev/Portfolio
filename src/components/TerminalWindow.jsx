import './TerminalWindow.css';

const TerminalWindow = ({ title, children, variant = 'default', id }) => {
  return (
    <div className={`terminal-window terminal-${variant}`} id={id}>
      <div className="terminal-titlebar">
        <div className="terminal-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <div className="terminal-title">
          <span className="terminal-title-icon">▸</span>
          {title}
        </div>
        <div className="terminal-titlebar-right">
          <span className="terminal-pid">PID: {Math.floor(1000 + Math.random() * 9000)}</span>
        </div>
      </div>
      <div className="terminal-body">
        {children}
      </div>
    </div>
  );
};

export default TerminalWindow;
