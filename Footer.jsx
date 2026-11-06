
import {
  Leaf,
  Globe,
  Camera,
  BriefcaseBusiness,
  MessageCircle
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-green-950 px-6 py-10 text-white md:px-10">

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2">
            <Leaf size={28} className="text-lime-400" />

            <h2 className="text-xl font-bold">
              YourBrand
            </h2>
          </div>

          <p className="mt-4 text-sm leading-6 text-gray-300">
            Building a better future through innovation,
            growth and sustainable solutions.
          </p>

          {/* Social Icons */}
          <div className="mt-5 flex gap-4">

            <Globe
              size={20}
              className="cursor-pointer text-gray-300 transition hover:text-lime-400"
            />

            <Camera
              size={20}
              className="cursor-pointer text-gray-300 transition hover:text-lime-400"
            />

            <BriefcaseBusiness
              size={20}
              className="cursor-pointer text-gray-300 transition hover:text-lime-400"
            />

            <MessageCircle
              size={20}
              className="cursor-pointer text-gray-300 transition hover:text-lime-400"
            />

          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 font-bold text-lime-400">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm text-gray-300">
            <li><a href="#" className="hover:text-lime-400">Home</a></li>
            <li><a href="#" className="hover:text-lime-400">About Us</a></li>
            <li><a href="#" className="hover:text-lime-400">Services</a></li>
            <li><a href="#" className="hover:text-lime-400">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="mb-4 font-bold text-lime-400">
            Resources
          </h3>

          <ul className="space-y-3 text-sm text-gray-300">
            <li><a href="#" className="hover:text-lime-400">Blog</a></li>
            <li><a href="#" className="hover:text-lime-400">Help Center</a></li>
            <li><a href="#" className="hover:text-lime-400">FAQs</a></li>
            <li><a href="#" className="hover:text-lime-400">Support</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 font-bold text-lime-400">
            Contact Us
          </h3>

          <ul className="space-y-3 text-sm text-gray-300">
            <li>Email: hello@yourbrand.com</li>
            <li>Phone: +91 9876543210</li>
            <li>India</li>
          </ul>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-green-800 pt-5">

        <div className="flex flex-col items-center justify-between gap-3 text-center text-xs text-gray-400 md:flex-row">

          <p>
            © 2026 YourBrand. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-lime-400">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-lime-400">
              Terms of Service
            </a>
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
