# 📘 Next.js Boilerplate

Một boilerplate hiện đại cho **Next.js App Router** với đầy đủ tính năng phục vụ production: **TypeScript, TailwindCSS, PWA, SEO, i18n, Docker, ESLint/Prettier, PlopJS generator**.

---

## 🚀 Tính năng chính

- **⚡ App Router (Next.js 14+)** với `layout`, `loading`, `error`, `not-found`.
- **🌍 Đa ngôn ngữ (i18n)** tích hợp `next-intl`.
- **📱 PWA Ready** với `serwist`, `PWAInstallPrompt`, Service Worker tùy chỉnh.
- **🔍 SEO/Meta**: `next-seo`, JSON-LD schemas (Organization, Website, Breadcrumb).
- **🎨 TailwindCSS** với cấu hình extend theme.
- **🧩 Component generator** với PlopJS.
- **🔒 Security headers** (CSP, HSTS, X-Frame-Options, etc.).
- **🐳 Docker & docker-compose** để chạy trên mọi môi trường.
- **✅ Code quality**: ESLint, Prettier, EditorConfig.
- **🛠 Utils & Hooks**: `fetcher`, `logger`, `useToggle`, `notification`, `helper`.

---

## 📂 Cấu trúc thư mục

```
src/
 ├── app/               # App Router (layout, page, error, not-found, ...)
 ├── components/        # UI Components
 ├── config/            # siteConfig, metadata, SEO config
 ├── hooks/             # custom hooks (e.g. useToggle)
 ├── i18n/              # translations, auto_trans, clear_duplicate
 ├── lib/               # shared library (fetcher, logger, etc.)
 ├── services/          # API services (userService, ...)
 ├── types/             # TypeScript types
 └── utils/             # helper & notification utils
```

---

## ⚡ Bắt đầu

### 1. Cài đặt

```bash
git clone https://github.com/yourname/nextjs-boilerplate.git
cd nextjs-boilerplate
yarn install
```

### 2. Chạy dev

```bash
yarn dev
```

App chạy tại `http://localhost:3000`

### 3. Build production

```bash
yarn build
yarn start
```

### 4. Docker

```bash
docker-compose up --build
```

---

## 🌍 i18n

- Sử dụng `next-intl`
- File ngôn ngữ: `src/i18n/vi/translation.json`
- Có script hỗ trợ auto dịch & xóa trùng lặp (`auto_trans.js`, `clear_duplicate.js`)

---

## 📱 PWA

- Service worker: `src/app/sw.ts`
- Component: `PWAInstallPrompt.tsx`
- Test install bằng Chrome DevTools → Application → Manifest

---

## 🔍 SEO

- Config tại: `next-seo.config.js` và `src/config/site.ts`
- Schema JSON-LD:
  - `OrganizationSchema.tsx`
  - `WebSiteSchema.tsx`
  - `BreadcrumbListSchema.tsx`

---

## 🛠 PlopJS (tạo component nhanh)

```bash
yarn plop component
```

Sinh ra:

```
src/components/MyComponent/
 ├── MyComponent.tsx
 ├── index.ts
 └── index.module.scss
```

---

## ✅ Scripts

- `yarn dev` → chạy dev
- `yarn build` → build production
- `yarn start` → chạy production
- `yarn lint` → check eslint
- `yarn format` → format prettier
- `yarn plop component` → generate component

---

## 🛡 Badges

![Next.js](https://img.shields.io/badge/Next.js-14+-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38bdf8?logo=tailwindcss)
![Docker](https://img.shields.io/badge/Docker-ready-blue?logo=docker)
![ESLint](https://img.shields.io/badge/Linting-ESLint-purple?logo=eslint)
![Prettier](https://img.shields.io/badge/Formatting-Prettier-ff69b4?logo=prettier)

---

👉 Đây là **boilerplate chuẩn production**, sẵn sàng để mở rộng thành dự án thật.
