import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 — KHOẢNG</title>
        <meta name="description" content="This route is outside the current KHOẢNG prototype." />
      </Helmet>
      <main id="main-content" className="pt-[72px] min-h-screen flex items-center">
        <div className="container-main py-24">
          <div className="page-grid items-end">
            <div className="col-span-4 md:col-span-5 lg:col-span-7">
              <p className="utility-label">404 / Outside the index</p>
              <h1 className="mt-5 text-[clamp(5rem,16vw,14rem)] leading-[0.72]">404</h1>
            </div>
            <div className="col-span-4 md:col-span-3 lg:col-start-9 lg:col-span-4 mt-8 md:mt-0 border-t border-border pt-5">
              <h2 className="text-2xl leading-tight">There is no residence or note at this route.</h2>
              <p className="mt-5 text-sm leading-relaxed text-text">Return to Living Discovery or browse the current prototype inventory.</p>
              <div className="mt-7 flex flex-wrap gap-5">
                <Link to="/" className="text-sm border-b border-text-bright pb-1 hover:text-accent hover:border-accent">Home →</Link>
                <Link to="/discover" className="text-sm border-b border-text-bright pb-1 hover:text-accent hover:border-accent">Discover →</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
