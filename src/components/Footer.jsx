const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-primary-orange p-2 rounded-lg mr-3">
                <span className="text-black font-bold text-lg">SM</span>
              </div>
              <span className="text-xl font-bold">Shine Malawi</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Transforming lives and building sustainable futures for Malawian communities through education, nutrition, and comprehensive development programs.
            </p>
            <div className="flex space-x-4">
              {/* Social media icons would go here */}
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-orange transition-colors cursor-pointer">
                <span className="text-sm font-semibold">f</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-orange transition-colors cursor-pointer">
                <span className="text-sm font-semibold">t</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-orange transition-colors cursor-pointer">
                <span className="text-sm font-semibold">in</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-primary-orange transition-colors">Home</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-primary-orange transition-colors">Programs</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-primary-orange transition-colors">About</a></li>
              <li><a href="#involve" className="text-gray-400 hover:text-primary-orange transition-colors">Get Involved</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary-orange transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2 text-gray-400">
              <li>School Sponsorship</li>
              <li>School Travel</li>
              <li>Feeding Programs</li>
              <li>Agricultural Support</li>
              <li>Sports Programs</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Shine Malawi. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-primary-orange text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-primary-orange text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-primary-orange text-sm transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;