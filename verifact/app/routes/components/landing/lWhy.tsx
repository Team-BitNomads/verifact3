import React from 'react';

const Feature: React.FC = () => {
  return (
    <section id="reason" className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
          Why Use Verifact?
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Fast & Accurate */}
          <div className="p-8 bg-white rounded-xl shadow-lg text-center transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-12 w-12 text-blue-600 mx-auto mb-5">
              <path fillRule="evenodd" d="M8.603 3.799A4.5 4.5 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.5 4.5 0 013.498 1.307 4.5 4.5 0 01.502 3.595A4.5 4.5 0 0118.25 12c0 .618-.122 1.218-.355 1.766a4.5 4.5 0 01-.861 1.43L16.5 15.5l-1.503 1.503a4.5 4.5 0 01-2.056 1.111A4.5 4.5 0 0112 19.5c-.918 0-1.797-.276-2.503-.766A4.5 4.5 0 017.75 16.503l1.503-1.503L7.5 13.234a4.5 4.5 0 01-.861-1.43A4.5 4.5 0 016.25 12c0-1.357.6-2.573 1.549-3.397a4.5 4.5 0 011.307-3.498A4.5 4.5 0 018.603 3.799zM10.373 12.182a.75.75 0 00-1.06 1.061l1.5 1.5a.75.75 0 001.134-.072l3-3.75a.75.75 0 00-1.134-.908L11.25 12.44l-.877-.878z" clipRule="evenodd" />
            </svg>
            <h3 className="font-semibold text-xl text-slate-800 mb-3">Fast & Accurate</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Get instant feedback on claims with meticulously vetted sources.</p>
          </div>
          {/* Card 2: AI-Powered */}
          <div className="p-8 bg-white rounded-xl shadow-lg text-center transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-12 w-12 text-green-600 mx-auto mb-5">
              <path fillRule="evenodd" d="M14.25 2.25c-.243 0-.482.035-.712.101V2.25a.75.75 0 00-1.5 0v.101A5.235 5.235 0 0012 2.25c-.243 0-.482.035-.712.101V2.25a.75.75 0 00-1.5 0v.101A5.235 5.235 0 009.75 2.25c-.243 0-.482.035-.712.101V2.25a.75.75 0 00-1.5 0v.101A5.235 5.235 0 007.5 2.25c-.243 0-.482.035-.712.101V2.25a.75.75 0 00-1.5 0v.101A5.235 5.235 0 005.25 2.25c-.243 0-.482.035-.712.101V2.25a.75.75 0 00-1.5 0v.101A5.25 5.25 0 003 7.5v9a5.25 5.25 0 004.5 5.149V21.75a.75.75 0 001.5 0v-.101c.23.066.469.101.712.101s.482-.035.712-.101V21.75a.75.75 0 001.5 0v-.101c.23.066.469.101.712.101s.482-.035.712-.101V21.75a.75.75 0 001.5 0v-.101c.23.066.469.101.712.101s.482-.035.712-.101V21.75a.75.75 0 001.5 0v-.101A5.25 5.25 0 0021 16.5v-9A5.25 5.25 0 0016.5 2.351V2.25a.75.75 0 00-1.5 0v.101c-.23.066-.469.101-.712.101zM12.75 11.5a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z" clipRule="evenodd" />
              <path d="M7.5 7.75A.75.75 0 018.25 7h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 017.5 7.75zM12.75 7a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5zM6 11.5a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 016 11.5zm10.5 0a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM7.5 15.75A.75.75 0 018.25 15h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 017.5 15.75zM12.75 15a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5z" />
            </svg>
            <h3 className="font-semibold text-xl text-slate-800 mb-3">AI-Powered</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Advanced AI cross-references data across news, reports, journals & more.</p>
          </div>
          {/* Card 3: Built for Everyone */}
          <div className="p-8 bg-white rounded-xl shadow-lg text-center transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-12 w-12 text-purple-600 mx-auto mb-5">
              <path d="M15 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0118 15v3h-2zM4.75 12.094A5.973 5.973 0 004 15v3H2v-3a3.005 3.005 0 012.25-2.906z" />
            </svg>
            <h3 className="font-semibold text-xl text-slate-800 mb-3">Built for Everyone</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Whether you're a student, journalist, researcher, or just curious — it's for you.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;