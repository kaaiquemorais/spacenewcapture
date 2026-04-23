export default function AlienSocietySection() {
  return (
    <section
      className="relative z-10 py-20 px-6 fade-up-section"
      style={{ background: '#040804', borderTop: '1px solid rgba(0,255,136,0.16)' }}
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-5 text-center">

        <p className="font-orbitron text-neon-green text-xs uppercase tracking-widest">Produção</p>

        <a href="https://www.aliensociety.com.br/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://i.postimg.cc/cCgbQYRz/Design-sem-nome-(12).png"
            alt="Alien Society"
            className="h-14 opacity-82 hover:opacity-100 transition-opacity duration-300"
          />
        </a>

        <p className="font-rajdhani text-white/65 text-lg leading-relaxed max-w-xl">
          A Alien Society vai além de criar roupas. Cada peça funciona como uma cápsula de
          comunicação entre mundos, simbolizando a conexão entre diferentes realidades, culturas
          e frequências. Suas criações carregam identidade, energia e propósito, fazendo com que
          quem veste também faça parte dessa ligação. Presente na web, nas pistas e em grandes
          festas e festivais, a Alien Society espalha sua mensagem para todos que vivem essa
          mesma vibração.
        </p>

        <a
          href="https://www.aliensociety.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-orbitron text-neon-green text-xs uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-300 hover:bg-neon-green/7 hover:shadow-[0_0_14px_rgba(0,255,136,0.22)]"
          style={{ border: '1px solid rgba(0,255,136,0.22)' }}
        >
          Conhecer a Alien Society
        </a>

        <p className="font-rajdhani text-white/28 text-sm italic">
          A Alien Society não possui qualquer relação com a venda desta camiseta.
        </p>

      </div>
    </section>
  );
}
