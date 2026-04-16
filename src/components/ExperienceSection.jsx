import TerminalWindow from './TerminalWindow';
import './ExperienceSection.css';

const experiences = [
  {
    role: 'Senior Full-Stack Engineer',
    company: 'Quantum Labs',
    companyUrl: '#',
    period: '2023 — Present',
    location: 'San Francisco, CA',
    description: [
      'Led architecture redesign of core platform, reducing API latency by 60% and improving system throughput to handle 100K concurrent users.',
      'Built real-time collaboration engine using WebSockets and CRDTs, enabling seamless multi-user editing across 15+ document types.',
      'Mentored a team of 5 junior developers, establishing code review practices and CI/CD pipelines that reduced deployment failures by 80%.',
      'Spearheaded migration from monolithic architecture to microservices, resulting in 3x faster feature delivery cycles.',
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Docker'],
  },
  {
    role: 'Full-Stack Developer',
    company: 'NovaTech Inc.',
    companyUrl: '#',
    period: '2021 — 2023',
    location: 'Remote',
    description: [
      'Developed customer-facing dashboard serving 50K+ daily active users with real-time analytics and data visualization.',
      'Implemented OAuth 2.0, RBAC, and audit logging system, achieving SOC 2 Type II compliance.',
      'Optimized database queries and implemented caching strategies, reducing page load times by 45%.',
      'Built internal CLI tool for automated deployment and environment management using Go.',
    ],
    tech: ['Vue.js', 'Python', 'FastAPI', 'MongoDB', 'GCP', 'Terraform'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'DataFlow Systems',
    companyUrl: '#',
    period: '2020 — 2021',
    location: 'Austin, TX',
    description: [
      'Designed and implemented ETL pipeline processing 2TB+ daily data using Apache Spark and Airflow.',
      'Created monitoring dashboards with Grafana and Prometheus, providing real-time visibility into system health.',
      'Contributed to open-source data validation library, which gained 500+ GitHub stars.',
    ],
    tech: ['Python', 'Apache Spark', 'Airflow', 'Grafana', 'PostgreSQL'],
  },
];

const ExperienceSection = () => {
  return (
    <section className="section experience-section" id="experience">
      <div className="section-container">
        <div className="section-header">
          <span className="section-command">
            <span className="cmd-prompt">$</span> cat /var/log/career.log
          </span>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-dot" />
                {index < experiences.length - 1 && <span className="timeline-line" />}
              </div>
              
              <TerminalWindow
                title={`experience/${exp.company.toLowerCase().replace(/\s+/g, '-')}.log`}
                variant="compact"
                id={`exp-${index}`}
              >
                <div className="experience-card">
                  <div className="exp-header">
                    <div className="exp-title-group">
                      <h3 className="exp-role">{exp.role}</h3>
                      <div className="exp-company-row">
                        <a href={exp.companyUrl} className="exp-company">@ {exp.company}</a>
                        <span className="exp-location">
                          <span className="location-icon">◎</span>
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <span className="exp-period">{exp.period}</span>
                  </div>

                  <div className="exp-description">
                    {exp.description.map((item, i) => (
                      <div key={i} className="exp-bullet">
                        <span className="bullet-icon">▹</span>
                        <span className="bullet-text">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="exp-tech">
                    {exp.tech.map(t => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </TerminalWindow>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
