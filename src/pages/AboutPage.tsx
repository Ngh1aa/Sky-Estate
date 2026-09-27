import { Helmet } from 'react-helmet-async';
import { livingQualities, qualityDescriptions } from '../data/living';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About the Method — KHOẢNG</title>
        <meta name="description" content="How the KHOẢNG Living Index prototype reframes property discovery around spatial and everyday qualities." />
      </Helmet>
      <main id="main-content" className="pt-[72px]">
        <header className="container-main pt-14 md:pt-20 pb-16 md:pb-24">
          <div className="page-grid items-end">
            <div className="col-span-4 md:col-span-6 lg:col-span-8">
              <p className="utility-label">About the Method</p>
              <h1 className="mt-5 text-[clamp(3.7rem,8vw,8rem)] leading-[0.86]">KHOẢNG is a way to ask better questions about home.</h1>
            </div>
            <p className="col-span-4 md:col-span-2 lg:col-start-10 lg:col-span-3 mt-7 md:mt-0 text-sm leading-relaxed text-text">
              This is a portfolio product prototype, not a brokerage company. The inventory, tags and descriptive data are synthetic unless explicitly stated otherwise.
            </p>
          </div>
        </header>

        <section className="bg-surface border-y border-border py-16 md:py-24">
          <div className="container-main page-grid">
            <div className="col-span-4 md:col-span-3 lg:col-span-3">
              <p className="utility-label">01 — Problem frame</p>
            </div>
            <div className="col-span-4 md:col-span-5 lg:col-start-5 lg:col-span-6 mt-6 md:mt-0">
              <h2 className="text-2xl md:text-[4rem] leading-[0.94]">Property search is precise about facts and often vague about lived experience.</h2>
              <p className="mt-7 editorial-copy text-text">Bedrooms, price and location are necessary. They do not fully answer whether a home feels bright, calm, connected to green, useful for focused work or generous for social life. KHOẢNG keeps the conventional facts and adds a lightweight layer for those questions.</p>
            </div>
          </div>
        </section>

        <section className="container-main py-16 md:py-24">
          <div className="page-grid">
            <div className="col-span-4 md:col-span-3 lg:col-span-3">
              <p className="utility-label">02 — Living Index</p>
              <p className="mt-4 text-sm text-muted">A descriptive prototype vocabulary, not a scientific score.</p>
            </div>
            <div className="col-span-4 md:col-span-5 lg:col-start-5 lg:col-span-7 mt-8 md:mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                {livingQualities.map((quality, index) => (
                  <div key={quality} className="py-5 border-t border-border">
                    <div className="flex justify-between gap-4"><h3 className="text-lg leading-tight">{quality}</h3><span className="utility-label">{String(index + 1).padStart(2, '0')}</span></div>
                    <p className="mt-3 text-sm leading-relaxed text-text">{qualityDescriptions[quality]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-bg-deep text-white py-16 md:py-24">
          <div className="container-main page-grid">
            <div className="col-span-4 md:col-span-3 lg:col-span-3"><p className="utility-label !text-white/50">03 — What it does not claim</p></div>
            <div className="col-span-4 md:col-span-5 lg:col-start-5 lg:col-span-7 mt-8 md:mt-0 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
              {[
                ['No objective ranking', 'A quality tag does not mean one residence is better than another.'],
                ['No verified availability', 'Prototype inventory is not a live market feed.'],
                ['No brokerage authority', 'There is no invented office, founder history, transaction volume or response SLA.'],
                ['No conversion claims', 'The concept needs real user validation before claims about comprehension or business impact.'],
              ].map(([title, body]) => (
                <div key={title} className="border-t border-white/20 pt-4"><h3 className="text-lg !text-white">{title}</h3><p className="mt-3 text-sm leading-relaxed text-white/65">{body}</p></div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
