import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import './App.css';

// --- CONFIGURATION'S ---
const sections = [
  { id: 'home', label: '// CONTEXT' },
  { id: 'philosophy', label: '// PHILOSOPHY' },
  { id: 'stack', label: '// ARSENAL' },
  { id: 'impact', label: '// IMPACT' },
  { id: 'experience', label: '// JOURNEY' },
  { id: 'credentials', label: '// CREDENTIALS' },
  { id: 'contact', label: '// ENGAGEMENT' }
];

const stack = [
  {
    category: "Languages & Backend",
    items: ["Java", "Python", "JavaScript", "TypeScript", "Node.js", "C++", "C#", "Spring Boot", "Express.js", "FastAPI"]
  },
  {
    category: "Cloud, DevOps & CI/CD",
    items: ["AWS", "Azure", "Docker", "Kubernetes", "OpenShift", "Terraform", "Jenkins", "GitHub Actions", "GitLab CI"]
  },
  {
    category: "Data, Messaging & AI",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Apache Kafka", "RabbitMQ", "LangChain", "OpenAI API", "RAG Concepts"]
  },
  {
    category: "Testing & Observability",
    items: ["JUnit", "Mockito", "PyTest", "Jest", "Cypress", "CloudWatch", "ELK Stack", "Prometheus", "Grafana"]
  }
];

const cases = [
  {
    title: "Cloud-Native Payment & KYC Platform",
    company: "Intuit · Oct 2025 – Present",
    impact: [
      "Built cloud-native payment, settlement, and KYC applications using API services, event-driven workflows, and EKS",
      "Designed REST and GraphQL API contracts, validation rules, retry paths, error handling, and reusable components",
      "Developed Spring Boot services, Python reconciliation utilities, and Node.js callback/webhook handler endpoints",
      "Improved reliability through concurrency tuning and query optimization, reducing latency from 850ms to under 300ms"
    ],
    tags: ["#Spring Boot", "#Kafka", "#AWS EKS", "#API Design", "#Performance Tuning"]
  },
  {
    title: "Credit Risk Platform Modernization",
    company: "Bank of America · Nov 2024 – Oct 2025",
    impact: [
      "Modernized credit risk and compliance platforms using Java/Spring Boot, Python/FastAPI, Node.js, and AWS",
      "Built Kafka producers and consumers for credit decisions and risk updates, improving service decoupling",
      "Created Python automation for data validation and log-driven diagnostics processing 10,000+ daily evaluations",
      "Optimized SQL queries, Redis caching, and MongoDB indexing, reducing average response latency by 35%"
    ],
    tags: ["#Java", "#FastAPI", "#Kafka", "#Redis", "#SQL Optimization"]
  },
  {
    title: "Enterprise Banking Solutions & Pipelines",
    company: "Accenture · Jul 2020 – Jun 2023",
    impact: [
      "Developed transaction lookup and service-status modules using Node.js/Express, Java, and C++ utilities",
      "Designed batch and data pipelines for end-of-day settlement and reporting processing 1M+ daily records",
      "Integrated JMS and RabbitMQ messaging to decouple transaction processing from downstream workflows",
      "Built automated Jenkins CI/CD pipelines, reducing environment deployment and release checks time to under 4 hours"
    ],
    tags: ["#Node.js", "#RabbitMQ", "#Jenkins", "#CI/CD", "#Data Pipelines"]
  }
];

