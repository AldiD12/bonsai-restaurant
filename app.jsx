// Bonsai — main app
const { useState: useStateApp, useEffect: useEffectApp } = React;

const PALETTES = [
  { id: 'ionian', label: 'Ionian — sand & teal' },
  { id: 'terracotta', label: 'Terracotta — warm clay' },
  { id: 'seasalt', label: 'Sea Salt — cool stone' },
  { id: 'dusk', label: 'Dusk — plum & olive' },
];

const HERO_LAYOUTS = [
  { id: 'asymmetric', label: 'Asymmetric' },
  { id: 'centered', label: 'Centered' },
  { id: 'split', label: 'Split' },
];

const DISPLAY_FONTS = [
  { id: 'Cormorant Garamond', label: 'Cormorant' },
  { id: 'Playfair Display', label: 'Playfair' },
  { id: 'DM Serif Display', label: 'DM Serif' },
];

// Inject extra Google fonts for the alt display options
(function injectAltFonts() {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=DM+Serif+Display:ital@0;1&display=swap';
  document.head.appendChild(link);
})();

function App() {
  const defaults = window.__TWEAK_DEFAULTS__ || {};
  const [tweaks, setTweak] = useTweaks(defaults);
  const [reserveOpen, setReserveOpen] = useStateApp(false);

  useEffectApp(() => {
    document.documentElement.dataset.palette = tweaks.palette;
    document.documentElement.style.setProperty('--display-font', `'${tweaks.displayFont}'`);
  }, [tweaks.palette, tweaks.displayFont]);

  const onReserve = () => setReserveOpen(true);

  const marqueeItems = [
    'Caught this morning',
    'Sea bass · Octopus · Tiger shrimp',
    'Ionian olive oil',
    'Albanian wines',
    'On the seafront — Sarandë',
    'A small tree, deep roots',
  ];

  return (
    <>
      <Nav onReserve={onReserve} />
      <Hero layout={tweaks.heroLayout} onReserve={onReserve} />
      {tweaks.showMarquee && <Marquee items={marqueeItems} />}
      <Philosophy onReserve={onReserve} />
      {tweaks.showStory && <Story onReserve={onReserve} />}
      <Menu onReserve={onReserve} />
      <Gallery />
      <Visit onReserve={onReserve} />
      <Footer />
      <ReservationModal open={reserveOpen} onClose={() => setReserveOpen(false)} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Palette">
          <TweakSelect
            label="Color story"
            value={tweaks.palette}
            options={PALETTES.map((p) => ({ value: p.id, label: p.label }))}
            onChange={(v) => setTweak('palette', v)}
          />
        </TweakSection>

        <TweakSection label="Hero">
          <TweakRadio
            label="Layout"
            value={tweaks.heroLayout}
            options={HERO_LAYOUTS.map((l) => ({ value: l.id, label: l.label }))}
            onChange={(v) => setTweak('heroLayout', v)}
          />
        </TweakSection>

        <TweakSection label="Type">
          <TweakSelect
            label="Display font"
            value={tweaks.displayFont}
            options={DISPLAY_FONTS.map((f) => ({ value: f.id, label: f.label }))}
            onChange={(v) => setTweak('displayFont', v)}
          />
        </TweakSection>

        <TweakSection label="Sections">
          <TweakToggle
            label="Marquee strip"
            value={tweaks.showMarquee}
            onChange={(v) => setTweak('showMarquee', v)}
          />
          <TweakToggle
            label="Chef's story"
            value={tweaks.showStory}
            onChange={(v) => setTweak('showStory', v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
