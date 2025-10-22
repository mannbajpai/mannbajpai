import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
// avatar is present in assets but not used directly in this component UI
import { AiOutlineUser, AiOutlineMail, AiOutlineMessage } from "react-icons/ai"
import { FaGithub, FaLinkedin } from "react-icons/fa6"
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si"
import toast from 'react-hot-toast';
import { FaLocationArrow } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm('service_zau5jqa', 'template_5fk46qv', form.current, {
        publicKey: 'HEr0KPooGdGU9Ciw9',
      })
      .then(
        () => {
          toast.success("Email sent successfully!");
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send email. Please try again.");
          console.error(error);
        },
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/mannbajpai", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/mannbajpai/", label: "LinkedIn" },
    { icon: FaSquareXTwitter, href: "https://x.com/minjacodes", label: "Twitter" },
    { icon: SiLeetcode, href: "https://leetcode.com/u/mannbajpai/", label: "LeetCode" },
  ];

  return (
    <section id="contact" className="section-padding bg-base-200">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-primary">Get In Touch</h2>
          <p className="text-body max-w-3xl mx-auto">
            Have a project in mind or just want to chat? I&apos;d love to hear from you. 
            Send me a message and I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="card-modern p-8">
            <div className="flex items-center gap-3 mb-8">
              <AiOutlineMessage className="text-3xl text-primary" />
              <h3 className="heading-secondary">Send a Message</h3>
            </div>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Your Name</span>
                </label>
                <div className="relative">
                  <AiOutlineUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/50" />
                  <input 
                    type="text" 
                    name="user_name" 
                    placeholder="Enter your name" 
                    className="input input-bordered w-full pl-10 focus:input-primary" 
                    required
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Your Email</span>
                </label>
                <div className="relative">
                  <AiOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/50" />
                  <input 
                    type="email" 
                    name="user_email" 
                    placeholder="Enter your email" 
                    className="input input-bordered w-full pl-10 focus:input-primary" 
                    required
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Your Message</span>
                </label>
                <textarea 
                  name="message" 
                  className="textarea textarea-bordered h-32 focus:textarea-primary" 
                  placeholder="Tell me about your project or just say hello!"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`btn btn-gradient w-full ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="card-modern p-8">
              <h3 className="heading-secondary mb-6">Let&apos;s Connect</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center">
                    <AiOutlineMail className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-small text-base-content/70">mannbajpai.grs@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-xl flex items-center justify-center">
                    <FaLocationArrow className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-small text-base-content/70">Bangalore, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="card-modern p-8">
              <h3 className="heading-secondary mb-6">Follow Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 p-4 bg-base-100 rounded-xl hover:bg-base-200 transition-colors duration-200 group"
                  >
                    <social.icon className="text-2xl text-primary group-hover:scale-110 transition-transform" />
                    <span className="font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Fun Chat Mockup */}
            {/* <div className="hidden lg:block">
              <div className="card-modern p-6">
                <div className="mockup-phone">
                  <div className="camera"></div>
                  <div className="display">
                    <div className="artboard artboard-demo phone-1">
                      <div className="card bg-base-100 w-full h-full flex-col">
                        <div className="navbar bg-primary h-16 rounded-t-2xl justify-center">
                          <a className="text-lg font-semibold text-primary-content">Portfolio Chat</a>
                        </div>
                        <div className="p-4 space-y-3 flex-1">
                          <div className="chat chat-start">
                            <div className="chat-image avatar">
                              <div className="w-8 rounded-full">
                                <img src={avatar} alt="Mann" loading="lazy" />
                              </div>
                            </div>
                            <div className="chat-bubble bg-primary/10 text-sm">
                              Hey! Want to see how I built this? 😊
                            </div>
                          </div>
                          <div className="chat chat-end">
                            <div className="chat-image avatar">
                              <div className="w-8 rounded-full bg-base-300 flex items-center justify-center">
                                <AiOutlineUser className="text-base-content/70" />
                              </div>
                            </div>
                            <div className="chat-bubble bg-base-200 text-sm">
                              Sure, show me!
                            </div>
                          </div>
                          <div className="text-center pt-2">
                            <a href="https://github.com/mannbajpai/mannbajpai" target="_blank" rel="noreferrer">
                              <button className="btn btn-primary btn-sm rounded-full">
                                <FaCode className="w-4 h-4 mr-1" />
                                View Code
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact