import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  getLivingQualities,
  getResidenceDescription,
  getResidenceTitle,
  khoangProperties,
  qualityDescriptions,
} from '../data/living';

export default function PropertyDetailPage() {
  const { id } = useParams<{ id: string }>();
  const property = khoangProperties.find((item) => item.id === id);
  const [currentImage, setCurrentImage] = useState(0);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    document.title = property ? `${getResidenceTitle(property)} — KHOẢNG` : 'Residence unavailable — KHOẢNG';
  }, [property]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentImage(0);
  }, [id]);

  useEffect(() => {
    if (!property) return;
    try {
      const shortlist: string[] = JSON.parse(localStorage.getItem('khoang-shortlist') || '[]');
      setSaved(shortlist.includes(property.id));
    } catch {
      setSaved(false);
    }
  }, [property]);

  const related = useMemo(() => {
    if (!property) return [];
    const currentQualities = getLivingQualities(property);
    return khoangProperties
      .filter((item) => item.id !== property.id)
      .map((item) => ({ item, score: getLivingQualities(item).filter((quality) => currentQualities.includes(quality)).length }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map(({ item }) => item);
  }, [property]);

  if (!property) {
    return (
      <main id="main-content" className="pt-[72px] min-h-screen container-main flex items-center">
        <div className="max-w-xl py-24">
          <p className="utility-label">Residence unavailable</p>
          <h1 className="mt-4 text-3xl">This prototype residence is not in the current index.</h1>
          <Link to="/discover" className="inline-block mt-8 border-b border-text-bright pb-1">Return to Discover →</Link>
        </div>
      </main>
    );
  }

  const qualities = getLivingQualities(property);
  const title = getResidenceTitle(property);

  const toggleSaved = () => {
    try {
      const shortlist: string[] = JSON.parse(localStorage.getItem('khoang-shortlist') || '[]');
      const next = shortlist.includes(property.id) ? shortlist.filter((item) => item !== property.id) : [...shortlist, property.id];
      localStorage.setItem('khoang-shortlist', JSON.stringify(next));
      setSaved(next.includes(property.id));
    } catch {
      setSaved((value) => !value);
    }
  };

  return (
    <>
      <Helmet>
        <title>{title} — KHOẢNG</title>
        <meta name="description" content={`A KHOẢNG prototype residence in ${property.location}, read through spatial and living qualities.`} />
      </Helmet>

      <main id="main-content" className="pt-[72px]">
        <section className="container-main pt-8 md:pt-12 pb-10">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
            <div className="flex items-center gap-2 text-xs text-muted">
              <Link to="/discover" className="hover:text-accent">Discover</Link><span>/</span><span>{property.area}</span>
            </div>
            <button type="button" onClick={toggleSaved} aria-pressed={saved} className="min-h-11 px-4 border border-border text-sm hover:border-accent">
              {saved ? '● Saved' : '○ Save residence'}
            </button>
          </div>
        </section>

        <section className="container-main pb-14 md:pb-20">
          <div className="page-grid items-end">
            <div className="col-span-4 md:col-span-5 lg:col-span-7">
              <p className="utility-label">Residence / Prototype inventory</p>
              <h1 className="mt-5 text-[clamp(3.2rem,7vw,7rem)] leading-[0.88]">{title}</h1>
            </div>
            <div className="col-span-4 md:col-span-3 lg:col-start-9 lg:col-span-4 mt-6 md:mt-0">
              <p className="text-sm leading-relaxed text-text">{property.location}</p>
              <p className="mt-3 text-sm text-muted">{property.beds} beds · {property.baths} baths · {property.sqm}m² · {property.priceLabel}</p>
            </div>
          </div>
        </section>

        <section className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_280px] gap-4">
            <button type="button" onClick={() => setCurrentImage((index) => (index + 1) % property.images.length)} className="block w-full overflow-hidden bg-surface aspect-[4/3] md:aspect-[16/10] cursor-zoom-in" aria-label="Show next residence image">
              <img src={property.images[currentImage]} alt={`${title} — view ${currentImage + 1}`} className="w-full h-full object-cover" />
            </button>
            <div className="grid grid-cols-4 lg:grid-cols-1 gap-2 lg:gap-3 content-start">
              {property.images.slice(0, 4).map((image, index) => (
                <button key={image} type="button" onClick={() => setCurrentImage(index)} aria-label={`Show image ${index + 1}`} className={`overflow-hidden aspect-[4/3] border ${currentImage === index ? 'border-accent' : 'border-transparent'}`}>
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="container-main py-16 md:py-24">
          <div className="page-grid">
            <aside className="col-span-4 md:col-span-3 lg:col-span-3">
              <p className="utility-label">Living Index reading</p>
              <div className="mt-5 border-t border-border">
                {qualities.map((quality, index) => (
                  <div key={quality} className="py-4 border-b border-border flex justify-between gap-4">
                    <span className="text-sm text-text-bright">{quality}</span>
                    <span className="utility-label">0{index + 1}</span>
                  </div>
                ))}
              </div>
            </aside>

            <div className="col-span-4 md:col-span-5 lg:col-start-5 lg:col-span-6 mt-10 md:mt-0">
              <p className="utility-label">Read the space</p>
              <h2 className="mt-4 text-2xl md:text-[4rem] leading-[0.94]">What matters here is how the spatial cues support a way of living.</h2>
              <p className="mt-8 editorial-copy text-text">{getResidenceDescription(property)}</p>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
                {qualities.map((quality) => (
                  <div key={quality} className="border-t border-border pt-3">
                    <p className="utility-label">{quality}</p>
                    <p className="mt-3 text-sm leading-relaxed text-text">{qualityDescriptions[quality]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface border-y border-border py-16 md:py-24">
          <div className="container-main page-grid">
            <div className="col-span-4 md:col-span-3 lg:col-span-3">
              <p className="utility-label">Essential facts</p>
            </div>
            <div className="col-span-4 md:col-span-5 lg:col-start-5 lg:col-span-7 mt-8 md:mt-0 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
              {[
                ['Type', property.type],
                ['Area', `${property.sqm}m²`],
                ['Bedrooms', String(property.beds)],
                ['Bathrooms', String(property.baths)],
                ['Year', String(property.year)],
                ['Area context', property.area],
                ['City', property.city],
                ['Prototype price', property.priceLabel],
              ].map(([label, value]) => (
                <div key={label} className="border-t border-border pt-3">
                  <p className="utility-label">{label}</p>
                  <p className="mt-2 text-sm text-text-bright">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container-main py-16 md:py-24">
          <div className="page-grid">
            <div className="col-span-4 md:col-span-3 lg:col-span-3">
              <p className="utility-label">Amenities / context</p>
            </div>
            <div className="col-span-4 md:col-span-5 lg:col-start-5 lg:col-span-7 mt-8 md:mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                {property.amenities.map((amenity) => <p key={amenity} className="py-4 border-b border-border text-sm text-text">{amenity}</p>)}
              </div>
              <div className="mt-12 border-l-2 border-accent pl-5 max-w-2xl">
                <p className="text-sm leading-relaxed text-text">Location and inventory details in this portfolio prototype are synthetic and should not be read as a real brokerage listing, appraisal or availability statement.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-bg-deep text-white py-16 md:py-24">
          <div className="container-main page-grid items-end">
            <div className="col-span-4 md:col-span-5 lg:col-span-7">
              <p className="utility-label !text-white/50">Continue the journey</p>
              <h2 className="mt-4 text-2xl md:text-[4.4rem] leading-[0.92] !text-white">Bring the spatial preferences with you.</h2>
            </div>
            <div className="col-span-4 md:col-span-3 lg:col-start-9 lg:col-span-4 mt-8 md:mt-0">
              <p className="text-sm text-white/70 leading-relaxed">The consultation flow can carry this residence and its Living Index qualities forward instead of asking you to start again.</p>
              <Link to={`/consult?residence=${property.id}`} className="inline-block mt-6 min-h-11 border border-white px-5 py-3 text-sm">Start a conversation →</Link>
            </div>
          </div>
        </section>

        <section className="container-main py-16 md:py-24">
          <div className="flex items-end justify-between gap-6 mb-8">
            <div><p className="utility-label">Related by living qualities</p><h2 className="mt-3 text-2xl">Continue sideways, not back to zero.</h2></div>
            <Link to="/discover" className="hidden sm:block text-sm border-b border-text pb-1">All residences →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((item) => (
              <Link key={item.id} to={`/residences/${item.id}`} className="group">
                <div className="aspect-[4/3] overflow-hidden bg-surface"><img src={item.images[0]} alt={getResidenceTitle(item)} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.015]" /></div>
                <div className="mt-3 border-t border-border pt-3"><p className="utility-label">{getLivingQualities(item).slice(0, 2).join(' · ')}</p><h3 className="mt-2 text-lg">{getResidenceTitle(item)}</h3></div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
