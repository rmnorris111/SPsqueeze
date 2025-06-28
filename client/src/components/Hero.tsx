import React from 'react';
import VideoPlayer from '@/components/ui/video-player';

// Declare dataLayer for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
  }
}

const Hero: React.FC = () => {
  const scrollToDownload = (buttonLocation: string) => {
    // Track button click in Google Tag Manager
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        'event': 'pdf_download_click',
        'button_location': buttonLocation,
        'user_action': 'download_guide'
      });
    }
    
    // Small delay to ensure tracking fires before showing modal
    setTimeout(() => {
      // Simple approach: Try to trigger ConvertKit with a longer delay to ensure script loads
      const triggerModal = () => {
        // Method 1: Check for window.ck
        if ((window as any).ck && (window as any).ck.show) {
          (window as any).ck.show('d517e28d2b');
          return true;
        }
        
        // Method 2: Try dispatching a click on the script tag
        const scriptElement = document.querySelector('script[data-uid="d517e28d2b"]');
        if (scriptElement) {
          const clickEvent = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true
          });
          scriptElement.dispatchEvent(clickEvent);
          return true;
        }
        
        return false;
      };

      // Try immediately, then retry with delays
      if (!triggerModal()) {
        setTimeout(() => {
          if (!triggerModal()) {
            setTimeout(() => {
              if (!triggerModal()) {
                // Final fallback - open form page
                window.open('https://rionnorris.kit.com/f32254f8c9', '_blank');
              }
            }, 1000);
          }
        }, 500);
      }
    }, 100);
  };

  const handleDownloadClick = (buttonLocation: string) => () => {
    scrollToDownload(buttonLocation);
  };

  

  return (
    <section className="bg-primary text-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center">
          {/* Text content - hidden on mobile, shown on desktop */}
          <div className="hidden md:block md:w-1/2 md:mb-0 md:pr-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">The Helpful Guide to Probate in NZ (That Actually Makes Sense)</h2>
            <p className="text-lg md:text-xl mb-6">Download our FREE 20-page guide and learn exactly what to do, when to do it, and how much it costs - written for real people, not lawyers.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={handleDownloadClick('hero_desktop')}
                className="bg-secondary hover:bg-opacity-90 transition-all text-white font-bold py-3 px-6 rounded-md text-center"
              >
                Download Free PDF
              </button>
            </div>
          </div>

          {/* Text content for mobile - shown on mobile, hidden on desktop */}
          <div className="md:hidden mb-8">
            <h2 className="text-3xl font-heading font-bold mb-4">
              The Helpful Guide to Probate in NZ (That Actually Makes Sense)
            </h2>
            <p className="text-lg mb-6">
              Download our FREE 20-page guide and learn exactly what to do, when to do it, and how much it costs - written for real people, not lawyers.
            </p>
          </div>
          
          {/* Video */}
          <div className="md:w-1/2">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
              <VideoPlayer />
            </div>
          </div>
          
          {/* Buttons for mobile - shown on mobile, hidden on desktop */}
          <div className="md:hidden mt-6 text-center">
            <div className="flex flex-col gap-3">
              <button 
                onClick={handleDownloadClick('hero_mobile')}
                className="bg-secondary hover:bg-opacity-90 transition-all text-white font-bold py-3 px-6 rounded-md text-center"
              >
                Download Free PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
