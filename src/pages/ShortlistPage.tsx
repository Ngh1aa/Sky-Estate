import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { properties } from '../data/properties';
import { getLivingQualities, getResidenceTitle } from '../data/living';

export default function ShortlistPage() {
  const [ids, setIds] = useState<string[]>(() => {
    try { return JSON.parse(localStorage.getItem('khoang-shortlist') || '[]'); } catch { return []; }
  });

  const saved = useMemo(() => properties.filter((property) => ids.includes(property.id)), [ids]);

  const remove = (id: string) => {
    const next = ids.filter((item) => item !== id);
    localStorage.setItem('khoang-shortlist', JSON.stringify(next));
    setIds(next);
  };

  return (
    <>
      <Helmet>
        <title>Shortlist — KHOẢNG</title>
        <meta name="description" content="A local prototype shortlist for keeping residence decisions connected across discovery." />
      </Helmet>
      <main id="main-content" className="pt-[72px] min-h-screen">
        <header className="container-main pt-14 md:pt-20 pb-12 md:pb-16">
          <div className="page-grid items-end">
            <div className="col-span-4 md:col-span-6 lg:col-span-8">
              <p className="utility-label">Shortlist / Local prototype state</p>
              <h1 className="mt-5 text-[clamp(3.8rem,8vw,8rem)] leading-[0.86]">Keep the homes worth thinking about.</h1>
            </div>
            <p className="col-span-4 md:col-span-2 lg:col-start-10 lg:col-span-3 mt-6 md:mt-0 text-sm leading-relaxed text-text">Saved residences stay in this browser only. Nothing is sent to a server.</p>
          </div>
        </header>

        <section className="container-main pb-24">
          {saved.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-14">
              {saved.map((property) => (
                <article key={property.id}>
                  <Link to={`/residences/${property.id}`} className="block overflow-hidden bg-surface aspect-[4/3]">
                    <img src={property.images[0]} alt={getResidenceTitle(property)} className="h-full w-full object-cover hover:scale-[1.015] transition-transform duration-500" />
                  </Link>
                  <div className="mt-4 border-t border-border pt-3 flex justify-between gap-5">
                    <div>
                      <p className="utility-label">{getLivingQualities(property).slice(0, 3).join(' · ')}</p>
                      <h2 className="mt-2 text-xl"><Link to={`/residences/${property.id}`} className="hover:text-accent">{getResidenceTitle(property)}</Link></h2>
                      <p className="mt-2 text-sm text-muted">{property.location}</p>
                    </div>
                    <button type="button" onClick={() => remove(property.id)} className="self-start min-h-11 px-3 border border-border text-xs hover:border-error hover:text-error">Remove</button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="max-w-2xl py-16 border-t border-border">
              <p className="utility-label">Nothing saved yet</p>
              <h2 className="mt-4 text-3xl md:text-4xl">A shortlist should be small enough to compare.</h2>
              <p className="mt-5 text-text leading-relaxed">Save a few residences from Discover or a detail page. KHOẢNG keeps the decision thread intact without manufacturing urgency.</p>
              <Link to="/discover" className="inline-block mt-7 min-h-11 bg-text-bright text-white px-5 py-3 text-sm">Start discovering →</Link>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
