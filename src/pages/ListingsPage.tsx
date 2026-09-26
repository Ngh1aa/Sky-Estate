import { useState, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { properties } from '../data/properties';
import type { PropertyType } from '../data/properties';
import { PropertyCard, SectionHeading } from '../components/ui';
import { useDebounce } from '../hooks';

type SortOption = 'default' | 'price-asc' | 'price-desc' | 'area-asc' | 'area-desc';

export default function ListingsPage() {
  const [typeFilter, setTypeFilter] = useState<PropertyType | 'all'>('all');
  const [cityFilter, setCityFilter] = useState<string>('all');
  const [bedsFilter, setBedsFilter] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000000000]);
  const [sortBy, setSortBy] = useState<SortOption>('default');
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearch = useDebounce(searchQuery, 300);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cities = useMemo(() => {
    const unique = [...new Set(properties.map(p => p.city))];
    return unique.sort();
  }, []);

  const filtered = useMemo(() => {
    let result = [...properties];

    if (typeFilter !== 'all') {
      result = result.filter(p => p.type === typeFilter);
    }
    if (cityFilter !== 'all') {
      result = result.filter(p => p.city === cityFilter);
    }
    if (bedsFilter !== 'all') {
      const beds = parseInt(bedsFilter);
      if (beds === 5) {
        result = result.filter(p => p.beds >= 5);
      } else {
        result = result.filter(p => p.beds === beds);
      }
    }
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (debouncedSearch) {
      const q = debouncedSearch.toLowerCase();
      result = result.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );
    }

    switch (sortBy) {
      case 'price-asc': result.sort((a, b) => a.price - b.price); break;
      case 'price-desc': result.sort((a, b) => b.price - a.price); break;
      case 'area-asc': result.sort((a, b) => a.sqm - b.sqm); break;
      case 'area-desc': result.sort((a, b) => b.sqm - a.sqm); break;
    }

    return result;
  }, [typeFilter, cityFilter, bedsFilter, priceRange, sortBy, debouncedSearch]);

  const priceLabels: Record<string, [number, number]> = {
    'all': [0, 100000000000],
    'under20': [0, 20000000000],
    '20to40': [20000000000, 40000000000],
    '40to60': [40000000000, 60000000000],
    'above60': [60000000000, 100000000000],
  };

  const handlePriceChange = (value: string) => {
    setPriceRange(priceLabels[value] || priceLabels.all);
  };

  const clearFilters = () => {
    setTypeFilter('all');
    setCityFilter('all');
    setBedsFilter('all');
    setPriceRange([0, 100000000000]);
    setSortBy('default');
    setSearchQuery('');
  };

  const hasFilters = typeFilter !== 'all' || cityFilter !== 'all' || bedsFilter !== 'all' || 
    priceRange[0] !== 0 || priceRange[1] !== 100000000000 || sortBy !== 'default' || searchQuery !== '';

  return (
    <>
      <Helmet>
        <title>Bất động sản cao cấp | Sky Estate — Aether Lane</title>
        <meta name="description" content="Khám phá bộ sưu tập biệt thự, penthouse, căn hộ và duplex cao cấp tại Aether Lane. Lọc theo loại hình, giá, khu vực." />
      </Helmet>

      <main className="pt-28 pb-16 min-h-screen" id="main-content">
        <div className="container-main">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <SectionHeading
              badge="Danh mục"
              title="Khám phá bất động sản"
              subtitle="Tìm kiếm ngôi nhà trong mơ của bạn từ bộ sưu tập hơn 500 bất động sản cao cấp trên khắp Việt Nam."
              align="left"
            />
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 p-6 rounded-xl bg-surface/20 border border-border"
          >
            {/* Search */}
            <div className="mb-5">
              <div className="relative">
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm kiếm theo tên, địa điểm..."
                  className="w-full pl-12 pr-4 py-3 bg-glass border border-border rounded-xl text-text-bright placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  id="listing-search"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {/* Type filter */}
              <div>
                <label className="text-xs text-muted mb-1.5 block font-medium">Loại hình</label>
                <select
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value as PropertyType | 'all')}
                  className="w-full px-3 py-2.5 bg-glass border border-border rounded-xl text-sm text-text-bright focus:outline-none focus:ring-2 focus:ring-accent appearance-none cursor-pointer"
                  id="filter-type"
                >
                  <option value="all" className="bg-bg">Tất cả</option>
                  <option value="Villa" className="bg-bg">Villa</option>
                  <option value="Penthouse" className="bg-bg">Penthouse</option>
                  <option value="Apartment" className="bg-bg">Apartment</option>
                  <option value="Duplex" className="bg-bg">Duplex</option>
                </select>
              </div>

              {/* City filter */}
              <div>
                <label className="text-xs text-muted mb-1.5 block font-medium">Khu vực</label>
                <select
                  value={cityFilter}
                  onChange={(e) => setCityFilter(e.target.value)}
                  className="w-full px-3 py-2.5 bg-glass border border-border rounded-xl text-sm text-text-bright focus:outline-none focus:ring-2 focus:ring-accent appearance-none cursor-pointer"
                  id="filter-city"
                >
                  <option value="all" className="bg-bg">Tất cả</option>
                  {cities.map(city => (
                    <option key={city} value={city} className="bg-bg">{city}</option>
                  ))}
                </select>
              </div>

              {/* Beds filter */}
              <div>
                <label className="text-xs text-muted mb-1.5 block font-medium">Số phòng ngủ</label>
                <select
                  value={bedsFilter}
                  onChange={(e) => setBedsFilter(e.target.value)}
                  className="w-full px-3 py-2.5 bg-glass border border-border rounded-xl text-sm text-text-bright focus:outline-none focus:ring-2 focus:ring-accent appearance-none cursor-pointer"
                  id="filter-beds"
                >
                  <option value="all" className="bg-bg">Tất cả</option>
                  <option value="2" className="bg-bg">2 phòng</option>
                  <option value="3" className="bg-bg">3 phòng</option>
                  <option value="4" className="bg-bg">4 phòng</option>
                  <option value="5" className="bg-bg">5+ phòng</option>
                </select>
              </div>

              {/* Price filter */}
              <div>
                <label className="text-xs text-muted mb-1.5 block font-medium">Khoảng giá</label>
                <select
                  onChange={(e) => handlePriceChange(e.target.value)}
                  className="w-full px-3 py-2.5 bg-glass border border-border rounded-xl text-sm text-text-bright focus:outline-none focus:ring-2 focus:ring-accent appearance-none cursor-pointer"
                  id="filter-price"
                >
                  <option value="all" className="bg-bg">Tất cả</option>
                  <option value="under20" className="bg-bg">Dưới 20 tỷ</option>
                  <option value="20to40" className="bg-bg">20 — 40 tỷ</option>
                  <option value="40to60" className="bg-bg">40 — 60 tỷ</option>
                  <option value="above60" className="bg-bg">Trên 60 tỷ</option>
                </select>
              </div>

              {/* Sort */}
              <div>
                <label className="text-xs text-muted mb-1.5 block font-medium">Sắp xếp</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="w-full px-3 py-2.5 bg-glass border border-border rounded-xl text-sm text-text-bright focus:outline-none focus:ring-2 focus:ring-accent appearance-none cursor-pointer"
                  id="filter-sort"
                >
                  <option value="default" className="bg-bg">Mặc định</option>
                  <option value="price-asc" className="bg-bg">Giá tăng dần</option>
                  <option value="price-desc" className="bg-bg">Giá giảm dần</option>
                  <option value="area-asc" className="bg-bg">Diện tích tăng</option>
                  <option value="area-desc" className="bg-bg">Diện tích giảm</option>
                </select>
              </div>
            </div>

            {hasFilters && (
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-muted">{filtered.length} kết quả</span>
                <button
                  onClick={clearFilters}
                  className="text-sm text-accent-light hover:text-text-white transition-colors cursor-pointer"
                  id="clear-filters"
                >
                  Xóa bộ lọc
                </button>
              </div>
            )}
          </motion.div>

          {/* Results */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((prop, i) => (
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
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24"
            >
              <div className="w-20 h-20 rounded-full bg-surface/30 flex items-center justify-center mx-auto mb-6">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted">
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /><path d="M8 11h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-white mb-2">Không tìm thấy kết quả</h3>
              <p className="text-muted mb-6">Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm.</p>
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent to-accent-light text-white font-semibold hover:shadow-glow transition-all duration-300 cursor-pointer"
              >
                Xóa tất cả bộ lọc
              </button>
            </motion.div>
          )}
        </div>
      </main>
    </>
  );
}
