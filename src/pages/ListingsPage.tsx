import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import type { PropertyType } from '../data/properties';
import {
  getLivingQualities,
  getResidenceTitle,
  khoangProperties,
  livingQualities,
  matchReason,
  type LivingQuality,
} from '../data/living';

type SortOption = 'relevance' | 'price-asc' | 'price-desc' | 'area-desc';

const parseQualities = (raw: string | null): LivingQuality[] => {
  if (!raw) return [];
  return raw.split(',').filter((item): item is LivingQuality => livingQualities.includes(item as LivingQuality));
};

export default function ListingsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selected, setSelected] = useState<LivingQuality[]>(() => parseQualities(searchParams.get('qualities')));
  const [query, setQuery] = useState('');
  const [city, setCity] = useState('all');
  const [type, setType] = useState<PropertyType | 'all'>('all');
  const [beds, setBeds] = useState('all');
  const [price, setPrice] = useState('all');
  const [sort, setSort] = useState<SortOption>('relevance');
  const [saved, setSaved] = useState<string[]>(() => {
    try { return JSON.parse(localStorage.getItem('khoang-shortlist') || '[]'); } catch { return []; }
  });

  const cities = useMemo(() => [...new Set(khoangProperties.map((property) => property.city))].sort(), []);

  const toggleQuality = (quality: LivingQuality) => {
    setSelected((current) => {
      const next = current.includes(quality)
        ? current.filter((item) => item !== quality)
        : current.length >= 3 ? [...current.slice(1), quality] : [...current, quality];
      const params = new URLSearchParams(searchParams);
      if (next.length) params.set('qualities', next.join(',')); else params.delete('qualities');
      setSearchParams(params, { replace: true });
      return next;
    });
  };

  const toggleSaved = (id: string) => {
    setSaved((current) => {
      const next = current.includes(id) ? current.filter((item) => item !== id) : [...current, id];
      localStorage.setItem('khoang-shortlist', JSON.stringify(next));
      return next;
    });
  };

  const result = useMemo(() => {
    let items = khoangProperties.map((property) => ({
      property,
      score: getLivingQualities(property).filter((quality) => selected.includes(quality)).length,
    }));

    if (selected.length) items = items.filter((item) => item.score > 0);
    if (query.trim()) {
      const normalized = query.toLowerCase();
      items = items.filter(({ property }) => `${property.title} ${property.location} ${property.area}`.toLowerCase().includes(normalized));
    }
    if (city !== 'all') items = items.filter(({ property }) => property.city === city);
    if (type !== 'all') items = items.filter(({ property }) => property.type === type);
    if (beds !== 'all') {
      const count = Number(beds);
      items = items.filter(({ property }) => beds === '5' ? property.beds >= 5 : property.beds === count);
    }
    if (price !== 'all') {
      const max = Number(price);
      items = items.filter(({ property }) => property.price <= max);
    }

    items.sort((a, b) => {
      if (sort === 'price-asc') return a.property.price - b.property.price;
      if (sort === 'price-desc') return b.property.price - a.property.price;
      if (sort === 'area-desc') return b.property.sqm - a.property.sqm;
      return b.score - a.score;
    });

    return items;
  }, [selected, query, city, type, beds, price, sort]);

  const clear = () => {
    setSelected([]);
    setQuery('');
    setCity('all');
    setType('all');
    setBeds('all');
    setPrice('all');
    setSort('relevance');
    setSearchParams({}, { replace: true });
  };

  return (
    <>
      <Helmet>
        <title>Discover — KHOẢNG</title>
        <meta name="description" content="Discover prototype residences by living qualities, then refine with familiar property facts." />
      </Helmet>

      <main id="main-content" className="pt-[72px]">
        <header className="container-main pt-12 md:pt-20 pb-12 md:pb-16">
          <div className="page-grid items-end">
            <div className="col-span-4 md:col-span-5 lg:col-span-7">
              <p className="utility-label">Discover / Living Index + facts</p>
              <h1 className="mt-5 text-[clamp(3.5rem,7vw,7.5rem)] leading-[0.88]">Start with how home should feel.</h1>
            </div>
            <div className="col-span-4 md:col-span-3 lg:col-start-9 lg:col-span-4 mt-6 md:mt-0">
              <p className="text-sm leading-relaxed text-text">Living qualities shape relevance first. Location, type, rooms and price remain available when you need precision.</p>
              <p className="mt-3 text-xs text-muted">Prototype inventory · synthetic metadata</p>
            </div>
          </div>
        </header>

        <section className="border-y border-border bg-surface">
          <div className="container-main py-6 md:py-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-8 lg:gap-12">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <p className="utility-label">Living Index · choose up to 3</p>
                  {selected.length > 0 && <button type="button" onClick={() => { setSelected([]); setSearchParams({}, { replace: true }); }} className="text-xs text-muted hover:text-accent">Clear qualities</button>}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-5">
                  {livingQualities.map((quality, index) => (
                    <button
                      key={quality}
                      type="button"
                      onClick={() => toggleQuality(quality)}
                      aria-pressed={selected.includes(quality)}
                      className="khoang-index-button !min-h-11 !py-2"
                      data-active={selected.includes(quality)}
                    >
                      <span className="flex items-center gap-2"><span className="utility-label">{String(index + 1).padStart(2, '0')}</span><span className="text-sm">{quality}</span></span>
                      <span>{selected.includes(quality) ? '●' : '○'}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 content-start">
                <label className="col-span-2">
                  <span className="utility-label block mb-2">Search</span>
                  <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Name, area or location" className="w-full min-h-11 border border-border bg-bg px-3 text-sm text-text-bright placeholder:text-muted focus:border-accent focus:outline-none" />
                </label>
                <label>
                  <span className="utility-label block mb-2">Location</span>
                  <select value={city} onChange={(event) => setCity(event.target.value)} className="w-full min-h-11 border border-border bg-bg px-3 text-sm">
                    <option value="all">All locations</option>
                    {cities.map((item) => <option key={item} value={item}>{item}</option>)}
                  </select>
                </label>
                <label>
                  <span className="utility-label block mb-2">Type</span>
                  <select value={type} onChange={(event) => setType(event.target.value as PropertyType | 'all')} className="w-full min-h-11 border border-border bg-bg px-3 text-sm">
                    <option value="all">All types</option>
                    <option value="Villa">Villa</option><option value="Penthouse">Penthouse</option><option value="Apartment">Apartment</option><option value="Duplex">Duplex</option>
                  </select>
                </label>
                <label>
                  <span className="utility-label block mb-2">Bedrooms</span>
                  <select value={beds} onChange={(event) => setBeds(event.target.value)} className="w-full min-h-11 border border-border bg-bg px-3 text-sm">
                    <option value="all">Any</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5+</option>
                  </select>
                </label>
                <label>
                  <span className="utility-label block mb-2">Price ceiling</span>
                  <select value={price} onChange={(event) => setPrice(event.target.value)} className="w-full min-h-11 border border-border bg-bg px-3 text-sm">
                    <option value="all">Any</option><option value="20000000000">20B VND</option><option value="40000000000">40B VND</option><option value="60000000000">60B VND</option><option value="100000000000">100B VND</option>
                  </select>
                </label>
              </div>
            </div>
          </div>
        </section>

        <section className="container-main py-10 md:py-14">
          <div className="flex flex-col sm:flex-row gap-4 sm:items-end sm:justify-between border-b border-border pb-5">
            <div>
              <p className="utility-label">{result.length} residences</p>
              <p className="mt-2 text-sm text-text">{selected.length ? `Reading through ${selected.join(' · ')}` : 'Broad prototype inventory'}</p>
            </div>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 text-sm">
                <span className="text-muted">Sort</span>
                <select value={sort} onChange={(event) => setSort(event.target.value as SortOption)} className="min-h-11 border border-border bg-bg px-3">
                  <option value="relevance">Relevance</option><option value="price-asc">Price low–high</option><option value="price-desc">Price high–low</option><option value="area-desc">Largest area</option>
                </select>
              </label>
              <button type="button" onClick={clear} className="text-sm border-b border-text pb-1 hover:text-accent hover:border-accent">Reset</button>
            </div>
          </div>

          {result.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14 mt-8">
              {result.map(({ property }, index) => {
                const qualities = getLivingQualities(property);
                const isSaved = saved.includes(property.id);
                return (
                  <article key={property.id} className={index % 5 === 0 ? 'md:col-span-2 lg:col-span-2' : ''}>
                    <div className={`${index % 5 === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'} overflow-hidden bg-surface`}>
                      <Link to={`/residences/${property.id}`}><img src={property.images[0]} alt={getResidenceTitle(property)} className="h-full w-full object-cover hover:scale-[1.015] transition-transform duration-500" /></Link>
                    </div>
                    <div className="mt-4 border-t border-border pt-3 grid grid-cols-[1fr_auto] gap-4">
                      <div>
                        <p className="utility-label">{qualities.slice(0, 3).join(' · ')}</p>
                        <h2 className="mt-2 text-xl leading-tight"><Link to={`/residences/${property.id}`} className="hover:text-accent">{getResidenceTitle(property)}</Link></h2>
                        <p className="mt-2 text-sm text-muted">{property.location}</p>
                        <p className="mt-3 text-sm text-text">{matchReason(property, selected)}</p>
                        <p className="mt-3 text-xs text-muted">{property.beds} beds · {property.baths} baths · {property.sqm}m² · {property.priceLabel}</p>
                      </div>
                      <button type="button" onClick={() => toggleSaved(property.id)} className="w-11 h-11 border border-border hover:border-accent" aria-label={isSaved ? 'Remove from shortlist' : 'Save to shortlist'} aria-pressed={isSaved}>{isSaved ? '●' : '○'}</button>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="py-24 md:py-32 max-w-2xl">
              <p className="utility-label">No exact match</p>
              <h2 className="mt-4 text-2xl md:text-3xl">Keep the intent. Loosen one fact.</h2>
              <p className="mt-5 text-text leading-relaxed">The prototype inventory is intentionally small. Remove a conventional filter first, or clear one living quality, rather than treating zero results as a dead end.</p>
              <button type="button" onClick={clear} className="mt-7 min-h-11 bg-text-bright text-white px-5 text-sm">Reset discovery</button>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
