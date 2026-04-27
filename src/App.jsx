import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";

// Asset Imports
import meImage from "./assets/me.png"; 
import portraitImage from "./assets/portrait.JPEG"; 
import saas from "./assets/saas.png";
import briefing from "./assets/briefing.jpg";
import youthCompetitions from "./assets/youth_competitions.png";
import obImage from "./assets/OB.JPG";
import t3Image from "./assets/t3.jpg"; 
import amberImage from "./assets/amber.jpg"; 
import shangrilaImage from "./assets/shangri-la.jpg"; 

const PROFILE = {
  name: "Muhammad Fadhil Bin Gazali",
  nickname: "Dhil",
  role: "Operations Leader · Youth Builder · Systems Thinker",
  location: "Singapore",
  email: "fardeals@gmail.com",
  phone: "+65 9222 4337",
  manifesto:
    "I build places where people feel safe enough to try, brave enough to grow, and supported enough to come back again.",
};

const IMAGES = {
  portrait: meImage,
  desk: portraitImage,
};

const NAV = [
  ["01", "Opening", "#opening"],
  ["02", "Story", "#story"],
  ["03", "Works", "#works"],
  ["04", "Timeline", "#timeline"],
  ["05", "Contact", "#contact"],
];

const WORKS = [
  {
    number: "01",
    image: saas,
    title: "Custom Built SaaS App",
    subtitle: "Operations software shaped by real problems",
    body:
      "Designed and built a custom scheduling, payroll, and automation platform to solve staffing chaos, admin inefficiencies, and daily operational friction.",
    tags: ["Product Thinking", "Automation", "Firebase", "Systems"],
  },
  {
    number: "02",
    image: briefing,
    title: "Event Organisation",
    subtitle: "Large scale events with moving parts",
    body:
      "Planned and executed public events including TRI events, TRSCC competitions, and a Singapore Book of Records activation involving logistics, sponsors, safety, and crowd flow.",
    tags: ["Events", "Sponsors", "Logistics", "Leadership"],
  },
  {
    number: "03",
    image: youthCompetitions,
    title: "Youth Led Competitions",
    subtitle: "Giving responsibility, not just medals",
    body:
      "Mentored youth leaders to run registration, judging, scoring, and presentation duties, turning competitions into leadership platforms.",
    tags: ["Mentorship", "Youth Development", "Leadership", "Sport"],
  },
];

const TIMELINE = [
  [
    "2022 — Present",
    "General Manager",
    "Climb@T3",
    "Airport operations, family climbing, staff systems, youth programmes, and digital workflows.",
    t3Image,
  ],
  [
    "2020 — 2022",
    "General Manager",
    "Origin Boulder",
    "Pandemic-era resilience, community engagement, and alternative programming.",
    obImage,
  ],
  [
    "2012 — 2020",
    "Branch Head / Programmes Manager / Ops Manager",
    "The Rock School",
    "Youth coaching, major events, overseas expeditions, and community activations.",
    portraitImage, 
  ],
  [
    "2010 — 2012",
    "Ops & Belayer",
    "Universal Studios Singapore",
    "Operations and belayer at the Amber Rock Wall in The Lost World.",
    amberImage,
  ],
  [
    "2010 — 2012",
    "Front Office / Concierge / Bell Boy",
    "Shangri-La Rasa Sentosa",
    "Frontline guest service, concierge desk operations, and bell boy duties.",
    shangrilaImage,
  ],
];

const SKILLS = [
  "Programme Design",
  "Facility Operations",
  "Youth Development",
  "Staff Training",
  "Event Direction",
  "Digital Marketing",
  "Workflow Automation",
  "Community Building",
  "Stakeholder Management",
  "Safety Culture",
  "SaaS Thinking",
  "Service Recovery",
];

const CERTS = [
  "NROC Registered Coach",
  "Diploma in Multimedia & Info-comms · Nanyang Polytechnic",
  "SG Coach Sports Climbing Level 1",
  "SMF Climbing Instructor Category 1",
  "SNCS Level 1 to 3",
  "SNAS Abseiling Proficiency Level 1 & 2",
  "Values & Principles in Sports · SportSG",
  "Standard Adult First Aider with CPR & AED",
  "Google Analytics / SEO / SEM · Digital Marketing Strategy",
];

