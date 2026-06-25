# ✦ Falak Tak — how to edit & deploy

Everything is **folder-driven**. You almost never touch the code.

---

## 1. Add / remove photos  (the automatic part)

Each section reads from its own folder:

| Folder         | Section on the site                          |
|----------------|----------------------------------------------|
| `pyaru/`       | "my pyaru · just you"  (the coverflow)       |
| `paglus/`      | "the paglus · our nonsense" (polaroid wall)  |
| `adventures/`  | "adventures · places we went" (moving strip) |
| `kiss/`        | "kissieeees · 💜" (fading photo)             |
| `favs/`        | "favs · the best of us" (masonry grid)       |
| `Music/`       | the songs in the vinyl player                |
| `Video/`       | the secret scratch-card video                |

**To add pictures:** drop them into the folder. Then **double-click `build-manifest.bat`** once.
That re-scans every folder and rewrites `manifest.js`. Refresh the page — done.

(If the `.bat` doesn't run, open a terminal here and run `node build-manifest.js`,
 or `python build-manifest.py`. Both do the same thing.)

You can also just hand-edit `manifest.js` — it's a plain list of file paths.

---

## 2. Edit words & captions  →  open **`config.js`**

`config.js` is the only file with words in it. Open it in any text editor.
It's labelled top to bottom. Highlights:

- `herName`, `age` — her name and the number that forms in the stars.
- `memories[]` — the five "our year" chapters (photo + date + title + body).
- `letter[]` — **rewrite this in your own voice.** Each line in quotes is a paragraph.
- `tracks[]` — song order, titles and the little icons in the player.
- `captions{ }` — a per-photo caption. The key is the exact file path, e.g.
  `"favs/PXL_xxxx.jpg": "the night it all felt easy"`.
  Any photo without one falls back to the section's default line in `galleryDefaults`.

To caption a NEW fav photo: copy its path from `manifest.js`, paste it as a key in `captions`, add your line.

---

## 3. The secret video

Drop your singing video (any name, `.mp4`) into `Video/`, run the generator, refresh.
It hides behind the scratch ticket at the very end.

---

## 4. Deploy — keep it PRIVATE

These are personal photos and a love letter, so **don't** put it on public GitHub Pages.

Easiest private option: **Netlify Drop**
1. Go to https://app.netlify.com/drop
2. Drag this whole folder onto the page.
3. You get a private link (e.g. `falak-tak-manniii.netlify.app`) to send her.

That's it. Falak tak. 💜
