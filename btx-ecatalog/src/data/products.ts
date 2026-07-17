// ---------------------------------------------------------------------------
// Central catalog data for PT BTX Garment Trims Indonesia
// ---------------------------------------------------------------------------
// All product content lives here so pages stay declarative and easy to update.
// To use real photography, drop files into /public/images and set the `image`
// field to e.g. "/images/zippers/metal-zipper.jpg". When `image` is omitted the
// UI falls back to an elegant branded placeholder (see PlaceholderImage.tsx).
// ---------------------------------------------------------------------------

export type CategorySlug =
  | 'buttons'
  | 'zippers'
  | 'elastic'
  | 'lace'
  | 'labels'
  | 'drawcords'
  | 'lingerie'
  | 'embellishments'
  | 'components'
  | 'packaging'

/** A single image tile shown inside the pop-out gallery grid. */
export interface GalleryItem {
  /** Caption shown under the tile, e.g. "Button 1" */
  label: string
  /** Path to a real image, e.g. "/images/buttons/plastic/plastic-01.webp" */
  image: string
}

export interface ProductVariant {
  name: string
  description: string
  material: string
  variations: string[]
  applications: string[]
  /** Optional path to a real image, e.g. "/images/zippers/metal.jpg" */
  image?: string
  /**
   * Optional set of real product photos. When present, the pop-out gallery
   * shows one tile per item (with its image) instead of the generic
   * variation placeholders.
   */
  gallery?: GalleryItem[]
}

export interface Category {
  slug: CategorySlug
  name: string
  /** Short label used on cards / nav */
  tagline: string
  /** Hero title on the dedicated category page */
  heroTitle: string
  /** Hero supporting copy */
  heroSubtitle: string
  /** One-liner used on the homepage featured grid */
  blurb: string
  /** Accent icon name from lucide-react (see components/icons.ts) */
  icon: string
  image?: string
  variants: ProductVariant[]
}

