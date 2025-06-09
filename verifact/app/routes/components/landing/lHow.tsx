import React from 'react';

const Reason: React.FC = () => {
  return (
    <>
      {/* 
        This style tag is scoped to this component's needs. 
        In a larger application, you might use CSS Modules or a CSS-in-JS solution.
      */}
      <style>{`
        .desktop-connecting-line::before {
          content: '';
          position: absolute;
          top: 2rem; 
          left: calc(16.66% + 2rem); 
          right: calc(16.66% + 2rem);
          height: 2px; 
          background-color: #cbd5e1; 
          opacity: 0.7;
          z-index: 0; 
        }
        @media (max-width: 767px) { 
          .desktop-connecting-line::before {
            display: none;
          }
        }
      `}</style>
      <section id="how-it-works" className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Simple & Effective</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">How Verifact Works</p>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
              Understanding the truth behind any claim is just three simple steps away.
            </p>
          </div>

          <div className="relative">
            {/* The pseudo-element on this div creates the desktop connecting line */}
            <div aria-hidden="true" className="desktop-connecting-line" />

            <div className="grid grid-cols-1 gap-y-16 md:grid-cols-3 md:gap-x-8 relative">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="relative z-10">
                  <span className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 shadow-lg border-4 border-slate-50">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-8 w-8 text-blue-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
                    </svg>
                  </span>
                </div>
                <div className="mt-6 text-xs font-bold text-slate-400 tracking-wider">STEP 01</div>
                <h3 className="mt-1 text-xl font-semibold text-slate-800">Submit Your Claim</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">Easily paste text, upload a document, or enter a URL. Verifact accepts various input formats to start the verification process.</p>
              </div>
              {/* Step 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="relative z-10">
                  <span className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 shadow-lg border-4 border-slate-50">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-8 w-8 text-green-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-7.5h10.5a2.25 2.25 0 002.25-2.25V8.25a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 8.25v7.5A2.25 2.25 0 006.75 18h10.5M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                  </span>
                </div>
                <div className="mt-6 text-xs font-bold text-slate-400 tracking-wider">STEP 02</div>
                <h3 className="mt-1 text-xl font-semibold text-slate-800">AI-Powered Analysis</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">Our advanced AI meticulously cross-references your claim against a vast database of news articles, academic papers, and verified reports.</p>
              </div>
              {/* Step 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="relative z-10">
                  <span className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 shadow-lg border-4 border-slate-50">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-8 w-8 text-purple-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.747 3.747 0 01-1.043 3.296 3.747 3.747 0 01-3.296 1.043A3.747 3.747 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </span>
                </div>
                <div className="mt-6 text-xs font-bold text-slate-400 tracking-wider">STEP 03</div>
                <h3 className="mt-1 text-xl font-semibold text-slate-800">Receive Clear Results</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">Get a straightforward verdict—verified, disputed, or unconfirmed—along with supporting evidence and source links for full transparency.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reason;