import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function NotFoundPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>404 — Trang không tìm thấy | Sky Estate</title>
        <meta name="description" content="Trang bạn tìm kiếm không tồn tại." />
      </Helmet>

      <main className="min-h-screen flex items-center justify-center cosmic-bg" id="main-content">
        <div className="container-main text-center py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-[8rem] md:text-[12rem] font-bold gradient-text leading-none mb-4 select-none">
              404
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-2xl md:text-3xl font-bold text-text-white mb-4">
              Có vẻ như căn nhà này đã được bán…
            </h1>
            <p className="text-md text-muted max-w-md mx-auto mb-8">
              Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển. 
              Hãy quay về trang chủ để khám phá thêm bất động sản đẳng cấp.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-accent to-accent-light text-white font-semibold hover:shadow-glow hover:scale-[1.02] transition-all duration-300"
              id="404-home-button"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path d="M9 22V12h6v10" />
              </svg>
              Về trang chủ
            </Link>
            <Link
              to="/listings"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-border-light text-text-bright font-semibold hover:border-accent hover:bg-glass transition-all duration-300"
              id="404-listings-button"
            >
              Xem bất động sản
            </Link>
          </motion.div>
        </div>
      </main>
    </>
  );
}
