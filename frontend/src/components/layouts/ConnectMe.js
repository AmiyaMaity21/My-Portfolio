import React from 'react'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
const ConnectMe = () => {
  return (
    <div className="flex gap-4">
            <a
              href="https://www.facebook.com/maity.amiya2016"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://wa.me/qr/7XWCSU77DZD6B1"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              <IoLogoWhatsapp />
            </a>
            <a
              href="https://www.Linkedin.com/in/amiyamaity21"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              <FaLinkedinIn />
            </a>
          </div>
  )
}

export default ConnectMe