# The Daily Wrap — Your Website

This folder contains your entire website. It has three files:

| File | What it is | Does it change? |
|------|-----------|-----------------|
| `index.html` | The website itself — design, layout, colours, logic | Almost never |
| `data.js` | All the content — numbers, headlines, links, notes | **Every day** |
| `README.md` | This instruction file | No |

**The golden rule:** daily updates only ever touch `data.js`. The website
reads it like a newspaper reads its day's copy. Change the data, the site
changes. No coding needed.

---

## ONE-TIME SETUP: Put your website on the internet (free, ~10 minutes)

You will use **GitHub Pages** — free hosting from GitHub, the website you
already have an account on.

### Step 1 — Create a new repository
1. Go to **github.com** and log in.
2. Click the **+** icon (top-right corner) → **New repository**.
3. Repository name: type exactly `aalok-daily-wrap` (anything works, but keep it simple).
4. Leave everything else as default — **do NOT** add a README, don't change anything.
5. Click the green **Create repository** button.

### Step 2 — Upload these 3 files
1. On the page that appears after creating, click **uploading an existing file**.
2. Drag `index.html`, `data.js`, and this `README.md` from your computer into the browser window.
3. Scroll down, click the green **Commit changes** button.

### Step 3 — Turn on the website
1. In your repository, click **Settings** (top bar of the repo page).
2. In the left menu, click **Pages**.
3. Under "Build and deployment", find **Source**, and select **Deploy from a branch**.
4. Branch: `main`, Folder: `/ (root)`. Click **Save**.
5. Wait 1–3 minutes. Refresh the page.

Your website is now live at:
```
https://YOUR-USERNAME.github.io/aalok-daily-wrap/
```
(Replace YOUR-USERNAME with your GitHub username.) Write this address down — this is your website link. Share it with anyone.

---

## DAILY UPDATES: The 2-minute routine

1. Ask your assistant (in the chat): *"Update the Daily Wrap with today's market data."*
2. The assistant gives you a fresh `data.js` file — download it.
3. Go to your repository on GitHub → click on `data.js` in the file list.
4. Click the **pencil icon** (top-right of the file view) to edit.
5. Delete everything in the file, paste in the new contents from the downloaded file.
6. Click **Commit changes**.
7. Refresh your website after a minute — it's updated. Done.

*(Alternative for step 3–6: use the "Add file → Upload files" button and upload the new `data.js` — GitHub will replace the old one.)*

---

## Want to change the site's name?

Open `data.js` and edit the top few lines:
```
site: {
  name: "The Daily Wrap",
  tagline: "Indian markets, explained in plain English",
},
```
Change the text inside the quotes, commit, done. You can also change the name that appears on the browser tab by editing `<title>` in `index.html`.

---

## Notes

- The site works on phones, tablets and laptops automatically.
- It supports dark mode (follows the reader's device setting).
- Total cost of everything: ₹0. Forever.
- The site is "static" — it's like a printed newspaper that gets reprinted daily, not a live ticker. That's why updates happen once a day. If you ever want live prices, that's a bigger project (ask the assistant when you're ready).
