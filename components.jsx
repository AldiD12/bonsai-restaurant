// Bonsai — shared components
const { useState, useEffect, useRef } = React;

// Bonsai tree icon — original simple SVG
function BonsaiMark({ size = 26, color }) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 28 V20" stroke={color || 'currentColor'} strokeWidth="1.4" strokeLinecap="round" />
      <path d="M16 22 C13 21 11 19 11 16" stroke={color || 'currentColor'} strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M16 22 C19 21 21 19 21 16" stroke={color || 'currentColor'} strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <ellipse cx="11" cy="11" rx="6" ry="4" fill={color || 'currentColor'} opacity="0.85" />
      <ellipse cx="21" cy="9" rx="5" ry="3.5" fill={color || 'currentColor'} opacity="0.7" />
      <ellipse cx="16" cy="6" rx="5" ry="3.2" fill={color || 'currentColor'} opacity="0.95" />
      <rect x="12" y="28" width="8" height="1.4" fill={color || 'currentColor'} />
      <rect x="13" y="29.6" width="6" height="0.9" fill={color || 'currentColor'} opacity="0.6" />
    </svg>
  );
}

// Placeholder image — striped, with a label
function Placeholder({ label, ratio = '4/5' }) {
  return (
    <div className="g-cell placeholder" style={{ aspectRatio: ratio, gridColumn: 'unset', gridRow: 'unset' }}>
      <span className="mono">{label}</span>
    </div>
  );
}

// Reservation modal — asks party size, opens WhatsApp
function ReservationModal({ open, onClose }) {
  const [party, setParty] = useState(2);
  const [largeMode, setLargeMode] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onEsc = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onEsc);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  const send = () => {
    const guests = party;
    const text = `Hello Bonsai — I'd like to reserve a table for ${guests} ${guests === 1 ? 'person' : 'people'}.`;
    const url = `https://wa.me/355696098925?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    onClose();
  };

  const counts = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        <span className="mono">Reservation · 01</span>
        <h3>How many will be <em>joining</em>?</h3>
        <p>Tell us your party size and we'll continue the booking on WhatsApp — usually a reply within minutes.</p>

        <div className="party-grid">
          {counts.map((n) => (
            <button
              key={n}
              className={`party-btn ${!largeMode && party === n ? 'active' : ''}`}
              onClick={() => { setParty(n); setLargeMode(false); }}
            >
              {n}
            </button>
          ))}
          <button
            className={`party-btn large ${largeMode ? 'active' : ''}`}
            onClick={() => { setLargeMode(true); setParty(10); }}
          >
            9 or more — large group
          </button>
        </div>

        <div className="modal-foot">
          <span className="meta">Continues on WhatsApp →</span>
          <button className="btn" onClick={send}>
            <svg className="wa-icon" viewBox="0 0 24 24"><path d="M17.6 14.2c-.3-.1-1.7-.8-2-.9s-.5-.1-.7.1c-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.1-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-1-2.3c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.7.5 3.4 1.3 4.8L2 22l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.2.8.9-3.1-.2-.3C4 14.7 3.5 13.4 3.5 12c0-4.7 3.8-8.5 8.5-8.5s8.5 3.8 8.5 8.5-3.8 8.5-8.5 8.5z"/></svg>
            Reserve via WhatsApp
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// Marquee
function Marquee({ items }) {
  const content = (
    <span>
      {items.map((it, i) => <React.Fragment key={i}>{it}</React.Fragment>)}
    </span>
  );
  return (
    <div className="marquee">
      <div className="marquee-track">
        {content}{content}
      </div>
    </div>
  );
}

// Nav
function Nav({ onReserve }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#top" className="nav-logo">
        <BonsaiMark />
        <span>BONSAI</span>
      </a>
      <ul className="nav-links">
        <li><a href="#philosophy">Philosophy</a></li>
        <li><a href="#story">Story</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#visit">Visit</a></li>
      </ul>
      <button className="btn" onClick={onReserve}>Reserve <span className="btn-arrow">→</span></button>
    </nav>
  );
}

Object.assign(window, { BonsaiMark, Placeholder, ReservationModal, Marquee, Nav });