const experiences = [
  {
    period: "Oct 2025 — Present",
    role: "Software Engineer",
    org: "Intuit · USA",
    bullets: [
      "Cloud-Native Architecture: Engineered resilient payment processing, settlement, and KYC workflows on AWS EKS and Kafka, streamlining transactional flow across core financial systems.",
      "Robust API Design & Orchestration: Architected GraphQL and REST contracts with advanced error-handling patterns, retry strategies, and validation layers to support seamless partner integrations.",
      "Performance Optimization: Spearheaded database tuning and concurrency optimizations, resulting in a 40% throughput increase and reducing latency from 850ms to under 300ms.",
      "AI-Driven Automation: Built intelligent support tools using Python, LangChain, and LLM APIs to query runbooks and API documentation, decreasing standard response times for operational tasks.",
      "End-to-End Delivery & Testing: Directed CI/CD automated release pipelines using GitHub Actions and Kubernetes; maintained strict reliability standards through JUnit testing and Grafana monitoring."
    ]
  },
  {
    period: "Nov 2024 — Oct 2025",
    role: "Software Engineer",
    org: "Bank of America · USA",
    bullets: [
      "Enterprise Modernization: Led backend refactoring of credit risk and compliance systems using Java, FastAPI, and Kafka, modernizing core data processing pipeline for 10,000+ daily evaluations.",
      "Event-Driven Messaging: Designed distributed messaging pipelines to decouple credit decisions and compliance updates, ensuring near-instantaneous sync across cross-functional platforms.",
      "Query & Database Performance: Tuned complex SQL procedures, established MongoDB indexing strategies, and configured Redis caching to slash average response times by 35%.",
      "Observability & DevOps: Managed deployment automation using Kubernetes, Docker, and GitHub Actions; established central logging dashboards to expedite troubleshooting of production anomalies.",
      "Knowledge Automation: Implemented a search tool using LangChain and embeddings to query internal compliance and regulatory documents, helping teams solve queries faster."
    ]
  },
  {
    period: "Jul 2020 — Jun 2023",
    role: "Software Engineer",
    org: "Accenture · India",
    bullets: [
      "Full-Stack Development: Created transactional modules and tracking services using Java and Node.js to power large-scale enterprise banking applications.",
      "Data Engineering: Designed settlement pipelines and C++ file validation scripts handling 1M+ daily transactions with extreme precision and compliance checks.",
      "CI/CD Acceleration: Built robust Jenkins build and deployment pipelines, reducing production release duration from 3 days to under 4 hours.",
      "Production Support: Provided L2/L3 technical support for high-stakes incidents using ELK Stack and Grafana, consistently maintaining core service level agreements (SLAs).",
      "Asynchronous Workflows: Decoupled messaging and notifications by integrating RabbitMQ and JMS, minimizing blocking calls and boosting transaction stability."
    ]
  }
];

const credentials = [
  { icon: "Education · 2023 – 2025", name: "Master of Science in Computer Science", body: "University of Central Missouri · USA" },
  { icon: "Education · 2018 – 2022", name: "Bachelor of Technology in Computer Science", body: "Mohan Babu University · India" },
  { icon: "Expertise", name: "Cloud & DevOps Integration", body: "AWS (EKS, Lambda, S3, RDS), Azure App Service, Docker, Kubernetes, OpenShift, Jenkins, GitHub Actions, Terraform" },
  { icon: "Expertise", name: "Backend & Event-Driven", body: "Java, Spring Boot, Python, FastAPI, Node.js, Express, REST/GraphQL, Apache Kafka, RabbitMQ, JMS, PostgreSQL, Redis" },
  { icon: "Expertise", name: "AI Engineering & RAG", body: "LangChain, OpenAI API, Azure OpenAI, Embeddings, Prompt Workflows, Document Search, AI Chatbots, GitHub Copilot" },
  { icon: "Expertise", name: "Testing & Observability", body: "JUnit, Mockito, PyTest, Jest, Cypress, CloudWatch, Azure Monitor, ELK Stack, Prometheus, Grafana, RCA, L2/L3 Support" }
];

// --- SUB-COMPONENTS ---

const Navbar = () => (
  <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyBetween: 'space-between', padding: '1.25rem 4rem', background: 'rgba(245,240,232,0.9)', backdropFilter: 'blur(12px)', borderBottom: '0.5px solid var(--border)', justifyContent: 'space-between' }}>
    <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.7rem', letterSpacing: '0.15em', color: 'var(--rust)', textTransform: 'uppercase' }}>BSS / Software Engineer</div>
    <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
      {sections.slice(1).map(s => (
        <li key={s.id}><a href={`#${s.id}`} style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', color: 'var(--muted)', transition: 'color 0.2s' }}>{s.id}</a></li>
      ))}
    </ul>
  </nav>
);

