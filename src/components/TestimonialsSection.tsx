const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Transforming Agriculture with Technology</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            BeejSeBazaar bridges the gap between traditional farming and modern technology, empowering farmers to make data-driven decisions for better yields and profitability.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="bg-green-50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Crop Selection</h3>
            <p className="text-gray-600">
              Our AI-powered recommendations help you choose the most profitable crops based on your soil composition, local weather patterns, and current market demand.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Farm Protection</h3>
            <p className="text-gray-600">
              Real-time alerts for adverse weather conditions, early disease detection, and access to agricultural experts to safeguard your crops throughout the season.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="bg-purple-50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Direct Market Access</h3>
            <p className="text-gray-600">
              Eliminate middlemen with our transparent marketplace. Get fair prices for your produce while buyers enjoy farm-fresh quality with complete traceability.
            </p>
          </div>
        </div>

        <div className="bg-green-50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Farming Business?</h3>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Join thousands of farmers who are already benefiting from our agricultural technology platform.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;