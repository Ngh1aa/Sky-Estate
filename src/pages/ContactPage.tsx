import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { properties } from '../data/properties';
import { getLivingQualities, getResidenceTitle, livingQualities, type LivingQuality } from '../data/living';

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const residence = useMemo(() => properties.find((item) => item.id === searchParams.get('residence')), [searchParams]);
  const initialQualities = residence ? getLivingQualities(residence).slice(0, 3) : [];

  const [form, setForm] = useState({ name: '', email: '', phone: '', locations: '', budget: '', message: '' });
  const [qualities, setQualities] = useState<LivingQuality[]>(initialQualities);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const toggleQuality = (quality: LivingQuality) => {
    setQualities((current) => current.includes(quality) ? current.filter((item) => item !== quality) : current.length >= 3 ? [...current.slice(1), quality] : [...current, quality]);
  };

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (!form.name.trim()) nextErrors.name = 'Add your name.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Use a valid email address.';
    if (!form.message.trim()) nextErrors.message = 'Tell us what you are trying to find.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Start a Conversation — KHOẢNG</title>
        <meta name="description" content="A preference-aware prototype enquiry flow that carries living qualities forward." />
      </Helmet>
      <main id="main-content" className="pt-[72px] min-h-screen">
        <header className="container-main pt-14 md:pt-20 pb-14 md:pb-20">
          <div className="page-grid items-end">
            <div className="col-span-4 md:col-span-6 lg:col-span-8">
              <p className="utility-label">Consult / Continue with context</p>
              <h1 className="mt-5 text-[clamp(3.7rem,8vw,8rem)] leading-[0.86]">Do not start the conversation from zero.</h1>
            </div>
            <p className="col-span-4 md:col-span-2 lg:col-start-10 lg:col-span-3 mt-6 md:mt-0 text-sm leading-relaxed text-text">This is a non-sending portfolio prototype. It demonstrates how discovery intent can carry into an enquiry without inventing an office, hotline or response promise.</p>
          </div>
        </header>

        <section className="container-main pb-24">
          {submitted ? (
            <div className="max-w-3xl border-t border-border pt-8 py-16">
              <p className="utility-label">Prototype confirmation</p>
              <h2 className="mt-4 text-3xl md:text-5xl leading-[0.95]">Your context is ready for a conversation.</h2>
              <p className="mt-6 text-text leading-relaxed">No message was actually sent. In a production version, this state would confirm delivery and show the exact preferences shared.</p>
              <div className="mt-8 border-l-2 border-accent pl-5 text-sm text-text">
                <p>{qualities.length ? qualities.join(' · ') : 'No Living Index qualities selected'}</p>
                {residence && <p className="mt-2">Residence: {getResidenceTitle(residence)}</p>}
              </div>
              <button type="button" onClick={() => setSubmitted(false)} className="mt-8 min-h-11 bg-text-bright text-white px-5 text-sm">Edit prototype enquiry</button>
            </div>
          ) : (
            <form onSubmit={submit} className="page-grid">
              <div className="col-span-4 md:col-span-3 lg:col-span-4 lg:pr-8">
                <p className="utility-label">Living preferences · up to 3</p>
                <div className="mt-4 border-t border-border">
                  {livingQualities.map((quality, index) => (
                    <button key={quality} type="button" onClick={() => toggleQuality(quality)} data-active={qualities.includes(quality)} aria-pressed={qualities.includes(quality)} className="khoang-index-button">
                      <span className="flex items-center gap-3"><span className="utility-label">{String(index + 1).padStart(2, '0')}</span><span className="text-sm">{quality}</span></span>
                      <span>{qualities.includes(quality) ? '●' : '○'}</span>
                    </button>
                  ))}
                </div>
                {residence && (
                  <div className="mt-8 border-t border-border pt-4">
                    <p className="utility-label">Carried from residence</p>
                    <p className="mt-3 text-lg text-text-bright">{getResidenceTitle(residence)}</p>
                    <p className="mt-2 text-sm text-muted">{residence.location}</p>
                  </div>
                )}
              </div>

              <div className="col-span-4 md:col-span-5 lg:col-start-6 lg:col-span-6 mt-10 md:mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-6">
                  <Field label="Name" error={errors.name}><input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className={inputClass} /></Field>
                  <Field label="Email" error={errors.email}><input type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} className={inputClass} /></Field>
                  <Field label="Phone (optional)"><input value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} className={inputClass} /></Field>
                  <Field label="Preferred locations"><input value={form.locations} onChange={(event) => setForm({ ...form, locations: event.target.value })} placeholder="e.g. Thảo Điền, river edge" className={inputClass} /></Field>
                  <Field label="Budget range"><input value={form.budget} onChange={(event) => setForm({ ...form, budget: event.target.value })} placeholder="Optional prototype input" className={inputClass} /></Field>
                  <div />
                  <div className="sm:col-span-2">
                    <Field label="What are you trying to find?" error={errors.message}><textarea value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} rows={6} placeholder="Describe the day, space or trade-off you care about." className={`${inputClass} py-3 resize-y`} /></Field>
                  </div>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between border-t border-border pt-5">
                  <p className="text-xs text-muted max-w-md">Prototype only: submit shows a local confirmation state and does not transmit personal information.</p>
                  <button type="submit" className="min-h-11 bg-text-bright text-white px-6 text-sm hover:bg-accent transition-colors">Review context →</button>
                </div>
              </div>
            </form>
          )}
        </section>
      </main>
    </>
  );
}

const inputClass = 'w-full min-h-12 border border-border bg-surface px-3 text-sm text-text-bright placeholder:text-muted focus:border-accent focus:outline-none';

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="utility-label block mb-2">{label}</span>
      {children}
      {error && <span className="mt-2 block text-xs text-error">{error}</span>}
    </label>
  );
}
