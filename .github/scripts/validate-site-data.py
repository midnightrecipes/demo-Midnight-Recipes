from pathlib import Path
import re, sys

ROOT = Path(__file__).resolve().parents[2]
DATA = ROOT / 'assets/js/data.js'
text = DATA.read_text(encoding='utf-8')
errors = []

# Official Source values for By Source.
required_sources = [
    'Restaurant', 'Grocery Store Find', 'Movie & TV', 'Book', 'Travel',
    'Family & Tradition', 'Memory', 'Internet Find', 'Midnight Experiment'
]
match = re.search(r"window\.MIDNIGHT_SOURCES\s*=\s*\[(.*?)\];", text, re.S)
if not match:
    errors.append('MIDNIGHT_SOURCES is missing.')
else:
    values = re.findall(r"'([^']+)'", match.group(1))
    if values != required_sources:
        errors.append(f'MIDNIGHT_SOURCES mismatch: {values}')

# Legacy image properties must not return; images are derived from recipe slug.
for name in ('heroImage', 'recipeImage', 'cardImage', 'stepImages'):
    if re.search(rf'\b{name}\s*:', text):
        errors.append(f'Legacy image property remains in data.js: {name}')

# No more than four physical step-image slots are supported per step by convention.
image_root = ROOT / 'images/recipes'
if image_root.exists():
    rx = re.compile(r'^step-(\d+)-(\d+)\.(jpg|jpeg)$', re.I)
    for folder in image_root.iterdir():
        if not folder.is_dir():
            continue
        counts = {}
        for f in folder.iterdir():
            m = rx.match(f.name)
            if m:
                step = int(m.group(1)); order = int(m.group(2))
                counts.setdefault(step, set()).add(order)
        for step, orders in counts.items():
            if len(orders) > 4 or max(orders, default=0) > 4:
                errors.append(f'{folder.name}: step {step:02d} has more than 4 photo slots.')

if errors:
    print('\n'.join('ERROR: ' + e for e in errors))
    sys.exit(1)
print('MIDNIGHT RECIPES validation passed.')
