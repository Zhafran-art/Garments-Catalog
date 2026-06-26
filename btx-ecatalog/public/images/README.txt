Product image folder
=====================

Drop your real product photography here, organised by category, e.g.:

  public/images/
    zippers/metal-zipper.jpg
    buttons/resin-button.jpg
    labels/woven-label.jpg
    ...

Then reference them from src/data/products.ts by setting the optional
`image` field on a category or product variant, for example:

  {
    name: 'Metal Zippers',
    image: '/images/zippers/metal-zipper.jpg',
    ...
  }

Until an image is provided, the UI automatically shows a branded purple
placeholder, so the catalog always looks complete. Recommended aspect
ratio for product images is 4:3.
