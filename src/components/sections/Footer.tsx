import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const footerLinks = {
  company: [
    { to: '/about', label: 'Về chúng tôi' },
    { to: '/about', label: 'Đội ngũ' },
    { to: '/contact', label: 'Tuyển dụng' },
    { to: '/contact', label: 'Liên hệ' },
  ],
  listings: [
    { to: '/listings', label: 'Biệt thự' },
    { to: '/listings', label: 'Penthouse' },
    { to: '/listings', label: 'Căn hộ' },
    { to: '/listings', label: 'Duplex' },
  ],
  support: [
    { to: '/contact', label: 'Câu hỏi thường gặp' },
    { to: '/contact', label: 'Chính sách bảo mật' },
    { to: '/contact', label: 'Điều khoản sử dụng' },
    { to: '/contact', label: 'Hỗ trợ khách hàng' },
  ],
};

const socialLinks = [
  { label: 'Facebook', href: '#', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
  { label: 'Instagram', href: '#', icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01' },
  { label: 'LinkedIn', href: '#', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-bg-deep border-t border-border" role="contentinfo">
      <div className="container-main py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent to-accent-light flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-md font-bold text-text-white tracking-tight leading-none">Sky Estate</span>
                <span className="text-[10px] text-muted tracking-[0.2em] uppercase">Aether Lane</span>
              </div>
            </Link>
            <p className="text-sm text-muted mb-6 max-w-sm leading-relaxed">
              Nền tảng bất động sản cao cấp hàng đầu Việt Nam. Chúng tôi kết nối bạn với những không gian sống đẳng cấp, 
              nơi mỗi chi tiết đều là một tác phẩm nghệ thuật.
            </p>

            {/* Newsletter */}
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email của bạn"
                className="flex-1 px-4 py-2.5 bg-glass border border-border rounded-xl text-sm text-text-bright placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label="Email đăng ký nhận tin"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-gradient-to-r from-accent to-accent-light text-white text-sm font-semibold rounded-xl hover:shadow-glow transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                {subscribed ? '✓' : 'Đăng ký'}
              </button>
            </form>
          </div>

          {/* Link columns */}
          <div>
            <h3 className="text-sm font-semibold text-text-white mb-4 uppercase tracking-wider">Công ty</h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <Link to={link.to} className="text-sm text-muted hover:text-accent-light transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-white mb-4 uppercase tracking-wider">Bất động sản</h3>
            <ul className="space-y-2.5">
              {footerLinks.listings.map((link, i) => (
                <li key={i}>
                  <Link to={link.to} className="text-sm text-muted hover:text-accent-light transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-white mb-4 uppercase tracking-wider">Hỗ trợ</h3>
            <ul className="space-y-2.5">
              {footerLinks.support.map((link, i) => (
                <li key={i}>
                  <Link to={link.to} className="text-sm text-muted hover:text-accent-light transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Sky Estate — Aether Lane. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-muted hover:text-accent-light hover:border-accent/30 transition-colors"
                aria-label={social.label}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={social.icon} />
                  {social.label === 'Instagram' && <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />}
                </svg>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
