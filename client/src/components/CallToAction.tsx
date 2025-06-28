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
