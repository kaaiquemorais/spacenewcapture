import { useState } from 'react';

interface HeroProps {
  onCTAClick: () => void;
}

const SIZES = ['P', 'M', 'G', 'GG', 'XGG'];

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzrdvgVJ0Lvtd9HezpoFHvkTiciP8WjYQ1EPgZD58nIny4yxe1CrQT0KMuK7W7caOaQ/exec';

const baseInputStyle: React.CSSProperties = {
  background: 'rgba(0,255,136,0.04)',
  border: '1px solid rgba(0,255,136,0.2)',
};

function CaptureForm() {
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', tamanho: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value.replace(/\D/g, '');
    if (v.length > 11) v = v.slice(0, 11);
    if (v.length >= 7) v = `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7)}`;
    else if (v.length >= 3) v = `(${v.slice(0, 2)}) ${v.slice(2)}`;
    setForm(prev => ({ ...prev, telefone: v }));
  };

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.target.style.borderColor = '#00ff88';
    e.target.style.boxShadow = '0 0 12px rgba(0,255,136,0.25)';
  };
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.target.style.borderColor = 'rgba(0,255,136,0.2)';
    e.target.style.boxShadow = 'none';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const data = {
        fullName: form.nome,
        email: form.email,
        phone: form.telefone,
        shirtSize: form.tamanho,
      };

      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      setSubmitted(true);
    } catch {
      setError('Erro ao enviar. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div
        className="flex flex-col items-center gap-3 p-6 rounded-2xl text-center w-full"
        style={{ background: 'rgba(0,255,136,0.06)', border: '1px solid rgba(0,255,136,0.35)' }}
      >
        <p className="font-orbitron text-neon-green text-sm uppercase tracking-widest">
          Cadastro realizado!
        </p>
        <p className="font-rajdhani text-white/70 text-base leading-relaxed">
          Entraremos em contato assim que as camisetas estiverem disponíveis.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
      <input
        name="nome"
        value={form.nome}
        onChange={handleChange}
        placeholder="Seu nome completo"
        required
        className="w-full font-rajdhani text-white placeholder-white/35 px-4 py-3 rounded-xl outline-none transition-all duration-200 text-base"
        style={baseInputStyle}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="E-mail"
        required
        className="w-full font-rajdhani text-white placeholder-white/35 px-4 py-3 rounded-xl outline-none transition-all duration-200 text-base"
        style={baseInputStyle}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <input
        name="telefone"
        value={form.telefone}
        onChange={handlePhone}
        placeholder="Telefone / WhatsApp"
        required
        className="w-full font-rajdhani text-white placeholder-white/35 px-4 py-3 rounded-xl outline-none transition-all duration-200 text-base"
        style={baseInputStyle}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <select
        name="tamanho"
        value={form.tamanho}
        onChange={handleChange}
        required
        className="w-full font-rajdhani px-4 py-3 rounded-xl outline-none transition-all duration-200 cursor-pointer text-base"
        style={{
          ...baseInputStyle,
          background: '#080f0b',
          color: form.tamanho ? '#fff' : 'rgba(255,255,255,0.35)',
        }}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        <option value="" disabled style={{ color: 'rgba(255,255,255,0.35)', background: '#080f0b' }}>
          Tamanho da camiseta
        </option>
        {SIZES.map(s => (
          <option key={s} value={s} style={{ color: '#fff', background: '#080f0b' }}>{s}</option>
        ))}
      </select>

      {error && (
        <p className="font-rajdhani text-red-400 text-sm text-center">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="font-orbitron font-bold text-sm uppercase tracking-widest bg-neon-green text-black py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_44px_rgba(0,255,136,0.75)] hover:-translate-y-1 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed mt-1"
        style={{ boxShadow: '0 0 22px rgba(0,255,136,0.42)' }}
      >
        {loading ? 'Enviando...' : 'Quero Garantir Minha Camiseta'}
      </button>
    </form>
  );
}

export default function Hero({ onCTAClick }: HeroProps) {
  return (
    <section className="relative bg-black">

      {/* ── DESKTOP ─────────────────────────────────────────── */}
      <div className="hidden md:block relative" style={{ height: '100vh', minHeight: 680 }}>

        {/* Hero image */}
        <img
          src="https://i.imgur.com/2kIOcBe.png"
          alt="Space Chimp Hero"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />

        {/* Left gradient veil for text legibility */}
        <div
          className="absolute inset-y-0 left-0 pointer-events-none"
          style={{
            width: '58%',
            background: 'linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.65) 70%, transparent 100%)',
            zIndex: 4,
          }}
        />

        {/* Left panel — text + form */}
        <div
          className="relative flex flex-col items-start"
          style={{
            zIndex: 10,
            padding: 'clamp(1.5rem, 3vh, 3rem) 0 clamp(1.5rem, 3vh, 3rem) 6%',
            height: '100%',
            justifyContent: 'center',
            gap: 'clamp(0.5rem, 1.4vh, 1rem)',
            maxWidth: 460,
          }}
        >
          <img
            src="https://i.postimg.cc/3w7rqywz/space-logo-vetor.png"
            alt="SpaceChimp Logo"
            className="animate-logoGlow"
            style={{ width: 'clamp(72px, 9vh, 120px)' }}
          />

          <h1
            className="font-orbitron font-black uppercase leading-none"
            style={{ fontSize: 'clamp(1.75rem, 3.4vw, 3rem)', letterSpacing: '3px' }}
          >
            <span style={{ color: '#ffffff' }}>CAMISETAS</span><br />
            <span className="glow-green" style={{ color: '#00ff88' }}>SPACECHIMP</span>
          </h1>

          <p
            className="font-rajdhani font-medium"
            style={{ fontSize: 'clamp(0.85rem, 1.05vw, 1rem)', color: 'rgba(255,255,255,0.82)', letterSpacing: '2px' }}
          >
            A energia da pista, agora com você!
          </p>

          <p className="font-orbitron text-neon-green text-xs uppercase tracking-widest">
            Cadastre-se e garanta a sua
          </p>

          <CaptureForm />
        </div>
      </div>

      {/* ── MOBILE ──────────────────────────────────────────── */}
      <div className="md:hidden flex flex-col">

        {/* Content — sem imagem no topo */}
        <div className="bg-black flex flex-col items-center gap-5 px-6 pb-12 pt-12 text-center">
          <img
            src="https://i.postimg.cc/3w7rqywz/space-logo-vetor.png"
            alt="SpaceChimp Logo"
            className="w-24 animate-logoGlow"
          />

          <h1
            className="font-orbitron font-black uppercase leading-none"
            style={{ fontSize: 'clamp(1.9rem, 9vw, 2.4rem)', letterSpacing: '3px' }}
          >
            <span style={{ color: '#ffffff' }}>CAMISETAS</span><br />
            <span className="glow-green" style={{ color: '#00ff88' }}>SPACECHIMP</span>
          </h1>

          <p
            className="font-rajdhani font-medium"
            style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.82)', letterSpacing: '2px' }}
          >
            A energia da pista, agora com você!
          </p>

          <p className="font-orbitron text-neon-green text-xs uppercase tracking-widest">
            Cadastre-se e garanta a sua
          </p>

          <div className="w-full text-left">
            <CaptureForm />
          </div>
        </div>
      </div>

    </section>
  );
}
