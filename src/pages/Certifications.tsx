import React from 'react';
import Layout from '../components/Layout';
import './Certifications.css';

// Mock certification data - this would normally come from a data file
const certifications = [
  {
    id: '1',
    name: 'Certified Ethical Hacker (CEH)',
    issuer: 'EC-Council',
    recipient: 'John Doe',
    issueDate: new Date('2023-06-15'),
    type: 'certification' as const,
    description: 'Comprehensive ethical hacking and penetration testing certification'
  },
  {
    id: '2',
    name: 'CompTIA Security+',
    issuer: 'CompTIA',
    recipient: 'Jane Smith',
    issueDate: new Date('2023-03-20'),
    type: 'certification' as const,
    description: 'Foundational cybersecurity skills and knowledge certification'
  },
  {
    id: '3',
    name: 'National Cyber League Competition',
    issuer: 'National Cyber League',
    recipient: '_usernameTaken Team',
    issueDate: new Date('2023-11-10'),
    type: 'award' as const,
    description: 'Top 10 finish in national cybersecurity competition'
  }
];

const Certifications: React.FC = () => {
  const certificationsByType = certifications.reduce((acc, cert) => {
    if (!acc[cert.type]) {
      acc[cert.type] = [];
    }
    acc[cert.type].push(cert);
    return acc;
  }, {} as Record<string, typeof certifications>);

  return (
    <Layout>
      <div className="certifications-page">
        <div className="certifications-header">
          <h1>Certifications & Awards</h1>
          <p>Professional credentials and achievements of the _usernameTaken team</p>
        </div>
        
        {Object.entries(certificationsByType).map(([type, certs]) => (
          <section key={type} className="certification-section">
            <h2>{type === 'certification' ? 'Certifications' : 'Awards & Achievements'}</h2>
            <div className="certifications-grid">
              {certs.map((cert) => (
                <div key={cert.id} className="certification-card">
                  <div className="certification-header">
                    <h3>{cert.name}</h3>
                    <div className="certification-meta">
                      <span className="issuer">{cert.issuer}</span>
                      <span className="date">{cert.issueDate.toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="certification-body">
                    <p className="recipient">Awarded to: {cert.recipient}</p>
                    {cert.description && (
                      <p className="description">{cert.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </Layout>
  );
};

export default Certifications;