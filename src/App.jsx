import { useState } from "react";
import "./portfolio.css";
import giverollimg from "./assets/giveroll.jpg";
import studentsfindsimg from "./assets/studentsfinds.jpg";
import elanhotelsimg from "./assets/elanhotels.jpg";
import profileimg from "./assets/profile.png";

const PROJECTS = [
  {
    id: "elan-hotels",
    title: "Elan Hotels Web Application",
    category: "Web & Frontend Development",
    image: elanhotelsimg,
    imageAlt: "Elan Hotels responsive booking and guest experience interface",
    summary:
      "Built and deployed a responsive hotel booking and guest experience web application alongside backend, cybersecurity, and AI/ML teammates.",
    highlights: [
      "Engineered responsive booking flows, guest detail forms, reservation summaries, and mobile navigation in React & Vite.",
      "Integrated REST API endpoints using structured JSON payloads, VITE_API_URL, and clear loading/error states."
    ],
    stack: ["React", "Vite", "JavaScript", "CSS3", "REST APIs"],
    liveUrl: "https://elan-hotels.vercel.app/",
    repoUrl: "https://github.com/oluwadamilola-dot-design/Elan-hotels"
  },
  {
    id: "give-roll",
    title: "Giveaway Platform (Give-Roll)",
    category: "Product & Web Design",
    image: giverollimg,
    imageAlt: "Give-Roll giveaway platform landing page and dashboard screens",
    summary:
      "Optimized the end-to-end user journey for a social giveaway platform within an Agile cross-functional team of six.",
    highlights: [
      "Conducted 8 user interviews and analyzed 12+ survey responses to resolve 5 core usability pain points.",
      "Improved user engagement by 60% and lifted System Usability Scale (SUS) scores by 40% with WCAG accessibility."
    ],
    stack: ["Figma", "User Research", "Wireframing", "Prototyping", "WCAG"],
    figmaUrl:
      "https://www.figma.com/design/U22G1OiNOratDL9wOw0TGY/Give-Roll?node-id=4-2&t=GZyuOdqNIzDYztem-1"
  },
  {
    id: "student-finds",
    title: "Student Buying and Selling App (Student Finds)",
    category: "Mobile Application",
    image: studentsfindsimg,
    imageAlt: "Student Finds peer-to-peer marketplace mobile interface screens",
    summary:
      "Led end-to-end UX/UI design for a peer-to-peer student marketplace app addressing trust and product discovery.",
    highlights: [
      "Conducted 8 user interviews and mapped personas ('The Budget Buyer', 'The Declutterer') and user journeys in FigJam.",
      "Validated high-fidelity Figma prototypes across 5 usability testing sessions, achieving a 50% increase in listing completions."
    ],
    stack: ["Figma", "FigJam", "Journey Mapping", "UI Design", "Usability Testing"],
    figmaUrl:
      "https://www.figma.com/design/4S2DbOxTfxb8Eo4l1N0FpF/Student-Finds?node-id=2-2&t=hzPuyLrd945wQlwg-1"
  }
];

const SKILLS = [
  "User Research",
  "Wireframing",
  "Prototyping",
  "Visual Design",
  "Design Systems",
  "Interaction Design",
  "Figma",
  "FigJam",
  "React",
  "JavaScript (ES6+)",
  "HTML5 & CSS3",
  "Responsive UI"
];

