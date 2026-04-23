export default function MedidasSection() {
  return (
    <section className="relative z-10 py-20 px-6 fade-up-section">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-8 text-center">

        <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white uppercase tracking-widest">
          Medidas da Camiseta
        </h2>

        <p className="font-rajdhani text-white/55 text-base">
          Confira a tabela de medidas antes de escolher o seu tamanho.
        </p>

        <img
          src="https://i.postimg.cc/jjcZPmKj/MEDIDAS-CAMISETA-SPACE.png"
          alt="Tabela de medidas Space Chimp"
          className="w-full max-w-2xl rounded-xl border border-neon-green/20 shadow-[0_0_32px_rgba(0,255,136,0.08)]"
        />

      </div>
    </section>
  );
}
