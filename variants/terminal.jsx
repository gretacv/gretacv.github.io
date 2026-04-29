// variants/terminal.jsx — Terminal Naturalist
// Dark mode, monospace, career as a directory walk. Click + type, sort of.

const tmPalette = {
  bg: '#0e1512',
  panel: '#121b17',
  panelDeep: '#0a110e',
  text: '#cfe3d4',
  dim: '#7a9182',
  muted: '#4d5e54',
  green: '#7dd58c',
  cyan: '#6fc7d4',
  yellow: '#e6c66b',
  pink: '#e58aa6',
  red: '#e07b6a',
  rule: '#1f2c25',
};

const tmStyles = {
  root: {
    fontFamily: 'JetBrains Mono, ui-monospace, "SF Mono", monospace',
    color: tmPalette.text,
    background: tmPalette.bg,
    backgroundImage: `
      radial-gradient(circle at 20% 0%, rgba(125,213,140,.06), transparent 40%),
      radial-gradient(circle at 80% 100%, rgba(111,199,212,.05), transparent 50%)
    `,
    minHeight: '100%',
    padding: '40px 56px 80px',
    boxSizing: 'border-box',
    position: 'relative',
    fontSize: 14,
    lineHeight: 1.6,
  },
};

function TMPrompt({ user = 'greta', host = 'earth', path = '~', children }) {
  return (
    <div style={{ marginBottom: 6 }}>
      <span style={{ color: tmPalette.green }}>{user}</span>
      <span style={{ color: tmPalette.dim }}>@</span>
      <span style={{ color: tmPalette.cyan }}>{host}</span>
      <span style={{ color: tmPalette.dim }}>:</span>
      <span style={{ color: tmPalette.yellow }}>{path}</span>
      <span style={{ color: tmPalette.dim }}>$ </span>
      <span>{children}</span>
    </div>
  );
}

function TMWindow({ title, children, style }) {
  return (
    <div style={{
      background: tmPalette.panel,
      border: `1px solid ${tmPalette.rule}`,
      borderRadius: 8,
      overflow: 'hidden',
      boxShadow: '0 20px 60px -30px rgba(0,0,0,.8)',
      ...style,
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        background: tmPalette.panelDeep, padding: '10px 14px',
        borderBottom: `1px solid ${tmPalette.rule}`,
      }}>
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#e07b6a' }}/>
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#e6c66b' }}/>
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#7dd58c' }}/>
        <div style={{ flex: 1, textAlign: 'center', fontSize: 11, color: tmPalette.dim, letterSpacing: '.08em' }}>
          {title}
        </div>
      </div>
      <div className="tm-window-body" style={{ padding: '22px 26px' }}>{children}</div>
    </div>
  );
}

function TMHero() {
  const g = window.greta;
  const [cursor, setCursor] = React.useState(true);
  React.useEffect(() => {
    const t = setInterval(() => setCursor(c => !c), 540);
    return () => clearInterval(t);
  }, []);
  return (
    <TMWindow title="greta@earth — zsh — 142×40">
      <TMPrompt>whoami</TMPrompt>
      <div style={{ paddingLeft: 14, marginBottom: 18, color: tmPalette.text }}>
        <div style={{ color: tmPalette.green }}>greta_c_vega</div>
        <div style={{ color: tmPalette.dim }}>uid=1989  groups=ecologist,coder,advocate,occasional-cartographer</div>
        <div style={{ color: tmPalette.dim }}>shell=/bin/curiosity   home=/maps/and/mosses</div>
      </div>

      <TMPrompt>cat about.md</TMPrompt>
      <div style={{ paddingLeft: 14, marginBottom: 18 }}>
        <div className="tm-hero-h1" style={{ fontSize: 36, lineHeight: 1.1, color: tmPalette.text, fontWeight: 500, letterSpacing: '-.01em', marginBottom: 10 }}>
          # Hi — I’m Greta.
        </div>
        <div style={{ color: tmPalette.dim, fontSize: 15, lineHeight: 1.55, maxWidth: 760 }}>
          {g.blurb}
        </div>
      </div>

      <TMPrompt>./status --verbose</TMPrompt>
      <div className="tm-status" style={{ paddingLeft: 14, marginBottom: 18, fontSize: 13 }}>
        <div><span style={{ color: tmPalette.cyan }}>role</span>          <span style={{ color: tmPalette.text }}>Lead Ecologist @ Versant</span></div>
        <div><span style={{ color: tmPalette.cyan }}>caffeine</span>      <span style={{ color: tmPalette.green }}>OK</span> <span style={{ color: tmPalette.dim }}>(78%)</span></div>
        <div><span style={{ color: tmPalette.cyan }}>existential</span>   <span style={{ color: tmPalette.yellow }}>WARN</span> <span style={{ color: tmPalette.dim }}>(manageable)</span></div>
        <div><span style={{ color: tmPalette.cyan }}>imposter</span>      <span style={{ color: tmPalette.yellow }}>WARN</span> <span style={{ color: tmPalette.dim }}>(productive level)</span></div>
        <div><span style={{ color: tmPalette.cyan }}>open_to_chat</span>  <span style={{ color: tmPalette.green }}>true</span></div>
      </div>

      <TMPrompt>{cursor ? '█' : ' '}</TMPrompt>
    </TMWindow>
  );
}

