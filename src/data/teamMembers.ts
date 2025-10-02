import type { TeamMember } from '../models/TeamMember';

export const teamMembers: TeamMember[] = [
  {
    id: 'sam-katevatis',
    name: 'Sam Katevatis',
    role: 'Full Stack Developer and Designer',
    bio: 'Sam is a full stack developer speializing in designing beautiful UI and building user friendly backends. He has experience designing and maintaining CISCO networking devices and web servers.',
    skills: ['Rust Development', 'JS/TS Development', 'Network Security', 'Python', 'Project Management', 'Docker', 'Interface Design'],
    socialLinks: {
      website: 'https://portfoliio-psi.vercel.app/home',
      github: 'https://github.com/samarinara',
      bluesky: 'https://samarinara.bsky.social',
    },
    joinDate: new Date('2023-09-01'),
    specializations: ['Web Application Development', 'Network Security', 'Backend Server Development'],
    quote: "Why would you touch that? It was working."
  },
  {
    id: 'august-lam',
    name: 'August Lam',
    role: 'Student',
    bio: 'August is a expert at over exerting her calender events and plans. Superb at hosting and planning meetings (totally!). Has experience and learning Java, Python, front-end (tiny bit), fullstack(learning), bashscript, and terminal commands.',
    skills: ['java', 'python', 'project management', 'multilangual'],
    socialLinks: {
      github: 'https://github.com/Auggie0w0',
      website: 'https://auggiepage.vercel.app/',
    },
    joinDate: new Date('2023-09-01'),
    specializations: ['mhmmmmm'],
     quote: "tbpondered upon"
  },
  {
    id: 'aaron-ashclarke',
    name: 'Aaron Ashclarke',
    role: 'Programmer and Cyber Security Specialist',
    bio: 'Aaron is an experience programmer with skills in Java and Python.',
    skills: ['Java', 'Python', 'Git'],
    socialLinks: {
      github: 'https://github.com/aaron-ashclarke',
    },
    joinDate: new Date('2025-4-11'),
    specializations: ['Blue Team', 'Programming', 'Problem Solving'],
    quote: "We don't do things because they are easy... We do them because they are hard."
  },
  {
    id: 'olivia-zhao',
    name: 'Olivia Zhao',
    role: 'Student',
    bio: 'I hope I make it out of here',
    skills: ['sleeping'],
    socialLinks: {
      github: 'https://github.com/oz-7',
    },
    joinDate: new Date('2025-9-01'),
    specializations: ['n/a'],
    quote: "blub blub blub"
  },
  {
    id: "Ben Kerr",
    name: "Benjamin Kerr",
    role: "Networking & Electronics Specialist",
    bio: "Ben is self-taught in hacking and CAD and is now building laptops, SBCs and other cool projects. He is also an expert in CISCO networking.",
    skills: [
      "CAD",
      "3D Printing",
      "System Penetration",
      "Ballet and Jazz dance",
      "PCB design",
      "Laptop construction",

    ],
    socialLinks: {
      github: "https://github.com/Benjamin-kerr",
      website: "https://Benswork.ca",
      instagram: "https://www.instagram.com/benjamink1000?igsh=aTl6d3dmdmp1cnVs&utm_source=qr"
    },
    joinDate: new Date("2024-09-15"),
    specializations: [
      "Network Defence",
      "System Penetration",
      "Electronics Development",
    ],
    quote: "Any sufficiently advanced technology is indistinguishable from magic - Arthur C. Clark."
  },
  {
    id: 'steven-su',
    name: 'Steven Su',
    role: 'Engineer-In-Training',
    bio: 'Hi! Some of my interests include: Music, Swimming, Cybersec, CAD, and MIDI controllers, also student council manga',
    skills: ['n/a'],
    socialLinks: {
      github: 'https://github.com/Pandass117',
    },
    joinDate: new Date('2025-04-11'),
    specializations: ['CAD', 'Windows Server', 'Electrical'],
    quote: "Creamy"
  },
];