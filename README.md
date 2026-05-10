# Personal CV (GitHub Pages)

Bilingual personal résumé site: **Arabic** (`index.html`) and **English** (`index-en.html`), built with HTML, Tailwind CSS, and Chart.js.

## Live site

| Language | URL |
|----------|-----|
| Arabic (default) | [https://mohaziz2002.github.io/my_cv/](https://mohaziz2002.github.io/my_cv/) |
| English | [https://mohaziz2002.github.io/my_cv/index-en.html](https://mohaziz2002.github.io/my_cv/index-en.html) |

## Repository layout

```
my_cv/
├── index.html          # Arabic CV (main entry for Pages)
├── index-en.html       # English CV
└── README.md           # This file (copy to repo root when you publish)
```

Optional helper (not required at runtime):

- `snippet-link-in-arabic-page.html` — HTML snippets to paste into `index.html` for an **English** link in the nav and mobile menu.

## Tech stack

- [Tailwind CSS](https://tailwindcss.com/) (CDN)
- [Chart.js](https://www.chartjs.org/) (skills doughnut chart)
- [Google Fonts](https://fonts.google.com/) — Cairo (Arabic), Inter (English)

## Deploy on GitHub Pages

1. Push `index.html` and `index-en.html` to the **root** of the repository (usually `main`).
2. In the repo: **Settings → Pages → Build and deployment → Source**: *Deploy from a branch*.
3. Choose branch **`main`** and folder **`/ (root)`**, then save.
4. After a minute, the site is available at `https://<username>.github.io/<repo>/`.

## Cross-links between languages

- `index-en.html` links back to **`index.html`** (“العربية”).
- Add links from Arabic to English using the snippets in `snippet-link-in-arabic-page.html`.

## Local preview

Open `index.html` or `index-en.html` in a browser, or serve the folder with any static server.

## Author

**Mohammed Zaki** — Computer Engineering student; volunteer and student-union roles as listed on the site.

---

### ملخص عربي سريع

- انسخ محتويات مجلد `my-cv-english-for-github` إلى جذر مستودعك على GitHub.
- ضع `index-en.html` بجانب `index.html`.
- أضف رابط **English** من ملف `snippet-link-in-arabic-page.html` داخل الصفحة العربية.
