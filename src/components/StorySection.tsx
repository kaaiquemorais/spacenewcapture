export default function StorySection() {
  return (
    <section
      className="relative z-10 grid-tex py-24 px-6 fade-up-section"
      style={{ background: '#040804' }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-orbitron text-neon-green text-xs uppercase tracking-widest mb-3">Como Tudo Começou</p>
          <h2 className="font-orbitron font-bold leading-tight" style={{ fontSize: 'clamp(1.7rem, 4vw, 2.6rem)' }}>
            A <span className="text-neon-green glow-green-sm">História</span> da Camiseta
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-14" style={{ background: 'linear-gradient(90deg, transparent, #00ff88, transparent)', boxShadow: '0 0 10px #00ff88' }} />
        </div>

        {/* Photo on top, story below */}
        <div className="flex flex-col gap-10 items-center">

          {/* Photo */}
          <div className="flex flex-col items-center gap-4 w-full max-w-2xl">
            <img
              src="https://i.postimg.cc/ht1CDZ92/ka-sascha-mat.png"
              alt="Kaique, Sascha e Matheus"
              className="w-full rounded-2xl block"
              style={{ border: '1px solid rgba(0,255,136,0.18)', boxShadow: '0 0 28px rgba(0,255,136,0.07)' }}
            />
            <p className="font-rajdhani text-white/45 text-sm text-center tracking-wide">
              Kaique, Sascha (SpaceChimp) e Matheus (Rayquazza)
            </p>
          </div>

          {/* Story text */}
          <div className="flex flex-col gap-5 max-w-3xl">
            {[
              `Tudo começou quando Sascha, do projeto SpaceChimp, veio ao Brasil pela primeira vez
               e decidimos fazer algo especial para marcar esse momento. Como fãs do som e da energia
               que ele transmite nas pistas, resolvemos criar uma camiseta exclusiva como forma de
               presente e gratidão por tantas somzeiras que marcaram a nossa história dentro do hi-tech.`,
              `A ideia era simples: um presente de fãs para um artista que admiramos muito. Quando
               mostramos a camiseta, Sascha curtiu a ideia, achou o conceito muito legal e pediu para
               que fizéssemos mais peças para o pessoal do Brasil. A partir daí, muita gente começou
               a comentar, perguntar e dizer que também queria ter uma.`,
              `Para garantir que a camiseta tivesse a melhor qualidade possível, fomos atrás da
               Alien Society, uma marca conhecida dentro da cena, para produzir as peças com um
               padrão à altura dessa homenagem. Assim conseguimos unir o conceito da camiseta com
               um material e acabamento que realmente representam a cultura hi-tech.`,
              `Por isso decidimos abrir essa oportunidade para quem também curte o som e quer
               representar essa vibe. Estamos lançando a camiseta SpaceChimp em edição limitada,
               feita especialmente para quem faz parte da cena.`,
              `Nós, Kaique e Matheus (Rayquazza), estamos à disposição para enviar para qualquer
               cidade do Brasil. Entre em contato e garanta a sua antes que acabe!`,
            ].map((p, i) => (
              <p key={i} className="font-rajdhani text-white/75 text-lg leading-relaxed text-center">{p}</p>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
