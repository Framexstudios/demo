import { motion, AnimatePresence } from 'motion/react';
import { X, Upload, CheckCircle2, QrCode } from 'lucide-react';
import React from 'react';
import { cn } from '@/src/lib/utils';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  price: string;
}

export function CheckoutModal({ isOpen, onClose, planName, price }: CheckoutModalProps) {
  const [step, setStep] = React.useState(1);
  const [email, setEmail] = React.useState('');
  const [file, setFile] = React.useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && file) {
      setStep(3);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-navy-950/80 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-xl glass p-8 md:p-12 rounded-[3rem] border border-gold-500/20 shadow-2xl overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 gold-gradient blur-[80px] opacity-10" />
            
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-slate-500 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="text-center mb-8">
                  <span className="text-gold-400 font-display font-medium uppercase tracking-[0.2em] text-[10px] mb-2 block">Secure Checkout</span>
                  <h3 className="text-3xl font-serif text-white">{planName}</h3>
                  <p className="text-slate-400 mt-2 font-serif italic">The investment: ${price} USD</p>
                </div>

                <div className="bg-white p-6 rounded-3xl mx-auto w-fit mb-8 shadow-xl">
                  {/* QR Code Placeholder - In a real app this would be a real UPI/Payment QR */}
                  <div className="w-48 h-48 bg-slate-100 flex items-center justify-center rounded-2xl border-4 border-slate-50">
                    <QrCode size={140} className="text-navy-950" strokeWidth={1} />
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-navy-950 font-bold text-sm">Scan to Pay</p>
                    <p className="text-slate-500 text-[10px] uppercase tracking-widest mt-1">UPI / Crypto / Digital Wallet</p>
                  </div>
                </div>

                <button 
                  onClick={() => setStep(2)}
                  className="w-full gold-gradient text-navy-950 py-5 rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-gold-500/10"
                >
                  I've Made the Payment
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-serif text-white">Payment Verification</h3>
                  <p className="text-slate-400 mt-2">Upload your screenshot and provide your Google Drive email.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 ml-4">Drive Email Address</label>
                    <input 
                      required
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="discerning.builder@gmail.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold-500/30 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 ml-4">Payment Screenshot</label>
                    <div className={cn(
                      "relative border-2 border-dashed rounded-3xl p-8 transition-all flex flex-col items-center justify-center gap-4 cursor-pointer",
                      file ? "border-gold-500/50 bg-gold-500/5" : "border-white/10 bg-white/5 hover:border-gold-500/30"
                    )}>
                      <input 
                        required
                        type="file" 
                        accept="image/*"
                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                        className="absolute inset-0 opacity-0 cursor-pointer" 
                      />
                      <div className="w-12 h-12 rounded-full glass-gold flex items-center justify-center text-gold-400">
                        <Upload size={24} />
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-bold text-white">{file ? file.name : "Select or drag screenshot"}</p>
                        <p className="text-xs text-slate-500 mt-1">JPG, PNG up to 5MB</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button 
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 glass text-slate-400 py-5 rounded-2xl font-bold transition-all hover:bg-white/10"
                    >
                      Back
                    </button>
                    <button 
                      type="submit"
                      className="flex-[2] gold-gradient text-navy-950 py-5 rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-gold-500/10"
                    >
                      Submit for Review
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-24 h-24 rounded-full glass-gold flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-gold-500/20 border-2 border-gold-400">
                  <CheckCircle2 size={48} className="text-gold-400" />
                </div>
                <h3 className="text-4xl font-serif text-white mb-6">Submission Successful</h3>
                <p className="text-slate-400 text-lg leading-relaxed max-w-sm mx-auto mb-10 italic">
                  "Patience is the foundation of every empire."
                </p>
                <p className="text-slate-500 leading-relaxed max-w-sm mx-auto">
                  Our team will verify your transaction. Once confirmed, your collection will be delivered to <span className="text-gold-400 font-bold">{email}</span> on Google Drive within 2-4 hours.
                </p>
                
                <button 
                  onClick={onClose}
                  className="mt-12 w-full glass text-white py-5 rounded-2xl font-bold hover:bg-white/10 transition-all border border-white/10"
                >
                  Return to Store
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
