import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaLinkedin, FaGithub, FaWhatsapp, FaTelegram, FaInstagram } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('idle');

    try {
      // EmailJS configuration - Replace these with your actual values
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_xxxxxxx';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_xxxxxxx';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        to_name: 'Mohammad Nabil Hanif',
        to_email: 'mohammad.n.hanif@gmail.com',
        subject: `Portfolio Contact from ${formData.name}`,
        reply_to: formData.email
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setStatus('success');
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12" style={{backgroundColor: '#f8f9fa'}}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">Let's Connect</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Have a project in mind or want to connect? I'd love to hear from you.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto mb-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full"
                placeholder="Just say hello! I'd love to hear from you."
              />
            </div>
            <div className="text-center">
              <Button 
                type="submit"
                disabled={isLoading}
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </Button>
              
              {status === 'success' && (
                <p className="text-green-600 text-sm mt-3">
                  Message sent successfully! I'll get back to you soon.
                </p>
              )}
              
              {status === 'error' && (
                <p className="text-red-600 text-sm mt-3">
                  Failed to send message. Please try again or contact me directly at mohammad.n.hanif@gmail.com
                </p>
              )}
            </div>
          </form>
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-sm mb-6">
            Or connect with me on social media
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a 
              href="https://www.linkedin.com/in/mohammad-nabil-hanif-469b97303" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300"
            >
              <FaLinkedin className="w-5 h-5 text-gray-700" />
            </a>
            
            <a 
              href="https://github.com/nabilhanif" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300"
            >
              <FaGithub className="w-5 h-5 text-gray-700" />
            </a>
            
            <a 
              href="https://wa.me/6281234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300"
            >
              <FaWhatsapp className="w-5 h-5 text-gray-700" />
            </a>
            
            <a 
              href="https://t.me/nabilhanif" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300"
            >
              <FaTelegram className="w-5 h-5 text-gray-700" />
            </a>
            
            <a 
              href="https://instagram.com/nabilhanif" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300"
            >
              <FaInstagram className="w-5 h-5 text-gray-700" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;