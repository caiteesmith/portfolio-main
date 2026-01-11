export const PROJECTS = [
  {
    id: "photo-ops-suite",
    title: "Photo Ops Suite",
    org: "Caitee Smith Photography",
    summary:
      "A suite of wedding photographer-focused planning tools built with Python & Streamlit to help users create realistic timelines, plan around sunset and golden hour, and estimate post-processing workload.",
    href: "https://photo-ops-suite.streamlit.app/",
    code: "https://github.com/caiteesmith/photo-ops-suite",
    tags: [
      "Python",
      "Streamlit",
      "Product Design",
      "UX/UI",
      "Time-based calculations",
      "API Integration",
      "Geocoding",
      "Pandas"
    ],
    img: "images/projects/photo-ops-suite.webp",
    impact: [
      "Designed a planning tool suite for real-world wedding photography workflows",
      "Built a timeline engine that accounts for coverage limits, travel, buffers, and more",
      "Implemented a location-aware sunset planner using geocoding and external APIs",
      "Added a post-processing workload estimator to support delivery timelines"
    ]
  },
  {
    id: "chatbots",
    title: "AI/ML Chatbot Containerization",
    org: "Valley Bank",
    summary:
      "Modernizing internal DataRobot AI chatbots by containerizing services with Docker Compose and preparing them for Kubernetes deployment.",
    href: null,
    code: null,
    tags: [
      "Docker",
      "Docker Compose",
      "DataRobot",
      "Streamlit",
      "Python",
      "AI/ML",
      "Containerization",
      "Kubernetes (planned)"
    ],
    impact: [
      "Containerized multiple Streamlit applications for reproducible environments",
      "Designed Docker Compose architecture to streamline local deployment",
      "Improved reliability and portability across engineering teams",
      "Laid groundwork for internal Kubernetes hosting and orchestration",
      "Collaborated cross-team to align services with existing CI/CD and infrastructure"
    ]
  },
  {
    id: "hit",
    title: "Health of IT (HIT) Microservices",
    org: "Valley Bank",
    summary:
      ".NET 8 Azure Functions platform for real-time product health, notifications, and a Vue.js dashboard; Cosmos DB + Service Bus; Terraform + Azure Pipelines.",
    href: null,
    code: null,
    tags: [
      ".NET 8",
      "C#",
      "Azure Functions",
      "Cosmos DB",
      "Azure Service Bus",
      "Terraform",
      "Azure Pipelines",
      "CI/CD",
      "OpenAPI/Swagger",
      "NUnit",
      "Moq",
      "Logging & Observability",
      "Vue.js",
      "Agile/Scrum"
    ],
    impact: [
      "Owned 8+ .NET 8 services across EXP/PRC/SYS layers",
      "Implemented structured logging for cross-service traceability",
      "Automated deployments with Terraform and Azure Pipelines",
      "Maintained strong unit test coverage (NUnit/Moq) and clear API contracts (OpenAPI)"
    ]
  },
  {
    id: "pet",
    title: "Pet Adoption Prediction Dashboard",
    org: "Western Governors University",
    summary:
      "Streamlit dashboard with ML predictions for shelter adoption likelihood.",
    href: "https://huggingface.co/spaces/caiteesmith/pet-adoption-prediction-dash",
    code: "https://github.com/caiteesmith/c964-pet-adoption-prediction-dash",
    tags: [
      "Python",
      "Machine Learning",
      "Streamlit",
      "Altair",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Google Colab",
      "Jupyter Notebooks",
      "Hugging Face Spaces"
    ],
    img: "/images/projects/pet-adoption.webp",
    impact: [
      "Built interactive Streamlit dashboard for exploring shelter data",
      "Implemented ML pipeline (feature engineering and model evaluation)",
      "Clear visualizations with Altair; reproducible notebooks and code",
      "Prototyped and trained models in Google Colab",
      "Deployed interactive app via Hugging Face Spaces with GitHub CI/CD"
    ]
  },
  {
    id: "thorlabs",
    title: "Thorlabs Toolkit",
    org: "Thorlabs",
    summary:
      "Optical calculator iOS and Android app revamp with improved UI and modules.",
    href: "https://apps.apple.com/us/app/thorlabs-toolkit/id6475776756",
    code: "https://github.com/caiteesmith/ThorlabsToolkit-iOS",
    tags: [
      "Swift",
      "Java",
      "Xcode",
      "Android Studio",
      "Mobile",
      "iOS",
      "Android",
      "UI/UX",
      "Accessibility",
      "App Store",
      "Google Play Store"
    ],
    img: "/images/projects/thorlabs-toolkit.webp",
    impact: [
      "Refactored modules and modernized UI for clarity and speed",
      "Shipped updates to both App Store and Google Play",
      "Improved UX consistency and accessibility across calculators"
    ]
  },
  {
    id: "feedback",
    title: "Mobile Feedback Form",
    org: "Thorlabs",
    summary:
      "Mobile-friendly product feedback form with validation, to be embedded within the Thorlabs Toolkit mobile app.",
    href: "https://thorlabs-toolkit-feedback.netlify.app/",
    code: "https://github.com/caiteesmith/Mobile-Feedback-Form",
    tags: [
      "HTML",
      "CSS",
      "Vanilla JS",
      "Netlify",
      "Form Validation",
      "Mobile-first",
      "UX/UI"
    ],
    img: "/images/projects/feedback.webp",
    impact: [
      "Lightweight, mobile-first form embedded via WKWebView",
      "Client-side validation and clean error states",
      "Zero-ops hosting/deploy previews with Netlify"
    ]
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    org: "Personal",
    summary:
      "React + Vite app with Tailwind CSS, Framer Motion, and Lucide React icons.",
    href: "https://caiteesmith.com/",
    code: "https://github.com/caiteesmith/portfolio-main",
    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
      "Responsive Design",
      "Accessibility",
      "Dark Mode",
      "Netlify"
    ],
    img: "/images/projects/portfolio-mat.webp",
    impact: [
      "Migrated from static Bootstrap to React, Vite, and Tailwind",
      "Accessible components, keyboard-friendly nav, dark mode",
      "Animated backgrounds and performant motion with Framer Motion"
    ]
  },
  {
    id: "cymulate",
    title: "Cymulate Landing Page",
    org: "HIPB2B",
    summary:
      "Responsive landing page for a whitepaper with PHP form handling.",
    href: "https://github.com/caiteesmith/Cymulate-Landing-Page",
    code: "https://github.com/caiteesmith/Cymulate-Landing-Page",
    tags: [
      "HTML",
      "Bootstrap CSS",
      "PHP",
      "Form Validation",
      "UX/UI",
      "Responsive Design"
    ],
    img: "/images/projects/cymulate-mat.webp",
    impact: [
      "Responsive layout tailored for lead-gen campaigns",
      "PHP server-side validation and clean success/error UX",
      "Simple, high-contrast typography for readability"
    ]
  }
];