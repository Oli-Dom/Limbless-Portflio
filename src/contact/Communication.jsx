import React from 'react';
import { BsDiscord, BsLinkedin } from 'react-icons/bs';
import './contact.css';

const Communication = () => {
  return (
    <>
      <section id="contact">
        <div className="header_socials">
          <a
            href="https://www.linkedin.com/company/limbless-devs"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a href="https://discord.gg/Jzy4gqBTuZ" target="_blank">
            <BsDiscord />
          </a>
        </div>
      </section>
    </>
  );
};

export default Communication;
