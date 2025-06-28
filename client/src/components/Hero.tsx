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
      const tryTriggerModal = () => {
        // Method 1: Check for formkit global object
        if ((window as any).formkit && typeof (window as any).formkit === 'object') {
          try {
            (window as any).formkit.open('d517e28d2b');
            return true;
          } catch (e) {
            // Try alternative method
            try {
              (window as any).formkit.show('d517e28d2b');
              return true;
            } catch (e2) {
              console.log('formkit methods failed');
            }
          }
        }

        // Method 2: Check for __sv_forms and trigger directly
        if ((window as any).__sv_forms && Array.isArray((window as any).__sv_forms)) {
          const form = (window as any).__sv_forms.find((f: any) => f.uid === 'd517e28d2b');
          if (form) {
            try {
              // Try to trigger the form's show method
              if (form.show && typeof form.show === 'function') {
                form.show();
                return true;
              }
              // Or dispatch custom event
              const event = new CustomEvent('sv-form-show', { detail: { uid: 'd517e28d2b' } });
              document.dispatchEvent(event);
              return true;
            } catch (e) {
              console.log('__sv_forms method failed');
            }
          }
        }

        // Method 3: Try to find and trigger any ConvertKit form elements
        const ckElements = document.querySelectorAll('[data-uid="d517e28d2b"], [data-sv-form], .formkit-form');
        if (ckElements.length > 0) {
          try {
            (ckElements[0] as HTMLElement).click();
            return true;
          } catch (e) {
            console.log('element click failed');
          }
        }

        return false;
      };

      // Try with increasing delays to allow ConvertKit to fully load
      let attempts = 0;
      const maxAttempts = 5;
      
      const attemptTrigger = () => {
        attempts++;
        if (tryTriggerModal()) {
          return; // Success!
        }
        
        if (attempts < maxAttempts) {
          setTimeout(attemptTrigger, attempts * 500); // 500ms, 1s, 1.5s, 2s delays
        } else {
          // Final fallback - redirect to form page
          window.open('https://rionnorris.kit.com/f32254f8c9', '_blank');
        }
      };

      attemptTrigger();
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
