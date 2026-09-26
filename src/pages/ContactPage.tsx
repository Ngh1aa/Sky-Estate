import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { faqs } from '../data/properties';
import { Input, Textarea, Button, Toast, AccordionItem, SectionHeading } from '../components/ui';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error'; visible: boolean }>({
    message: '', type: 'success', visible: false,
  });
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Vui lòng nhập họ tên';
    if (!formData.email.trim()) errs.email = 'Vui lòng nhập email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Email không hợp lệ';
    if (!formData.phone.trim()) errs.phone = 'Vui lòng nhập số điện thoại';
    else if (!/^(0|\+84)\d{9,10}$/.test(formData.phone.replace(/\s/g, ''))) errs.phone = 'Số điện thoại không hợp lệ';
    if (!formData.message.trim()) errs.message = 'Vui lòng nhập nội dung';
    return errs;
  };

  const handleChange = (field: string, value: string) => {
    setFormData((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus('loading');
    await new Promise((r) => setTimeout(r, 2000));
    setStatus('success');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setToast({ message: 'Gửi thành công! Chúng tôi sẽ phản hồi trong vòng 24 giờ.', type: 'success', visible: true });
    setTimeout(() => {
      setToast((t) => ({ ...t, visible: false }));
      setStatus('idle');
    }, 4000);
  };

  const officeInfo = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
        </svg>
      ),
      label: 'Văn phòng chính',
      value: 'Tầng 28, Landmark 81, 772 Điện Biên Phủ, Bình Thạnh, TP. Hồ Chí Minh',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
        </svg>
      ),
      label: 'Giờ làm việc',
      value: 'Thứ 2 — Thứ 7: 8:30 — 18:00\nChủ nhật: Theo lịch hẹn',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
      ),
      label: 'Hotline',
      value: '1900 AETHER (1900 238 437)',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="m22 6-10 7L2 6" />
        </svg>
      ),
      label: 'Email',
      value: 'hello@aetherlane.vn',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Liên hệ — Sky Estate | Aether Lane</title>
        <meta name="description" content="Liên hệ với Aether Lane để được tư vấn bất động sản cao cấp. Hotline: 1900 AETHER. Văn phòng: Landmark 81, TP. Hồ Chí Minh." />
      </Helmet>

      <main className="pt-20 pb-16 min-h-screen" id="main-content">
        {/* Hero */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 cosmic-bg" />
          <div className="container-main relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <h1 className="text-3xl md:text-[3rem] font-bold mb-4">
                <span className="gradient-text">Liên hệ</span> với chúng tôi
              </h1>
              <p className="text-md text-muted leading-relaxed">
                Đội ngũ Aether Lane sẵn sàng lắng nghe và đồng hành cùng bạn. 
                Hãy để lại thông tin, chúng tôi sẽ phản hồi trong vòng 24 giờ.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact form + Office info */}
        <section className="py-16">
          <div className="container-main">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-xl font-bold text-text-white mb-6">Gửi tin nhắn cho chúng tôi</h2>
                <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Input
                      label="Họ và tên"
                      placeholder="Nguyễn Văn A"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      error={errors.name}
                      id="contact-name"
                    />
                    <Input
                      label="Số điện thoại"
                      type="tel"
                      placeholder="0912 345 678"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      error={errors.phone}
                      id="contact-phone"
                    />
                  </div>
                  <Input
                    label="Email"
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    error={errors.email}
                    id="contact-email"
                  />
                  <Textarea
                    label="Nội dung"
                    placeholder="Cho chúng tôi biết bạn đang tìm kiếm bất động sản như thế nào, ngân sách và khu vực mong muốn..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    error={errors.message}
                    id="contact-message"
                  />
                  <Button type="submit" size="lg" isLoading={status === 'loading'} className="w-full sm:w-auto">
                    {status === 'loading' ? 'Đang gửi...' : status === 'success' ? '✓ Đã gửi' : 'Gửi tin nhắn'}
                  </Button>
                </form>
              </motion.div>

              {/* Office info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-xl font-bold text-text-white mb-6">Thông tin văn phòng</h2>
                <div className="space-y-6">
                  {officeInfo.map((info, i) => (
                    <div key={i} className="flex gap-4 p-5 rounded-xl bg-surface/20 border border-border">
                      <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center text-accent-light flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-xs text-muted font-medium uppercase tracking-wider mb-1">{info.label}</div>
                        <div className="text-sm text-text-bright whitespace-pre-line">{info.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map placeholder */}
                <div className="mt-6 aspect-video rounded-xl bg-surface/20 border border-border flex items-center justify-center overflow-hidden">
                  <div className="text-center text-muted">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mx-auto mb-2 opacity-50">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                    <p className="text-sm font-medium">Landmark 81, Bình Thạnh</p>
                    <p className="text-xs mt-1">Bản đồ sẽ được tích hợp khi kết nối API</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 cosmic-bg" id="faq">
          <div className="container-main">
            <SectionHeading
              badge="FAQ"
              title="Câu hỏi thường gặp"
              subtitle="Giải đáp những thắc mắc phổ biến nhất về dịch vụ và quy trình của Aether Lane."
              className="mb-12"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto bg-surface/15 border border-border rounded-xl px-6"
            >
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFAQ === faq.id}
                  onToggle={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                />
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.visible}
        onClose={() => setToast((t) => ({ ...t, visible: false }))}
      />
    </>
  );
}
