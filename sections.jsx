// Bonsai — page sections

function Hero({ layout, onReserve }) {
  const layoutClass = layout === 'centered' ? 'hero-centered' : layout === 'split' ? 'hero-split' : 'hero-asym';

  return (
    <section className={`hero ${layoutClass}`} id="top">
      <div className="hero-text">
        <div className="hero-tags">
          <span>Saranda</span>
          <span>Ionian Coast</span>
          <span>Est. Ristorante</span>
        </div>
        <h1>
          Experience the<br />
          heart of Saranda's<br />
          <em>flavor.</em>
        </h1>
        <p className="hero-sub">
          Freshly caught seafood from the Ionian Sea,
          cooked with passion and served with a view.
        </p>
        <div className="hero-cta">
          <button className="btn" onClick={onReserve}>Reserve your table <span className="btn-arrow">→</span></button>
          <a href="#menu" className="btn btn-ghost">Explore the menu</a>
        </div>
      </div>

      {layout !== 'centered' && (
        <div className="hero-image">
          <img src="assets/shrimp-dish.png" alt="Tiger shrimp crudo at Bonsai" />
          <div className="hero-image-tag">
            <span className="mono">Today's plate</span>
            <div className="label">Tiger Shrimp<br /><em style={{fontStyle:'italic', color:'var(--accent)'}}>Crudo</em></div>
          </div>
        </div>
      )}

      {layout === 'asymmetric' && (
        <div className="hero-corner">
          <span className="num">42</span>
          steps from<br />the harbour
        </div>
      )}
    </section>
  );
}

function Philosophy({ onReserve }) {
  return (
    <section id="philosophy">
      <div className="philosophy">
        <div className="philosophy-text">
          <div className="section-num"><span className="mono">02 — Philosophy</span></div>
          <h2 className="section-h">From our sea, <em>to your plate.</em></h2>
          <p>
            At Bonsai, we believe in simplicity and quality. We partner with local
            fishermen along the Ionian coast to bring you the freshest catch of
            the day, paired with Albanian olive oil and seasonal ingredients.
          </p>
          <p>
            Every dish tells a story of the coastline that surrounds us — quiet
            mornings on the dock, the smell of citrus groves, salt on warm wood.
          </p>
          <div className="philosophy-stats">
            <div>
              <span className="stat-num">Daily</span>
              <span className="stat-label">Catch from local fishermen, brought in each morning</span>
            </div>
            <div>
              <span className="stat-num">100%</span>
              <span className="stat-label">Albanian olive oil &amp; seasonal produce</span>
            </div>
          </div>
        </div>
        <div className="philosophy-image">
          <Placeholder label="HARBOUR · MORNING CATCH" />
        </div>
      </div>
    </section>
  );
}

