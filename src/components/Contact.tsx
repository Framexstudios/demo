import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-24 bg-navy-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-400 font-display font-medium uppercase tracking-[0.3em] text-[10px] mb-4 block">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Connect with the Vision</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Have questions about the collection or mentorship? Reach out directly to our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-[2rem] border border-white/5">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl glass-gold flex items-center justify-center border border-gold-500/20 shrink-0">
                  <Mail className="text-gold-400" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Email Us</h4>
                  <p className="text-slate-400">support@wealthyvibes.com</p>
                  <p className="text-slate-500 text-sm mt-1">Response within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-[2rem] border border-white/5">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl glass-gold flex items-center justify-center border border-gold-500/20 shrink-0">
                  <Phone className="text-gold-400" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Call Us</h4>
                  <p className="text-slate-400">+91 90000 00000</p>
                  <p className="text-slate-500 text-sm mt-1">Mon - Fri, 10am - 6pm IST</p>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-[2rem] border border-white/5">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl glass-gold flex items-center justify-center border border-gold-500/20 shrink-0">
                  <MapPin className="text-gold-400" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Office</h4>
                  <p className="text-slate-400">Hyderabad, India</p>
                  <p className="text-slate-500 text-sm mt-1">Strategic Wealth Headquarters</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-[3rem] border border-white/10"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 ml-4">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold-500/30 transition-all font-sans"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 ml-4">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold-500/30 transition-all font-sans"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 ml-4">Subject</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold-500/30 transition-all font-sans appearance-none">
                  <option className="bg-navy-950">General Inquiry</option>
                  <option className="bg-navy-950">Book Order Support</option>
                  <option className="bg-navy-950">Mentorship Inquiry</option>
                  <option className="bg-navy-950">Media/Press</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 ml-4">Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can we help you on your wealth journey?"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold-500/30 transition-all font-sans resize-none"
                ></textarea>
              </div>

              <button className="w-full gold-gradient text-navy-950 py-5 md:py-5 rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-gold-500/10 flex items-center justify-center gap-3">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
