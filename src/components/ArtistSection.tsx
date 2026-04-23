export default function ArtistSection() {
  return (
    <section
      className="relative z-10 py-24 px-6 fade-up-section"
      style={{ background: '#07100a', borderTop: '1px solid rgba(0,255,136,0.16)', borderBottom: '1px solid rgba(0,255,136,0.16)' }}
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* ── Photo ─────────────────────────────────────────── */}
        <div className="relative">
          <img
            src="https://i.postimg.cc/1t7JTqyk/sacha.webp"
            alt="Sascha - SpaceChimp"
            className="w-full max-w-md rounded-2xl block transition-all duration-500 hover:brightness-110"
            style={{
              border: '1px solid rgba(0,255,136,0.18)',
              boxShadow: '0 0 40px rgba(0,255,136,0.08)',
              filter: 'grayscale(12%) contrast(1.06)',
            }}
          />
          <img
            src="https://i.postimg.cc/3w7rqywz/space-logo-vetor.png"
            alt="SpaceChimp Logo"
            className="absolute -bottom-4 right-4 w-14 animate-logoGlow"
          />
        </div>

        {/* ── Bio ───────────────────────────────────────────── */}
        <div className="flex flex-col gap-5">
          <div>
            <p className="font-orbitron text-neon-green text-xs uppercase tracking-widest mb-2">O Artista</p>
            <h2 className="font-orbitron font-bold leading-tight" style={{ fontSize: 'clamp(1.7rem, 3.8vw, 2.6rem)' }}>
              Sascha<br />
              <span className="text-neon-green glow-green-sm">SpaceChimp</span>
            </h2>
          </div>

          <p className="font-rajdhani text-white/78 text-lg leading-relaxed">
            Sascha, conhecido artisticamente como Spacechimp, é um produtor e DJ da cena de
            hi-tech psytrance. Seu projeto ganhou destaque dentro do gênero por produções
            extremamente rápidas, intensas e cheias de elementos psicodélicos.
          </p>

          <p className="font-rajdhani text-white/78 text-lg leading-relaxed">
            As músicas de Spacechimp são marcadas por bpm muito acelerado, synths agressivos
            e construções sonoras complexas, características típicas do hi-tech moderno. Ao
            longo da carreira, Sascha construiu uma identidade forte dentro da cena, criando
            faixas pensadas para pistas de festivais e eventos underground, mantendo sempre
            uma energia alta e constante em suas produções.
          </p>
        </div>

      </div>
    </section>
  );
}
