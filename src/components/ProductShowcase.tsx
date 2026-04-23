import { useState } from 'react';

export default function ProductShowcase() {
  const [side, setSide] = useState<'front' | 'back'>('front');

  return (
    <section className="relative z-10 grid-tex py-24 px-6 fade-up-section" style={{ background: '#000000' }}>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* ── Images ─────────────────────────────────────────── */}
        <div>
          <div>
            <img
              src={side === 'front'
                ? 'https://i.postimg.cc/j5s4vKRj/frente-space.png'
                : 'https://i.postimg.cc/Y00fK34D/costas-space.png'}
              alt={side === 'front' ? 'Camiseta SpaceChimp - Frente' : 'Camiseta SpaceChimp - Costas'}
              className="w-full h-auto block transition-all duration-300"
              style={{ filter: 'drop-shadow(0 0 18px rgba(0,255,136,0.7)) drop-shadow(0 0 6px rgba(0,255,136,0.4))' }}
            />
          </div>

          {/* Toggle */}
          <div className="flex gap-2 mt-3">
            {(['front', 'back'] as const).map(s => (
              <button
                key={s}
                onClick={() => setSide(s)}
                className={[
                  'flex-1 py-2 rounded-full text-sm font-rajdhani font-semibold uppercase tracking-wide transition-all duration-250',
                  side === s
                    ? 'bg-neon-green text-black'
                    : 'border border-neon-green/20 text-white/60 hover:border-neon-green/50 hover:text-neon-green',
                ].join(' ')}
              >
                {s === 'front' ? 'Frente' : 'Costas'}
              </button>
            ))}
          </div>
        </div>

        {/* ── Info ───────────────────────────────────────────── */}
        <div className="flex flex-col gap-5">

          <span
            className="self-start font-orbitron text-neon-green text-xs uppercase tracking-widest px-4 py-1.5 rounded-full"
            style={{ border: '1px solid rgba(0,255,136,0.35)', background: 'rgba(0,255,136,0.07)' }}
          >
            Edição Limitada
          </span>

          <p className="font-rajdhani text-white/70 text-lg leading-relaxed">
            Uma peça exclusiva para quem vive a energia do hi-tech psytrance.
            Design autoral, qualidade premium e edição limitada feita especialmente para o Brasil.
          </p>

          <ul className="flex flex-col gap-2.5">
            {[
              'Edição limitada — poucas unidades disponíveis',
              'Design exclusivo SpaceChimp',
              'Enviamos para todo o Brasil',
              'Atendimento direto via WhatsApp',
            ].map(f => (
              <li key={f} className="flex items-center gap-3 font-rajdhani text-white/78 text-base">
                <span
                  className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-neon-green"
                  style={{ boxShadow: '0 0 7px #00ff88' }}
                />
                {f}
              </li>
            ))}
          </ul>

          {/* Silk Screen info */}
          <div
            className="flex gap-4 p-4 rounded-xl"
            style={{ background: 'rgba(0,255,136,0.04)', border: '1px solid rgba(0,255,136,0.14)' }}
          >
            <div className="flex-shrink-0 mt-0.5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00ff88" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M3 9h18M9 21V9"/>
              </svg>
            </div>
            <div>
              <p className="font-orbitron text-neon-green text-xs uppercase tracking-widest mb-1.5">Tipo de Impressão</p>
              <p className="font-rajdhani text-white/68 text-base leading-relaxed">
                A impressão é feita a partir do <span className="text-white/90 font-semibold">Silk Screen</span>.
                O desenho é gravado em uma matriz (tela) e transferido para o tecido por processo manual.
                Totalmente artesanal!
              </p>
            </div>
          </div>

          <div
            className="flex items-center gap-2 pt-4"
            style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
          >
            <span className="font-rajdhani text-white/28 text-xs uppercase tracking-wide">Produzida por</span>
            <a href="https://www.aliensociety.com.br/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://i.postimg.cc/v8JZF22Q/parvati-logo.png"
                alt="Alien Society"
                className="h-6 opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