function TMSectionLabel({ cmd, comment }) {
  return (
    <div style={{ margin: '40px 0 16px' }}>
      <TMPrompt>{cmd}</TMPrompt>
      {comment && <div style={{ color: tmPalette.muted, paddingLeft: 14, fontSize: 12, fontStyle: 'italic' }}>{`# ${comment}`}</div>}
    </div>
  );
}

function TMCareer() {
  const g = window.greta;
  return (
    <div>
      <TMSectionLabel cmd={'cd ~/career && ls -la --route'} comment="five waypoints, in order of getting more confused" />
      <TMWindow title="career/ — vertical hike">
        <div style={{ color: tmPalette.dim, fontSize: 12, marginBottom: 10 }}>
          total {g.stops.length}    permissions: lessons-learned-r--r--r--
        </div>
        {g.stops.map((s, i) => {
          const isLast = i === g.stops.length - 1;
          return (
            <div key={s.key} className="tm-career-row" style={{ display: 'grid', gridTemplateColumns: '50px 1fr', gap: 14, position: 'relative', paddingBottom: isLast ? 0 : 22 }}>
              {!isLast && (
                <div style={{
                  position: 'absolute', left: 24, top: 28, bottom: 4, width: 1,
                  borderLeft: `1px dashed ${tmPalette.rule}`,
                }} />
              )}
              <div style={{ position: 'relative', paddingTop: 4 }}>
                <div style={{
                  width: 28, height: 28, borderRadius: '50%',
                  background: tmPalette.panelDeep, border: `1px solid ${tmPalette.rule}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 14,
                }}>{s.emoji}</div>
              </div>
              <div style={{ paddingTop: 0 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
                  <span style={{ color: tmPalette.green, fontWeight: 700, fontSize: 16 }}>./{s.key}/</span>
                  <span style={{ color: tmPalette.dim, fontSize: 12 }}>{s.year}</span>
                  <span style={{ color: tmPalette.cyan, fontSize: 12 }}>{s.title}</span>
                </div>
                <div style={{ color: tmPalette.yellow, fontSize: 12, marginTop: 4 }}>
                  → {s.role}
                </div>
                <div style={{ color: tmPalette.text, fontSize: 13, marginTop: 8, lineHeight: 1.55, maxWidth: 760 }}>
                  {s.body}
                </div>
                <div style={{ color: tmPalette.muted, fontSize: 12, marginTop: 6, fontStyle: 'italic' }}>
                  {`// ${s.side}`}
                </div>
              </div>
            </div>
          );
        })}
      </TMWindow>
    </div>
  );
}

function TMCarcem() {
  const c = window.greta.carcem;
  return (
    <div>
      <TMSectionLabel cmd="git log --branch=side-projects" comment="weekend commits, surprisingly consistent" />
      <TMWindow title="~/projects/carcem">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 6, marginBottom: 14 }}>
          <div><span style={{ color: tmPalette.yellow }}>commit</span> <span style={{ color: tmPalette.dim }}>3a9c1e · weekends ago</span></div>
          <div><span style={{ color: tmPalette.cyan }}>Author:</span> Greta &lt;{window.greta.email}&gt;</div>
          <div><span style={{ color: tmPalette.cyan }}>Subject:</span> {c.tagline}</div>
        </div>
        <div style={{ borderLeft: `2px solid ${tmPalette.green}`, paddingLeft: 14, color: tmPalette.text, fontSize: 13, lineHeight: 1.6 }}>
          {c.body}
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 16, flexWrap: 'wrap' }}>
          {c.links.map(l => (
            <a key={l.label} href={l.url} style={{
              fontSize: 12, padding: '6px 12px',
              border: `1px solid ${tmPalette.rule}`, borderRadius: 4,
              color: tmPalette.green, textDecoration: 'none',
            }}>$ open {l.label.toLowerCase()}</a>
          ))}
        </div>
      </TMWindow>
    </div>
  );
}

function TMTalks() {
  const g = window.greta;
  return (
    <div>
      <TMSectionLabel cmd="ls talks/ | head" />
      <TMWindow title="talks/">
        {g.talks.map((t, i) => (
          <a key={i} href={t.url} className="tm-talk" style={{
            display: 'grid', gridTemplateColumns: '60px 1fr auto', gap: 14,
            padding: '12px 0', borderBottom: i < g.talks.length - 1 ? `1px solid ${tmPalette.rule}` : 'none',
            textDecoration: 'none', color: 'inherit',
          }}>
            <span style={{ color: tmPalette.yellow }}>{t.year}</span>
            <span>
              <div style={{ color: tmPalette.text, fontSize: 14 }}>{t.title}</div>
              <div style={{ color: tmPalette.dim, fontSize: 12 }}>{t.venue} · {t.co}</div>
            </span>
            <span className="tm-talk-play" style={{ color: tmPalette.green, fontSize: 12, alignSelf: 'center' }}>▶ play</span>
          </a>
        ))}
        <div style={{ color: tmPalette.muted, fontSize: 12, marginTop: 12, fontStyle: 'italic' }}>
          {`// writing/ exists in spirit. Coming soon, for some value of "soon".`}
        </div>
      </TMWindow>
    </div>
  );
}

