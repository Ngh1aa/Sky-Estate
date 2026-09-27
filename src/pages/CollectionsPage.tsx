import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { properties } from '../data/properties';
import { getLivingQualities, getResidenceTitle, livingQualities, qualityDescriptions } from '../data/living';

export default function CollectionsPage() {
  return (
    <>
      <Helmet>
        <title>Ways of Living — KHOẢNG</title>
        <meta name="description" content="Editorial prototype collections organised around qualities of everyday living." />
      </Helmet>
      <main id="main-content" className="pt-[72px]">
        <header className="container-main pt-14 md:pt-20 pb-14 md:pb-20">
          <div className="page-grid items-end">
            <div className="col-span-4 md:col-span-6 lg:col-span-8">
              <p className="utility-label">Ways of Living / Editorial discovery</p>
              <h1 className="mt-5 text-[clamp(3.6rem,8vw,8rem)] leading-[0.86]">Different homes answer different days.</h1>
            </div>
            <p className="col-span-4 md:col-span-2 lg:col-start-10 lg:col-span-3 mt-6 md:mt-0 text-sm leading-relaxed text-text">
              Curated prototype collections make one living quality legible at a time. They are editorial groupings, not personalised recommendations.
            </p>
          </div>
        </header>

        <section className="container-main pb-20 md:pb-28">
          <div className="space-y-20 md:space-y-28">
            {livingQualities.slice(0, 8).map((quality, index) => {
              const matches = properties.filter((property) => getLivingQualities(property).includes(quality)).slice(0, 3);
              const lead = matches[0] ?? properties[index % properties.length];
              return (
                <article key={quality} className="border-t border-border pt-5">
                  <div className="page-grid items-start">
                    <div className="col-span-4 md:col-span-3 lg:col-span-3">
                      <p className="utility-label">{String(index + 1).padStart(2, '0')} / {quality}</p>
                      <h2 className="mt-4 text-2xl md:text-3xl leading-[0.95]">{collectionTitle(quality)}</h2>
                      <p className="mt-5 text-sm leading-relaxed text-text">{qualityDescriptions[quality]}</p>
                      <Link to={`/discover?qualities=${encodeURIComponent(quality)}`} className="inline-block mt-6 text-sm border-b border-text pb-1 hover:text-accent hover:border-accent">Explore this quality →</Link>
                    </div>
                    <div className="col-span-4 md:col-span-5 lg:col-start-5 lg:col-span-8 mt-8 md:mt-0">
                      <div className="grid grid-cols-3 gap-3 md:gap-5 items-end">
                        <Link to={`/residences/${lead.id}`} className="col-span-3 md:col-span-2 block overflow-hidden bg-surface aspect-[4/3]">
                          <img src={lead.images[0]} alt={getResidenceTitle(lead)} className="w-full h-full object-cover hover:scale-[1.015] transition-transform duration-500" />
                        </Link>
                        <div className="hidden md:grid col-span-1 gap-3">
                          {matches.slice(1, 3).map((property) => (
                            <Link key={property.id} to={`/residences/${property.id}`} className="block overflow-hidden bg-surface aspect-[4/3]">
                              <img src={property.images[0]} alt={getResidenceTitle(property)} className="w-full h-full object-cover" />
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="mt-4 flex justify-between gap-6 text-sm">
                        <span className="text-text-bright">{getResidenceTitle(lead)}</span>
                        <span className="text-muted text-right">{lead.location}</span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}

function collectionTitle(quality: string) {
  const titles: Record<string, string> = {
    Light: 'Homes for Morning Light',
    Quiet: 'Quiet City Edges',
    Garden: 'Rooms that Open to Green',
    Water: 'Living with Water in View',
    Skyline: 'Above the City Line',
    'Material Character': 'Material Before Decoration',
    'Indoor–Outdoor': 'Boundaries Left Open',
    'Work from Home': 'Space to Focus, Room to Stop',
  };
  return titles[quality] ?? quality;
}
