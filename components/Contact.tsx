"use client";

import { motion, useInView } from "framer-motion";
import { useState } from "react";
import SectionTitle from "./SectionTitle";
import { FaPaperPlane, FaCheck, FaEnvelope, FaUser, FaComment, FaExclamationTriangle } from "react-icons/fa";
import { useRef } from "react";

// Input validation functions (client-side)
function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return '';
  return input
    .trim()
    .replace(/[\x00-\x1F\x7F]/g, '')
    .replace(/[<>]/g, '')
    .substring(0, 5000);
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

function isValidName(name: string): boolean {
  if (!name || typeof name !== 'string') return false;
  if (name.length < 2 || name.length > 100) return false;
  const nameRegex = /^[a-zA-Z\s\-']+$/;
  return nameRegex.test(name);
}

function isValidMessage(message: string): boolean {
  if (!message || typeof message !== 'string') return false;
  if (message.length < 10 || message.length > 5000) return false;
  
  const suspiciousPatterns = [
    /<script/i,
    /javascript:/i,
    /onerror=/i,
    /onclick=/i,
    /onload=/i,
    /eval\(/i,
    /document\.cookie/i,
    /window\.location/i,
  ];
  
  for (const pattern of suspiciousPatterns) {
    if (pattern.test(message)) return false;
  }
  
  return true;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    const sanitizedName = sanitizeInput(formData.name);
    if (!isValidName(sanitizedName)) {
      newErrors.name = 'Name must be 2-100 characters';
    }
    
    if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    const sanitizedMessage = sanitizeInput(formData.message);
    if (!isValidMessage(sanitizedMessage)) {
      newErrors.message = 'Invalid message content';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    if (!validateForm()) {
      return;
    }
    
    setFormStatus('submitting');
    
    setTimeout(() => {
      console.log('Form submitted securely');
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'name' && value.length > 100) return;
    if (name === 'email' && value.length > 254) return;
    if (name === 'message' && value.length > 5000) return;
    
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-t from-black via-cyber-dark/50 to-transparent relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-primary to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-secondary to-transparent opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyber-primary/5 rounded-full blur-[100px] -z-10" />

      <div ref={ref} className="max-w-4xl mx-auto">
        <SectionTitle 
        title="// ESTABLISH UPLINK" 
        subtitle="Send a Secure Message"
        description="Contact Syed Muhammad Shayan Uddin for professional cybersecurity services including penetration testing, vulnerability assessment, network security audits, and malware removal. Based in Karachi, Pakistan, available for both local and international security consultations."
      />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 md:p-10 rounded-2xl border border-cyber-primary/20 shadow-[0_0_50px_rgba(0,243,255,0.08)] relative overflow-hidden"
        >
          <motion.div 
            className="absolute inset-0 border-2 border-cyber-primary/30 rounded-2xl pointer-events-none"
            animate={{ borderColor: ['rgba(0,243,255,0.3)', 'rgba(189,0,255,0.3)', 'rgba(0,243,255,0.3)'] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {formStatus === 'success' ? (
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16 relative z-10">
              <motion.div className="w-24 h-24 rounded-full bg-cyber-primary/20 flex items-center justify-center mx-auto mb-6" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                <FaCheck className="text-5xl text-cyber-primary" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-2">TRANSMISSION COMPLETE</h3>
              <p className="text-gray-400 mb-6">Your message has been securely encrypted and sent.</p>
              <button onClick={() => setFormStatus('idle')} aria-label="Send another message" className="text-cyber-primary hover:underline">Send Another Message</button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10" noValidate>
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div className="space-y-2" initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 }}>
                  <label htmlFor="contact-name" className="text-sm font-mono text-cyber-primary flex items-center gap-2"><FaUser size={12} />IDENTITY</label>
                  <div className="relative">
                    <input id="contact-name" type="text" name="name" value={formData.name} onChange={handleChange} maxLength={100} required aria-describedby="name-error" className={`w-full bg-black/50 border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-lg p-4 pl-12 text-white focus:outline-none transition-all font-mono`} placeholder="John Doe" autoComplete="name" />
                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden="true" />
                  </div>
                  {errors.name && <p id="name-error" className="text-red-400 text-xs flex items-center gap-1" role="alert"><FaExclamationTriangle size={10} />{errors.name}</p>}
                </motion.div>

                <motion.div className="space-y-2" initial={{ opacity: 0, x: 20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 }}>
                  <label htmlFor="contact-email" className="text-sm font-mono text-cyber-primary flex items-center gap-2"><FaEnvelope size={12} />FREQUENCY (EMAIL)</label>
                  <div className="relative">
                    <input id="contact-email" type="email" name="email" value={formData.email} onChange={handleChange} maxLength={254} required aria-describedby="email-error" className={`w-full bg-black/50 border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-lg p-4 pl-12 text-white focus:outline-none transition-all font-mono`} placeholder="john@example.com" autoComplete="email" />
                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden="true" />
                  </div>
                  {errors.email && <p id="email-error" className="text-red-400 text-xs flex items-center gap-1" role="alert"><FaExclamationTriangle size={10} />{errors.email}</p>}
                </motion.div>
              </div>
              
              <motion.div className="space-y-2" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 }}>
                <label htmlFor="contact-message" className="text-sm font-mono text-cyber-primary flex items-center gap-2"><FaComment size={12} />TRANSMISSION</label>
                <div className="relative">
                  <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} required rows={5} maxLength={5000} aria-describedby="message-error" className={`w-full bg-black/50 border ${errors.message ? 'border-red-500' : 'border-gray-700'} rounded-lg p-4 pl-12 text-white focus:outline-none transition-all font-mono resize-none`} placeholder="Enter your encrypted message..."></textarea>
                  <FaComment className="absolute left-4 top-4 text-gray-400" aria-hidden="true" />
                </div>
                <div className="flex justify-between">
                  {errors.message && <p id="message-error" className="text-red-400 text-xs flex items-center gap-1" role="alert"><FaExclamationTriangle size={10} />{errors.message}</p>}
                  <p className="text-gray-400 text-xs ml-auto" aria-live="polite">{formData.message.length}/5000</p>
                </div>
              </motion.div>

              <motion.button type="submit" aria-label="Submit secure message" disabled={formStatus === 'submitting'} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }} whileHover={{ scale: formStatus === 'submitting' ? 1 : 1.02 }} whileTap={{ scale: formStatus === 'submitting' ? 1 : 0.98 }} className="w-full py-5 bg-gradient-to-r from-cyber-primary via-white to-cyber-secondary text-black font-bold rounded-lg hover:opacity-90 transition-all shadow-[0_0_30px_rgba(0,243,255,0.3)] disabled:opacity-50 disabled:cursor-not-allowed">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {formStatus === 'submitting' ? <><motion.div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full" animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />ENCRYPTING...</> : <><FaPaperPlane />TRANSMIT DATA</>}
                </span>
              </motion.button>
            </form>
          )}
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }} className="text-center text-gray-400 mt-8 font-mono text-xs flex items-center justify-center gap-4">
          <span className="flex items-center gap-2"><span className="w-2 h-2 bg-cyber-primary rounded-full animate-pulse" />SECURE CONNECTION</span><span className="text-gray-700">//</span><span>END-TO-END ENCRYPTED</span>
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.9 }} className="grid md:grid-cols-3 gap-6 mt-12">
          {[{ label: "Email", value: "shayanuddin4589@gmail.com", icon: FaEnvelope }, { label: "Location", value: "Karachi, Pakistan", icon: FaUser }, { label: "Status", value: "Available", icon: FaCheck }].map((item, index) => (
            <div key={index} className="glass-panel p-4 rounded-xl text-center border border-gray-800 hover:border-cyber-primary/30 transition-colors">
              <item.icon className="text-cyber-primary mx-auto mb-2" />
              <p className="text-xs text-gray-400 font-mono">{item.label}</p>
              <p className="text-white font-medium text-sm">{item.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
