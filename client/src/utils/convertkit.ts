// ConvertKit modal utility functions
export const triggerConvertKitModal = (uid: string, retries = 5): void => {
  const attemptTrigger = (attemptsLeft: number) => {
    if (attemptsLeft <= 0) {
      // Fallback to direct form URL if modal fails
      window.open('https://rionnorris.kit.com/f32254f8c9', '_blank');
      return;
    }

    // Check if ConvertKit is loaded and available
    if (typeof window !== 'undefined') {
      // Method 1: Check for global ck object
      if ((window as any).ck && typeof (window as any).ck.show === 'function') {
        try {
          (window as any).ck.show(uid);
          return;
        } catch (e) {
          console.log('CK method 1 failed, trying next method');
        }
      }

      // Method 2: Check for formkit global
      if ((window as any).formkit && typeof (window as any).formkit.show === 'function') {
        try {
          (window as any).formkit.show(uid);
          return;
        } catch (e) {
          console.log('CK method 2 failed, trying next method');
        }
      }

      // Method 3: Check for __sv_forms array
      if ((window as any).__sv_forms && Array.isArray((window as any).__sv_forms)) {
        const form = (window as any).__sv_forms.find((f: any) => f.uid === uid);
        if (form && form.element) {
          try {
            // Trigger form display
            if (typeof form.show === 'function') {
              form.show();
              return;
            }
            // Or try clicking the element
            if (typeof form.element.click === 'function') {
              form.element.click();
              return;
            }
          } catch (e) {
            console.log('CK method 3 failed, trying next method');
          }
        }
      }

      // Method 4: Dispatch custom event that ConvertKit might listen for
      try {
        const event = new CustomEvent('convertkit-show', { 
          detail: { uid: uid }
        });
        document.dispatchEvent(event);
        
        // Check if it worked by looking for modal elements
        setTimeout(() => {
          const modal = document.querySelector('[data-sv-form]') || 
                       document.querySelector('.formkit-modal') ||
                       document.querySelector('[data-uid="' + uid + '"]');
          if (!modal || !modal.offsetParent) {
            // Modal didn't appear, retry
            setTimeout(() => attemptTrigger(attemptsLeft - 1), 500);
          }
        }, 200);
        return;
      } catch (e) {
        console.log('CK method 4 failed, retrying...');
      }
    }

    // Wait and retry
    setTimeout(() => attemptTrigger(attemptsLeft - 1), 500);
  };

  attemptTrigger(retries);
};

// Wait for ConvertKit to load before triggering
export const waitForConvertKit = (callback: () => void, maxWait = 10000): void => {
  const startTime = Date.now();
  
  const checkLoaded = () => {
    if (Date.now() - startTime > maxWait) {
      // Timeout, execute callback anyway
      callback();
      return;
    }

    if (typeof window !== 'undefined' && 
        ((window as any).ck || (window as any).formkit || (window as any).__sv_forms)) {
      callback();
      return;
    }

    setTimeout(checkLoaded, 100);
  };

  checkLoaded();
};