export default function PreVendaBanner() {
  const text = 'PRÉ-VENDA • PRÉ-VENDA • PRÉ-VENDA • PRÉ-VENDA • PRÉ-VENDA • PRÉ-VENDA • PRÉ-VENDA • PRÉ-VENDA • PRÉ-VENDA • PRÉ-VENDA • PRÉ-VENDA • PRÉ-VENDA • PRÉ-VENDA • PRÉ-VENDA • PRÉ-VENDA • PRÉ-VENDA •';

  const stripeStyle = (rotate: string): React.CSSProperties => ({
    position: 'absolute',
    left: '-10%',
    width: '120%',
    top: '50%',
    transform: `translateY(-50%) ${rotate}`,
    background: '#00ff88',
    padding: '10px 0',
    textAlign: 'center',
    fontSize: '12px',
    fontWeight: 800,
    letterSpacing: '0.14em',
    color: '#000',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  });

  return (
    <div style={{ position: 'relative', background: '#000', overflow: 'hidden' }} className="h-[140px] md:h-[180px]">
      <div style={stripeStyle('rotate(-4deg)')}>
        {text}
      </div>
      <div style={stripeStyle('rotate(4deg)')}>
        {text}
      </div>
    </div>
  );
}
