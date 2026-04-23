import { useEffect, useRef, useState } from 'react';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import ArtistSection from './components/ArtistSection';
import StorySection from './components/StorySection';
import PeyotechSection from './components/PeyotechSection';
import AlienSocietySection from './components/AlienSocietySection';
import Footer from './components/Footer';
import PreVendaBanner from './components/PreVendaBanner';
import MedidasSection from './components/MedidasSection';

// ── Particle system ────────────────────────────────────────────
function initParticles(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d')!;
  let W = 0, H = 0;
  let raf: number;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  interface Pt { x:number; y:number; r:number; vx:number; vy:number; a:number; g:boolean; }

  function mkPt(): Pt {
    return {
      x:  Math.random() * W,
      y:  Math.random() * H,
      r:  0.3 + Math.random() * 1.4,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      a:  0.06 + Math.random() * 0.32,
      g:  Math.random() < 0.09,
    };
  }

  const pts: Pt[] = Array.from({ length: 110 }, mkPt);

  function loop() {
    ctx.clearRect(0, 0, W, H);
    for (const p of pts) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > W || p.y < 0 || p.y > H) {
        Object.assign(p, mkPt());
      }
      ctx.save();
      ctx.globalAlpha = p.a;
      if (p.g) { ctx.shadowBlur = 9; ctx.shadowColor = '#00ff88'; }
      ctx.fillStyle = '#00ff88';
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
    raf = requestAnimationFrame(loop);
  }
  loop();

  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener('resize', resize);
  };
}

// ── Scroll fade-in ─────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.fade-up-section').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// ── App ────────────────────────────────────────────────────────
export default function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [playing, setPlaying] = useState(false);
  const widgetRef = useRef<any>(null);

  useScrollReveal();

  // Particles
  useEffect(() => {
    if (!canvasRef.current) return;
    return initParticles(canvasRef.current);
  }, []);

  // SoundCloud Widget
  useEffect(() => {
    const SC = (window as any).SC;
    if (!SC || !iframeRef.current) return;

    const widget = SC.Widget(iframeRef.current);
    widgetRef.current = widget;

    widget.bind(SC.Widget.Events.READY, () => {
      widget.play();
    });
    widget.bind(SC.Widget.Events.PLAY,   () => setPlaying(true));
    widget.bind(SC.Widget.Events.PAUSE,  () => setPlaying(false));
    widget.bind(SC.Widget.Events.FINISH, () => setPlaying(false));

    // fallback: start on first user interaction if autoplay was blocked
    const firstTap = () => {
      if (!playing) widget.play();
      document.removeEventListener('click',      firstTap);
      document.removeEventListener('touchstart', firstTap);
    };
    document.addEventListener('click',      firstTap);
    document.addEventListener('touchstart', firstTap);

    return () => {
      document.removeEventListener('click',      firstTap);
      document.removeEventListener('touchstart', firstTap);
    };
  }, []);

  const toggleMusic = () => {
    const w = widgetRef.current;
    if (!w) return;
    if (playing) { w.pause(); } else { w.play(); }
  };

  const scrollToProduct = () => {
    document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
      />

      {/* Hidden SoundCloud player */}
      <iframe
        ref={iframeRef}
        src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/spacechimp2000/m215&auto_play=true&hide_relative=true&show_comments=false&show_user=false&show_reposts=false&visual=false&buying=false&sharing=false&download=false"
        allow="autoplay"
        style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
      />

      {/* Music toggle */}
      <button
        onClick={toggleMusic}
        title={playing ? 'Pausar música' : 'Tocar música'}
        className={[
          'fixed bottom-8 right-8 z-[9999] w-12 h-12 rounded-full',
          'flex items-center justify-center cursor-pointer',
          'bg-black/85 border transition-all duration-300',
          playing
            ? 'border-neon-green animate-pulseRing text-neon-green'
            : 'border-white/10 text-neon-green hover:border-neon-green/60',
        ].join(' ')}
        style={{ backdropFilter: 'blur(20px)' }}
      >
        {playing ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/>
          </svg>
        )}
      </button>

      {/* Sections */}
      <Hero onCTAClick={scrollToProduct} />

      <div id="product">
        <PreVendaBanner />
        <ProductShowcase />
        <MedidasSection />
      </div>

      <ArtistSection />
      <StorySection />
      <PeyotechSection />
      <AlienSocietySection />
      <Footer />
    </div>
  );
}
