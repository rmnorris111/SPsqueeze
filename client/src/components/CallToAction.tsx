import React from 'react';

// Declare dataLayer for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
  }
}

const CallToAction: React.FC = () => {
  const scrollToDownload = () => {
    // Track CTA button click in Google Tag Manager
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        'event': 'pdf_download_click',
        'button_location': 'call_to_action',
        'user_action': 'download_guide'
      });
    }
    
    // Small delay to ensure tracking fires before showing modal
    setTimeout(() => {
      // Trigger ConvertKit modal using the correct API
      if (typeof window !== 'undefined' && (window as any).ck && (window as any).ck.show) {
        (window as any).ck.show('d517e28d2b');
      } else if (typeof window !== 'undefined' && (window as any).__sv_forms) {
        // Alternative method to trigger form
        const form = (window as any).__sv_forms.find((f: any) => f.uid === 'd517e28d2b');
        if (form && form.element && form.element.click) {
          form.element.click();
        }
      }
    }, 100);
  };

  return (
    <section className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
          Get Your Free Probate Guide
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Download our comprehensive guide to understand the probate process and get started on the right path.
        </p>
        <div className="flex justify-center">
          <button 
            onClick={scrollToDownload}
            className="bg-secondary hover:bg-opacity-90 transition-all text-white font-bold py-3 px-6 rounded-md text-center"
          >
            Download Free PDF
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
