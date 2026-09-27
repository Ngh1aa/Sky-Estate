import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { properties } from '../data/properties';
import { getLivingQualities, getResidenceTitle } from '../data/living';

const notes = [
  { title: 'Why morning light changes the room before furniture does', tag: 'Light', body: 'Orientation, depth and openings can matter more to daily comfort than another layer of decoration.' },
  { title: 'Quiet is not silence: reading the edge of a neighbourhood', tag: 'Quiet', body: 'Distance, setbacks, planting and room placement all shape how much of the city enters a home.' },
  { title: 'When a balcony is part of the plan, not an attachment', tag: 'Indoor–Outdoor', body: 'Useful outdoor space works when circulation, shade and adjacent rooms support it throughout the day.' },
  { title: 'Material character without the luxury vocabulary', tag: 'Material Character', body: 'Texture, joints, stone, timber and wear tell a stronger spatial story than generic claims of premium finish.' },
];

export default function JournalPage() {
  return (
    <>
      <Helmet>
        <title>Field Notes — KHOẢNG</title>
        <meta name="description" content="Short editorial notes about architecture, material and patterns of living." />
      </Helmet>
      <main id="main-content" className="pt-[72px]">
        <header className="container-main pt-14 md:pt-20 pb-16">
          <div className="page-grid items-end">
            <div className="col-span-4 md:col-span-6 lg:col-span-8">
              <p className="utility-label">Field Notes / Architecture + everyday life</p>
              <h1 className="mt-5 text-[clamp(3.8rem,8vw,8rem)] leading-[0.86]">A point of view makes discovery useful.</h1>
            </div>
            <p className="col-span-4 md:col-span-2 lg:col-start-10 lg:col-span-3 mt-6 md:mt-0 text-sm leading-relaxed text-text">Short prototype stories explain the thinking behind Living Index qualities without inventing market authority.</p>
          </div>
        </header>

        <section className="container-main pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
            {notes.map((note, index) => {
              const residence = properties.find((property) => getLivingQualities(property).includes(note.tag as ReturnType<typeof getLivingQualities>[number])) ?? properties[index];
              return (
                <article key={note.title} className="border-t border-border pt-4">
                  <p className="utility-label">{String(index + 1).padStart(2, '0')} / {note.tag}</p>
                  <div className="mt-5 overflow-hidden bg-surface aspect-[16/10]"><img src={residence.images[index % residence.images.length]} alt="" className="w-full h-full object-cover" /></div>
                  <h2 className="mt-5 text-2xl leading-[1.02]">{note.title}</h2>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-text">{note.body}</p>
                  <div className="mt-5 flex justify-between gap-4 text-xs text-muted"><span>Related residence</span><Link to={`/residences/${residence.id}`} className="hover:text-accent">{getResidenceTitle(residence)} →</Link></div>
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
