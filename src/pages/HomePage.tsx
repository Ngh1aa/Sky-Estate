import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { properties } from '../data/properties';
import {
  getLivingQualities,
  getResidenceTitle,
  livingQualities,
  matchReason,
  qualityDescriptions,
  type LivingQuality,
} from '../data/living';

const featuredCollections = [
  { title: 'Homes for Morning Light', quality: 'Light' as LivingQuality, note: 'Openings, orientation and rooms that change with the day.' },
  { title: 'Quiet City Edges', quality: 'Quiet' as LivingQuality, note: 'Urban access without living at the loudest point of the map.' },
  { title: 'Rooms that Open to Green', quality: 'Garden' as LivingQuality, note: 'Gardens, planted courts and softer boundaries between inside and out.' },
  { title: 'Living Above the Skyline', quality: 'Skyline' as LivingQuality, note: 'Long views, vertical distance and the city read from above.' },
];

export default function HomePage() {
  const [selected, setSelected] = useState<LivingQuality[]>(['Light', 'Quiet']);

  const toggleQuality = (quality: LivingQuality) => {
    setSelected((current) => {
      if (current.includes(quality)) return current.filter((item) => item !== quality);
      if (current.length >= 3) return [...current.slice(1), quality];
      return [...current, quality];
    });
  };

  const matched = useMemo(() => {
    return [...properties]
      .map((property) => ({
        property,
        score: getLivingQualities(property).filter((quality) => selected.includes(quality)).length,
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
  }, [selected]);

  const discoverHref = `/discover?qualities=${encodeURIComponent(selected.join(','))}`;
  const lead = matched[0]?.property ?? properties[0];

  return (
    <>
      <Helmet>
        <title>KHOẢNG — Living Discovery</title>
        <meta name="description" content="Discover prototype residences through light, quiet, green, water, material and the way you want to live." />
      </Helmet>

      <main id="main-content" className="pt-[72px]">
        <section className="container-main pt-12 md:pt-20 pb-20 md:pb-28">
          <div className="page-grid items-start">
            <div className="col-span-4 md:col-span-8 lg:col-span-5 lg:pr-8">
              <p className="utility-label">KHOẢNG / 01 — Living Index</p>
              <h1 className="mt-6 text-[clamp(3.8rem,8vw,8.5rem)] leading-[0.84] font-semibold tracking-[-0.065em] text-text-bright">
                Find a home by how you want to live.
              </h1>
              <p className="mt-8 editorial-copy text-text">
                Start with a feeling, not a spreadsheet. Choose up to three living qualities and let the current prototype inventory reorganise around them.
              </p>

              <div className="mt-12 border-t border-border" aria-label="Living qualities">
                {livingQualities.map((quality, index) => {
                  const active = selected.includes(quality);
                  return (
                    <button
                      key={quality}
                      type="button"
                      className="khoang-index-button"
                      data-active={active}
                      aria-pressed={active}
                      onClick={() => toggleQuality(quality)}
                    >
                      <span className="flex items-center gap-4">
                        <span className="utility-label">{String(index + 1).padStart(2, '0')}</span>
                        <span className="text-base md:text-lg">{quality}</span>
                      </span>
                      <span aria-hidden="true" className="text-lg">{active ? '●' : '○'}</span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-5">
                <Link to={discoverHref} className="inline-flex min-h-11 items-center bg-text-bright px-5 py-3 text-sm font-medium text-white hover:bg-accent transition-colors">
                  Explore residences →
                </Link>
                <span className="text-xs text-muted">{selected.length}/3 qualities active</span>
              </div>
            </div>

            <div className="col-span-4 md:col-span-8 lg:col-span-7 mt-14 lg:mt-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${lead.id}-${selected.join('-')}`}
                  initial={{ opacity: 0.45 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0.45 }}
                  transition={{ duration: 0.28 }}
                  className="grid grid-cols-5 gap-3 md:gap-5 items-end"
                >
                  <div className="col-span-5 md:col-span-4 overflow-hidden bg-surface aspect-[4/5] md:aspect-[5/6]">
                    <img src={lead.images[0]} alt={getResidenceTitle(lead)} className="h-full w-full object-cover" />
                  </div>
                  <div className="hidden md:block col-span-1 overflow-hidden bg-surface aspect-[2/5]">
                    <img src={lead.images[1] ?? lead.images[0]} alt="Architectural detail" className="h-full w-full object-cover" />
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5 border-t border-border pt-4">
                <div>
                  <p className="utility-label">Current reading</p>
                  <h2 className="mt-2 text-xl md:text-2xl leading-tight">{getResidenceTitle(lead)}</h2>
                </div>
                <div className="md:text-right">
                  <p className="text-sm text-text">{matchReason(lead, selected)}</p>
                  <p className="mt-2 text-xs text-muted">Prototype inventory · {lead.location}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-surface py-18 md:py-24">
          <div className="container-main">
            <div className="page-grid items-end mb-10 md:mb-14">
              <div className="col-span-4 md:col-span-5 lg:col-span-5">
                <p className="utility-label">02 — Ways of Living</p>
                <h2 className="mt-4 text-2xl md:text-[3.4rem] leading-[0.95]">Browse a point of view, not just a property type.</h2>
              </div>
              <p className="col-span-4 md:col-span-3 lg:col-start-9 lg:col-span-4 mt-5 md:mt-0 text-sm leading-relaxed text-text">
                These collections are editorial groupings for the prototype. They make the discovery logic visible without pretending to be an algorithmic recommendation engine.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12">
              {featuredCollections.map((collection, index) => {
                const residence = properties.find((property) => getLivingQualities(property).includes(collection.quality)) ?? properties[index];
                return (
                  <Link key={collection.title} to={`/discover?qualities=${encodeURIComponent(collection.quality)}`} className="group block">
                    <div className={`overflow-hidden bg-bg ${index % 2 ? 'aspect-[5/4]' : 'aspect-[4/3]'}`}>
                      <img src={residence.images[0]} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.015]" />
                    </div>
                    <div className="mt-4 border-t border-border pt-3 flex gap-6 justify-between">
                      <div>
                        <p className="utility-label">{collection.quality}</p>
                        <h3 className="mt-2 text-xl leading-tight">{collection.title}</h3>
                      </div>
                      <span className="text-sm text-muted max-w-[18rem]">{collection.note}</span>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="mt-10 text-right">
              <Link to="/collections" className="text-sm border-b border-text-bright pb-1 hover:text-accent hover:border-accent">See all Ways of Living →</Link>
            </div>
          </div>
        </section>

        <section className="container-main py-20 md:py-28">
          <div className="page-grid">
            <div className="col-span-4 md:col-span-3 lg:col-span-3">
              <p className="utility-label">03 — One residence, read properly</p>
              <p className="mt-5 text-sm text-muted">{lead.location}</p>
            </div>
            <div className="col-span-4 md:col-span-5 lg:col-span-6 lg:col-start-5 mt-6 md:mt-0">
              <h2 className="text-2xl md:text-[4.2rem] leading-[0.92]">The useful question is not “Is it premium?” It is “How would a day here actually feel?”</h2>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {getLivingQualities(lead).slice(0, 4).map((quality) => (
                  <div key={quality} className="border-t border-border pt-3">
                    <p className="utility-label">{quality}</p>
                    <p className="mt-3 text-sm leading-relaxed text-text">{qualityDescriptions[quality]}</p>
                  </div>
                ))}
              </div>
              <Link to={`/residences/${lead.id}`} className="inline-block mt-10 text-sm border-b border-text-bright pb-1 hover:text-accent hover:border-accent">
                Read this residence →
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-bg-deep text-white py-20 md:py-28">
          <div className="container-main page-grid items-end">
            <div className="col-span-4 md:col-span-5 lg:col-span-7">
              <p className="utility-label !text-white/50">04 — Method</p>
              <h2 className="mt-5 text-2xl md:text-[4.8rem] leading-[0.9] !text-white">Living Index is a conversation starter, not a score.</h2>
            </div>
            <div className="col-span-4 md:col-span-3 lg:col-start-9 lg:col-span-4 mt-8 md:mt-0">
              <p className="text-sm leading-relaxed text-white/70">
                Tags describe observable spatial cues in synthetic prototype content. They are not objective rankings, appraisals or verified real-estate claims.
              </p>
              <div className="mt-7 flex flex-wrap gap-5">
                <Link to="/about" className="text-sm border-b border-white pb-1">About the method</Link>
                <Link to="/consult" className="text-sm border-b border-white/40 pb-1 text-white/75">Start a conversation</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