export const categories: Category[] = [
  // -------------------------------------------------------------------------
  // 1. BUTTONS & FASTENERS
  // -------------------------------------------------------------------------
  {
    slug: 'buttons',
    name: 'Buttons & Fasteners',
    tagline: 'Closures & Fastening',
    heroTitle: 'Buttons & Fasteners Collection',
    heroSubtitle:
      'Precision-engineered buttons and fastening hardware across resin, metal, and natural materials — finished to exacting standards for fashion, denim, and workwear.',
    blurb: 'Plastic, metal, snap, shank & natural buttons plus fastening hardware.',
    icon: 'CircleDot',
    variants: [
      {
        name: 'Plastic Button',
        description:
          'Versatile, lightweight buttons with rich color depth and a refined polished surface — the everyday workhorse for shirts and fashion apparel.',
        material: 'Polyester resin / ABS',
        variations: ['2-hole', '4-hole', 'Matte / Glossy', 'Pearlized', 'Custom color'],
        applications: ['Shirts', 'Blouses', 'Dresses', 'Fashion apparel'],
        gallery: Array.from({ length: 48 }, (_, i) => ({
          label: `Button ${i + 1}`,
          image: `/images/buttons/plastic/plastic-${String(i + 1).padStart(2, '0')}.webp`,
        })),
      },
      {
        name: 'Metal Button',
        description:
          'Durable die-cast and stamped metal buttons with premium electroplated finishes for a strong, structured statement.',
        material: 'Zinc alloy / brass',
        variations: ['Jeans button', 'Tack button', 'Antique brass', 'Nickel-free'],
        applications: ['Denim', 'Jackets', 'Workwear', 'Outerwear'],
        gallery: Array.from({ length: 2 }, (_, i) => ({
          label: `Design ${i + 1}`,
          image: `/images/metal-button/metal-button-${String(i + 1).padStart(2, '0')}.webp`,
        })),
      },
      {
        name: 'Snap Button',
        description:
          'Reliable press-stud closures in metal and plastic, engineered for smooth, repeated open-and-close performance with a secure lock.',
        material: 'Brass / stainless steel / POM',
        variations: ['Ring snap', 'Spring snap', 'Prong snap', 'Capped', 'Plastic snap'],
        applications: ['Childrenswear', 'Shirts', 'Sportswear', 'Bags'],
      },
      {
        name: 'Fabric Covered Button',
        description:
          'Self-cover buttons wrapped in matching or contrast fabric for a seamless, couture finish that blends into the garment.',
        material: 'Metal / plastic base + fabric',
        variations: ['Self-cover', 'Contrast fabric', 'Shank back', 'Flat back'],
        applications: ['Tailoring', 'Upholstery', 'Womenswear', 'Couture'],
      },
      {
        name: 'Shank Button',
        description:
          'Raised-loop buttons in metal and plastic that sit cleanly above thick fabrics — ideal for coats and structured garments.',
        material: 'Zinc alloy / plastic',
        variations: ['Metal shank', 'Plastic shank', 'Dome', 'Engraved'],
        applications: ['Coats', 'Blazers', 'Knitwear', 'Outerwear'],
        gallery: Array.from({ length: 50 }, (_, i) => ({
          label: `Shank ${i + 1}`,
          image: `/images/shank-button/shank-button-${String(i + 1).padStart(2, '0')}.webp`,
        })),
      },
      {
        name: 'Shell / Pearl Button',
        description:
          'Natural shell and pearl-finish buttons offering a luminous, premium sheen for elevated shirting and fashion pieces.',
        material: 'Natural shell / pearl resin',
        variations: ['Trocas shell', 'River shell', 'Pearl resin', '2 / 4-hole'],
        applications: ['Premium shirts', 'Blouses', 'Fashion', 'Formalwear'],
      },
      {
        name: 'Wood Button',
        description:
          'Sustainably sourced wooden buttons offering warm organic tones and an artisanal, eco-conscious appeal.',
        material: 'Natural hardwood / coconut',
        variations: ['Round', 'Toggle', 'Laser-engraved', 'Oiled finish'],
        applications: ['Knitwear', 'Eco fashion', 'Cardigans', 'Crafts'],
      },
      {
        name: 'Horn Button',
        description:
          'Genuine and imitation horn buttons with distinctive natural grain — a hallmark of premium tailoring and outerwear.',
        material: 'Natural horn / imitation horn',
        variations: ['Polished', 'Matte', 'Rim-edge', 'Mottled grain'],
        applications: ['Suits', 'Coats', 'Blazers', 'Premium tailoring'],
      },
      {
        name: 'Rivet',
        description:
          'Hard-wearing decorative and reinforcing rivets that strengthen stress points while adding a rugged hardware accent.',
        material: 'Brass / copper / zinc alloy',
        variations: ['Cap rivet', 'Tubular', 'Double-cap', 'Logo-stamped'],
        applications: ['Denim', 'Workwear', 'Bags', 'Leather goods'],
      },
      {
        name: 'Hook & Eye',
        description:
          'Discreet two-part metal closures providing a secure, low-profile fastening for waistbands and necklines.',
        material: 'Steel / brass',
        variations: ['Trouser hook & bar', 'Sew-on', 'Covered', 'Nickel-free'],
        applications: ['Trousers', 'Skirts', 'Bras', 'Formalwear'],
        gallery: Array.from({ length: 1 }, (_, i) => ({
          label: `Design ${i + 1}`,
          image: `/images/hook-and-eye/hook-and-eye-${String(i + 1).padStart(2, '0')}.webp`,
        })),
      },
      {
        name: 'Toggle',
        description:
          'Bar-and-loop toggle fasteners in wood, horn, and plastic that add a functional, casual-luxe detail to outerwear.',
        material: 'Wood / horn / plastic',
        variations: ['Wooden', 'Horn-look', 'Plastic', 'Leather loop'],
        applications: ['Duffle coats', 'Knitwear', 'Outerwear', 'Children'],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 2. ZIPPERS & METAL HARDWARE
  // -------------------------------------------------------------------------
  {
    slug: 'zippers',
    name: 'Zippers, Sliders, & Hardware',
    tagline: 'Closures & Metal Trims',
    heroTitle: 'Zippers, Sliders, & Metal Hardware Collection',
    heroSubtitle:
      'Smooth, durable zippers paired with a full range of precision metal hardware — sliders, rings, buckles, and stoppers engineered for performance and refined detailing.',
    blurb: 'Zippers, buckles, rings, sliders, eyelets & metal hardware.',
    icon: 'Wrench',
    variants: [
      {
        name: 'Zipper (Resleting)',
        description:
          'Premium zippers in metal, nylon coil, and invisible constructions — the benchmark closure for apparel, bags, and outerwear.',
        material: 'Brass / nylon coil / aluminium',
        variations: ['Metal', 'Nylon coil', 'Invisible', 'Waterproof', 'Two-way'],
        applications: ['Denim', 'Jackets', 'Dresses', 'Bags'],
      },
      {
        name: 'Buckle (Gesper)',
        description:
          'Functional and decorative buckles in metal and plastic, engineered for secure adjustment and a refined hardware aesthetic.',
        material: 'Zinc alloy / POM / nylon',
        variations: ['Side-release', 'Pin buckle', 'Roller', 'Cam lock'],
        applications: ['Belts', 'Bags', 'Outerwear', 'Sportswear'],
        gallery: Array.from({ length: 24 }, (_, i) => ({
          label: `Design ${i + 1}`,
          image: `/images/buckle/buckle-${String(i + 1).padStart(2, '0')}.webp`,
        })),
      },
      {
        name: 'Cord Lock / Stopper',
        description:
          'Spring-loaded cord locks and stoppers that hold drawcords securely in place with a smooth one-hand action.',
        material: 'POM / nylon / metal',
        variations: ['Single-hole', 'Double-hole', 'Spring', 'Custom shape'],
        applications: ['Hoodies', 'Jackets', 'Bags', 'Outdoor gear'],
        gallery: Array.from({ length: 16 }, (_, i) => ({
          label: `Design ${i + 1}`,
          image: `/images/cord-lock-stopper/cord-lock-stopper-${String(i + 1).padStart(2, '0')}.webp`,
        })),
      },
      {
        name: 'Zipper Puller',
        description:
          'Pull tabs and cord pullers that give zippers an easy grip and a finished, branded look.',
        material: 'Metal / cord / rubber',
        variations: ['Cord puller', 'Metal tab', 'Rubber tip', 'Custom shape'],
        applications: ['Jackets', 'Bags', 'Sportswear', 'Footwear'],
        gallery: Array.from({ length: 9 }, (_, i) => ({
          label: `Design ${i + 1}`,
          image: `/images/zipper-puller/zipper-puller-${String(i + 1).padStart(2, '0')}.webp`,
        })),
      },
      {
        name: 'String Puller',
        description:
          'Durable string pullers designed to provide an easy grip, improved functionality, and a premium finishing touch for zippers, bags, and outdoor apparel.',
        material: 'Polyester cord / Nylon / Rubber / TPU',
        variations: ['Cord puller', 'Rubber puller', 'Knotted', 'Tipped', 'Custom logo'],
        applications: ['Jackets', 'Bags', 'Sportswear', 'Outdoor gear'],
        gallery: Array.from({ length: 3 }, (_, i) => ({
          label: `Design ${i + 1}`,
          image: `/images/string-puller/string-puller-${String(i + 1).padStart(2, '0')}.webp`,
        })),
        },
      {
        name: 'D-Ring',
        description:
          'Strong D-shaped rings for strap attachment and decorative hardware accents with a clean, durable finish.',
        material: 'Zinc alloy / steel',
        variations: ['Welded', 'Cast', 'Plated', 'Multiple widths'],
        applications: ['Bags', 'Straps', 'Overalls', 'Accessories'],
        gallery: Array.from({ length: 5 }, (_, i) => ({
          label: `Design ${i + 1}`,
          image: `/images/d-ring/d-ring-${String(i + 1).padStart(2, '0')}.webp`,
        })),
      },
      {
        name: 'O-Ring',
        description:
          'Versatile O-rings used for strap connections and hardware detailing across bags and apparel.',
        material: 'Zinc alloy / steel',
        variations: ['Welded', 'Seamless', 'Plated', 'Multiple gauges'],
        applications: ['Bags', 'Straps', 'Fashion', 'Accessories'],
        gallery: Array.from({ length: 14 }, (_, i) => ({
          label: `Design ${i + 1}`,
          image: `/images/o-ring/o-ring-${String(i + 1).padStart(2, '0')}.webp`,
        })),
      },
      {
        name: 'Slider Rings',
        description:
          'Smooth-gliding strap sliders and adjusters that deliver secure length control for webbing of all widths.',
        material: 'Metal / engineered plastic',
        variations: ['Tri-glide', 'Ladder lock', 'Cam', 'Convex'],
        applications: ['Straps', 'Bags', 'Sportswear', 'Workwear'],
        gallery: Array.from({ length: 21 }, (_, i) => ({
          label: `Design ${i + 1}`,
          image: `/images/slider/slider-${String(i + 1).padStart(2, '0')}.webp`,
        })),
      },
      {
        name: 'Eyelet / Grommet',
        description:
          'Reinforcing eyelets and grommets that finish lace and cord holes with a durable metal rim.',
        material: 'Brass / aluminium / steel',
        variations: ['Self-piercing', 'Washer set', 'Spur', 'Custom finish'],
        applications: ['Footwear', 'Curtains', 'Bags', 'Corsetry'],
        gallery: Array.from({ length: 1 }, (_, i) => ({
          label: `Design ${i + 1}`,
          image: `/images/eyelet-grommet/eyelet-grommet-${String(i + 1).padStart(2, '0')}.webp`,
        })),
      },
      {
        name: 'Washer',
        description:
          'Paired backing washers that lock eyelets and grommets securely for long-lasting performance.',
        material: 'Brass / steel',
        variations: ['Plain', 'Spur', 'Toothed', 'Plated'],
        applications: ['Eyelet sets', 'Belts', 'Bags', 'Tarpaulin'],
      },
      {
        name: 'Metal Ring',
        description:
          'Decorative and functional metal rings for strap hardware, handles, and fashion detailing.',
        material: 'Zinc alloy / iron',
        variations: ['Round', 'Square', 'Oval', 'Welded'],
        applications: ['Bags', 'Belts', 'Fashion', 'Accessories'],
        gallery: Array.from({ length: 1 }, (_, i) => ({
          label: `Design ${i + 1}`,
          image: `/images/metal-ring/metal-ring-${String(i + 1).padStart(2, '0')}.webp`,
        })),
      },
      {
        name: 'Belt',
        description:
          'High-quality garment belts designed to provide secure fastening, durability, and a stylish finishing touch for various apparel applications.',
        material: 'Polyester / Nylon / Cotton / Elastic',
        variations: ['Webbing belt', 'Elastic belt', 'Braided belt', 'Fashion belt'],
        applications: ['Trousers', 'Uniforms', 'Outdoor apparel', 'Fashion garments'],
      },
      {
        name: 'Chain',
        description:
          'Decorative metal chain for straps, handles, and fashion detailing in a range of links and finishes.',
        material: 'Iron / zinc alloy / brass',
        variations: ['Curb', 'Ball', 'Flat link', 'Plated'],
        applications: ['Bags', 'Fashion', 'Footwear', 'Accessories'],
        gallery: Array.from({ length: 7 }, (_, i) => ({
          label: `Design ${i + 1}`,
          image: `/images/chain/chain-${String(i + 1).padStart(2, '0')}.webp`,
        })),
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 3. ELASTIC & TAPE
  // -------------------------------------------------------------------------
  {
    slug: 'elastic',
    name: 'Elastic, Tape, & Velcro',
    tagline: 'Stretch & Webbing',
    heroTitle: 'Elastic & Tape Collection',
    heroSubtitle:
      'High-performance elastics and woven tapes engineered for comfort, recovery, and durability across apparel, lingerie, and technical garments.',
    blurb: 'Elastic bands, FOE, woven tapes, ribbons & reflective tape.',
    icon: 'StretchHorizontal',
    variants: [
      {
        name: 'Elastic Band',
        description:
          'Durable woven and knitted elastic bands offering reliable stretch and recovery for waistbands and cuffs.',
        material: 'Polyester / rubber / latex',
        variations: ['Woven', 'Knitted', 'Braided', 'Multiple widths'],
        applications: ['Waistbands', 'Cuffs', 'Underwear', 'Sportswear'],
        gallery: Array.from({ length: 9 }, (_, i) => ({
          label: `Design ${i + 1}`,
          image: `/images/elastic-band/elastic-band-${String(i + 1).padStart(2, '0')}.webp`,
        })),
      },
      {
        name: 'Elastic Tape',
        description:
          'Flat elastic tape with consistent stretch, ideal for edging and functional support across garments.',
        material: 'Polyester / spandex',
        variations: ['Soft', 'Firm', 'Printed', 'Custom width'],
        applications: ['Activewear', 'Underwear', 'Trims', 'Edging'],
        gallery: Array.from({ length: 32 }, (_, i) => ({
          label: `Design ${i + 1}`,
          image: `/images/elastic-tape/elastic-tape-${String(i + 1).padStart(2, '0')}.webp`,
        })),
      },
      {
        name: 'Buttonhole Elastic',
        description:
          'Adjustable elastic with built-in buttonholes for flexible, growing-fit waist adjustment.',
        material: 'Polyester / rubber',
        variations: ['Standard', 'Soft', 'Multiple widths'],
        applications: ['Childrenswear', 'Maternity', 'Adjustable waists'],
      },
      {
        name: 'Velcro',
        description:
          'Reusable hook-and-loop fastening tape offering quick, adjustable closure for a wide range of applications.',
        material: 'Nylon / polyester',
        variations: ['Sew-on', 'Adhesive', 'Soft-touch', 'Custom width'],
        applications: ['Sportswear', 'Childrenswear', 'Bags', 'Workwear'],
      },
      {
        name: 'Drawstring',
        description:
          'Premium drawstrings designed to provide secure adjustment, durability, and a stylish finishing detail for garments, bags, and footwear.',
        material: 'Polyester / Cotton / Nylon',
        variations: ['Flat', 'Round', 'Braided', 'Printed', 'Tipped'],
        applications: ['Hoodies', 'Joggers', 'Shorts', 'Bags'],
        gallery: Array.from({ length: 1 }, (_, i) => ({
          label: `Design ${i + 1}`,
          image: `/images/drawstring/drawstring-${String(i + 1).padStart(2, '0')}.webp`,
        })),
      },
      {
        name: 'Tape',
        description:
          'High-quality adhesive and non-adhesive tapes designed for garment manufacturing, packaging, reinforcement, and secure fastening across various applications.',
        material: 'Polyester / Cotton / PVC / Paper',
        variations: ['Adhesive', 'Double-sided', 'Cloth', 'Paper', 'Custom width'],
        applications: ['Garment production', 'Packaging', 'Reinforcement', 'General industrial use'],
        gallery: Array.from({ length: 15 }, (_, i) => ({
          label: `Design ${i + 1}`,
          image: `/images/tape/tape-${String(i + 1).padStart(2, '0')}.webp`,
        })),
      },
      {
        name: 'Twill Tape',
        description:
          'Durable diagonal-weave tape used for reinforcing, binding, and finishing seams and edges.',
        material: 'Cotton / polyester',
        variations: ['Cotton', 'Poly', 'Printed', 'Multiple widths'],
        applications: ['Seam reinforcement', 'Binding', 'Ties', 'Hanger loops'],
        gallery: Array.from({ length: 4 }, (_, i) => ({
          label: `Design ${i + 1}`,
          image: `/images/twill-tape/twill-tape-${String(i + 1).padStart(2, '0')}.webp`,
        })),
      },
      {
        name: 'Herringbone Tape',
        description:
          'Classic herringbone-weave tape combining strength with a decorative textured surface.',
        material: 'Cotton / polyester',
        variations: ['Cotton', 'Poly', 'Printed', 'Custom color'],
        applications: ['Binding', 'Drawcords', 'Aprons', 'Workwear'],
        gallery: Array.from({ length: 3 }, (_, i) => ({
          label: `Design ${i + 1}`,
          image: `/images/herringbone-tape/herringbone-tape-${String(i + 1).padStart(2, '0')}.webp`,
        })),
      },
      {
        name: 'Grosgrain Tape',
        description:
          'Ribbed grosgrain tape offering a crisp, premium finish for trims, bindings, and branding.',
        material: 'Polyester / nylon',
        variations: ['Matte', 'Printed', 'Logo', 'Multiple widths'],
        applications: ['Caps', 'Trims', 'Bag straps', 'Branding'],
        gallery: Array.from({ length: 9 }, (_, i) => ({
          label: `Design ${i + 1}`,
          image: `/images/grosgrain-tape/grosgrain-tape-${String(i + 1).padStart(2, '0')}.webp`,
        })),
      },
      {
        name: 'Satin Tape',
        description:
          'Smooth, lustrous satin ribbon for decorative trims, ties, and elegant brand detailing.',
        material: 'Polyester satin',
        variations: ['Single-face', 'Double-face', 'Printed', 'Custom color'],
        applications: ['Lingerie', 'Gift trims', 'Apparel', 'Packaging'],
        gallery: Array.from({ length: 2 }, (_, i) => ({
          label: `Design ${i + 1}`,
          image: `/images/satin-tape/satin-tape-${String(i + 1).padStart(2, '0')}.webp`,
        })),
      },
      {
        name: 'Binding Tape',
        description:
          'Pre-folded bias and straight binding tape for clean, durable edge finishing.',
        material: 'Cotton / polyester / satin',
        variations: ['Bias', 'Straight', 'Single-fold', 'Double-fold'],
        applications: ['Edges', 'Necklines', 'Quilts', 'Seams'],
        gallery: Array.from({ length: 8 }, (_, i) => ({
          label: `Design ${i + 1}`,
          image: `/images/binding-tape/binding-tape-${String(i + 1).padStart(2, '0')}.webp`,
        })),
      },
      {
        name: 'Reflective Tape',
        description:
          'High-visibility reflective tape engineered to enhance safety by improving visibility in low-light and nighttime conditions while maintaining flexibility and durability.',
        material: 'Polyester / Reflective film / Glass bead',
        variations: ['Sew-on', 'Heat transfer', 'Silver reflective', 'Segmented', 'Flame-resistant'],
        applications: ['Safety apparel', 'Workwear', 'Sportswear', 'Outdoor gear'],
        gallery: Array.from({ length: 2 }, (_, i) => ({
          label: `Design ${i + 1}`,
          image: `/images/reflective-tape/reflective-tape-${String(i + 1).padStart(2, '0')}.webp`,
        })),
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 4. LACE & TRIMS
  // -------------------------------------------------------------------------
  {
    slug: 'lace',
    name: 'Lace & Trims',
    tagline: 'Decorative Trims',
    heroTitle: 'Lace & Decorative Trims Collection',
    heroSubtitle:
      'Intricate laces and decorative trims that bring texture, elegance, and personality to apparel, lingerie, and fashion accessories.',
    blurb: 'Lace, pom-pom, fringe, piping, sequin & beaded trims.',
    icon: 'Flower2',
    variants: [
      {
        name: 'Lace',
        description:
          'Classic woven and raschel lace offering delicate, ornate patterns for an elegant, feminine finish.',
        material: 'Nylon / polyester / cotton',
        variations: ['Raschel', 'Chantilly', 'Eyelet', 'Custom width'],
        applications: ['Lingerie', 'Dresses', 'Blouses', 'Bridal'],
        gallery: Array.from({ length: 1 }, (_, i) => ({
          label: `Design ${i + 1}`,
          image: `/images/lace/lace-${String(i + 1).padStart(2, '0')}.webp`,
        })),
      },
      {
        name: 'Stretch Lace',
        description:
          'Elasticated lace combining decorative patterning with comfortable stretch for body-contouring pieces.',
        material: 'Nylon / spandex',
        variations: ['Galloon', 'Edging', 'Allover', 'Custom color'],
        applications: ['Lingerie', 'Shapewear', 'Activewear', 'Swimwear'],
      },
      {
        name: 'Embroidered Lace',
        description:
          'Richly embroidered lace with raised motifs for a luxurious, couture-level decorative effect.',
        material: 'Polyester / cotton ground',
        variations: ['Corded', 'Beaded', 'Metallic thread', 'Custom motif'],
        applications: ['Bridal', 'Eveningwear', 'Lingerie', 'Couture'],
      },
      {
        name: 'Crochet Lace',
        description:
          'Hand-look crochet lace adding artisanal, bohemian texture to garments and home textiles.',
        material: 'Cotton / acrylic',
        variations: ['Cluny', 'Filet', 'Scalloped', 'Custom width'],
        applications: ['Dresses', 'Trims', 'Home textiles', 'Crafts'],
      },
      {
        name: 'Pom-Pom Trim',
        description:
          'Playful pom-pom trim that adds a soft, decorative edge to fashion and home accessories.',
        material: 'Polyester / cotton',
        variations: ['Mini', 'Standard', 'Multicolor', 'Custom color'],
        applications: ['Childrenswear', 'Fashion', 'Cushions', 'Accessories'],
      },
      {
        name: 'Fringe Trim',
        description:
          'Flowing fringe trim that brings movement and statement texture to garments and accessories.',
        material: 'Polyester / rayon / leather-look',
        variations: ['Brush', 'Tassel', 'Beaded', 'Custom length'],
        applications: ['Fashion', 'Western wear', 'Bags', 'Home decor'],
        gallery: Array.from({ length: 3 }, (_, i) => ({
          label: `Design ${i + 1}`,
          image: `/images/fringe-trim/fringe-trim-${String(i + 1).padStart(2, '0')}.webp`,
        })),
      },
      {
        name: 'Piping Cord',
        description:
          'Fabric-wrapped or exposed piping cord that defines seams and edges with a crisp, tailored line.',
        material: 'Cotton / polyester core',
        variations: ['Covered', 'Flanged', 'Metallic', 'Custom color'],
        applications: ['Tailoring', 'Cushions', 'Bags', 'Uniforms'],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 5. LABELS & BRANDING
  // -------------------------------------------------------------------------
  {
    slug: 'labels',
    name: 'Labels & Branding',
    tagline: 'Identity & Tags',
    heroTitle: 'Labels & Branding Collection',
    heroSubtitle:
      'Brand-defining labels, tags, and patches crafted for crisp detail, comfort, and durability — the finishing identity of every garment.',
    blurb: 'Woven, printed & heat-transfer labels, tags & branded patches.',
    icon: 'Tags',
    variants: [
      {
        name: 'Woven Label',
        description:
          'Densely woven labels delivering sharp logo definition and a premium hand-feel that lasts wash after wash.',
        material: 'Polyester / damask / satin weave',
        variations: ['Damask', 'Satin', 'Taffeta', 'Folded', 'Straight cut'],
        applications: ['Neck labels', 'Brand tags', 'Care patches'],
        gallery: Array.from({ length: 9 }, (_, i) => ({
          label: `Design ${i + 1}`,
          image: `/images/woven-label/woven-label-${String(i + 1).padStart(2, '0')}.webp`,
        })),
      },
      {
        name: 'Heat Transfer Label',
        description:
          'Tagless, skin-friendly transfers that bond directly to fabric for a smooth, irritation-free finish.',
        material: 'Heat-applied film',
        variations: ['Tagless', 'Full color', 'Metallic', 'Reflective'],
        applications: ['Sportswear', 'Activewear', 'Underwear', 'Tagless tees'],
        gallery: Array.from({ length: 2 }, (_, i) => ({
          label: `Design ${i + 1}`,
          image: `/images/heat-transfer-label/heat-transfer-label-${String(i + 1).padStart(2, '0')}.webp`,
        })),
      },
      {
        name: 'Care Label',
        description:
          'Durable care labels printed or woven with washing, fiber, and compliance information.',
        material: 'Satin / nylon / polyester',
        variations: ['Printed', 'Woven', 'Folded', 'Multi-language'],
        applications: ['Care info', 'Compliance', 'Inner labels'],
        gallery: Array.from({ length: 6 }, (_, i) => ({
          label: `Design ${i + 1}`,
          image: `/images/care-label/care-label-${String(i + 1).padStart(2, '0')}.webp`,
        })),
      },
      {
        name: 'Size Label',
        description:
          'Clear, durable size labels in woven or printed formats for fast identification.',
        material: 'Satin / damask',
        variations: ['Printed', 'Woven', 'Folded', 'Custom size run'],
        applications: ['Size tags', 'Neck labels', 'Inner labels'],
        gallery: Array.from({ length: 2 }, (_, i) => ({
          label: `Design ${i + 1}`,
          image: `/images/size-label/size-label-${String(i + 1).padStart(2, '0')}.webp`,
        })),
      },
      {
        name: 'Hang Tag',
        description:
          'Premium card hang tags that communicate brand story and product information at point of sale.',
        material: 'Art card / kraft / recycled board',
        variations: ['Matte', 'Gloss', 'Foil', 'Embossed', 'Eco kraft'],
        applications: ['Retail', 'Branding', 'Point of sale'],
        gallery: Array.from({ length: 8 }, (_, i) => ({
          label: `Design ${i + 1}`,
          image: `/images/hang-tag/hang-tag-${String(i + 1).padStart(2, '0')}.webp`,
        })),
      },
      {
        name: 'Leather Patch',
        description:
          'Genuine and synthetic leather patches offering a rugged, premium brand statement.',
        material: 'Genuine / PU leather',
        variations: ['Debossed', 'Embossed', 'Laser-etched', 'Stitched'],
        applications: ['Denim', 'Bags', 'Caps', 'Outerwear'],
        gallery: Array.from({ length: 20 }, (_, i) => ({
          label: `Design ${i + 1}`,
          image: `/images/leather-patch/leather-patch-${String(i + 1).padStart(2, '0')}.webp`,
        })),
      },
      {
        name: 'Rubber & Silicone Patch',
        description:
          'Raised PVC and rubber patches delivering a bold 3D tactile brand mark with excellent durability, And also flexible silicone patches with a premium soft-touch finish and crisp logo definition.',
        material: 'PVC / rubber',
        variations: ['2D', '3D', 'Soft-touch', 'Glow / reflective'],
        applications: ['Outerwear', 'Bags', 'Caps', 'Footwear'],
        gallery: Array.from({ length: 15 }, (_, i) => ({
          label: `Design ${i + 1}`,
          image: `/images/rubber-patch/rubber-patch-${String(i + 1).padStart(2, '0')}.webp`,
        })),
      },
      {
        name: 'Embroidery Patch',
        description:
          'Classic embroidered patches adding texture and a heritage, crafted brand feel.',
        material: 'Polyester / cotton thread',
        variations: ['Iron-on', 'Sew-on', 'Velcro-back', 'Merrowed edge'],
        applications: ['Caps', 'Jackets', 'Uniforms', 'Fashion'],
        gallery: Array.from({ length: 44 }, (_, i) => ({
          label: `Design ${i + 1}`,
          image: `/images/embroidery-patch/embroidery-patch-${String(i + 1).padStart(2, '0')}.webp`,
        })),
      },
      {
        name: 'Metal Plate / Logo Plate',
        description:
          'Precision metal logo plates that deliver a premium, luxury hardware brand accent.',
        material: 'Zinc alloy / brass / stainless',
        variations: ['Engraved', 'Embossed', 'Enamel-fill', 'Plated'],
        applications: ['Bags', 'Footwear', 'Outerwear', 'Accessories'],
        gallery: Array.from({ length: 29 }, (_, i) => ({
          label: `Plate ${i + 1}`,
          image: `/images/metal-plate/metal-plate-${String(i + 1).padStart(2, '0')}.webp`,
        })),
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 6. DRAWCORDS & ROPE
  // -------------------------------------------------------------------------
  {
    slug: 'drawcords',
    name: 'Drawcords & Stoppers',
    tagline: 'Cords & Ropes',
    heroTitle: 'Drawcords, Rope, & Stoppers Collection',
    heroSubtitle:
      'Soft, durable cords and ropes with custom tips and finishes for hoods, waistbands, and bags — comfortable, functional, and brand-ready.',
    blurb: 'Drawcords, cotton, elastic & bungee cords along with rope and cord stoppers.',
    icon: 'Cable',
    variants: [
      {
        name: 'Drawcord',
        description:
          'Soft, durable drawcords with custom tips and finishes for hoods, waistbands, and bags.',
        material: 'Polyester / cotton blend',
        variations: ['Flat', 'Round', 'Tipped', 'Printed', 'Custom color'],
        applications: ['Hoodies', 'Joggers', 'Bags', 'Jackets'],
      },
      {
        name: 'Bungee Cord',
        description:
          'High-stretch shock cord engineered for elastic tension in outdoor and technical applications.',
        material: 'Elastic core + polyester sheath',
        variations: ['Round', 'Reflective', 'Multiple gauges', 'Custom color'],
        applications: ['Outdoor gear', 'Backpacks', 'Tents', 'Sportswear'],
      },
      {
        name: 'Rope',
        description:
          'Strong braided and twisted rope for handles, ties, and decorative structural detailing.',
        material: 'Polyester / nylon / cotton',
        variations: ['Braided', 'Twisted', 'Multiple gauges', 'Custom color'],
        applications: ['Bag handles', 'Footwear', 'Outdoor', 'Fashion'],
      },
      {
        name: 'Stopper / Cord Lock',
        description:
          'Durable cord locks and stoppers designed to securely hold drawcords and elastic cords in place while allowing quick and easy adjustment.',
        material: 'POM / Nylon / ABS',
        variations: ['Single-hole', 'Double-hole', 'Spring-loaded', 'Toggle', 'Custom shape'],
        applications: ['Jackets', 'Hoodies', 'Bags', 'Outdoor gear'],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 7. BRA & LINGERIE ACCESSORIES
  // -------------------------------------------------------------------------
  {
    slug: 'lingerie',
    name: 'Bra & Lingerie',
    tagline: 'Intimate Components',
    heroTitle: 'Bra & Lingerie Accessories Collection',
    heroSubtitle:
      'Precision components engineered for the comfort, support, and durability that intimate apparel demands — from hooks and rings to underwires and cups.',
    blurb: 'Bra hooks, rings, sliders, underwires, cups & adjusters.',
    icon: 'Heart',
    variants: [
      {
        name: 'Bra Hook',
        description:
          'Hook-and-eye closures engineered for secure, comfortable fastening and smooth adjustment on bras.',
        material: 'Nylon-coated metal',
        variations: ['1-row', '2-row', '3-row', 'Multiple widths'],
        applications: ['Bras', 'Bustiers', 'Shapewear', 'Lingerie'],
      },
      {
        name: 'Bra Ring',
        description:
          'Smooth, snag-free rings that anchor and route bra straps with a refined, comfortable finish.',
        material: 'Nylon-coated metal / plastic',
        variations: ['O-ring', 'Figure-8', 'Coated', 'Custom color'],
        applications: ['Bras', 'Lingerie', 'Swimwear', 'Shapewear'],
      },
      {
        name: 'Bra Slider',
        description:
          'Adjustable strap sliders providing smooth, secure length control for bra and lingerie straps.',
        material: 'Nylon-coated metal / plastic',
        variations: ['Slide', 'Figure-8', 'Coated', 'Custom color'],
        applications: ['Bras', 'Lingerie', 'Swimwear', 'Shapewear'],
      },
      {
        name: 'Underwire',
        description:
          'Precision-formed underwires offering shaping support with smooth, capped ends for comfort.',
        material: 'Coated spring steel',
        variations: ['Standard', 'Push-up', 'Plunge', 'Multiple sizes'],
        applications: ['Bras', 'Bustiers', 'Swimwear', 'Corsetry'],
      },
      {
        name: 'Bra Cup',
        description:
          'Molded foam cups providing shape, padding, and support in a range of profiles and finishes.',
        material: 'Molded foam / spacer fabric',
        variations: ['Push-up', 'T-shirt', 'Removable', 'Multiple sizes'],
        applications: ['Bras', 'Swimwear', 'Activewear', 'Dresses'],
      },
      {
        name: 'Strap Adjuster',
        description:
          'Comfort-engineered adjusters for precise, secure strap length control across intimate apparel.',
        material: 'Nylon-coated metal / plastic',
        variations: ['Slide', 'Tri-glide', 'Coated', 'Custom color'],
        applications: ['Bras', 'Camisoles', 'Swimwear', 'Lingerie'],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 8. EMBELLISHMENTS
  // -------------------------------------------------------------------------
  {
    slug: 'embellishments',
    name: 'Embellishments',
    tagline: 'Decorative Detail',
    heroTitle: 'Embellishments Collection',
    heroSubtitle:
      'The decorative details that add distinctive character and sparkle — beads, sequins, rhinestones, pearls, tassels, and charms for standout fashion.',
    blurb: 'Beads, sequins, rhinestones, pearls, tassels & charms.',
    icon: 'Gem',
    variants: [
      {
        name: 'Beads',
        description:
          'Decorative beads in a wide range of materials and finishes to add texture and detail to garments.',
        material: 'Glass / acrylic / wood',
        variations: ['Seed', 'Bugle', 'Faceted', 'Pearl', 'Custom color'],
        applications: ['Eveningwear', 'Bridal', 'Accessories', 'Crafts'],
      },
      {
        name: 'Sequins',
        description:
          'High-shine sequins delivering glamorous sparkle for statement and eveningwear pieces.',
        material: 'PET / PVC',
        variations: ['Cup', 'Flat', 'Iridescent', 'Matte', 'Custom color'],
        applications: ['Eveningwear', 'Dancewear', 'Costume', 'Fashion'],
      },
      {
        name: 'Rhinestones',
        description:
          'Brilliant-cut rhinestones in hotfix and sew-on formats for luxurious sparkle and shine.',
        material: 'Glass / acrylic / resin',
        variations: ['Hotfix', 'Sew-on', 'Claw-set', 'Multiple sizes'],
        applications: ['Eveningwear', 'Bridal', 'Dancewear', 'Accessories'],
      },
      {
        name: 'Pearls',
        description:
          'Imitation and shell pearls offering a refined, timeless decorative accent.',
        material: 'ABS / glass / shell',
        variations: ['Round', 'Half-pearl', 'Sew-on', 'Hotfix'],
        applications: ['Bridal', 'Eveningwear', 'Lingerie', 'Accessories'],
      },
      {
        name: 'Tassels',
        description:
          'Decorative tassels adding movement and a finishing flourish to garments and accessories.',
        material: 'Polyester / cotton / silk-look',
        variations: ['Thread', 'Beaded', 'Leather-look', 'Custom color'],
        applications: ['Fashion', 'Bags', 'Footwear', 'Home decor'],
      },
      {
        name: 'Charm',
        description:
          'Branded and decorative metal charms that personalize zippers, straps, and accessories.',
        material: 'Zinc alloy / enamel',
        variations: ['Logo', 'Enamel-fill', 'Plated', 'Custom shape'],
        applications: ['Bags', 'Zipper pulls', 'Fashion', 'Accessories'],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 9. GARMENT COMPONENTS
  // -------------------------------------------------------------------------
  {
    slug: 'components',
    name: 'Garment Components',
    tagline: 'Structure & Support',
    heroTitle: 'Garment Components Collection',
    heroSubtitle:
      'The internal structure that shapes a garment — interlinings, shoulder pads, and boning engineered for form, support, and a flawless finish.',
    blurb: 'Interlining, shoulder pads & boning for structure and support.',
    icon: 'Layers',
    variants: [
      {
        name: 'Interlining',
        description:
          'Fusible and sew-in interlinings that add body, structure, and stability to collars, cuffs, and fronts.',
        material: 'Woven / non-woven / knit',
        variations: ['Fusible', 'Sew-in', 'Woven', 'Non-woven', 'Multiple weights'],
        applications: ['Collars', 'Cuffs', 'Waistbands', 'Tailoring'],
      },
      {
        name: 'Shoulder Pad',
        description:
          'Molded and layered shoulder pads that define silhouette and structure across tailoring and fashion.',
        material: 'Foam / fiber / molded',
        variations: ['Set-in', 'Raglan', 'Molded', 'Covered', 'Multiple sizes'],
        applications: ['Jackets', 'Coats', 'Blazers', 'Dresses'],
      },
      {
        name: 'Boning',
        description:
          'Flexible and rigid boning that provides shaping and support for structured and corseted garments.',
        material: 'Polyester / spiral steel / spring steel',
        variations: ['Plastic', 'Spiral steel', 'Spring steel', 'Channel'],
        applications: ['Corsetry', 'Bridal', 'Bustiers', 'Eveningwear'],
      },
      {
        name: 'Mesh',
        description:
          'Breathable mesh fabric designed to provide ventilation, flexibility, and lightweight comfort for a wide range of garment applications.',
        material: 'Polyester / Nylon',
        variations: ['Power mesh', 'Soft mesh', 'Hexagonal mesh', 'Spacer mesh'],
        applications: ['Sportswear', 'Activewear', 'Lingerie', 'Fashion apparel'],
      },
      {
        name: 'Pocketing',
        description:
          'Durable pocketing fabric specifically designed for garment pockets, offering strength, comfort, and long-lasting performance.',
        material: 'Polyester / Cotton / Polycotton',
        variations: ['Plain pocketing', 'Twill pocketing', 'Printed pocketing', 'Lightweight pocketing'],
        applications: ['Jeans', 'Trousers', 'Jackets', 'Uniforms'],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 10. PACKAGING ACCESSORIES
  // -------------------------------------------------------------------------
  {
    slug: 'packaging',
    name: 'Packaging',
    tagline: 'Finishing & Packing',
    heroTitle: 'Packaging Accessories Collection',
    heroSubtitle:
      'Complete your product presentation with premium packaging accessories — bags, tags, bands, and packing essentials that protect and present every garment.',
    blurb: 'Poly bags, tissue, bands, pins, hangers & carton boxes.',
    icon: 'Package',
    variants: [
      {
        name: 'Poly Bag',
        description:
          'Protective polybags that keep garments clean and presentation-ready through transit and retail.',
        material: 'LDPE / recycled PE',
        variations: ['Self-seal', 'Resealable', 'Printed', 'Frosted', 'Biodegradable'],
        applications: ['Garment packing', 'Retail', 'E-commerce', 'Storage'],
        gallery: Array.from({ length: 1 }, (_, i) => ({
          label: `Design ${i + 1}`,
          image: '/images/Packaging/Polybag.webp',
        })),
      },
      {
        name: 'Tissue Paper',
        description:
          'Premium tissue paper that adds a luxurious unboxing layer while protecting delicate garments.',
        material: 'Acid-free / recycled paper',
        variations: ['Plain', 'Printed', 'Colored', 'Custom logo'],
        applications: ['Luxury packing', 'Gifting', 'E-commerce', 'Retail'],
        gallery: Array.from({ length: 1 }, (_, i) => ({
          label: `Design ${i + 1}`,
          image: '/images/Packaging/Tissue Paper.webp',
        })),
      },
      {
        name: 'Collar Band',
        description:
          'Shaped bands that hold shirt collars crisp and structured for retail presentation.',
        material: 'Card / plastic',
        variations: ['Card', 'Plastic', 'Printed', 'Custom size'],
        applications: ['Shirt packing', 'Retail display', 'Presentation'],
        gallery: Array.from({ length: 1 }, (_, i) => ({
          label: `Design ${i + 1}`,
          image: '/images/Packaging/Collar Band.webp',
        })),
      },
      {
        name: 'Neck Band',
        description:
          'Neckboards and bands that maintain neckline shape and a clean folded presentation.',
        material: 'Card / board',
        variations: ['Standard', 'Printed', 'Custom shape', 'Recycled'],
        applications: ['Shirt packing', 'Folding', 'Retail display'],
        gallery: Array.from({ length: 1 }, (_, i) => ({
          label: `Design ${i + 1}`,
          image: '/images/Packaging/Neck Band.webp',
        })),
      },
      {
        name: 'Cardboard',
        description:
          'Support boards and inserts that keep folded garments flat, structured, and presentation-ready.',
        material: 'Corrugated / solid board',
        variations: ['Insert', 'Backer', 'Printed', 'Custom cut'],
        applications: ['Folding', 'Packing', 'Protection', 'Display'],
        gallery: Array.from({ length: 1 }, (_, i) => ({
          label: `Design ${i + 1}`,
          image: '/images/Packaging/Cardboard.webp',
        })),
      },
      {
        name: 'Clip',
        description:
          'Garment clips that hold folds, sets, and accessories neatly in place during packing and display.',
        material: 'Plastic / metal',
        variations: ['Plastic', 'Metal', 'Printed', 'Custom size'],
        applications: ['Packing', 'Sets', 'Display', 'Accessories'],
        gallery: Array.from({ length: 1 }, (_, i) => ({
          label: `Design ${i + 1}`,
          image: '/images/Packaging/Clip.webp',
        })),
      },
      {
        name: 'Tag Pin',
        description:
          'Plastic tag pins and barbs that securely attach hang tags and labels at point of sale.',
        material: 'Nylon / polypropylene',
        variations: ['Standard', 'Fine', 'Loop pin', 'Multiple lengths'],
        applications: ['Hang tags', 'Labels', 'Retail', 'Tagging'],
        gallery: Array.from({ length: 1 }, (_, i) => ({
          label: `Design ${i + 1}`,
          image: '/images/Packaging/Tag Pin.webp',
        })),
      },
      {
        name: 'Garment Hanger',
        description:
          'Retail and shipping hangers that present garments cleanly and consistently on the rail.',
        material: 'Plastic / wood / metal',
        variations: ['Top', 'Bottom', 'Combo', 'Branded', 'Recycled'],
        applications: ['Retail display', 'Shipping', 'Presentation'],
        gallery: Array.from({ length: 1 }, (_, i) => ({
          label: `Design ${i + 1}`,
          image: '/images/Packaging/Garment Hanger.webp',
        })),
      },
      {
        name: 'Carton Box',
        description:
          'Sturdy corrugated cartons engineered for safe storage and export shipping of finished garments.',
        material: 'Corrugated board',
        variations: ['Single-wall', 'Double-wall', 'Printed', 'Custom size'],
        applications: ['Export', 'Shipping', 'Storage', 'Logistics'],
        gallery: Array.from({ length: 1 }, (_, i) => ({
          label: `Design ${i + 1}`,
          image: '/images/Packaging/Carton Boxes.webp',
        })),
      },
    ],
  },
]

export const getCategory = (slug: string): Category | undefined =>
  categories.find((c) => c.slug === slug)

export const COMPANY = {
  name: 'PT BTX Garment Trims Indonesia',
  shortName: 'BTX Garment Trims',
  tagline: 'Premium Garment Trims Solutions',
  email: 'info@btxgarmenttrims.co.id',
  phone: '+62 21 1234 5678',
  address: 'Kawasan Industri, Jakarta, Indonesia',
  founded: 2005,
}
