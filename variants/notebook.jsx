// variants/notebook.jsx — Field Notebook variant
// Warm paper, editorial Fraunces + JetBrains Mono for labels, stamps + tape.

const nbPalette = {
  paper: '#f4ecd8',
  paperDeep: '#ece2c8',
  ink: '#2a2418',
  inkSoft: '#5a4f3a',
  muted: '#8a7d63',
  rule: '#c8b68a',
  accent: '#a53a2a',
  stamp: '#7a2e1e',
  mint: '#4a6b3a',
  sky: '#6a8fa6',
  mustard: '#c8a032',
};

const nbStyles = {
  root: {
    fontFamily: 'Fraunces, Georgia, serif',
    color: nbPalette.ink,
    background: nbPalette.paper,
    backgroundImage: `
      radial-gradient(circle at 12% 18%, rgba(122,46,30,0.04) 0, transparent 40%),
      radial-gradient(circle at 88% 72%, rgba(74,107,58,0.05) 0, transparent 40%),
      repeating-linear-gradient(180deg, transparent 0 31px, rgba(200,182,138,0.35) 31px 32px)
    `,
    minHeight: '100%',
    padding: '56px 72px 96px',
    boxSizing: 'border-box',
    position: 'relative',
  },
  mono: { fontFamily: 'JetBrains Mono, ui-monospace, monospace' },
};

function NBStamp({ children, rotate = -6, color = nbPalette.stamp, style }) {
  return (
    <div style={{
      display: 'inline-block',
      border: `2.5px solid ${color}`,
      color, padding: '6px 14px',
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase',
      transform: `rotate(${rotate}deg)`,
      borderRadius: 3,
      opacity: .82,
      background: 'rgba(255,255,255,.15)',
      ...style,
    }}>{children}</div>
  );
}

function NBTape({ rotate = -3, left = '50%', top = -12, width = 120, color = 'rgba(200,150,80,0.55)' }) {
  return (
    <div style={{
      position: 'absolute', left, top, width, height: 24,
      transform: `translateX(-50%) rotate(${rotate}deg)`,
      background: color,
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.3), 0 1px 2px rgba(0,0,0,.08)',
      mixBlendMode: 'multiply',
    }} />
  );
}

function NBSpecimenTag() {
  return (
    <div className="nb-specimen" style={{ position: 'relative', width: 380, transform: 'rotate(-2deg)' }}>
      <NBTape left="22%" top={-10} rotate={-8} width={90} />
      <NBTape left="78%" top={-10} rotate={6} width={90} color="rgba(180,140,80,0.5)" />
      <div style={{
        background: '#fbf6e7',
        border: `1px solid ${nbPalette.rule}`,
        borderRadius: 4,
        padding: '22px 26px',
        boxShadow: '0 14px 40px -16px rgba(60,40,20,.35), 0 2px 4px rgba(0,0,0,.06)',
        position: 'relative',
      }}>
        <div style={{ ...nbStyles.mono, fontSize: 10, letterSpacing: '.18em', color: nbPalette.muted, textTransform: 'uppercase' }}>
          Specimen N°001 · Collected in person
        </div>
        <div style={{ height: 1, background: nbPalette.rule, margin: '10px 0 14px' }} />
        <dl style={{ margin: 0, display: 'grid', gridTemplateColumns: '82px 1fr', rowGap: 6, columnGap: 10, ...nbStyles.mono, fontSize: 12 }}>
          <dt style={{ color: nbPalette.muted }}>Genus</dt>
          <dd style={{ margin: 0 }}>Greta</dd>
          <dt style={{ color: nbPalette.muted }}>Species</dt>
          <dd style={{ margin: 0, fontStyle: 'italic' }}>c. vega</dd>
          <dt style={{ color: nbPalette.muted }}>Habitat</dt>
          <dd style={{ margin: 0 }}>Maps, meetings, mosses</dd>
          <dt style={{ color: nbPalette.muted }}>Diet</dt>
          <dd style={{ margin: 0 }}>Data, mostly.</dd>
          <dt style={{ color: nbPalette.muted }}>Call</dt>
          <dd style={{ margin: 0 }}>"Did anyone check the CRS?"</dd>
          <dt style={{ color: nbPalette.muted }}>Status</dt>
          <dd style={{ margin: 0, color: nbPalette.mint, fontWeight: 600 }}>Thriving</dd>
        </dl>
        <div style={{ position: 'absolute', right: -18, bottom: -14 }}>
          <NBStamp rotate={-12} color={nbPalette.mint}>Verified</NBStamp>
        </div>
      </div>
    </div>
  );
}

