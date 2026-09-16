import { createFileRoute } from "@tanstack/react-router";
import eventLogo from "../assets/seva-logo-warm.png";
import modiPortrait from "../assets/narendra-modi-portrait.png";
import grandExhibition from "../assets/grand-exhibition.jpg";
import artistPainting from "../assets/artist-painting-modi.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Seva, Sankalp, Samarpan | 1,000 Paintings" },
      { name: "description", content: "A national art initiative documenting the life and public journey of Narendra Modi through 1,000 original paintings." },
      { property: "og:title", content: "Seva, Sankalp, Samarpan" },
      { property: "og:description", content: "1,000 artists, 1,000 paintings, one extraordinary visual journey." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const chapters = [
  ["01", "Roots & Childhood", "Vadnagar, family, education and formative experiences."],
  ["02", "Youth & Spiritual Journey", "Travel, exploration, discipline and self-discovery."],
  ["03", "Life of Service", "Grassroots organization and public engagement."],
  ["04", "Gujarat Years", "Administration, development and governance."],
  ["05", "National Leadership", "The transition to the office of Prime Minister."],
  ["06", "Transforming India", "Infrastructure, inclusion, sanitation, housing, healthcare and digital transformation."],
  ["07", "Atmanirbhar Bharat", "Manufacturing, entrepreneurship, startups, technology and space."],
  ["08", "India on the Global Stage", "Diplomacy, G20, international partnerships and the Global South."],
  ["09", "Culture & Heritage", "India's traditions, civilizational heritage and cultural initiatives."],
  ["10", "Viksit Bharat 2047", "Artists' interpretations of India's future."],
];

const internationalThemes = ["G20 Presidency", "International Solar Alliance", "International Day of Yoga", "Global South", "Diaspora Connect", "Climate Action", "Vaccine Maitri", "Space Diplomacy", "Cultural Diplomacy"];

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-paper font-sans text-foreground antialiased">
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-48 left-1/2 h-[700px] w-[1200px] -translate-x-1/2 rounded-full bg-brand-bright/10 blur-[140px]" />
        <div className="absolute -right-24 -bottom-24 h-[500px] w-[500px] rounded-full bg-brand-deep/15 blur-[120px]" />
      </div>

      <div className="relative z-10">
        <header className="sticky top-0 z-50 pt-4 sm:pt-6">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-10">
            <div className="museum-glass flex items-center justify-between rounded-xl px-4 py-3 shadow-lg ring-1 ring-foreground/5 sm:px-5">
              <a href="#top" className="flex min-w-0 items-center gap-2" aria-label="Seva, Sankalp, Samarpan home">
                <img src={eventLogo} alt="" width={768} height={768} className="size-10 shrink-0 rounded-sm object-cover sm:size-12" />
                <span className="truncate font-serif text-lg tracking-tight text-brand-deep sm:text-xl">Seva <span className="text-brand-bright">·</span> Sankalp <span className="text-brand-bright">·</span> Samarpan</span>
              </a>
              <nav className="hidden items-center gap-7 text-sm font-medium text-foreground/70 lg:flex" aria-label="Main navigation">
                <a className="nav-underline" href="#mission">Mission</a>
                <a className="nav-underline" href="#gallery">Galleries</a>
                <a className="nav-underline" href="#exhibition">Exhibition</a>
                <a className="nav-underline" href="#digital">Digital Museum</a>
                <a className="nav-underline" href="#partner">Partnership</a>
                <a className="nav-underline" href="#contact">Contact</a>
              </nav>
            </div>
          </div>
        </header>

        <main id="top">
          <section className="mx-auto max-w-[1280px] px-6 pb-24 pt-16 sm:px-10 sm:pt-28">
            <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3"><span className="h-px w-8 bg-brand-bright/60" /><p className="font-mono text-[10px] font-medium uppercase tracking-[0.3em] text-brand-bright">A national art initiative</p></div>
                <p className="mt-8 font-mono text-xs font-medium uppercase tracking-[0.24em] text-brand-deep">Seva · Sankalp · Samarpan</p>
                <h1 className="mt-4 max-w-[12ch] text-balance font-serif text-5xl leading-[0.98] font-medium tracking-tight text-brand-deep sm:text-7xl lg:text-[5.25rem]">Life of <span className="italic text-brand-bright">Narendra Modi</span></h1>
                <p className="mt-7 max-w-[40ch] font-serif text-2xl leading-tight text-brand-deep">A Thousand Canvases. One Extraordinary Journey.</p>
                <p className="mt-5 max-w-[48ch] text-lg leading-relaxed text-foreground/80">An artistic documentation of a life dedicated to public service, leadership and nation building.</p>
                <div className="mt-10 flex flex-wrap items-center gap-5">
                  <a href="#mission" className="group flex items-center gap-2 px-2 py-3 text-sm font-semibold text-brand-deep">Explore the Mission <span className="transition-transform group-hover:translate-x-1">→</span></a>
                </div>
                <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-brand-deep/15 pt-6 font-mono text-[10px] uppercase tracking-wider text-foreground/65">
                  <span>Concept: Vasudhaiva Kutumbakam Social Welfare Trust</span><span>With Van Kanya Arts Group</span>
                </div>
              </div>
              <div className="relative mx-auto w-full max-w-md lg:col-span-5">
                <img src={modiPortrait} alt="Painted portrait of Narendra Modi against an expressive Indian tricolour background" width={768} height={1024} className="aspect-[3/4] w-full rounded-2xl object-cover shadow-2xl shadow-brand-deep/15 ring-1 ring-foreground/10" />
                <div className="museum-glass absolute -bottom-6 left-3 rounded-xl p-5 shadow-xl ring-1 ring-foreground/5 sm:-left-6">
                  <p className="font-serif text-3xl leading-none font-medium text-brand-deep">1,000</p><p className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/60">Paintings · Stories</p>
                </div>
              </div>
            </div>
          </section>

          <section aria-labelledby="event-details" className="border-y border-brand-deep/10 bg-gold-light/55">
            <div className="mx-auto max-w-[1280px] px-6 py-16 sm:px-10 sm:py-20">
              <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-4">
                  <p className="font-mono text-[10px] font-medium uppercase tracking-[0.3em] text-brand-bright">Live Painting Exhibition</p>
                  <h2 id="event-details" className="mt-4 font-serif text-4xl leading-tight text-brand-deep">Art for a Stronger India</h2>
                  <p className="mt-4 font-serif text-xl italic text-foreground/65">Brushstrokes for a Bigger Bharat</p>
                </div>
                <dl className="grid gap-px overflow-hidden bg-brand-deep/10 ring-1 ring-brand-deep/10 sm:grid-cols-2 lg:col-span-8">
                  <div className="bg-gold-light p-6"><dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand-bright">Date</dt><dd className="mt-2 font-serif text-2xl text-brand-deep">September 17, 2026</dd><p className="mt-1 text-sm text-foreground/60">Thursday</p></div>
                  <div className="bg-gold-light p-6"><dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand-bright">Venue</dt><dd className="mt-2 font-serif text-2xl text-brand-deep">Sustainable Oasis</dd><p className="mt-1 text-sm leading-relaxed text-foreground/60">Rajiv Gandhi Renewable Energy Park, Leisure Valley Road, Sector 29, Gurugram, Haryana 122009</p></div>
                </dl>
              </div>
              <div className="mt-10 grid gap-px overflow-hidden bg-brand-deep/10 ring-1 ring-brand-deep/10 sm:grid-cols-2 lg:grid-cols-4">
                {["100 Renowned Artists", "Paintings Exhibition", "Youth Participation", "Art for a Better India"].map((detail) => <p key={detail} className="bg-gold-light px-5 py-4 text-center font-mono text-[10px] font-medium uppercase tracking-wider text-brand-deep">{detail}</p>)}
              </div>
            </div>
          </section>

          <section id="mission" className="border-y border-brand-bright/15 bg-gold-light/45">
            <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-24 sm:px-10 md:grid-cols-12">
              <div className="md:col-span-4"><p className="font-mono text-[10px] font-medium uppercase tracking-[0.3em] text-brand-bright">Celebrating a journey through art</p><h2 className="mt-5 font-serif text-4xl leading-tight font-medium tracking-tight text-brand-deep">Beyond the<br />portrait</h2><p className="mt-8 border-l-2 border-brand-bright/30 pl-6 text-sm leading-relaxed italic text-foreground/70">1,000 Artists. 1,000 Canvases. 1 National Art Movement.</p></div>
              <div className="space-y-5 md:col-span-8"><p className="max-w-[62ch] text-lg leading-relaxed text-foreground/80">Conceived by Vasudhaiva Kutumbakam Social Welfare Trust, the initiative brings together artists from across India to portray different chapters, moments, ideas and milestones in Narendra Modi's life and public journey.</p><p className="max-w-[62ch] leading-relaxed text-foreground/70">From his formative years in Vadnagar through grassroots organizational work, administration in Gujarat and national leadership, the collection is envisioned as a visual journey through service, resolve and dedication.</p><p className="max-w-[62ch] leading-relaxed text-foreground/70">Rather than 1,000 similar portraits, every artist will interpret a distinct chapter through an individual artistic language—creating a visual biography.</p>
                <dl className="grid grid-cols-2 gap-7 border-t border-brand-deep/15 pt-8 sm:grid-cols-3"><div><dt className="font-mono text-[10px] uppercase tracking-widest text-brand-bright">Scale</dt><dd className="mt-2 font-serif text-lg text-brand-deep">1,000 Canvases</dd></div><div><dt className="font-mono text-[10px] uppercase tracking-widest text-brand-bright">Expression</dt><dd className="mt-2 font-serif text-lg text-brand-deep">Artist-led</dd></div><div><dt className="font-mono text-[10px] uppercase tracking-widest text-brand-bright">Scope</dt><dd className="mt-2 font-serif text-lg text-brand-deep">Pan-Indian</dd></div></dl>
              </div>
            </div>
          </section>

          <section id="gallery" className="bg-brand-deep py-24 text-primary-foreground sm:py-28">
            <div className="mx-auto max-w-[1280px] px-6 sm:px-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"><div><p className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper">The 1,000 paintings mission</p><h2 className="mt-4 font-serif text-4xl font-medium tracking-tight sm:text-5xl">Ten rooms of history</h2></div><p className="max-w-[36ch] text-sm leading-relaxed text-primary-foreground/65">A chronological and thematic visual biography—not simply a portrait exhibition.</p></div>
              <ol className="mt-14 grid gap-px overflow-hidden bg-primary-foreground/10 ring-1 ring-primary-foreground/10 sm:grid-cols-2 lg:grid-cols-5">{chapters.map(([number, title, description]) => <li key={number} className="group min-h-52 bg-brand-deep p-6 transition-colors hover:bg-brand-bright"><span className="font-serif text-2xl text-paper/65">{number}</span><h3 className="mt-4 font-serif text-xl font-medium">{title}</h3><p className="mt-3 text-sm leading-relaxed text-primary-foreground/65 group-hover:text-primary-foreground/85">{description}</p></li>)}</ol>
            </div>
          </section>

          <section id="exhibition" className="mx-auto max-w-[1280px] px-6 py-24 sm:px-10">
            <div className="grid overflow-hidden rounded-2xl bg-brand-deep lg:grid-cols-2">
              <img src={grandExhibition} alt="Grand gallery prepared for a national exhibition" width={1600} height={1008} loading="lazy" className="h-full min-h-80 w-full object-cover" />
              <div className="p-8 text-primary-foreground sm:p-12 lg:p-16"><p className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper">The Grand Exhibition</p><h2 className="mt-5 font-serif text-4xl font-medium">Proposed National Exhibition</h2><p className="mt-3 font-serif text-2xl text-paper">Parliament Complex, New Delhi</p><p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-primary-foreground/55">Subject to permission and approval of the competent authorities</p><p className="mt-8 leading-relaxed text-primary-foreground/70">The long-term aspiration is to seek permission for a specially curated selection to be exhibited within the Parliament Complex, giving Members of Parliament and invited dignitaries an opportunity to experience the collection.</p><p className="mt-5 leading-relaxed text-primary-foreground/70">A formal proposal and approval process would be required. The wider collection could subsequently travel to important cultural venues across India.</p></div>
            </div>
          </section>

          <section className="border-y border-brand-deep/10 bg-gold-light/45"><div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-24 sm:px-10 lg:grid-cols-12"><div className="lg:col-span-5"><p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-bright">Art for a cause</p><h2 className="mt-5 font-serif text-4xl text-brand-deep">From canvas to compassion</h2></div><div className="lg:col-span-7"><p className="max-w-[58ch] text-lg leading-relaxed text-foreground/80">Following exhibition, selected works are proposed for a professionally administered charity art auction. An approved portion of eligible proceeds is intended for the Prime Minister's National Relief Fund, subject to the final structure, applicable laws and required approvals.</p><p className="mt-4 max-w-[58ch] text-sm leading-relaxed text-foreground/65">Any donation should be remitted directly through the official PMNRF mechanism and disclosed transparently with appropriate documentation.</p><div className="mt-9 flex flex-wrap items-center gap-4 font-mono text-xs font-medium uppercase tracking-wider text-brand-deep"><span>Create Art</span><span className="text-brand-bright">→</span><span>Preserve History</span><span className="text-brand-bright">→</span><span>Support Humanity</span></div></div></div></section>

          <section className="mx-auto max-w-[1280px] px-6 py-24 sm:px-10"><div className="grid gap-14 lg:grid-cols-2 lg:items-center"><div><p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-bright">International achievements gallery</p><h2 className="mt-5 font-serif text-4xl text-brand-deep">India on the global stage</h2><p className="mt-6 max-w-[52ch] leading-relaxed text-foreground/75">A dedicated segment can portray India's international engagement during Modi's premiership while distinguishing leadership from the achievements of India's institutions, scientists, diplomats, armed forces, businesses and citizens.</p><div className="mt-8 flex flex-wrap gap-2">{internationalThemes.map(theme => <span key={theme} className="rounded-full border border-brand-deep/15 bg-gold-light/45 px-3 py-2 text-xs text-brand-deep">{theme}</span>)}</div></div><div className="border-l border-brand-deep/15 pl-8 sm:pl-12"><p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-bright">Presentation to national leaders</p><h3 className="mt-5 font-serif text-3xl text-brand-deep">A canvas of appreciation</h3><p className="mt-5 leading-relaxed text-foreground/75">Subject to consent and protocol, selected paintings are proposed for presentation to senior Ministers, constitutional authorities, distinguished public servants and national institutions.</p><p className="mt-6 font-serif text-lg text-brand-deep">Original Painting + Artist Profile + Certificate of Authenticity + Story + Exhibition Catalogue</p></div></div></section>

          <section id="digital" className="bg-brand-deep py-24 text-primary-foreground"><div className="mx-auto grid max-w-[1280px] gap-12 px-6 sm:px-10 lg:grid-cols-12"><div className="lg:col-span-5"><p className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper">The Digital Museum</p><h2 className="mt-5 font-serif text-4xl">A permanent home for every canvas</h2><p className="mt-6 leading-relaxed text-primary-foreground/70">A QR code beside every physical painting can open its individual digital museum page—preserving the artwork, story and exhibition history for generations.</p></div><div className="grid gap-px overflow-hidden bg-primary-foreground/10 ring-1 ring-primary-foreground/10 sm:grid-cols-2 lg:col-span-7"><div className="bg-brand-deep p-6"><p className="font-serif text-5xl text-paper">001</p><p className="mt-2 text-sm text-primary-foreground/60">Painting number · title · artist · state</p></div><div className="bg-brand-deep p-6"><p className="font-serif text-2xl text-paper">The story behind the canvas</p><p className="mt-2 text-sm text-primary-foreground/60">Medium · dimensions · context · interpretation</p></div><div className="bg-brand-deep p-6"><p className="font-serif text-2xl text-paper">Living provenance</p><p className="mt-2 text-sm text-primary-foreground/60">Exhibition history · certificate · auction status</p></div><div className="bg-brand-bright p-6"><p className="font-serif text-2xl">Scan. Discover. Remember.</p><p className="mt-2 text-sm text-primary-foreground/75">One digital record for each original work.</p></div></div></div></section>

          <section className="mx-auto max-w-[1280px] px-6 py-24 sm:px-10"><div className="grid overflow-hidden rounded-2xl bg-gold-light/55 ring-1 ring-brand-deep/15 lg:grid-cols-2"><img src={artistPainting} alt="An artist painting a portrait of Narendra Modi in the studio" width={1254} height={1254} loading="lazy" className="h-full min-h-96 w-full object-contain bg-brand-deep" /><div className="p-8 sm:p-12 lg:p-16"><p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-bright">1,000 Artists of India</p><h2 className="mt-5 font-serif text-4xl text-brand-deep">A landmark artistic gathering</h2><p className="mt-5 text-lg leading-relaxed text-foreground/75">The event brings together artistic interpretations from across India, with each canvas presenting a distinct chapter in an extraordinary national journey.</p><div className="mt-8 grid grid-cols-2 gap-6 border-y border-brand-deep/15 py-6"><div><p className="font-mono text-[9px] uppercase tracking-wider text-brand-bright">Canvas vision</p><p className="mt-2 font-serif text-xl text-brand-deep">1,000 works</p></div><div><p className="font-mono text-[9px] uppercase tracking-wider text-brand-bright">Creative expression</p><p className="mt-2 font-serif text-xl text-brand-deep">Many styles</p></div></div><p className="mt-7 text-sm leading-relaxed text-foreground/65">Together, the collection forms an expansive visual record of service, leadership, resolve and nation building.</p></div></div></section>

          <section id="partner" className="border-y border-brand-deep/10 bg-gold-light/40"><div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-24 sm:px-10 lg:grid-cols-12"><div className="lg:col-span-6"><p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-bright">Partner with the mission</p><h2 className="mt-5 font-serif text-4xl text-brand-deep">Build the cultural record with us</h2><p className="mt-6 max-w-[54ch] leading-relaxed text-foreground/75">The initiative welcomes cultural institutions, universities, art organizations, galleries, philanthropic organizations and responsible corporate partners.</p></div><div className="lg:col-span-6"><div className="flex flex-wrap gap-2">{["Art Partner", "Knowledge Partner", "Exhibition Partner", "University Partner", "Documentation Partner", "Digital Museum Partner", "Logistics Partner", "Hospitality Partner", "CSR Supporter"].map(item => <span key={item} className="rounded-full border border-brand-deep/15 px-3 py-2 text-xs text-brand-deep">{item}</span>)}</div></div></div></section>

          <section className="mx-auto max-w-[1280px] px-6 py-24 text-center sm:px-10"><p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-bright">About the concept owner</p><h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl text-brand-deep">Vasudhaiva Kutumbakam Social Welfare Trust</h2><p className="mt-3 font-serif text-xl italic text-foreground/60">The World Is One Family</p><p className="mx-auto mt-7 max-w-2xl leading-relaxed text-foreground/75">Concept owner and initiating organization behind “Seva, Sankalp, Samarpan: Life of Narendra Modi,” conceived as an artistic and cultural platform bringing together art, public awareness, youth participation and social contribution.</p><div className="mt-8"><p className="font-serif text-xl text-brand-deep">VPV Yugka Murrthy</p><p className="mt-1 text-sm text-foreground/60">Founder President · Vasudhaiva Kutumbakam Social Welfare Trust</p></div></section>

          <section className="bg-brand-deep text-primary-foreground"><div className="mx-auto max-w-[1280px] px-6 py-24 text-center sm:px-10"><div className="grid gap-px overflow-hidden bg-primary-foreground/10 ring-1 ring-primary-foreground/10 sm:grid-cols-3"><div className="bg-brand-deep p-8"><p className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper">Seva</p><p className="mt-4 font-serif text-2xl">A life of service.</p></div><div className="bg-brand-deep p-8"><p className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper">Sankalp</p><p className="mt-4 font-serif text-2xl">A journey of determination.</p></div><div className="bg-brand-deep p-8"><p className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper">Samarpan</p><p className="mt-4 font-serif text-2xl">A commitment to the nation.</p></div></div><h2 className="mt-14 font-serif text-4xl sm:text-5xl">Let art tell the story.</h2><p className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-primary-foreground/55">1,000 Artists · 1,000 Paintings · 1 Extraordinary Visual Journey</p></div></section>
        </main>

        <section id="contact" className="border-y border-brand-deep/10 bg-gold-light/45">
          <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-24 sm:px-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.3em] text-brand-bright">Contact us</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight font-medium tracking-tight text-brand-deep">Get in touch</h2>
              <p className="mt-6 max-w-[44ch] leading-relaxed text-foreground/75">Reach out to Vasudhaiva Kutumbakam Social Welfare Trust for collaborations, partnerships and enquiries related to the Seva, Sankalp, Samarpan initiative.</p>
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-gold-light/70 p-8 ring-1 ring-brand-deep/15 sm:p-10">
                <p className="font-serif text-2xl text-brand-deep">Vasudhaiva Kutumbakam Social Welfare Trust</p>
                <p className="mt-1 font-serif text-base italic text-foreground/60">“The World Is One Family”</p>
                <address className="mt-6 space-y-1 text-sm leading-relaxed text-foreground/80 not-italic">
                  <p>107 Ram Vilas Balaji Nagar</p>
                  <p>IOB Colony, Maruthamalai Main Road</p>
                  <p>Coimbatore, Tamil Nadu – 641046</p>
                  <p>India</p>
                </address>
                <dl className="mt-7 grid gap-5 border-t border-brand-deep/15 pt-7 sm:grid-cols-2">
                  <div>
                    <dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand-bright">Mobile</dt>
                    <dd className="mt-2"><a href="tel:+919488215557" className="font-serif text-lg text-brand-deep transition-colors hover:text-brand-bright">+91 94882 15557</a></dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand-bright">Email</dt>
                    <dd className="mt-2 space-y-1">
                      <a href="mailto:vkswtrust@gmail.com" className="block font-serif text-base text-brand-deep transition-colors hover:text-brand-bright">vkswtrust@gmail.com</a>
                      <a href="mailto:info@vkswt.com" className="block font-serif text-base text-brand-deep transition-colors hover:text-brand-bright">info@vkswt.com</a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand-bright">Website</dt>
                    <dd className="mt-2"><a href="https://vkswt.com" target="_blank" rel="noopener noreferrer" className="font-serif text-lg text-brand-deep transition-colors hover:text-brand-bright">vkswt.com</a></dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand-bright">Initiative</dt>
                    <dd className="mt-2 flex flex-col gap-1">
                      <a href="https://sevasankalpsamarpan.com" className="font-serif text-base text-brand-deep transition-colors hover:text-brand-bright">sevasankalpsamarpan.com</a>
                      <a href="https://sevasankalpsamarpan.org" className="font-serif text-base text-brand-deep transition-colors hover:text-brand-bright">sevasankalpsamarpan.org</a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-gold-light/45"><div className="mx-auto flex max-w-[1280px] flex-col gap-7 px-6 py-10 sm:px-10 md:flex-row md:items-end md:justify-between"><div><div className="flex items-center gap-3"><img src={eventLogo} alt="Seva Sankalp Samarpan" width={768} height={768} loading="lazy" className="size-16 rounded-sm object-cover" /><span className="font-serif text-2xl text-brand-deep">Seva · Sankalp · Samarpan</span></div><p className="mt-4 max-w-[64ch] text-[11px] leading-relaxed text-foreground/60">Concept owned and initiated by Vasudhaiva Kutumbakam Social Welfare Trust, in association with Van Kanya Arts Group. Proposed exhibition, presentation, auction and donation elements remain subject to consent, permission, applicable laws and approvals. No official endorsement is implied.</p></div><div className="flex flex-col gap-2 text-right font-mono text-[10px] uppercase tracking-wider text-brand-bright"><span>sevasankalpsamarpan.com</span><span>sevasankalpsamarpan.org</span></div></div></footer>
      </div>
    </div>
  );
}
