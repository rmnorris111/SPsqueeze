import React from 'react';

// Declare dataLayer for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
  }
}

const PdfDownload: React.FC = () => {
  const handleDownload = () => {
    // Track main PDF download button click in Google Tag Manager
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        'event': 'pdf_download_click',
        'button_location': 'main_download_section',
        'user_action': 'download_guide'
      });
    }
    
    // Trigger ConvertKit modal - simplified approach
    setTimeout(() => {
      let attempts = 0;
      const maxAttempts = 10;
      
      const tryTrigger = () => {
        attempts++;
        
        // Check if ConvertKit has loaded and modal is available
        if ((window as any).ck && typeof (window as any).ck.show === 'function') {
          try {
            (window as any).ck.show('d517e28d2b');
            return true;
          } catch (e) {
            console.log('ck.show failed:', e);
          }
        }
        
        // Check for script elements that can be triggered
        const scripts = document.querySelectorAll('script[data-uid="d517e28d2b"]');
        if (scripts.length > 0) {
          try {
            const script = scripts[0] as HTMLElement;
            script.click();
            return true;
          } catch (e) {
            console.log('script click failed:', e);
          }
        }
        
        // If ConvertKit hasn't loaded yet, try again
        if (attempts < maxAttempts) {
          setTimeout(tryTrigger, 500);
        } else {
          // Final fallback
          window.open('https://rionnorris.kit.com/f32254f8c9', '_blank');
        }
        
        return false;
      };
      
      tryTrigger();
    }, 100);
  };

  return (
    <section id="download" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-4">
            Download Your Free Probate Guide
          </h2>
          <p className="text-center text-muted-color mb-12">
            Get our comprehensive guide that explains the probate process in simple terms, 
            including timelines, costs, and what to expect every step of the way.
          </p>
          
          {/* Download Button */}
          <div className="bg-light rounded-lg shadow-md p-6 md:p-8 text-center">
            <h3 className="text-xl font-heading font-semibold mb-4">
              Ready to Download Your Free Guide?
            </h3>
            <p className="text-gray-600 mb-6">
              Click the button below to access your free PDF guide. You'll be asked to enter your email details to receive the download link.
            </p>

            <button
              onClick={handleDownload}
              className="w-full bg-secondary hover:bg-opacity-90 text-white font-bold py-4 px-6 rounded-md transition-all"
            >
              Download Free PDF Guide
            </button>

            <div className="mt-6">
              <p className="text-sm text-gray-500">📄 Comprehensive 20-page guide covering all aspects of probate in New Zealand</p>
            </div>
          </div>

          {/* Benefits of the PDF */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">📋</span>
              </div>
              <h4 className="font-semibold mb-2">Step-by-Step Process</h4>
              <p className="text-sm text-gray-600">Clear explanation of each stage in the probate process</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">💰</span>
              </div>
              <h4 className="font-semibold mb-2">Cost Breakdown</h4>
              <p className="text-sm text-gray-600">Understand all fees and expenses involved</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">⏱️</span>
              </div>
              <h4 className="font-semibold mb-2">Timeline Guide</h4>
              <p className="text-sm text-gray-600">Know exactly how long each step takes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PdfDownload;