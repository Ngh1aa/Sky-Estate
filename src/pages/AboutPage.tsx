import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { teamMembers } from '../data/properties';
import { SectionHeading } from '../components/ui';
import { useInView, useAnimatedCounter } from '../hooks';

function StorySection() {
  return (
    <section className="py-24" id="story">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              badge="Câu chuyện của chúng tôi"
              title="Hành trình kiến tạo không gian sống đẳng cấp"
              align="left"
              className="mb-6"
            />
            <div className="space-y-4 text-base text-text leading-relaxed">
              <p>
                Ra đời vào năm 2014, Aether Lane khởi đầu từ một ý tưởng đơn giản nhưng đầy tham vọng: 
                mang đến cho thị trường Việt Nam một nền tảng bất động sản cao cấp đúng nghĩa — nơi mỗi căn nhà 
                không chỉ là nơi ở, mà là một tuyên ngôn về phong cách sống.
              </p>
              <p>
                Được sáng lập bởi Nguyễn Minh Khoa — người từng dành hơn 15 năm tại CBRE Vietnam và Savills — 
                Aether Lane nhanh chóng trở thành cầu nối giữa những chủ đầu tư uy tín nhất và các khách hàng 
                có yêu cầu khắt khe về chất lượng sống. Từ penthouse đỉnh tháp Landmark 81 đến villa ven biển 
                Hồ Tràm, chúng tôi tự hào đã kiến tạo hàng trăm mái ấm cho những gia đình thành đạt.
              </p>
              <p>
                Thương hiệu "Sky Estate" và triết lý "Aether Lane" — con đường dẫn đến tầng trời — phản ánh 
                cam kết của chúng tôi: không ngừng nâng cao tiêu chuẩn, mang đến trải nghiệm bất động sản 
                vượt xa kỳ vọng của khách hàng.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="Không gian nội thất cao cấp — đại diện cho triết lý thiết kế của Aether Lane"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 p-6 rounded-xl glass-strong max-w-[240px]">
              <div className="text-2xl font-bold gradient-text mb-1">12+</div>
              <div className="text-sm text-text-bright">Năm kinh nghiệm trong lĩnh vực bất động sản cao cấp</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="py-24 cosmic-bg" id="team">
      <div className="container-main">
        <SectionHeading
          badge="Đội ngũ"
          title="Những người dẫn đường"
          subtitle="Mỗi thành viên Aether Lane đều mang trong mình đam mê và chuyên môn sâu sắc về bất động sản cao cấp."
          className="mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group text-center p-6 rounded-xl bg-surface/20 border border-border hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-border group-hover:border-accent transition-colors">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-md font-bold text-text-white">{member.name}</h3>
              <p className="text-xs text-accent-light font-medium mb-3">{member.role}</p>
              <p className="text-xs text-muted leading-relaxed">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoreValues() {
  const values = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
        </svg>
      ),
      title: 'Tận tâm',
      description: 'Mỗi khách hàng là một câu chuyện riêng. Chúng tôi lắng nghe, thấu hiểu và đồng hành cho đến khi bạn tìm được ngôi nhà hoàn hảo.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
        </svg>
      ),
      title: 'Minh bạch',
      description: 'Mọi thông tin đều rõ ràng, mọi giao dịch đều minh bạch. Không có chi phí ẩn, không có cam kết mơ hồ.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      title: 'Đổi mới',
      description: 'Luôn tiên phong ứng dụng công nghệ và xu hướng mới nhất để mang đến trải nghiệm bất động sản vượt trội.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      title: 'Xuất sắc',
      description: 'Không chấp nhận sự tầm thường. Từ tuyển chọn bất động sản đến dịch vụ khách hàng, mọi thứ đều phải ở đẳng cấp cao nhất.',
    },
  ];

  return (
    <section className="py-24" id="core-values">
      <div className="container-main">
        <SectionHeading
          badge="Giá trị cốt lõi"
          title="Nền tảng cho mọi quyết định"
          subtitle="Bốn giá trị cốt lõi định hình văn hóa và phong cách phục vụ của Aether Lane."
          className="mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-8 rounded-xl bg-surface/20 border border-border hover:border-accent/30 transition-all duration-300 text-center group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-accent/15 flex items-center justify-center text-accent-light group-hover:bg-accent/25 transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-text-white mb-2">{value.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  const { ref, isInView } = useInView(0.3);
  
  const stats = [
    { end: 500, suffix: '+', label: 'Giao dịch thành công' },
    { end: 98, suffix: '%', label: 'Khách hàng hài lòng' },
    { end: 15, suffix: '', label: 'Thành phố phủ sóng' },
    { end: 35, suffix: 'K tỷ', label: 'Tổng giá trị giao dịch' },
  ];

  return (
    <section ref={ref} className="py-20 cosmic-bg" id="achievements">
      <div className="container-main">
        <SectionHeading
          badge="Thành tựu"
          title="Con số biết nói"
          className="mb-12"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const count = useAnimatedCounter(stat.end, 2000, isInView);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6 rounded-xl bg-surface/15 border border-border"
              >
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                  {count}{stat.suffix}
                </div>
                <div className="text-sm text-muted">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Về Aether Lane — Câu chuyện thương hiệu | Sky Estate</title>
        <meta name="description" content="Tìm hiểu câu chuyện thương hiệu Aether Lane, đội ngũ chuyên gia và giá trị cốt lõi. Hơn 12 năm kinh nghiệm trong bất động sản cao cấp Việt Nam." />
      </Helmet>

      <main className="pt-20 min-h-screen" id="main-content">
        {/* Hero banner */}
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
                Về <span className="gradient-text">Aether Lane</span>
              </h1>
              <p className="text-md text-muted leading-relaxed">
                Chúng tôi tin rằng một ngôi nhà không chỉ là bốn bức tường — đó là nơi những giấc mơ được nuôi dưỡng, 
                nơi những ký ức đẹp được kiến tạo, và nơi phong cách sống được định nghĩa.
              </p>
            </motion.div>
          </div>
        </section>

        <StorySection />
        <TeamSection />
        <CoreValues />
        <Achievements />
      </main>
    </>
  );
}