const Breadcrumbs = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ position: 'fixed', left: '1.5rem', top: '50%', transform: 'translateY(-50%)', zIndex: 50, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={activeSection === section.id ? 'side-dot active' : 'side-dot'}
          title={section.label}
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: activeSection === section.id ? 'var(--rust)' : 'rgba(13,13,13,0.2)',
            transform: activeSection === section.id ? 'scale(1.5)' : 'scale(1)',
            transition: 'all 0.3s',
            cursor: 'pointer',
            display: 'block'
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => (
  <section className="hero" id="home" style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr', paddingTop: '5rem', position: 'relative', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '55vw', height: '110vh', background: 'var(--steel)', clipPath: 'polygon(12% 0, 100% 0, 100% 100%, 0% 100%)', zIndex: 0 }} />
    <div className="hero-left" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '5rem 3rem 5rem 4rem' }}>
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--rust)', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span style={{ width: '40px', height: '1px', background: 'var(--rust)' }}></span>Software Engineer · Cloud & AI
      </motion.div>
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 1 }} style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(3.5rem, 6.5vw, 5.5rem)', lineHeight: 0.95, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: '2.5rem' }}>
        Bindu Sagar<br /><em style={{ fontStyle: 'italic', color: 'var(--rust)' }}>Singanamalla</em>
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--muted)', maxWidth: '400px', marginBottom: '1rem' }}>
        Software Engineer with 5 years of experience building, testing, deploying, and supporting enterprise applications across cloud services, APIs, distributed systems, automation, CI/CD, and AI integrations.
      </motion.p>
      <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--muted)', marginBottom: '2.5rem' }}>◎ San Jose, CA (Open to relocation)</div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.5 }}>
        <a href="#contact" className="hero-cta" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: 'var(--rust)', color: 'white', textDecoration: 'none', padding: '0.9rem 2rem', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', transition: 'background 0.2s, transform 0.2s', width: 'fit-content' }}>
          Let's Connect &nbsp;→
        </a>
      </motion.div>
    </div>
    <div className="hero-right" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '5rem 4rem 5rem 3rem' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }} style={{ borderLeft: '2px solid rgba(255,255,255,0.2)', paddingLeft: '2rem', marginBottom: '4rem' }}>
        <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontWeight: 300, fontSize: '1.35rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)' }}>
          "Great software is built on clean design, resilient pipelines, and smart automation. It runs silently, performs under pressure, and scales effortlessly."
        </p>
        <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginTop: '1rem' }}>— Bindu Sagar Singanamalla</p>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(255,255,255,0.1)', width: '100%', maxWidth: '360px' }}>
        {[
          { num: '5+', label: 'Years Experience' },
          { num: 'Enterprise', label: 'Proven Scale' },
          { num: 'Cloud & AI', label: 'Core Expertise' },
          { num: 'CI/CD & DevOps', label: 'Resilient Delivery' }
        ].map((stat, i) => (
          <div key={i} style={{ background: 'var(--steel)', padding: '1.25rem 1.5rem' }}>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.65rem', fontWeight: 300, color: 'white', lineHeight: 1 }}>{stat.num}</div>
            <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginTop: '0.4rem' }}>{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

const Philosophy = () => (
  <section className="philosophy" id="philosophy" style={{ background: 'var(--ink)', color: 'var(--cream)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start', padding: '7rem 4rem' }}>
    <div>
      <div className="section-label" style={{ color: 'var(--rust)' }}>Engineering Philosophy</div>
      <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.05, color: 'var(--cream)', marginBottom: '2rem' }}>Engineering as a<br /><em style={{ fontStyle: 'italic', color: 'var(--rust)' }}>Catalyst for Scale</em></h2>
      <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.6)', marginTop: '2rem' }}>
        I believe in engineering software that is robust, measurable, and intelligent. By blending classic distributed patterns, automated delivery, and modern AI capability, I build systems that perform under load and scale seamlessly.
      </p>
    </div>
    <div className="philosophy-pillars">
      {[
        { num: '01', title: "Cloud Native & Scalable", desc: "Designing and building high-throughput, low-latency microservices with Spring Boot, Node.js, and event-driven architectures using Apache Kafka." },
        { num: '02', title: "Robust DevOps & CI/CD", desc: "Owning the lifecycle from source code to production using Docker, Kubernetes, and automated CI/CD pipelines (GitHub Actions, Jenkins) to minimize deployment overhead." },
        { num: '03', title: "Proactive Observability", desc: "Implementing end-to-end monitoring and SLA management using Prometheus, Grafana, CloudWatch, and ELK Stack to resolve production incidents before they impact customers." },
        { num: '04', title: "AI Integrations & RAG", desc: "Leveraging large language models, LangChain, embeddings, and prompt workflows to build intelligent chatbot interfaces, semantic search, and automation over knowledge databases." }
      ].map((item, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }} className="pillar" style={{ padding: '1.75rem 0', borderBottom: '0.5px solid rgba(245,240,232,0.1)', display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '1.5rem', alignItems: 'start', ...(i === 0 ? { borderTop: '0.5px solid rgba(245,240,232,0.1)' } : {}) }}>
          <div className="pillar-num" style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', color: 'var(--rust)', paddingTop: '0.25rem' }}>{item.num}</div>
          <div>
            <div className="pillar-title" style={{ fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--cream)', marginBottom: '0.4rem' }}>{item.title}</div>
            <p className="pillar-desc" style={{ fontSize: '0.85rem', lineHeight: 1.7, color: 'rgba(245,240,232,0.5)' }}>{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const TechStack = () => (
  <section className="section" id="stack" style={{ background: 'var(--section-alt)', padding: '7rem 4rem' }}>
    <div className="container">
      <div className="section-label">Skills & Technologies</div>
      <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '3rem' }}>Technical <em style={{ fontStyle: 'italic', color: 'var(--rust)' }}>Arsenal</em></h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1px', background: 'var(--border)', border: '0.5px solid var(--border)' }}>
        {stack.map((cat, index) => (
          <motion.div key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} style={{ background: 'var(--card-bg)', padding: '2.5rem' }}>
            <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--rust)', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '0.5px solid var(--border)' }}>{cat.category}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {cat.items.map((item, i) => (
                <span key={i} style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', padding: '0.35rem 0.65rem', border: '0.5px solid var(--border)', color: 'var(--steel)', letterSpacing: '0.05em' }}>{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CaseStudies = () => (
  <section className="section" id="impact" style={{ background: 'var(--cream)', padding: '7rem 4rem' }}>
    <div className="container">
      <div className="section-label">Work & Achievements</div>
      <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>Impact <em style={{ fontStyle: 'italic', color: 'var(--rust)' }}>Highlights</em></h2>
      <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--muted)', maxWidth: '480px', marginBottom: '4rem' }}>Delivering value through architectural excellence across global industries.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {cases.map((item, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} style={{ border: '0.5px solid var(--border)', padding: '2.5rem', position: 'relative', overflow: 'hidden', background: 'var(--card-bg)' }} whileHover={{ borderColor: 'rgba(192,75,42,0.3)', transform: 'translateY(-4px)' }}>
            <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--rust)', marginBottom: '0.75rem' }}>{item.company}</div>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 400, lineHeight: 1.2, color: 'var(--ink)', marginBottom: '1.25rem' }}>{item.title}</h3>
            <ul style={{ listStyle: 'none', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.55rem', padding: 0 }}>
              {item.impact.map((point, i) => (
                <li key={i} style={{ fontSize: '0.82rem', lineHeight: 1.65, color: 'var(--muted)', paddingLeft: '1.2rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--rust)' }}>→</span>{point}
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>{item.tags.map((tag, i) => (<span key={i} style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.58rem', letterSpacing: '0.08em', padding: '0.25rem 0.5rem', background: 'var(--section-alt)', color: 'var(--steel)' }}>{tag}</span>))}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section className="section" id="experience" style={{ background: 'var(--steel)', color: 'var(--cream)', padding: '7rem 4rem' }}>
    <div className="container">
      <div className="section-label">Career Timeline</div>
      <h2 style={{ color: 'var(--cream)', marginBottom: '4rem' }}>Professional <em style={{ fontStyle: 'italic', color: 'var(--rust-light)' }}>Journey</em></h2>
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', left: '0', top: '0', bottom: '0', width: '0.5px', background: 'rgba(245,240,232,0.1)' }} />
        {experiences.map((exp, index) => (
          <motion.div key={index} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.6 }} style={{ paddingLeft: '2.5rem', paddingBottom: '3.5rem', position: 'relative' }}>
            <div style={{ position: 'absolute', left: '-3px', top: '0.5rem', width: '7px', height: '7px', borderRadius: '50%', background: 'var(--rust)' }} />
            <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--rust)', marginBottom: '0.75rem' }}>{exp.period}</div>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.55rem', fontWeight: 400, color: 'var(--cream)', marginBottom: '0.3rem' }}>{exp.role}</div>
            <div style={{ fontSize: '0.72rem', color: 'rgba(245,240,232,0.45)', marginBottom: '1rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{exp.org}</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '620px', padding: 0 }}>
              {exp.bullets.map((bullet, i) => (
                <li key={i} style={{ fontSize: '0.85rem', lineHeight: 1.7, color: 'rgba(245,240,232,0.55)', paddingLeft: '1.2rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--rust)' }}>—</span>{bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Credentials = () => (
  <section className="section" id="credentials" style={{ background: 'var(--ink)', padding: '7rem 4rem' }}>
    <div className="container">
      <div className="section-label" style={{ color: 'var(--rust)' }}>Education & Highlights</div>
      <h2 style={{ color: 'var(--cream)', marginBottom: '4rem' }}>Academic & <em style={{ fontStyle: 'italic', color: 'var(--rust-light)' }}>Technical Focus</em></h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {credentials.map((cert, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="cert-card" style={{ border: '0.5px solid rgba(245,240,232,0.1)', padding: '2rem', background: 'rgba(255,255,255,0.02)', transition: 'all 0.3s' }}>
            <div className="cert-icon" style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--rust)', marginBottom: '1rem' }}>{cert.icon}</div>
            <div className="cert-name" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.25rem', fontWeight: 400, color: 'var(--cream)', lineHeight: 1.35, marginBottom: '0.6rem' }}>{cert.name}</div>
            <div className="cert-body" style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.35)', lineHeight: 1.8 }}>{cert.body}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <div id="contact" style={{ background: 'var(--rust)', padding: '7rem 4rem', display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: '4rem' }}>
    <div>
      <h2 className="cta-headline" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.05, color: 'white' }}>Let's build something<br /><em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.5)' }}>exceptional</em>.</h2>
      <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', marginTop: '1.5rem', maxWidth: '400px' }}>Available for full-time Software Engineer opportunities. Based in San Jose, CA — open to relocation and hybrid/remote roles.</p>
    </div>
    <div className="cta-links" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-end' }}>
      {[
        { label: '✉ bindusagarsinganamalla@gmail.com', href: 'mailto:bindusagarsinganamalla@gmail.com' },
        { label: 'in LinkedIn /bindusagarsinganamalla', href: 'https://www.linkedin.com/in/bindusagarsinganamalla' },
        { label: '✆ +1 (913) 238-4643', href: 'tel:+19132384643' }
      ].map((link, i) => (
        <motion.a key={i} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1 }} className="cta-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', color: 'white', textDecoration: 'none', fontFamily: 'DM Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.7, padding: '0.65rem 1rem', border: '0.5px solid rgba(255,255,255,0.3)', minWidth: '260px', justifyContent: 'center', transition: 'all 0.2s' }} whileHover={{ opacity: 1, background: 'rgba(255,255,255,0.1)' }}>
          {link.label}
        </motion.a>
      ))}
    </div>
  </div>
);

// --- MAIN APP ---

function App() {
  return (
    <div className="app">
      <Navbar />
      <Breadcrumbs />
      <main>
        <Hero />
        <Philosophy />
        <TechStack />
        <CaseStudies />
        <Experience />
        <Credentials />
        <Contact />
      </main>
      <footer style={{ background: 'var(--ink)', padding: '1.5rem 4rem', display: 'flex', alignItems: 'center', justifyBetween: 'space-between', borderTop: '0.5px solid rgba(245,240,232,0.08)', justifyContent: 'space-between' }}>
        <div className="footer-copy" style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.12em', color: 'rgba(245,240,232,0.3)' }}>© 2026 Bindu Sagar Singanamalla. All rights reserved.</div>
        <div className="footer-copy" style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.12em', color: 'rgba(245,240,232,0.3)' }}>San Jose, CA · Software Engineering, Cloud & AI Integrations</div>
      </footer>
    </div>
  );
}

export default App;