function TMNow() {
  const g = window.greta;
  return (
    <div>
      <TMSectionLabel cmd="tail -f now.log" />
      <TMWindow title="now.log">
        {g.now.map((line, i) => (
          <div key={i} className="tm-now-row" style={{ display: 'grid', gridTemplateColumns: '92px 70px 1fr', gap: 12, padding: '6px 0' }}>
            <span style={{ color: tmPalette.muted, fontSize: 12 }}>2026-04-{(20+i).toString().padStart(2,'0')}</span>
            <span className="tm-now-tag" style={{ color: tmPalette.cyan, fontSize: 12 }}>[INFO]</span>
            <span style={{ color: tmPalette.text, fontSize: 13 }}>{line}</span>
          </div>
        ))}
      </TMWindow>
    </div>
  );
}

function TMContact() {
  const g = window.greta;
  return (
    <div>
      <TMSectionLabel cmd="ssh greta@coffee.local" comment="connect for a virtual coffee" />
      <TMWindow title="connection wizard">
        <div style={{ marginBottom: 14, color: tmPalette.text, fontSize: 14 }}>
          <span style={{ color: tmPalette.green }}>✓</span> handshake successful — let's talk.
        </div>
        <div className="tm-contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <a href={`mailto:${g.email}`} style={{
            padding: '14px 16px', border: `1px solid ${tmPalette.green}`,
            color: tmPalette.green, textDecoration: 'none', borderRadius: 6,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <span>{`mail → ${g.email}`}</span>
            <span style={{ color: tmPalette.dim }}>↵</span>
          </a>
          <a href={g.github} style={{
            padding: '14px 16px', border: `1px solid ${tmPalette.cyan}`,
            color: tmPalette.cyan, textDecoration: 'none', borderRadius: 6,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <span>github → /gretacvega</span>
            <span style={{ color: tmPalette.dim }}>↵</span>
          </a>
          <a href="https://www.linkedin.com/in/gretacvega/" style={{
            padding: '14px 16px', border: `1px solid ${tmPalette.pink}`,
            color: tmPalette.pink, textDecoration: 'none', borderRadius: 6,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <span>linkedin → /in/gretacvega</span>
            <span style={{ color: tmPalette.dim }}>↵</span>
          </a>
          <div style={{
            padding: '14px 16px', border: `1px dashed ${tmPalette.muted}`,
            color: tmPalette.dim, borderRadius: 6, fontSize: 12,
          }}>
            response time ≈ within 1 (one) tide cycle
          </div>
        </div>
      </TMWindow>
    </div>
  );
}

function TMEgg() {
  // Hidden konami-ish: type "sudo" anywhere to summon a penguin
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    let buf = '';
    const onKey = (e) => {
      buf = (buf + e.key).slice(-6);
      if (buf.toLowerCase().endsWith('sudo')) setShown(true);
      if (e.key === 'Escape') setShown(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  if (!shown) return (
    <div className="tm-egg-hint" style={{
      position: 'absolute', right: 24, bottom: 16,
      color: tmPalette.muted, fontSize: 11, letterSpacing: '.1em',
    }}>
      {`// hint: try typing "sudo"`}
    </div>
  );
  return (
    <div style={{
      position: 'absolute', right: 24, bottom: 24, width: 280,
      background: tmPalette.panelDeep, border: `1px solid ${tmPalette.green}`,
      borderRadius: 8, padding: '14px 16px', fontSize: 12,
      color: tmPalette.text, boxShadow: '0 20px 50px -20px rgba(0,0,0,.9)',
    }}>
      <div style={{ color: tmPalette.green, marginBottom: 6 }}>[sudo] password for penguin: ********</div>
      <div style={{ color: tmPalette.text }}>
        Access granted. The penguin reviewed your CV. Verdict: thrilled. Asked about herring.
      </div>
      <div style={{ color: tmPalette.muted, marginTop: 6 }}>esc to dismiss</div>
    </div>
  );
}

function TerminalSite() {
  return (
    <div className="artboard-root tm-root" style={tmStyles.root}>
      <div style={{ maxWidth: 980, margin: '0 auto' }}>
        <TMHero />
        <TMCareer />
        <TMCarcem />
        <TMTalks />
        <TMNow />
        <TMContact />
        <div style={{ color: tmPalette.muted, fontSize: 11, textAlign: 'center', marginTop: 28 }}>
          {`// EOF — thanks for scrolling. ${'\u00A0'} exit code: 0`}
        </div>
      </div>
      <TMEgg />
    </div>
  );
}

window.TerminalSite = TerminalSite;
