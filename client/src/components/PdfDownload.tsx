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
    
    // Trigger ConvertKit modal
    setTimeout(() => {
      const triggerModal = () => {
        // Method 1: Use global ConvertKit object if available
        if ((window as any).ConvertKit && (window as any).ConvertKit.show) {
          (window as any).ConvertKit.show('d517e28d2b');
          return true;
        }

        // Method 2: Find the modal form and trigger it
        const modalForm = document.querySelector('.formkit-form[data-uid="d517e28d2b"][data-format="modal"]');
        if (modalForm && (window as any).__sv_forms) {
          const formData = (window as any).__sv_forms.find((f: any) => f.uid === 'd517e28d2b');
          if (formData && formData.element) {
            // Trigger ConvertKit's modal display
            const event = new CustomEvent('ck-show-modal', { detail: { uid: 'd517e28d2b' } });
            document.dispatchEvent(event);
            return true;
          }
        }

        // Method 3: Direct DOM manipulation to show modal
        if (modalForm) {
          (modalForm as HTMLElement).style.display = 'block';
          (modalForm as HTMLElement).classList.add('formkit-modal-active');
          
          // Create backdrop
          const backdrop = document.createElement('div');
          backdrop.className = 'formkit-modal-backdrop';
          backdrop.style.cssText = `
            position: fixed; 
            top: 0; 
            left: 0; 
            width: 100%; 
            height: 100%; 
            background: rgba(0,0,0,0.5); 
            z-index: 10000; 
            display: flex; 
            align-items: center; 
            justify-content: center;
          `;
          backdrop.appendChild(modalForm.cloneNode(true));
          document.body.appendChild(backdrop);
          
          // Close on backdrop click
          backdrop.addEventListener('click', (e) => {
            if (e.target === backdrop) {
              backdrop.remove();
            }
          });
          
          return true;
        }

        return false;
      };

      if (!triggerModal()) {
        setTimeout(() => {
          if (!triggerModal()) {
            // Fallback to form page
            window.open('https://rionnorris.kit.com/f32254f8c9', '_blank');
          }
        }, 1000);
      }
    }, 200);
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