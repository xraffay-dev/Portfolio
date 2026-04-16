import TerminalWindow from './TerminalWindow';
import './ProjectsSection.css';

const projects = [
  {
    name: 'nexus-api',
    description: 'A high-performance GraphQL API gateway with real-time subscriptions, rate limiting, and automatic schema stitching. Handles 50K+ requests/sec with sub-10ms latency.',
    tech: ['Node.js', 'GraphQL', 'Redis', 'Docker', 'K8s'],
    stars: 342,
    forks: 89,
    language: 'TypeScript',
    languageColor: '#3178c6',
    status: 'active',
    link: '#',
  },
  {
    name: 'phantom-ui',
    description: 'A dark-mode-first React component library with 40+ accessible components, built-in theming engine, and Storybook documentation. Used by 200+ developers.',
    tech: ['React', 'TypeScript', 'Storybook', 'Rollup'],
    stars: 528,
    forks: 134,
    language: 'TypeScript',
    languageColor: '#3178c6',
    status: 'active',
    link: '#',
  },
  {
    name: 'rustcrawler',
    description: 'A blazing-fast distributed web crawler written in Rust. Features async I/O, configurable politeness policies, and exports to multiple formats.',
    tech: ['Rust', 'Tokio', 'PostgreSQL', 'gRPC'],
    stars: 215,
    forks: 42,
    language: 'Rust',
    languageColor: '#dea584',
    status: 'archived',
    link: '#',
  },
  {
    name: 'cloudwatch-tui',
    description: 'Terminal UI for AWS CloudWatch logs. Real-time log tailing, regex filtering, multi-group support, and beautiful syntax-highlighted output.',
    tech: ['Go', 'Bubble Tea', 'AWS SDK', 'Cobra'],
    stars: 189,
    forks: 31,
    language: 'Go',
    languageColor: '#00ADD8',
    status: 'active',
    link: '#',
  },
  {
    name: 'synth-wave',
    description: 'An AI-powered music generation tool that creates synthwave tracks using neural networks. Includes a real-time web visualizer with WebAudio API.',
    tech: ['Python', 'PyTorch', 'FastAPI', 'React', 'WebAudio'],
    stars: 467,
    forks: 78,
    language: 'Python',
    languageColor: '#3572A5',
    status: 'active',
    link: '#',
  },
  {
    name: 'dotfiles',
    description: 'My meticulously crafted development environment. Neovim, tmux, zsh configs with automated bootstrap script. One command to set up any new machine.',
    tech: ['Lua', 'Bash', 'Nix', 'Ansible'],
    stars: 156,
    forks: 67,
    language: 'Shell',
    languageColor: '#89e051',
    status: 'active',
    link: '#',
  },
];

const ProjectsSection = () => {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-container">
        <div className="section-header">
          <span className="section-command">
            <span className="cmd-prompt">$</span> ls -la ~/projects/
          </span>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <TerminalWindow
              key={project.name}
              title={`~/projects/${project.name}`}
              variant="compact"
              id={`project-${project.name}`}
            >
              <div className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="project-header">
                  <div className="project-name-row">
                    <span className="project-icon">📁</span>
                    <a href={project.link} className="project-name">{project.name}</a>
                    <span className={`project-status status-${project.status}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>

                <div className="project-meta">
                  <span className="project-language">
                    <span
                      className="lang-dot"
                      style={{ background: project.languageColor }}
                    />
                    {project.language}
                  </span>
                  <span className="project-stars">
                    <span className="meta-icon">★</span> {project.stars}
                  </span>
                  <span className="project-forks">
                    <span className="meta-icon">⑂</span> {project.forks}
                  </span>
                </div>
              </div>
            </TerminalWindow>
          ))}
        </div>

        <div className="projects-footer">
          <span className="footer-text">
            <span className="text-dim">{'>'}</span> Showing 6 of 50+ repositories.{' '}
            <a href="#" className="footer-link">View all on GitHub →</a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
