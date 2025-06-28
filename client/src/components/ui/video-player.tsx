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
