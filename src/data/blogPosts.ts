/**
 * Mock blog post data for _usernameTaken website
 */
import { BlogPost } from '../models/BlogPost';

/**
 * Mock blog posts data
 */
export const blogPosts: BlogPost[] = [
  {
    id: 'securing-web-applications',
    title: 'Securing Modern Web Applications',
    content: `# Securing Modern Web Applications

Web application security is a critical aspect of modern software development. With the increasing number of cyber threats, it's essential to implement robust security measures to protect user data and maintain system integrity.

## Common Security Vulnerabilities

### Cross-Site Scripting (XSS)
XSS attacks occur when malicious scripts are injected into trusted websites. These scripts can access cookies, session tokens, and other sensitive information retained by the browser.

### SQL Injection
SQL injection attacks happen when untrusted data is sent to an interpreter as part of a command or query, tricking the interpreter into executing unintended commands.

### Cross-Site Request Forgery (CSRF)
CSRF attacks force authenticated users to execute unwanted actions on web applications they're currently authenticated with.

## Best Practices for Secure Development

1. **Input Validation**: Always validate and sanitize user inputs
2. **Parameterized Queries**: Use prepared statements for database queries
3. **Content Security Policy**: Implement CSP headers to prevent XSS attacks
4. **HTTPS Everywhere**: Encrypt all data in transit
5. **Authentication & Authorization**: Implement proper user authentication and authorization mechanisms

By following these best practices, developers can significantly reduce the risk of security breaches in their web applications.`,
    excerpt: 'An overview of common web application security vulnerabilities and best practices for secure development.',
    author: 'alex-rodriguez',
    publishDate: new Date('2025-06-10'),
    lastModified: new Date('2025-06-12'),
    tags: ['security', 'web-development', 'best-practices'],
    readTime: 8,
    status: 'published',
    featuredImage: '/assets/blog/security.webp'
  },
  {
    id: 'rust-for-systems',
    title: 'Rust for Systems Programming',
    content: `# Rust for Systems Programming

Rust has emerged as a powerful language for systems programming, offering memory safety without garbage collection and concurrency without data races.

## Why Rust for Systems Programming?

Rust's ownership model ensures memory safety at compile time, eliminating entire classes of bugs that plague C and C++ programs. This makes it an excellent choice for systems programming where performance and safety are critical.

## Key Features

### Ownership and Borrowing
Rust's ownership system manages memory through a set of rules that the compiler checks at compile time. This eliminates the need for garbage collection while preventing memory leaks and segmentation faults.

### Zero-Cost Abstractions
Rust provides high-level abstractions that compile down to efficient low-level code, offering the expressiveness of high-level languages with the performance of low-level languages.

### Fearless Concurrency
Rust's type system and ownership model guarantee thread safety, making concurrent programming much safer and more accessible.

## Real-World Applications

Rust is being used in various systems programming domains:

1. **Operating Systems**: Projects like Redox OS demonstrate Rust's capability in OS development
2. **Embedded Systems**: Rust's predictable performance makes it suitable for embedded programming
3. **WebAssembly**: Rust is one of the leading languages for WebAssembly development
4. **Networking**: High-performance networking tools benefit from Rust's safety and speed

As the ecosystem continues to mature, Rust is becoming an increasingly attractive option for systems programming projects where reliability and performance are paramount.`,
    excerpt: 'Exploring how Rust's unique features make it an excellent choice for systems programming tasks.',
    author: 'maria-chen',
    publishDate: new Date('2025-05-28'),
    lastModified: new Date('2025-05-28'),
    tags: ['rust', 'systems-programming', 'performance'],
    readTime: 10,
    status: 'published',
    featuredImage: '/assets/blog/rust.webp'
  },
  {
    id: 'machine-learning-security',
    title: 'Security Challenges in Machine Learning Systems',
    content: `# Security Challenges in Machine Learning Systems

As machine learning systems become more prevalent in critical applications, their security implications grow increasingly important. This post explores the unique security challenges posed by ML systems and strategies to address them.

## Vulnerability Types

### Adversarial Examples
Carefully crafted inputs designed to cause ML models to make mistakes. For example, subtle modifications to images that cause classification errors.

### Data Poisoning
Attackers may inject malicious data into training datasets to compromise model performance or create backdoors.

### Model Stealing
Techniques to extract or replicate a proprietary model through repeated queries, potentially violating intellectual property or enabling further attacks.

## Defense Strategies

### Robust Training
Training models to be resistant to adversarial examples through techniques like adversarial training and defensive distillation.

### Data Sanitization
Implementing rigorous validation and cleaning procedures for training data to prevent poisoning attacks.

### Model Monitoring
Continuous monitoring of model inputs and outputs to detect potential attacks or anomalous behavior.

## Ethical Considerations

Security in ML systems extends beyond technical measures to ethical considerations:

1. **Transparency**: Making model decisions interpretable and explainable
2. **Privacy**: Protecting sensitive data used in training and inference
3. **Accountability**: Establishing clear responsibility for model outcomes

As ML systems continue to evolve, a proactive approach to security will be essential to ensure these powerful technologies remain trustworthy and beneficial.`,
    excerpt: 'An examination of security vulnerabilities in machine learning systems and strategies for building more robust AI.',
    author: 'james-wilson',
    publishDate: new Date('2025-05-15'),
    lastModified: new Date('2025-05-20'),
    tags: ['machine-learning', 'security', 'ai-ethics'],
    readTime: 12,
    status: 'published',
    featuredImage: '/assets/blog/ml-security.webp'
  },
  {
    id: 'zero-trust-architecture',
    title: 'Implementing Zero Trust Architecture',
    content: `# Implementing Zero Trust Architecture

Zero Trust is a security concept centered on the belief that organizations should not automatically trust anything inside or outside their perimeters and instead must verify everything trying to connect to their systems before granting access.

## Core Principles

### 1. Verify Explicitly
Always authenticate and authorize based on all available data points, including user identity, location, device health, service or workload, data classification, and anomalies.

### 2. Use Least Privileged Access
Limit user access with Just-In-Time and Just-Enough-Access (JIT/JEA), risk-based adaptive policies, and data protection to help secure both data and productivity.

### 3. Assume Breach
Minimize blast radius and segment access. Verify end-to-end encryption and use analytics to get visibility, drive threat detection, and improve defenses.

## Implementation Strategy

Implementing Zero Trust requires a phased approach:

1. **Identify**: Define the protect surface (data, assets, applications, and services)
2. **Map**: Understand how traffic flows to the protect surface
3. **Architect**: Build a Zero Trust architecture starting with a Next-Generation Firewall
4. **Create**: Create Zero Trust policy
5. **Monitor**: Continuously monitor and maintain the network

## Technologies Enabling Zero Trust

Several technologies facilitate Zero Trust implementation:

- **Multi-factor Authentication (MFA)**: Requiring multiple verification methods
- **Micro-segmentation**: Dividing security perimeters into small zones
- **Just-In-Time Access**: Providing just enough access just when needed
- **Continuous Monitoring**: Real-time visibility into users, devices, and applications

Zero Trust is not a single technology but a holistic approach to network security that requires coordination across different security domains.`,
    excerpt: 'A practical guide to implementing Zero Trust security architecture in modern organizations.',
    author: 'alex-rodriguez',
    publishDate: new Date('2025-04-22'),
    lastModified: new Date('2025-04-25'),
    tags: ['zero-trust', 'security', 'network-architecture'],
    readTime: 9,
    status: 'published'
  },
  {
    id: 'quantum-computing-cybersecurity',
    title: 'Quantum Computing and the Future of Cybersecurity',
    content: `# Quantum Computing and the Future of Cybersecurity

Quantum computing represents both a significant threat and opportunity for cybersecurity. As quantum computers become more powerful, they have the potential to break many of the cryptographic systems that secure our digital infrastructure.

## The Quantum Threat

### Breaking Asymmetric Encryption
Quantum computers using Shor's algorithm could potentially break widely used public-key cryptography systems like RSA and ECC by solving the underlying mathematical problems efficiently.

### Timeline Concerns
While large-scale quantum computers capable of breaking current cryptographic systems don't exist yet, the "harvest now, decrypt later" strategy means sensitive data encrypted today could be vulnerable in the future.

## Post-Quantum Cryptography

To address these challenges, researchers are developing quantum-resistant cryptographic algorithms:

1. **Lattice-based Cryptography**: Based on the difficulty of solving certain problems in lattices
2. **Hash-based Cryptography**: Leveraging the security of cryptographic hash functions
3. **Code-based Cryptography**: Using error-correcting codes
4. **Multivariate Cryptography**: Based on the difficulty of solving systems of multivariate equations

## Quantum Cryptography

Beyond post-quantum algorithms, quantum mechanics itself offers new cryptographic possibilities:

### Quantum Key Distribution (QKD)
QKD uses the principles of quantum mechanics to establish secure keys between parties, with the unique property that any eavesdropping attempt can be detected.

## Preparing for the Quantum Future

Organizations should begin preparing for quantum threats through:

- **Crypto Agility**: Designing systems that can quickly transition to new cryptographic algorithms
- **Risk Assessment**: Identifying which systems and data would be most vulnerable to quantum attacks
- **Standards Adoption**: Following NIST and other standards bodies' recommendations for post-quantum cryptography

The quantum revolution in computing necessitates a parallel revolution in cybersecurity approaches and technologies.`,
    excerpt: 'Exploring how quantum computing will transform cybersecurity and the development of quantum-resistant cryptographic methods.',
    author: 'maria-chen',
    publishDate: new Date('2025-03-18'),
    lastModified: new Date('2025-03-20'),
    tags: ['quantum-computing', 'cryptography', 'cybersecurity'],
    readTime: 11,
    status: 'published',
    featuredImage: '/assets/blog/quantum.webp'
  }
];

/**
 * Get published blog posts
 * @returns Array of published blog posts
 */
export const getPublishedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.status === 'published');
};

/**
 * Get blog post by ID
 * @param id Blog post ID
 * @returns Blog post or undefined if not found
 */
export const getPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};