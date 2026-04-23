export default function PeyotechSection() {
  return (
    <section
      className="relative z-10 py-20 px-6 fade-up-section"
      style={{ background: '#07100a', borderTop: '1px solid rgba(0,255,136,0.16)' }}
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-5 text-center">

        <p className="font-orbitron text-neon-green text-xs uppercase tracking-widest">Gravadora</p>

        <a href="https://peyotechcrew.bandcamp.com/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://i.postimg.cc/WzTLXbZs/peyotech-logo.png"
            alt="Peyotech"
            className="h-14 opacity-82 hover:opacity-100 transition-opacity duration-300"
          />
        </a>

        <p className="font-rajdhani text-white/65 text-lg leading-relaxed max-w-xl">
          A Peyotech é um selo independente de música eletrônica psicodélica (Hi-Tech Psytrance)
          que reúne produtores internacionais, lança compilações e participa da organização de
          eventos e projetos ligados à cultura psytrance, sendo responsável pelos lançamentos do
          SpaceChimp na cena global.
        </p>

        <a
          href="https://peyotechcrew.bandcamp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-orbitron text-neon-green text-xs uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-300 hover:bg-neon-green/7 hover:shadow-[0_0_14px_rgba(0,255,136,0.22)]"
          style={{ border: '1px solid rgba(0,255,136,0.22)' }}
        >
          Conhecer a Peyotech
        </a>

        <p className="font-rajdhani text-white/28 text-sm italic">
          A Peyotech não possui qualquer relação com a venda desta camiseta.
        </p>

      </div>
    </section>
  );
}
