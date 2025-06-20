import { Container } from "../shared/Container";
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-box-bg pt-10 pb-4 text-heading-1 rounded-t-3xl ">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* 1. About */}
          <div>
            <img
              src="/assets/Images/logo.png"
              className="w-36 mb-10 "
              alt="Plyronest Logo"
            />
            <h4 className="text-lg font-semibold text-heading-1 mb-2">About Us</h4>
            <p className="text-sm mb-1"> Plyronest,Tumkur, Karnataka,India</p>
            <p className="text-sm">Email: plyronest8@gmail.com</p>
          </div>
          

          {/* 2. Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-heading-1 mb-3">Why US</h4>
            <ul className="flex flex-col gap-4 text-xl text-heading-1">
              <li>
                <a href="/"  rel="noopener noreferrer" className="hover:text-green-700">
                  Home
                </a>
              </li>
              <li>
                <a href="/about"  rel="noopener noreferrer" className="hover:text-green-700">
                  About US
                </a>
              </li>
              <li>
                <a href="/internship"  rel="noopener noreferrer" className="hover:text-green-700">
                  Internship
                </a>
              </li>

              <li>
                <a href="/gallery"  rel="noopener noreferrer" className="hover:text-green-700">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/connect"  rel="noopener noreferrer"className="hover:text-green-700">
                  Connect
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-heading-1 mb-3">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-xl text-heading-1">
              <li>
                <a href="https://www.inex-india.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-700">
                  Inex
                </a>
              </li>
              <li className="hover:text-green-700">Privacy Policy</li>
              <li className="hover:text-green-700">Terms of Service</li>
            </ul>
          </div>

          {/* 3. Follow Us */}
          <div>
            <h4 className="text-lg font-semibold text-heading-1 mb-3">Follow Us</h4>
            <div className="flex gap-4 text-xl text-heading-1">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="hover:text-blue-700" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="hover:text-red-600" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-pink-500" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="hover:text-blue-600" />
              </a>
            </div>
          </div>
        </div>

        {/* Optional: Bottom copyright */}
        {/* <div className="mt-10 border-t border-gray-300 pt-4 text-center text-sm text-">
          &copy; 2022 Plyronest. All rights reserved.
        </div> */}
      </Container>
    </footer>
  );
};
