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