function Story({ onReserve }) {
  return (
    <section id="story" className="story">
      <div className="story-grid">
        <div className="philosophy-image" style={{ aspectRatio: '4/5' }}>
          <Placeholder label="CHEF · IN THE KITCHEN" />
        </div>
        <div>
          <div className="section-num"><span className="mono">03 — The Story</span></div>
          <h2 className="section-h">A small tree, <em>deep roots.</em></h2>
          <div className="story-quote" style={{marginTop: 32}}>
            "We named the restaurant Bonsai because the best things take care
            and patience — the same way a small tree, well-tended, holds an
            entire landscape."
          </div>
          <div className="story-body">
            <p>
              Bonsai opened on the seafront in Saranda with one idea: cook the
              fish that came in that morning, simply and well. Our team of
              cooks, sommeliers and servers grew up on this coast.
            </p>
            <p>
              The dining room is intentionally quiet — wood, soft light,
              and a long view of the Ionian. We want every guest to feel
              the way you feel after a good walk by the water.
            </p>
          </div>
          <div className="story-sig">
            <div>
              <div className="story-sig-name">Chef &amp; Family</div>
              <div className="story-sig-role">RESTORANT BONSAI · SARANDË</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Menu({ onReserve }) {
  const [active, setActive] = useState('appetizers');
  const cat = MENU_CATEGORIES.find((c) => c.id === active);

  return (
    <section id="menu" className="menu-section">
      <div className="menu-head">
        <div>
          <div className="section-num"><span className="mono">04 — The Menu</span></div>
          <h2 className="section-h">Explore <em>our menu.</em></h2>
          <p>
            Albanian dish names with English translations. Prices in Lek.
            The catch of the day changes — ask your server what came in this
            morning.
          </p>
        </div>
      </div>

      <div className="menu-tabs">
        {MENU_CATEGORIES.map((c) => (
          <button
            key={c.id}
            className={`menu-tab ${active === c.id ? 'active' : ''}`}
            onClick={() => setActive(c.id)}
          >
            {c.label}
            <span className="count">/ {String(c.items.length).padStart(2, '0')}</span>
          </button>
        ))}
      </div>

      <div className="menu-grid">
        <div className="menu-list">
          {cat.items.map((it, i) => (
            <div className="menu-item" key={i}>
              <div>
                <div className="menu-item-name">
                  {it.name}
                  <span className="menu-item-en">— {it.en}</span>
                </div>
                {it.desc && <div className="menu-item-desc">{it.desc}</div>}
                {it.tag && <span className={`menu-tag ${it.tag === 'Chef' ? 'chef' : ''}`}>{it.tag === 'Chef' ? "★ Chef's pick" : it.tag === 'Bestseller' ? '★ Bestseller' : it.tag}</span>}
              </div>
              <div className="menu-item-price">{it.price.toLocaleString()}<small>Lek</small></div>
            </div>
          ))}
        </div>

        <div className="menu-feature">
          <div className="menu-feature-img">
            <img src="assets/shrimp-dish.png" alt="Bonsai signature shrimp crudo" />
          </div>
          <div className="menu-feature-card">
            <span className="mono">{FEATURED_DISH.tag}</span>
            <h4>{FEATURED_DISH.name}</h4>
            <p style={{fontStyle:'italic', color:'var(--muted)', marginBottom:8}}>{FEATURED_DISH.en}</p>
            <p>{FEATURED_DISH.desc}</p>
          </div>
        </div>
      </div>

      <div className="menu-foot">
        <span>* Please kindly inform our staff of any food allergies.</span>
        <button className="btn" onClick={onReserve}>Make a reservation <span className="btn-arrow">→</span></button>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-head">
        <div>
          <div className="section-num"><span className="mono">05 — Gallery</span></div>
          <h2 className="section-h">A glimpse of <em>Bonsai.</em></h2>
        </div>
        <p>The room, the plates, the coastline — a few moments from our table to yours.</p>
      </div>

      <div className="gallery-grid">
        <div className="g-cell g-1">
          <img src="assets/interior.png" alt="Bonsai dining room interior" />
        </div>
        <div className="g-cell g-2 placeholder"><span className="mono">PLATING · DETAIL</span></div>
        <div className="g-cell g-3 placeholder"><span className="mono">TERRACE · GOLDEN HOUR</span></div>
        <div className="g-cell g-4">
          <img src="assets/shrimp-dish.png" alt="Shrimp dish" />
        </div>
        <div className="g-cell g-5 placeholder"><span className="mono">WINE POUR</span></div>
        <div className="g-cell g-6 placeholder"><span className="mono">IONIAN COAST · DUSK</span></div>
      </div>
    </section>
  );
}

function Visit({ onReserve }) {
  return (
    <section id="visit" className="visit">
      <div className="section-num"><span className="mono">06 — Visit Us</span></div>
      <h2 className="section-h">Find your table <em>by the sea.</em></h2>

      <div className="visit-grid">
        <div className="visit-info">
          <dl>
            <dt>Address</dt>
            <dd>
              Restorant Bonsai
              <small>Sarandë, Albania — on the Ionian seafront</small>
            </dd>

            <dt>Hours</dt>
            <dd>
              Monday — Sunday
              <small>12:00 — 23:00 · Last seating 22:00</small>
            </dd>

            <dt>Reservations</dt>
            <dd>
              +355 69 609 8925
              <small>WhatsApp preferred — usually a reply within minutes</small>
            </dd>

            <dt>Dress</dt>
            <dd>
              Smart casual
              <small>The terrace can be breezy in the evening</small>
            </dd>
          </dl>

          <div className="visit-cta">
            <button className="btn" onClick={onReserve}>Reserve your table <span className="btn-arrow">→</span></button>
          </div>
        </div>

        <div className="visit-map">
          <span className="map-label" style={{top:'12%', left:'10%'}}>Sarandë</span>
          <span className="map-label" style={{top:'82%', right:'10%'}}>Ionian Sea</span>
          <svg viewBox="0 0 400 500" preserveAspectRatio="none">
            <path d="M -20 320 Q 60 280 140 300 T 280 320 Q 360 310 420 340 L 420 520 L -20 520 Z"
                  fill="rgba(245,239,228,0.06)" stroke="rgba(245,239,228,0.18)" strokeWidth="1" />
            <path d="M -20 360 Q 80 330 180 350 T 360 360 Q 400 360 420 380"
                  fill="none" stroke="rgba(196,104,63,0.25)" strokeWidth="1" strokeDasharray="3 6" />
          </svg>
          <div className="map-pin">
            <div className="map-pin-dot"></div>
            <div className="map-pin-label">Bonsai</div>
          </div>
          <div className="map-coast"></div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="sig">Bonsai · Sarandë</div>
      <div>© 2026 — Restorant Bonsai. All rights reserved.</div>
      <div>Designed with care on the Ionian coast.</div>
    </footer>
  );
}

Object.assign(window, { Hero, Philosophy, Story, Menu, Gallery, Visit, Footer });
