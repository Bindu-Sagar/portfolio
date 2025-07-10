const projectsData = [
  {
    id: 1,
    title: "Enterprise Claims Automation Platform",
    role: "Java Full Stack Developer",
    client: "Allstate, Kansas",
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
    client: "Zensar Technologies, India",
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
  }
];

export default projectsData;