function runSelfTests() {
  const tests = [
    { name: "profile content exists", pass: Boolean(PROFILE.name && PROFILE.email) },
    { name: "two images configured", pass: Boolean(IMAGES.portrait && IMAGES.desk) },
    { name: "navigation has five items", pass: NAV.length === 5 },
    { name: "works section has three entries", pass: WORKS.length === 3 },
    {
      name: "each work has tags",
      pass: WORKS.every((work) => Array.isArray(work.tags) && work.tags.length > 0),
    },
    { name: "timeline section has five entries", pass: TIMELINE.length === 5 },
    { name: "skills section has entries", pass: SKILLS.length >= 8 },
    { name: "certifications section has entries", pass: CERTS.length >= 5 },
  ];

  tests.forEach((test) => {
    if (!test.pass) {
      throw new Error(`Self-test failed: ${test.name}`);
    }
  });

  return tests;
}

if (typeof window !== "undefined") {
  window.__ONLINE_CV_TESTS__ = runSelfTests;
}

function Arrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function Grain() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[1] opacity-[0.05] mix-blend-multiply">
      <div className="h-full w-full bg-[radial-gradient(circle_at_20%_30%,#000_0_1px,transparent_1px),radial-gradient(circle_at_70%_80%,#000_0_1px,transparent_1px)] bg-[length:18px_18px]" />
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  useMemo(() => {
    try {
      runSelfTests();
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f3eadb] text-[#191713]">
      <style>{`
        @keyframes floatPortrait { 0%,100%{ transform:translateY(0) rotate(-1.5deg) scale(1); } 50%{ transform:translateY(-12px) rotate(1deg) scale(1.02); } }
        @keyframes slowPan { 0%,100%{ transform:scale(1.03) translateX(0); } 50%{ transform:scale(1.08) translateX(-14px); } }
        @keyframes marquee { from{ transform:translateX(0); } to{ transform:translateX(-50%); } }
      `}</style>
      <Grain />

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#191713]/10 bg-[#f3eadb]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-4 md:px-8">
          <a href="#opening" className="text-sm font-semibold tracking-tight">
            Dhil / Muhammad Fadhil
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map(([num, label, href]) => (
              <a
                key={href}
                href={href}
                className="group flex items-center gap-2 text-sm text-[#191713]/65 transition hover:text-[#191713]"
              >
                <span className="font-mono text-[11px] text-[#b25b38]">{num}</span>
                <span>{label}</span>
              </a>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-full border border-[#191713]/20 px-4 py-2 text-sm md:hidden"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-[#191713]/10 bg-[#f3eadb] px-5 py-5 md:hidden">
            {NAV.map(([num, label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="flex justify-between border-b border-[#191713]/10 py-4 text-lg"
              >
                <span>{label}</span>
                <span className="font-mono text-sm text-[#b25b38]">{num}</span>
              </a>
            ))}
          </div>
        )}
      </header>

      <section
        id="opening"
        className="relative mx-auto grid min-h-screen max-w-[1500px] grid-cols-1 px-5 pb-20 pt-28 md:px-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-end lg:pb-16 lg:pt-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 pb-8"
        >
          <p className="mb-8 max-w-md font-mono text-xs uppercase tracking-[0.35em] text-[#b25b38]">
            Operations / Youth / Community / Systems
          </p>
          <h1 className="max-w-5xl text-[17vw] font-black uppercase leading-[0.72] tracking-[-0.09em] text-[#191713] sm:text-[15vw] lg:text-[9.2vw]">
            <span className="relative z-10 block">Dhil</span>
            <span className="-mt-[0.18em] block pl-[0.22em] text-[#b25b38]">Gazali</span>
          </h1>
          <p className="mt-8 max-w-xl text-xl leading-8 text-[#191713]/75 md:text-2xl md:leading-10">
            {PROFILE.manifesto}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative min-h-[640px] lg:min-h-[820px]"
        >
          <div
            className="absolute left-0 top-6 h-[68%] w-[62%] overflow-hidden rounded-[42%_58%_47%_53%/44%_38%_62%_56%] border-[10px] border-[#f3eadb] shadow-2xl lg:left-4 lg:top-6"
            style={{ animation: "floatPortrait 8s ease-in-out infinite" }}
          >
            <img
              src={IMAGES.portrait}
              alt="Muhammad Fadhil portrait"
              className="h-full w-full object-cover object-top"
              loading="eager"
            />
          </div>

          <div className="absolute bottom-8 right-0 h-[48%] w-[68%] overflow-hidden rounded-[16px] border-[10px] border-[#f3eadb] shadow-2xl lg:right-6">
            <img
              src={IMAGES.desk}
              alt="Muhammad Fadhil working at a desk"
              className="h-full w-full object-cover object-center"
              style={{ animation: "slowPan 10s ease-in-out infinite" }}
              loading="eager"
            />
          </div>

          <div className="absolute right-0 top-0 max-w-[260px] rotate-3 rounded-[28px] bg-[#191713] p-5 text-[#f3eadb] shadow-xl lg:right-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#d7b78d]">Current lens</p>
            <p className="mt-3 text-lg leading-6">
              <span className="font-semibold text-[#d7b78d]">AI</span> × <span className="font-semibold text-[#d7b78d]">Ops</span> × <span className="font-semibold text-[#d7b78d]">Efficiency</span> × <span className="font-semibold text-[#d7b78d]">Lead Generation</span>
            </p>
          </div>
        </motion.div>
      </section>

      <section className="border-y border-[#191713]/10 bg-[#191713] py-5 text-[#f3eadb]">
        <div
          className="flex w-[200%] gap-10 whitespace-nowrap text-4xl font-black uppercase tracking-[-0.06em] md:text-6xl"
          style={{ animation: "marquee 28s linear infinite" }}
        >
          {[...SKILLS, ...SKILLS].map((skill, index) => (
            <span key={`${skill}-${index}`} className="mx-5 inline-flex items-center gap-10">
              {skill} <span className="text-[#b25b38]">/</span>
            </span>
          ))}
        </div>
      </section>

      <section
        id="story"
        className="mx-auto grid max-w-[1500px] gap-16 px-5 py-28 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-36"
      >
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-[#b25b38]">A bit of my story</p>
          <h2 className="mt-5 text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-7xl">
            How it all became one strange useful thing.
          </h2>
        </div>

        <div className="space-y-10 text-2xl leading-[1.35] tracking-[-0.03em] text-[#191713]/80 md:text-4xl">
          <p>
            For 16+ years, I’ve worked across <strong>climbing</strong>, <strong>youth programmes</strong>, <strong>frontline teams</strong>, <strong>events</strong>, and <strong>operations</strong>. I now build the next chapter around <strong>people</strong>, <strong>programmes</strong>, and <strong>practical technology</strong>.
          </p>
          <p>
            <strong>Service</strong>, <strong>safety</strong>, and <strong>teams</strong> became programmes, campaigns, and tools that remove busywork so people can focus on what matters.
          </p>
          <p>
            The through-line: environments where <strong>families</strong>, <strong>staff</strong>, <strong>students</strong>, and <strong>communities</strong> move with confidence.
          </p>
        </div>
      </section>

      <section id="works" className="bg-[#fffaf0] px-5 py-28 md:px-8 lg:py-36">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-[#b25b38]">Selected works</p>
              <h2 className="mt-5 max-w-4xl text-6xl font-black uppercase leading-[0.86] tracking-[-0.07em] md:text-8xl">
                Projects with fingerprints.
              </h2>
            </div>
            <p className="max-w-md text-lg leading-7 text-[#191713]/65">
              Less polished corporate theatre. More real work, real mess, real outcomes. Revoltingly rare, apparently.
            </p>
          </div>

          <div className="grid gap-8">
            {WORKS.map((work) => (
              <motion.article
                key={work.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.65 }}
                className="group grid gap-8 border-t border-[#191713]/20 py-10 lg:grid-cols-[0.28fr_0.72fr] lg:items-center"
              >
                <div className="flex items-start justify-between gap-5 lg:block">
                  <div>
                    <p className="font-mono text-sm text-[#b25b38]">{work.number}</p>
                    <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#191713]/40 lg:mt-4">Frame</p>
                  </div>
                  <div className="relative h-40 w-32 shrink-0 overflow-hidden rounded-[22px] border border-dashed border-[#191713]/30 bg-[#f3eadb] shadow-sm transition duration-300 group-hover:-rotate-2 group-hover:scale-[1.03] lg:mt-8 lg:h-56 lg:w-full">
                    <img 
                      src={work.image} 
                      alt={work.title} 
                      className="absolute inset-0 h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
                <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
                  <div>
                    <h3 className="text-4xl font-black uppercase leading-[0.9] tracking-[-0.05em] md:text-6xl">
                      {work.title}
                    </h3>
                    <p className="mt-4 text-lg italic text-[#b25b38]">{work.subtitle}</p>
                  </div>
                  <div className="flex h-full flex-col justify-center">
                    <p className="text-xl leading-8 text-[#191713]/75">{work.body}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[#191713]/20 px-4 py-2 text-sm text-[#191713]/70 transition duration-300 hover:-translate-y-1 hover:border-[#b25b38] hover:bg-[#b25b38] hover:text-[#fffaf0] hover:shadow-[0_10px_24px_rgba(178,91,56,0.22)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="timeline" className="relative overflow-hidden bg-[#191713] px-5 py-28 text-[#f3eadb] md:px-8 lg:py-36">
        <div className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-[#b25b38]/30 blur-3xl" />
        <div className="mx-auto grid max-w-[1500px] gap-16 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-[#d7b78d]">Timeline</p>
            <h2 className="mt-5 text-6xl font-black uppercase leading-[0.86] tracking-[-0.07em] md:text-8xl">
              The long route.
            </h2>
          </div>

          <div className="space-y-0 border-t border-[#f3eadb]/20">
            {TIMELINE.map(([period, role, org, detail, img]) => (
              <div key={`${period}-${role}`} className="grid gap-5 border-b border-[#f3eadb]/20 py-8 md:grid-cols-[0.35fr_0.65fr]">
                <div className="space-y-4">
                  <p className="font-mono text-sm text-[#d7b78d]">{period}</p>
                  <div className="relative h-20 w-32 overflow-hidden rounded-[14px] border border-[#f3eadb]/10 bg-[#2a2621] transition duration-300 hover:-rotate-2 hover:scale-[1.03]">
                    {img && (
                      <img src={img} alt={org} className="h-full w-full object-cover opacity-60" />
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold tracking-[-0.04em]">{role}</h3>
                  <p className="mt-1 text-[#f3eadb]/55">{org}</p>
                  <p className="mt-4 max-w-2xl text-lg leading-7 text-[#f3eadb]/70">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3eadb] px-5 py-28 md:px-8 lg:py-36">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-[#b25b38]">Credentials</p>
              <h2 className="mt-5 text-6xl font-black uppercase leading-[0.86] tracking-[-0.07em] md:text-8xl">
                Proof without the confetti.
              </h2>
            </div>
            <div className="grid gap-3">
              {CERTS.map((cert) => (
                <div key={cert} className="border-b border-[#191713]/15 py-4 text-lg text-[#191713]/75">
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative bg-[#b25b38] px-5 py-24 text-[#fffaf0] md:px-8 lg:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-[#191713]">Contact</p>
            <h2 className="mt-5 max-w-5xl text-6xl font-black uppercase leading-[0.84] tracking-[-0.07em] md:text-8xl lg:text-9xl">
              Let’s build the useful thing.
            </h2>
          </div>
          <div className="space-y-4 text-xl">
            <a href={`mailto:${PROFILE.email}`} className="flex items-center justify-between border-b border-[#fffaf0]/40 py-4 transition hover:pl-3">
              <span>{PROFILE.email}</span>
              <Arrow />
            </a>
            <a href="tel:+6592224337" className="flex items-center justify-between border-b border-[#fffaf0]/40 py-4 transition hover:pl-3">
              <span>{PROFILE.phone}</span>
              <Arrow />
            </a>
            <p className="pt-5 text-base leading-7 text-[#fffaf0]/75">
              Available for operations leadership, youth and community programming, sports marketing, stakeholder engagement, and digital operations roles.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-[#191713] px-5 py-8 text-sm text-[#f3eadb]/60 md:px-8">
        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-4 md:flex-row">
          <p>© {currentYear} Muhammad Fadhil Bin Gazali</p>
          <p>Personal online CV / portfolio</p>
        </div>
      </footer>
    </main>
  );
}

export default App;