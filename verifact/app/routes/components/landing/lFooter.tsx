import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <a href="/" className="text-3xl font-bold text-white hover:text-sky-400 transition-colors">
              Verifact
            </a>
            <p className="text-slate-400 text-base">
              Empowering you with verified information, instantly.
            </p>
            <div className="flex space-x-5">
              {/* Social Links would go here */}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase">Solutions</h3>
                <ul role="list" className="mt-4 space-y-3">
                  <li><a href="#" className="text-base text-slate-400 hover:text-sky-400">Fact-Checking API</a></li>
                  <li><a href="#" className="text-base text-slate-400 hover:text-sky-400">Browser Extension</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase">Company</h3>
                <ul role="list" className="mt-4 space-y-3">
                  <li><a href="#" className="text-base text-slate-400 hover:text-sky-400">About Verifact</a></li>
                  <li><a href="#" className="text-base text-slate-400 hover:text-sky-400">How It Works</a></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase">Legal</h3>
                <ul role="list" className="mt-4 space-y-3">
                  <li><a href="#" className="text-base text-slate-400 hover:text-sky-400">Privacy Policy</a></li>
                  <li><a href="#" className="text-base text-slate-400 hover:text-sky-400">Terms of Service</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase">Support</h3>
                <ul role="list" className="mt-4 space-y-3">
                  <li><a href="#" className="text-base text-slate-400 hover:text-sky-400">Contact Us</a></li>
                  <li><a href="#" className="text-base text-slate-400 hover:text-sky-400">FAQ</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-700 pt-8">
          <p className="text-base text-slate-400 text-center xl:text-left">
            © {new Date().getFullYear()} Verifact. All rights reserved.
          </p>
        </div>
        <div className="mt-8 text-center text-xs text-slate-500">
          <p>Built by <a href="https://github.com/Team-BitNomads" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 underline">BitNomads</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;