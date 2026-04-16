import TerminalWindow from './TerminalWindow';
import './SkillsSection.css';

const skillCategories = [
  {
    title: 'frontend',
    icon: '◈',
    color: 'cyan',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 92 },
      { name: 'Vue.js', level: 78 },
      { name: 'HTML5 / CSS3', level: 97 },
      { name: 'Three.js / WebGL', level: 70 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    title: 'backend',
    icon: '◉',
    color: 'green',
    skills: [
      { name: 'Node.js / Express', level: 93 },
      { name: 'Python / FastAPI', level: 88 },
      { name: 'Go', level: 72 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 82 },
      { name: 'GraphQL', level: 80 },
    ],
  },
  {
    title: 'devops & tools',
    icon: '◆',
    color: 'amber',
    skills: [
      { name: 'Docker / K8s', level: 87 },
      { name: 'AWS / GCP', level: 83 },
      { name: 'CI/CD Pipelines', level: 90 },
      { name: 'Git / GitHub', level: 95 },
      { name: 'Linux / Bash', level: 88 },
      { name: 'Terraform', level: 75 },
    ],
  },
];

const SkillsSection = () => {
  const getBarColor = (color) => {
    const colors = {
      cyan: 'var(--cyan-400)',
      green: 'var(--green-400)',
      amber: 'var(--amber-400)',
    };
    return colors[color] || 'var(--green-400)';
  };

  const getGlowColor = (color) => {
    const colors = {
      cyan: 'var(--cyan-glow)',
      green: 'var(--green-glow)',
      amber: 'var(--amber-glow)',
    };
    return colors[color] || 'var(--green-glow)';
  };

  return (
    <section className="section skills-section" id="skills">
      <div className="section-container">
        <div className="section-header">
          <span className="section-command">
            <span className="cmd-prompt">$</span> neofetch --skills
          </span>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <TerminalWindow
              key={category.title}
              title={`skills/${category.title}.conf`}
              variant="compact"
              id={`skills-${category.title.replace(/\s+/g, '-')}`}
            >
              <div className="skill-category">
                <div className={`skill-category-header text-${category.color}`}>
                  <span className="skill-icon">{category.icon}</span>
                  <span className="skill-category-title">{category.title}</span>
                </div>
                <div className="skill-list">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar-track">
                        <div
                          className="skill-bar-fill"
                          style={{
                            width: `${skill.level}%`,
                            background: `linear-gradient(90deg, ${getBarColor(category.color)}, ${getBarColor(category.color)}aa)`,
                            boxShadow: `0 0 10px ${getGlowColor(category.color)}, 0 0 20px ${getGlowColor(category.color)}`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TerminalWindow>
          ))}
        </div>

        <TerminalWindow title="skills/tools.sh" variant="compact" id="skills-tools">
          <div className="tools-grid">
            {['VS Code', 'Neovim', 'Figma', 'Postman', 'Jira', 'Notion', 'Slack', 'Discord', 'Chrome DevTools', 'Wireshark', 'Nginx', 'Redis'].map(tool => (
              <span key={tool} className="tool-tag">{tool}</span>
            ))}
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
};

export default SkillsSection;
