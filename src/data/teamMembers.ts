import type { TeamMember } from '../models/TeamMember';

/**
 * Mock data for team members
 * This data will be used for development and testing purposes
 */
export const teamMembers: TeamMember[] = [
  {
    id: 'sam-katevatis',
    name: 'Sam Katevatis',
    role: 'Full Stack Developer',
    bio: 'Sam is a full stack developer speializing in beautiful UI and user friendly backends',
    skills: ['Rust Development', 'JS/TS Development', 'Network Security', 'Python', 'Project Management', 'Docker'],
    socialLinks: {
      website: 'https://portfoliio-psi.vercel.app/home',
      github: 'https://github.com/samarinara',
      bluesky: 'https://samarinara.bsky.social',
    },
    joinDate: new Date('2025-03-15'),
    specializations: ['Web Application Development', 'Network Security', 'Backend Server Development'],
    quote: "Why would you touch that? It was working."
  },
  {
    id: 'aaron-ashclarke',
    name: 'Aaron Ashclarke',
    role: 'Programmer/Cyber Security Specialist',
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