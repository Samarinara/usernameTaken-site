import type { Project } from '../models/Project';

/**
 * Mock data for projects
 * This data will be used for development and testing purposes
 */
export const projects: Project[] = [
  {
    id: 'secure-vault',
    title: 'Secure Vault',
    description: 'End-to-end encrypted password manager with zero-knowledge architecture',
    longDescription: 'Secure Vault is a password management solution that prioritizes user privacy and security. Built with a zero-knowledge architecture, all data is encrypted client-side before being stored in the cloud. The application features strong encryption algorithms, secure password generation, and cross-platform synchronization while ensuring that even the service provider cannot access user data.',
    technologies: ['TypeScript', 'React', 'Node.js', 'AES-256', 'Argon2', 'IndexedDB'],
    category: 'cybersecurity',
    status: 'completed',
    startDate: new Date('2022-03-15'),
    endDate: new Date('2022-11-20'),
    teamMembers: ['alice-smith', 'bob-johnson'],
    links: {
      github: 'https://github.com/usernameTaken/secure-vault',
      demo: 'https://secure-vault-demo.usernameTaken.dev',
      documentation: 'https://docs.secure-vault.usernameTaken.dev'
    },
    images: [
      '/assets/projects/secure-vault-1.webp',
      '/assets/projects/secure-vault-2.webp',
      '/assets/projects/secure-vault-3.webp'
    ],
    achievements: [
      'Featured in Cybersecurity Monthly magazine',
      'Over 10,000 active users',
      'Zero security breaches since launch'
    ]
  },
  {
    id: 'network-sentinel',
    title: 'Network Sentinel',
    description: 'Real-time network traffic analysis tool with ML-powered threat detection',
    longDescription: 'Network Sentinel is an advanced network monitoring solution that combines traditional traffic analysis with machine learning algorithms to detect anomalies and potential security threats. The system processes network packets in real-time, creating visualizations and alerts for suspicious activities while maintaining a comprehensive log for forensic analysis.',
    technologies: ['Python', 'TensorFlow', 'Elasticsearch', 'Kibana', 'pcap', 'Docker'],
    category: 'cybersecurity',
    status: 'in-progress',
    startDate: new Date('2023-01-10'),
    teamMembers: ['alice-smith', 'dave-brown', 'eve-miller'],
    links: {
      github: 'https://github.com/usernameTaken/network-sentinel',
      documentation: 'https://docs.network-sentinel.usernameTaken.dev'
    },
    images: [
      '/assets/projects/network-sentinel-1.webp',
      '/assets/projects/network-sentinel-2.webp'
    ],
    achievements: [
      'Successfully detected 98.7% of simulated attacks in testing',
      'Presented at DefCon 2023'
    ]
  },
  {
    id: 'distributed-compiler',
    title: 'Distributed Compiler',
    description: 'High-performance distributed compilation system for large codebases',
    longDescription: 'The Distributed Compiler is designed to accelerate build times for large software projects by distributing compilation tasks across multiple machines. It features intelligent caching, dependency analysis, and workload distribution algorithms that significantly reduce compilation times for C++, Rust, and other compiled languages. The system is particularly useful for continuous integration environments and large development teams.',
    technologies: ['Rust', 'gRPC', 'Redis', 'Docker', 'Kubernetes'],
    category: 'computer-science',
    status: 'completed',
    startDate: new Date('2021-06-05'),
    endDate: new Date('2022-08-15'),
    teamMembers: ['carol-williams', 'bob-johnson'],
    links: {
      github: 'https://github.com/usernameTaken/distributed-compiler',
      documentation: 'https://docs.distributed-compiler.usernameTaken.dev',
      paper: 'https://arxiv.org/abs/2023.12345'
    },
    images: [
      '/assets/projects/distributed-compiler-1.webp',
      '/assets/projects/distributed-compiler-2.webp'
    ],
    achievements: [
      'Reduced build times by 78% on average',
      'Open-sourced with 1,200+ GitHub stars',
      'Published research paper on the architecture'
    ]
  },
  {
    id: 'quantum-algorithms',
    title: 'Quantum Algorithm Simulator',
    description: 'Educational platform for simulating and visualizing quantum algorithms',
    longDescription: 'The Quantum Algorithm Simulator is an educational tool designed to help students and researchers understand quantum computing concepts. It provides visual representations of quantum states, gates, and algorithms, allowing users to build and simulate quantum circuits step by step. The platform includes tutorials on key algorithms like Shor\'s, Grover\'s, and quantum teleportation.',
    technologies: ['TypeScript', 'React', 'Three.js', 'WebAssembly', 'Python'],
    category: 'computer-science',
    status: 'completed',
    startDate: new Date('2022-09-01'),
    endDate: new Date('2023-05-20'),
    teamMembers: ['eve-miller', 'bob-johnson'],
    links: {
      github: 'https://github.com/usernameTaken/quantum-sim',
      demo: 'https://quantum-sim.usernameTaken.dev',
      documentation: 'https://docs.quantum-sim.usernameTaken.dev'
    },
    images: [
      '/assets/projects/quantum-sim-1.webp',
      '/assets/projects/quantum-sim-2.webp',
      '/assets/projects/quantum-sim-3.webp'
    ],
    achievements: [
      'Used in 15+ university courses',
      'Featured in "Quantum Computing Today" newsletter',
      'Over 50,000 simulations run by users'
    ]
  },
  {
    id: 'blockchain-audit',
    title: 'Blockchain Security Audit Tools',
    description: 'Suite of tools for auditing smart contracts and blockchain applications',
    longDescription: 'The Blockchain Security Audit Tools suite provides comprehensive security analysis for smart contracts and decentralized applications. It combines static analysis, symbolic execution, and formal verification techniques to identify vulnerabilities and potential exploits in blockchain code. The suite supports Ethereum, Solana, and other popular blockchain platforms, helping developers create more secure decentralized systems.',
    technologies: ['Solidity', 'Rust', 'TypeScript', 'Z3 Theorem Prover', 'Mythril'],
    category: 'cybersecurity',
    status: 'in-progress',
    startDate: new Date('2023-02-15'),
    teamMembers: ['alice-smith', 'dave-brown'],
    links: {
      github: 'https://github.com/usernameTaken/blockchain-audit',
      documentation: 'https://docs.blockchain-audit.usernameTaken.dev'
    },
    images: [
      '/assets/projects/blockchain-audit-1.webp'
    ],
    achievements: [
      'Identified critical vulnerabilities in 3 major DeFi protocols',
      'Prevented potential loss of over $2M in assets'
    ]
  },
  {
    id: 'cloud-optimizer',
    title: 'Cloud Resource Optimizer',
    description: 'AI-powered tool for optimizing cloud infrastructure costs and performance',
    longDescription: 'The Cloud Resource Optimizer uses machine learning to analyze cloud infrastructure usage patterns and recommend optimizations for cost, performance, and reliability. It integrates with major cloud providers (AWS, Azure, GCP) to collect metrics, identify inefficiencies, and automatically implement improvements when possible. The system continuously learns from infrastructure changes and adapts its recommendations accordingly.',
    technologies: ['Python', 'TensorFlow', 'AWS SDK', 'Azure SDK', 'GCP SDK', 'Terraform'],
    category: 'computer-science',
    status: 'in-progress',
    startDate: new Date('2023-04-10'),
    teamMembers: ['carol-williams', 'eve-miller'],
    links: {
      github: 'https://github.com/usernameTaken/cloud-optimizer',
      documentation: 'https://docs.cloud-optimizer.usernameTaken.dev'
    },
    images: [
      '/assets/projects/cloud-optimizer-1.webp',
      '/assets/projects/cloud-optimizer-2.webp'
    ],
    achievements: [
      'Average 32% cost reduction for beta users',
      'Improved application performance by 18% on average'
    ]
  },
  {
    id: 'neobrutalist-ui',
    title: 'Neobrutalist UI Framework',
    description: 'Minimalist UI component library inspired by neobrutalist design principles',
    longDescription: 'The Neobrutalist UI Framework is a React component library that embraces the sharp, high-contrast aesthetic of neobrutalist design. It features clean typography, bold geometric shapes, and a focus on usability. The framework is highly customizable while maintaining consistent design principles, making it ideal for projects that want to stand out with a distinctive visual identity.',
    technologies: ['TypeScript', 'React', 'CSS Modules', 'Storybook', 'Jest'],
    category: 'web-development',
    status: 'completed',
    startDate: new Date('2022-11-05'),
    endDate: new Date('2023-03-20'),
    teamMembers: ['bob-johnson'],
    links: {
      github: 'https://github.com/usernameTaken/neobrutalist-ui',
      demo: 'https://neobrutalist-ui.usernameTaken.dev',
      documentation: 'https://docs.neobrutalist-ui.usernameTaken.dev'
    },
    images: [
      '/assets/projects/neobrutalist-ui-1.webp',
      '/assets/projects/neobrutalist-ui-2.webp'
    ],
    achievements: [
      'Used in the redesign of 5+ commercial websites',
      'Featured on Awwwards',
      '2,500+ npm downloads'
    ]
  }
];