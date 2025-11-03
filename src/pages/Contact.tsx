import Layout from '../components/Layout';
import { useState } from 'react';

export default function Contact() {

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <Layout>
    <div className="min-h-screen bg-white overflow-x-hidden max-w-full">

      <div className="bg-gradient-to-r from-[#028a04] to-[#028a04] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-[#e6f7e9]">Let's work together for a sustainable future</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-[#028a04] mb-6">Get in Touch</h2>
            <p className="text-gray-700 mb-8">
              Have questions about our services or want to partner with us? We'd love to hear from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#028a04] mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-[#028a04] mb-1">Office Address</h3>
                  <p className="text-gray-600">Bosepa Annex, Adjacent National Population Commission, Gidan Madara, Maiduguri</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#028a04] mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-[#028a04] mb-1">Email</h3>
                  <p className="text-gray-600">
                    <a href="mailto:faabyservices@gmail.com" className="hover:text-[#028a04] transition-colors">faabyservices@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#028a04] mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-[#028a04] mb-1">Phone</h3>
                  <p className="text-gray-600">
                    <a href="tel:+2348067677548" className="hover:text-[#028a04] transition-colors">+234 806 767 7548</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#e6f7e9] p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[#028a04] font-semibold mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#028a04] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-[#028a04] font-semibold mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#028a04] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-[#028a04] font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#028a04] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-[#028a04] font-semibold mb-2">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#028a04] focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#028a04] text-white py-3 rounded-lg font-semibold hover:bg-[#028a04] transition-colors"
              >
                Send Message
              </button>
              {submitted && (
                <div className="bg-green-100 text-green-700 p-3 rounded-lg text-center">
                  Message sent successfully!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}

