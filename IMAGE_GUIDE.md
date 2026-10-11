# Dijarhs Delights — Image Replacement Guide

The current design, menu prices, and WhatsApp order links are preserved. Product images now point to individual local folders so you can add your own photos.

## Easiest method (no code editing)

For each product, open its folder inside `assets/products/`, upload your photo, and name the file exactly `image.jpg`. The code already points to that location. Commit/save the changes and refresh the site.

Use a real JPG file; do not just rename a PNG to `.jpg` without converting it. Square or landscape photos work best.

## Product image folder map

| Product | Exact image path | Code file |
|---|---|---|
| Plain cupcakes | `assets/products/plain-cupcakes/image.jpg` | `menu.html` |
| Frosted cupcakes | `assets/products/frosted-cupcakes/image.jpg` | `menu.html` |
| Full cakes | `assets/products/full-cakes/image.jpg` | `menu.html` |
| Tube cake | `assets/products/tube-cake/image.jpg` | `menu.html` |
| Cake slice | `assets/products/cake-slice/image.jpg` | `menu.html` |
| Cake parfait | `assets/products/cake-parfait/image.jpg` | `menu.html` |
| Foil cake | `assets/products/foil-cake/image.jpg` | `menu.html` |
| Bento cake | `assets/products/bento-cake/image.jpg` | `menu.html` |
| Plain doughnuts | `assets/products/plain-doughnuts/image.jpg` | `menu.html` |
| Glazed doughnuts | `assets/products/glazed-doughnuts/image.jpg` | `menu.html` |
| Filled doughnuts | `assets/products/filled-doughnuts/image.jpg` | `menu.html` |
| Milky doughnuts | `assets/products/milky-doughnuts/image.jpg` | `menu.html` |
| Plain cinnamon rolls | `assets/products/plain-cinnamon-rolls/image.jpg` | `menu.html` |
| Glazed cinnamon rolls | `assets/products/glazed-cinnamon-rolls/image.jpg` | `menu.html` |
| Corndogs | `assets/products/corndogs/image.jpg` | `menu.html` |
| Puff puff | `assets/products/puff-puff/image.jpg` | `menu.html` |
| Awara | `assets/products/awara/image.jpg` | `menu.html` |
| Meat pie | `assets/products/meat-pie/image.jpg` | `menu.html` |
| Samosa | `assets/products/samosa/image.jpg` | `menu.html` |
| Spring rolls | `assets/products/spring-rolls/image.jpg` | `menu.html` |
| Plain brownies | `assets/products/plain-brownies/image.jpg` | `menu.html` |
| Glazed brownies | `assets/products/glazed-brownies/image.jpg` | `menu.html` |
| Fruity zobo | `assets/products/fruity-zobo/image.jpg` | `menu.html` |
| Ginger-lemon | `assets/products/ginger-lemon/image.jpg` | `menu.html` |
| Tamarind | `assets/products/tamarind-drink/image.jpg` | `menu.html` |
| Lemonade | `assets/products/lemonade/image.jpg` | `menu.html` |
| Tigernut | `assets/products/tigernut-drink/image.jpg` | `menu.html` |

## Homepage and story images

| Area | Exact image path | Code location |
|---|---|---|
| Homepage hero cake | `assets/products/hero-cake/image.jpg` | `styles.css` — search for `.hero-photo` |
| Homepage doughnut card | `assets/products/plain-doughnuts/image.jpg` | `index.html` — signature cards |
| Homepage cake/cupcake card | `assets/products/frosted-cupcakes/image.jpg` | `index.html` — signature cards |
| Homepage cinnamon roll card | `assets/products/plain-cinnamon-rolls/image.jpg` | `index.html` — signature cards |
| Homepage snacks card/collage | `assets/products/snacks-small-chops/image.jpg` | `index.html` — signature cards |
| Homepage drinks card | `assets/products/homemade-drinks/image.jpg` | `index.html` — signature cards |
| Our Story cupcake photo | `assets/products/story-cupcakes/image.jpg` | `story.html` — `.story-photo` |

## If you want to use a different filename

In the relevant code file, search for the current path, for example:

```html
<div class="menu-img" role="img" aria-label="Awara"></div>
```

The image path is set in the surrounding card's inline style in `menu.html`, like this:

```html
<div class="menu-img" style="background-image:url('assets/products/awara/image.jpg')"></div>
```

Change only the path inside `url('...')` if you use a different filename or extension. For the homepage hero, edit the `background-image` URL in the `.hero-photo` rule in `styles.css`. For the story photo, edit the `background-image` URL on the `.story-photo` element in `story.html`.

## GitHub upload reminder

Keep `index.html`, `menu.html`, `story.html`, `styles.css`, and `script.js` in the repository root. Upload the entire `assets/products/` folder structure too. You can upload photos gradually; each item will show its photo once the expected image file is in place.
