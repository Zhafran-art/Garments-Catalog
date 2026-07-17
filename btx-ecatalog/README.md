# PT BTX Garment Trims Indonesia — E-Catalog

A modern, premium **B2B E-Catalog** frontend for PT BTX Garment Trims Indonesia,
a garment accessories manufacturer. It showcases product categories — buttons,
zippers, labels, buckles, and accessories — with specifications, variations, and
applications.

> This is an **E-Catalog, not a store**: no prices, no cart, no checkout.

## ✨ Features

- **Premium purple + white corporate identity** (Pantone-inspired BTX palette)
- **Fully responsive** — desktop, tablet, and mobile
- **Smooth interactivity** — page transitions, scroll reveals, hover zoom,
  animated sticky navbar, and an **interactive product carousel** on every
  category page
- **Reusable component architecture** with clean folder organization
- **Placeholder image system** — looks complete out of the box; swap in real
  photos with a one-line change

## 🧱 Tech Stack

- **React 18 + TypeScript**
- **Vite** (fast dev server & build)
- **Tailwind CSS** (utility-first styling + custom BTX theme)
- **React Router** (multi-page navigation)
- **Framer Motion** (animations & transitions)
- **lucide-react** (icons)

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

Then open the printed local URL (usually http://localhost:5173).

## 📂 Project Structure

```
btx-ecatalog/
├─ public/
│  ├─ favicon.svg
│  └─ images/              # drop real product photos here (see README.txt)
├─ src/
│  ├─ components/
│  │  ├─ Navbar.tsx        # sticky animated navbar + mobile menu
│  │  ├─ Footer.tsx
│  │  ├─ HeroSection.tsx   # reusable hero (home + category pages)
│  │  ├─ CategorySection.tsx   # homepage featured category grid
│  │  ├─ ProductCard.tsx   # catalog card (no price/cart)
│  │  ├─ ProductCarousel.tsx   # interactive carousel (used on every category)
│  │  ├─ PlaceholderImage.tsx  # branded image fallback
│  │  ├─ Reveal.tsx        # scroll-into-view animation wrapper
│  │  ├─ PageTransition.tsx
│  │  ├─ ScrollToTop.tsx
│  │  └─ Logo.tsx
│  ├─ pages/
│  │  ├─ Home.tsx
│  │  ├─ CategoryPage.tsx  # ONE reusable page for all 5 categories
│  │  ├─ About.tsx
│  │  └─ Contact.tsx
│  ├─ data/
│  │  └─ products.ts       # all catalog content lives here
│  ├─ App.tsx              # routes + page transitions
│  ├─ main.tsx
│  └─ index.css            # Tailwind + custom component classes
├─ tailwind.config.js      # BTX color palette & animations
└─ package.json
```

## 🗂️ Pages

| Route             | Description                                  |
| ----------------- | -------------------------------------------- |
| `/`               | Homepage — hero, intro, featured categories  |
| `/buttons`        | Buttons & Fasteners + carousel               |
| `/zippers`        | Zippers, Sliders & Hardware + carousel                |
| `/elastic`        | Elastic & Tape + carousel                    |
| `/lace`           | Lace & Trims + carousel                      |
| `/labels`         | Labels & Branding + carousel                 |
| `/drawcords`      | Drawcords & Rope + carousel                  |
| `/lingerie`       | Bra & Lingerie Accessories + carousel        |
| `/embellishments` | Embellishments + carousel                    |
| `/components`     | Garment Components + carousel                |
| `/packaging`      | Packaging Accessories + carousel             |
| `/about`          | Company profile, expertise, timeline         |
| `/contact`        | Contact form, info, location placeholder     |

All product categories are accessed via the **Products** dropdown in the navbar.

## ✏️ Editing Content

All catalog text — categories, product variants, materials, variations, and
applications — lives in [`src/data/products.ts`](src/data/products.ts).
Add or edit entries there and the pages update automatically.

Company details (name, email, phone, address) are in the `COMPANY` object at the
bottom of the same file.

## 🖼️ Adding Real Images

See [`public/images/README.txt`](public/images/README.txt). In short: add a photo
to `public/images/...` and set the `image` field on the relevant product/category
in `products.ts`. Until then, an elegant branded placeholder is shown.

## 🎨 Brand Colors

The BTX purple palette is defined under `theme.extend.colors.brand` in
[`tailwind.config.js`](tailwind.config.js). The primary brand purple is
`brand-600` (`#7437a3`); white is the main background with subtle gray sections.

---

© PT BTX Garment Trims Indonesia — E-Catalog (frontend demo).
