export default function Footer() {
  return (
    <footer
      className="relative z-10 py-14 px-6"
      style={{ background: '#000', borderTop: '1px solid rgba(0,255,136,0.16)' }}
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6 text-center">

        <img
          src="https://i.postimg.cc/3w7rqywz/space-logo-vetor.png"
          alt="SpaceChimp Logo"
          className="h-12 drop-glow opacity-85"
        />

        <p className="font-rajdhani text-white/42 text-base leading-relaxed max-w-sm">
          Ouça as produções do SpaceChimp e mergulhe na energia do Hi-Tech
        </p>

        {/* SoundCloud button */}
        <a
          href="https://soundcloud.com/spacechimp2000"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 font-orbitron text-xs uppercase tracking-widest px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-[0_0_24px_rgba(255,85,0,0.32)]"
          style={{
            color: '#ff5500',
            border: '1px solid rgba(255,85,0,0.35)',
            background: 'rgba(255,85,0,0.05)',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor">
            <path d="M1.6 20.9q0 1.3.9 2.2t2.2.9q1.3 0 2.2-.9t.9-2.2l-.5-6.3q-.1-.8-.7-1.3t-1.4-.5q-.8 0-1.4.5t-.7 1.3l-.5 6.3zm5.3 0q0 1.3.9 2.2t2.2.9q1.3 0 2.2-.9t.9-2.2l-.6-9.2q-.1-.8-.7-1.3t-1.4-.5q-.8 0-1.4.5t-.7 1.3l-.4 9.2zm5.4 0q0 1.3.9 2.2t2.2.9q1.3 0 2.2-.9t.9-2.2l-.6-11.4q-.1-.8-.7-1.4t-1.4-.6q-.8 0-1.4.6t-.7 1.4l-.4 11.4zm5.5-8.3q0 .2 0 .4l-.4 7.9q0 1.3.9 2.2t2.2.9q1.3 0 2.2-.9t.9-2.2l-.4-7.9q0-.2 0-.4 0-1.8-1.3-3.1t-3.1-1.3q-.3 0-.4.1.5 1 .5 2.4zm5.5 8.3q0 1.3.9 2.2t2.2.9q.9 0 1.7-.5t1.2-1.2q1.7.1 3-.1 1.2-.1 2.1-.8t1.4-1.7.5-2.2q0-1.3-.5-2.2t-1.4-1.7-2.1-.8q-.5 0-1 .2-.4-1.6-1.8-2.6t-3.1-1.1q-.5 0-1 .1.8.8.8 2l.1 7.9v.5z"/>
          </svg>
          Ouvir no SoundCloud
        </a>

        {/* Bottom meta */}
        <div className="flex flex-col gap-1.5 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p className="font-rajdhani text-white/24 text-sm">
            Space Chimp — Brasil
          </p>
          <p className="font-rajdhani text-white/24 text-sm">
            Contato:{' '}
            <a
              href="https://wa.me/5519971454713"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-green hover:underline"
            >
              WhatsApp
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
