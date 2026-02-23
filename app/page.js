"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Shield, Zap, Layout } from 'lucide-react';

export default function UnexIT() {
  const [step, setStep] = useState(1);
  const [sent, setSent] = useState(false);

  const services = [
    "Mobile App Development", "Website & CRM", 
    "AI & Telegram Bots", "UI/UX & Graphic Design", "SMM Services"
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500">
      {/* Navbar */}
      <nav className="fixed w-full z-50 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-black tracking-tighter italic text-blue-500">UNEX IT</h1>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-white transition">Services</a>
          <a href="#" className="hover:text-white transition">Case Studies</a>
          <a href="#" className="hover:text-white transition">About</a>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-blue-600/20">
          Get Consultation
        </button>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="bg-blue-500/10 text-blue-500 border border-blue-500/20 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            Premium IT Solutions
          </span>
          <h2 className="mt-8 text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto">
            We Build Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 text-glow">Infrastructure</span>
          </h2>
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            UNEX IT - yuqori darajadagi dasturiy ta'minot va avtomatlashtirish xizmatlari. Biz bilan biznesingizni yangi bosqichga olib chiqing.
          </p>
        </motion.div>

        {/* Lead Generation Form */}
        <motion.div 
          className="mt-16 max-w-xl mx-auto bg-[#0A0A0A] border border-white/10 p-8 rounded-[32px] shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
        >
          {sent ? (
            <div className="py-10 text-center">
              <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">✓</div>
              <h3 className="text-2xl font-bold">So'rov yuborildi!</h3>
              <p className="text-gray-400 mt-2">Tez orada mutaxassislarimiz bog'lanishadi.</p>
            </div>
          ) : (
            <>
              <div className="flex justify-between mb-8">
                {[1, 2, 3].map(i => (
                  <div key={i} className={`h-1 w-[30%] rounded-full ${step >= i ? 'bg-blue-500' : 'bg-white/10'}`} />
                ))}
              </div>

              {step === 1 && (
                <div className="text-left animate-in fade-in duration-500">
                  <h3 className="text-xl font-bold mb-4 italic">Sizga qanday xizmat kerak?</h3>
                  <div className="grid gap-2">
                    {services.map(s => (
                      <button key={s} onClick={() => setStep(2)} className="w-full text-left p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/50 hover:bg-blue-500/5 transition capitalize">
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="text-left animate-in slide-in-from-right duration-500">
                  <h3 className="text-xl font-bold mb-4 italic">Biznesingiz yo'nalishi?</h3>
                  <input type="text" placeholder="Masalan: E-commerce, Logistika..." className="w-full p-4 bg-white/5 rounded-2xl border border-white/10 focus:border-blue-500 outline-none mb-4" />
                  <button onClick={() => setStep(3)} className="w-full bg-blue-600 py-4 rounded-2xl font-bold hover:shadow-xl hover:shadow-blue-600/20 transition">Davom etish</button>
                </div>
              )}

              {step === 3 && (
                <div className="text-left animate-in slide-in-from-right duration-500">
                  <h3 className="text-xl font-bold mb-4 italic">Aloqa ma'lumotlari</h3>
                  <input type="text" placeholder="To'liq ismingiz" className="w-full p-4 bg-white/5 rounded-2xl border border-white/10 focus:border-blue-500 outline-none mb-4" />
                  <input type="tel" placeholder="+998 (__) ___-__-__" className="w-full p-4 bg-white/5 rounded-2xl border border-white/10 focus:border-blue-500 outline-none mb-6" />
                  <button onClick={() => setSent(true)} className="w-full bg-blue-600 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-600/40 transition">Loyihani Boshlash</button>
                </div>
              )}
            </>
          )}
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {[
          { icon: <Zap />, title: "Tezkorlik", desc: "Eng so'nggi texnologiyalar yordamida maksimal tezlik." },
          { icon: <Shield />, title: "Xavfsizlik", desc: "Sizning ma'lumotlaringiz va biznesingiz to'liq himoyada." },
          { icon: <Rocket />, title: "Scalability", desc: "Katta yuklamalarga chidamli barqaror tizimlar." }
        ].map((item, i) => (
          <div key={i} className="p-8 rounded-3xl border border-white/5 bg-white/2 hover:border-blue-500/30 transition">
            <div className="text-blue-500 mb-4">{item.icon}</div>
            <h4 className="text-xl font-bold mb-2">{item.title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}