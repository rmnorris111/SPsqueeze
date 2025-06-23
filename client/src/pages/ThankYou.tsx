import React, { useEffect } from 'react';
import { Link } from 'wouter';

const ThankYou: React.FC = () => {
  useEffect(() => {
    // Fire Google Ads conversion tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {'send_to': 'AW-10968829596/4RCxCPSl2cQaEJydrO4o'});
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-12 flex flex-col items-center">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-secondary text-4xl">✓</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-primary">
            Thank You for Booking Your Consultation
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            We've received your booking request and a confirmation email has been sent to your inbox. 
            Our probate specialist is looking forward to speaking with you at your scheduled time.
          </p>
          <div className="bg-white rounded-lg border border-gray-200 p-8 mb-12 max-w-2xl mx-auto">
            <h2 className="text-xl font-heading font-semibold mb-4 text-primary">
              What Happens Next?
            </h2>
            <div className="space-y-4 text-left">
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-secondary font-medium">1</span>
                </div>
                <div>
                  <p className="text-gray-700">
                    Check your email for a calendar invitation and confirmation details
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-secondary font-medium">2</span>
                </div>
                <div>
                  <p className="text-gray-700">
                    Prepare any questions you have about the probate process
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-secondary font-medium">3</span>
                </div>
                <div>
                  <p className="text-gray-700">
                    We'll call you at your scheduled time to discuss your specific situation
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-gray-600 mb-6">
              If you need to make any changes to your appointment or have urgent questions:
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="mailto:rion@rionnorris.com" 
                className="px-8 py-3 bg-white border border-secondary text-secondary rounded-md font-medium hover:bg-secondary hover:text-white transition-all"
              >
                Email Us
              </a>
              <a 
                href="tel:0276036144" 
                className="px-8 py-3 bg-secondary text-white rounded-md font-medium hover:bg-white hover:text-secondary border border-secondary transition-all"
              >
                Call Us
              </a>
            </div>
          </div>
          <div className="mt-12">
            <a href="https://simplyprobate.co.nz" className="text-primary hover:text-secondary transition-colors cursor-pointer">
              ← Return to simplyprobate.co.nz
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;