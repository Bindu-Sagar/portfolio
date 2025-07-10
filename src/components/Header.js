import { useEffect, useState } from "react";

  const navLinks = [
    { label: "About", id: "body" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Education", id: "education" },
    { label: "Certifications", id: "certifications" },
    { label: "Contact", id: "contact" },
  ];
const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [activeSection, setActiveSection] = useState("body");
  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setShowNav(false);

    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // triggers when 50% of section is visible
      }
    );

    navLinks.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      navLinks.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="header">
      <div className="logo">
        <h1>SAGAR</h1>
      </div>
      <div className="hamburger" onClick={() => setShowNav(!showNav)}>
        {showNav ? "✖" : "☰"}
      </div>
      <div className={`nav-container ${showNav ? "show" : ""}`}>
        <ul className="nav-list">
          {navLinks.map(({ label, id }) => (
            <li
              key={id}
              className={`nav-items ${activeSection === id ? "active" : ""}`}
              onClick={() => handleNavClick(id)}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
