import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/* ===== BUTTON ===== */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  isLoading,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-accent-light';
  
  const variants = {
    primary: 'bg-gradient-to-r from-accent to-accent-light text-white hover:shadow-glow hover:scale-[1.02] active:scale-[0.98]',
    ghost: 'bg-transparent text-text hover:bg-glass hover:text-text-bright',
    outline: 'bg-transparent border border-border-light text-text hover:border-accent hover:text-text-bright hover:bg-glass',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-md gap-2.5',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled || isLoading ? 'opacity-50 pointer-events-none' : ''} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      )}
      {children}
    </button>
  );
};

/* ===== LINK BUTTON ===== */
interface LinkButtonProps {
  to: string;
  variant?: 'primary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  to,
  variant = 'primary',
  size = 'md',
  children,
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300';
  
  const variants = {
    primary: 'bg-gradient-to-r from-accent to-accent-light text-white hover:shadow-glow hover:scale-[1.02]',
    ghost: 'bg-transparent text-text hover:bg-glass hover:text-text-bright',
    outline: 'bg-transparent border border-border-light text-text hover:border-accent hover:text-text-bright hover:bg-glass',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-md gap-2.5',
  };

  return (
    <Link to={to} className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </Link>
  );
};

/* ===== CHIP / TAG ===== */
interface ChipProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent';
  className?: string;
}

export const Chip: React.FC<ChipProps> = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-glass text-text border border-border',
    accent: 'bg-accent/20 text-accent-light border border-accent/30',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

/* ===== INPUT ===== */
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, className = '', id, ...props }) => {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-text-bright">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`w-full px-4 py-3 bg-glass border rounded-xl text-text-bright placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 ${
          error ? 'border-error' : 'border-border'
        } ${className}`}
        {...props}
      />
      {error && <span className="text-xs text-error">{error}</span>}
    </div>
  );
};

/* ===== TEXTAREA ===== */
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea: React.FC<TextareaProps> = ({ label, error, className = '', id, ...props }) => {
  const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={textareaId} className="text-sm font-medium text-text-bright">
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        className={`w-full px-4 py-3 bg-glass border rounded-xl text-text-bright placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 resize-y min-h-[120px] ${
          error ? 'border-error' : 'border-border'
        } ${className}`}
        {...props}
      />
      {error && <span className="text-xs text-error">{error}</span>}
    </div>
  );
};

/* ===== SELECT ===== */
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export const Select: React.FC<SelectProps> = ({ label, error, options, className = '', id, ...props }) => {
  const selectId = id || label?.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={selectId} className="text-sm font-medium text-text-bright">
          {label}
        </label>
      )}
      <select
        id={selectId}
        className={`w-full px-4 py-3 bg-glass border rounded-xl text-text-bright focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 appearance-none cursor-pointer ${
          error ? 'border-error' : 'border-border'
        } ${className}`}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-bg text-text-bright">
            {opt.label}
          </option>
        ))}
      </select>
      {error && <span className="text-xs text-error">{error}</span>}
    </div>
  );
};

/* ===== BADGE ===== */
interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, className = '' }) => (
  <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-text-bright ${className}`}>
    {children}
  </span>
);

/* ===== ACCORDION ===== */
interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onToggle }) => (
  <div className="border-b border-border last:border-b-0">
    <button
      className="w-full flex items-center justify-between py-5 px-1 text-left cursor-pointer group"
      onClick={onToggle}
      aria-expanded={isOpen}
    >
      <span className="text-md font-semibold text-text-bright group-hover:text-accent-light transition-colors pr-4">
        {question}
      </span>
      <motion.span
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.2 }}
        className="text-accent-light flex-shrink-0"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.span>
    </button>
    <motion.div
      initial={false}
      animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="overflow-hidden"
    >
      <p className="pb-5 px-1 text-base text-text leading-relaxed">{answer}</p>
    </motion.div>
  </div>
);

