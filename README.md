# MIDNIGHT RECIPES

Static GitHub Pages site based on the supplied MIDNIGHT RECIPES prototype. The existing visual language, layout, colors, typography, header, menu, overlays, recipe-card treatment, Cook Mode and responsive direction are retained; the development-only view controls are removed from production.

## Recipe data
Add one object to `assets/js/data.js`. Use:

- `slug`
- `title`
- `source`
- `cuisine`
- `course`
- `meal` (kept for compatibility)
- `categories`
- `ingredientCategories`
- `timeStamp`
- `dateAdded`
- `ingredients`
- `ingredientFile`
- `heroImage`
- `cardImage`
- `stepImages`

`ingredients` are the ingredients actually used by the recipe. `ingredientFile` is separate supporting information about ingredients and may contain only the fields that are useful.

### Ingredient structure
```js
ingredients: [
  { amount: 200, unit: 'g', item: 'graham crackers' },
  { amount: 80, unit: 'g', item: 'butter' },
  { amount: 4, unit: '', item: 'egg yolks' },
  { group: 'Optional finish' }
]
```

## Photo System
```text
heroImage = Recipe page Hero, 2:3
cardImage = Recipe cards, 1:1
stepImages = optional per-step photo arrays, 1:1
Each step can also define `photos: []` with 1–3 image paths; when both are present, the step-level `photos` value takes priority.
```

Photo naming:
```text
[recipe-slug]-hero.jpg
[recipe-slug]-card.jpg
[recipe-slug]-step-01.jpg
[recipe-slug]-step-02.jpg
[recipe-slug]-step-03.jpg
For multiple photos in one step, use any clear filename convention and list them in that step's `photos` array.
```

Store them in `images/recipes/`.

Fallback rules:
- Hero: `heroImage` → current placeholder if missing/unavailable.
- Card: `cardImage` → `heroImage` → current placeholder.
- Step: `stepImages` → show the photo; if there is no Step photo, do not show a placeholder.

Recipe cards use `aspect-ratio: 1 / 1; object-fit: cover`. Recipe Hero uses `aspect-ratio: 2 / 3; object-fit: cover`. Step photos use `aspect-ratio: 1 / 1; object-fit: cover`.

## Automatic classification
A recipe is entered once in `data.js`. `source`, `course`/`meal`, `cuisine`, `ingredientCategories`, and `categories` drive View All, By Source, By Course, By Cuisine, By Ingredient, The Usuals and Search automatically. Latest Recipes sorts by `dateAdded` descending.

## Search
Search crosses title, source, cuisine, meal, categories, description and ingredient metadata.

## Cook Mode
Cook Mode keeps the existing large, readable presentation and requests the Screen Wake Lock API where supported. Unsupported browsers simply continue without Wake Lock; the site does not depend on the API.

## Quantity scaling / units
Ingredients use numeric `amount` + `unit` data. `×0.5`, `1`, and `×2` scale the quantity. Metric / US customary toggles convert common mass, volume and temperature units and round toward practical kitchen values.

## Reviews
The five-star review UI supports a star-only submission, optional comment and optional name. Without an external backend, reviews are stored only in the current browser's local storage and are explicitly not presented as shared/public reviews. The UI is isolated so a future Supabase or other backend can replace the storage layer without changing recipe data.

## Navigation
The production navigation remains:
```text
RECIPES
    View All
    By Source
    By Course
    By Cuisine
    By Ingredient
    The Usuals

ABOUT
CONTACT
```

Source / course / cuisine / ingredient menu entries are clickable filters. Cuisine is displayed in the requested regional hierarchy.

Recipe timestamps use `timeStamp`, for example `12:38 AM`, and render as `📍 12:38 AM · TORONTO`.
No development view switcher is included in production.

## Contact
`from.midnightkitchen@gmail.com` is linked with `mailto:`.

## GitHub Pages
Repository: `Midnight-Recipes`
Expected site base:
`https://midnightrecipes.github.io/Midnight-Recipes/`

All internal links and asset paths are generated relative to the current page depth so nested pages do not depend on a domain-root `/` path.

Recommended check after publishing:
- Home
- Recipes / View All
- By Source / Cuisine / Meal
- The Usuals
- About / Contact
- Individual Recipe
- Search
- Cook Mode / Wake Lock fallback
- Quantity and unit toggles
- Share / Print / Save
- Review UI
- Mobile widths and no horizontal overflow

The supplied source did not include the actual external recipe-photo files or the original separate 15-file repository. Therefore this package preserves the supplied photo placeholders and will immediately use any matching files added under `images/recipes/` according to the rules above; it does not fabricate recipe photography.


## Latest targeted update
- Menu hierarchy: RECIPES accordion with View All / By Source / By Course / By Cuisine / By Ingredient / The Usuals; ABOUT and CONTACT remain independent top-level items.
- Source names are single-source data values, including `Grocery Store Find` and `Midnight Experiment`.
- Cuisine groups and individual cuisines in the sidebar are generated only when matching recipes exist.
- Ingredient filters are generated from ingredients actually present in Recipe data.
- The Usuals is an independent collection driven by `usualsCategory`; legacy `BUILDING BLOCKS` UI is removed.
- Recipe Source / Cuisine / Course links use the same category-filter pages as the sidebar.
- Ingredient File hides the old `Ingredient name` placeholder.
- Cook Mode only requests Screen Wake Lock when supported; it does not change recipe layout or enlarge steps.
- Share / Print / Save are compact, inline actions.
- `timeStamp`, `heroImage`, and per-step `stepPhotos` remain data-driven.
- Back to Top and Recipe-page wave decoration are removed.


## v108 image workflow
- `hero.jpg` is the single recipe hero/card image source. `cardImage` is not used for cards.
- `recipe.jpg` is used for the recipe photo area when supplied.
- Step images use `step-01-01.jpg` through `step-04-04.jpg`; each step supports 0–4 images.
- Image files may be uploaded directly to GitHub under `images/recipes/<recipe-slug>/`.
- The existing GitHub Action regenerates `assets/js/image-manifest.json` automatically after image uploads; the manifest is a generated cache, not a manually maintained source of truth.
- Existing `.JPG`/`.JPEG` files are recognized by the manifest generator.
- Source values are exactly: Restaurant, Grocery Store Find, Movie & TV, Book, Travel, Family & Tradition, Memory, Internet Find, Midnight Experiment.
- The Usuals is a separate Recipes category, not a Source.
- Navigation: View All, By Source, By Course, By Cuisine, The Usuals.
