import React from 'react';
import pdfImage from '@assets/Blue pdf img - drop shadow_1750636258426.png';

// Declare dataLayer for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
  }
}

const VideoPlayer: React.FC = () => {
  const scrollToDownload = () => {
    // Track PDF image click in Google Tag Manager
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        'event': 'pdf_download_click',
        'button_location': 'pdf_image',
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
    <div className="relative rounded-lg overflow-hidden bg-white flex items-center justify-center p-8">
      <div className="cursor-pointer transition-transform hover:scale-105" onClick={scrollToDownload}>
        <img 
          src={pdfImage} 
          alt="The Helpful Guide to Probate in NZ - Free PDF Download"
          className="w-full h-auto max-w-md mx-auto"
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
