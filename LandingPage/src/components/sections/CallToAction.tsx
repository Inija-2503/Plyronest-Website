import { useState } from "react";
import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import {  FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
export const CTA = () => {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=plyronest8@gmail.com &su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(description)}`;

    window.open(mailtoLink, "_blank");
    setSubject("");
    setDescription("");
  };

  return (
    <section className="pb-20 relative" id="cta">
      <Container className="py-25 px-6 bg-body mt-10">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="relative z-10 mx-auto max-w-xl md:max-w-2xl py-8 md:py-10 px-6 md:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading-1 text-center">
              Get in Touch with Plyronest
            </h1>

            <Paragraph className="pt-6 text-center">
              Whether you're interested in research, training, partnerships, or have a general query, we're here to help.
              Fill out the form below and we’ll get back to you shortly.
            </Paragraph>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              <div>
                <label className="text-heading-2 block mb-2 text-lg  font-semibold">Subject</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Enter subject"
                  className="text-heading-2 w-full px-4 py-3 rounded-lg border border-gray-300  focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="text-heading-2 block mb-2 text-lg font-semibold">Description</label>
                <textarea
                  rows={5}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Write your message..."
                  className="text-heading-2 w-full px-4 py-3 rounded-lg border border-gray-300  focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>
              <Button >Submit</Button>
            </form>
            <div className="mt-12 text-center space-y-4">
              <div className="flex justify-center gap-4 text-xl text-indigo-600">
                {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a> */}
                <a href="https://www.linkedin.com/company/plyronest/" target="_blank" rel="https://www.linkedin.com/company/plyronest"><FaLinkedinIn /></a>
                {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a> */}
                <a href="https://www.instagram.com/plyronest/#" target="_blank" rel="https://www.instagram.com/plyronest"><FaInstagram /></a>
                <a href="https://www.youtube.com/@PLYRoNeST8/videos" target="_blank" rel="https://www.youtube.com/@PLYRoNeST8"><FaYoutube /></a>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Plyronest,Tumkur-572101,Karnataka, India
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Email: plyronest8@gmail.com</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
