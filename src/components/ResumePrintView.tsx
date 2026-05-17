import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePortfolio } from '../hooks/usePortfolio';

function ResumeBody() {
  const { profile, skills, coreSkills, experience, education, achievements } =
    usePortfolio();

  return (
    <div className="print-resume" aria-hidden="true">
      <header className="pr-header">
        <h1>{profile.name}</h1>
        <p className="pr-title">{profile.role}</p>
        <p className="pr-tagline">
          {profile.yearsOfExperience} years across Angular, Node.js, NestJS, Laravel,
          Django, Firebase, AWS, and GCP
        </p>
        <p className="pr-contact">
          {profile.social.email}
          {profile.social.phone ? ` | ${profile.social.phone}` : ''}
          {profile.location ? ` | ${profile.location}` : ''}
        </p>
        <p className="pr-contact pr-contact-2">
          {profile.social.website ? `${profile.social.website}` : ''}
          {profile.social.linkedin ? ` | LinkedIn: ${profile.social.linkedin}` : ''}
          {profile.social.whatsapp ? ` | WhatsApp: ${profile.social.whatsapp}` : ''}
        </p>
      </header>

      <section>
        <h2>PROFESSIONAL SUMMARY</h2>
        <p>{profile.bio}</p>
      </section>

      <section>
        <h2>CORE SKILLS</h2>
        <div className="pr-core-grid">
          {coreSkills.map((cs) => (
            <div key={cs.title} className="pr-core-item">
              <strong>{cs.title}</strong>
              <span>{cs.items}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>TECHNOLOGY SNAPSHOT</h2>
        {skills.categories.map((cat) => (
          <p key={cat.name} className="pr-tech-line">
            <strong>{cat.name}:</strong> {cat.items.join(', ')}
          </p>
        ))}
      </section>

      <section>
        <h2>PROFESSIONAL EXPERIENCE</h2>
        {experience.map((exp, i) => (
          <div key={i} className="pr-job">
            <div className="pr-job-head">
              <div>
                <h3>{exp.role}</h3>
                <p className="pr-job-company">
                  <strong>{exp.company}</strong> | {exp.location}
                </p>
              </div>
              <div className="pr-job-meta">
                <p className="pr-period">{exp.period}</p>
                <p className="pr-summary">{exp.summary}</p>
              </div>
            </div>
            <ul>
              {exp.highlights.map((h, hi) => (
                <li key={hi}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h2>KEY ACHIEVEMENTS</h2>
        <ul>
          {achievements.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>EDUCATION</h2>
        {education.map((e, i) => (
          <div key={i} className="pr-edu">
            <h3>{e.degree} — {e.institution}</h3>
            <p>
              {e.year} | {e.details}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default function ResumePrintView() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(<ResumeBody />, document.body);
}
