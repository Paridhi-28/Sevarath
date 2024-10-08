import Image from "next/image";
import logo from "/public/images/logoSevaarth.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import config from "@/lib/config";

const Footer = () => {
  const footerLinks = [
    {
      title: "Support Us",
      links: ["Donate", "Partnerships", "Sponsorships", "Fundraising"],
    },
    {
      title: "Resources",
      links: ["Blog", "Events", "Volunteer Opportunities", "FAQs"],
    },
    {
      title: "About Us",
      links: ["Our Mission", "Our Work", "Get Involved"],
    },
  ];

  return (
    <footer className="bg-gray-800 pt-10 text-gray-100 text-sm font-semibold">
      <div className="container px-6 md:px-5 lg:px-20 py-8 mx-auto flex flex-col md:flex-row md:flex-nowrap">
        {/* Logo and description */}
        <div className="w-full md:w-1/4 flex-shrink-0 mb-8 md:mb-0 flex flex-col justify-center items-center md:items-start md:ml-8">
          <a className="flex title-font font-medium items-center justify-center md:justify-start">
            <Image
              className="w-24 h-24 rounded-full shadow-lg"
              src={logo}
              alt="Sevaarth Logo"
            />
          </a>
          <p className="mt-4 text-sm text-center md:text-left">
            Join us in making a difference!
          </p>
          {/* Social media icons */}
          <div className="flex mt-4 justify-center md:justify-start space-x-4 text-green-300">
            <a
              href={config.socialLinks.facebook}
              target="_blank"
              aria-label="Facebook"
              className="transition-transform transform hover:scale-110"
            >
              <FaFacebookF className="h-6 w-6" />
            </a>
            <a
              href={config.socialLinks.instagram}
              target="_blank"
              aria-label="Instagram"
              className="transition-transform transform hover:scale-110"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
            <a
              href={config.socialLinks.twitter}
              target="_blank"
              aria-label="X (Twitter)"
              className="transition-transform transform hover:scale-110"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
            <a
              href={config.socialLinks.linkedin}
              target="_blank"
              aria-label="LinkedIn"
              className="transition-transform transform hover:scale-110"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Footer links */}
        <div className="w-full md:w-2/3 flex-grow flex flex-wrap justify-between text-center md:text-left">
          {footerLinks.map((section, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-6">
              <h2 className="text-green-300 font-bold tracking-widest text-md mb-3">
                {section.title}
              </h2>
              <nav className="list-none">
                {section.links.map((link, index) => (
                  <li key={index} className="mb-2">
                    <a className="hover:underline text-gray-300" href="#">
                      {link}
                    </a>
                  </li>
                ))}
              </nav>
            </div>
          ))}

          {/* Stay Connected section */}
          <div className="w-full sm:w-1/2 lg:w-2/4 px-4">
            <h2 className="text-green-300 font-bold tracking-widest text-md mb-3">
              Stay Connected
            </h2>
            <p className="mb-4">
              Sign up for our newsletter to receive updates on our work and how
              you can help.
            </p>
            <div className="flex mt-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full h-10 text-xs font-semibold bg-gray-700 rounded-full border border-gray-600 focus:ring-2 focus:ring-green-300 focus:bg-transparent focus:border-green-300 outline-none text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <button className="ml-2 bg-green-600 hover:bg-green-500 border-0 h-10 rounded-full text-white text-xs font-semibold px-4 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>

          {/* Contact Us section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mt-6 md:mt-0">
            <h2 className="text-green-300 font-bold tracking-widest text-md mb-3">
              Contact Us
            </h2>
            <p className="text-gray-300 flex items-center mb-2">
              <FaEnvelope className="mr-2" />
              <a
                href={`mailto:${config.contact.email}`}
                className="hover:underline"
              >
                {config.contact.email}
              </a>
            </p>
            <p className="text-gray-300 flex items-center mb-2">
              <FaPhone className="mr-2" />
              <a
                href={`tel:${config.contact.phone}`}
                className="hover:underline"
              >
                {config.contact.phone}
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t-2 border-gray-600 py-4 text-center">
        <p>© 2024 {config.appName}. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
