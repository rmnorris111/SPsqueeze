import React from 'react';

// Declare dataLayer for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
  }
}

const Pricing: React.FC = () => {



  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Transparent Pricing</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Probate Card */}
          <div className="bg-blue-50 rounded-lg border border-gray-200 overflow-hidden shadow-md">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Probate</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold text-gray-900">$499</span>
                <span className="text-gray-600 ml-2">+ GST fixed fee</span>
              </div>
              <p className="text-gray-700 mb-2">For when the deceased left a valid will</p>
              <p className="text-gray-500 text-sm mb-6">Court fee $260 not included</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-secondary flex items-center justify-center mr-2">
                    <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Review validity of the Will</span>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-secondary flex items-center justify-center mr-2">
                    <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Application preparation</span>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-secondary flex items-center justify-center mr-2">
                    <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Legal document review</span>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-secondary flex items-center justify-center mr-2">
                    <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Expert legal oversight</span>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-secondary flex items-center justify-center mr-2">
                    <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Fixed price guarantee</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Letters of Administration Card */}
          <div className="bg-blue-50 rounded-lg border border-gray-200 overflow-hidden shadow-md">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Letters of Administration</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold text-gray-900">$899</span>
                <span className="text-gray-600 ml-2">+ GST fixed fee</span>
              </div>
              <p className="text-gray-700 mb-2">For when the deceased did not leave a valid will (intestacy)</p>
              <p className="text-gray-500 text-sm mb-6">Court fee $260 not included</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-secondary flex items-center justify-center mr-2">
                    <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Next-of-kin determination</span>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-secondary flex items-center justify-center mr-2">
                    <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Complex application preparation</span>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-secondary flex items-center justify-center mr-2">
                    <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Legal document review</span>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-secondary flex items-center justify-center mr-2">
                    <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Expert legal oversight</span>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-secondary flex items-center justify-center mr-2">
                    <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Fixed price guarantee</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* What's Included Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">What's Included in Our Services?</h3>
          
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-bold text-primary mb-3">Expert Legal Support</h4>
              <p className="text-gray-700">
                All applications are prepared by our experienced legal team. Unlike DIY solutions, we ensure your
                application meets all the High Court's requirements the first time.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-primary mb-3">Document Preparation</h4>
              <p className="text-gray-700">
                We prepare all necessary legal documents including affidavits, supporting documents, and the
                application itself. We guide you through exactly what supporting documentation you'll need.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-primary mb-3">Court Filing</h4>
              <p className="text-gray-700">
                We provide everything you need to send to the Probate Registry, ensuring it meets all formalities and
                procedural requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;