function NBHero() {
  const g = window.greta;
  return (
    <section className="nb-hero" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 56, alignItems: 'center', marginBottom: 72 }}>
      <div>
        <div style={{ ...nbStyles.mono, fontSize: 11, letterSpacing: '.2em', color: nbPalette.muted, marginBottom: 18 }}>
          ☉ FIELD NOTEBOOK · Vol. XIV · Personal edition
        </div>
        <h1 style={{
          fontFamily: 'Fraunces, serif',
          fontWeight: 300,
          fontSize: 88, lineHeight: 0.96, letterSpacing: '-0.02em',
          margin: '0 0 22px',
        }}>
          Hi, I’m <em style={{ fontWeight: 400, color: nbPalette.accent }}>Greta.</em>
          <br/>
          <span className="nb-subhead" style={{ fontSize: 44, color: nbPalette.inkSoft, fontWeight: 300 }}>
            Ecologist who got <span style={{ textDecoration: 'line-through', color: nbPalette.muted }}>distracted</span> curious.
          </span>
        </h1>
        <p style={{ fontSize: 20, lineHeight: 1.55, color: nbPalette.inkSoft, maxWidth: 560, margin: '0 0 28px' }}>
          {g.blurb}
        </p>
        <div className="nb-cta-row" style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
          <a href={g.github} style={{
            ...nbStyles.mono, fontSize: 13, fontWeight: 600, letterSpacing: '.04em',
            background: nbPalette.ink, color: nbPalette.paper,
            padding: '12px 20px', borderRadius: 2, textDecoration: 'none',
            boxShadow: '3px 3px 0 rgba(165,58,42,.85)',
          }}>→ github.com/gretacvega</a>
          <a href={`mailto:${g.email}`} style={{
            ...nbStyles.mono, fontSize: 13, fontWeight: 600, letterSpacing: '.04em',
            color: nbPalette.ink, padding: '12px 20px',
            border: `1.5px dashed ${nbPalette.ink}`, borderRadius: 2, textDecoration: 'none',
          }}>✎ virtual coffee</a>
          <span style={{ ...nbStyles.mono, fontSize: 11, color: nbPalette.muted }}>replies within one rainfall event</span>
        </div>
      </div>
      <div className="nb-specimen-wrap" style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: 20 }}>
        <NBSpecimenTag />
      </div>
    </section>
  );
}

