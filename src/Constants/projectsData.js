const projectsData = [
  {
    id: 1,
    title: "Enterprise Claims Automation Platform",
    role: "Java Full Stack Developer",
    client: "Bank of America, Kansas",
    duration: "Nov 2024 – Present",
    responsibilities: [
      "Optimized React components with memoization and lazy loading, reducing page load time by 50%.",
      "Built microservices using Spring Boot, REST APIs, and Kafka for fault-tolerant inter-service communication.",
      "Implemented JWT-based authorization with asymmetric encryption (RS256), reducing unauthorized access by 35%.",
      "Configured Kubernetes networking (Ingress, LoadBalancer, Service Mesh) for better inter-service API performance.",
      "Used Spring Data JPA with caching and query optimization to improve database response times.",
      "Integrated MongoDB with aggregation pipelines to reduce data read/write latency by 35%.",
      "Improved unit testing efficiency by mocking dependencies using Mockito, reducing integration test time by 40%."
    ]
  },
  {
    id: 2,
    title: "Microservices Development and DevOps",
    role: "Java Full Stack Developer",
    client: "Accenture, India",
    duration: "Jul 2020 – Jun 2023",
    responsibilities: [
      "Created reusable custom React hooks to encapsulate complex DOM logic and improve maintainability.",
      "Built RESTful APIs using Spring MVC and WebFlux for clean and scalable service communication.",
      "Developed Spring Boot microservices to improve concurrency and response time across applications.",
      "Enabled secure data transmission via SSL across services, mitigating MITM attacks.",
      "Built CI/CD pipelines with Docker for automated deployments, reducing release errors.",
      "Implemented OAuth2.0 authentication with Keycloak and Spring Security for 100K+ users with RBAC and SSO.",
      "Used Hibernate ORM with annotations and HQL to manage persistence using Spring's DAO layer.",
      "Integrated RabbitMQ to improve message delivery reliability by 50%.",
      "Provisioned infrastructure using AWS CloudFormation, reducing config errors by 50%."
    ]
  },
  {
    id: 3,
    title: "My Wallet - Expense Tracking App",
    role: "Full Stack Developer",
    client: "Personal Project",
    duration: "Apr 2024 – Jul 2024",
    responsibilities: [
      "Developed a full-stack expense tracking web application using Spring Boot, React.js, and MySQL for seamless financial management.",
      "Implemented multi-role authentication (user & admin) with secure sign-in, sign-up, password reset, and email verification.",
      "Built user dashboards with transaction management, recurring transactions tracking, monthly summaries, and budget statistics.",
      "Created admin features for managing categories, users, and transactions with search, filter, and pagination.",
      "Configured email services and database integrations for automated notifications and secure data persistence.",
      "Designed responsive UI with React.js for intuitive navigation and user experience.",
      "Deployed backend APIs with Spring Boot ensuring efficient CRUD operations and database consistency."
    ]
  },
  {
    id: 4,
    title: "CineVision App - Online Cinema Ticketing System",
    role: "Full Stack Developer",
    client: "Personal Project",
    duration: "Jan 2024 – Apr 2024",
    responsibilities: [
      "Developed an online cinema ticket booking system using Java, Spring Boot, Spring Cloud, and React.",
      "Designed microservice architecture with 5 services (Movie, User, Email, Eureka Server, API Gateway) using Spring Cloud.",
      "Implemented service discovery via Netflix Eureka Server and request routing with Spring Cloud Gateway.",
      "Used PostgreSQL for Movie Service and MongoDB for User Service, with Redis caching for performance optimization.",
      "Implemented secure authentication and authorization using Spring Security with JWT tokens.",
      "Integrated asynchronous messaging with Apache Kafka for communication between services (Movie ↔ Email).",
      "Configured Docker Compose for PostgreSQL, MongoDB, Kafka, and Zipkin containerized environments.",
      "Enabled distributed tracing with Zipkin and Sleuth, and applied Resilience4j Circuit Breaker for fault tolerance.",
      "Built a React.js frontend with Redux for state management, Axios for API calls, and Bootstrap for responsive UI.",
      "Implemented ticket booking workflow including movie selection, seat reservation, and secure payment integration."
    ]
  },
  {
    id: 5,
    title: "Spring Boot AI Chatbot",
    role: "Full Stack Developer",
    client: "Personal Project",
    duration: "Aug 2024 – Oct 2024",
    responsibilities: [
      "Built an AI-powered personal assistant web app using Spring Boot, Spring AI, React, and OpenAI API.",
      "Developed backend with Spring Boot and Spring AI for natural language processing and intelligent responses.",
      "Created a responsive React frontend for seamless chatbot interaction with Axios for API communication.",
      "Implemented REST API endpoints for both string-based and JSON-based AI queries.",
      "Integrated Docker and Docker Compose for containerized deployment of both frontend and backend.",
      "Configured Nginx for serving the React frontend in production environments.",
      "Developed secure environment variable management for OpenAI API key using .env configurations.",
      "Enabled flexible deployment options (Docker, local, cloud) with CI/CD-ready architecture.",
      "Enhanced developer experience with modular project structure and customizable chatbot UI."
    ]
  },
  {
    id: 6,
    title: "Online Banking System - Frontend",
    role: "Frontend Developer",
    client: "Personal Project",
    duration: "Mar 2024 – May 2024",
    responsibilities: [
      "Developed a single-page online banking frontend using React, Redux, and Material UI for a seamless user experience.",
      "Implemented Redux Store integration across all components to ensure real-time state synchronization.",
      "Built authentication features including user registration, login, and secure session management with JWT and cookies.",
      "Developed banking workflows including account creation, money transfers, deposits, withdrawals, and bill payments.",
      "Integrated dynamic charts to visualize account flows and transaction histories.",
      "Implemented routing with React Router DOM for smooth navigation between views.",
      "Utilized Redux Thunk for handling asynchronous API requests to the Spring Boot backend.",
      "Improved UI consistency and responsiveness using Material UI components.",
      "Resolved backend communication challenges such as CORS and API request handling.",
      "Enhanced maintainability and scalability by modularizing components and following React best practices."
    ]
  }
];

export default projectsData;