export default function App() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filterOptions = ["All", "React", "Figma"];

  const visibleProjects =
    selectedFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((project) =>
          project.stack.some((item) =>
            item.toLowerCase().includes(selectedFilter.toLowerCase())
          )
        );

  return (
    <div className="portfolio-page">
      <div className="top-dark-band">
        <header className="site-header">
          <a href="#" className="brand-logo">
            Portfolio<span>.</span>
          </a>

          <nav aria-label="Primary Navigation" className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <section
          className="hero-section section-inner"
          aria-labelledby="hero-heading"
        >
          <div className="hero-content">
            <h1 id="hero-heading" className="hero-title">
              Frontend Developer &amp; Product Designer
            </h1>
            <p className="hero-description">
              Hey, I&apos;m Adeyemo Yetunde Damilola—a Frontend Developer and
              Product Designer dedicated to turning complex workflows into simple,
              responsive, and accessible web experiences. I bridge thoughtful UI/UX
              design with clean React, JavaScript, and CSS code so interfaces
              don&apos;t just look good, they feel intuitive for the people using
              them.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn-hero">
                Explore Projects
              </a>
            </div>
          </div>

          <div className="hero-media">
            <img
              src={profileimg}
              alt="Adeyemo Yetunde Damilola profile showcase"
              className="hero-image"
            />
          </div>
        </section>
      </div>

      <section
        id="projects"
        className="projects-band"
        aria-labelledby="projects-heading"
      >
        <div className="section-inner">
          <div className="section-header-row">
            <div>
              <p className="section-eyebrow">Selected Projects</p>
              <h2 id="projects-heading" className="section-title">
                Where Design Meets Strategy
              </h2>
            </div>

            <div className="filter-group" role="group" aria-label="Filter projects">
              {filterOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setSelectedFilter(option)}
                  className={`filter-btn ${
                    selectedFilter === option ? "is-active" : ""
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="projects-grid">
            {visibleProjects.map((project) => (
              <article key={project.id} className="project-card">
                {project.image && (
                  <div className="project-media">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="project-image"
                    />
                  </div>
                )}

                <p className="project-category">{project.category}</p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-summary">{project.summary}</p>

                <ul className="project-highlights">
                  {project.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="project-links">
                  {project.figmaUrl && (
                    <a
                      href={project.figmaUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-project"
                    >
                      View Project
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-project"
                    >
                      Live Site
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-link-secondary"
                    >
                      GitHub Repo →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="about-band"
        aria-labelledby="about-heading"
      >
        <div className="section-inner about-grid">
          <div className="about-column">
            <h2 id="about-heading" className="section-title">
              About Me
            </h2>
            <p className="body-copy">
              Turning Curiosity into Solutions. With experience across frontend
              development, product design, and education, I break down intricate
              user journeys into structured, easy-to-follow steps. I enjoy
              collaborating in cross-functional teams with developers, designers,
              security specialists, and AI/ML engineers to ship reliable
              interfaces with React, JavaScript (ES6+), HTML5, CSS3, and WCAG
              accessibility best practices.
            </p>
          </div>

          <div className="skills-column">
            <h3 className="skills-heading">Skills &amp; Tools</h3>
            <div className="skills-chips" aria-label="Skills and tools">
              {SKILLS.map((skill) => (
                <span key={skill} className="skill-chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="contact-band"
        aria-labelledby="contact-heading"
      >
        <div className="section-inner contact-grid">
          <div>
            <p className="section-eyebrow">Contact</p>
            <h2 id="contact-heading" className="contact-heading">
              Have a project in mind? Let&apos;s Create Something Together
            </h2>
          </div>

          <div className="contact-details-list">
            <div className="contact-row">
              <span className="contact-label">Email:</span>
              <a href="mailto:Oluwadamilolaadeyemo2018@gmail.com">
                Oluwadamilolaadeyemo2018@gmail.com
              </a>
            </div>
            <div className="contact-row">
              <span className="contact-label">Phone No:</span>
              <a href="tel:+2347063142990">+2347063142990</a>
            </div>
            <div className="contact-row">
              <span className="contact-label">Linkedin:</span>
              <a
                href="https://www.linkedin.com/in/adeyemoyetunde"
                target="_blank"
                rel="noreferrer"
              >
                https://www.linkedin.com/in/adeyemoyetunde
              </a>
            </div>
            <div className="contact-row">
              <span className="contact-label">Github:</span>
              <a
                href="https://github.com/oluwadamilola-dot-design"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/oluwadamilola-dot-design
              </a>
            </div>
            <div className="contact-row">
              <span className="contact-label">Cv:</span>
              <a
                href="https://drive.google.com/file/d/18587-ZmPfZ29jQyoN-w2VEkQf_YmwEht/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                View my cv
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}