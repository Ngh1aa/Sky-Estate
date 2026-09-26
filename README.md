# 🏠 Sky Estate — Aether Lane

> Nền tảng bất động sản cao cấp hàng đầu Việt Nam

![Sky Estate](https://img.shields.io/badge/Sky%20Estate-Aether%20Lane-614bb0?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=flat-square&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite)

## ✨ Tính năng

- 🎨 **Dark/Cosmic Design** — Giao diện tối sang trọng với hiệu ứng glass, gradient và cosmic
- 📱 **Responsive** — Tối ưu cho mọi kích thước màn hình (375px — 1536px+)
- ⚡ **SPA Multi-page** — 6 trang với React Router, page transitions mượt mà
- 🔍 **Tìm kiếm & Lọc** — Filter theo loại BĐS, khu vực, giá, số phòng, sắp xếp
- 🖼️ **Gallery & Lightbox** — Carousel ảnh với lightbox xem chi tiết
- 📝 **Form Validation** — Form đặt lịch và liên hệ với validation realtime
- 🎭 **Animations** — Framer Motion entrance, parallax, stagger, page transitions
- ♿ **Accessible** — WCAG AA, semantic HTML, keyboard navigation, skip-to-content
- 🚀 **Performance** — Code-splitting, lazy loading, optimized animations

## 🗂️ Cấu trúc trang

| Route | Trang |
|---|---|
| `/` | Trang chủ — Hero, Social proof, Featured, Why Aether Lane, Testimonials |
| `/listings` | Danh sách BĐS — Grid, Filter/Sort, Search |
| `/listings/:id` | Chi tiết BĐS — Gallery, Booking form, Related |
| `/about` | Về chúng tôi — Story, Team, Values, Achievements |
| `/contact` | Liên hệ — Form, Office info, FAQ |
| `*` | 404 — Trang không tìm thấy |

## 🛠️ Tech Stack

- **Vite** — Build tool
- **React 18** + **TypeScript**
- **Tailwind CSS v4** — Styling
- **React Router v6** — Routing
- **Framer Motion** — Animations
- **react-helmet-async** — SEO
- **lucide-react** — Icons

## 🚀 Bắt đầu

### Cài đặt

```bash
npm install
```

### Chạy dev server

```bash
npm run dev
```

### Build production

```bash
npm run build
```

### Preview bản build

```bash
npm run preview
```

## 🌐 Deploy

### Vercel (Khuyến nghị)

1. Kết nối repository với [Vercel](https://vercel.com)
2. Framework preset: **Vite**
3. Build command: `npm run build`
4. Output directory: `dist`
5. Vercel sẽ tự động deploy mỗi khi push code

> File `vercel.json` đã được cấu hình sẵn rewrite cho SPA routing.

### GitHub Pages

1. Push code lên branch `main`
2. GitHub Actions sẽ tự động build và deploy (xem `.github/workflows/deploy.yml`)
3. Vào **Settings → Pages → Source**: chọn **GitHub Actions**
4. Website sẽ available tại `https://<username>.github.io/<repo-name>/`

> Khi deploy lên GitHub Pages, workflow sẽ tự động set `VITE_USE_HASH_ROUTER=true`.

### Chuyển đổi Router

Router có thể chuyển đổi giữa `BrowserRouter` và `HashRouter` qua biến môi trường:

```bash
# BrowserRouter (mặc định, cho Vercel)
npm run dev

# HashRouter (cho GitHub Pages)
VITE_USE_HASH_ROUTER=true npm run dev
```

## 📁 Cấu trúc project

```
src/
├── components/
│   ├── ui/             # Base components (Button, Input, Card, ...)
│   └── sections/       # Layout sections (Navbar, Footer)
├── data/
│   └── properties.ts   # Mock data (12 BĐS, team, testimonials, FAQ)
├── hooks/
│   └── index.ts        # Custom hooks (useInView, useAnimatedCounter, ...)
├── pages/
│   ├── HomePage.tsx
│   ├── ListingsPage.tsx
│   ├── PropertyDetailPage.tsx
│   ├── AboutPage.tsx
│   ├── ContactPage.tsx
│   └── NotFoundPage.tsx
├── App.tsx             # Router + Layout
├── main.tsx            # Entry point
└── index.css           # Design system + Tailwind
```

## 🎨 Design System

| Token | Value |
|---|---|
| `--bg` | `#281846` |
| `--surface` | `#4f306f` |
| `--text` | `#c48dcc` |
| `--accent` | `#614bb0` |
| Font | Inter Tight (400/500/600/700) |
| Radii | 8 / 12 / 16 / 20px |

## 📄 License

MIT © Sky Estate — Aether Lane