/* ===== TOAST ===== */
interface ToastProps {
  message: string;
  type: 'success' | 'error';
  isVisible: boolean;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type, isVisible, onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-6 py-4 rounded-xl shadow-lift ${
      type === 'success' ? 'bg-success/20 border border-success/30 text-success' : 'bg-error/20 border border-error/30 text-error'
    }`}
    role="alert"
  >
    <span className="text-sm font-medium">{message}</span>
    <button onClick={onClose} className="text-current opacity-70 hover:opacity-100 cursor-pointer" aria-label="Đóng thông báo">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </button>
  </motion.div>
);

/* ===== SKELETON ===== */
interface SkeletonProps {
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className = '' }) => (
  <div className={`animate-pulse bg-surface/50 rounded-xl ${className}`} />
);

/* ===== BREADCRUMB ===== */
interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => (
  <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted">
    {items.map((item, index) => (
      <React.Fragment key={index}>
        {index > 0 && <span className="text-border-light">/</span>}
        {item.to ? (
          <Link to={item.to} className="hover:text-accent-light transition-colors">
            {item.label}
          </Link>
        ) : (
          <span className="text-text-bright">{item.label}</span>
        )}
      </React.Fragment>
    ))}
  </nav>
);

/* ===== SECTION HEADING ===== */
interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  className = '',
  align = 'center',
}) => (
  <div className={`${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
    {badge && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Chip variant="accent" className="mb-4">{badge}</Chip>
      </motion.div>
    )}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="text-2xl md:text-3xl font-bold"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`mt-4 text-md text-muted ${align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

/* ===== MODAL / LIGHTBOX ===== */
interface LightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ images, currentIndex, isOpen, onClose, onPrev, onNext }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-bg-deep/95"
      onClick={onClose}
      role="dialog"
      aria-label="Phóng to ảnh"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-text-bright hover:text-accent-light transition-colors z-10 cursor-pointer"
        aria-label="Đóng lightbox"
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M8 8L24 24M24 8L8 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 md:left-8 text-text-bright hover:text-accent-light transition-colors z-10 p-2 cursor-pointer"
        aria-label="Ảnh trước"
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M20 8L12 16L20 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <motion.img
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        src={images[currentIndex]}
        alt={`Ảnh ${currentIndex + 1} / ${images.length}`}
        className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl"
        onClick={(e) => e.stopPropagation()}
      />

      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 md:right-8 text-text-bright hover:text-accent-light transition-colors z-10 p-2 cursor-pointer"
        aria-label="Ảnh tiếp"
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M12 8L20 16L12 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="absolute bottom-6 text-sm text-muted">
        {currentIndex + 1} / {images.length}
      </div>
    </motion.div>
  );
};

/* ===== PROPERTY CARD ===== */
interface PropertyCardProps {
  id: string;
  title: string;
  type: string;
  priceLabel: string;
  location: string;
  beds: number;
  baths: number;
  sqm: number;
  image: string;
  index?: number;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  id, title, type, priceLabel, location, beds, baths, sqm, image, index = 0,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
  >
    <Link
      to={`/listings/${id}`}
      className="group block bg-surface/30 border border-border rounded-xl overflow-hidden hover:border-accent/40 transition-all duration-300 hover:shadow-lift"
      id={`property-card-${id}`}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <Chip variant="accent" className="absolute top-3 left-3">
          {type}
        </Chip>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-text-white mb-1 group-hover:text-accent-light transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted mb-3 flex items-center gap-1">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {location}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold gradient-text">{priceLabel}</span>
          <div className="flex items-center gap-3 text-xs text-muted">
            <span className="flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 7v11a2 2 0 002 2h14a2 2 0 002-2V7" /><path d="M21 7H3l2-4h14l2 4z" />
              </svg>
              {beds}
            </span>
            <span className="flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 6l.463-.536a1.5 1.5 0 012.374 0L12 6" /><path d="M3 13h18v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3z" /><path d="M6 20v2M18 20v2" />
              </svg>
              {baths}
            </span>
            <span>{sqm}m²</span>
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

export { default as AetherLogo } from './AetherLogo';
