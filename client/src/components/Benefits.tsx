import React from 'react';

const benefitsData = [
  {
    icon: '✓',
    title: 'Fixed Fee Pricing',
    description: 'Transparent pricing with no hidden costs. Know exactly what you\'re paying from the start.'
  },
  {
    icon: '📄',
    title: 'Expert Guidance',
    description: 'Our team of professionals will guide you through every step of the probate process.'
  },
  {
    icon: '⏱️',
    title: 'Fast Turnaround',
    description: 'We handle the paperwork efficiently to get probate granted as quickly as possible.'
  },
  {
    icon: '🛡️',
    title: 'Peace of Mind',
    description: 'Rest assured that your loved one\'s estate is being handled correctly and legally.'
  },
  {
    icon: '📞',
    title: 'Personal Service',
    description: 'Direct access to our probate specialists who understand New Zealand probate law.'
  },
  {
    icon: '📍',
    title: 'Nationwide Coverage',
    description: 'We provide probate services throughout all of New Zealand, no matter where you\'re located.'
  }
];

const Benefits: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          How Simply Probate Makes the Process Easier
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsData.map((benefit, index) => (
            <div key={index} className="bg-light rounded-lg p-6 shadow-md">
              <div className="benefit-icon">
                <span className="text-secondary text-xl">{benefit.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-color">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
