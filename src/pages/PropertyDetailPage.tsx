import { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { properties } from '../data/properties';
import { Breadcrumb, PropertyCard, Chip, Input, Button, Toast, Lightbox, SectionHeading } from '../components/ui';

export default function PropertyDetailPage() {
  const { id } = useParams<{ id: string }>();
  const property = properties.find((p) => p.id === id);

  const [currentImage, setCurrentImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', date: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error'; visible: boolean }>({
    message: '', type: 'success', visible: false,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleLightboxPrev = useCallback(() => {
    if (!property) return;
    setCurrentImage((prev) => (prev - 1 + property.images.length) % property.images.length);
  }, [property]);

  const handleLightboxNext = useCallback(() => {
    if (!property) return;
    setCurrentImage((prev) => (prev + 1) % property.images.length);
  }, [property]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowLeft') handleLightboxPrev();
      if (e.key === 'ArrowRight') handleLightboxNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, handleLightboxPrev, handleLightboxNext]);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-white mb-4">Không tìm thấy bất động sản</h1>
          <p className="text-muted mb-6">Bất động sản bạn tìm kiếm không tồn tại hoặc đã được gỡ bỏ.</p>
          <Link
            to="/listings"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent to-accent-light text-white font-semibold"
          >
            Quay lại danh sách
          </Link>
        </div>
      </div>
    );
  }

  const relatedProperties = properties
    .filter((p) => p.type === property.type && p.id !== property.id)
    .slice(0, 3);

  const validateForm = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Vui lòng nhập họ tên';
    if (!formData.phone.trim()) errs.phone = 'Vui lòng nhập số điện thoại';
    else if (!/^(0|\+84)\d{9,10}$/.test(formData.phone.replace(/\s/g, ''))) errs.phone = 'Số điện thoại không hợp lệ';
    if (!formData.email.trim()) errs.email = 'Vui lòng nhập email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Email không hợp lệ';
    if (!formData.date) errs.date = 'Vui lòng chọn ngày';
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validateForm();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setFormData({ name: '', phone: '', email: '', date: '' });
    setToast({ message: 'Đặt lịch xem nhà thành công! Chúng tôi sẽ liên hệ bạn sớm.', type: 'success', visible: true });
    setTimeout(() => setToast((t) => ({ ...t, visible: false })), 4000);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price) + ' VNĐ';
  };

  return (
    <>
      <Helmet>
        <title>{property.title} | Sky Estate — Aether Lane</title>
        <meta name="description" content={property.shortDescription} />
      </Helmet>

      <main className="pt-24 pb-16 min-h-screen" id="main-content">
        <div className="container-main">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <Breadcrumb
              items={[
                { label: 'Trang chủ', to: '/' },
                { label: 'Bất động sản', to: '/listings' },
                { label: property.title },
              ]}
            />
          </motion.div>

          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-4">
              {/* Main image */}
              <div
                className="relative aspect-[16/10] rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setLightboxOpen(true)}
              >
                <img
                  src={property.images[currentImage]}
                  alt={`${property.title} — ảnh ${currentImage + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 rounded-full p-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M15 3h6v6M14 10l6.1-6.1M9 21H3v-6M10 14l-6.1 6.1" />
                    </svg>
                  </div>
                </div>
                <Chip variant="accent" className="absolute top-4 left-4">{property.type}</Chip>
              </div>

              {/* Thumbnail strip */}
              <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto">
                {property.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`flex-shrink-0 w-20 h-20 lg:w-full lg:h-[72px] rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      currentImage === i ? 'border-accent ring-2 ring-accent/30' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                    aria-label={`Xem ảnh ${i + 1}`}
                  >
                    <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10">
            {/* Left: Property info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-text-white mb-2">{property.title}</h1>
                  <p className="text-md text-muted flex items-center gap-1.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                    {property.location}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-xl md:text-2xl font-bold gradient-text">{property.priceLabel}</div>
                  <div className="text-xs text-muted">{formatPrice(property.price)}</div>
                </div>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-4 gap-4 mb-8 p-5 rounded-xl bg-surface/20 border border-border">
                {[
                  { icon: 'M3 7v11a2 2 0 002 2h14a2 2 0 002-2V7M21 7H3l2-4h14l2 4z', label: 'Phòng ngủ', value: `${property.beds} phòng` },
                  { icon: 'M9 6l.463-.536a1.5 1.5 0 012.374 0L12 6M3 13h18v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3zM6 20v2M18 20v2', label: 'Phòng tắm', value: `${property.baths} phòng` },
                  { icon: 'M4 4h16v16H4zM4 12h16M12 4v16', label: 'Diện tích', value: `${property.sqm}m²` },
                  { icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', label: 'Năm', value: `${property.year}` },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto mb-2 text-accent-light">
                      <path d={stat.icon} />
                    </svg>
                    <div className="text-sm font-semibold text-text-white">{stat.value}</div>
                    <div className="text-xs text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-text-white mb-4">Mô tả chi tiết</h2>
                <p className="text-base text-text leading-relaxed">{property.description}</p>
              </div>

              {/* Amenities */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-text-white mb-4">Tiện ích nổi bật</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-surface/15 border border-border">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-success flex-shrink-0">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" />
                      </svg>
                      <span className="text-sm text-text-bright">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-text-white mb-4">Vị trí</h2>
                <div className="aspect-[16/9] rounded-xl bg-surface/20 border border-border flex items-center justify-center">
                  <div className="text-center text-muted">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mx-auto mb-3 opacity-50">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                    <p className="text-sm font-medium">{property.location}</p>
                    <p className="text-xs mt-1">Bản đồ sẽ được tích hợp khi kết nối API</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Booking form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="sticky top-28 p-6 rounded-xl bg-surface/20 border border-border">
                <h3 className="text-lg font-bold text-text-white mb-1">Đặt lịch xem nhà</h3>
                <p className="text-sm text-muted mb-6">Điền thông tin để chuyên gia Aether Lane liên hệ tư vấn.</p>

                <form onSubmit={handleSubmit} className="space-y-4" id="booking-form">
                  <Input
                    label="Họ và tên"
                    placeholder="Nguyễn Văn A"
                    value={formData.name}
                    onChange={(e) => { setFormData({ ...formData, name: e.target.value }); setErrors((p) => ({ ...p, name: '' })); }}
                    error={errors.name}
                    id="booking-name"
                  />
                  <Input
                    label="Số điện thoại"
                    type="tel"
                    placeholder="0912 345 678"
                    value={formData.phone}
                    onChange={(e) => { setFormData({ ...formData, phone: e.target.value }); setErrors((p) => ({ ...p, phone: '' })); }}
                    error={errors.phone}
                    id="booking-phone"
                  />
                  <Input
                    label="Email"
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => { setFormData({ ...formData, email: e.target.value }); setErrors((p) => ({ ...p, email: '' })); }}
                    error={errors.email}
                    id="booking-email"
                  />
                  <Input
                    label="Ngày mong muốn"
                    type="date"
                    value={formData.date}
                    onChange={(e) => { setFormData({ ...formData, date: e.target.value }); setErrors((p) => ({ ...p, date: '' })); }}
                    error={errors.date}
                    id="booking-date"
                  />
                  <Button type="submit" className="w-full" size="lg" isLoading={isSubmitting}>
                    {isSubmitting ? 'Đang gửi...' : 'Đặt lịch xem nhà'}
                  </Button>
                </form>

                <p className="text-xs text-muted mt-4 text-center">
                  Hoặc gọi ngay: <a href="tel:1900238437" className="text-accent-light hover:underline">1900 AETHER</a>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Related properties */}
          {relatedProperties.length > 0 && (
            <section className="mt-20" id="related-properties">
              <SectionHeading
                title="Bất động sản liên quan"
                subtitle={`Các ${property.type} khác có thể phù hợp với bạn`}
                align="left"
                className="mb-8"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProperties.map((p, i) => (
                  <PropertyCard
                    key={p.id}
                    id={p.id}
                    title={p.title}
                    type={p.type}
                    priceLabel={p.priceLabel}
                    location={p.location}
                    beds={p.beds}
                    baths={p.baths}
                    sqm={p.sqm}
                    image={p.images[0]}
                    index={i}
                  />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            images={property.images}
            currentIndex={currentImage}
            isOpen={lightboxOpen}
            onClose={() => setLightboxOpen(false)}
            onPrev={handleLightboxPrev}
            onNext={handleLightboxNext}
          />
        )}
      </AnimatePresence>

      {/* Toast */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.visible}
        onClose={() => setToast((t) => ({ ...t, visible: false }))}
      />
    </>
  );
}
