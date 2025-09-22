import type { TeamMember } from '../models/TeamMember';

/**
 * Mock data for team members
 * This data will be used for development and testing purposes
 */
export const teamMembers: TeamMember[] = [
  {
    id: 'alice-smith',
    name: 'Alice Smith',
    role: 'Cybersecurity Specialist',
    bio: 'Alice specializes in penetration testing and vulnerability assessment with over 5 years of experience in the field. She has contributed to several open-source security tools and regularly participates in CTF competitions.',
    skills: ['Penetration Testing', 'Vulnerability Assessment', 'Network Security', 'Python', 'Bash'],
    socialLinks: {
      github: 'https://github.com/alice-security',
      linkedin: 'https://linkedin.com/in/alice-smith',
      twitter: 'https://twitter.com/alice_security',
    },
    joinDate: new Date('2021-03-15'),
    specializations: ['Web Application Security', 'Network Security', 'Security Training'],
    quote: "The only truly secure system is one that's powered off and sealed in a lead-lined room with armed guards - and even then I have my doubts."
  },
  {
    id: 'bob-johnson',
    name: 'Bob Johnson',
    role: 'Full-Stack Developer',
    bio: 'Bob is a full-stack developer with expertise in React, Node.js, and TypeScript. He focuses on building secure and scalable web applications with a strong emphasis on code quality and testing.',
    skills: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'Jest'],
    socialLinks: {
      github: 'https://github.com/bob-dev',
      website: 'https://bob-johnson.dev',
    },
    joinDate: new Date('2020-11-02'),
    specializations: ['Frontend Architecture', 'API Design', 'Performance Optimization'],
    quote: "Good code is its own best documentation. All my code is perfect, so I don't need comments."
  },
  {
    id: 'carol-williams',
    name: 'Carol Williams',
    role: 'Systems Architect',
    bio: 'Carol designs and implements complex distributed systems with a focus on reliability and security. She has extensive experience with cloud infrastructure and containerization technologies.',
    skills: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'Go'],
    socialLinks: {
      github: 'https://github.com/carol-sys',
      linkedin: 'https://linkedin.com/in/carol-williams',
    },
    joinDate: new Date('2019-07-22'),
    specializations: ['Cloud Architecture', 'Infrastructure as Code', 'Microservices'],
    quote: "There is no cloud, it's just someone else's computer. My job is to make sure that computer is on fire... in a controlled way."
  },
  {
    id: 'dave-brown',
    name: 'Dave Brown',
    role: 'Security Researcher',
    bio: 'Dave focuses on discovering and analyzing new security vulnerabilities. His research has been published in several academic journals and he regularly presents at security conferences.',
    skills: ['Reverse Engineering', 'Malware Analysis', 'C/C++', 'Assembly', 'Fuzzing'],
    socialLinks: {
      github: 'https://github.com/dave-security',
      twitter: 'https://twitter.com/dave_research',
      website: 'https://dave-brown.net',
    },
    joinDate: new Date('2020-02-10'),
    specializations: ['Binary Analysis', 'Exploit Development', 'Security Research'],
    quote: "In God we trust. All others must bring data. And even then, I'll probably run my own query."
  },
  {
    id: 'eve-miller',
    name: 'Eve Miller',
    role: 'Data Scientist',
    bio: 'Eve specializes in applying machine learning techniques to security problems. She works on anomaly detection systems and automated threat intelligence analysis.',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Data Analysis', 'Statistics'],
    socialLinks: {
      github: 'https://github.com/eve-data',
      linkedin: 'https://linkedin.com/in/eve-miller',
    },
    joinDate: new Date('2021-09-05'),
    specializations: ['Machine Learning for Security', 'Anomaly Detection', 'Threat Intelligence'],
    quote: "The goal is to turn data into information, and information into insight. And occasionally, into a really cool graph."
  }
];