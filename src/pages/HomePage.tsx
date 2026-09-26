import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { PropertyCard, SectionHeading } from '../components/ui';
import { properties, testimonials } from '../data/properties';
import { useInView, useAnimatedCounter, useReducedMotion } from '../hooks';

/* ===== HERO MATCHING SKY-ESTATE__IMAGE.WEBP ===== */
function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const [previewOpen, setPreviewOpen] = useState(false);

  // Parallax layers for 3D depth
  const bgY = useTransform(scrollY, [0, 800], [0, 120]);
  const textY = useTransform(scrollY, [0, 800], [0, 60]);

  return (
    <section 
      ref={heroRef} 
      className="relative w-full h-screen min-h-[700px] max-h-[1080px] flex flex-col justify-between overflow-hidden bg-[#120726]" 
      id="hero"
    >
      {/* LAYER 1: Breathtaking Twilight Mountain & Cloud Sky Background */}
      <motion.div
        style={reducedMotion ? {} : { y: bgY }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <img
          src="/galaxy-home-bg.jpg"
          alt="Galaxy Home atop mountain pinnacle amidst violet sunset clouds"
          className="w-full h-full object-cover object-center select-none"
          loading="eager"
        />
        {/* Soft atmospheric gradient transitions */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#120726] via-[#120726]/10 to-black/20" />
      </motion.div>

      {/* LAYER 2: Massive Typography "Galaxy Home" matching sky-estate__image.webp */}
      <motion.div
        style={reducedMotion ? {} : { y: textY }}
        className="relative z-10 w-full max-w-[1580px] mx-auto px-6 sm:px-10 md:px-14 lg:px-18 pt-[13vh] sm:pt-[15vh] lg:pt-[17vh] pointer-events-none select-none"
      >
        <div className="grid grid-cols-2 items-start justify-between w-full">
          {/* Left Column: GALAXY + Sub-tagline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start pr-2 sm:pr-6"
          >
            <h1 className="text-white font-['Outfit',sans-serif] font-bold tracking-[-0.04em] leading-[0.88] text-[14vw] sm:text-[13vw] md:text-[11.5vw] lg:text-[9.5rem] xl:text-[11.2rem] drop-shadow-[0_12px_36px_rgba(0,0,0,0.4)]">
              Galaxy
            </h1>
            <p className="text-white/90 font-['Outfit',sans-serif] font-normal text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl tracking-normal sm:tracking-wide mt-2 sm:mt-4 pl-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
              Elegance Above the Skyline
            </p>
          </motion.div>

          {/* Right Column: HOME + Sub-tagline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-end text-right pl-2 sm:pl-6"
          >
            <h2 className="text-white font-['Outfit',sans-serif] font-bold tracking-[-0.04em] leading-[0.88] text-[14vw] sm:text-[13vw] md:text-[11.5vw] lg:text-[9.5rem] xl:text-[11.2rem] drop-shadow-[0_12px_36px_rgba(0,0,0,0.4)]">
              Home
            </h2>
            <p className="text-white/90 font-['Outfit',sans-serif] font-normal text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl tracking-normal sm:tracking-wide mt-2 sm:mt-4 pr-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
              Your Dream Residence Starts Here
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* LAYER 4: Interactive Floating Controls & Bottom Action Bar */}
      <div className="relative z-30 w-full pb-8 sm:pb-10 pt-4 flex flex-col items-center justify-end">
        {/* Floating Explore Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 px-4 mb-4"
        >
          <Link
            to="/listings/galaxy-home-pinnacle"
            className="group flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white/[0.12] hover:bg-white/25 backdrop-blur-xl border border-white/25 text-white text-sm font-medium transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:scale-105"
            id="hero-explore-pinnacle"
          >
            <span className="w-2 h-2 rounded-full bg-amber-300 animate-ping" />
            <span>Galaxy Home • 150 tỷ</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-x-1">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>

          <Link
            to="/listings"
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-[#2a174f] text-sm font-semibold hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg"
            id="hero-view-all-estates"
          >
            <span>Khám phá 13 dinh thự</span>
          </Link>

          <button
            onClick={() => setPreviewOpen(true)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.08] hover:bg-white/15 backdrop-blur-md border border-white/20 text-white/90 hover:text-white text-sm font-medium transition-all cursor-pointer"
            id="hero-quick-overview"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            <span>Virtual Tour 360°</span>
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1.5 text-white/60 hover:text-white/90 transition-colors"
        >
          <span className="text-[11px] uppercase tracking-[0.2em] font-light">Cuộn để khám phá</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 10l5 5 5-5" />
          </svg>
        </motion.div>
      </div>

      {/* Virtual Tour / Fast Preview Modal */}
      <AnimatePresence>
        {previewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
            onClick={() => setPreviewOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#1b0c36] border border-white/20 rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8"
            >
              <button
                onClick={() => setPreviewOpen(false)}
                className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Đóng"
              >
                ✕
              </button>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="rounded-xl overflow-hidden aspect-[4/3] border border-white/15">
                  <img 
                    src="/sky-estate__image.webp" 
                    alt="Galaxy Home Original Concept" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold mb-3 border border-purple-500/30">
                    Flagship Estate • Đỉnh non cao
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-['Outfit']">
                    Galaxy Home
                  </h3>
                  <p className="text-amber-300 text-xl font-semibold mb-4">
                    150.000.000.000 VNĐ
                  </p>
                  <p className="text-white/80 text-sm mb-6 leading-relaxed">
                    Được xây dựng trên chóp đá tự nhiên vươn trên biển mây tím hoàng hôn. Trang bị kính tràn 360 độ, đường bậc thang đá thắp sáng đèn ấm nghệ thuật, hồ bơi vô cực và bãi đỗ trực thăng độc bản.
                  </p>
                  <div className="flex gap-4">
                    <Link
                      to="/listings/galaxy-home-pinnacle"
                      className="px-6 py-3 rounded-full bg-white text-[#2a174f] font-semibold text-sm hover:bg-white/90 transition-all"
                    >
                      Xem chi tiết đầy đủ
                    </Link>
                    <Link
                      to="/contact"
                      className="px-6 py-3 rounded-full border border-white/25 text-white font-medium text-sm hover:bg-white/10 transition-all"
                    >
                      Đặt lịch tham quan
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ===== SOCIAL PROOF ===== */
function SocialProof() {
  const { ref, isInView } = useInView(0.3);
  const stats = [
    { end: 500, suffix: '+', label: 'Bất động sản đã giao dịch' },
    { end: 2500, suffix: '+', label: 'Khách hàng tin tưởng' },
    { end: 15, suffix: '', label: 'Thành phố phủ sóng' },
    { end: 12, suffix: '', label: 'Năm kinh nghiệm' },
  ];

  return (
    <section ref={ref} className="py-16 border-y border-border" id="social-proof">
      <div className="container-main">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <StatItem key={i} {...stat} isInView={isInView} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ end, suffix, label, isInView, delay }: { end: number; suffix: string; label: string; isInView: boolean; delay: number }) {
  const count = useAnimatedCounter(end, 2000, isInView);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="text-2xl md:text-3xl font-bold gradient-text">
        {count}{suffix}
      </div>
      <div className="text-sm text-muted mt-1">{label}</div>
    </motion.div>
  );
}

/* ===== FEATURED LISTINGS ===== */
function FeaturedListings() {
  const featured = properties.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="py-24" id="featured-listings">
      <div className="container-main">
        <SectionHeading
          badge="Nổi bật"
          title="Bất động sản được chọn lọc"
          subtitle="Những tài sản đặc biệt được đội ngũ chuyên gia Aether Lane tuyển chọn kỹ lưỡng, đáp ứng tiêu chuẩn khắt khe nhất."
          className="mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((prop, i) => (
            <PropertyCard
              key={prop.id}
              id={prop.id}
              title={prop.title}
              type={prop.type}
              priceLabel={prop.priceLabel}
              location={prop.location}
              beds={prop.beds}
              baths={prop.baths}
              sqm={prop.sqm}
              image={prop.images[0]}
              index={i}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <Link
            to="/listings"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border-light text-text-bright font-semibold hover:border-accent hover:bg-glass transition-all duration-300"
            id="view-all-listings"
          >
            Xem tất cả bất động sản
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ===== WHY AETHER LANE ===== */
function WhyAetherLane() {
  const values = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: 'Uy tín tuyệt đối',
      description: 'Hơn 12 năm xây dựng niềm tin với khách hàng cao cấp, mỗi giao dịch đều minh bạch và được bảo vệ pháp lý toàn diện.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
          <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
        </svg>
      ),
      title: 'Bộ sưu tập độc quyền',
      description: 'Tiếp cận danh mục bất động sản exclusive chưa từng được công bố trên thị trường, từ penthouse đỉnh tháp đến villa ven biển.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
      ),
      title: 'Đội ngũ chuyên gia',
      description: 'Mỗi chuyên viên tư vấn đều có hơn 10 năm kinh nghiệm, am hiểu thị trường sâu sắc và cam kết đồng hành cùng bạn.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      title: 'Dịch vụ toàn diện',
      description: 'Từ tìm kiếm, tư vấn tài chính, pháp lý đến thiết kế nội thất — tất cả trong một hệ sinh thái dịch vụ khép kín.',
    },
  ];

  return (
    <section className="py-24 cosmic-bg" id="why-aether-lane">
      <div className="container-main">
        <SectionHeading
          badge="Tại sao chọn chúng tôi"
          title="Đẳng cấp trong từng chi tiết"
          subtitle="Aether Lane không đơn thuần là nền tảng bất động sản — đây là trải nghiệm được thiết kế riêng cho những người đề cao phong cách sống."
          className="mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-xl bg-surface/20 border border-border hover:border-accent/30 hover:bg-surface/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/15 flex items-center justify-center text-accent-light mb-5 group-hover:bg-accent/25 transition-colors">
                {value.icon}
              </div>
              <h3 className="text-lg font-bold text-text-white mb-2">{value.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== TESTIMONIALS ===== */
function Testimonials() {
  return (
    <section className="py-24" id="testimonials">
      <div className="container-main">
        <SectionHeading
          badge="Khách hàng nói gì"
          title="Niềm tin từ những người thành đạt"
          subtitle="Những đánh giá chân thực từ khách hàng đã tin tưởng và đồng hành cùng Aether Lane."
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-surface/20 border border-border hover:border-accent/20 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-warning">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-base text-text leading-relaxed mb-6">"{t.content}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  loading="lazy"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-semibold text-text-white">{t.name}</div>
                  <div className="text-xs text-muted">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== CTA BAND ===== */
function CTABand() {
  return (
    <section className="py-20" id="cta-band">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent-light to-accent opacity-90" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(255,255,255,0.15),transparent)]" />
          
          <div className="relative z-10 px-8 md:px-16 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Sẵn sàng tìm ngôi nhà trong mơ?
              </h2>
              <p className="text-md text-white/80">
                Đặt lịch tư vấn miễn phí với chuyên gia Aether Lane ngay hôm nay. 
                Chúng tôi sẽ đồng hành cùng bạn trong hành trình tìm kiếm không gian sống hoàn hảo.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-accent font-bold text-md hover:bg-white/90 hover:scale-[1.02] transition-all duration-300 whitespace-nowrap"
              id="cta-band-button"
            >
              Đặt lịch tư vấn miễn phí
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ===== HOME PAGE ===== */
export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Sky Estate — Aether Lane | Galaxy Home</title>
        <meta name="description" content="Aether Lane — Galaxy Home: Elegance Above the Skyline. Nền tảng bất động sản cao cấp hàng đầu Việt Nam." />
      </Helmet>
      <Hero />
      <SocialProof />
      <FeaturedListings />
      <WhyAetherLane />
      <Testimonials />
      <CTABand />
    </>
  );
}
