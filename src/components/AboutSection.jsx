import TerminalWindow from './TerminalWindow';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="section about-section" id="about">
      <div className="section-container">
        <div className="section-header">
          <span className="section-command">
            <span className="cmd-prompt">$</span> cat ./about.md
          </span>
        </div>
        
        <div className="about-grid">
          <TerminalWindow title="about/profile.sh" id="about-profile">
            <div className="about-content">
              <div className="about-intro">
                <p className="about-greeting">
                  <span className="text-green">{'>'}</span> Hey there! I'm <span className="text-cyan">Alex Chen</span>
                </p>
                <p className="about-bio">
                  A passionate full-stack developer who loves building things that live on the 
                  internet. I specialize in crafting elegant, performant applications with 
                  modern web technologies. When I'm not pushing pixels or debugging distributed 
                  systems, you'll find me contributing to open-source projects or writing 
                  technical blog posts.
                </p>
                <p className="about-bio">
                  I believe in writing clean, maintainable code that solves real problems. 
                  With 5+ years of experience across startups and Fortune 500 companies, 
                  I bring a unique blend of rapid prototyping skills and enterprise-grade 
                  engineering practices.
                </p>
              </div>

              <div className="about-details">
                <div className="detail-block">
                  <span className="detail-comment">{'// personal_info.json'}</span>
                  <div className="detail-json">
                    <span className="json-brace">{'{'}</span>
                    <div className="json-row">
                      <span className="json-key">"name"</span>
                      <span className="json-colon">:</span>
                      <span className="json-string">"Alex Chen"</span>
                    </div>
                    <div className="json-row">
                      <span className="json-key">"role"</span>
                      <span className="json-colon">:</span>
                      <span className="json-string">"Full-Stack Developer"</span>
                    </div>
                    <div className="json-row">
                      <span className="json-key">"location"</span>
                      <span className="json-colon">:</span>
                      <span className="json-string">"San Francisco, CA"</span>
                    </div>
                    <div className="json-row">
                      <span className="json-key">"education"</span>
                      <span className="json-colon">:</span>
                      <span className="json-string">"B.S. Computer Science, Stanford"</span>
                    </div>
                    <div className="json-row">
                      <span className="json-key">"languages"</span>
                      <span className="json-colon">:</span>
                      <span className="json-array">["English", "Mandarin", "Python"]</span>
                    </div>
                    <div className="json-row">
                      <span className="json-key">"hobbies"</span>
                      <span className="json-colon">:</span>
                      <span className="json-array">["Open Source", "Rock Climbing", "Coffee"]</span>
                    </div>
                    <span className="json-brace">{'}'}</span>
                  </div>
                </div>
              </div>
            </div>
          </TerminalWindow>

          <TerminalWindow title="about/stats.sh" variant="compact" id="about-stats">
            <div className="about-stats-grid">
              <div className="stat-card">
                <span className="stat-number text-green">50+</span>
                <span className="stat-desc">Projects Completed</span>
              </div>
              <div className="stat-card">
                <span className="stat-number text-cyan">1.2K+</span>
                <span className="stat-desc">GitHub Stars</span>
              </div>
              <div className="stat-card">
                <span className="stat-number text-amber">200+</span>
                <span className="stat-desc">Contributions (2025)</span>
              </div>
              <div className="stat-card">
                <span className="stat-number text-purple">15+</span>
                <span className="stat-desc">Technologies</span>
              </div>
            </div>
          </TerminalWindow>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
