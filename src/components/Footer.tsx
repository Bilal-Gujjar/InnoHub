import { Code2, Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold text-white">InnoHub</span>
            </div>
            <p className="text-gray-400">
              Transforming ideas into innovative solutions for tomorrow's challenges.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>123 Innovation Street, Tech City</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>contact@innohub.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-blue-500 transition">Home</a></li>
              <li><a href="#solutions" className="hover:text-blue-500 transition">Solutions</a></li>
              <li><a href="#insights" className="hover:text-blue-500 transition">Insights</a></li>
              <li><a href="#contact" className="hover:text-blue-500 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/" className="hover:text-blue-500 transition">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://x.com/" className="hover:text-blue-500 transition">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/" className="hover:text-blue-500 transition">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} InnoHub Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}