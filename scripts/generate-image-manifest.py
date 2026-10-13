from __future__ import annotations
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
IMAGE_ROOT = ROOT / "images" / "recipes"
OUT = ROOT / "assets" / "js" / "image-manifest.json"
EXTS = {".jpg", ".jpeg"}
STEP_RE = re.compile(r"^step-(\d+)-(\d+)(\.(?:jpg|jpeg))$", re.IGNORECASE)

def rel(path: Path) -> str:
    return path.relative_to(ROOT).as_posix()

manifest = {}
if IMAGE_ROOT.exists():
    for folder in sorted(p for p in IMAGE_ROOT.iterdir() if p.is_dir()):
        slug = folder.name
        entry = {"hero": None, "recipe": None, "steps": {}}
        files = [p for p in folder.iterdir() if p.is_file() and p.suffix.lower() in EXTS]
        for p in sorted(files, key=lambda x: x.name):
            stem = p.stem.lower()
            if stem == "hero" and entry["hero"] is None:
                entry["hero"] = rel(p)
                continue
            if stem == "recipe" and entry["recipe"] is None:
                entry["recipe"] = rel(p)
                continue
            m = STEP_RE.match(p.name)
            if m:
                step = str(int(m.group(1))).zfill(2)
                order = int(m.group(2))
                entry["steps"].setdefault(step, []).append((order, rel(p)))
        for step, items in list(entry["steps"].items()):
            entry["steps"][step] = [path for _, path in sorted(items, key=lambda x: x[0])]
        if not entry["hero"] and not entry["recipe"] and not entry["steps"]:
            continue
        manifest[slug] = entry

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
