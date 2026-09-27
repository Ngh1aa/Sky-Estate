import { Link } from 'react-router-dom';

const groups = [
  {
    title: 'Explore',
    links: [
      ['/discover', 'Discover'],
      ['/collections', 'Ways of Living'],
      ['/shortlist', 'Shortlist'],
    ],
  },
  {
    title: 'Read',
    links: [
      ['/journal', 'Field Notes'],
      ['/about', 'About the Method'],
    ],
  },
  {
    title: 'Continue',
    links: [
      ['/consult', 'Start a conversation'],
    ],
  },
] as const;

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface" role="contentinfo">
      <div className="container-main py-14 md:py-20">
        <div className="page-grid gap-y-12">
          <div className="col-span-4 md:col-span-8 lg:col-span-5">
            <Link to="/" className="inline-flex flex-col gap-2">
              <span className="text-2xl font-semibold tracking-[-0.05em] text-text-bright">KHOẢNG</span>
              <span className="utility-label">Living Discovery</span>
            </Link>
            <p className="mt-6 max-w-md text-base leading-relaxed text-text">
              A design-led property prototype for discovering residences through the qualities of everyday living — light, quiet, green, water, material and rhythm.
            </p>
            <p className="mt-5 text-xs leading-relaxed text-muted max-w-md">
              Prototype inventory and Living Index tags are synthetic design data, not verified brokerage information.
            </p>
          </div>

          {groups.map((group) => (
            <div key={group.title} className="col-span-2 md:col-span-2 lg:col-span-2">
              <p className="utility-label mb-4">{group.title}</p>
              <ul className="space-y-3">
                {group.links.map(([to, label]) => (
                  <li key={to}>
                    <Link to={to} className="text-sm text-text hover:text-accent transition-colors">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-6 border-t border-border flex flex-col sm:flex-row gap-3 justify-between text-xs text-muted">
          <span>© {new Date().getFullYear()} KHOẢNG — portfolio prototype.</span>
          <span>Architectural · Quiet · Tactile</span>
        </div>
      </div>
    </footer>
  );
}