function NBTrailStop({ stop, idx, total }) {
  const isLast = idx === total - 1;
  return (
    <div className="nb-stop" style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: 28, position: 'relative' }}>
      <div className="nb-stop-meta" style={{ position: 'relative' }}>
        <div style={{
          ...nbStyles.mono, fontSize: 10, letterSpacing: '.18em',
          color: nbPalette.muted, textAlign: 'right', paddingTop: 4,
        }}>STOP {String(idx+1).padStart(2, '0')}</div>
        <div style={{
          ...nbStyles.mono, fontSize: 11, color: nbPalette.accent,
          textAlign: 'right', marginTop: 4,
        }}>{stop.year}</div>
      </div>
      <div className="nb-stop-body" style={{ position: 'relative', paddingBottom: isLast ? 0 : 56, paddingLeft: 36 }}>
        {/* trail spine */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: 2,
          background: isLast ? 'transparent' : `repeating-linear-gradient(180deg, ${nbPalette.muted} 0 4px, transparent 4px 9px)`,
        }} />
        {/* marker */}
        <div style={{
          position: 'absolute', left: -14, top: -2, width: 32, height: 32, borderRadius: '50%',
          background: nbPalette.paper, border: `2px solid ${nbPalette.ink}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16,
          boxShadow: '0 2px 0 rgba(0,0,0,.08)',
        }}>{stop.emoji}</div>
        <div style={{
          background: 'rgba(255,255,255,.5)',
          border: `1px solid ${nbPalette.rule}`,
          borderRadius: 4,
          padding: '20px 24px',
          position: 'relative',
          boxShadow: '0 1px 0 rgba(0,0,0,.04)',
        }}>
          <div style={{ ...nbStyles.mono, fontSize: 11, letterSpacing: '.14em', color: nbPalette.accent, textTransform: 'uppercase', marginBottom: 4 }}>
            {stop.role}
          </div>
          <h3 style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, fontSize: 32, margin: '0 0 10px', letterSpacing: '-0.01em' }}>
            {stop.title}
          </h3>
          <p style={{ fontSize: 16, lineHeight: 1.55, color: nbPalette.inkSoft, margin: '0 0 14px', maxWidth: 620 }}>
            {stop.body}
          </p>
          <div style={{
            ...nbStyles.mono, fontSize: 12, color: nbPalette.muted,
            borderLeft: `2px solid ${nbPalette.mustard}`, paddingLeft: 12, fontStyle: 'italic',
          }}>
            margin note — {stop.side}
          </div>
        </div>
      </div>
    </div>
  );
}

function NBTrail() {
  const g = window.greta;
  return (
    <section style={{ marginBottom: 72 }}>
      <NBSectionHead kicker="Chapter I" title="How I got here" note="a vertical hike, with footnotes" />
      <div style={{ marginTop: 36 }}>
        {g.stops.map((s, i) => <NBTrailStop key={s.key} stop={s} idx={i} total={g.stops.length} />)}
      </div>
    </section>
  );
}

function NBSectionHead({ kicker, title, note }) {
  return (
    <div className="nb-section-head" style={{ display: 'flex', alignItems: 'baseline', gap: 18, borderBottom: `1px solid ${nbPalette.rule}`, paddingBottom: 12 }}>
      <div style={{ ...nbStyles.mono, fontSize: 11, letterSpacing: '.2em', color: nbPalette.accent, textTransform: 'uppercase' }}>{kicker}</div>
      <h2 style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: 44, margin: 0, letterSpacing: '-0.02em' }}>{title}</h2>
      {note && <div className="nb-note" style={{ ...nbStyles.mono, fontSize: 11, color: nbPalette.muted, fontStyle: 'italic', marginLeft: 'auto' }}>— {note}</div>}
    </div>
  );
}

function NBCarcem() {
  const c = window.greta.carcem;
  return (
    <section style={{ marginBottom: 72 }}>
      <NBSectionHead kicker="Chapter II" title="Side quest · CARCEM" note="weekend cartography, 18th-century flavour" />
      <div className="nb-carcem-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 32, marginTop: 32 }}>
        <div>
          <div style={{ ...nbStyles.mono, fontSize: 12, color: nbPalette.accent, letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 10 }}>
            {c.tagline}
          </div>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: nbPalette.inkSoft, maxWidth: 520 }}>
            {c.body}
          </p>
          <div style={{ display: 'flex', gap: 10, marginTop: 18, flexWrap: 'wrap' }}>
            {c.links.map(l => (
              <a key={l.label} href={l.url} style={{
                ...nbStyles.mono, fontSize: 12, letterSpacing: '.04em',
                padding: '8px 14px', border: `1px solid ${nbPalette.ink}`,
                color: nbPalette.ink, textDecoration: 'none', borderRadius: 2,
              }}>↗ {l.label}</a>
            ))}
          </div>
        </div>
        {/* Faux old-map card */}
        <div style={{ position: 'relative' }}>
          <NBTape left="30%" top={-12} rotate={-5} />
          <div style={{
            background: '#efe3c2',
            border: `1px solid ${nbPalette.rule}`,
            padding: 18, height: 240,
            position: 'relative', overflow: 'hidden',
            backgroundImage: `
              repeating-linear-gradient(45deg, rgba(122,46,30,.06) 0 1px, transparent 1px 14px),
              repeating-linear-gradient(-45deg, rgba(74,107,58,.05) 0 1px, transparent 1px 18px)
            `,
            boxShadow: '0 10px 30px -14px rgba(60,40,20,.35)',
          }}>
            <svg viewBox="0 0 300 200" style={{ width: '100%', height: '100%' }}>
              {/* river-ish squiggle */}
              <path d="M10,140 C 60,100 80,160 130,130 S 220,80 290,110" fill="none" stroke={nbPalette.sky} strokeWidth="3" opacity=".7"/>
              {/* contour rings */}
              {[0,1,2,3].map(i => (
                <ellipse key={i} cx="200" cy="70" rx={30 + i*14} ry={18 + i*10} fill="none" stroke={nbPalette.stamp} strokeWidth=".8" opacity={.4 - i*.07}/>
              ))}
              {/* city blocks */}
              {Array.from({length: 18}).map((_, i) => {
                const x = 40 + (i % 6) * 14 + (i%2)*3;
                const y = 150 + Math.floor(i/6) * 12;
                return <rect key={i} x={x} y={y} width={8} height={7} fill={nbPalette.stamp} opacity=".5"/>
              })}
              {/* pins */}
              <circle cx="70" cy="60" r="4" fill={nbPalette.accent}/>
              <circle cx="160" cy="90" r="4" fill={nbPalette.accent}/>
              <circle cx="240" cy="150" r="4" fill={nbPalette.accent}/>
              <text x="78" y="62" fontFamily="JetBrains Mono" fontSize="8" fill={nbPalette.ink}>plaza</text>
              <text x="168" y="93" fontFamily="JetBrains Mono" fontSize="8" fill={nbPalette.ink}>convento</text>
              <text x="248" y="153" fontFamily="JetBrains Mono" fontSize="8" fill={nbPalette.ink}>río</text>
            </svg>
            <div style={{ position: 'absolute', right: 10, top: 8, ...nbStyles.mono, fontSize: 9, color: nbPalette.muted, letterSpacing: '.15em' }}>
              N ↑ · c. 1780 · not to scale
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NBTalks() {
  const g = window.greta;
  return (
    <section style={{ marginBottom: 72 }}>
      <NBSectionHead kicker="Chapter III" title="Things said, out loud" note="oral communications" />
      <div style={{ marginTop: 20 }}>
        {g.talks.map((t, i) => (
          <a key={i} href={t.url} className="nb-talk" style={{
            display: 'grid', gridTemplateColumns: '80px 1fr auto', gap: 20,
            padding: '18px 0', borderBottom: `1px dashed ${nbPalette.rule}`,
            textDecoration: 'none', color: 'inherit', alignItems: 'baseline',
          }}>
            <div style={{ ...nbStyles.mono, fontSize: 12, color: nbPalette.accent, letterSpacing: '.1em' }}>{t.year}</div>
            <div>
              <div className="nb-talk-title" style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 400, letterSpacing: '-0.01em' }}>{t.title}</div>
              <div style={{ ...nbStyles.mono, fontSize: 12, color: nbPalette.muted, marginTop: 4 }}>{t.venue} · {t.co}</div>
            </div>
            <div className="nb-talk-watch" style={{ ...nbStyles.mono, fontSize: 12, color: nbPalette.ink }}>watch ↗</div>
          </a>
        ))}
        <div style={{ ...nbStyles.mono, fontSize: 12, color: nbPalette.muted, marginTop: 16, fontStyle: 'italic' }}>
          Written comms section: <span style={{ textDecoration: 'line-through' }}>coming soon</span> coming eventually.
        </div>
      </div>
    </section>
  );
}

function NBNow() {
  const g = window.greta;
  return (
    <section style={{ marginBottom: 72, position: 'relative' }}>
      <NBSectionHead kicker="Chapter IV" title="Currently" note="updated whenever I remember" />
      <ul className="nb-now-grid" style={{ listStyle: 'none', padding: 0, margin: '28px 0 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 32px' }}>
        {g.now.map((line, i) => (
          <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <span style={{ ...nbStyles.mono, fontSize: 12, color: nbPalette.accent, marginTop: 4 }}>§{i+1}</span>
            <span style={{ fontSize: 17, lineHeight: 1.5, color: nbPalette.inkSoft }}>{line}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function NBContact() {
  const g = window.greta;
  return (
    <section style={{ marginBottom: 40 }}>
      <div className="nb-contact" style={{
        background: '#fbf6e7',
        border: `1px solid ${nbPalette.rule}`,
        padding: '36px 40px',
        display: 'grid', gridTemplateColumns: '1fr auto', gap: 20, alignItems: 'center',
        position: 'relative',
      }}>
        <NBStamp rotate={-8} color={nbPalette.stamp} style={{ position: 'absolute', top: -14, right: 32 }}>Open for coffee</NBStamp>
        <div>
          <div style={{ ...nbStyles.mono, fontSize: 11, color: nbPalette.accent, letterSpacing: '.2em', textTransform: 'uppercase' }}>Last page</div>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: 40, margin: '6px 0 10px', letterSpacing: '-0.02em' }}>
            Say hi, propose a project, argue about mosses.
          </h2>
          <p style={{ ...nbStyles.mono, fontSize: 13, color: nbPalette.inkSoft, margin: 0 }}>
            I do virtual coffees. Low caffeine, high curiosity.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <a href={`mailto:${g.email}`} style={{
            ...nbStyles.mono, fontSize: 13, fontWeight: 600, textAlign: 'center',
            background: nbPalette.ink, color: nbPalette.paper,
            padding: '12px 22px', textDecoration: 'none', borderRadius: 2,
          }}>{g.email}</a>
          <a href={g.github} style={{
            ...nbStyles.mono, fontSize: 13, fontWeight: 600, textAlign: 'center',
            color: nbPalette.ink, border: `1.5px solid ${nbPalette.ink}`,
            padding: '10px 22px', textDecoration: 'none', borderRadius: 2,
          }}>github ↗</a>
        </div>
      </div>
      <div style={{ ...nbStyles.mono, fontSize: 10, color: nbPalette.muted, textAlign: 'center', marginTop: 24, letterSpacing: '.18em' }}>
        END OF NOTEBOOK · TURN PAGE · ∎
      </div>
    </section>
  );
}

function NotebookSite() {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div className="artboard-root nb-root" style={nbStyles.root}>
      {/* punch holes */}
      <div className="nb-holes" style={{ position: 'absolute', left: 18, top: 0, bottom: 0, width: 22, display: 'flex', flexDirection: 'column', justifyContent: 'space-around', padding: '60px 0' }}>
        {Array.from({length: 12}).map((_, i) => (
          <div key={i} style={{ width: 14, height: 14, borderRadius: '50%', background: 'rgba(0,0,0,.08)', boxShadow: 'inset 0 1px 2px rgba(0,0,0,.2)' }}/>
        ))}
      </div>
      {/* red margin line */}
      <div className="nb-margin-line" style={{ position: 'absolute', left: 96, top: 0, bottom: 0, width: 1, background: 'rgba(165,58,42,.35)' }} />

      <div className="nb-content" style={{ maxWidth: 1040, marginLeft: 60 }}>
        <NBHero />
        <NBTrail />
        <NBCarcem />
        <NBTalks />
        <NBNow />
        <NBContact />
      </div>

      {/* Easter egg: hover the penguin */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: 'absolute', right: 40, bottom: 24,
          ...nbStyles.mono, fontSize: 11, color: nbPalette.muted,
          cursor: 'help', userSelect: 'none',
        }}>
        🐧 ←
        {hovered && (
          <span style={{
            position: 'absolute', right: 24, bottom: 24, width: 220,
            background: nbPalette.ink, color: nbPalette.paper,
            padding: '10px 12px', borderRadius: 3, fontSize: 11, lineHeight: 1.4,
            boxShadow: '0 10px 30px rgba(0,0,0,.25)',
          }}>
            Reviewed your CV. Thinks you're doing great. Asks about herring.
          </span>
        )}
      </div>
    </div>
  );
}

window.NotebookSite = NotebookSite;
