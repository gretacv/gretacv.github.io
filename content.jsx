// content.jsx — shared CV content, single source of truth.
// Tone: humor dial at 70, whimsical but professional.

const greta = {
  name: "Greta C. Vega",
  tagline: "Ecologist. Product-ish. Occasional cartographer of old cities.",
  blurb: "Data-hungry ecologist who refuses to stick to one label. I democratise scientific knowledge through technology — which is a fancy way of saying I help smart people and spreadsheets get along.",
  email: "gretacvega@gmail.com",
  github: "https://github.com/gretacvega",
  location: "Somewhere between a satellite image and a moss patch",

  // --- career stops, in order, with stamps of personality ---
  stops: [
    {
      key: "uni",
      emoji: "🐸",
      year: "2010 — 2020",
      title: "University & NGOs",
      role: "Ecologist-in-training, grant-chaser, enthusiast",
      body: "Ten years of international fieldwork with biodiversity NGOs, funded by public grants I wrote between coffee and rain. Thought academia was the destination. Plot twist: it wasn't.",
      side: "Once volunteered for a user-research study. Accidentally discovered a career.",
      gradient: ["#6b8e4e", "#a4b97a"]
    },
    {
      key: "antarctica",
      emoji: "🧊",
      year: "2018",
      title: "Antarctica (a month)",
      role: "Temporarily an astronaut",
      body: "As a child I wanted to be an astronaut. Never made it to space, but one month doing fieldwork in Antarctica felt close enough. Made a video about it.",
      side: "Nearest neighbour: a penguin. Reviewed my code kindly.",
      gradient: ["#9fc4d8", "#d9e7ef"]
    },
    {
      key: "vizzuality",
      emoji: "👩‍💻",
      year: "2020 — 2022",
      title: "Vizzuality",
      role: "Scientist → science+data lead, Half-Earth Project",
      body: "Learned there are more compelling ways to share science than a 17-page PDF nobody reads. Led science and data on Half-Earth, migrated the stack to ESRI, and herded cats across nine fellow scientists for knowledge-sharing and team-design experiments.",
      side: "Discovered that \"self-managed organisation\" is spelled r-e-s-p-o-n-s-i-b-i-l-i-t-y.",
      gradient: ["#c96442", "#e29074"]
    },
    {
      key: "cervest",
      emoji: "🌍",
      year: "2022 — 2023",
      title: "Cervest",
      role: "Head of Earth Science",
      body: "Wore two hats: IC building a new product on climate risk to natural capital with a cross-disciplinary team, and people manager for five earth scientists. Made sure the tooling matched the ambition, and the humans matched their workstreams.",
      side: "Two hats. Zero dropped.",
      gradient: ["#4a6b8a", "#7a99b5"]
    },
    {
      key: "versant",
      emoji: "⛰",
      year: "2023 — now",
      title: "Versant",
      role: "Lead Ecologist",
      body: "Helping project developers play a little nicer with nature — finding the right patches of land for biodiversity compensation, guided by France's séquence ERC. I get to be scientist, coder and conservation advocate in the same afternoon. Currently sharpening Python and learning to love object-oriented programming.",
      side: "Yes, the ampersand in my job description is load-bearing.",
      gradient: ["#5c7a4a", "#8ea87a"]
    }
  ],

  // --- side project ---
  carcem: {
    title: "CARCEM",
    tagline: "Art history meets GIS, with 18th-century French postcards",
    body: "A research project at UNED mapping the cartographies of the Early Modern city. I manage the ArcGIS Online account, design the spatial database, and help researchers publish their findings as webapps instead of footnotes.",
    links: [
      { label: "Team", url: "https://dimh.hypotheses.org/equipo" },
      { label: "Repo", url: "https://github.com/carcem/carcem_arcgis" },
      { label: "Portfolio", url: "https://carcem.maps.arcgis.com/apps/instant/portfolio/index.html?appid=547fbc5890e54f12bf0f7641ae849ed0" }
    ]
  },

  // --- talks ---
  talks: [
    {
      year: "2021",
      title: "An odd couple's journey towards SciArt: Design meets Science and vice-versa",
      venue: "Outlier 2021",
      co: "with E. Casal",
      url: "https://www.outlierconf.com/speakers"
    },
    {
      year: "2020",
      title: "Why spatial matters in the fight against climate change",
      venue: "Spatial Data Science Conference",
      co: "with L. Teixeira",
      url: "https://www.youtube.com/watch?v=sa-49f0qcPw"
    }
  ],

  // --- now ---
  now: [
    "Leading ecology at Versant, arguing (politely) with shapefiles.",
    "Writing more Python than I ever thought I would.",
    "Co-mapping the 18th century on weekends.",
    "Saying yes to virtual coffees."
  ],

  // --- random whimsy for easter eggs ---
  facts: [
    "Field kit essentials: a notebook, a pencil, snacks that survive a backpack, and unreasonable optimism.",
    "Preferred IDE: whichever one isn't crashing today.",
    "Can identify a surprising number of mosses. Cannot remember where I put my keys.",
    "Yes, the Antarctica story is real. No, I did not bring back a penguin."
  ]
};

window.greta = greta;
