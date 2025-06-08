import React from "react";

const CallToAction = () => {
  return (
    <section className="py-16 sm:py-24">
      {/* Background with gradient overlay */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-800 to-purple-700 opacity-90"></div>
        <img src="https://images.unsplash.com/photo-1549932967-c60dce5958ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDkzNzkzNTd8&ixlib=rb-4.1.0&q=80&w=1080" alt="abstract digital technology background with connections" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Ready to transform your business?
              </h2>
              <p className="mt-4 text-lg text-indigo-100">
                Join thousands of companies already using our platform to streamline operations, 
                boost productivity, and achieve remarkable growth.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row">
                <div className="inline-flex rounded-md shadow">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 md:py-4 md:text-lg md:px-10 transition-all duration-300"
                  >
                    Contact sales
                  </a>
                </div>
              </div>
              
              <div className="mt-6 text-sm text-indigo-200">
                <p>No credit card required. Free 14-day trial.</p>
              </div>
            </div>
            
            <div className="mt-10 lg:mt-0 relative">
              <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-2xl p-6 sm:p-10 shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><polyline points="88 136 112 160 168 104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                    <p className="ml-3 text-lg text-white font-medium">Easy integration with existing systems</p>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><polyline points="88 136 112 160 168 104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                    <p className="ml-3 text-lg text-white font-medium">Dedicated customer support team</p>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><polyline points="88 136 112 160 168 104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                    <p className="ml-3 text-lg text-white font-medium">Regular feature updates</p>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><polyline points="88 136 112 160 168 104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                    <p className="ml-3 text-lg text-white font-medium">99.9% uptime guarantee</p>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><polyline points="88 136 112 160 168 104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                    <p className="ml-3 text-lg text-white font-medium">Enterprise-grade security</p>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <div className="inline-flex items-center">
                    <div className="flex -space-x-2">
                      <img src="https://images.unsplash.com/photo-1531347118459-c3ea7a5ac61e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDkzNzkzNzJ8&ixlib=rb-4.1.0&q=80&w=1080" alt="professional business person portrait 1" />
                      <img src="https://images.unsplash.com/photo-1477420226391-9ff4fb9085fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDkzNzkzNzN8&ixlib=rb-4.1.0&q=80&w=1080" alt="young tech entrepreneur smiling" />
                      <img src="https://images.unsplash.com/photo-1482440308425-276ad0f28b19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDkzNzkzNzN8&ixlib=rb-4.1.0&q=80&w=1080" alt="older executive in business attire" />
                    </div>
                    <p className="ml-3 text-sm text-indigo-100">
                      Trusted by <span className="font-semibold text-white">10,000+</span> businesses worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <p className="text-5xl font-extrabold text-indigo-600">98%</p>
              <p className="mt-2 text-lg font-medium text-gray-600">Customer satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-extrabold text-indigo-600">24/7</p>
              <p className="mt-2 text-lg font-medium text-gray-600">Customer support</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-extrabold text-indigo-600">40%</p>
              <p className="mt-2 text-lg font-medium text-gray-600">Average productivity increase</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-extrabold text-indigo-600">3.5M+</p>
              <p className="mt-2 text-lg font-medium text-gray-600">Active users</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;