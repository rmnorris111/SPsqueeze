import React, { useState } from 'react';

interface CostResults {
  diy: number;
  lawyer: number;
  publicTrust: number;
  simplyProbate: number;
}

const CostCalculator: React.FC = () => {
  const [estateValue, setEstateValue] = useState(500000);
  const [hasProperty, setHasProperty] = useState(true);
  const [complexAssets, setComplexAssets] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [costs, setCosts] = useState<CostResults | null>(null);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NZ', {
      style: 'currency',
      currency: 'NZD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getBarWidth = (cost: number, maxCost: number) => {
    return (cost / maxCost) * 100;
  };

  const calculateCosts = () => {
    // Base costs
    const baseCosts = {
      courtFees: 260,
      creditorNotification: 200,
      deathCertificates: 75
    };

    const otherCosts = baseCosts.creditorNotification + baseCosts.deathCertificates;

    // Calculate costs for each option
    const diyExtra = hasProperty ? 400 : 200;
    const diyTotal = baseCosts.courtFees + otherCosts + diyExtra + (complexAssets ? 800 : 0);

    const lawyerHours = complexAssets ? 15 : hasProperty ? 12 : 8;
    const lawyerTotal = baseCosts.courtFees + otherCosts + (lawyerHours * 500);

    const publicTrustMinimum = 6140 + 1113 + 1789;
    const publicTrustPercentage = estateValue * 0.05;
    const publicTrustTotal = Math.max(publicTrustMinimum, publicTrustPercentage);

    const simplyProbateFee = 499;
    const simplyProbateWithGST = simplyProbateFee * 1.15;
    const simplyProbateTotal = baseCosts.courtFees + otherCosts + simplyProbateWithGST;

    const newCosts = {
      diy: diyTotal,
      lawyer: lawyerTotal,
      publicTrust: publicTrustTotal,
      simplyProbate: simplyProbateTotal
    };

    setCosts(newCosts);
    setShowResults(true);
  };

  const maxCost = costs ? Math.max(...Object.values(costs)) : 0;

  return (
    <section className="py-16 bg-white" data-calculator>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-2 mb-4">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Probate Cost Calculator</h2>
          </div>
          <p className="text-lg text-gray-600 mb-2">
            Compare the true cost of different probate options in New Zealand
          </p>
          <p className="text-sm text-gray-500">
            <strong>Estimates only:</strong> Actual costs may vary based on your specific circumstances
          </p>
        </div>

        {/* Input Form */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Tell us about the estate:</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Estimated Estate Value
              </label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-400">$</span>
                <input
                  type="number"
                  value={estateValue}
                  onChange={(e) => setEstateValue(parseInt(e.target.value) || 0)}
                  className="pl-8 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary"
                  placeholder="500000"
                  min="0"
                  step="10000"
                />
              </div>
              <p className="text-sm text-gray-500 mt-1">Including property, savings, investments</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={hasProperty}
                    onChange={(e) => setHasProperty(e.target.checked)}
                    className="w-5 h-5 text-secondary border-gray-300 rounded focus:ring-secondary"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Estate includes property/real estate
                  </span>
                </label>
              </div>

              <div>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={complexAssets}
                    onChange={(e) => setComplexAssets(e.target.checked)}
                    className="w-5 h-5 text-secondary border-gray-300 rounded focus:ring-secondary"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Complex assets (business, overseas property, disputes)
                  </span>
                </label>
              </div>
            </div>
          </div>

          <button
            onClick={calculateCosts}
            className="mt-6 w-full bg-[#2EBFAF] text-white py-3 px-6 rounded-md font-semibold hover:bg-[#26a699] transition-colors"
          >
            Get Cost Estimates
          </button>
        </div>

        {/* Results */}
        {showResults && costs && (
          <div className="space-y-6 max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
              Your Probate Cost Estimates
            </h3>

            {/* Cost Comparison Bars */}
            <div className="space-y-4">
              {/* DIY Option */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="font-semibold text-gray-900">DIY Probate</span>
                  </div>
                  <span className="text-lg font-bold text-orange-600">
                    {formatCurrency(costs.diy)}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                  <div className="bg-orange-500 h-3 rounded-full" style={{ width: `${getBarWidth(costs.diy, maxCost)}%` }}></div>
                </div>
                <div className="text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>✅ Lowest upfront cost</span>
                    <span>❌ High time investment</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span>❌ Personal liability risk</span>
                    <span>❌ No legal protection</span>
                  </div>
                </div>
              </div>

              {/* Simply Probate */}
              <div className="bg-green-50 border-2 border-secondary rounded-lg p-4 relative shadow-sm">
                <div className="absolute -top-2 left-4 bg-secondary text-white px-3 py-1 rounded-full text-xs font-semibold">
                  RECOMMENDED
                </div>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-semibold text-gray-900">Simply Probate</span>
                  </div>
                  <span className="text-lg font-bold text-secondary">
                    {formatCurrency(costs.simplyProbate)}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                  <div className="bg-secondary h-3 rounded-full" style={{ width: `${getBarWidth(costs.simplyProbate, maxCost)}%` }}></div>
                </div>
                <div className="text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>✅ Simply Probate: $574 (inc GST)</span>
                    <span>✅ Expert legal oversight</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span>✅ Court fees: $260 (included in total)</span>
                    <span>✅ 7-day average completion</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Plus ~$275 other costs (certificates, notifications)
                  </div>
                </div>
              </div>

              {/* Traditional Lawyer */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-semibold text-gray-900">Traditional Law Firm</span>
                  </div>
                  <span className="text-lg font-bold text-blue-600">
                    {formatCurrency(costs.lawyer)}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                  <div className="bg-blue-500 h-3 rounded-full" style={{ width: `${getBarWidth(costs.lawyer, maxCost)}%` }}></div>
                </div>
                <div className="text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>✅ Full service option</span>
                    <span>❌ Hourly billing uncertainty</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span>❌ Higher cost</span>
                    <span>❌ Longer timeframes</span>
                  </div>
                </div>
              </div>

              {/* Public Trust */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="font-semibold text-gray-900">Public Trust</span>
                  </div>
                  <span className="text-lg font-bold text-red-600">
                    {formatCurrency(costs.publicTrust)}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                  <div className="bg-red-500 h-3 rounded-full" style={{ width: `${getBarWidth(costs.publicTrust, maxCost)}%` }}></div>
                </div>
                <div className="text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>❌ Highest cost</span>
                    <span>❌ Complex fee structure</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span>❌ Percentage-based fees</span>
                    <span>❌ Additional hourly charges</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Savings Highlight */}
            {costs.simplyProbate < costs.lawyer && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <p className="text-lg font-semibold text-green-800">
                  You could save {formatCurrency(costs.lawyer - costs.simplyProbate)} with Simply Probate
                </p>
                <p className="text-sm text-green-600 mt-1">
                  Compared to traditional law firms
                </p>
              </div>
            )}

            {/* Contact CTA */}
            <div className="text-center border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold mb-2">Ready to get started?</h3>
              <p className="text-gray-600 mb-4">Get an exact quote for your specific situation</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button 
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.dataLayer) {
                      window.dataLayer.push({
                        'event': 'application_started'
                      });
                    }
                    setTimeout(() => {
                      window.open('https://thedisputelawyer.gavel.io/run/playground2/Simply%20Probate%20application%20for%20probate/#/1', '_blank');
                    }, 300);
                  }}
                  className="bg-[#2EBFAF] text-white py-3 px-6 rounded-md font-semibold hover:bg-[#26a699] transition-colors"
                >
                  Start Application Online
                </button>
                <a 
                  href="https://calendly.com/rionnorris/15min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=f5f7fa&text_color=333333&primary_color=2563eb&success_redirect_url=https://quiz.simplyprobate.co.nz/thank-you" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border border-[#2EBFAF] text-[#2EBFAF] py-3 px-6 rounded-md font-semibold hover:bg-[#2EBFAF] hover:text-white transition-colors"
                >
                  Book Free Consultation
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Estimates shown above - get exact pricing for your situation
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CostCalculator;